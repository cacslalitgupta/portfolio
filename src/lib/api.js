const API = import.meta.env.VITE_API_URL || "/api";
const TOKEN_KEY = "ca_admin_token";

export const getToken = () => localStorage.getItem(TOKEN_KEY) || "";
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

async function request(path, { method = "GET", body, auth = false } = {}) {
  // Headers are built explicitly so Content-Type is never lost when Authorization is added.
  const headers = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (auth) headers.Authorization = `Bearer ${getToken()}`;

  let res;
  try {
    res = await fetch(API + path, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined });
  } catch {
    throw new Error("Cannot reach the server. Is the API running?");
  }
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (res.status === 401 && auth) {
    clearToken();
    window.dispatchEvent(new Event("ca:logout"));
  }
  if (!res.ok) throw new Error(data.message || `Request failed (${res.status})`);
  return data;
}

const a = (path, opts = {}) => request("/admin" + path, { ...opts, auth: true });

export const api = {
  site: () => request("/site"),
  captcha: () => request("/captcha"),
  contact: (body) => request("/contact", { method: "POST", body }),

  login: (body) => request("/admin/login", { method: "POST", body }),
  dashboard: () => a("/dashboard"),
  saveSettings: (values) => a("/settings", { method: "PUT", body: { values } }),

  // generic CRUD for services | testimonials | faqs
  list: (col) => a(`/${col}`),
  create: (col, body) => a(`/${col}`, { method: "POST", body }),
  update: (col, id, body) => a(`/${col}/${id}`, { method: "PUT", body }),
  remove: (col, id) => a(`/${col}/${id}`, { method: "DELETE" }),

  messages: () => a("/messages"),
  setMessageStatus: (id, status) => a(`/messages/${id}`, { method: "PATCH", body: { status } }),
  deleteMessage: (id) => a(`/messages/${id}`, { method: "DELETE" })
};

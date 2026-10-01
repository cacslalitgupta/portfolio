import { createRoot } from "react-dom/client";
import "./index.css";
import { SiteProvider, useSite } from "./lib/site";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function Splash({ error, retry }) {
  return (
    <div className="grid min-h-screen place-items-center p-6 text-center">
      {error ? (
        <div className="card max-w-sm p-6">
          <h1 className="text-xl font-bold">Can’t load the site</h1>
          <p className="my-2 text-sm text-muted">{error}</p>
          <button className="btn btn-primary mt-2" onClick={retry}>Try again</button>
        </div>
      ) : (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-brand" aria-label="Loading" />
      )}
    </div>
  );
}

function App() {
  const { site, error, reload } = useSite();
  const isAdmin = location.pathname.startsWith("/admin");
  if (!site) return <Splash error={error} retry={reload} />;
  return isAdmin ? <Admin /> : <Home site={site} />;
}

createRoot(document.getElementById("root")).render(
  <SiteProvider><App /></SiteProvider>
);
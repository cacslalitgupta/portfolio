const WaIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
  <path d="M27.202 4.786A15.7 15.7 0 0 0 15.988 0C7.172 0 .014 7.158.006 15.975c0 2.82.738 5.568 2.14 8l-2.146 7.84 8.022-2.104a15.86 15.86 0 0 0 7.957 2.138h.007c8.813 0 15.973-7.16 15.98-15.98a15.8 15.8 0 0 0-4.764-11.083zM15.988 29.245h-.007a13.16 13.16 0 0 1-6.716-1.841l-.482-.288-4.992 1.31 1.332-4.869-.314-.502a13.11 13.11 0 0 1-2.015-7.078c.006-7.256 5.918-13.167 13.187-13.167 3.52 0 6.828 1.37 9.32 3.864a13.11 13.11 0 0 1 3.858 9.324c-.007 7.279-5.922 13.19-13.171 13.19zm7.233-9.87c-.396-.2-2.342-1.156-2.708-1.29-.364-.132-.63-.2-.894.2-.264.394-1.026 1.29-1.258 1.556-.228.264-.46.294-.856.1a10.79 10.79 0 0 1-3.184-1.97 11.9 11.9 0 0 1-2.206-2.744c-.228-.396-.024-.61.174-.808.18-.178.396-.462.594-.694.198-.23.264-.396.396-.66.132-.264.066-.496-.032-.694-.1-.198-.894-2.152-1.226-2.943-.32-.777-.648-.67-.894-.682h-.764a1.47 1.47 0 0 0-1.058.496c-.364.396-1.388 1.356-1.388 3.31s1.42 3.834 1.62 4.1c.198.264 2.79 4.262 6.766 5.98.946.41 1.684.654 2.26.838.95.304 1.81.26 2.492.16.76-.114 2.342-.958 2.674-1.884.33-.924.33-1.718.23-1.884-.1-.164-.364-.264-.76-.462z" />
</svg>
);

export default function WhatsAppButton({ number, firm }) {
  const digits = String(number || "").replace(/\D/g, "");
  if (!digits) return null;
  const text = encodeURIComponent(`Hello${firm ? " " + firm : ""}, I'd like to know more about your services.`);

  return (
    <a
      href={`https://wa.me/${digits}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* <span className="wa-tooltip pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-surface px-3 py-1.5 text-xs font-bold text-ink opacity-0 shadow-card ring-1 ring-line transition group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span> */}
      <span className="relative grid h-14 w-14 place-items-center sm:h-16 sm:w-16">
        <span className="wa-wave" />
        <span className="wa-wave" style={{ animationDelay: ".8s" }} />
        <span className="wa-wave" style={{ animationDelay: "1.6s" }} />
        <span className="relative grid h-full w-full place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition group-hover:scale-110 group-active:scale-95">
          <WaIcon className="h-8 w-8 sm:h-9 sm:w-9" />
        </span>
      </span>
    </a>
  );
}
export default function BottomNav({ tab = "home", setTab }) {
  const items = [
    { id: "home",     label: "Home",     icon: "🏠" },
    { id: "requests", label: "Requests", icon: "📍" },
    { id: "post",     label: "Create",   icon: "➕" },
    { id: "wallet",   label: "Wallet",   icon: "🪙" },
    { id: "me",       label: "Settings", icon: "⚙️" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-sm">
      <div className="max-w-md mx-auto pb-[env(safe-area-inset-bottom)]">
        <ul className="flex">
          {items.map((it) => {
            const active = tab === it.id;
            return (
              <li key={it.id} className="flex-1">
                <button
                  onClick={() => setTab?.(it.id)}
                  aria-label={it.label}
                  aria-current={active ? "page" : undefined}
                  className={`w-full h-14 flex flex-col items-center justify-center gap-0.5
                              text-[11px] ${active ? "text-indigo-600" : "text-slate-600"}
                              hover:bg-slate-50`}
                >
                  <span className="text-lg leading-none">{it.icon}</span>
                  <span className="leading-none">{it.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

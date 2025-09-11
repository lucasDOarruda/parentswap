// src/components/MarketingNav.js
export default function MarketingNav({ onNav }) {
  const go = (tab) => onNav?.(tab);

  const items = [
    { id: "post", label: "Create", icon: "➕" },
    { id: "wallet", label: "Wallet", icon: "🪙" },
    { id: "messages", label: "Messages", icon: "💬" },
    { id: "me", label: "Settings", icon: "⚙️" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t">
      <div className="max-w-md mx-auto">
        <ul className="grid grid-cols-4">
          {items.map((it) => (
            <li key={it.id} className="text-center">
              <button
                onClick={() => go(it.id)}
                className="w-full py-2.5 flex flex-col items-center gap-1 text-slate-700 hover:bg-slate-50"
                aria-label={it.label}
              >
                <span className="text-xl leading-none">{it.icon}</span>
                <span className="text-[11px]">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

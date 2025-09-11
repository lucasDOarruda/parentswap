export default function MarketingNav({ onLogin }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-2xl">👶</span>
          <span className="font-semibold">ParentSwap</span>
          <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-600">MVP</span>
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-sm text-slate-600">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button
          onClick={onLogin}
          className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium"
        >
          Log in
        </button>
      </div>
    </header>
  );
}

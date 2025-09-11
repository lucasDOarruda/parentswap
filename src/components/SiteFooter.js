export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        {/* Brand + short blurb */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">👶</span>
          <div>
            <div className="font-semibold">ParentSwap</div>
            <div className="text-xs text-slate-600">
              Swap babysitting hours with trusted friends-of-friends.
            </div>
          </div>
        </div>

        {/* Contact / Company */}
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div>
            <div className="text-slate-500">Company</div>
            <div className="mt-1">ParentSwap Pty Ltd</div>
            <div className="text-slate-600">ABN 12 345 678 901</div>
            <div className="text-slate-600">Bondi, Sydney NSW, Australia</div>
          </div>
          <div>
            <div className="text-slate-500">Contact</div>
            <a href="mailto:hello@parentswap.app" className="mt-1 block underline">
              hello@parentswap.app
            </a>
            <a
              href="https://maps.google.com/?q=Bondi+NSW+Australia"
              target="_blank" rel="noreferrer"
              className="text-slate-700 underline"
            >
              View on Maps
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#how" className="underline text-slate-700">How it works</a>
          <a href="#features" className="underline text-slate-700">Features</a>
          <a href="#faq" className="underline text-slate-700">FAQ</a>
          <a href="#" className="underline text-slate-700">Safety</a>
          <a href="#" className="underline text-slate-700">Privacy</a>
          <a href="#" className="underline text-slate-700">Terms</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} ParentSwap Pty Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

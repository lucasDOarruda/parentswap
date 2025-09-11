export default function Login({ goHome }) {
  return (
    <div className="space-y-4">
      {/* Brand */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">👶</div>
          <div>
            <h1 className="text-lg font-semibold">ParentSwap</h1>
            <p className="text-slate-600 text-sm">
              Sign in to swap babysitting hours with your trusted network.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
        <div>
          <label className="text-xs text-slate-600">Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-slate-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>

        <button className="w-full rounded-xl bg-indigo-600 text-white font-semibold py-2.5">
          Log in
        </button>
        <button className="w-full rounded-xl bg-slate-100 text-slate-800 font-medium py-2.5">
          Create an account
        </button>

        <p className="text-[11px] text-slate-500">
          By continuing you agree to our Terms and acknowledge our Privacy Policy.
        </p>
      </div>

      {/* Alt sign-in */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4">
        <button className="w-full rounded-xl border border-slate-300 bg-white text-slate-800 font-medium py-2.5">
          Continue with Google
        </button>
      </div>

      <button onClick={goHome} className="w-full text-sm text-slate-600 underline">
        Back to Home
      </button>
    </div>
  );
}

import Card, { CardBody } from "../components/Card";


export default function Home({ onNav }) {
  const balanceHours = 3.0;

  return (
    <div className="space-y-5">
      
      {/* Greeting */}
      <Card>
        <CardBody className="flex items-center gap-3">
          <div className="text-4xl">👋</div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-slate-600 text-sm">Here’s your snapshot for today.</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
            1 upcoming
          </span>
        </CardBody>
      </Card>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onNav?.("post")}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center"
        >
          <div className="text-2xl">➕</div>
          <div className="text-sm mt-1 font-medium">Post Request</div>
          <div className="text-xs text-slate-600">Ask for a sitter</div>
        </button>
        <button
          onClick={() => onNav?.("requests")}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center"
        >
          <div className="text-2xl">📍</div>
          <div className="text-sm mt-1 font-medium">Browse Requests</div>
          <div className="text-xs text-slate-600">Earn credits</div>
        </button>
      </div>

      {/* Open requests */}
      <div className="space-y-3">
        <div className="font-semibold">Open in your network</div>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center">👩🏽</div>
            <div className="flex-1">
              <div className="font-medium">Ana</div>
              <div className="text-xs text-slate-500">Fri 7:00–9:00pm • Coogee</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">2h</span>
          </CardBody>
          <CardBody className="pt-0">
            <p className="text-sm text-slate-700">Date night. Bedtime routine at 7pm.</p>
            <button
              onClick={() => onNav?.("requests")}
              className="mt-2 w-full rounded-xl bg-indigo-600 text-white font-semibold py-2"
            >
              Accept &amp; Earn
            </button>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center">🧔🏼</div>
            <div className="flex-1">
              <div className="font-medium">Ben</div>
              <div className="text-xs text-slate-500">Sat 1:00–4:00pm • Bondi</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">3h</span>
          </CardBody>
          <CardBody className="pt-0">
            <p className="text-sm text-slate-700">Snacks provided. Chill arvo sit.</p>
            <button
              onClick={() => onNav?.("requests")}
              className="mt-2 w-full rounded-xl bg-indigo-600 text-white font-semibold py-2"
            >
              Accept &amp; Earn
            </button>
          </CardBody>
        </Card>
      </div>

      {/* Wallet */}
      <Card>
        <CardBody className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">Wallet Balance</div>
            <div className="text-2xl font-semibold">{balanceHours.toFixed(1)} h</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Estimated cash owed</div>
            <div className="font-semibold">$0.00</div>
          </div>
        </CardBody>
        <CardBody className="pt-0">
          <button
            onClick={() => onNav?.("wallet")}
            className="w-full rounded-xl bg-white border border-slate-200 text-slate-800 font-medium py-2"
          >
            View wallet
          </button>
        </CardBody>
      </Card>

      {/* Safety */}
      <Card>
        <CardBody className="flex items-center gap-3">
          <div className="text-2xl">🛡️</div>
          <div className="flex-1">
            <div className="font-medium">Safety checklist</div>
            <div className="text-xs text-slate-600">
              Share allergies, emergency contacts &amp; routines before a sit.
            </div>
          </div>
          <button
            onClick={() => onNav?.("me")}
            className="rounded-lg bg-slate-900 text-white text-sm px-3 py-1.5"
          >
            Open
          </button>
        </CardBody>
      </Card>

      <div className="pb-22" />
    </div>
  );
}

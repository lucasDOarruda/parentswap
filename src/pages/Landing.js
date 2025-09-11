import MarketingNav from "../components/MarketingNav";
import SiteFooter from "../components/SiteFooter";
import Card, { CardBody } from "../components/Card";

export default function Landing({ goLogin }) {
  return (
    <div className="min-h-screen flex flex-col">
      

      <main className="flex-1 max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Hero */}
        <section id="top">
          <Card>
            <CardBody className="flex gap-3">
              <div className="text-5xl leading-none">👶</div>
              <div className="flex-1">
                <h1 className="text-xl font-bold tracking-tight">ParentSwap</h1>
                <p className="text-slate-600 text-sm">
                  Swap babysitting hours with trusted friends-of-friends.
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={goLogin}
                    className="flex-1 rounded-xl bg-indigo-600 text-white font-semibold py-2.5"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={goLogin}
                    className="rounded-xl bg-white border border-slate-200 text-slate-800 font-medium px-4"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* How it works */}
        <section id="how">
          <Card>
            <CardBody>
              <h2 className="font-semibold mb-2">How it works</h2>
              <ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1">
                <li>Create a profile and connect your circle.</li>
                <li>Find help from <b>friends-of-friends</b> you trust.</li>
                <li>Earn <b>credits</b> when you babysit; spend them when you need care.</li>
                <li>Unused credits expire in <b>30 days</b> → fair cash fallback.</li>
              </ol>
            </CardBody>
          </Card>
        </section>

        {/* Features */}
        <section id="features" className="space-y-3">
          <h2 className="font-semibold">Features</h2>
          <div className="grid grid-cols-2 gap-3">
            <Feature emoji="🤝" title="Trusted Network" subtitle="Invite friends, see friends-of-friends." />
            <Feature emoji="🗓️" title="Post & Accept" subtitle="Plan sits in seconds." />
            <Feature emoji="🪙" title="Credits Wallet" subtitle="Earn, spend, track." />
            <Feature emoji="🛡️" title="Safety Checklist" subtitle="Share allergies, routines, contacts." />
          </div>
        </section>

        {/* Preview */}
        <section id="preview" className="space-y-3">
          <h2 className="font-semibold">Preview</h2>
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
              <button className="mt-2 w-full rounded-xl bg-indigo-600 text-white font-semibold py-2">
                Accept & Earn
              </button>
            </CardBody>
          </Card>
        </section>

        {/* FAQ */}
        <section id="faq">
          <Card>
            <CardBody>
              <h3 className="font-semibold mb-2">FAQ</h3>
              <dl className="space-y-3">
                <QA q="Is it free?" a="Yes — you earn credits by helping others." />
                <QA q="What if credits expire?" a="They convert to a fair cash fallback so nobody is left out." />
                <QA q="How do you keep it safe?" a="Friends-of-friends, profiles, and a safety checklist. Optional ID soon." />
              </dl>
            </CardBody>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Feature({ emoji, title, subtitle }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl">
      <CardBody className="text-center">
        <div className="text-2xl">{emoji}</div>
        <div className="text-sm mt-1 font-medium">{title}</div>
        <div className="text-xs text-slate-600">{subtitle}</div>
      </CardBody>
    </div>
  );
}

function QA({ q, a }) {
  return (
    <div>
      <dt className="text-sm font-medium">{q}</dt>
      <dd className="text-sm text-slate-600">{a}</dd>
    </div>
  );
}

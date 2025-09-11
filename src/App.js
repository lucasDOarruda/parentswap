import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BottomNav from "./components/BottomNav";
import { useState } from "react";

function AppShell() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="max-w-md mx-auto px-4 py-4 pb-28">
        {tab === "home" && <Home onNav={setTab} />}
        {tab === "login" && <Login goHome={() => setTab("home")} />}
        {tab === "requests" && <div className="pt-8 text-center">Requests</div>}
        {tab === "post" && <div className="pt-8 text-center">Post</div>}
        {tab === "wallet" && <div className="pt-8 text-center">Wallet</div>}
        {tab === "me" && <div className="pt-8 text-center">Profile</div>}
      </main>
      {/* ✅ Only show BottomNav inside /app */}
      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* ✅ Landing page gets SiteFooter */}
      <Route path="/" element={<Landing goLogin={() => navigate("/app")} />} />

      {/* ✅ AppShell has NO SiteFooter */}
      <Route path="/app/*" element={<AppShell />} />
    </Routes>
  );
}

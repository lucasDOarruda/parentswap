import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot, query, where, doc, getDoc } from "firebase/firestore";
import Card, { CardBody } from "../components/Card";

export default function Home({ onNav }) {
  const [requests, setRequests] = useState([]);
  const [balanceHours, setBalanceHours] = useState(0);
  const [user, setUser] = useState(null);

  // 🔹 Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // null if logged out
    });
    return unsubscribe;
  }, []);

  // 🔹 Load open babysitting requests
  useEffect(() => {
    const q = query(collection(db, "requests"), where("status", "==", "open"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // 🔹 Load wallet balance when user is ready
  useEffect(() => {
    const loadWallet = async () => {
      if (!user) return;
      const walletRef = doc(db, "wallet", user.uid);
      const snap = await getDoc(walletRef);
      if (snap.exists()) {
        setBalanceHours(snap.data().hours || 0);
      } else {
        setBalanceHours(0); // default if no wallet doc
      }
    };
    loadWallet();
  }, [user]);

  // 🔹 Handle logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="space-y-5 bg-[#E3F0FF] min-h-screen">
      {/* Greeting */}
      <Card>
        <CardBody className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="text-4xl">👋</div>
            <div>
              <h1 className="text-lg font-semibold">
                {user ? `Welcome back, ${user.email}` : "Welcome back"}
              </h1>
              <p className="text-slate-600 text-sm">
                Here’s your snapshot for today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
              {requests.length} upcoming
            </span>
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 text-white text-sm px-3 py-1.5"
            >
              Logout
            </button>
          </div>
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

        {requests.length === 0 && (
          <p className="text-sm text-slate-500">No open requests right now.</p>
        )}

        {requests.map((req) => (
          <Card key={req.id}>
            <CardBody className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center">
                {req.avatar || "👤"}
              </div>
              <div className="flex-1">
                <div className="font-medium">{req.name}</div>
                <div className="text-xs text-slate-500">
                  {req.time} • {req.location}
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
                {req.hours}h
              </span>
            </CardBody>
            <CardBody className="pt-0">
              <p className="text-sm text-slate-700">{req.details}</p>
              <button
                onClick={() => onNav?.("requests")}
                className="mt-2 w-full rounded-xl bg-indigo-600 text-white font-semibold py-2"
              >
                Accept &amp; Earn
              </button>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Wallet */}
      <Card>
        <CardBody className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">Wallet Balance</div>
            <div className="text-2xl font-semibold">
              {balanceHours.toFixed(1)} h
            </div>
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

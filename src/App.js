import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* 🌍 Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />

      {/* 🔒 Protected routes */}
      <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />

      {/* 🌍 Catch-all → go to landing */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

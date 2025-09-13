import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#E3F0FF] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="text-4xl">👶</div>
          <h1 className="text-2xl font-bold mt-2">ParentSwap</h1>
          <p className="text-slate-600 text-sm">Login or create an account</p>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-3 w-full mb-3 focus:ring-2 focus:ring-indigo-400 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={handleLogin}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-semibold"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          By continuing, you agree to our <span className="underline">Terms</span> &{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

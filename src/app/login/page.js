"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("currentUser", username);
      if (!localStorage.getItem(username)) {
        localStorage.setItem(username, JSON.stringify([]));
      }
      router.push("/");
    }
  };
  return (
    <div className="container mx-auto p-4 flex items-center justify-center h-screen">
      <div className="bg-gray-300 p-7 w-full max-w-sm mx-auto rounded">
        <h1 className="text-2xl mb-4 text-black text-center">Login</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input type="text" onChange={(e) => setUsername(e.target.value)} className="p-2 w-full bg-white text-black rounded mb-4" placeholder="Enter username" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

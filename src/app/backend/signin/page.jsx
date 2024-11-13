"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const router = useRouter();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userData.username.trim() === "" || userData.password.trim() === "") {
      console.log("Please Enter data");
      return;
    }
    try {
      await axios.post("/api/adminLogin", {
        username: userData.username,
        password: userData.password,
      });
      router.replace("/backend");
    } catch (error) {
      console.log(error);
      console.log(error?.message);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-white py-32 text-black dark:bg-primary-900 dark:text-white">
      <form
        className="w-full max-w-sm rounded-lg bg-slate-200 p-6 shadow-md dark:bg-primary-800"
        onSubmit={handleFormSubmit}
      >
        <h2 className="mb-4 text-center text-xl font-bold">Login</h2>
        <div className="mb-6">
          <label htmlFor="username" className="mb-2 block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            value={userData.username}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            placeholder="Enter your password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

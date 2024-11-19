import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://food-del-backend-mw9j.onrender.com/signup", { name, email, password })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <div className="w-96 rounded-2xl bg-slate-900">
        <div className="flex flex-col gap-2 p-8">
          <p className="text-center text-3xl text-gray-300 mb-4">Register</p>
          <form onSubmit={handleSubmit} method="post">
            <input
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 mb-2 text-white"
              placeholder="Name"
              type="text"
              name="name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 mb-2 text-white"
              placeholder="E-mail"
              type="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 mb-2 text-white"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
              Accept terms of use
              <div className="relative inline-block">
                <input
                  className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 mb-2"
                  type="checkbox"
                />
                <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
              </div>
            </label>
            <button
              className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 w-full"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

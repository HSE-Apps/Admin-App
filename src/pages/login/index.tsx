import { useState } from "react";
import { type NextPage } from "next";

import PropTypes from "prop-types";

import { useRouter } from "next/router";

const Login: NextPage = ({ setLoggedIn }) => {
  const router = useRouter();

  const [attempted, setAttempted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const password = e.target[0].value;
    if (password === "password") {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      router.push("/");
    } else {
      setAttempted(true);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <label className="mb-2 block text-xl font-bold text-gray-900 ">
          Password
        </label>
        <form onSubmit={handleSubmit} className="flex gap-x-2">
          <input
            type={"password"}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-12 rounded-lg bg-blue-600 text-xl font-bold text-white"
          >
            {">"}
          </button>
        </form>
        {attempted && <h1 className="mt-3 text-red-500">Please try again.</h1>}
      </div>
    </div>
  );
};

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Login;

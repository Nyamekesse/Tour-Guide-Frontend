import React, { useState } from "react";
import { useAuthSignUp } from "./hooks/useSignup";
import { Link } from "react-router-dom";
import LoadingButton from "../../shared/components/LoadingButton";

const SignUpView = () => {
  const { mutate, isLoading } = useAuthSignUp();
  const initialDetails = {
    username: "",
    email: "",
    password: "",
    role: "tourist",
  };
  const [signUpDetails, setSignUpDetails] = useState(initialDetails);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpDetails({ ...signUpDetails, [name]: value.trim() });
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    mutate(signUpDetails);
    setSignUpDetails(initialDetails);
  };
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FI6JZv3nM8f4emYV1YJpGwHaDt%26pid%3DApi&f=1&ipt=11f98b6fc077e6d59d74641fa5b76985a0c5443162fcd35d70f4a5abcf05c4fe&ipo=images"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={signUpDetails.username}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={signUpDetails.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={signUpDetails.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-sm">
              <Link
                to="/log-in"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Log In
              </Link>
            </div>
            <div>
              {isLoading ? (
                <LoadingButton />
              ) : (
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create account
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.push("/");
    }
  }, []);

  const handleLogin = () => {
    // Redirect to the desired page, e.g., '/dashboard' after login
    if (formData.email || formData.password) {
      localStorage.setItem("isLoggedIn", true);
      router.push("/Pg"); // Replace '/dashboard' with the page you want to navigate to
    }
  };

  const [userType, setUserType] = useState("Student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const userTypes = ["Student", "Owner", "Partner"];

  return (
    <>
      {/* Navbar */}
      <div
        className="absolute top-0 left-0 w-full z-50 backdrop-blur-md"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 0, 0) 100%)
          `,
        }}
      >
        <Navbar />
      </div>

      {/* Main Background */}
      <div
        className="min-h-screen flex items-start justify-center md:justify-start relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 100%),
            url('/images/laptop.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Form Section */}
        <div className="bg-[#0D0D0D] rounded-xl shadow-2xl p-6 sm:p-10 w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto mt-[8rem] sm:mt-[9rem] ml-0 md:ml-8 backdrop-blur-sm border border-gray-700">
          {/* User Type Selector */}
          {/* <div className="flex gap-2 bg-gray-900/50 p-1 rounded-lg mb-8">
            {userTypes.map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2 px-4 rounded-md text-sm transition-all ${
                  userType === type
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div> */}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white 
                          placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
                          focus:ring-opacity-20 outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white 
                          placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
                          focus:ring-opacity-20 outline-none transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              onClick={handleLogin} // Trigger the redirect on button click
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg 
                transition-colors font-medium shadow-lg hover:shadow-blue-500/20"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

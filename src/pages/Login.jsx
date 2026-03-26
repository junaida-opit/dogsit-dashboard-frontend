import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { loginSchema } from "../schemas/loginSchema";
import { loginUser } from "../api/auth";
import bgImage from "../assets/bg.jpg";
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null); // { type: "error" | "success", text: string }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      localStorage.setItem("token", res.token);

      setMessage({ type: "success", text: "Login successful! Redirecting..." });

      // Optional: redirect after short delay to show success message
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Login failed", error);

      // Display the error message
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message || "Login failed. Please try again.",
      });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center relative bg-white">
      <div
        className="absolute top-3.25 left-1/2 -translate-x-1/2 h-[calc(100%-26px)] w-1/2 rounded-xl bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="max-w-md m-auto bg-[#fafafa] p-8 rounded-lg shadow-lg flex flex-col z-20">
        <h2 className="text-2xl font-semibold mb-6 w-fit mx-auto">
          Welcome Back
        </h2>

        {/* Success / Error Message */}
        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              {...register("email")}
              className="w-full border border-gray-200 rounded-lg p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border border-gray-200 rounded-lg p-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <SubmitButton
            isSubmitting={isSubmitting}
            isSubmittingText="Logging In..."
            defaultText="Login"
          />

          <p>
            Don't have an account? Create one{" "}
            <a href="/register" className="text-cyan-700">
              here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

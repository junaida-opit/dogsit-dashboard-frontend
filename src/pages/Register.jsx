import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas/registerSchema";
import { registerUser } from "../api/auth";
import bgImage from "../assets/bg.jpg";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      navigate("/login");
      console.log("User registered");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center relative bg-white">
      <div
        className="
      absolute top-3.25 left-1/2 -translate-x-1/2 w-[calc(100%-26px)] h-1/2  rounded-xl bg-cover bg-center z-0
    "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="max-w-md m-auto bg-[#fafafa] p-8 rounded-lg shadow-lg flex flex-col z-20 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 w-fit mx-auto">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              {...register("name")}
              center
              className="w-full border border-gray-200 rounded-lg p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
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
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full border border-gray-200 rounded-lg p-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <SubmitButton
            isSubmitting={isSubmitting}
            isSubmittingText="Registering..."
            defaultText="Register"
          />

          <p>
            Already have an account? Login{" "}
            <a href="/login" className="text-cyan-700">
              here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

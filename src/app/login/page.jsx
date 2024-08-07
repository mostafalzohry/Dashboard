"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase"; 
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import ReusableForm from "../../components/ReusableForm";
import AuthAside from "../../components/AuthAside";
import TallySide from "../../assets/TallySide.svg";
import WavyLines from "../../assets/WavyLines.svg";

const Login = () => {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password length must be more than 7")
      .required("Password is required"),
  });

  const onSubmit = async (values) => {
    console.log('Form submitted with values:', values); 
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log("Login successful");
      router.push("/home");

    } catch (error) {

      console.error("Error logging in:", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Example@mail.com",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "6+ strong characters",
      label: "Password",
    },
  ];

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <AuthAside
        imageSrc={TallySide.src}
        text="'Het verbinden van nieuwkomers met de samenleving door hun taal te verbeteren'"
      />
      <div className="w-full md:w-1/2 bg-white flex flex-col p-8 relative">
        <div className="max-w-md mx-auto w-full relative z-10">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">
            Welcome Back!
          </h1>
          <h2 className="text-xl mb-8">Log In Here</h2>
          <ReusableForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            fields={fields}
            buttonLabel="Log In"
            loading={loading}
          />
          <span className="mt-4 block text-center text-blue-600">
            Don’t have an account?{" "}
            <button 
              onClick={() => router.push('/signup')} 
              className="text-blue-500 underline"
            >
              Sign up now
            </button>
          </span>
        </div>
        <img
          src={WavyLines.src}
          alt="Wavy Lines"
          className="absolute bottom-0 left-0 w-full z-0"
        />
      </div>
    </main>
  );
};

export default Login;

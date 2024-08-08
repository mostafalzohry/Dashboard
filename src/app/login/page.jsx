"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth , firestore } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import ReusableForm from "../../components/ReusableForm";
import AuthAside from "../../components/AuthAside";
import TallySide from "../../assets/TallySide.svg";
import WavyLines from "../../assets/WavyLines.svg";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@/utils/useAuth";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserDoc } = useAuth(); 

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
    setLoading(true);
    setErrorMessage("");
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
  
      console.log("User data:", user);
  
      const userDocRef = doc(firestore, `users/${user.uid}`);
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        console.log("User document data user:", userDoc.data());
        setUserDoc(userDoc.data());
      } else {
        console.log("No such document!");
        setUserDoc(null);
      }
  
      router.push("/home");
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
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

      <div className="flex-1 bg-white flex flex-col p-8  p-6  relative h-full">
        <div className="max-w-sm md:max-w-md mx-auto w-full relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
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
            errorMessage={errorMessage}
          />
          {errorMessage && (
            <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
          )}
          <span className="mt-4 block text-center text-blue-600">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-blue-500 underline"
            >
              Sign up now
            </button>
          </span>
        </div>
        <img
          src={WavyLines.src}
          alt="Wavy Lines"
          className="absolute bottom-0 left-0 w-full z-0 block"
        />
      </div>
    </main>
  );
};

export default Login;

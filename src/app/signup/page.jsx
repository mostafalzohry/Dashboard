"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import ReusableForm from "../../components/ReusableForm";
import AuthAside from "../../components/AuthAside";
import TallySide from "../../assets/TallySide.svg";
import WavyLines from "../../assets/WavyLines.svg";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const initialValues = {
    FullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    FullName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password length must be more than 7")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phoneNumber: Yup.string()
      .matches(/^\+\d{1,4}\d{6,}$/, "Please type country code and valid phone number")
      .required("Phone number is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setErrorMessage(""); 

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: values.FullName,
      });
      await setDoc(doc(firestore, "users", user.uid), {
        FullName: values.FullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        uid: user.uid,
      });
      router.push("/login");
    } catch (error) {
      console.error("Error signing up:", error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "FullName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
    },
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
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
    {
      name: "phoneNumber",
      type: "text",
      placeholder: "+1234567890",
      label: "Phone Number",
    },
  ];

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <AuthAside
        imageSrc={TallySide.src}
        text="'Het verbinden van nieuwkomers met de samenleving door hun taal te verbeteren'"
      />

      <div className="flex-1 bg-white flex flex-col p-8 p-6 relative h-full">
        <div className="max-w-sm md:max-w-md mx-auto w-full relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
            Welcome to Taaly!
          </h1>
          <h2 className="text-xl mb-8">Sign Up Here</h2>
          <ReusableForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            fields={fields}
            buttonLabel="Sign Up"
            loading={loading}
            errorMessage={errorMessage}
          />
          {errorMessage && (
            <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
          )}
          <span className="mt-4 block text-center text-blue-600">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-blue-500 underline"
            >
              Sign in now
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

export default Signup;

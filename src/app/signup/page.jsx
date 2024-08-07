// pages/Signup.js
"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import ReusableForm from "../../components/ReusableForm";
import AuthAside from "../../components/AuthAside";
import TallySide from "../../assets/TallySide.svg";
import WavyLines from "../../assets/WavyLines.svg";

const Signup = () => {
  const router = useRouter(); // Use useRouter from Next.js
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password length must be more than 7")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser, {
        displayName: `${values.firstName} ${values.lastName}`,
      });
      console.log("User created:", userCredential.user);
      router.push("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First name",
      label: "First name",
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      label: "Last name",
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
  ];

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <AuthAside
        imageSrc={TallySide.src}
        text="'Het verbinden van nieuwkomers met de samenleving door hun taal te verbeteren'"
      />
      <div className="w-full md:w-1/2 bg-white flex flex-col p-8 relative">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">
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
          />
          <img
            src={WavyLines.src}
            alt="Wavy Lines"
            className="absolute bottom-0 left-0 w-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Signup;

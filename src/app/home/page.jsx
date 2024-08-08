"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import useAuth from "../../utils/useAuth";
import { auth } from "../../utils/firebase";
import Dashboard from '../../components/Dashboard'
const Home = () => {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login");
    }
  }, [loading, authenticated, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading || !authenticated) {
    return <div>Loading...</div>;
  }

  return (
      <Dashboard />
  );
};

export default Home;


























"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth }from "../../utils/useAuth";
import Dashboard from "../../components/Dashboard";

const Home = () => {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login");
    }
  }, [loading, authenticated, router]);

  if (loading || !authenticated) {
    return (
      <div className="flex items-center justify-center h-full">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  </div>   
    );
  }

  return <Dashboard />;
};

export default Home;

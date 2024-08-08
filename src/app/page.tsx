"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth }  from "../utils/useAuth";

const Index = () => {
  const router = useRouter();
  const { loading, authenticated } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (authenticated) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }
  }, [loading, authenticated, router]);

  return (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />

  );
};

export default Index;

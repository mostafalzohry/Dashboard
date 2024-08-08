"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../utils/useAuth"; // Ensure this path points to your useAuth hook

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
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Index;

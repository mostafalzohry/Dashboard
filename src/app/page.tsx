"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '../utils/useAuth'; // Ensure this path points to your useAuth hook

const Index = () => {
  const router = useRouter();
  const { loading, authenticated } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (authenticated) {
        router.push('/home');
      } else {
        router.push('/login');
      }
    }
  }, [loading, authenticated, router]);

  return <div>Loading...</div>; // You can also return a loading spinner here
};

export default Index;

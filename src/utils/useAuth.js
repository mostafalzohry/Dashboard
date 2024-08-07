import { useEffect, useState } from 'react';
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { loading, authenticated };
};

export default useAuth;
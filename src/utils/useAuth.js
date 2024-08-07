// import { useEffect, useState } from 'react';
// import { auth } from './firebase'; 
// import { onAuthStateChanged } from 'firebase/auth';

// const useAuth = () => {
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthenticated(true);
//       } else {
//         setAuthenticated(false);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { loading, authenticated };
// };

// export default useAuth;


import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        setLoading(false); // Stop loading when user is authenticated
      } else {
        setAuthenticated(false);
        router.push('/login'); // Redirect to login if not authenticated
        setLoading(false); // Stop loading if no user is authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  return { loading, authenticated };
};

export default useAuth;

"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '../../utils/useAuth';
import ReusableForm from '../../components/ReusableForm';
import AuthAside from '../../components/AuthAside';
import TallySide from '../../assets/TallySide.svg';
import WavyLines from '../../assets/WavyLines.svg';
import * as Yup from 'yup';
import { auth } from '../../utils/firebase'; 


const Login = () => {
  const { loading : authLoading ,authenticated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(authLoading);



  const initialValues = { email: "", password: "" };

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
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      router.push("/home"); // Navigate to the home page after successful login
    } catch (error) {
      console.error('Login failed:', error.message);
    } finally {
      setLoading(false); // Ensure loading is set to false in both success and error cases
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


  useEffect(() => {
    if (!loading && authenticated) {
      router.push('/home');
    }
  }, [loading, authenticated, router]);

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
          <h2 className="text-xl mb-8">Login Here</h2>
          <ReusableForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            fields={fields}
            buttonLabel="Login"
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

export default Login;

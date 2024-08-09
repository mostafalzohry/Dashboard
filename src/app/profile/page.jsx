"use client";

import Header from "../../components/Header";
import ProfileAvatar from "../../assets/ProfileAvatar.png";
import { useRouter } from "next/navigation";
import { useAuth } from "../../utils/useAuth";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, firestore } from "../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const { loading, authenticated, userDoc, setUserDoc } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [profilePic, setProfilePic] = useState(ProfileAvatar.src);
  const router = useRouter();


  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login");
    }
  }, [loading, authenticated, router]);

  if (loading || !authenticated) {
    return <LoadingSpinner />;
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const storage = getStorage(app);
    const storageRef = ref(storage, `profile-pics/${file.name}`);

    try {
      setUploading(true);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      if (userDoc && userDoc.uid) {
        const userDocRef = doc(firestore, `users/${userDoc.uid}`);
        await updateDoc(userDocRef, { profilePic: url });

        setUserDoc({ ...userDoc, profilePic: url });
      }

      setProfilePic(url);
    } catch (error) {
      console.error("Error uploading file: ", error);
    } finally {
      setUploading(false);
    }
  };
  const navigateHome = () => {
    router.push("/");
  };

 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <div className="flex flex-1">
      <div className="min-h-screen bg-white p-8 w-full flex flex-col">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
          <ProfileSidebar
            userDoc={userDoc}
            profilePic={profilePic}
            handleFileChange={handleFileChange}
            uploading={uploading}
            navigateHome={navigateHome}
          />
          <ProfileDetails />
        </div>
      </div>
    </div>
  </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
  <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
</div>   );

const ProfileSidebar = ({ userDoc, profilePic, handleFileChange, uploading , navigateHome }) => (
  <div className="bg-custom-light-purple min-h-screen p-6">
    <div className="flex items-center mb-6">
      <span className="text-2xl mr-4 cursor-pointer" onClick={navigateHome}>←</span>
      <h1 className="text-2xl font-semibold">{userDoc.FullName}</h1>
    </div>
    <div className="bg-custom-light-purple p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center mb-4">
        <img
          src={userDoc.profilePic ?? profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 mb-2"
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="fileInput"
          className="text-blue-500 cursor-pointer text-sm"
        >
          {uploading ? "Uploading..." : "Change Profile Picture"}
        </label>
      </div>
      <h3 className="text-center font-semibold mb-2">Bio</h3>
      <p className="text-center text-sm text-gray-700 mb-6">
        "I'm a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language"
      </p>
      <ProfileDetailsInfo userDoc={userDoc} />
    </div>
  </div>
);

const ProfileDetailsInfo = ({ userDoc }) => (
  <div className="space-y-4">
    <DetailItem icon="📧" title="E-mail" content={userDoc.email} />
    <DetailItem icon="📞" title="Mobile" content={userDoc.phoneNumber} />
    <DetailItem icon="📍" title="Location" content="6391 Elgin St. Celina, Delaware 10299" />
    <DetailItem icon="🎓" title="Highest Education" content="BA Graphic Design" />
    <DetailItem icon="💼" title="Latest work experience" content="Marketing Coordinator" />
  </div>
);

const DetailItem = ({ icon, title, content }) => (
  <div className="flex items-center">
    <span className="mr-3">{icon}</span>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-700">{content}</p>
    </div>
  </div>
);




const ProfileDetails = () => (
  <div className="lg:col-span-3 flex flex-col h-full">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow mb-4">
      <DetailCard title="Mother Language" content="Arabic" />
      <DetailCard title="Other Languages" content={["English", "German"]} />
      <DetailCard title="Level" content="Med B2" />
      <DetailCard title="Interests" content={["Reading", "Hiking"]} />
    </div>
    <div className="flex flex-col flex-grow">
      <ImpactMeasurement />
    </div>
  </div>
);

const DetailCard = ({ title, content }) => (
  <div className="bg-custom-light-purple p-4 rounded-lg shadow-lg flex flex-col h-full">
    <h3 className="text-lg font-semibold text-black mb-2 truncate">{title}</h3>
    <div className="text-sm text-gray-700 flex flex-wrap items-center gap-2 flex-1 overflow-auto">
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <span key={index} className="flex items-center bg-white text-purple-600 py-1 px-3 rounded-full">
            <LanguageIcon className="mr-2" />
            {item}
          </span>
        ))
      ) : (
        <span className="flex items-center bg-white text-purple-600 py-1 px-3 rounded-full">
          <LanguageIcon className="mr-2" />
          {content}
        </span>
      )}
    </div>
  </div>
);


const ImpactMeasurement = () => (
  <div className="flex flex-col md:flex-row rounded-lg shadow-lg flex-grow">
    <div className="flex flex-col space-y-8 md:w-1/3 h-full">
      <MeasurementCard title="Hours spent" color="#1E00B9" value={200} unit="hours" />
      <MeasurementCard title="Remaining" color="#B4E13C" value={200} unit="credits" />
    </div>
    <div className="md:w-2/3 bg-custom-light-purple p-6 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8 flex-grow">
      <h2 className="text-indigo-800 text-xl font-bold mb-4">Impact Measurement</h2>
      <ImpactTable />
    </div>
  </div>
);

const MeasurementCard = ({ title, color, value, unit }) => (
  <div className="flex flex-col items-center bg-custom-light-purple p-6 rounded-lg flex-1">
    <h2 className={`text-2xl font-bold mb-2`} style={{ color }}>{title}</h2>
    <p className="text-gray-600 text-base mb-6 text-center">Hours spent by Learner over this program</p>
    <div className="relative flex items-center justify-center w-48 h-48">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="8"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold" style={{ color }}>{value}</span>
        <span className="text-xl font-medium" style={{ color }}>{unit}</span>
      </div>
    </div>
  </div>
);

const ImpactTable = () => (
  <table className="w-full">
    <thead>
      <tr>
        <th className="border-b px-4 py-2 text-left">Category</th>
        <th className="border-b px-4 py-2 text-left">Impact</th>
        <th className="border-b px-4 py-2 text-left">Progress</th>
        <th className="border-b px-4 py-2 text-left">Complete</th>
      </tr>
    </thead>
    <tbody>
      <TableRow title="English Listening" impact="High" progress="75%" complete="75%" />
      <TableRow title="English Speaking" impact="Medium" progress="50%" complete="50%" />
      <TableRow title="English Reading" impact="Low" progress="30%" complete="30%" />
      <TableRow title="English Listening" impact="High" progress="75%" complete="75%" />
      <TableRow title="English Speaking" impact="Medium" progress="50%" complete="50%" />
      <TableRow title="English Reading" impact="Low" progress="30%" complete="30%" />
      <TableRow title="English Listening" impact="High" progress="75%" complete="75%" />
      <TableRow title="English Speaking" impact="Medium" progress="50%" complete="50%" />
      <TableRow title="English Reading" impact="Low" progress="30%" complete="30%" />
    </tbody>
  </table>
);

const TableRow = ({ title, impact, progress, complete }) => (
  <tr>
    <td className="border-b px-4 py-2">{title}</td>
    <td className="border-b px-4 py-2">{impact}</td>
    <td className="border-b px-4 py-2">{progress}</td>
    <td className="border-b px-4 py-2">{complete}</td>
  </tr>
);

export default Profile;

const LanguageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 text-purple-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-3-3v6m-4.5 0h9M12 12v3"
    />
  </svg>
);

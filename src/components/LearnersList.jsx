"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import girlAvatar from "../assets/girlAvatar.png"

function LearnersList() {
    const [activeTab, setActiveTab] = useState('Learners');
    const [learners, setLearners] = useState([]);
    const [languageBuddies, setLanguageBuddies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
      try {
        const learnersSnapshot = await getDocs(collection(db, "learners"));
        const learnersData = learnersSnapshot.docs.map(doc => doc.data());
  
        const languageBuddiesSnapshot = await getDocs(collection(db, "languageBuddies"));
        const languageBuddiesData = languageBuddiesSnapshot.docs.map(doc => doc.data());
  
        setLearners(learnersData);
        setLanguageBuddies(languageBuddiesData);
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };
  
    const searchUsers = async (text) => {
      const formattedText = text?.trim()?.toLowerCase();
      setSearchText(formattedText);
      setLoading(true);
  
      if (formattedText === '' || formattedText.length === 0) {
        await fetchData();
        setLoading(false);
        return;
      }
  
      const collectionName = activeTab === 'Learners' ? 'learners' : 'languageBuddies';
      
      try {
        const ref = collection(db, collectionName);
        const snapshot = await getDocs(ref);
        
        const mappedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        const result = mappedItems.filter((d) => {
          const name = d?.name?.trim()?.toLowerCase();
          const level = d?.level?.trim()?.toLowerCase();
          const program = d?.program?.trim()?.toLowerCase();
          const organization = d?.organization?.trim()?.toLowerCase();
  
          return (
            name?.includes(formattedText) ||
            level?.includes(formattedText) ||
            program?.includes(formattedText) ||
            organization?.includes(formattedText)
          );
        });
  
        if (activeTab === 'Learners') {
          setLearners(result);
        } else {
          setLanguageBuddies(result);
        }
      } catch (error) {
        console.error("Error searching users:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex space-x-4 mb-4">
          <button 
            className={`font-semibold pb-2 ${activeTab === 'Learners' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-400'}`}
            onClick={() => setActiveTab('Learners')}
          >
            Learners
          </button>
          <button 
            className={`font-semibold pb-2 ${activeTab === 'Language Buddies' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-400'}`}
            onClick={() => setActiveTab('Language Buddies')}
          >
            Language Buddies
          </button>
        </div>
        
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by Name, Level, etc"
            className="border rounded-lg px-4 py-2 pl-10 w-full"
            value={searchText}
            onChange={(e) => searchUsers(e.target.value)}
          />
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {loading ? (
               <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />

        ) : (
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">Name</th>
              <th className="py-3">Level</th>
              <th className="py-3">Program</th>
              <th className="py-3">Organization</th>
              <th className="py-3">Rating</th>
              <th className="py-3">Hours spent</th>
              <th className="py-3"></th>
            </tr>
          </thead>
          <tbody>
            {(activeTab === 'Learners' ? learners : languageBuddies).map((person, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4 flex items-center">
                  <img
                      src={girlAvatar.src}
                      alt={person.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {person.name}
                </td>
                <td className="py-4">{person.level}</td>
                <td className="py-4">{person.program}</td>
                <td className="py-4">{person.organization}</td>
                <td className="py-4">{person.rating}/10</td>
                <td className="py-4">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4F46E5"
                        strokeWidth="3"
                        strokeDasharray={`${person.hours * 10}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold">{person.hours}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <a href="#" className="text-indigo-600 hover:underline">View →</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    );
  }

  export default LearnersList
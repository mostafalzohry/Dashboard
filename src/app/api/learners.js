import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const cors = (handler) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return handler(req, res);
};

const handler = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'learners'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default cors(handler);

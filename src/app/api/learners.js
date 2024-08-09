import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const snapshot = await getDocs(collection(db, 'learners'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

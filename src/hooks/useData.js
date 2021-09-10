import {useState, useEffect} from 'react'
import { db } from '../utils/firebase' 

export const useData = (collectionName) => {
	const [docs, setDocs] = useState([])
	useEffect(() => {
		const unsub = db.collection(collectionName).orderBy('timestamp', 'desc')
		.onSnapshot(snap => {
			const documents = [];
			snap.forEach(doc => {
			documents.push({id: doc.id, ...doc.data()})
			});
			setDocs(documents);

		});
		return () => unsub();
	}, [collectionName]);
	return {docs}
}
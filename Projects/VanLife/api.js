import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
} from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyCqyadJelENH8379SLCE_9AbB3CiZcg0JY",
	authDomain: "vanlife-216b0.firebaseapp.com",
	projectId: "vanlife-216b0",
	storageBucket: "vanlife-216b0.appspot.com",
	messagingSenderId: "857654387368",
	appId: "1:857654387368:web:b848b5a162301b075e589d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
	const querySnapshot = await getDocs(vansCollectionRef);
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return dataArr;
}

export async function getVan(id) {
	const docRef = doc(db, "vans", id);
	const vanSnapshot = await getDoc(docRef);
	return {
		...vanSnapshot.data(),
		id: vanSnapshot.id,
	};
}

export async function getHostVans() {
	const q = query(vansCollectionRef, where("hostId", "==", "123"));
	const querySnapshot = await getDocs(q);
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return dataArr;
}

// export async function getVans(folder, id) {
// 	//folder = vans || host/vans
// 	const base = `/api/${folder}`;
// 	const url = id ? `${base}/${id}` : base;
// 	const req = await fetch(url);
// 	if (!req.ok) {
// 		throw {
// 			message: "Failed to fetch vans",
// 			statusText: req.statusText,
// 			status: req.status,
// 		};
// 	}
// 	const response = await req.json();
// 	return response.vans;
// }

export async function loginUser(creds) {
	const req = await fetch("/api/login", {
		method: "post",
		body: JSON.stringify(creds),
	});

	const data = await req.json();

	if (!req.ok) {
		throw {
			message: data.message,
			statusText: req.statusText,
			status: req.status,
		};
	}

	return data;
}

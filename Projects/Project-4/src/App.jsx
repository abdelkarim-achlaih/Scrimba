import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
// import { data } from "./data";
import Split from "react-split";
// import { nanoid } from "nanoid";
import { db, notesCollection } from "../firebase";
import {
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
	query,
	orderBy,
	setDoc,
	serverTimestamp,
} from "firebase/firestore";

export default function App() {
	const [notes, setNotes] = React.useState([]);

	const [currentNoteId, setCurrentNoteId] = React.useState("");

	const currentNote =
		notes.find((note) => note.id === currentNoteId) || notes[0];

	const q = query(notesCollection, orderBy("updatedAt", "desc"));

	React.useEffect(() => {
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const notes = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setNotes(notes);
			console.log(notes);
		});
		return unsubscribe;
	}, []);

	React.useEffect(() => {
		if (!currentNote) {
			setCurrentNoteId(notes[0]?.id);
		}
	}, [notes]);

	async function createNewNote() {
		const newNote = {
			body: "# Type your markdown note's title here",
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
		};
		const newNoteRef = await addDoc(notesCollection, newNote);
		setCurrentNoteId(newNoteRef.id);
	}

	async function updateNote(text) {
		await setDoc(
			doc(db, "notes", currentNoteId),
			{ body: text, updatedAt: serverTimestamp() },
			{ merge: true }
		);
	}

	async function deleteNote(noteId) {
		await deleteDoc(doc(db, "notes", noteId));
	}

	return (
		<main>
			{notes.length > 0 ? (
				<Split sizes={[30, 70]} direction="horizontal" className="split">
					<Sidebar
						notes={notes}
						deleteNote={deleteNote}
						currentNote={currentNote}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
					/>
					<Editor currentNote={currentNote} updateNote={updateNote} />
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button className="first-note" onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
	);
}

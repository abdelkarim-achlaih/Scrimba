import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
// import { data } from "./data";
import Split from "react-split";
// import { nanoid } from "nanoid";
import { notesCollection } from "../firebase";
import { onSnapshot, addDoc } from "firebase/firestore";

export default function App() {
	const [notes, setNotes] = React.useState([]);

	const [currentNoteId, setCurrentNoteId] = React.useState(notes[0]?.id || "");

	const currentNote =
		notes.find((note) => note.id === currentNoteId) || notes[0];

	React.useEffect(() => {
		const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
			const notes = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setNotes(notes);
			console.log(notes);
		});
		return unsubscribe;
	}, []);

	async function createNewNote() {
		const newNote = {
			body: "# Type your markdown note's title here",
		};
		const newNoteRef = await addDoc(notesCollection, newNote);
		setCurrentNoteId(newNoteRef.id);
	}

	function updateNote(text) {
		setNotes((oldNotes) => {
			let index;
			let modified = oldNotes.map((oldNote, i) => {
				if (oldNote.id === currentNoteId) {
					index = i;
					return { ...oldNote, body: text };
				} else {
					return oldNote;
				}
			});
			return [...modified.splice(index, 1), ...modified];
		});
	}

	function deleteNote(event, noteId) {
		event.stopPropagation();
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
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
					{currentNoteId && notes.length > 0 && (
						<Editor currentNote={currentNote} updateNote={updateNote} />
					)}
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

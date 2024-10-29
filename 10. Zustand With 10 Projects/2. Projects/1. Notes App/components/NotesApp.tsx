import { useState } from "react";
import useStore from "../store";

interface Note {
  id: number;
  title: string;
  content: string;
}

const NotesApp = () => {
  const { notes, addNote, updateNote, removeNote } = useStore();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleAddNote = () => {
    if (title.trim() === "" || content.trim() === "") return;

    addNote({
      id: Date.now(),
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleUpdateNote = () => {
    if (title.trim() === "" || content.trim() === "") return;

    if (editingNote) {
      updateNote(editingNote.id, { title, content });
      setEditingNote(null);
    }

    setTitle("");
    setContent("");
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Note-taking App
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note Content"
            className="w-full h-32 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            {editingNote ? (
              <>
                <button
                  onClick={handleUpdateNote}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Update Note
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleAddNote}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Note
              </button>
            )}
          </div>
        </div>
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {note.title}
              </h2>
              <p className="text-gray-600 mb-4">{note.content}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditNote(note)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeNote(note.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesApp;

import { AiOutlinePlus } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useNotesStore from "./store";
import Sidebar from "./components/Sidebar";

const App = () => {
  const {
    editorContent,
    noteColor,
    currentNoteIndex,
    setEditorContent,
    setNoteColor,
    addOrUpdateNote,
  } = useNotesStore();

  return (
    <div className="h-screen flex">
      <Sidebar />
      {/* Main Area */}
      <div className="w-2/3 p-8">
        {/* Text Editor (React Quill) */}
        <div className="p-4 rounded-lg">
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            placeholder="Write your note here..."
            theme="snow"
            className="h-96 bg-white mb-[2rem]"
          />
        </div>

        {/* Color Selector */}
        <div className="flex ml-[1rem] items-center mt-4 space-x-4">
          <input
            type="color"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
            className="w-10 h-10 p-1 border rounded-full"
          />
          <p>Choose a note color</p>
        </div>

        {/* Save Button */}
        <button
          className="bg-blue-500 ml-[1rem] text-white py-2 px-4 mt-4 rounded-lg shadow-lg hover:bg-blue-600 flex items-center"
          onClick={addOrUpdateNote}
        >
          <AiOutlinePlus className="mr-2" />{" "}
          {currentNoteIndex !== null ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
};

export default App;

import { FiSearch } from "react-icons/fi";
import useNotesStore from "../store";

const Sidebar = () => {
  const { notes, search, selectNote, setSearch } = useNotesStore();

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-4 shadow-lg">
        {/* Search Bar */}
        <div className="flex items-center mb-4">
          <FiSearch className="text-xl mr-2" />
          <input
            type="text"
            className="w-full border-b focus:outline-none"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Notes List */}
        <div>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <div
                key={index}
                className="flex items-center p-4 mb-2 rounded-lg shadow-md cursor-pointer border hover:bg-gray-300"
                onClick={() => selectNote(index)}
              >
                {/* Color Circle */}
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor: note.color,
                    border: "1px solid #000",
                  }}
                ></div>

                {/* Note Content */}
                <div
                  className="truncate"
                  dangerouslySetInnerHTML={{ __html: note.text }}
                />
              </div>
            ))
          ) : (
            <p>No new notes</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Sidebar;

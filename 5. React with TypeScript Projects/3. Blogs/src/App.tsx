import { useState } from "react";
import ArticleList from "./components/ArticleList";
import BlogForm from "./components/BlogForm";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopTopics";
import TrendsList from "./components/TrendList";
import { BlogProvider } from "./shared/BlogContext";
import { Blog } from "./types";
import { IoMdAddCircle } from "react-icons/io";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          <div className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </div>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;

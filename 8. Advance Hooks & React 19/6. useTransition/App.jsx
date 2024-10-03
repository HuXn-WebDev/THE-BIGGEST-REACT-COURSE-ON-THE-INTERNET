import { useState, useTransition } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "posts":
        return <Posts />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          className="border-2 p-4 m-2"
          onClick={() => handleTabChange("home")}
        >
          Home
        </button>
        <button
          className="border-2 p-4 m-2"
          onClick={() => handleTabChange("posts")}
        >
          Posts
        </button>
        <button
          className="border-2 p-4 m-2"
          onClick={() => handleTabChange("contact")}
        >
          Contact
        </button>
      </div>
      {isPending && <p>Loading...</p>}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default App;

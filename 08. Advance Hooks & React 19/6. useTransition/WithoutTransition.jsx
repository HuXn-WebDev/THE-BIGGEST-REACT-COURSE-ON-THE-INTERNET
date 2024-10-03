const App = () => {
  const [activeTab, setActiveTab] = useState("home");

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
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("posts")}>Posts</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default App;

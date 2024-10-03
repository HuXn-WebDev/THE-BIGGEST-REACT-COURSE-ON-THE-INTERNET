import { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? (
        <span className="bg-black text-white p-5 rounded m-2">Dark</span>
      ) : (
        <span className="bg-slate-300 text-black p-5 rounded m-2">Light</span>
      )}

      <br />
      <input
        type="text"
        className="border-4 rounded"
        key={sw ? "dark" : "light"}
      />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;

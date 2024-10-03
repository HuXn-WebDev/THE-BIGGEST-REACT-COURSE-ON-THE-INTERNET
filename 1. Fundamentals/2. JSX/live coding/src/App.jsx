const App = () => {
  return (
    <section id="section">
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragraph Content</p>
      </article>
    </section>
  );
};

export default App;

// ------------------------------------
// Go to babel 👇 and past your code and checkout the result.
// https://babeljs.io/repl

// import React from "react";

// const App = () => {
//   return React.createElement(
//     "section",
//     {
//       id: "section",
//     },
//     React.createElement("h1", null, "My Website"),
//     React.createElement(
//       "article",
//       null,
//       React.createElement("h2", null, "Welcome To React"),
//       React.createElement(
//         "p",
//         {
//           class: "text",
//         },
//         "Paragraph Content"
//       )
//     )
//   );
// };

// export default App;

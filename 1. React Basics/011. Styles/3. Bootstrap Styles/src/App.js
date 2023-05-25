// 1. 👇
// https://tailwindcss.com/docs/guides/create-react-app

// 2. Paste this in (command line) 👇
// npx create-react-app my-project
// cd my-project

// 3. Paste this in (command line) 👇
// npm install -D tailwindcss
// npx tailwindcss init

// 4. Paste This in (tailwind.config.js) 👇
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// 5. Paste this in  (./src/index.css) 👇
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// 6. Add these stylings 👇
{
  /* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */
}

const App = () => {
  return <h1>hi</h1>;
};

export default App;

// React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies} </h4>
    </section>
  );
};

const App = () => {
  return (
    <User
      img="https://avatars.githubusercontent.com/u/85052811?v=4"
      name="HuXn WebDev"
      age={18}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
};

export default App;

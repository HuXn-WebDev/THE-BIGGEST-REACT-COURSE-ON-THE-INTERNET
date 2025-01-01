// // The useReducer Hook is the alternative to useState Hook.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// The useReducer Hook returns the current (state) and a (dispatch) method.

// State as the name suggest will be the "state" of your component.
// dispatch will allow you to change that state, Think of it is like [val, setVal]

// useReducer accepts two parameters (reducer, initialState)

// The reducer function contains your custom state logic
//  The initialState can be a simple value but generally will contain an object.

// 1 👇
// import { useReducer } from "react";

// const Counter = () => {
//   // 2 👇
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       {/*  6 👇 */}
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       <h1>{state.count}</h1>
//     </div>
//   );
// };

// // 3 👇
// const initialState = { count: 0 };

// // 4 👇
// const reducer = (state, action) => {
//   // 5 👇
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "reset":
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// };
// ----------------------------------

import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled action type");
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "decrement" })}
      />
    </View>
  );
};

export default Counter;

// Define the state type
export type CounterState = {
  count: number;
};

// Define action types
type IncrementAction = {
  type: "INCREMENT";
};

type DecrementAction = {
  type: "DECREMENT";
};

// Union type for actions
export type CounterAction = IncrementAction | DecrementAction;

// Define the reducer function
export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

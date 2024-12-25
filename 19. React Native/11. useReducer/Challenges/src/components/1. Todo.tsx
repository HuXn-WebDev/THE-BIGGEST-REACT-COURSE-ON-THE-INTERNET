import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Define the types for the state and actions
interface Todo {
  id: string;
  text: string;
}

interface State {
  todos: Todo[];
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}

interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: string;
}

type Action = AddTodoAction | RemoveTodoAction;

// Define initial state
const initialState: State = { todos: [] };

// Define reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const ToDoApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoText: {
    fontSize: 16,
  },
  removeButton: {
    color: "red",
  },
});

export default ToDoApp;

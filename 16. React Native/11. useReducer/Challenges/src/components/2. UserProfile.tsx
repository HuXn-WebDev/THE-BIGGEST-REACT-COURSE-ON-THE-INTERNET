import { useReducer, useState } from "react";
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
interface Profile {
  id: string;
  name: string;
  age: number;
}

interface State {
  profiles: Profile[];
}

interface AddProfileAction {
  type: "ADD_PROFILE";
  payload: { name: string; age: number };
}

interface RemoveProfileAction {
  type: "REMOVE_PROFILE";
  payload: string;
}

interface UpdateProfileAction {
  type: "UPDATE_PROFILE";
  payload: { id: string; name: string; age: number };
}

type Action = AddProfileAction | RemoveProfileAction | UpdateProfileAction;

// Define initial state
const initialState: State = { profiles: [] };

// Define reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_PROFILE":
      return {
        profiles: [
          ...state.profiles,
          {
            id: Date.now().toString(),
            name: action.payload.name,
            age: action.payload.age,
          },
        ],
      };
    case "REMOVE_PROFILE":
      return {
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case "UPDATE_PROFILE":
      return {
        profiles: state.profiles.map((profile) =>
          profile.id === action.payload.id
            ? { ...profile, name: action.payload.name, age: action.payload.age }
            : profile
        ),
      };
    default:
      return state;
  }
};

const UserProfileApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddProfile = () => {
    if (name.trim() && age.trim()) {
      dispatch({
        type: "ADD_PROFILE",
        payload: { name, age: parseInt(age, 10) },
      });
      setName("");
      setAge("");
    }
  };

  const handleUpdateProfile = (id: string) => {
    if (name.trim() && age.trim()) {
      dispatch({
        type: "UPDATE_PROFILE",
        payload: { id, name, age: parseInt(age, 10) },
      });
      setName("");
      setAge("");
      setEditingId(null);
    }
  };

  const handleRemoveProfile = (id: string) => {
    dispatch({ type: "REMOVE_PROFILE", payload: id });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      {editingId ? (
        <Button
          title="Update Profile"
          onPress={() => handleUpdateProfile(editingId)}
        />
      ) : (
        <Button title="Add Profile" onPress={handleAddProfile} />
      )}
      <FlatList
        data={state.profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              {item.name}, {item.age} years old
            </Text>
            <TouchableOpacity
              onPress={() => {
                setName(item.name);
                setAge(item.age.toString());
                setEditingId(item.id);
              }}
            >
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveProfile(item.id)}>
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
  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileText: {
    fontSize: 16,
    flex: 1,
  },
  editButton: {
    color: "blue",
    marginRight: 10,
  },
  removeButton: {
    color: "red",
  },
});

export default UserProfileApp;

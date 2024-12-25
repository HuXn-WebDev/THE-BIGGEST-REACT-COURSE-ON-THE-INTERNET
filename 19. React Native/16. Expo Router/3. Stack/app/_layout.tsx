import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    // --------- Without Options
    // <Stack>
    //   <Stack.Screen name="Index" />
    //   <Stack.Screen name="users/[id]" />
    // </Stack>

    // --------- Adding Options
    <Stack>
      <Stack.Screen
        name="Index"
        options={{
          headerTitle: "Home Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />

      <Stack.Screen
        name="About"
        options={{
          headerTitle: "About Page",
        }}
      />

      <Stack.Screen
        name="users/[id]"
        options={{
          headerTitle: "User Page",
        }}
      />
    </Stack>
  );
};

export default RootLayout;

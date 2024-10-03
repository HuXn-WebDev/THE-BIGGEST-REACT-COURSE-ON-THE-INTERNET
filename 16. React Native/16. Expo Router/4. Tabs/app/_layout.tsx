import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Index" />
      <Tabs.Screen name="About" />
      <Tabs.Screen name="users/[id]" />
    </Tabs>
  );
};

export default RootLayout;

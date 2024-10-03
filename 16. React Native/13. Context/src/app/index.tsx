import ComponentA from "@/components/ComponentA";
import { UserProvider } from "@/context/UserContext";

const Index = () => {
  return (
    <UserProvider>
      <ComponentA />
    </UserProvider>
  );
};

export default Index;

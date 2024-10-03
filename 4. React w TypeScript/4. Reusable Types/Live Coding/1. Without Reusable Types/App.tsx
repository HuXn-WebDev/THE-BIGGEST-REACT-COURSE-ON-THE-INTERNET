import AdminInfo from "@/components/AdminInfo";
import UsersInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <>
      <h1>Users Info 👇</h1>
      <UsersInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
      />

      <h1>Admin Info 👇</h1>
      <AdminInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Mars", "Unknown"]}
        admin="yes"
      />
    </>
  );
}

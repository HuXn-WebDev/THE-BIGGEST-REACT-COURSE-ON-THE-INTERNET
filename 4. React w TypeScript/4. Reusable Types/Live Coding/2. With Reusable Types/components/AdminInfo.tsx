import { type Info } from "./UserInfo";

type AdminInfoList = Info & {
  admin: string;
};

const AdminInfo = ({
  username,
  email,
  age,
  location,
  admin,
}: AdminInfoList) => {
  return (
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
      <li>{admin}</li>
    </ul>
  );
};

export default AdminInfo;

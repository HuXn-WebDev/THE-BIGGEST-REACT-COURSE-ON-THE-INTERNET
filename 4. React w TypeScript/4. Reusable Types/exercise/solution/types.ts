type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };

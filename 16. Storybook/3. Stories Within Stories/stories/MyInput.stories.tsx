import MyInput from "../components/MyInput";

export default {
  title: "My Input",
  component: MyInput,
};

export const SmallInput = () => (
  <MyInput size="10rem" placeholder="Enter your name" />
);

export const MediumInput = () => (
  <MyInput size="20rem" placeholder="Enter your name" />
);

export const LargeInput = () => (
  <MyInput size="40rem" placeholder="Enter your name" />
);

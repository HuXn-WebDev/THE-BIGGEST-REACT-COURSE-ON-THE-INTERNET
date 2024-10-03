"use client";

import MyComponent from "@/components/MyComponent";
import { MyContextProvider } from "@/context/MyContext";

export default function Home() {
  return (
    <>
      <MyContextProvider>
        <MyComponent />
      </MyContextProvider>
    </>
  );
}

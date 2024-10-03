"use client";

import MyComponent from "@/components/MyComponent";
import MyProvider from "@/context/MyContext";

export default function Home() {
  return (
    <>
      <MyProvider>
        <MyComponent />
      </MyProvider>
    </>
  );
}

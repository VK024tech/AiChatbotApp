import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Home";
import Conversation from "./Conversation";

function App() {
  return (
    <>
      <div className="flex flex-col mx-auto w-full max-w-[1580px]">
        <section className="min-h-screen flex flex-col bg-gradient-to-r from-white to-blue-50">
          <Header />
          <Conversation/>
          <Body />
        </section>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Home";
import Conversation from "./Components/Conversation";
import ApiFunctionality from "./Components/ApiFunctionality";

function App() {
  ///////lifted from home////////////////
  const [userText, setUserText] = useState("");
  const userMesssage = userText;
  const [aiText, setAiText] = useState("");
  const aiMesssage = aiText;
  ///////lifted from home////////////////

  <ApiFunctionality userMesssage={userMesssage}   />

  return (
    <>
      <div className="flex flex-col mx-auto w-full max-w-[1580px]">
        <section className=" flex min-h-screen flex-col bg-gradient-to-r from-white to-blue-50">
          <Header />
          <Body
            userText={userText}
            setUserText={setUserText}
            userMesssage={userMesssage}
            aiText={aiText}
            setAiText={setAiText}
            aiMesssage={aiMesssage}
          />
          <Conversation userText={userText} aiText={aiText}/>
          
        </section>
      </div>
    </>
  );
}

export default App;

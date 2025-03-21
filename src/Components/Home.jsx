import React, { useEffect, useState } from "react";
import ApiFunctionality from "./ApiFunctionality";

export default function Body({
  userMesssage,
  userText,
  setUserText,
  aiMesssage,
  setAiText,
  aiText,
}) {
  const [startTyping, setStartTyping] = useState(false);

  const handleApi = async () => {
    try {
      const result = await ApiFunctionality(userMesssage);
      // console.log(result);
      setAiText(result.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(aiText);
  }, [aiText]);

  const [messages, setMessages] = useState([]);

  const handleMessages = async () => {
    if (userText.trim()) {
      const userMesssage = { sender: "user", text: userText };
      setMessages((prevMessage) => [...prevMessage, userMesssage]);
      setUserText("");

      try {
        if (aiText) {
          const aiResponse = {sender: "Ai", text: aiText };
          setMessages((prevMessage) => [...prevMessage, aiResponse]);
        } else {
          const aiResponse = {
            sender: "Ai",
            text: "Sorry! I could not process your request",
          };
          setMessages((prevMessage) => [...prevMessage, aiResponse]);
        }
      } catch (error) {
        const aiResponse = {
          sender: "Ai",
          text: "Something went wrong!",
        };
        setMessages((prevMessage) => [...prevMessage, aiResponse]);
      }
    }
    
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <main className="w-full min-h-screen fixed  justify-end flex flex-col  mb-12 m-auto ">
      {/* <h1 className="p-2 text-2xl font-medium   text-gray-800">
        Hii,{" "}
        <span className="moving text-transparent bg-clip-text font-bold">
          Vivek!
        </span>
        <br /> How can i help you?
      </h1> */}
      <div className=" p-4 mb-8 ">
        <div
          className={` bg-gray-50 p-2  flex  justify-between mx-auto  items-center w-auto sm:w-xl  rounded-2xl border-2 border-blue-200 shadow-blue-500/40 shadow-[0px_4px_15px] min-h-16 h-auto max-h-32 md:min-h-14 md:min-w-2xl !outline-none transition-shadow duration-800 ease-in-out ${
            startTyping
              ? " border-blue-200 shadow-blue-600/80 shadow-[0px_4px_15px]"
              : ""
          } `}
        >
          <input
            onBlur={() => {
              setStartTyping(false);
            }}
            onInput={() => {
              setStartTyping(true);
            }}
            onClick={() => {
              setStartTyping(true);
            }}
            id="userInput"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            className="w-full m-1  bg-gray-50 h-auto p-2 !outline-none placeholder-gray-500  text-wrap"
            autoComplete="off"
            type="text"
            placeholder="Feel free to ask me anything..."
          />
          <button
            onClick={() => {
              {
                handleApi()
                handleMessages();
              }
              // console.log(userMesssage);
            }}
            className="bg-gray-300 p-2 px-3 rounded-xl cursor-pointer  outline-none hover:bg-gradient-to-br from-green-200 to-green-400"
          >
            <i className="text-2xl fa-regular fa-paper-plane text-white"></i>
          </button>
        </div>
      </div>
    </main>
  );
}

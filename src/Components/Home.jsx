import React, { useEffect, useRef, useState } from "react";
import ApiFunctionality from "./ApiFunctionality";
import { v4 as uuidv4 } from "uuid";

export default function Body({
  userMesssage,
  userText,
  setUserText,
  aiMesssage,
  setAiText,
  aiText,
  messages,
  setMessages,
  loading,
  setLoading,
}) {
  const initialMount = useRef(true);
  const [startTyping, setStartTyping] = useState(false);
  const [emptyBClicked, setEmptyBClicked] = useState(false);


  ////session id/////



  const handleApi = async () => {
    try {
      setLoading(true);

      const result = await ApiFunctionality(userMesssage);
      // console.log(result);
      setAiText(result.candidates[0].content.parts[0].text);
    } catch (error) {
      const aiResponse = {
        sender: "Ai",
        text: "Something went wrong!",
      };
      setMessages((prevMessage) => [...prevMessage, aiResponse]);
    }
  };

  const handleMessages = async () => {
    if (userText.trim()) {
      const userMesssage = { sender: "user", text: userText };
      setMessages((prevMessage) => [...prevMessage, userMesssage]);
      setUserText("");
    }
  };

  useEffect(() => {
    console.log("inside apiarray");
    if (initialMount.current) {
      console.log("mounted");

      initialMount.current = false;
    } else {
      console.log("apiarraystart");
      try {
        if (aiText) {
          const aiResponse = { sender: "Ai", text: aiText };
          setLoading(false);
          setMessages((prevMessage) => [...prevMessage, aiResponse]);
        } else if (aiText !== null && aiText !== "") {
          console.log(aiText);
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
      } finally {
        setLoading(false);
      }
    }
  }, [aiText]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  function button() {
    if (userText.length > 0) {
      return (
        <button
          onClick={() => {
            setEmptyBClicked(false);
            handleMessages();
            handleApi();
          }}
          className="bg-gray-300 p-2 px-3 rounded-xl cursor-pointer  outline-none hover:bg-gradient-to-br from-green-200 to-green-400"
        >
          <i className="text-2xl fa-regular fa-paper-plane text-white"></i>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            setEmptyBClicked(true);
            // console.log(emptyBClicked)
          }}
          className="bg-gray-300 p-2 px-3 rounded-xl cursor-pointer  outline-none hover:bg-gradient-to-br from-red-100 to-red-300"
        >
          <i className="text-2xl fa-regular fa-paper-plane text-white"></i>
        </button>
      );
    }
  }

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
          className={` bg-gray-50 p-2  flex  justify-between mx-auto  items-center w-auto sm:w-xl  rounded-2xl border-2 border-blue-200 shadow-blue-500/40 shadow-[0px_4px_15px] min-h-16 h-auto max-h-32 md:min-h-14 md:min-w-2xl !outline-none transition-shadow  duration-800   ease-in-out ${
            emptyBClicked
              ? " border-red-300 shadow-red-600/80 shadow-[0px_4px_15px]"
              : startTyping && userText.length > 0
              ? " border-blue-300 shadow-blue-600/80 shadow-[0px_4px_15px]"
              : ""
          } `}
        >
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (userText.length > 0) {
                  setEmptyBClicked(false);
                  handleMessages();
                  handleApi();
                } else {
                  setEmptyBClicked(true);
                }
              }
            }}
            onBlur={() => {
              setStartTyping(false);
            }}
            onInput={() => {
              setStartTyping(true);
              setEmptyBClicked(false);
              // console.log(emptyBClicked)
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
          {button()}
        </div>
      </div>
    </main>
  );
}

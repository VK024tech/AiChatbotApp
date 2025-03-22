import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Conversation({
  userText,
  aiText,
  messages,
  loading,
  setLoading,
}) {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function renderMessage() {
    return messages.map((message, index) => {
      if (message.sender === "user") {
        return (
          <div key={index} className="flex flex-row items-start justify-end ">
            <div className="outgoing ">{message.text}</div>

            <div className="bg-blue-400 rounded-full ml-2">
              <img
                className="w-8 min-w-8 "
                src="src\assets\fevicon.png"
                alt="logo"
              />
            </div>
          </div>
        );
      } else if (message.sender === "Ai") {
        return (
          <div
            key={index}
            className="flex flex-row items-start gap-2  justify-start"
          >
            <div className="bg-blue-400 rounded-full ml-2">
              <img
                className="w-8 min-w-8 "
                src="src\assets\fevicon.png"
                alt="logo"
              />
            </div>
            <div className="incoming  ">
              <ReactMarkdown
                children={message.text}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </div>
        );
      }
    });
  }

  return (
    <main
      key="maindiv"
      className=" m-auto lg:mx-54   md:mx-12 sm:mx-2 sm:px-2 gap-4 min-h-screen h-auto  px-8 flex flex-col justify-end mt-16 scroll-smooth "
    >
      {renderMessage()}
      {loading && (
        <div className="flex flex-row items-start gap-2  justify-start">
          <div className="bg-gray-300 rounded-full ml-2">
            <img
              className="w-8 min-w-8 "
              src="src\assets\fevicon.png"
              alt="logo"
            />
          </div>
          <div className="incoming !bg-gray-200 relative cursor-default">
            <span className="load " style={{ "--i": 1 }}>
              T
            </span>
            <span className="load" style={{ "--i": 2 }}>
              h
            </span>
            <span className="load" style={{ "--i": 3 }}>
              i
            </span>
            <span className="load" style={{ "--i": 4 }}>
              n
            </span>
            <span className="load" style={{ "--i": 5 }}>
              k
            </span>
            <span className="load" style={{ "--i": 6 }}>
              i
            </span>
            <span className="load" style={{ "--i": 7 }}>
              n
            </span>
            <span className="load" style={{ "--i": 8 }}>
              g
            </span>
            <span className="load" style={{ "--i": 9 }}>
              .
            </span>
            <span className="load " style={{ "--i": 10 }}>
              .
            </span>
            <span className="load " style={{ "--i": 11 }}>
              .
            </span>
          </div>
        </div>
      )}

      <div className="mb-28" ref={messageEndRef}></div>
    </main>
  );
}

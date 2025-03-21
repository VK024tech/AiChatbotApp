import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Conversation({ userText, aiText }) {



  return (
    <main className="m-auto gap-4 min-h-screen h-auto  px-8 flex flex-col justify-end  ">
      <div className="flex flex-row items-start justify-end ">
        <div className="outgoing  ">{userText}</div>

        <div className="bg-blue-400 rounded-full ml-2">
          <img
            className="w-8 min-w-8 "
            src="src\assets\fevicon.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="flex flex-row items-start gap-2  justify-start">
        <div className="bg-blue-400 rounded-full ml-2">
          <img
            className="w-8 min-w-8 "
            src="src\assets\fevicon.png"
            alt="logo"
          />
        </div>
        <div className="incoming  ">
          {/* <ReactMarkdown children={aiText} remarkPlugins={[remarkGfm]} /> */}
        </div>
      </div>

      <div className="mb-28"></div>
    </main>
  );
}

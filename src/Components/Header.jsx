import React from "react";

export default function Header() {
  return (
    <div >
      <header className="fixed w-full backdrop-blur-[3px] bg-[#8EC5FF70] flex gap-4 mb-12 items-center border-b-1 border-gray-200 justify-between p-6 pt-4 pb-2 m-auto">
        <div>
          <i className="text-xl text-gray-700 fa-solid fa-bars"></i>
        </div>

        <h1 className="flex  items-center font-medium text-2xl text-gray-800">
          <div className="bg-blue-400 rounded-full mr-2">
            <img className="w-8 min-w-8 " src="src\assets\fevicon.png" alt="logo" />
          </div>
          Sensei<span className="text-blue-500">Bot</span>
        </h1>
        <div className="flex gap-6 text-gray-700 items-center">
          <i className="text-xl fa-regular fa-pen-to-square"></i>
          <div className="  bg-blue-300 p-4 rounded-full"></div>
        </div>
      </header>
    </div>
  );
}

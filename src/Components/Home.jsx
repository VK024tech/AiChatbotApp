import React from "react";

export default function Body() {
  return (
    <main className="flex flex-col flex-1 p-4 items-center text-center justify-center ">
      {/* <h1 className="p-2 text-2xl font-medium   text-gray-800">
        Hii,{" "}
        <span className="moving text-transparent bg-clip-text font-bold">
          Vivek!
        </span>
        <br /> How can i help you?
      </h1> */}
      <div className="fixed  mb-42">
      <div className=" bg-gray-50 p-2 flex  justify-between mx-auto  items-center w-full sm:w-2xl  rounded-2xl border-2 border-gray-300 h-16 md:h-14 md:min-w-2xl   ">
        <input
          className="w-full h-full p-2 outline-none placeholder-gray-500 "
          type="text"
          placeholder="Feel free to ask me anything..."
        />
        <button  className="bg-gray-300 p-2 px-3 rounded-xl cursor-pointer  outline-none hover:bg-gradient-to-br from-green-200 to-green-400">
          <i className="     text-2xl fa-regular fa-paper-plane text-white"></i>
        </button>
      </div>
      </div>
    </main>
  );
}

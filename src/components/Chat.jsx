import React from "react";
import SideBar from "./SideBar";
import Chats from "./Chats";

const Chat = () => {
  return (
    <div className="w-full h-[100vh] pt-20">
      <div className="w-[65%] h-[80%] flex mx-auto border border-white">
        <SideBar />
        <Chats />
      </div>
    </div>
  );
};

export default Chat;

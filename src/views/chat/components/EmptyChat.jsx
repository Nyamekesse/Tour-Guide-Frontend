import React from "react";
import WelcomeImage from "../../../assets/welcome_cats_thqn.svg";

const EmptyChat = () => {
  return (
    <div className="w-[50%] mx-auto">
      <img className="w-full" src={WelcomeImage} alt="empty image" />
    </div>
  );
};

export default EmptyChat;

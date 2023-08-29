import React, { useState } from "react";
import ChatView from "../chat";
import SentimentAnalysisView from "../sentiment";
import { getStoredUser } from "../../shared/utils";
import { Navigate } from "react-router-dom";

const MainView = () => {
  const [user, setProfile] = useState(getStoredUser());
  return (
    <>
      {user?.profile && user?.token ? (
        <div>
          {user.profile.role === "tourist" ? (
            <ChatView user={user} />
          ) : (
            <SentimentAnalysisView user={user} />
          )}
        </div>
      ) : (
        <Navigate to="/log-in" />
      )}
    </>
  );
};

export default MainView;

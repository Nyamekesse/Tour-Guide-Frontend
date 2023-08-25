import React, { useEffect, useRef, useState } from "react";
import AiResponse from "./components/AiResponse";
import Sender from "./components/Sender";
import EmptyChat from "./components/EmptyChat";
import { useChat } from "./hooks/useChat";
import Loading from "./components/Loading";

const ChatView = () => {
  const scrollRef = useRef();
  const { data, isLoading, isError, error, mutate } = useChat();
  const [messages, setMessages] = useState([
    { author: "user", content: "how are you" },
    { author: "ai", content: "i am good" },
  ]);
  const [chat, setChat] = useState({ author: "user", content: "" });
  const handleChange = (e) => {
    setChat({ ...chat, content: e.target.value });
  };
  const handleChatSend = () => {
    if (chat.content.length) mutate(chat.content);
    setMessages((prevChat) => [...prevChat, chat]);
    setChat({ ...chat, content: "" });
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setMessages((prevChat) => [...prevChat, { author: "ai", content: data }]);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data, scrollRef]);

  if (isError) {
    return (
      <>
        <h2>Something happened</h2>
        <p>{error.toString()}</p>
      </>
    );
  }
  return (
    <>
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div className="flex h-screen w-full antialiased text-gray-800">
          <div className="flex flex-row h-full w-full justify-between  max-w-7xl overflow-x-hidden">
            <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
              <div className="flex flex-row items-center justify-center h-12 w-full">
                <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 font-bold text-2xl">Tour Advisor</div>
              </div>
              <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                <div className="h-20 w-20 rounded-full border overflow-hidden">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.092Z2opsazcOJjXNQpydNgHaIR%26pid%3DApi&f=1&ipt=2b1362b89fff5a3ab79da20ab93bab9f5fce267335b5d5629f52c4aafbbf333e&ipo=images"
                    alt="Avatar"
                    className="h-full w-full"
                  />
                </div>
                <div className="text-sm font-semibold mt-2">Mr. UCC</div>
              </div>
            </div>
            <div className="flex flex-col flex-auto w-5/6 h-full p-6">
              <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-12 gap-y-2">
                      {messages?.length ? (
                        messages.map((message, index) => {
                          if (message.author !== "ai") {
                            return (
                              message.content && (
                                <Sender key={index} text={message.content} />
                              )
                            );
                          }
                          return (
                            message.content && (
                              <AiResponse key={index} text={message.content} />
                            )
                          );
                        })
                      ) : (
                        <EmptyChat />
                      )}
                      {isLoading && <Loading />}
                      <div ref={scrollRef} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                  <div className="flex-grow ml-4">
                    <div className="relative w-full">
                      <input
                        name="chat"
                        value={chat.content}
                        onChange={handleChange}
                        type="text"
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <button
                      className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                      onClick={handleChatSend}
                    >
                      <span>Send</span>
                      <span className="ml-2">
                        <svg
                          className="w-4 h-4 transform rotate-45 -mt-px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatView;

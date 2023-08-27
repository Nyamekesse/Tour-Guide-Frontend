import { Route, Routes } from "react-router-dom";
import ChatView from "./views/chat";
import PageNotFound from "./views/page-not-found";
import LogInView from "./views/log-in";
import SignUpView from "./views/sign-up";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatView />} />
        {/* <Route index element={<ChatView />} /> */}
        <Route path="/chat" element={<ChatView />} />
        <Route path="/log-in" element={<LogInView />} />
        <Route path="/register-new-user" element={<SignUpView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

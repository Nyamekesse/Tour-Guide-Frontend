import { Route, Routes } from "react-router-dom";
import PageNotFound from "./views/page-not-found";
import LogInView from "./views/log-in";
import SignUpView from "./views/sign-up";
import MainView from "./views/main-view";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="/home/dashboard" element={<MainView />} />
        <Route path="/log-in" element={<LogInView />} />
        <Route path="/register-new-user" element={<SignUpView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

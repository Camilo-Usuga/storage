import { Route, Routes } from "react-router-dom";
import SignUp from "./components/registerForm";
import IndexPage from "./components/start";
import Home from "./components/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;

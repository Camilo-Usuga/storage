import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import FileUpload from "./components/FileUpload";
import FileDownload from "./components/FileDownload";
import Data from "./components/Data";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/data" element={<Data />} />
      <Route path="/upload" element={<FileUpload />} />
      <Route path="/download" element={<FileDownload />} />
    </Routes>
  );
};

export default App;

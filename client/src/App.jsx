import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import { useEffect } from "react";
import Swal from 'sweetalert2'


function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
    }, 5000);
    // I will be deleted while component is unmounting.
    return () => clearTimeout(timer) 
    }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Header from "./components/Header";
import Register from "./routes/Register";
import Contact from "./routes/Contact";

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

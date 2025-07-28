import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Project from "../component/Project";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../home/Home";
import RandomSite from "../site/RandomSite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<RandomSite />} />
      </Routes>
    </>
  );
}

export default App;

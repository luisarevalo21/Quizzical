import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;

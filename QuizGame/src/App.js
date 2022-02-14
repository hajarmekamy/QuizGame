import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StartGame from "./Containers/StartGame";
import Quiz from "./Containers/Quiz";
import { data } from "./Assets/QuizData";
import ScoreResults from "./Containers/ScoreResults";
import State from "./Context/Providers/State";

function App() {
  let dataShuffled = data.sort(() => Math.random() - 0.5);

  return (
    <State>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<StartGame />} />
          </Routes>

          <Routes>
            <Route path="/quiz" element={<Quiz data={dataShuffled} />} />
          </Routes>

          <Routes>
            <Route path="/results" element={<ScoreResults />} />
          </Routes>
        </div>
      </Router>
    </State>
  );
}

export default App;

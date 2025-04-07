import { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import Instructions from "./components/Instructions";
import "./App.css";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="intro">
        <h1 className="welcome">
          Welcome To The Trivia Quiz App!
        </h1>
        <Instructions />
        <div className='play'>
          <button className="play-button" onClick={() => setPlay(true)}><h1><span>Play!</span></h1></button>
          {play ? (
            <div>
              <QuestionForm />
              <button onClick={() => setPlay(false)}>Reset</button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

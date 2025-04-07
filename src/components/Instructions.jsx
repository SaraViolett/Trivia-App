import { useState } from "react";

function Instructions() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div className="instructions">
      <div className="instruction-button">
        <button onClick={() => setShowInstructions(true)}>
          Learn how to play:
        </button>
      </div>
      {showInstructions ? (
        <div>
          <h3>Instructions:</h3>
          <ol>
            <li>Press Play</li>
            <li>Enter your name</li>
            <li>Filter question by category and difficulty</li>
            <ul>
              <li>Select question category</li>
              <li>Select question difficulty</li>
              <li>Submit question filter</li>
            </ul>
            <li>Answer the given question</li>
            <li>Submit Answer</li>
            <li>See how you did</li>
            <li>Press reset button to test your triva knowledge again</li>
          </ol>
          <h3>Good Luck and Enjoy!</h3>
          <div className="instruction-button">
            <button onClick={() => setShowInstructions(false)}>
              Hide Instructions
            </button>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default Instructions;

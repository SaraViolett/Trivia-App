import { useState } from 'react';

function Instructions() {
    const [showInstructions, setShowInstructions] = useState(false)
    return (
        <div className="instructions">
            <button onClick={() => setShowInstructions(true)}>Learn how to play:</button>
            {showInstructions ? (
                <div>
                    <ol>
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
                        <li>Press button to test your triva knowledge again</li>
                    </ol>
                    <button onClick={() => setShowInstructions(false)}>Hide Instructions</button>
                </div>
            ) : <p></p>
            }   
        </div>
    )
}
export default Instructions;
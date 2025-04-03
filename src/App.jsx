import { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import Instructions from './components/Instructions';
import './App.css'

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className='intro'>
        <h1>Welcome To The Trivia Quiz App!</h1>
        <Instructions/>
        <button onClick={() => setPlay(true)}>Play!</button>
        {play ? (<QuestionForm/>) : (
          <p>Press play to play!</p>
        )}
      </div>
    </>
  )
}

export default App;

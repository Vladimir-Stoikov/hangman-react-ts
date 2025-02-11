import { useEffect, useState } from "react";
import words from "./wordList.json"

function App() {
  const [wordGuess, setWordGuess] = useState("empty");

  function changeWord() {
    setWordGuess(words[Math.floor(Math.random() * words.length)]);
  }

  console.log(wordGuess);
  useEffect(() => {
    changeWord();
  console.log(wordGuess);
  }, [])
  return <h1>Hi</h1>
}

export default App

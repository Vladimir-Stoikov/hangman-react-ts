import { useState } from "react";
import words from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordGuess, setWordGuess] = useState(words[Math.floor(Math.random() * words.length)]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{
      fontSize: "2rem",
      textAlign: "center"
    }}>Lose Win</div>
    <div>Hi {wordGuess}</div>
    <HangmanDrawing />
    <HangmanWord />
    <Keyboard />
  </div>
}

export default App

type HangmanWordProps = {
  reveal: boolean;
  guessedLetters: string[];
  wordToGuess: string
}

export default function HangmanWord({reveal, guessedLetters, wordToGuess}): HangmanWordProps {

  // const word = "test";
  // const guessedLetters = ["e", "s"]

  return (
    <div style={{display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace"}}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{borderBottom: ".1em solid black"}}>
          <span style={{
            visibility: guessedLetters.includes(letter) || reveal? "visible" : "hidden",
            color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
          }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

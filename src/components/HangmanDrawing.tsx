const HEAD = (
  <div style={{
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    border: "10px solid black",
    position: "absolute",
    top: "70px",
    right: "-30px"
  }}/>
)

const BODY = (
  <div style={{
    height: "100px",
    width: "10px",
    background: "black",
    position: "absolute",
    top: "140px",
    right: "0"
  }}/>
)

const RIGHT_ARM = (
  <div style={{
    height: "10px",
    width: "100px",
    background: "black",
    position: "absolute",
    top: "160px",
    right: "-90px",
    rotate: "-30deg",
  }}/>
)

const LEFT_ARM = (
  <div style={{
    height: "10px",
    width: "100px",
    background: "black",
    position: "absolute",
    top: "160px",
    right: "0px",
    rotate: "30deg",
  }}/>
)

const RIGHT_LEG = (
  <div style={{
    height: "10px",
    width: "100px",
    background: "black",
    position: "absolute",
    top: "270px",
    right: "-70px",
    rotate: "60deg",
  }}/>
)

const LEFT_LEG = (
  <div style={{
    height: "10px",
    width: "100px",
    background: "black",
    position: "absolute",
    top: "270px",
    right: "-20px",
    rotate: "-60deg",
  }}/>
)

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return <div style={{position: "relative"}}>
    {BODY_PARTS.slice(0, numberOfGuesses).map((part, index) => {
      return (
        <div key={index}>{part}</div>
      )
    })}
    <div style={{ height: '70px', width: "10px", background: "black", position: "absolute", top: 0, right: 0}}/>
    <div style={{ height: '10px', width: "200px", background: "black", marginLeft: "120px"}}/>
    <div style={{ height: '400px', width: "10px", background: "black", marginLeft: "120px"}}/>
    <div style={{ height: '10px', width: "250px", background: "black"}}/>
  </div>
}

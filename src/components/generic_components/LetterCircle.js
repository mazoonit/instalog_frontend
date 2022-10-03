export default function LetterCircle({ letter }) {
  let letterHexa = letter.charCodeAt(0);

  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage: `linear-gradient(${
          letterHexa * Math.random()
        }deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,

        borderRadius: "50%",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundClip: "text",
        textFillColor: "transparent",
      }}
    >
      <strong>
        <p style={{ color: "#fff" }}>{letter ? letter.toUpperCase() : "A"}</p>
      </strong>
    </div>
  );
}

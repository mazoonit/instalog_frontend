export default function LetterCircle({ letter }) {
  let letterHexa = letter.charCodeAt(0);

  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage: `linear-gradient(${
          letterHexa * Math.random()
        }deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,

        backgroundClip: "text",
        textFillColor: "transparent",
      }}
      className="text-center lg:text-justify mx-auto lg:mx-0 flex self-center justify-center items-center w-[30px] h-[30px] rounded-full "
    >
      <strong>
        <p style={{ color: "#fff" }}>{letter ? letter.toUpperCase() : "A"}</p>
      </strong>
    </div>
  );
}

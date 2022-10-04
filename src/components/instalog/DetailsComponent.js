import "./DetailsComponent.css";
const TitledAttribute = ({ title, value, fontSize }) => {
  if (!fontSize) {
    fontSize = "13px";
  }
  return (
    <dev>
      <p
        style={{
          display: "inline-block",
          marginRight: "25px",
          color: "#929292",
          fontSize: "13px",
        }}
      >
        {title}
      </p>
      <p style={{ display: "inline-block", fontSize: fontSize }}> {value}</p>
    </dev>
  );
};
export default function DetailsComponent({ row }) {
  const titleColor = "#929292";
  const fontWeight = 500;
  const Title = ({ title }) => {
    return <p style={{ color: titleColor, fontWeight: fontWeight }}>{title}</p>;
  };
  return (
    <dev id="detailsComponent">
      <dev className="detailsComponentParagraph">
        <Title title="ACTOR" />
        <TitledAttribute
          title={"Name"}
          value={row.actor ? row.actor.name : null}
        />
        <TitledAttribute
          title={"Email"}
          value={row.actor ? row.actor.email : row.actor.email}
        />
        <TitledAttribute
          title={"ID"}
          fontSize={"10px"}
          value={row.actor ? row.actor.id : null}
        />
      </dev>
      <dev className="detailsComponentParagraph">
        <Title title="ACTION" />
        <TitledAttribute
          title={"Name"}
          value={row.action ? row.action.name : null}
        />
        <TitledAttribute title={"Object"} value={"event_action"} />
        <TitledAttribute
          title={"ID"}
          value={row.action ? row.action.id : null}
          fontSize={"10px"}
        />
      </dev>
      <dev className="detailsComponentParagraph">
        <Title title="DATE" />
        <TitledAttribute
          title={"DATE"}
          value={row.occurred_at ? row.occurred_at.split("T")[0] : null}
        />
      </dev>
      <dev className="detailsComponentParagraph">
        <Title title="METADATA" />
        <div class="block"></div>
      </dev>
      <dev className="detailsComponentParagraph">
        <Title title="TARGET" />
        <div class="block"></div>
      </dev>
      <dev className="detailsComponentParagraph"></dev>
    </dev>
  );
}

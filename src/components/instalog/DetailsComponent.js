const TitledAttribute = ({ title, value,fontSize }) => {
  if(!fontSize){
    fontSize="13px";
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
      <p style={{ display: "inline-block",fontSize:fontSize }}> {value}</p>
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
    <dev
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "stretch",
        flexWrap: "wrap",
        alignContent: "flex-start",
        width: "100%",
        padding: "10px",
      }}
    >
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
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
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
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
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
        <Title title="DATE" />
        <TitledAttribute
          title={"DATE"}
          value={row.occurred_at ? row.occurred_at.split("T")[0] : null}
        />
      </dev>
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
        <Title title="METADATA" />
        <div class="block"></div>
      </dev>
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
        <Title title="TARGET" />
        <div class="block"></div>
      </dev>
      <dev style={{ width: "33%" }}></dev>
    </dev>
  );
}

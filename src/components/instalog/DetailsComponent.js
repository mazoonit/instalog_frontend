const TitledAttribute = ({ title, value }) => {
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
      <p style={{ display: "inline-block" }}> {value}</p>
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
        <TitledAttribute title={"Name"} value={row.name} />
        <TitledAttribute title={"Email"} value={row.email} />
        <TitledAttribute title={"ID"} value={row.id} />
      </dev>
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
        <Title title="ACTION" />
        <TitledAttribute title={"Name"} value={row.action.name} />
        <TitledAttribute title={"Object"} value={"event_action"} />
        <TitledAttribute title={"ID"} value={row.action.id} />
      </dev>
      <dev style={{ display: "flex", flexDirection: "column", width: "33%" }}>
        <Title title="DATE" />
        <TitledAttribute title={"DATE"} value={row.occured_at.split("T")[0]} />
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

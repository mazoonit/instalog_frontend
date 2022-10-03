export default function Header({ headers }) {
  return (
    <dev
      style={{
        backgroundColor: "#F5F5F5",
        width: "80%",
        display: "block",
        margin: "auto",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        padding: "20px",
        paddingBottom: "10px",
      }}
      className="headerRow"
    >
      <input
        class="headerElement"
        style={{
          width: "70%",
          background: "transparent",
          border: "1px solid #ccc",
        }}
        placeholder={"Search"}
      />
      <button class="headerElement filterButton" id="filter">
        <i class="fa-solid fa-filter"></i> Filters
      </button>
      <button class="headerElement filterButton" id="filter">
        <i class="fa-solid fa-download"></i> Export
      </button>
      <button
        class="headerElement filterButton"
        id="filter"
        style={{
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <i class="fa-solid fa-circle" style={{ color: "purple" }}></i> Live
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "stretch",
          flexWrap: "wrap",
          alignContent: "flex-start",
          paddingLeft: "10px",
        }}
      >
        {headers
          ? headers.map((header) => {
              return <p class="colHeader">{header}</p>;
            })
          : null}
      </div>
    </dev>
  );
}

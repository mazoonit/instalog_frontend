import "./styles/header.css";
export default function Header({ headers, fetch, search }) {
  return (
    <dev id="headerRow">
      <input
        id="headerSearchInput"
        class="headerElement"
        placeholder={"Search"}
        onChange={(e) => {
          let searchValue = e.target.value;
          search({ searchValue: searchValue });
        }}
      />
      <button class="headerElement headerButton" id="filter">
        <i class="fa-solid fa-filter"></i> Filters
      </button>
      <button class="headerElement headerButton" id="export">
        <i class="fa-solid fa-download"></i> Export
      </button>
      <button
        class="headerElement headerButton"
        id="live"
        style={{
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <i class="fa-solid fa-circle" style={{ color: "purple" }}></i> Live
      </button>
      <div id="tableHeaders">
        {headers
          ? headers.map((header) => {
              return <p class="colHeader">{header}</p>;
            })
          : null}
      </div>
    </dev>
  );
}

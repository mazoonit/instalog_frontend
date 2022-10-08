//import "./styles/header.css";
export default function Header({ headers, fetch, search }) {
  const basicInputClasses =
    "block text-center mx-auto mt-1 lg:inline-block rounded-lg lg:rounded-none border border-[#ccc] lg:border-l-0 p-[12px] text-sm focus:outline-0 text-[#616161] hover:text-[#111] duration-300";
  return (
    <dev className="block w-4/5 mx-auto bg-[#f5f5f5] p-5 pb-2.5 rounded-tl-lg	rounded-tr-lg	text-center">
      <input
        class="rounded-lg lg:rounded-none lg:rounded-tl-lg lg:rounded-bl-lg p-[12px] text-sm bg-[transparent] w-4/6 border border-[#ccc] focus:outline-0"
        placeholder={"Search"}
        onChange={(e) => {
          let searchValue = e.target.value;
          search({ searchValue: searchValue });
        }}
      />
      <button class={basicInputClasses}>
        <i class="fa-solid fa-filter"></i> Filters
      </button>
      <button class={basicInputClasses}>
        <i class="fa-solid fa-download"></i> Export
      </button>
      <button class={basicInputClasses+" lg:rounded-tr-lg lg:rounded-br-lg"}>
        <i class="fa-solid fa-circle" style={{ color: "purple" }}></i> Live
      </button>
      <div className="flex flex-row justify-around items-stretch flex-wrap content-start mt-4 ml-1">
        {headers
          ? headers.map((header) => {
              return (
                <p class="basis-1/3 mr-auto flex text-sm font-semibold text-[#616161]">
                  {header}
                </p>
              );
            })
          : null}
      </div>
    </dev>
  );
}

import React, { useState, useEffect } from "react";
const filters = [
  { type: "text", key: "actor_id" },
  { type: "date", key: "from" },
  { type: "date", key: "to" },
];
export default function FiltersComponent({ basicInputClasses }) {
  const [showFilters, setShowFilters] = useState(false);
  const [activeKey, setActiveKey] = useState(filters[0].key);
  return (
    <div className={basicInputClasses + " relative p-[0]"}>
      <button
        className={"block focus:outline-0 p-[12px] w-[100%]"}
        onClick={() => {
          console.log("filter");
          setShowFilters((prevValue) => !prevValue);
        }}
      >
        <i className="fa-solid fa-filter"></i> Filters
      </button>
      {showFilters ? (
        <div className="absolute p-[20px] right-[0] top-[50px] w-[300px] h-[200px] bg-[#656565] opacity-[0.9] rounded-lg">
          <select
            onChange={(e) => {
              setActiveKey(e.target.value);
            }}
            className="mb-[10px] rounded-lg p-[12px] text-sm bg-[transparent] w-4/6 border border-[#ccc] focus:outline-0"
          >
            {filters.map(({ type, key }) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
          <br />
          {filters.map(({ type, key }) => {
            if (key == activeKey) {
              return (
                <input
                  className="mb-[10px] rounded-lg p-[12px] text-sm bg-[transparent] w-4/6 border border-[#ccc] focus:outline-0"
                  type={type}
                  id={key}
                  placeholder={key}
                />
              );
            }
          })}
        </div>
      ) : null}
    </div>
  );
}

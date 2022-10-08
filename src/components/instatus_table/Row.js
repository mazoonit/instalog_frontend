import { useEffect } from "react";
export default function Row({
  columns,
  isActive,
  setActiveIndex,
  index,
  id,
  row,
  DetailsComponent,
}) {
  let rowClasses =
    "w-4/5 mx-auto text-center lg:text-justify p-4 lg:border-[#f0f0f0] lg:border-0 lg:border-x self-center lg:flex lg:flex-row lg:flex-wrap lg:justify-around lg:items-stretch lg:content-start cursor-pointer pl-5 duration-2000 text-sm hover:bg-[#f3f3f3]";
  let activeClasses =
    "w-[82%] h-[220px] lg:border lg:border-[#dfdfdf] lg:rounded-lg hover:bg-[#fff]";
  let className = rowClasses;

  useEffect(() => {
    if (isActive) {
      className = rowClasses + " " + activeClasses;
    } else {
      className = rowClasses;
    }
  }, [isActive]);
  

  if (isActive == true) {
    className = rowClasses + " " + activeClasses;
  }

  let width = 100 / columns.length + "%";

  return (
    <dev
      className={className}
      onClick={() => {
        setActiveIndex(index);
      }}
      id={id}
    >
      {isActive ? (
        DetailsComponent ? (
          <DetailsComponent row={row} />
        ) : (
          <h1>There's no Details!</h1>
        )
      ) : (
        <>
          {columns
            ? columns.map((col) => {
                if (col.CustomComponent) {
                  return col.CustomComponent(row);
                } else {
                  if (col.parser) {
                    return (
                      <dev style={{ width: width }} className="self-center">
                        <p>{col.parser(row[col.key])}</p>
                      </dev>
                    );
                  }
                  return (
                    <dev style={{ width: width }} className="self-center">
                      <p>{row[col.key]}</p>
                    </dev>
                  );
                }
              })
            : null}
        </>
      )}
    </dev>
  );
}

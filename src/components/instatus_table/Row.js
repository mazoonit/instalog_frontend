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
  let className = "row ";

  useEffect(() => {
    if (isActive) {
      className = "row active";
    } else {
      className = "row";
    }
  }, [isActive]);

  if (isActive == true) {
    className = "row active";
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
                      <dev style={{ width: width }}>
                        <p>{col.parser(row[col.key])}</p>
                      </dev>
                    );
                  }
                  return (
                    <dev style={{ width: width }}>
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

import { useEffect } from "react";
export default function Row({ columns, isActive, activeRow, id, row }) {
  let className = "row ";
  useEffect(() => {
    if (isActive) {
      className = "row active";
    } else {
      className = "row";
    }
  }, [isActive]);
  return (
    <dev className={className} onClick={activeRow} id={id}>
      {columns
        ? columns.map((col) => {
              return <dev>{row[col.key]}</dev>;
          })
        : null}
    </dev>
  );
}

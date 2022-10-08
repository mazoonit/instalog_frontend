import Row from "./Row";
import { useState } from "react";
export default function Rows({ rows, columns, DetailsComponent }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return rows
    ? rows.map((row, index) => {
        return (
          <Row
            key={index}
            row={row}
            columns={columns}
            isActive={index == activeIndex}
            index={index}
            setActiveIndex={setActiveIndex}
            DetailsComponent={DetailsComponent}
          />
        );
      })
    : null;
}

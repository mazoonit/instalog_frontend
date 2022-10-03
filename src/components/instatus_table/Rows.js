import Row from "./Row";
export default function Rows({ rows, columns }) {
  return rows
    ? rows.map((row) => {
        return <Row row={row} columns={columns} />;
      })
    : null;
}

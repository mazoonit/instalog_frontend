import Header from "./Header";
import Rows from "./Rows";
import "./InstatusTable.css";
export default function InstatusTable({ headers, rows, columns }) {
  return (
    <div>
      <Header headers={headers} />
      <Rows rows={rows} columns={columns} />
    </div>
  );
}

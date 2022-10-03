import Header from "./Header";
import Rows from "./Rows";
import Footer from "./Footer";
import "./InstatusTable.css";
export default function InstatusTable({
  headers,
  rows,
  columns,
  DetailsComponent,
}) {
  return (
    <div>
      <Header headers={headers} />
      <Rows rows={rows} columns={columns} DetailsComponent={DetailsComponent} />
      <Footer />
    </div>
  );
}

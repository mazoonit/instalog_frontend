import Header from "./Header";
import Rows from "./Rows";
import Footer from "./Footer";
import "./styles/instatusTable.css";
export default function InstatusTable({
  headers,
  rows,
  columns,
  DetailsComponent,
  loadMore,
  fetch,
  search,
}) {
  return (
    <div>
      <Header headers={headers} fetch={fetch} search={search} />
      <Rows rows={rows} columns={columns} DetailsComponent={DetailsComponent} />
      <Footer loadMore={loadMore} />
    </div>
  );
}

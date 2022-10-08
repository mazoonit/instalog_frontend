import { useEffect } from "react";
import Header from "./Header";
import Rows from "./Rows";
import Footer from "./Footer";
import Empty from "./Empty";
//import "./styles/instatusTable.css";
export default function InstatusTable({
  headers,
  rows,
  columns,
  DetailsComponent,
  loadMore,
  fetch,
  search,
  isLoadingMore,
  isEmpty,
  isReachingEnd,
  dataPreParser,
}) {
  var parsedRows = rows ? dataPreParser(rows) : [];
  useEffect(() => {
    parsedRows = dataPreParser(rows);
  }, [rows]);

  return (
    <div>
      <Header
        headers={headers}
        fetch={fetch}
        search={search}
        parsedRows={parsedRows}
      />
      {!isEmpty ? (
        <>
          <Rows
            rows={parsedRows}
            columns={columns}
            DetailsComponent={DetailsComponent}
          />
          <Footer
            loadMore={loadMore}
            isLoadingMore={isLoadingMore}
            isReachingEnd={isReachingEnd}
          />
        </>
      ) : (
        <>
          <Empty />
        </>
      )}
    </div>
  );
}

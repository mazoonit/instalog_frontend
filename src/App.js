import React, { useRef, useState, useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import InstatusTable from "../src/components/instatus_table/InstatusTable";
import LetterCircle from "./components/generic_components/LetterCircle";
import DetailsComponent from "./components/instalog/DetailsComponent";
import { rows } from "./dumpData/dump";
import API from "./utilities/api";

function App() {
  const [fetchedRows, setFetchedRows] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let res = await API.post("/events/fetch");
      if (res.data) {
        res.data.map((row) => {
          row.email = row.actor ? row.actor.email : null;
          row.actionName = row.action ? row.action.name : null;
        });
      }
      setFetchedRows(res.data);
    };
    fetch();
  }, []);
  return (
    <>
      <InstatusTable
        headers={["ACTOR", "ACTION", "DATE"]}
        columns={[
          {
            key: "icon",
            CustomComponent: (row) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "33.333%",
                  }}
                >
                  <LetterCircle letter={row.email ? row.email[0] : "A"} />
                  <p
                    style={{
                      margin: 0,
                      marginLeft: "10px",
                      alignSelf: "center",
                    }}
                  >
                    {row.email}
                  </p>
                </div>
              );
            },
          },
          {
            key: "actionName",
          },
          {
            key: "occurred_at",
            parser: (value) => {
              return value ? value.split("T")[0] : value;
            },
          },
        ]}
        rows={fetchedRows}
        DetailsComponent={DetailsComponent}
      />
      <p style={{ textAlign: "center",padding:"10px" }}>@Instalog</p>
    </>
  );
}
export default App;

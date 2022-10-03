import React, { useRef, useState, useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import InstatusTable from "../src/components/instatus_table/InstatusTable";
import LetterCircle from "./components/generic_components/LetterCircle";
import DetailsComponent from "./components/instalog/DetailsComponent";
import {rows} from "./dumpData/dump";

function App() {
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
                  <LetterCircle letter={row.email[0]} />
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
            key: "occured_at",
            parser: (value) => {
              return value.split("T")[0];
            },
          },
        ]}
        rows={rows}
        DetailsComponent={DetailsComponent}
      />
    </>
  );
}
export default App;

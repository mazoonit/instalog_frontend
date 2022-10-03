import React, { useRef, useState, useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import InstatusTable from "../src/components/instatus_table/InstatusTable";

function App() {
  const DetailsComponent = (row) => {
    return (
      <dev>
        <p>Hola</p>
      </dev>
    );
  };
  return (
    <>
      <InstatusTable
        headers={["ACTOR", "ACTION", "DATE"]}
        columns={[
          {
            key: "email",
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
        rows={[
          {
            email: "ali@instatus.com",
            name: "aka",

            actor: { id: 1, name: "Ali", email: "mo" },
            target: { id: 1, name: "target" },
            occured_at: "2022-10-03T10:15:42.719Z",
            location: "105.40.62.95",
            group: { id: 1, name: "instatus" },
            meta_data: {
              redirect: "/setup",
              description: "User login succeeded.",
              x_request_id: "req_W1Y13QOHMI5H",
            },
          },
          {
            email: "ali@instatus.com",
            name: "aka",

            actor: { id: 1, name: "Ali", email: "mo" },
            target: { id: 1, name: "target" },
            occured_at: "2022-10-03T10:15:42.719Z",
            location: "105.40.62.95",
            group: { id: 1, name: "instatus" },
            meta_data: {
              redirect: "/setup",
              description: "User login succeeded.",
              x_request_id: "req_W1Y13QOHMI5H",
            },
          },
          {
            email: "ali@instatus.com",
            name: "aka",

            actor: { id: 1, name: "Ali", email: "mo" },
            target: { id: 1, name: "target" },
            occured_at: "2022-10-03T10:15:42.719Z",
            location: "105.40.62.95",
            group: { id: 1, name: "instatus" },
            meta_data: {
              redirect: "/setup",
              description: "User login succeeded.",
              x_request_id: "req_W1Y13QOHMI5H",
            },
          },
        ]}
        DetailsComponent={DetailsComponent}
      />
    </>
  );
}

export default App;

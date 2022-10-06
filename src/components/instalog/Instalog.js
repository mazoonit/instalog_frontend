import React, { useRef, useState, useEffect, useReducer } from "react";
import InstatusTable from "../instatus_table/InstatusTable";
import LetterCircle from "../generic_components/LetterCircle";
import DetailsComponent from "./DetailsComponent";
import { rows } from "../../dumpData/dump";
import API from "../../utilities/api";
import { toast } from "react-toastify";
const columns = [
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
];

function Instalog() {
  const [fetchedRows, setFetchedRows] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchState, setSearchState] = useState("");

  //on mount fetch the data
  useEffect(() => {
    loadData({});
  }, []);

  //utilties
  const fetchAndParse = async ({ requestParams }) => {
    try {
      //fetch
      let res = await API.post("/events/fetch", requestParams);
      //parse
      res.data.map((row) => {
        row.email = row.actor ? row.actor.email : null;
        row.actionName = row.action ? row.action.name : null;
      });
      //return
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error("Fetching problem!");
    }
  };

  //Fetch function
  const loadData = async ({ searchValue, concatFlag, filters }) => {
    try {
      //constructing
      let constructedFetchParameters = {};
      constructedFetchParameters.pageNumber = pageCount + 1;
      constructedFetchParameters.searchValue = searchState;
      //api call
      let data = await fetchAndParse({
        requestParams: constructedFetchParameters,
      });
      if (data.length > 0) {
        //set rows
        setFetchedRows((prevValue) => {
          if (concatFlag) {
            return prevValue.concat(data);
          }
          return data;
        });
        //update page count
        setPageCount((prevValue) => (prevValue += 1));
      }
    } catch (error) {
      toast.error("Fetching problem!");
    }
  };

  const search = async ({ searchValue }) => {
    try {
      const constructedFetchParameters = {
        searchValue: searchValue,
        pageNumber: 1,
      };
      let data = await fetchAndParse({
        requestParams: constructedFetchParameters,
      });
      setFetchedRows(data);
      setPageCount(1);
      setSearchState(searchValue);
    } catch (err) {
      toast.error("Fetching problem!");
    }
  };

  const loadMore = async () => {
    await loadData({ concatFlag: true });
  };
  return (
    <>
      <InstatusTable
        headers={["ACTOR", "ACTION", "DATE"]}
        columns={columns}
        rows={fetchedRows}
        search={search}
        loadMore={loadMore}
        DetailsComponent={DetailsComponent}
      />
      <p style={{ textAlign: "center", padding: "10px" }}>@Instalog</p>
    </>
  );
}
export default Instalog;
import React, { useRef, useState, useEffect, useReducer } from "react";
import InstatusTable from "../instatus_table/InstatusTable";
import DetailsComponent from "./DetailsComponent";
import API from "../../utilities/api";
import { toast } from "react-toastify";
import useSWR from "swr";
import { columns } from "./columns";
import { parseQuery } from "./utilities";

function Instalog() {
  const [fetchedRows, setFetchedRows] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [query, setQuery] = useState("");

  const fetcher = async (url, args) => {
    /**
     * Fetching
     */
    let parsedQuery = parseQuery(url ? url.split("?")[1] : "");
    let { data } = await API.get(url);

    //parsing data
    data.map((row) => {
      row.email = row.actor ? row.actor.email : null;
      row.actionName = row.action ? row.action.name : null;
    });

    //checking If we should concat or not and handling search logic.

    if (parseInt(parsedQuery.pageNumber) == 1) {
      setFetchedRows(data);
      setPageCount(1);
    } else if (parseInt(parsedQuery.pageNumber) > 1 && data.length > 0) {
      setFetchedRows((prevValue) => prevValue.concat(data));
      setPageCount((prevValue) => (prevValue += 1));
    }
    setSearchState(parsedQuery.searchValue);
    return data;
  };

  const { data } = useSWR(query, fetcher);

  //on mount fetch the data
  useEffect(() => {
    loadData({});
  }, []);

  //Fetch function
  const loadData = async () => {
    try {
      //constructing
      let requestParams = {};
      requestParams.pageNumber = pageCount + 1;
      requestParams.searchValue = searchState;

      //constructing query
      let url = "/events?";
      for (const key in requestParams) {
        url += key + "=" + requestParams[key] + "&";
      }
      setQuery(url);
    } catch (error) {
      toast.error("Fetching problem!");
    }
  };

  const search = async ({ searchValue }) => {
    try {
      const requestParams = {
        searchValue: searchValue,
        pageNumber: 1,
      };
      let url = "/events?";
      for (const key in requestParams) {
        url += key + "=" + requestParams[key] + "&";
      }
      setQuery(url);
    } catch (err) {
      toast.error("Fetching problem!");
    }
  };

  const loadMore = async () => {
    await loadData();
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
    </>
  );
}
export default Instalog;

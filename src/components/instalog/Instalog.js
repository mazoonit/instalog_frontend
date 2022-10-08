import React, { useState } from "react";
import InstatusTable from "../instatus_table/InstatusTable";
import DetailsComponent from "./DetailsComponent";
import API from "../../utilities/api";
import { toast } from "react-toastify";
import { columns } from "./columns";
import useSWRInfinite from "swr/infinite";

const PAGE_SIZE = 3;

const fetcher = async (url) => {
  let { data } = await API.get(url);
  return data;
};

function Instalog() {
  //search state
  const [searchState, setSearchState] = useState("");

  // infinte loading
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `/events?pageNumber=${index + 1}&searchValue=${searchState}`,
    fetcher
  );

  // pagination variables

  const logs = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  //searching and load more functionalities

  const search = async ({ searchValue }) => {
    setSize(1);
    setSearchState(searchValue);
  };

  const loadMore = async () => {
    setSize(size + 1);
  };


  return (
    <>
      <InstatusTable
        headers={["ACTOR", "ACTION", "DATE"]}
        columns={columns}
        rows={logs}
        search={search}
        loadMore={loadMore}
        DetailsComponent={DetailsComponent}
        isLoadingMore={isLoadingMore}
        isReachingEnd={isReachingEnd}
        isEmpty={isEmpty}
        isRefreshing={isRefreshing}
        dataPreParser={(data) => {
          data.map((row) => {
            row.email = row.actor ? row.actor.email : null;
            row.actionName = row.action ? row.action.name : null;
          });
          return data;
        }}
      />
    </>
  );
}

export default Instalog;

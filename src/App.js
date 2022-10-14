import React, { useRef, useState, useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Instalog from "./components/instalog/Instalog";
import UserFriendlyList from "./components/user_friendly_list/UserFriendlyList";

function App() {
  return (
    <div>
      {/*<Instalog />*/}
      <UserFriendlyList />
    </div>
  );
}
export default App;

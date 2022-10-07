import React, { useRef, useState, useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Instalog from "./components/instalog/Instalog";

function App() {
  return (
    <>
      <Instalog />
      <div class="flex flex-row">
        <div class="basis-1/3">
          <p>ali@instatus.com</p>
        </div>
        <div class="basis-1/3">
          <p>Action</p>
        </div>
        <div class="basis-1/3">
          <p>Date</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
export default App;

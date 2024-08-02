import React from 'react';
import './App.css';
import Converter from "../pages/Converter";
import {converterType} from "../entities/ConverterType";

const title = document.getElementById("title");
const fromOption = document.getElementById("from-option");
const toOption = document.getElementById("to-option");
const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const swapBtn = document.getElementById("swap-btn");

function App() {
  return (
    <div className="App">
      <Converter />
    </div>
  );
}

export default App;

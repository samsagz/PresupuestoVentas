import React from "react";
import { TotalSoldLastYear } from "./Component/TotalSoldLastYear";
import { UnitPrice } from "./Component/UnitPrice";
import { TotalSales } from "./Component/TotalSales";
//import logo from './logo.svg';
//import './App.css';
import './Component/TotalSales.css'

function App() {
  return (
    <React.Fragment>
      <h1>PASO 1: VENTAS ANUALES ¿cuánto vas a vender en el año?</h1>
      <TotalSales />
      <UnitPrice />
      <TotalSoldLastYear />
    </React.Fragment>
  );
}

export default App;

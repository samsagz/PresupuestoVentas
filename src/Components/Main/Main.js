import React from "react";
import { MainUI } from "./MainUI.js"


function Main({ lastYearSales, setLastYearSales,
  unitPrice, setUnitPrice,
  whatIWant, setWhatIWant,
  whatIGuess, setWhatIGuess,
  scenarios, setScenarios,
  clientDetail, setClientDetail,
  breakeven, setBreakeven,
  acquisitionCost, setAcquisitionCost,
  byCollection, setByCollection,
  avg, setAverage,
  max, setMaximum,
  min, setMinimum }) {

  return (
    <MainUI
      lastYearSales={lastYearSales}
      setLastYearSales={setLastYearSales}
      unitPrice={unitPrice}
      setUnitPrice={setUnitPrice}
      whatIWant={whatIWant}
      setWhatIWant={setWhatIWant}
      whatIGuess={whatIGuess}
      setWhatIGuess={setWhatIGuess}
      scenarios={scenarios}
      setScenarios={setScenarios}
      clientDetail={clientDetail}
      setClientDetail={setClientDetail}
      breakeven={breakeven}
      setBreakeven={setBreakeven}
      acquisitionCost={acquisitionCost}
      setAcquisitionCost={setAcquisitionCost}
      byCollection={byCollection}
      setByCollection={setByCollection}
      avg={avg}
      setAverage={setAverage}
      max={max}
      setMaximum={setMaximum}
      min={min}
      setMinimum={setMinimum}
    />
  );
}

export default Main;

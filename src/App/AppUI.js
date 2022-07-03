import React from "react";
import { EstimationStep1 } from "../Components/EstimationStep1/EstimationStep1.js";
import { Inicio } from "../Components/Inicio/Inicio";
function AppUI(
    { lastYearSales, setLastYearSales,
        unitPrice, setUnitPrice,
        whatIWant, setWhatIWant,
        whatIGuess, setWhatIGuess,
        scenarios, setScenarios,
        clientDetail, setClientDetail,
        breakeven, setBreakeven,
        acquisitionCost, setAcquisitionCost,
        byCollection, setByCollection }) {
    return (
        <React.Fragment>
            <h1>PASO 1: VENTAS ANUALES ¿cuánto vas a vender en el año?</h1>
            <Inicio
                lastYearSales={lastYearSales}
                setLastYearSales={setLastYearSales}
                unitPrice={unitPrice}
                setUnitPrice={setUnitPrice}
            />
            <EstimationStep1
                lastYearSales={lastYearSales}
                unitPrice={unitPrice}
                whatIWant={whatIWant}
                whatIGuess={whatIGuess}
                scenarios={scenarios}
                clientDetail={clientDetail}
                breakeven={breakeven}
                acquisitionCost={acquisitionCost}
                byCollection={byCollection}
            />
        </React.Fragment>
    );
}

export { AppUI }
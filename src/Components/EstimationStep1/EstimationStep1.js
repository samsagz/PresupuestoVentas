import React from "react";
import { EstimationStep1UI } from "./EstimationStep1UI";

function EstimationStep1(
    { lastYearSales,
        unitPrice,
        whatIWant,
        whatIGuess,
        scenarios,
        clientDetail,
        breakeven,
        acquisitionCost,
        byCollection }
) {

    const tableResult = [];
    tableResult.push(["Lo que quiero", whatIWant, whatIWant - lastYearSales, whatIWant / lastYearSales, whatIWant / unitPrice]);
    tableResult.push(["Lo que creo", whatIGuess, whatIGuess - lastYearSales, whatIGuess / lastYearSales, whatIGuess / unitPrice]);
    tableResult.push(["Escenarios", scenarios, scenarios - lastYearSales, scenarios / lastYearSales, scenarios / unitPrice]);
    tableResult.push(["Detalle por cliente", clientDetail, clientDetail - lastYearSales, clientDetail / lastYearSales, clientDetail / unitPrice]);
    tableResult.push(["Punto de equilibrio", breakeven, breakeven - lastYearSales, breakeven / lastYearSales, breakeven / unitPrice]);
    tableResult.push(["Costo de adquisición", acquisitionCost, acquisitionCost - lastYearSales, acquisitionCost / lastYearSales, acquisitionCost / unitPrice]);
    tableResult.push(["Por colección", byCollection, byCollection - lastYearSales, byCollection / lastYearSales, byCollection / unitPrice]);

    return (
        <EstimationStep1UI
            tableResult={tableResult}
        />
    );
}

export { EstimationStep1 }
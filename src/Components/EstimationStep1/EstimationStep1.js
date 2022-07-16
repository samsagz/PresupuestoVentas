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
        byCollection,
        avg, setAverage,
        max, setMaximum,
        min, setMinimum }
) {

    function maxMinAvg(arr) {
        let max = arr[0];
        let min = arr[0];
        let sum = arr[0]; //changed from original post

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
            sum = sum + arr[i];
        }

        setMaximum((m) => (max));
        setMinimum((m) => (min));
        setAverage((m) => (sum / arr.length))
    }

    const tableResult = [];
    tableResult.push(["Lo que quiero", whatIWant, whatIWant - lastYearSales, whatIWant / lastYearSales, whatIWant / unitPrice]);
    tableResult.push(["Lo que creo", whatIGuess, whatIGuess - lastYearSales, whatIGuess / lastYearSales, whatIGuess / unitPrice]);
    tableResult.push(["Escenarios", scenarios, scenarios - lastYearSales, scenarios / lastYearSales, scenarios / unitPrice]);
    tableResult.push(["Detalle por cliente", clientDetail, clientDetail - lastYearSales, clientDetail / lastYearSales, clientDetail / unitPrice]);
    tableResult.push(["Punto de equilibrio", breakeven, breakeven - lastYearSales, breakeven / lastYearSales, breakeven / unitPrice]);
    tableResult.push(["Costo de adquisición", acquisitionCost, acquisitionCost - lastYearSales, acquisitionCost / lastYearSales, acquisitionCost / unitPrice]);
    tableResult.push(["Por colección", byCollection, byCollection - lastYearSales, byCollection / lastYearSales, byCollection / unitPrice]);

    maxMinAvg(tableResult.map(a => a[1]));

    return (
        <EstimationStep1UI
            tableResult={tableResult}
            avg={avg}
            max={max}
            min={min}
        />
    );
}

export { EstimationStep1 }
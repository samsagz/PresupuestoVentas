import React from "react";
import './Inicio.css'
import { InicioUI } from "./InicioUI";

function Inicio(
    { lastYearSales, setLastYearSales,
        unitPrice, setUnitPrice }
) {



    const [lastYearUnitsSold, setLastYearUnitsSold] = React.useState(0);


    const onChangeValueSales = function (event) {
        const val = event.target.validity.valid ? event.target.value : lastYearSales;
        setLastYearSales(val);

        onChangeLastYearUnitsSold(val, unitPrice);

    }

    const onChangeValueUnitPrice = function (event) {
        let val = event.target.validity.valid ? event.target.value : unitPrice;
        setUnitPrice((v) => (val));

        onChangeLastYearUnitsSold(lastYearSales, val);
    }

    const onChangeLastYearUnitsSold = function (lastYearSalesProp, unitPriceProp) {
        let result = (lastYearSalesProp / unitPriceProp).toFixed(10);

        result = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0, roundingIncrement: 5 }).format(result);


        setLastYearUnitsSold((v) => (
            unitPrice !== 0 ? result : 0
        ));
    }

    return (
        <InicioUI
            lastYearSales={lastYearSales}
            unitPrice={unitPrice}
            lastYearUnitsSold={lastYearUnitsSold}
            onChangeValueUnitPrice={onChangeValueUnitPrice}
            onChangeValueSales={onChangeValueSales}
        />
    );
}

export { Inicio }
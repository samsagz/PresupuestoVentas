import React from "react";

function InicioUI({ lastYearSales, unitPrice, lastYearUnitsSold, onChangeValueUnitPrice, onChangeValueSales }) {

    const regexNumber = '[0-9]*';

    const onClickInput = function (event) {
        if (event.target.value === '0')
            event.target.value = '';
    }

    const numberFormat = new Intl.NumberFormat(
        'es-CO',
        {
            style: 'currency',
            currency: 'COP'
        });


    return (
        <React.Fragment>
            <h2>¿Cuánto vendí el año pasado? (en pesos $)</h2>
            <input type="text" pattern={regexNumber} value={lastYearSales} onChange={onChangeValueSales} onClick={onClickInput}></input>
            <p>{numberFormat.format(lastYearSales)}</p>
            <h2>¿Cuál es el precio promedio por unidad?</h2>
            <input type="text" pattern={regexNumber} value={unitPrice} onChange={onChangeValueUnitPrice} onClick={onClickInput}></input>
            <p>{numberFormat.format(unitPrice)}</p>
            <h2>¿Cuánto vendí el año pasado? (en unidades)</h2>
            <h3>{lastYearUnitsSold}</h3>
        </React.Fragment>
    );
}

export { InicioUI }
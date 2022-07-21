import React from "react";

function GuessUI({ lastYearSales
    , whatIGuess
    , whatIWantToIncrease
    , whatPercentageIWantToIncrease
    , onChangeIncreaseSalesValue
    , onChangePercentageIncreaseSalesValue }) {
    const regexNumber = '[0-9]*';
    // eslint-disable-next-line
    //const regexPercentageNumber = '(?!^0*$)(?!^0*\.0*$)^\d{1,4}(\.\d{1,4})?';
    //const regexPercentageNumber = '^([0-9]\d*(\,\d+)?)$';

    const numberFormat = new Intl.NumberFormat(
        'es-CO',
        {
            style: 'currency',
            currency: 'COP'
        });
    const percentFormatting = new Intl.NumberFormat(
        "es-CO",
        {
            style: 'percent',
            maximumFractionDigits: 2,
            roundingIncrement: 5
        });


    const onClickInput = function (event) {
        if (event.target.value === '0')
            event.target.value = '';
    }


    return (
        <React.Fragment>
            <div>
                <h2>¿Cuánto vendí el año pasado? ($)</h2>
                <p>{numberFormat.format(lastYearSales)}</p>
            </div>
            <div>
                <h2>¿Cuánto quiero aumentar? ($)</h2>
                <input type="text" pattern={regexNumber} value={whatIWantToIncrease} onChange={onChangeIncreaseSalesValue} onClick={onClickInput}></input>
                <p>{numberFormat.format(whatIWantToIncrease)}</p>
            </div>
            <div>
                <h2>¿Cuánto quiero aumentar? (%)</h2>
                <input type="text" value={whatPercentageIWantToIncrease} onChange={onChangePercentageIncreaseSalesValue} onClick={onClickInput}></input>
                <p>{percentFormatting.format(whatPercentageIWantToIncrease)}</p>
            </div>
            <div>
                <h2>¿Cuánto creo vender este año?</h2>
                <p>{numberFormat.format(whatIGuess)}</p>
            </div>
        </React.Fragment>
    );
}

export { GuessUI }
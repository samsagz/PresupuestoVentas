import React from "react";

function WantUI({ whatIWant, onChangeWantValue }) {
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
            <h2>¿Cuánto quiero vender este año?</h2>
            <input type="text" pattern={regexNumber} value={whatIWant} onChange={onChangeWantValue} onClick={onClickInput}></input>
            <p>{numberFormat.format(whatIWant)}</p>
        </React.Fragment>
    )
}

export { WantUI }
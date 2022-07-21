import React from "react";
import "./EstimationStep1.css"

function EstimationStep1UI({ tableResult, avg, max, min }) {
    const formatting = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0, roundingIncrement: 5 });
    const percentFormatting = new Intl.NumberFormat("es-CO", { style: 'percent', maximumFractionDigits: 2, roundingIncrement: 5 });

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th colSpan="6">¿Cuánto vamos a vender este año?</th>
                    </tr>
                    <tr>
                        <th>No</th>
                        <th>Forma</th>
                        <th>Ventas Año</th>
                        <th>Aumento ($)</th>
                        <th>Aumento (%)</th>
                        <th>Aumento (uni.)</th>
                    </tr>
                </thead>
                <tbody>
                    {tableResult.map(function (element, i) {
                        return (<tr key={i}>
                            <td>{i + 1}</td>
                            <td>{element[0]}</td>
                            <td>{formatting.format(element[1])}</td>
                            <td>{formatting.format(element[2])}</td>
                            <td>{percentFormatting.format(element[3])}</td>
                            <td>{formatting.format(element[4])}</td>
                        </tr>)
                    })}
                </tbody>
                <tfoot>

                </tfoot>

            </table>

            <div>
                <h2>Promedio</h2>
                <p>{formatting.format(avg)}</p>
                <h2>Máximo</h2>
                <p>{formatting.format(max)}</p>
                <h2>Mínimo</h2>
                <p>{formatting.format(min)}</p>
            </div>
        </React.Fragment>
    );
}

export { EstimationStep1UI }
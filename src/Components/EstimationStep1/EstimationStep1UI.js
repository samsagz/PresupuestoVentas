import React from "react";
import "./EstimationStep1.css"

function EstimationStep1UI({tableResult}) {
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
                        return (<tr>
                            <td>{i + 1}</td>
                            <td>{element[0]}</td>
                            <td>{element[1]}</td>
                            <td>{element[2]}</td>
                            <td>{element[3]}</td>
                            <td>{element[4]}</td>
                        </tr>)
                    })}
                </tbody>
                <tfoot>

                </tfoot>

            </table>
        </React.Fragment>
    );
}

export { EstimationStep1UI }
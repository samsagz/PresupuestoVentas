import React from "react";
import { EstimationStep1 } from "../Components/EstimationStep1/EstimationStep1.js";
import { Inicio } from "../Components/Inicio/Inicio";
function AppUI() {
    return (
        <React.Fragment>
            <h1>PASO 1: VENTAS ANUALES ¿cuánto vas a vender en el año?</h1>
            <Inicio />
            <EstimationStep1 />
        </React.Fragment>
    );
}

export { AppUI }
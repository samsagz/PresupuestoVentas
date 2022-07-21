import React from "react";
import { Guess } from "../Components/Guess/Guess";
import Main from "../Components/Main/Main"
import Want from "../Components/Want/Want";

function AppUI(
    { lastYearSales, setLastYearSales,
        unitPrice, setUnitPrice,
        whatIWant, setWhatIWant,
        whatIGuess, setWhatIGuess,
        scenarios, setScenarios,
        clientDetail, setClientDetail,
        breakeven, setBreakeven,
        acquisitionCost, setAcquisitionCost,
        byCollection, setByCollection,
        avg, setAverage,
        max, setMaximum,
        min, setMinimum }) {
    return (
        <React.Fragment>
            <ul className="nav nav-tabs" id="initialTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active"
                        id="main" data-bs-toggle="tab" data-bs-target="#main-tab-pane"
                        type="button" role="tab" aria-controls="main-tab-pane" aria-selected="true">Inicio</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="want" data-bs-toggle="tab" data-bs-target="#want-tab-pane"
                        type="button" role="tab" aria-controls="want-tab-pane" aria-selected="false">1. Quiero</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="guess" data-bs-toggle="tab" data-bs-target="#guess-tab-pane"
                        type="button" role="tab" aria-controls="guess-tab-pane" aria-selected="false">2. Creo</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="scenario" data-bs-toggle="tab" data-bs-target="#scenario-tab-pane"
                        type="button" role="tab" aria-controls="scenario-tab-pane" aria-selected="false">3. Escenarios</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="client" data-bs-toggle="tab" data-bs-target="#client-tab-pane"
                        type="button" role="tab" aria-controls="client-tab-pane" aria-selected="false">4. Cliente</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="breakeven" data-bs-toggle="tab" data-bs-target="#breakeven-tab-pane"
                        type="button" role="tab" aria-controls="breakeven-tab-pane" aria-selected="false">5. Pto. Equilibrio</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="cac" data-bs-toggle="tab" data-bs-target="#cac-tab-pane"
                        type="button" role="tab" aria-controls="cac-tab-pane" aria-selected="false">6. CAC</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="colection" data-bs-toggle="tab" data-bs-target="#colection-tab-pane"
                        type="button" role="tab" aria-controls="colection-tab-pane" aria-selected="false">7. Coleccion</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="budget" data-bs-toggle="tab" data-bs-target="#budget-tab-pane"
                        type="button" role="tab" aria-controls="budget-tab-pane" aria-selected="false">PRESUPUESTO</button>
                </li>

            </ul>

            <div className="tab-content" id="myMainTabContent">
                <div className="tab-pane fade show active" id="main-tab-pane" role="tabpanel" aria-labelledby="main-tab" tabIndex="0">
                    <Main
                        lastYearSales={lastYearSales}
                        setLastYearSales={setLastYearSales}
                        unitPrice={unitPrice}
                        setUnitPrice={setUnitPrice}
                        whatIWant={whatIWant}
                        setWhatIWant={setWhatIWant}
                        whatIGuess={whatIGuess}
                        setWhatIGuess={setWhatIGuess}
                        scenarios={scenarios}
                        setScenarios={setScenarios}
                        clientDetail={clientDetail}
                        setClientDetail={setClientDetail}
                        breakeven={breakeven}
                        setBreakeven={setBreakeven}
                        acquisitionCost={acquisitionCost}
                        setAcquisitionCost={setAcquisitionCost}
                        byCollection={byCollection}
                        setByCollection={setByCollection}
                        avg={avg}
                        setAverage={setAverage}
                        max={max}
                        setMaximum={setMaximum}
                        min={min}
                        setMinimum={setMinimum}
                    />
                </div>
                <div className="tab-pane fade" id="want-tab-pane" role="tabpanel" aria-labelledby="want-tab" tabIndex="0">
                    <Want
                        whatIWant={whatIWant}
                        setWhatIWant={setWhatIWant}
                    />
                </div>
                <div className="tab-pane fade" id="guess-tab-pane" role="tabpanel" aria-labelledby="guess-tab" tabIndex="0">
                    <Guess
                        lastYearSales={lastYearSales}
                        whatIGuess={whatIGuess}
                        setWhatIGuess={setWhatIGuess}
                    />
                </div>
                <div className="tab-pane fade" id="scenario-tab-pane" role="tabpanel" aria-labelledby="scenario-tab" tabIndex="0">
                    ...
                </div>
                <div className="tab-pane fade" id="client-tab-pane" role="tabpanel" aria-labelledby="client-tab" tabIndex="0">
                    ...
                </div>
                <div className="tab-pane fade" id="breakeven-tab-pane" role="tabpanel" aria-labelledby="breakeven-tab" tabIndex="0">
                    ...
                </div>
                <div className="tab-pane fade" id="cac-tab-pane" role="tabpanel" aria-labelledby="cac-tab" tabIndex="0">
                    costo de adquisición del cliente (Customer Acquisition Cost )
                </div>
                <div className="tab-pane fade" id="colection-tab-pane" role="tabpanel" aria-labelledby="colection-tab" tabIndex="0">
                    ...
                </div>
                <div className="tab-pane fade" id="budget-tab-pane" role="tabpanel" aria-labelledby="budget-tab" tabIndex="0">
                    ...
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI }
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './tab.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <ul class="nav nav-tabs" id="initialTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active"
                    id="main" data-bs-toggle="tab" data-bs-target="#main-tab-pane"
                    type="button" role="tab" aria-controls="main-tab-pane" aria-selected="true">Inicio</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="want" data-bs-toggle="tab" data-bs-target="#want-tab-pane"
                    type="button" role="tab" aria-controls="want-tab-pane" aria-selected="false">1. Quiero</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="guess" data-bs-toggle="tab" data-bs-target="#guess-tab-pane"
                    type="button" role="tab" aria-controls="guess-tab-pane" aria-selected="false">2. Creo</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="scenario" data-bs-toggle="tab" data-bs-target="#scenario-tab-pane"
                    type="button" role="tab" aria-controls="scenario-tab-pane" aria-selected="false">3. Escenarios</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="client" data-bs-toggle="tab" data-bs-target="#client-tab-pane"
                    type="button" role="tab" aria-controls="client-tab-pane" aria-selected="false">4. Cliente</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="breakeven" data-bs-toggle="tab" data-bs-target="#breakeven-tab-pane"
                    type="button" role="tab" aria-controls="breakeven-tab-pane" aria-selected="false">5. Pto. Equilibrio</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="cac" data-bs-toggle="tab" data-bs-target="#cac-tab-pane"
                    type="button" role="tab" aria-controls="cac-tab-pane" aria-selected="false">6. CAC</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="colection" data-bs-toggle="tab" data-bs-target="#colection-tab-pane"
                    type="button" role="tab" aria-controls="colection-tab-pane" aria-selected="false">7. Coleccion</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link"
                    id="budget" data-bs-toggle="tab" data-bs-target="#budget-tab-pane"
                    type="button" role="tab" aria-controls="budget-tab-pane" aria-selected="false">PRESUPUESTO</button>
            </li>

        </ul>

        <div class="tab-content" id="myMainTabContent">
            <div class="tab-pane fade show active" id="main-tab-pane" role="tabpanel" aria-labelledby="main-tab" tabindex="0">
                <App />
            </div>
            <div class="tab-pane fade" id="want-tab-pane" role="tabpanel" aria-labelledby="want-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="guess-tab-pane" role="tabpanel" aria-labelledby="guess-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="scenario-tab-pane" role="tabpanel" aria-labelledby="scenario-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="client-tab-pane" role="tabpanel" aria-labelledby="client-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="breakeven-tab-pane" role="tabpanel" aria-labelledby="breakeven-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="cac-tab-pane" role="tabpanel" aria-labelledby="cac-tab" tabindex="0">
                costo de adquisición del cliente (Customer Acquisition Cost )
            </div>
            <div class="tab-pane fade" id="colection-tab-pane" role="tabpanel" aria-labelledby="colection-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="budget-tab-pane" role="tabpanel" aria-labelledby="budget-tab" tabindex="0">
                ...
            </div>
        </div>
    </React.Fragment>
);

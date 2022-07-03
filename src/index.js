import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tab.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>

        <input type="radio" name="tabs" id="tab1" checked />
        <label for="tab1">Inicio</label>
        <input type="radio" name="tabs" id="tab2" />
        <label for="tab2">1. Quiero</label>
        <input type="radio" name="tabs" id="tab3" />
        <label for="tab3">2. Creo</label>
        <input type="radio" name="tabs" id="tab4" />
        <label for="tab4">3. Escenarios</label>
        <input type="radio" name="tabs" id="tab5" />
        <label for="tab5">4. Cliente</label>
        <input type="radio" name="tabs" id="tab6" />
        <label for="tab6">5. Pto. Equilibrio</label>
        <input type="radio" name="tabs" id="tab7" />
        <label for="tab7">6. CAC</label>
        <input type="radio" name="tabs" id="tab8" />
        <label for="tab8">7. Coleccion</label>
        <input type="radio" name="tabs" id="tab9" />
        <label for="tab9">PRESUPUESTO</label>

        <div class="tab content1">
            <App />
        </div>
        <div class="tab content2">Tab2 Contents</div>
        <div class="tab content3">Tab3 Contents</div>
        <div class="tab content4">Tab4 Contents</div>
        <div class="tab content5">Tab5 Contents</div>
    </React.Fragment>
);

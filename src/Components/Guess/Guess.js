import React from "react"
import { GuessUI } from "./GuessUI";

function Guess({ lastYearSales, whatIGuess, setWhatIGuess }) {
    const [whatIWantToIncrease, setWhatIWantToIncrease] = React.useState(0);
    const [whatPercentageIWantToIncrease, setPercentageWhatIWantToIncrease] = React.useState(0.0);

    const onChangeIncreaseSalesValue = function (event) {
        let increaseValue = event.target.validity.valid ? event.target.value : whatIWantToIncrease;

        setWhatIWantToIncrease((v) => (increaseValue));

        setPercentageWhatIWantToIncrease((v) => (increaseValue / lastYearSales))

        setWhatIGuess((v) => (lastYearSales + parseInt(increaseValue)));
    }
    const onChangePercentageIncreaseSalesValue = function (event) {
        const percentage = event.target.value;

        console.log(percentage);
        // eslint-disable-next-line
        if (Number(percentage) == percentage) {
            setPercentageWhatIWantToIncrease((v) => (percentage));
            setWhatIWantToIncrease((v) => (lastYearSales * percentage));

            setWhatIGuess((v) => (lastYearSales + whatIWantToIncrease));
        }
    }

    return (
        <GuessUI
            lastYearSales={lastYearSales}
            whatIGuess={whatIGuess}
            whatIWantToIncrease={whatIWantToIncrease}
            whatPercentageIWantToIncrease={whatPercentageIWantToIncrease}
            onChangeIncreaseSalesValue={onChangeIncreaseSalesValue}
            onChangePercentageIncreaseSalesValue={onChangePercentageIncreaseSalesValue}
        />
    );
}

export { Guess }
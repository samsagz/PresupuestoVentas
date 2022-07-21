import React from "react";
import { WantUI } from "./WantUI";

function Want({ whatIWant, setWhatIWant }) {

    const onChangeWantValue = function (event) {
        const val = event.target.validity.valid ? event.target.value : whatIWant;
        setWhatIWant(val);

    }

    return (
        <WantUI
            whatIWant={whatIWant}
            onChangeWantValue={onChangeWantValue}
        />
    )
}

export default Want;
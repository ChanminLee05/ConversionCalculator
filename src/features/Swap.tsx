import React from "react";
import {handleReset} from "./Reset";

export const handleSwap = (
    setFromOption: React.Dispatch<React.SetStateAction<string>>,
    setToOption: React.Dispatch<React.SetStateAction<string>>,
    setInput: React.Dispatch<React.SetStateAction<string | undefined>>,
    setResult: React.Dispatch<React.SetStateAction<string>>
) => {
    setFromOption((prevFromOption) => {
        setToOption(prevFromOption);
        return prevFromOption;
    });
    setToOption((prevToOption) => {
        setFromOption(prevToOption);
        return prevToOption;
    });
    handleReset(setInput, setResult);
}
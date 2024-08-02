import React from "react";
import {calculator} from "./Calculator/Calculator";

export const convert = (
    e: React.MouseEvent<HTMLButtonElement>,
    input: string,
    fromOption: string,
    toOption: string,
    resultRef: React.RefObject<HTMLSpanElement>,
    setResult: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();

    if (input !== undefined && resultRef.current) {
        const type = `${fromOption}-${toOption}`;
        calculator(type, input, resultRef.current);

        let resultText = resultRef.current.innerText;
        if (toOption === "Binary") {
            const reversedBinary = resultText.split("").reverse().join("");
            const groupedBinary = reversedBinary.match(/.{1,4}/g)?.join(" ") || reversedBinary;
            resultText = groupedBinary.split("").reverse().join("");
        }

        if (resultText.length > 30) {
            const firstPart = resultText.substring(0, 30);
            const secondPart = resultText.substring(30);
            resultText = `${firstPart}\n${secondPart}`;
        }
        resultRef.current.innerText = resultText;
        setResult(resultRef.current.innerText);
    }

    if (fromOption === toOption) {
        alert("Please select different conversion type");
    }
}
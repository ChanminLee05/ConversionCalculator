import React from "react";

export const handleReset = (
    setInput: React.Dispatch<React.SetStateAction<string | undefined>>,
    setResult: React.Dispatch<React.SetStateAction<string>>
) => {
    setInput(undefined);
    setResult("");
}
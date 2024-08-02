import { invalidInput } from "./InvalidInput";

export const convertToDecimal = (
    input: string,
    result: HTMLElement,
    base: number,
    isValid: (input: string) => boolean,
    errorMessage: string
): number => {
    if (!invalidInput(input, result, isValid, errorMessage)) {
        return 0;
    }

    let decimal = 0;

    for (let i = 0; i < input.length; i++) {
        let digit = parseInt(input[i], base);
        let position = input.length - i - 1;
        decimal += digit * Math.pow(base, position);
    }

    result.innerText = decimal.toString();
    return decimal;
}
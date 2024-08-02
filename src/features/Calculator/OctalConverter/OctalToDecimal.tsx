import {convertToDecimal} from "../ConverToDecimal";

export const octalToDecimal = (input: string, result: HTMLElement): number => {
    const isValidOctal = (input: string) => /^[0-7]+$/.test(input);

    return convertToDecimal(input, result, 8, isValidOctal, "Invalid octal number");
}

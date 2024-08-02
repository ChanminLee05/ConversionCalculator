import {convertToDecimal} from "../ConverToDecimal";

export const hexToDecimal = (input: string, result: HTMLElement): number => {
    const isValidHex = (input: string) => /^[0-9A-Fa-f]+$/.test(input);

    return convertToDecimal(input, result, 16, isValidHex, "Invalid hexadecimal number")
}

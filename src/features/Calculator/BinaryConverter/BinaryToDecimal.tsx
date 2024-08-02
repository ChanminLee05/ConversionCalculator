import {convertToDecimal} from "../ConverToDecimal";

export const binaryToDecimal = (input: string, result: HTMLElement): number => {
    const isValidBinary = (input: string) => /^[01]+$/.test(input);
    return convertToDecimal(input, result, 2, isValidBinary, "Invalid binary number");
}

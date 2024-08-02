import {octalToDecimal} from "./OctalToDecimal";
import {decimalToBinary} from "../DecimalConverter/DecimalToBinary";

export const octalToBinary = (input: string, result: HTMLElement) => {
    const decimalValue = octalToDecimal(input, result);
    decimalToBinary(decimalValue, result);
}
import {octalToDecimal} from "./OctalToDecimal";
import {decimalToHex} from "../DecimalConverter/DecimalToHex";

export const octalToHex = (input: string, result: HTMLElement) => {
    const decimalValue = octalToDecimal(input, result);
    decimalToHex(decimalValue, result);
}
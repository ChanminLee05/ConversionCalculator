import {binaryToDecimal} from "./BinaryToDecimal";
import {decimalToHex} from "../DecimalConverter/DecimalToHex";

export const binaryToHex = (input: string, result: HTMLElement) => {
    const decimalValue = binaryToDecimal(input, result);
    decimalToHex(decimalValue, result);
}
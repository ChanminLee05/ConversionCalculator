import {hexToDecimal} from "./HexToDecimal";
import {decimalToBinary} from "../DecimalConverter/DecimalToBinary";

export const hexToBinary = (input: string, result: HTMLElement) => {
    const decimalValue = hexToDecimal(input, result);
    decimalToBinary(decimalValue, result);
}
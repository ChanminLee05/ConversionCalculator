import {hexToDecimal} from "./HexToDecimal";
import {decimalToOctal} from "../DecimalConverter/DecimalToOctal";

export const hexToOctal = (input: string, result: HTMLElement) => {
    const decimalValue = hexToDecimal(input, result);
    decimalToOctal(decimalValue, result);
}
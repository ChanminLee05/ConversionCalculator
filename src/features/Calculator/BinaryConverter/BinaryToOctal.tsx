import {binaryToDecimal} from "./BinaryToDecimal";
import {decimalToOctal} from "../DecimalConverter/DecimalToOctal";

export const binaryToOctal = (input: string, result: HTMLElement) => {
    const decimalValue = binaryToDecimal(input, result);
    decimalToOctal(decimalValue, result);
}
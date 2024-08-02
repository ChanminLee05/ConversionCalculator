import {decimalToBinary} from "./DecimalConverter/DecimalToBinary";
import {decimalToOctal} from "./DecimalConverter/DecimalToOctal";
import {decimalToHex} from "./DecimalConverter/DecimalToHex";
import {binaryToDecimal} from "./BinaryConverter/BinaryToDecimal";
import {octalToDecimal} from "./OctalConverter/OctalToDecimal";
import {hexToDecimal} from "./HexConverter/HexToDecimal";
import {binaryToOctal} from "./BinaryConverter/BinaryToOctal";
import {binaryToHex} from "./BinaryConverter/BinaryToHex";
import {octalToBinary} from "./OctalConverter/OctalToBinary";
import {octalToHex} from "./OctalConverter/OctalToHex";
import {hexToBinary} from "./HexConverter/HexToBinary";
import {hexToOctal} from "./HexConverter/HexToOctal";

export const calculator = ( type:string, input: string, result: HTMLElement ) => {
    switch(type) {
        case 'Decimal-Binary':
            decimalToBinary(parseInt(input), result);
            break;
        case 'Decimal-Octal':
            decimalToOctal(parseInt(input), result);
            break;
        case 'Decimal-Hexadecimal':
            decimalToHex(parseInt(input), result);
            break;
        case 'Binary-Decimal':
            binaryToDecimal(input.toString(), result);
            break;
        case 'Binary-Octal':
            binaryToOctal(input.toString(), result);
            break;
        case 'Binary-Hexadecimal':
            binaryToHex(input.toString(), result);
            break;
        case 'Octal-Decimal':
            octalToDecimal(input.toString(), result);
            break;
        case 'Octal-Binary':
            octalToBinary(input.toString(), result);
            break;
        case 'Octal-Hexadecimal':
            octalToHex(input.toString(), result);
            break;
        case 'Hexadecimal-Decimal':
            hexToDecimal(input.toString(), result);
            break;
        case 'Hexadecimal-Binary':
            hexToBinary(input.toString(), result);
            break;
        case 'Hexadecimal-Octal':
            hexToOctal(input.toString(), result);
            break;
        default:
            console.error(`Conversion type "${type}" not found.`);
    }
}
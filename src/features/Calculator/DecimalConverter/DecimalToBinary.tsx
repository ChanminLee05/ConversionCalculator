export const decimalToBinary = (input: number, result: HTMLElement) => {
    let binary = "";

    if (input === 0) {
        result.innerText = "0";
        return;
    }

    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
}
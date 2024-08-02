export const decimalToHex = (input: number, result: HTMLElement) => {
    if (input === 0) {
        result.innerText = "0";
        return;
    }

    result.innerText = input.toString(16).toUpperCase();
}
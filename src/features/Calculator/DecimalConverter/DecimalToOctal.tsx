export const decimalToOctal = (input: number, result: HTMLElement) => {
    let octal = "";

    if (input === 0) {
        result.innerText = "0";
        return;
    }

    while (input > 0) {
        octal = (input % 8) + octal;
        input = Math.floor(input / 8);
    }

    result.innerText = octal;
}
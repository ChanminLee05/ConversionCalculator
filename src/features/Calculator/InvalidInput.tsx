export const invalidInput = (
    input: string,
    result: HTMLElement,
    isValid: (input: string) => boolean,
    invalidMessage: string
) => {
    if (!isValid(input)) {
        result.innerText = invalidMessage;
        return false;
    }
    return true;
};
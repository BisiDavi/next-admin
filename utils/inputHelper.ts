export function inputValue(values) {
    return values.map((value) => getInputName(value));
}

export function getInputName(inputName) {
    const splitName = inputName.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[1];
    const thirdName = splitName[2];

    if (splitName.length === 2) {
        const camelCase = `${firstName.toLowerCase()}${lastName}`;
        return camelCase;
    } else if (splitName.length === 3) {
        const camelCase = `${firstName.toLowerCase()}${lastName}${thirdName}`;
        return camelCase;
    } else {
        const firstName = inputName.toLowerCase();
        return firstName;
    }
}

export function getInputType(inputName: string) {
    const lowercaseInputName = inputName.toLocaleLowerCase();
    if (lowercaseInputName === 'email') {
        return 'email';
    } else if (
        lowercaseInputName === 'password' ||
        lowercaseInputName === 'confirmPassword'
    ) {
        return 'password';
    } else {
        return 'text';
    }
}

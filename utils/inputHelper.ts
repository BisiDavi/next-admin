import { getInputName } from '@components/fields';

export function inputValue(values) {
    return values.map((value) => getInputName(value));
}

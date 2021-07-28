import { getInputName, getInputType } from './fields';

export function Input({ data }) {
    return (
        <>
            <label htmlFor={getInputName(data)}>{data}</label>
            <input
                type={getInputType(data)}
                className='form-control'
                name={getInputName(data)}
                placeholder={data}
                value={data.value}
                autoComplete={getInputName(data)}
            />
        </>
    );
}

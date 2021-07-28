import { getInputName, getInputType } from './fields';

export function Input({ data, onChange, onBlur, errors, value }) {
    return (
        <>
            <label htmlFor={getInputName(data)}>{data}</label>
            <input
                type={getInputType(data)}
                className='form-control'
                name={getInputName(data)}
                placeholder={data}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                autoComplete={getInputName(data)}
            />
            {errors.name && (
                <div className='feedback text-danger'>{errors.name}</div>
            )}
        </>
    );
}

export function InputField({
    fields,
    className,
    onChange,
    onBlur,
    errors,
    value,
}) {
    return fields.map((input, index) => (
        <div key={index} className={className}>
            <Input
                onChange={onChange}
                onBlur={onBlur}
                data={input}
                errors={errors}
                value={value}
            />
        </div>
    ));
}

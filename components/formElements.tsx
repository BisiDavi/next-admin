import { getInputName, getInputType } from '@utils/.';

export function Input({
    data,
    onChange,
    onBlur,
    errors,
    value,
    required = false,
}: inputProps) {
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
                required={required}
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
    required,
}: InputField): any {
    return fields.map((input, index) => {
        return (
            <div key={index} className={className}>
                <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    data={input}
                    errors={errors}
                    value={value}
                    required={required}
                />
            </div>
        );
    });
}

interface inputProps {
    required?: boolean;
    data?: string;
    onChange: () => void;
    onBlur: () => void;
    errors: {
        name: string;
    };
    value: string;
}

interface InputField extends inputProps {
    required?: boolean;
    fields: string[];
    className: string;
}

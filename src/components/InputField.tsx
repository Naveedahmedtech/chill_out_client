import { useField, FieldHookConfig } from 'formik';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconColors } from '../utils/styles';
import { IInputFieldProps } from '../types/types';

const InputField: React.FC<IInputFieldProps> = ({ label, leftIcon, ...props }) => {
    const [field, meta ] = useField(props);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const inputType = props.type === 'password' && !showPassword ? 'password' : 'text';
    const inputProps = {
        ...field,
        type: inputType,
        id: props.name
    };

    return (
        <div className="mb-4">
            <label htmlFor={props.name} className="block text-sm font-medium text-primary">
                {label}
            </label>
            <div className="mt-1 relative shadow-sm">
                {leftIcon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {leftIcon}
                    </div>
                )}
                <input
                    className={`block w-full pl-10 pr-3 sm:text-sm border-[#CBAAFF] rounded-lg focus:border-primary ${meta.touched && meta.error ? 'border-red-500' : ''}`}
                    {...inputProps}
                />
                {props.type === 'password' && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleShowPassword}>
                        {showPassword ? <FaEyeSlash color={IconColors.color} /> : <FaEye color={IconColors.color} />}
                    </div>
                )}
            </div>
            {meta.touched && meta.error && (
                <div className="text-xs text-red-500">{meta.error}</div>
            )}
        </div>
    );
};


export default InputField;

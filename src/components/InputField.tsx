import { useField } from 'formik';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputField = ({ label, leftIcon, ...props }) => {
    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-4">
            <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 relative shadow-sm">
                {leftIcon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {leftIcon}
                    </div>
                )}
                <input
                    className={`block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-lg ${meta.touched && meta.error ? 'border-red-500' : ''
                        }`}
                    {...field}
                    {...props}
                    type={props.type === 'password' && !showPassword ? 'password' : 'text'}
                />
                {props.type === 'password' && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={toggleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                )}
            </div>
            {meta.touched && meta.error ? (
                <div className="text-xs text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default InputField;

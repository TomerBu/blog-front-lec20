import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import { RegisterRequest } from "../routes/Register";
import React from "react";
import { LoginRequest } from "../routes/Login";

type InputFieldProps = {
  register: UseFormRegister<RegisterRequest| LoginRequest>;
  errors: FieldErrors<RegisterRequest|LoginRequest>;
  name: keyof RegisterRequest | keyof LoginRequest; //"username"/"password"/"email"
  pattern?: ValidationRule<RegExp> | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  errors,
  register,
  name,
  pattern,
  ...rest
}: InputFieldProps) => {
  return (
    <div>
      <input
        placeholder={`${name}`}
        {...rest}
        {...register(`${name}`, {
          required: `${name} is required`,
          minLength: {
            value: rest.minLength ?? 2,
            message: `Min length is ${rest.minLength ?? 2}`,
          },
          maxLength: {
            value: rest.maxLength ?? 2000000,
            message: `Max length is ${rest.maxLength ?? 2000000}`,
          },
        })}
        type="text"
        autoComplete="username"
      />
      {errors.username && (
        <p className="text-red-500">{errors.username.message}</p>
      )}
    </div>
  );
};

export default InputField;

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RegisterRequest } from "../routes/Register";
import React from "react";

type InputFieldProps = {
  register: UseFormRegister<RegisterRequest>;
  errors: FieldErrors<RegisterRequest>;
  name: keyof RegisterRequest; //"username"/"password"/"email"
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  errors,
  register,
  name,
  ...rest
}: InputFieldProps) => {
  return (
    <div>
      <input
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


function demo(){
  
}
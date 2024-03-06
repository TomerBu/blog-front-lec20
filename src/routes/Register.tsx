import { useState } from "react";
import { useForm } from "react-hook-form";

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit, control } = useForm<RegisterRequest>();

  return (
    <>
      <h1>Sign up</h1>
      <form noValidate>
        <input
          {...register("username")}
          type="text"
          autoComplete="username"
        />
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          placeholder="Email"
        />
        <input
          {...register("password")}
          type="password"
          autoComplete="new-password"
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default Register;

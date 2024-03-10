import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterRequest>({
    mode:"onChange"
  });

  const onSubmit = (data: RegisterRequest) => {
    alert("submitted : " + JSON.stringify(data)); //object object
  };

  return (
    <>
      <h1>Sign up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5 w-1/2 mx-auto shadow-2xl rounded-xl p-5 text-xl"
      >
        <input
          placeholder="username"
          {...register("username", {
            required: "username is required",
            minLength: { value: 2, message: "Min length is 2" },
            maxLength: { value: 20, message: "Max length is 20" },
          })}
          type="text"
          autoComplete="username"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email must be valid",
            },
          })}
          type="email"
          autoComplete="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "Password must contain at least 8 digits",
            },
            maxLength: {
              value: 32,
              message: "Password must not exceed 32 characters",
            },
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@$%^&]).{8,32}$/,
              message:
                "password must contain at least 1 lowercase letter,1 uppercase letter,1 digit and 1 special character",
            },
          })}
          type="password"
          autoComplete="new-password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input type="submit" value="Register" />
      </form>

      <DevTool control={control} />
    </>
  );
};

export default Register;

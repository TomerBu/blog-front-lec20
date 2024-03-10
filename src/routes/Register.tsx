import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import InputField from "../components/InputField";

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
    mode: "onChange",
  });

  const onSubmit = (data: RegisterRequest) => {
    alert("submitted : " + JSON.stringify(data)); //object object
  };

  return (
    <>
      <h1 className="text-center text-lg my-2">Sign up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5 w-1/1 mx-4 md:w-1/2 md:mx-auto shadow-2xl rounded-xl p-5 text-xl"
      >
        <InputField
          register={register}
          errors={errors}
          name="username"
        />
        <InputField register={register} errors={errors} name="email" />

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
        <input
          className="rounded-md bg-blue-500 text-white p-2"
          type="submit"
          value="Register"
        />
      </form>

      <DevTool control={control} />
    </>
  );
};

export default Register;

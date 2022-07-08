import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input {...register("password")} type="password" />

      <input type="submit" />
    </form>
  );
}

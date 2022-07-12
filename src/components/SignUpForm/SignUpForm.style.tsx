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
      <label htmlFor="email">Email:</label>
      <input type="email" {...register("email")} />
      <label htmlFor="firstName">First name:</label>
      <input {...register("firstName")} />
      <label htmlFor="lastName">Last name:</label>
      <input {...register("lastName")} />
      <label htmlFor="Password">Password:</label>
      <input {...register("password")} type="password" />

      <input type="submit" />
    </form>
  );
}

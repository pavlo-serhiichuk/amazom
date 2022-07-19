import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {Form} from './LoginForm.style'

type FormValues = {
  email: string;
  password: string;
};

export default function LoginFormComponent() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input type="email" {...register("email")} />
      <label htmlFor="email">Password:</label>
      <input {...register("password")} type="password" />
      <span></span>
      <input type="submit" />
    </Form>
  );
}

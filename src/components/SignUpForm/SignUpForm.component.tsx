import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Form, Input, Label, Submit} from './SignUpForm.style'
import {useActions} from '../../hooks/useActions'
import {useNavigate} from 'react-router-dom'

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export default function SignUpForm() {
  const {register, handleSubmit} = useForm<FormValues>();
  const {signUp} = useActions()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormValues> = data => {
    signUp(data.firstName, data.lastName, data.email, data.password)
    console.log(data);
    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Registration:</h3>
      <Label>
        First name:
        <Input {...register('firstName')} />
      </Label>
      <Label>
        Last name:
        <Input {...register('lastName')} />
      </Label>
      <Label>
        Email:
        <Input type="email" {...register('email')} />
      </Label>
      <Label>
        Password:
        <Input {...register('password')} type="password" />
      </Label>
      <Submit type="submit" />
    </Form>
  );
}

import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Form, Grid, Input, Label, Submit} from './SignUpForm.style'
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
      <Grid>
        <Label htmlFor="firstName">First name:</Label>
        <Input {...register('firstName')} />
        <Label htmlFor="lastName">Last name:</Label>
        <Input {...register('lastName')} />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" {...register('email')} />
        <Label htmlFor="Password">Password:</Label>
        <Input {...register('password')} type="password" />
      </Grid>
      <Submit type="submit" />
    </Form>
  );
}

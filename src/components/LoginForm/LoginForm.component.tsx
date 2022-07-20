import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {A, Form, Grid, Input, Label, Submit, Title, TitleWrapper} from '../SignUpForm/SignUpForm.style'
import {NavLink, useNavigate} from 'react-router-dom'
import {RouteEnum} from '../../constants/routes'
import {useActions} from '../../hooks/useActions'

type FormValues = {
  email: string;
  password: string;
};

export default function LoginFormComponent() {
  const {register, handleSubmit} = useForm<FormValues>();
  const {login} = useActions()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormValues> = data => {
    login(data.email, data.password)
    console.log(data);
    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Login your account:</h3>
      <Grid>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" {...register('email')} />
        <Label htmlFor="email">Password:</Label>
        <Input {...register('password')} type="password" />
      </Grid>
      <Submit type="submit" />
      <TitleWrapper>
        <Title>
          or
        </Title>
      </TitleWrapper>
      <A to={RouteEnum.SIGNUP}>Sign Up</A>
    </Form>
  );
}

import React, {useEffect} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {A, Form, Input, Label, Submit, Title, TitleWrapper} from '../SignUpForm/SignUpForm.style'
import {RouteEnum} from '../../constants/routes'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

type FormValues = {
  email: string;
  password: string;
};

export default function LoginFormComponent() {
  const {register, handleSubmit} = useForm<FormValues>();
  const {error} = useTypedSelector(state => state.auth)
  const {login} = useActions()

  const onSubmit: SubmitHandler<FormValues> = data => {
    login(data.email, data.password)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email:
        <Input type="email" {...register('email')} />
      </Label>
      <Label>
        Password:
        <Input {...register('password')} type="password" />
      </Label>
      {
        error
        && <div>The login or password was entered incorrectly</div>
      }
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

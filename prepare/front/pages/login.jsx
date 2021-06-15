import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { Button, Form, Header, Input, Label, LinkContainer } from './signup';
import { loginAction } from '../reducers/user';

const LogIn = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginAction({ email, password }));
      console.log(email, password);
    },
    [email, password],
  );

  useEffect(() => {
    if (isLoggedIn) {
      Router.replace('/');
    }
  }, [isLoggedIn]);

  return (
    <AppLayout>
      <Header>MolyMath</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
        </Label>
        <Label id="password-label">
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link href="/signup">
          <a>회원가입 하러가기</a>
        </Link>
      </LinkContainer>
    </AppLayout>
  );
};
export default LogIn;

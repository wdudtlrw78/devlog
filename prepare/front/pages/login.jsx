import React, { useCallback } from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import AppLayout from '../components/AppLayout';
import { Button, Form, Header, Input, Label, LinkContainer } from './signup';

const LogIn = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
    },
    [email, password],
  );
  return (
    <AppLayout>
      <div id="container">
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
      </div>
    </AppLayout>
  );
};

export default LogIn;

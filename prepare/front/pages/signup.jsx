import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

export const Header = styled.header`
  width: 280px;
  color: #e96900;
  line-height: 1;
  font-size: 34px;
  font-weight: 700;
  font-family: Noto Sans KR;
  text-align: center;
  margin: 52px auto;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 280px;
  max-width: 280px;
`;

export const Label = styled.label`
  & > span {
    display: bloack;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    line-height: 2;
  }
`;

export const Input = styled.input`
border: 1px solid #CCCCCC;
box-sizing: border-box
border-radius: 4px;
margin: 0 0 24px;
width: 100%;
padding: 12px;
height: 44px;
padding-top: 11px;
padding-botton:13px;
font-size: 15px;
line-heigth: 1;

&:focus {
  border: 1px solid #000;
}

&::placeholder {
  font-size: 12px;
  color: #999;
}
`;

export const Button = styled.button`
  margin-bottom: 16px;
  width: 100%;
  color: #fff;
  background-color: #e96900;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #d15f02;
  }
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #616061;
  margin: 0 auto 8px;
  width: 280px;
  & a {
    color: #e96900;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignUp() {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [singUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangepasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck);

      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');

        setSignUpError('');
        setSignUpSuccess(false);
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <AppLayout>
      <div id="container">
        <Header>MolyMath</Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <span>이메일 주소</span>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={onChangeEmail}
              required
            />
          </Label>
          <Label id="nickname-label">
            <span>닉네임</span>
            <div>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="나중에 변경할 수 있습니다."
                value={nickname}
                onChange={onChangeNickname}
                required
              />
            </div>
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="8자리 이상이어야합니다."
                value={password}
                onChange={onChangePassword}
                required
              />
            </div>
          </Label>
          <Label id="password-check-label">
            <span>비밀번호 확인</span>
            <div>
              <Input
                type="password"
                id="password-check"
                name="password-check"
                placeholder="비밀번호를 한번 더 입력하세요."
                value={passwordCheck}
                onChange={onChangepasswordCheck}
                required
              />
            </div>
          </Label>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다!</Error>}
          {/* {!nickname && <Error>닉네임을 입력해주세요.</Error>} */}
          {signUpError && <Error>{signUpError}</Error>}
          {singUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
          <Button type="submit">회원가입</Button>
        </Form>
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link href="/login">
            <a>로그인 하러가기</a>
          </Link>
        </LinkContainer>
      </div>
    </AppLayout>
  );
}

export default SignUp;

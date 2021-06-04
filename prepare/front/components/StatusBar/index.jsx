import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, LogInButton, MenuButton, RightMenu, SignUpButton } from './styles';

const StatusBar = () => {
  return (
    <>
      <Container>
        <MenuButton>
          <FontAwesomeIcon className="menu-button" icon="bars" size="2x" />
        </MenuButton>
        <RightMenu>
          <LogInButton>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </LogInButton>
          <SignUpButton>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </SignUpButton>
        </RightMenu>
      </Container>
    </>
  );
};

export default StatusBar;

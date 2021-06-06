import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, LogInButton, ToggleMenuButton, RightColumn, SignUpButton, LeftColumn } from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <ToggleMenuButton>
          <FontAwesomeIcon className="menu-button" icon="bars" size="2x" />
        </ToggleMenuButton>
        <LeftColumn>
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="MolyMath" width={64} height={44} />
            </a>
          </Link>
        </LeftColumn>
        <RightColumn>
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
        </RightColumn>
      </Container>
    </>
  );
};

export default Header;

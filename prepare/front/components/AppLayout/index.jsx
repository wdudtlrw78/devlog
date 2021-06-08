import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Global, css } from '@emotion/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import NavMenu from '../NavMenu';
import {
  Section,
  HeaderContainer,
  HeaderLeftColumn,
  LogInButton,
  NavContainer,
  HeaderRightColumn,
  SignUpButton,
  ToggleMenuButton,
  Footer,
  MainContainer,
} from './styles';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-size: 14px;
        font-family: Noto Sans KR, Lato, sans-serif;
        letter-spacing: -1px;
        overflow: auto;
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: #e96900;
        text-decoration: none;
      }

      .menu-button {
        color: #e96900;
      }
    `}
  />
);

const AppLayout = ({ children }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = useCallback(() => {
    setShowNavMenu((prev) => !prev);
  }, []);

  return (
    <div>
      {globalStyles}
      <Section>
        <HeaderContainer>
          <ToggleMenuButton show={showNavMenu} onClick={toggleNavMenu}>
            <FontAwesomeIcon className="menu-button" icon="bars" size="2x" />
          </ToggleMenuButton>
          <HeaderLeftColumn>
            <Link href="/">
              <a>
                <Image src="/logo.png" alt="MolyMath" width={64} height={44} />
              </a>
            </Link>
          </HeaderLeftColumn>
          <HeaderRightColumn>
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
          </HeaderRightColumn>
        </HeaderContainer>

        <NavContainer>
          <NavMenu />
        </NavContainer>
        <MainContainer>Main{children}</MainContainer>

        <Footer>footer</Footer>
      </Section>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

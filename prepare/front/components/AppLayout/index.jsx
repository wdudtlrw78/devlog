import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  Section,
  HeaderLeftColumn,
  LogInButton,
  NavContainer,
  HeaderRightColumn,
  SignUpButton,
  ToggleMenuButton,
  Footer,
  MainContainer,
  Header,
  Container,
  BackGround,
} from './styles';

const AppLayout = ({ children }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleNavMenu = useCallback(() => {
    setShowNavMenu((prev) => !prev);
    setShowBackground((prev) => !prev);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 820) {
      setShowNavMenu(true);
      setShowBackground(false);
    } else {
      setShowNavMenu(false);
      setShowBackground(false);
    }
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 820) {
        setShowNavMenu(true);
        setShowBackground(false);
      } else {
        setShowNavMenu(false);
        setShowBackground(false);
      }
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div>
      <Section>
        <Header>
          <Container>
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
          </Container>
        </Header>
        {showNavMenu && (
          <>
            <NavContainer>
              <ul>
                <li>
                  <Link href="/profile">
                    <a>프로필</a>
                  </Link>
                </li>
                <li>
                  <Link href="/category/[navMenu]" as="/category/HTML&DOM">
                    <a>HTML&DOM</a>
                  </Link>
                </li>
              </ul>
            </NavContainer>
          </>
        )}
        {showBackground && <BackGround show={showBackground} onClick={toggleNavMenu} />}
        <MainContainer>{children}</MainContainer>

        <Footer>footer</Footer>
      </Section>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

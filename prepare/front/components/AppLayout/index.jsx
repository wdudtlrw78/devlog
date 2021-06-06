import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

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

const AppLayout = ({ children }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = useCallback(() => {
    setShowNavMenu((prev) => !prev);
  }, []);

  return (
    <AppLayout>
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
    </AppLayout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

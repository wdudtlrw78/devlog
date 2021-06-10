import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
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
  BottomContainer,
  TopContainer,
  CenterLine,
  SNS,
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
              <FontAwesomeIcon className="menu-button" icon={faBars} size="2x" />
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
            <NavContainer show={showNavMenu}>
              <TopContainer>
                <li>
                  <Link href="/">
                    <a>MolyMath</a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <a>소개</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio">
                    <a>포트폴리오</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guestbook">
                    <a>방명록</a>
                  </Link>
                </li>
              </TopContainer>
              <CenterLine />
              <BottomContainer>
                <li>
                  <Link href="/category/[navMenu]" as="/category/HTML&DOM">
                    <a>HTML&DOM</a>
                  </Link>
                </li>
                <li>
                  <Link href="/category/[navMenu]" as="/category/CSS">
                    <a>CSS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/category/[navMenu]" as="/category/JavaScript">
                    <a>JavaScript</a>
                  </Link>
                </li>
              </BottomContainer>
              <SNS>
                <Link href="mailto:wdudtlrw78@gmail.com">
                  <a>
                    <FontAwesomeIcon className="instagram" icon={faEnvelope} size="2x" />
                  </a>
                </Link>
                <Link href="https://github.com/wdudtlrw78">
                  <a target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon className="github" icon={faGithub} size="2x" />
                  </a>
                </Link>

                <Link href="https://www.instagram.com/mosik_2">
                  <a target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" />
                  </a>
                </Link>
              </SNS>
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

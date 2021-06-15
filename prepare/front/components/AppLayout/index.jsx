import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
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
import UserProfile from '../UserProfile';

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const today = new Date();

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
              <Link href="/" prefetch={false}>
                <a>
                  <Image src="/logo.png" alt="MolyMath" width={64} height={44} />
                </a>
              </Link>
            </HeaderLeftColumn>
            <HeaderRightColumn>
              {isLoggedIn ? (
                <UserProfile />
              ) : (
                <>
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
                </>
              )}
            </HeaderRightColumn>
          </Container>
        </Header>
        {showNavMenu && (
          <>
            <NavContainer show={showNavMenu}>
              <TopContainer>
                <li>
                  <Link href="/" prefetch={false}>
                    <a>MolyMath</a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile" prefetch={false}>
                    <a>소개</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" prefetch={false}>
                    <a>포트폴리오</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guestbook" prefetch={false}>
                    <a>방명록</a>
                  </Link>
                </li>
              </TopContainer>
              <CenterLine />
              <BottomContainer>
                <li>
                  <Link href="/category/[navMenu]" as="/category/HTML&DOM" prefetch={false}>
                    <a>HTML&DOM</a>
                  </Link>
                </li>
                <li>
                  <Link href="/category/[navMenu]" as="/category/CSS" prefetch={false}>
                    <a>CSS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/category/[navMenu]" as="/category/JavaScript" prefetch={false}>
                    <a>JavaScript</a>
                  </Link>
                </li>
              </BottomContainer>
            </NavContainer>
          </>
        )}
        {showBackground && <BackGround show={showBackground} onClick={toggleNavMenu} />}

        <MainContainer>{children}</MainContainer>

        <Footer>
          <SNS>
            <Link href="mailto:wdudtlrw78@gmail.com" prefetch={false}>
              <a>
                <FontAwesomeIcon className="instagram" icon={faEnvelope} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com/wdudtlrw78" prefetch={false}>
              <a target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="github" icon={faGithub} size="lg" />
              </a>
            </Link>

            <Link href="https://www.instagram.com/mosik_2" prefetch={false}>
              <a target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="instagram" icon={faInstagram} size="lg" />
              </a>
            </Link>
          </SNS>
          © {today.getFullYear()} | by molymath
        </Footer>
      </Section>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

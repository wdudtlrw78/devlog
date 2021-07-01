import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  Section,
  HeaderLeftColumn,
  NavContainer,
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
  UpBig,
} from './styles';

const AppLayout = ({ children }) => {
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

  const onUpper = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <UpBig onClick={onUpper}>
        <div className="main">
          <FontAwesomeIcon className="arrow-up" icon={faArrowUp} size="2x" />
        </div>
      </UpBig>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

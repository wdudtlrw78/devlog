import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 1600px;
  height: 1400px;
  margin: 0px auto;

  @media (min-width: 1340px) {
    max-width: calc(1356px);
  }

  @media (min-width: 820px) {
    max-width: calc(1100px);
  }

  @media (min-width: 320px) {
    margin: 0px auto;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 820px) {
    height: 64px;
  }

  z-index: 999;
`;

export const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0px;
  z-index: 50;
`;

export const Container = styled.div`
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1340px) {
    max-width: calc(1356px);
  }

  @media (min-width: 820px) {
    max-width: calc(1100px);
  }

  @media (min-width: 320px) {
    margin: 0px auto;
  }
`;

export const ToggleMenuButton = styled.button`
  width: 48px;
  height: 48px;
  float: left;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 820px) {
    display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 10px 0;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 820px) {
    height: 64px;
  }
  @media (max-width: 820px) {
    padding: 10px 16px 10px 0;
  }
`;

export const HeaderLeftColumn = styled.div`
  width: 240px;
  text-align: center;
  clear: both;
  @media (max-width: 820px) {
    display: none;
`;

export const HeaderRightColumn = styled.div`
  display: flex;
  user-select: none;
  padding-right: 16px;

  & a:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LogInButton = styled.div`
  & a {
    color: #e96900;
    display: inline-block;
    padding: 13px 16px;
    transition: color 1s ease 0s;
  }
`;

export const SignUpButton = styled.a`
  & a {
    display: inline-block;
    color: #e96900;
    padding: 13px 16px;
    transition: color 1s ease 0s;
  }
`;

export const NavContainer = styled.nav`
  user-select: none;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out 0s;
  width: 240px;
  padding-left: 16px;
  background: #fff;
  height: 100vh;
  z-index: 100;

  @media (max-width: 820px) {
    position: fixed;
    transition: left 0.5s ease 0s;
    left: 0;
  }

  & a:hover {
    color: #e96900;
  }
`;

export const TopContainer = styled.ul`
  padding: 0;
  margin-top: 88px;
  position: relative;

  @media (min-width: 820px) {
    margin-top: 108px;
  }
  & li {
    font-weight: 300;
    margin-bottom: 24px;
  }

  & li:first-of-type > a {
    font-size: 18px;
    font-weight: 500;
    color: #e96900;
  }
`;

export const CenterLine = styled.div`
  position: absolute;
  width: 240px;
  height: 0;
  left: 0px;
  top: 260px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media (min-width: 820px) {
    top: 280px;
  }
`;

export const BottomContainer = styled.ul`
  padding: 0;
  margin-top: 78px;
  font-size: 16px;
  font-weight: 500;

  & li {
    margin-bottom: 24px;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
`;

export const Footer = styled.footer`
  margin-left: 240px;
  padding: 14px 14px 21px;

  @media (max-width: 820px) {
    margin: 0 auto;
  }
`;
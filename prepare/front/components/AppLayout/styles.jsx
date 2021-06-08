import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  height: 1400px;
  margin: 0 auto;
  position: relative;

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

export const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  margin: 0 auto;
  display: flex;
  position: fixed;
  top: 0;
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
  z-index: 999;
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
margin-top: 8px;
text-align: center;
@media (max-width: 820px) {
  display: none;
@media (max-width: 820px) {
  display: none;
}
`;

export const HeaderRightColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const LogInButton = styled.div`
  & a {
    display: inline-block;
    padding: 13px 16px;
    transition: color 1s ease 0s;
  }
  & a:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const SignUpButton = styled.a`
  & a {
    display: inline-block;
    padding: 13px 16px;
    margin-right: -16px;
    transition: color 1s ease 0s;
  }
  & a:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const NavContainer = styled.nav`
  user-select: none;
  position: fixed;
  width: 240px;
  @media (min-width: 820px) {
    width: 240px;
    height: 100%;
    user-select: none;
    position: fixed;
  }
`;

export const MainContainer = styled.main``;

export const Footer = styled.footer``;

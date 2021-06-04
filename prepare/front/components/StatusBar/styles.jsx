import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  height: 48px;
  padding: 10px 16px;
  margin: 0 auto;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 820px) {
    height: 64px;
    margin: 0 auto;
  }
`;

export const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: -16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 820px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
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

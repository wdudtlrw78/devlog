import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 4px;
  }

  & .profile-nickname {
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
  }
`;

export const SettingButton = styled.button`
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  & .profile-setting {
    color: #e96900;
    font-size: 8px;
    padding: 16px 10px;
  }

  & .profile-setting:hover {
    color: #000;
    transition: color 1s ease 0s;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 820px) {
    & .profile-setting {
      padding: 24px 10px;
    }
  }
`;

export const LogoutButton = styled.button`
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  & .profile-logout {
    color: #e96900;
    font-size: 8px;
    transition: color 1s ease 0s;
    padding: 16px 10px;
  }

  & .profile-logout:hover {
    color: #000;
    transition: color 1s ease 0s;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 820px) {
    & .profile-logout {
      padding: 24px 10px;
    }
  }
`;

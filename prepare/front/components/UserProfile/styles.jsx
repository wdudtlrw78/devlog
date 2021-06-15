import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 4px;
  }

  & .profile-nickname {
    font-size: 16px;
    font-weight: 500;
  }

  & .profile-setting {
    cursor: pointer;
    color: #e96900;
    font-size: 10px;
  }
`;

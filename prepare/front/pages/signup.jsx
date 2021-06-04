import React from 'react';
import styled from '@emotion/styled';
import AppLayout from '../components/AppLayout';

export const Header = styled.header`
  width: 280px;
  color: #e96900;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  margin: 52px auto;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 280px;
  max-width: 280px;
`;

export const Label = styled.label`
  margin-bottom: 16px;
`;

export const Input = styled.input`
border: 1px solid #CCCCCC;
box-sizing: border-box
border-radius: 4px;
margin: 0 0 20px;
width: 100%;
padding: 12px;
height: 44px;
padding-top: 11px;
padding-botton:13px;
font-size: 15px;
line-heigth: 1.33333333;

&:focus {
  border: 1px solid #000;
}
`;

export const Button = styled.button`
  margin-bottom: 16px;
  width: 100%;
  color: #fff;
  background-color: #e96900;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const LinkContainer = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #616061;
  margin: 0 auto 8px;
  width: 280px;
  & a {
    color: #e96900;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignUp() {
  return <AppLayout>S</AppLayout>;
}

export default SignUp;

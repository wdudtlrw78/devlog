import styled from '@emotion/styled';

export const Card = styled.section`
  padding: 0 0 42px;
  margin: 0 0px 56px;
  border-bottom: 1px solid #c0c0c0;
`;

export const Meta = styled.div`
  cursor: pointer;
`;

export const DateAndCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 7px;

  @media (min-width: 820px) {
    margin-left: 0;
  }
`;

export const Date = styled.span`
  font-weight: 400;
  color: #212121;
`;

export const CategoryBox = styled.div`
  text-align: center;
  width: 106px;
  height: 24px;
  margin-left: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  & span {
    display: inline-block;
    font-weight: 500;
    vertical-align: middle;
    line-height: 1.5;
  }
`;

export const AarticleContainer = styled.div`
  margin-left: 16px;

  @media (min-width: 820px) {
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export const Description = styled.p`
  margin-top: 8px;
`;

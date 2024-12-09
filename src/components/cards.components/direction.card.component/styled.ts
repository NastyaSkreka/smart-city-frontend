import styled, { css } from "styled-components";

const activeStyles = css`
  height: 258px;
  width: 169px;
  border: none;
  margin: 5px 0 5px 7px;
  background-color: var(--background-color);
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.37);
`;

const inactiveStyles = css`
  height: 204px;
  width: 130px;
  border: 1px solid #8f8f8f;
  margin: 0;
  background-color: #efefef;
  box-shadow: none;

  @media (max-width: 744px) {
    width: 307px;
    height: 123px;
    background-color: var(--background-color);
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.37);
    border: none;
  }
`;

export const CardContainer = styled.div<{ isActive: boolean }>`
  border-radius: 17px;
  padding: 30px 15px;
  ${({ isActive }) => (isActive ? activeStyles : inactiveStyles)};
  transition: all 0.3s ease-in-out;

  @media (max-width: 744px) {
    padding: 10px 5px;
  }
`;

export const CardContent = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ isActive }) => (isActive ? "100px" : "70px")};
  transition: gap 0.3s ease-in-out;

  @media (max-width: 744px) {
    gap: 15px;
  }
`;

export const CardTitle = styled.div<{ isActive: boolean }>`
  font-family: "e-Ukraine", sans-serif;
  font-size: ${({ isActive }) => (isActive ? "20px" : "16px")};
  line-height: 120%;
  color: ${({ isActive }) => (isActive ? "#474747" : "#555")};
  font-weight: ${({ isActive }) => (isActive ? "300" : "400")};
  max-width: ${({ isActive }) => (isActive ? "130px" : "110px")};
  transition: all 0.3s ease-in-out; 

  @media (max-width: 744px) {
    max-width: 100%;
    font-size: 20px;
    text-align: center;
    order: 2; 
  }
`;

export const CardImage = styled.img<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "100px" : "80px")};
  height: ${({ isActive }) => (isActive ? "100px" : "80px")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 744px) {
    width: 63px;
    height: 63px;
    order: 1; 
  }

`;
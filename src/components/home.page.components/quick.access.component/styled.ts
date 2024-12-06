import styled from "styled-components";

export const QuickAccessContainer = styled.div`
  padding-top: 88px;
  padding-bottom: 30px;
  background-color: #f9fafc;
`;

export const QuickAccessContent = styled.div`
  background-color: #fff;
  padding: 18px 0px 0px 19px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  max-width: 1252px;
  margin: 0 auto;
`;
export const QuickAccessTitle = styled.div`
  font-family: "e-Ukraine-Head", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  text-transform: uppercase;
  background: linear-gradient(130deg, #d9166c 0%, #3b3c3e 100%);
  width: 240px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const QuickAccessItems = styled.div`
  display: flex;
  gap: 17px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const QuickAccessItem = styled.div`
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid #6b6b6b;
`;

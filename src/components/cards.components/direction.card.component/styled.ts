import styled from "styled-components";

export const CardContainer = styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => (isActive ? '258px' : '204px')};
  width: ${({ isActive }) => (isActive ? '169px' : '130px')};
  border: ${({ isActive }) => (isActive ? 'none' : '1px solid #8F8F8F')};
  border-radius: 17px;
  padding: 30px 15px;
  margin: ${({ isActive }) => (isActive ? '5px 0  5px 7px' : 'none')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : '#EFEFEF')};
  box-shadow: ${({ isActive }) => (isActive ? '1px 2px 10px 0px rgba(0, 0, 0, 0.37)' : 'none')};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;
`
export const CardTitle = styled.div`
 font-size: 16px;
 color: #474747;
`
export const CardImage = styled.img`
 width: 80px;
 height: 80px;
`
import styled from "styled-components";


export const NewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
   height:  397px;
  background-color: #ffff;
  border-radius: 15px;
  width: 303px;
  
`
export const NewsCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 18px;

`
export const NewsCardContentDate = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: #696d6d;
    margin-bottom: 5px;
`
export const NewsCardContentTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 116%;
    letter-spacing: 0.02em;
    color: #202020;
`
 
export const NewsCardImage = styled.img<{isActive?: boolean}>`
    height: ${({ isActive }) => (isActive ? '230px' : '242px')};
`
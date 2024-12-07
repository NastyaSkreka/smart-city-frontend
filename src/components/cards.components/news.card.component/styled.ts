import styled from "styled-components";

export const NewsCardContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: ${({ isActive }) => (isActive ? "397px" : "250px")}; 
  background-color: var(--background-color);
  border-radius: 15px;
  width: 303px;
  margin: 5px;
  box-shadow: ${({ isActive }) =>
    isActive ? "2px 3px 10px 0 rgba(0, 0, 0, 0.25)" : "none"};
  overflow: hidden; 
  transition:  max-height 0.8s ease;
`;

export const NewsCardImage = styled.img<{ isActive?: boolean }>`
  width: 100%;
  height: ${({ isActive }) => (isActive ? "230px" : "242px")};
  object-fit: cover;
  transform: ${({ isActive }) => (isActive ? "scale(1)" : "scale(1.1)")};
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const NewsCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 18px;
`;

export const NewsCardContentDate = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #696d6d;
  margin-bottom: 5px;
`;

export const NewsCardContentTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 116%;
  letter-spacing: 0.02em;
  color: #202020;
`;



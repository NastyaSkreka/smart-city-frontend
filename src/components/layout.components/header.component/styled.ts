import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--background-secondary-color);
  height: 57px;
  padding: 45px 85px 10px 120px;
  position: relative;
  z-index: 100;

  @media (max-width: 744px) {
    background-color: var(--background-color);
    padding: 45px 20px 10px 55px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 170px;
  height: 40px;

  @media (max-width: 430px) {
    width: 88px;
    height: 22px;
  }
`;

export const LogoMenuColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;

  @media (max-width: 744px) {
    flex-direction: row-reverse;
    gap: 40px;
  }

  @media (max-width: 430px) {
    gap: 20px;
  }
`;
export const WeatherColumn = styled.div`
  align-self: flex-end;
  font-family: "e-Ukraine", sans-serif;
  font-weight: 200;
  font-size: 16px;
  letter-spacing: 0.02em;

  @media (max-width: 430px) {
    display: none;
  }
`;


export const LocationLabel = styled.div`
  align-self: flex-end;

  @media (max-width: 430px) {
    display: none;
  }
 
`;

export const VisibilityIcon = styled.img`
@media (max-width: 430px) {
    display: none;
  }
`

export const UserInfoColumn = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  width: 122px;

  @media (max-width: 430px) {
    width: 0px;
    align-self: center;
  }
`;
export const menuIcon = styled.img`
  align-self: flex-end;
  cursor: pointer;

  @media (max-width: 744px) {
    align-self: center;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  transition: opacity 0.3s ease;
`;

export const SideMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 20px;
  left: 0;
  bottom: 0;
  width: 540px;
  height: 352px;
  background-color: #fff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.6s ease-in-out;
  z-index: 300;
  padding: 50px 60px 20px 60px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 50px;
  right: 60px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SideMenuItems = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 10px;
`;

export const SideMenuItem = styled.div<{ isActive: boolean }>`
  font-family: "e-Ukraine", sans-serif;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: -0.02em;
  color: #000;
  position: relative;
  cursor: pointer;
  transition: margin-top 0.3s ease, margin-bottom 0.3s ease;
  margin-top: ${({ isActive }) => (isActive ? "5px" : "0")};
  margin-bottom: ${({ isActive }) => (isActive ? "20px" : "0")};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    margin-bottom: 10px;
    height: 2px;
    left: 0;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    background-color: #000;
  }
`;

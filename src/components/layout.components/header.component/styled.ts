import styled from "styled-components";

export const Header = styled.header`
   background-color: var(--secondary-color);
   height: 57px;
   padding: 45px 85px 10px 120px;
`

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
export const Logo = styled.img`
  width: 170px;
  height: 40px;

`
export const WeatherColumn = styled.div`
align-self: flex-end;

font-family: "e-Ukraine", sans-serif;
font-weight: 200;
font-size: 16px;
letter-spacing: 0.02em;
`

export const LogoMenuColumn = styled.div`
display: flex;
align-items: center;
gap: 70px;
`

export const LocationLabel = styled.div`
align-self: flex-end;
`

export const UserInfoColumn = styled.div`
display: flex;
align-self: flex-end;
justify-content: space-between;
 width: 122px;
`
export const menuIcon = styled.img`
  align-self: flex-end;
`
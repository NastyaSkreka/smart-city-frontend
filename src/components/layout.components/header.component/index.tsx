import * as styled from "./styled";
import logo from "../../../styles/icons/logo.svg";
import menuIcon from "../../../styles/icons/menu.svg";
import hiddenIcon from "../../../styles/icons/visibility.svg";
import userIcon from "../../../styles/icons/user.svg";

function HeaderComponent() {
  return (
    <styled.Header>
      <styled.HeaderContainer>
        <styled.LogoMenuColumn>
          <styled.Logo src={logo} alt="logo" />

          <styled.menuIcon src={menuIcon} alt="menu-icon" />
        </styled.LogoMenuColumn>
        <styled.WeatherColumn>+7°C...+17°C</styled.WeatherColumn>
        <styled.UserInfoColumn>
          <styled.LocationLabel>UK</styled.LocationLabel>
          <img src={hiddenIcon} alt="visibility-icon" />
          <img src={userIcon} alt="user-icon" />
        </styled.UserInfoColumn>
      </styled.HeaderContainer>
    </styled.Header>
  ); 
} 

export default HeaderComponent;

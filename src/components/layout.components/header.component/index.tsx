import * as styled from "./styled";
import logo from "../../../styles/icons/logo.svg";
import menuIcon from "../../../styles/icons/menu.svg";
import hiddenIcon from "../../../styles/icons/visibility.svg";
import userIcon from "../../../styles/icons/user.svg";

function HeaderComponent() {
  return (
    <styled.Header>
      <styled.HeaderContainer>
        <styled.Column>
           
          <styled.Logo src={logo} alt="logo" />
      
          <styled.menuIcon src={menuIcon} alt="menu-icon" />
        </styled.Column>
        <styled.Column>
          <div>+7°C...+17°C</div>
        </styled.Column>
        <styled.Column>
          <div>UK</div>
          <img src={hiddenIcon} alt="visibility-icon" />
          <img src={userIcon} alt="user-icon" />
        </styled.Column>
      </styled.HeaderContainer>
    </styled.Header>
  );
}

export default HeaderComponent;

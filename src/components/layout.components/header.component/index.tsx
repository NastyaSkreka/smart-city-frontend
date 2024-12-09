import * as styled from "./styled";
import logo from "../../../styles/icons/logo.svg";
import menuIcon from "../../../styles/icons/menu.svg";
import hiddenIcon from "../../../styles/icons/visibility.svg";
import userIcon from "../../../styles/icons/user.svg";
import closeIcon from "../../../styles/icons/close-icon.svg";
import { useState } from "react";

function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const [activeItem, setActiveItem] = useState<string>("Про портал");
      const menuItems = [
        "Про портал",
        "Напрямки",
        "Новини",
        "Події",
        "EDIH HUB",
        "Зворотній зв’язок",
        "База знань",
        "Кабінет мешканця",
      ];

  return (
    <styled.Header>
      <styled.HeaderContainer>
        <styled.LogoMenuColumn>
          <styled.Logo src={logo} alt="logo" />
          <styled.menuIcon  onClick={toggleMenu} src={menuIcon} alt="menu-icon" />
        </styled.LogoMenuColumn>
        <styled.WeatherColumn>+7°C...+17°C</styled.WeatherColumn>
        <styled.UserInfoColumn>
          <styled.LocationLabel>UK</styled.LocationLabel>
          <img src={hiddenIcon} alt="visibility-icon" />
          <img src={userIcon} alt="user-icon" />
        </styled.UserInfoColumn>
      </styled.HeaderContainer>
      {isMenuOpen && <styled.Overlay onClick={toggleMenu} />}
      <styled.SideMenu isOpen={isMenuOpen}>
      <styled.CloseIcon src={closeIcon} alt="close-icon" onClick={toggleMenu} />

      <styled.SideMenuItems>
      {menuItems.map((item) => (
        <styled.SideMenuItem
          key={item}
          isActive={activeItem === item}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </styled.SideMenuItem>
      ))}
      </styled.SideMenuItems>
      </styled.SideMenu>
    </styled.Header>
  ); 
} 

export default HeaderComponent;

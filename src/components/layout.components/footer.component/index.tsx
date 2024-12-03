import * as styled from "./styled";
import logo from "../../../styles/icons/footer-logo.png";
import InputComponent from "../../ui/input.component";
import ButtonComponent from "../../ui/button.component";

function FooterComponent() {
  return (
    <styled.Footer>
      <styled.FooterTop>
        <styled.FooterLogo>
          <styled.FooterLogoImg src={logo} alt="footer-logo-img" />
          <styled.FooterLogoText>Запорізька міська рада</styled.FooterLogoText>
        </styled.FooterLogo>

        <styled.FooterTextCol>
          <styled.Title>Технічне забезпечення:</styled.Title>
          <styled.Text>
            комунальне підприємство <br/> «Центр управління інформаційними
            технологіями»
          </styled.Text>
        </styled.FooterTextCol>

        <styled.FooterForm>
          <styled.FooterFormContainer>
            <styled.Title>Відгуки та пропозиції</styled.Title>
            <styled.Text>
              Ми цінуємо думку кожного нашого клієнта, тому створили розділ
              "Відгуки та пропозиції". Тут ви можете залишити свої відгуки,
              поділитися ідеями щодо покращення сервісу чи висловити зауваження
              стосовно нашої роботи.
            </styled.Text>
            <styled.FormActions>
              <InputComponent
                placeholder="Надішліть свої пропозиції або скарги"
                width="450px"
              />
              <ButtonComponent variant="fill">Надіслати</ButtonComponent>
            </styled.FormActions>
          </styled.FooterFormContainer>
        </styled.FooterForm>
        
      </styled.FooterTop>
      <styled.FooterBottom>
      <styled.Text>
      Розроблено комунальним підприємством «Центр управління інформаційними
        технологіями» | © 2024
          </styled.Text>
      </styled.FooterBottom>
    </styled.Footer>
  );
}

export default FooterComponent;

import InputComponent from "../ui/input.component";
import SliderComponent from "../ui/slider.component";
import * as styled from "./styled";

function BannerComponent() {
  return (
    <styled.BannerContainer>
      <styled.BannerTextBody>
        <styled.BannerTitle>
          <span>Цифрове</span> <br />
          <span className="highlightZaporizhzhya">Запоріжжя</span>
        </styled.BannerTitle>
        <styled.BannerText>
          <span className="gradientText">єдиний інформаційний</span>{" "}
          <span className="solidText">веб-портал</span>
        </styled.BannerText>
        <InputComponent
        hasIcon 
         placeholder="Пошук по порталу"
         width="200px"
        />
      </styled.BannerTextBody>

      <styled.BannerSlider>
        <SliderComponent/>
      </styled.BannerSlider>
    </styled.BannerContainer>
  );
}

export default BannerComponent;

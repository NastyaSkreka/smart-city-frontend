import InputComponent from "../../ui/input.component";
import SliderComponent from "../../ui/slider.component";
import * as styled from "./styled";
import CardImage1 from "../../../styles/icons/direction-card-img-01.png";
import CardImage2 from "../../../styles/icons/direction-card-img-02.png";
import CardImage3 from "../../../styles/icons/direction-card-img-03.png";

const slides = [
  {
    title: "Цифрова міська влада",
    image: CardImage1,
  },
  {
    title: "Людина та соціальне середовище",
    image: CardImage3,
  },
  {
    title: "Міське середовище",
    image: CardImage2,
  }, 
  {
    title: "Цифрова міська влада",
    image: CardImage1,
  },
  {
    title: "Людина та соціальне середовище",
    image: CardImage3,
  },
  {
    title: "Міське середовище",
    image: CardImage2,
  }, 
 
];

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
        <InputComponent hasIcon placeholder="Пошук по порталу" width="222px" />
      </styled.BannerTextBody>

      <styled.BannerSlider>
        <SliderComponent slides={slides} />
      </styled.BannerSlider>
    </styled.BannerContainer>
  );
}

export default BannerComponent;

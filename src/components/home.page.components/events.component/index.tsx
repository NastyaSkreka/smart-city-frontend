import ButtonComponent from "../../ui/button.component";
import * as styled from "./styled";
import EventImage01 from "../../../styles/icons/event-card-img-01.png";
import EventImage02 from "../../../styles/icons/event-card-img-02.png";
import SliderComponent from "../../ui/slider.component";
import NewsCardComponent from "../../cards.components/news.card.component";

const slides = [
  {
    title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
    image: EventImage01,
    date: "07.10.2024",
  },
  {
    title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
    image: EventImage02,
    date: "07.10.2024",
  },
  {
    title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
    image: EventImage02,
    date: "07.10.2024",
  },
  {
    title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
    image: EventImage01,
    date: "07.10.2024",
  },
  {
    title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
    image: EventImage02,
    date: "07.10.2024",
  },
  {
    title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
    image: EventImage02,
    date: "07.10.2024",
  },
];

function EventsComponent() {
  return (
    <styled.EventsContainer>
      <styled.EventsContent>
        <SliderComponent slides={slides} isNews position="right" />
        <styled.EventsCardTabletContainer>
       {slides.slice(0, 2).map((card: any, index: any) => (
            <NewsCardComponent key={index} slide={card} isActive={true}/>
            ))}
        </styled.EventsCardTabletContainer>
        <styled.EventsContentBody>
          <styled.EventsContentTitle>Події</styled.EventsContentTitle>

          <styled.EventsContentText>
            Актуальна інформація про культурні, спортивні, наукові та ділові
            події Запоріжжя. Позитивні емоції та корисні заходи допомагають
            підтримати ментальне здоров’я та сприяють розвитку особистості.
            Будьте в курсі яскравих подій в нашому місті.
          </styled.EventsContentText>

          <ButtonComponent variant="outline">
            Дивитися усі новини
          </ButtonComponent>
        </styled.EventsContentBody>
      </styled.EventsContent>
    </styled.EventsContainer>
  );
}

export default EventsComponent;

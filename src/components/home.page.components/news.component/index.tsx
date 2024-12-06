import ButtonComponent from "../../ui/button.component";
import * as styled from "./styled";

import NewsImage from '../../../styles/icons/news.png'
import SliderComponent from "../../ui/slider.component";

const slides = [
    {
      title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
      image: NewsImage,
      date: '07.10.2024', 

    },
    {
        title: "Вmdlrgmdlg,dk;g",
        image: NewsImage,
        date: '07.10.2024', 
  
      },
      {
        title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
        image: NewsImage,
        date: '07.10.2024', 
  
      },
      {
        title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
        image: NewsImage,
        date: '07.10.2024', 
  
      },
      {
        title: "Власникам пошкодженого житла у Запоріжжі виплатили 400 тис. грн",
        image: NewsImage,
        date: '07.10.2024', 
  
      },
   
  ];

function NewsComponent() {
  return (
    <styled.NewsContainer>
      <styled.NewsContent>
        <SliderComponent
         slides={slides}
         isNews
         isCenterSlideActive
         position="left"
        />
        <styled.NewsContentBody>
          <styled.NewsContentTitle>Новини</styled.NewsContentTitle>
           
          <styled.NewsContentText>
            SMART-новини Запоріжжя. Не тому що малі, а тому що розумні.
            Цифровізація, технології, кібербезпека, оновлення сервісів.
            Інформація, яка допоможе вам бути в курсі цифрових новацій в місті,
            приєднуватися до нових диджитал-проєктів, дбати про захист від
            кіберзлодіїв.
          </styled.NewsContentText>

          <ButtonComponent variant="outline">
            Дивитися усі новини
          </ButtonComponent>
        </styled.NewsContentBody>
      </styled.NewsContent>
    </styled.NewsContainer>
  );
}

export default NewsComponent;

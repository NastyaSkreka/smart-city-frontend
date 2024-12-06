import ButtonComponent from '../../ui/button.component';
import * as styled from './styled'

function NewsCardComponent({ slide, isActive }: any) {
    return (
      isActive ? (
        <styled.NewsCardContainer>
          <styled.NewsCardImage src={slide.image} alt="slide" isActive={isActive} />
          <styled.NewsCardContent>
            <styled.NewsCardContentDate>{slide.date}</styled.NewsCardContentDate>
            <styled.NewsCardContentTitle>{slide.title}</styled.NewsCardContentTitle>
            <ButtonComponent variant="outline">Дізнатись більше</ButtonComponent>
          </styled.NewsCardContent>
        </styled.NewsCardContainer>
      ) : (
        <styled.NewsCardImage src={slide.image} alt="slide"  />
      )
    );
  }
  
  export default NewsCardComponent;
  
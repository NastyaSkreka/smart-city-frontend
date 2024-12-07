import ButtonComponent from '../../ui/button.component';
import * as styled from './styled'

function NewsCardComponent({ slide, isActive }: any) {
    return (
       <styled.NewsCardContainer isActive={isActive}>
      <styled.NewsCardImage src={slide.image} alt="slide" isActive={isActive} />
      {isActive && (
        <styled.NewsCardContent>
          <styled.NewsCardContentDate>{slide.date}</styled.NewsCardContentDate>
          <styled.NewsCardContentTitle>{slide.title}</styled.NewsCardContentTitle>
          <ButtonComponent variant="outline">Дізнатись більше</ButtonComponent>
        </styled.NewsCardContent>
      )}
    </styled.NewsCardContainer>
    );
  }
  
  export default NewsCardComponent;
  
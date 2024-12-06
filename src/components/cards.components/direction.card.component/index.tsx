import * as styled from './styled'

function DirectionCardComponent({ slide, isActive }: any) {
  return (
    <styled.CardContainer isActive={isActive}>
      <styled.CardContent>
        <styled.CardTitle>{slide.title}</styled.CardTitle>
      <styled.CardImage src={slide.image} alt="card-img" />
      </styled.CardContent>
    </styled.CardContainer>
  );
}

export default DirectionCardComponent;

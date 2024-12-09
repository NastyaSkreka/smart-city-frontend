import * as styled from './styled'

function DirectionCardComponent({ slide, isActive }: any) {
  return (
    <styled.CardContainer isActive={isActive}>
      <styled.CardContent isActive={isActive}>
        <styled.CardTitle isActive={isActive}>{slide.title}</styled.CardTitle>
      <styled.CardImage isActive={isActive} src={slide.image} alt="card-img"/>
      </styled.CardContent>
    </styled.CardContainer>
  );
}

export default DirectionCardComponent;

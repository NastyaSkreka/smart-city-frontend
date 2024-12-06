import ButtonComponent from '../../ui/button.component';
import Map from '../../../styles/icons/map.png';
import * as styled from './styled'

function MapComponent() {
  return (
    <styled.MapContainer>
      <styled.MapImg src={Map} alt="map-img"/>
     
      <styled.MapContent>
        <styled.MapContentTitle>
        Мапа <br/> укриттів
        </styled.MapContentTitle>
        <styled.MapContentText>
        Онлайн мапа укриттів – це інтерактивний сервіс, який допомагає швидко знайти найближчі місця для укриття у випадку надзвичайної ситуації. На мапі зібрані актуальні дані про локації укриттів, їхню місткість. Завдяки зручному інтерфейсу, користувачі можуть легко переглядати укриття на карті, знаходити найзручніший варіант та планувати свій маршрут.
        </styled.MapContentText>
        <ButtonComponent variant='outline'>
        Відкрити мапу укриттів
        </ButtonComponent>
      </styled.MapContent>
    </styled.MapContainer>
  );
}

export default MapComponent;

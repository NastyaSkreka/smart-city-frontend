import * as styled from "./styled";

function QuickAccessComponent() {
    const quickAccessItems = [
        "Розумний спорт",
        "Опитування",
        "Мапа пунктів незламності",
        "Е-записи",
        "Електронний щоденник",
        "Безпека",
        "Події",
        "Зворотній зв’язок",
        "Безпечне місто Запоріжжяі",
        "Розумна мобільність",
        "База документів",
        "ЦНАП",
        "Е-ветеран",
        "Розумне міське середовище",
        "Е-петиції",
      ];
  return (
    <styled.QuickAccessContainer>
      <styled.QuickAccessContent>
      <styled.QuickAccessTitle>
      Швидкий доступ
      </styled.QuickAccessTitle>
      <styled.QuickAccessItems>
          {quickAccessItems.map((item, index) => (
            <styled.QuickAccessItem key={index}>
              {item}
            </styled.QuickAccessItem>
          ))}
        </styled.QuickAccessItems>
      </styled.QuickAccessContent>
    </styled.QuickAccessContainer>
  ); 
}

export default QuickAccessComponent;

import * as styled from "./styled";
import ContactCenter from "../../../styles/icons/contact-center.png";
import JobsZp from "../../../styles/icons/work-in-zp.png";
import Map from "../../../styles/icons/map-of-shelters.png";

function TopServicesComponent() {
  return (
    <styled.ServicesContainer>
      <styled.ServicesTitle>ТОП сервісів:</styled.ServicesTitle>
      <styled.ServicesItems>
        <styled.ServiceItem>
          <styled.ServiceItemBody>
            <styled.ServiceImage
             
              src={ContactCenter}
              alt="service-img"
            />
            <span>
              15-80 <br />
              Контакт-Центр
            </span>
          </styled.ServiceItemBody>
          <styled.ServiceNumber>01</styled.ServiceNumber>
        </styled.ServiceItem>
        <styled.ServiceItem>
          <styled.ServiceItemBody>
            <styled.ServiceImage
             
              src={JobsZp}
              alt="service-img"
            />
            <span>
              Робота в <br /> Запоріжжі
            </span>
          </styled.ServiceItemBody>
          <styled.ServiceNumber>02</styled.ServiceNumber>
        </styled.ServiceItem>
        <styled.ServiceItem>
          <styled.ServiceItemBody>
            <styled.ServiceImage
              
              src={Map}
              alt="service-img"
            />
            <span>
              Мапа <br /> укриттів
            </span>
          </styled.ServiceItemBody>
          <styled.ServiceNumber>03</styled.ServiceNumber>
        </styled.ServiceItem>
      </styled.ServicesItems>
    </styled.ServicesContainer>
  );
}

export default TopServicesComponent;

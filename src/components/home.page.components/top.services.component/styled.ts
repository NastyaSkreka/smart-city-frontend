import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0;
  gap: 77px;
  // width: 1238px;
  margin: 0 auto;
`;

export const ServicesTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #e0348f;
`;

export const ServicesItems = styled.div`
  display: flex;
  gap: 77px;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 276px; 
  padding: 10px;
  position: relative;

::after {
    content: '';
    position: absolute;
    right: 0; 
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 53px;
    background-color: #494A4C; 
  }

  span {
    flex: 1; 
    font-size: 16px;
    color: #373839;

  }
`;

export const ServiceImage = styled.img`
`;

export const ServiceNumber = styled.div`
 font-family: 'e-Ukraine-Head';
 font-size: 36px;
 font-weight: 300;
 color: #EBEBEB;
`

export const ServiceItemBody = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
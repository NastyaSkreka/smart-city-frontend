import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 30px;
  gap: 77px;
  margin: 0 auto;
`;

export const ServicesTitle = styled.div`
font-family: "e-Ukraine-Head", sans-serif;
font-weight: 400;
font-size: 20px;
letter-spacing: 0.03em;
background: linear-gradient(158deg, #3c3d3e 0%, #d8156b 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
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
    height: 50px;
    background-color: #494A4C; 
  }

  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    color: #2d3a3a;
  }
`;

export const ServiceImage = styled.img`
`;

export const ServiceNumber = styled.div`
 font-family: 'e-Ukraine-Head';
font-weight: 300;
font-size: 36px;
line-height: 120%;
color: #ebebeb;
`

export const ServiceItemBody = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
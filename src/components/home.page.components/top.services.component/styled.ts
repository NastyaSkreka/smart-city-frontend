import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  gap: 77px;
  margin: 110px auto 0;

  @media (max-width: 744px) {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    gap: 10px;
    width: 100%;
    margin-bottom: 40px;
    padding: 0 5px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const ServicesTitle = styled.div`
font-family: "e-Ukraine-Head", sans-serif;
font-weight: 400;
font-size: 20px;
letter-spacing: 0.03em;
background: linear-gradient(158deg, #3c3d3e 0%, var(--pink-decor-color) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@media (max-width: 744px) {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.03em;
  }

  @media (max-width: 744px) {
    font-size: 12px;
    width: 65px;

  }
`;

export const ServicesItems = styled.div`
  display: flex;
  gap: 77px;

  @media (max-width: 744px) {
    gap: 25px;
  }

  @media (max-width: 430px) {
    gap: 5px;
  }
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 276px; 
  padding: 10px;
  position: relative;

  @media (max-width: 744px) {
    width: 150px; 
  }

  @media (max-width: 430px) {
    width: 75px; 
  }

::after {
    content: '';
    position: absolute;
    right: 0; 
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50px;
    background-color: var(--border-color); 

    @media (max-width: 744px) {
        display: none;
      }
  }

  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    color: #2d3a3a;

    @media (max-width: 744px) {
        font-weight: 500;
        font-size: 10px;
        color: #484848;
      }
  }
`;

export const ServiceImage = styled.img`
width: 50px;
height: 50px;
@media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

export const ServiceNumber = styled.div`
  font-family: 'e-Ukraine-Head';
  font-weight: 300;
  font-size: 36px;
  line-height: 120%;
  color: #ebebeb;
  display: block;

  @media (max-width: 744px) {
    display: none;
  }
`;


export const ServiceItemBody = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
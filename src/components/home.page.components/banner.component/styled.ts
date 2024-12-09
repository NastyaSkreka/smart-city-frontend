import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  height: 380px;

  @media (max-width: 744px) {
     flex-direction: column;
     height: auto;
     align-items: start;
     gap: 50px;
  }
`;


export const BannerTextBody = styled.div`
  flex: 1;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  margin-bottom: -40px;

  @media (max-width: 744px) {
    padding-left: 35px;
 }
`;

export const BannerTitle = styled.h1`
  margin: 0;
   text-transform: uppercase;
  letter-spacing: 0.01px; 

  & span {
    font-family: "e-Ukraine", sans-serif;
    letter-spacing: 0.03em;
    font-size: 71px;
    font-weight: 700;
    font-family: 'e-Ukraine-Head';
    background: linear-gradient(to bottom, #373839 70%, #999C9F 100%);
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 430px) {
        font-size: 52px;
     }
  }

  & .highlightZaporizhzhya {
    font-family: 'e-Ukraine-Head';
    background: linear-gradient(to bottom, #373839, var(--pink-decor-color));
    -webkit-background-clip: text;
    color: transparent;
    font-size: 64px;
    letter-spacing: -0.03em;

    @media (max-width: 430px) {
        font-size: 48px;
     }
  }
`;

export const BannerText = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.02em;
 
  & .gradientText {
    background: linear-gradient(to bottom, #303132, #929598); 
    -webkit-background-clip: text; 
    color: transparent;
  }

  & .solidText {
    color: var(--pink-decor-color); 
  }
`;

export const BannerSlider = styled.div`
  flex: 1; 
  margin-top: 128px
`;
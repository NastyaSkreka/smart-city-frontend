import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  height: 444px;
`;


export const BannerTextBody = styled.div`
  flex: 1;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;


export const BannerTitle = styled.h1`
  font-size: 72px;
  margin: 0;
  font-weight: 700;
  font-family: 'e-Ukraine-Head';
  text-transform: uppercase;
  line-height: 66px;
  letter-spacing: 0.01px; 
  & span {
    background: linear-gradient(to bottom, #373839 70%, #999C9F 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  & .highlightZaporizhzhya {
    background: linear-gradient(to bottom, #373839, #D8156B);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 64px;
  }
`;

export const BannerText = styled.p`
  font-size: 15px;
  font-weight: 300;
 
  & .gradientText {
    background: linear-gradient(to bottom, #303132, #929598); 
    -webkit-background-clip: text; 
    color: transparent;
  }

  & .solidText {
    color: #D8156B; 
  }
`;

export const BannerSlider = styled.div`
  flex: 1; 
`;
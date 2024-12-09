import styled from "styled-components";

export const EventsContainer = styled.div`
  padding: 130px 0px;
  background-color: var(--background-secondary-color);
  position: relative;

  @media (max-width: 744px) {
    background-color: var(--background-color);
        padding: 31px 0px;
    }

    @media (max-width: 430px) {
        padding-top: 330px;
      }
`;
export const EventsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid var(--border-color);
  border-radius: 17px;
  border-top-left-radius: 0; 
  border-bottom-left-radius: 0;
  border-left: none;
  height: 233px;
  padding: 16px 130px;

  @media (max-width: 744px) {
    height: auto;
    gap: 20px;
    flex-direction: row-reverse;
    padding: 16px 30px 0 0;
    background-color: var(--background-secondary-color);
    }

    @media (max-width: 430px) {
        padding: 16px 5px 0 0;
      }
`;
export const EventsContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;

    @media (max-width: 744px) {
    display: flex;
    justify-content: center;
    gap: 33px;
  }

  @media (max-width: 430px) {
    position: absolute; 
  top: -100px;
  left: 16px; 
  z-index: 10; 
  width: calc(100% - 30px);
  padding-top: 100px;
  }
`;
export const EventsContentTitle = styled.div`
  font-family: "e-Ukraine-Head", sans-serif;
  font-weight: 500;
  font-size: 70px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background: linear-gradient(174deg, #373839 0%, var(--pink-decor-color) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

     @media (max-width: 744px) {
        font-size: 48px;
      }
`;
export const EventsContentText = styled.div`
  font-family: "e-Ukraine", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 121%;
  letter-spacing: -0.01em;
  text-align: justify;
  color: var(--text-color);
  margin-bottom: 13px;
`;

export const EventsCardTabletContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 744px) {
    display: none;
    }
`


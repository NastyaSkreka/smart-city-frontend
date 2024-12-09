import styled from "styled-components";

export const MapContainer = styled.div`
 padding: 105px 40px 40px 0;
 background-color: var(--background-secondary-color);
 display: flex;
 align-items: flex-start;
 gap: 40px;
 padding-right: 40px;

 @media (max-width: 744px) {
    gap: 32px;
 }

 @media (max-width: 430px) {
   flex-direction: column-reverse;
   padding: 20px 40px 40px 0;
 }
`

export const MapImg = styled.img`
    width: 949px;
    height: 425px;

    @media (max-width: 744px) {
        width: 380px;
        height: 397px;
        object-fit: cover;
        object-position: center; 
     }
`

export const MapContent = styled.div`
   display: flex;
   margin-top: -14px;
   flex-direction: column;
   gap: 12px;
   gap: 40px;

   @media (max-width: 744px) {
    gap: 15px;
 }
`

export const MapContentTitle = styled.div`
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
`

export const MapContentText = styled.div`
    font-family: "e-Ukraine", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 137%;
    letter-spacing: -0.04em;
    text-align: justify;
    color: var(--text-color);

    @media (max-width: 744px) {
        line-height: 130%;
     }
`

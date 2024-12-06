import styled from "styled-components";

export const MapContainer = styled.div`
 padding: 40px 0;
 background-color: #f9fafc;
 display: flex;
 align-items: flex-start;
 gap: 40px;
 padding-right: 40px;
`

export const MapImg = styled.img`
    width: 949px;
    height: 425px;
`

export const MapContent = styled.div`
   display: flex;
   margin-top: -14px;
   flex-direction: column;
   gap: 12px;
   gap: 40px;
`

export const MapContentTitle = styled.div`
    font-family: "e-Ukraine-Head", sans-serif;
    font-weight: 500;
    font-size: 70px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    background: linear-gradient(174deg, #373839 0%, #d8156b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const MapContentText = styled.div`
    font-family: "e-Ukraine", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 137%;
    letter-spacing: -0.04em;
    text-align: justify;
    color: #484848;
`

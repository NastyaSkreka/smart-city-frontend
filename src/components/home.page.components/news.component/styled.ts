import styled from "styled-components";

export const NewsContainer = styled.div`
 padding: 108px 0px;
 background-color: var(--background-secondary-color);
 position: relative;
`
export const NewsContent = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px solid var(--border-color);
  border-radius: 17px;
  border-top-left-radius: 0; 
  border-bottom-left-radius: 0;
  border-left: none;
  height: 233px;
  padding: 16px 76px;
`
export const NewsContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
`
export const NewsContentTitle = styled.div`
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
export const NewsContentText = styled.div`
    font-family: "e-Ukraine", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.04em;
    text-align: justify;
    color: var(--text-color);
    margin-bottom: 5px;
`

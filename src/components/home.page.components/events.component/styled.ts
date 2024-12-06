import styled from "styled-components";

export const EventsContainer = styled.div`
  padding: 130px 0px;
  background-color: #f9fafc;
  position: relative;
`;
export const EventsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid #494a4c;
  border-radius: 17px;
  height: 233px;
  padding: 16px 76px;
`;
export const EventsContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
`;
export const EventsContentTitle = styled.div`
  font-family: "e-Ukraine-Head", sans-serif;
  font-weight: 500;
  font-size: 70px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background: linear-gradient(174deg, #373839 0%, #d8156b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const EventsContentText = styled.div`
  font-family: "e-Ukraine", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 121%;
  letter-spacing: -0.01em;
  text-align: justify;
  color: #484848;
  margin-bottom: 13px;
`;

import styled from "styled-components";

export const Footer = styled.footer``;

export const FooterTop = styled.div`
  background-color: #efefef;
  padding: 40px 10px;
  display: flex;
  gap: 107px;
  justify-content: center;
  align-items: center;
`;

export const FooterBottom = styled.div`
  background-color: #d9d9d9;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLogo = styled.div`
  display: flex;
  max-width: 195px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
`;

export const FooterLogoImg = styled.img`
  width: 82px;
  height: 82px;
`;
export const FooterLogoText = styled.div`
  color: #2f2f2f;
  font-size: 14px;
  font-weight: 400;
`;
export const FooterTextCol = styled.div`
  display: flex;
  max-width: 280px;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 20px;
`;

export const FooterForm = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 23px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 615px;
`;

export const Title = styled.div`
  font-family: "e-Ukraine-Head";
  font-size: 20px;
  font-weight: 500;
  background: linear-gradient(90deg, #c41a65 0%, #373737 100%);
  background-size: 270px 100%;
  background-repeat: no-repeat;
  background-position: left center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const Text = styled.div`
  color: #515151;
  font-size: 14px;
  font-weight: 400;
  line-height: 137%;
`;

export const FooterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const FormActions = styled.div`
  display: flex;
  gap: 10px;
`;

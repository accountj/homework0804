import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #505050; */
  background-color: ${(props) => props.footerColor};
`;

const FooterLabel = styled.label`
  font-size: 14px;
  color: #cdcdcd;
  margin: 0 12px;
  white-space: nowrap;
`;

const Footer = ({ footerColor }) => {
  return (
    <Layout footerColor={footerColor}>
      <FooterLabel>연락처 111-2222-333</FooterLabel>
      <FooterLabel>오시는 길 서울특별시 강남구 테헤란로 123</FooterLabel>
      <FooterLabel>© 2025 KH Company. All rights reserved.</FooterLabel>
    </Layout>
  );
};

export default Footer;

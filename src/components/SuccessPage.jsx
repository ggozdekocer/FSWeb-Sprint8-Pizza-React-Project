import styled from "styled-components";

const SuccessContainer = styled.div`
  background: #ce2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 4rem;
  color: white;
  font-family: Barlow;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 2rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Tagline = styled.p`
  font-family: Satisfy;
  font-size: 2.5rem;
  color: #fdc913;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-family: Roboto Condensed;
  font-weight: 200;
  letter-spacing: 0.1em;
  margin: 5px auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
    letter-spacing: 0.05em;
  }
`;

const Divider = styled.hr`
  width: 580px;
  border: none;
  border-top: 1px solid #FAF7F2;
  margin: 1.5rem auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  width: 30%;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

const OrderDetails = styled.div`
  font-family: Barlow;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const PizzaName = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  margin-top: 2rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
`;

const DetailRow = styled.div`
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const DetailLabel = styled.span`
  font-weight: 300;
  margin-right: 0.5rem;
  font-family: Barlow;
`;

const DetailValue = styled.span`
  color: #FFFFFF;
  font-weight: 450;
  font-family: Barlow;
  word-break: break-word;
`;

const SummaryBox = styled.div`
  color: #FFFFFF;
  padding: 4rem;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #FAF7F2;
  font-family: Barlow;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 1.1rem;
  }
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SummaryTotal = styled(SummaryRow)`
  margin-top: 0.75rem;
  font-size: 1.5rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const LogoImg = styled.img`
  height: 4rem;

  @media (max-width: 480px) {
    height: 3rem;
  }
`;

const HomeButton = styled.button`
  margin-top: 2.5rem;
  padding: 0.75rem 2rem;
  background: #fdc913;
  color: #292929;
  border: none;
  border-radius: 50px;
  font-family: Barlow;
  font-size: 1.5rem;
  font-weight: 450;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    padding: 0.65rem 1.5rem;
    font-size: 1.1rem;
  }
`;


const SuccessPage = ({ setActivePage, orderData }) => {
  const data = orderData || {};

  return (
    <SuccessContainer>
      <LogoSection>
        <LogoImg src="/assets/iteration-1/logo.svg" alt="Teknolojik Yemekler" />
        <Tagline>lezzetin yolda</Tagline>
      </LogoSection>

      <Title>SİPARİŞ ALINDI</Title>
      <Divider />

      <ContentWrapper>
        <OrderDetails>
          <PizzaName>{data.pizzaName || "Position Absolute Acı Pizza"}</PizzaName>
            <DetailRow>
              <DetailLabel>Boyut:</DetailLabel>
              <DetailValue>{data.size || data.boyut}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Hamur:</DetailLabel>
              <DetailValue>{data.crust || data.hamur}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Ek Malzemeler:</DetailLabel>
              <DetailValue>{(data.extras || data.malzemeler || []).join(", ")}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Notlar:</DetailLabel>
              <DetailValue>{data.note || data.ozel || "-"}</DetailValue>
            </DetailRow>
        </OrderDetails>

        <SummaryBox>
          <SummaryTitle>Sipariş Toplamı</SummaryTitle>
          <SummaryRow>
            <span>Seçimler</span>
            <span>{(data.selectionsTotal ?? data.extrasTotal ?? 0).toFixed(2)}₺</span>
          </SummaryRow>
          <SummaryTotal>
            <span>Toplam</span>
            <span>{(data.grandTotal ?? data.toplam ?? 0).toFixed(2)}₺</span>
          </SummaryTotal>
        </SummaryBox>
      </ContentWrapper>

      <HomeButton onClick={() => setActivePage("Home")}>Ana Sayfaya Dön</HomeButton>
    </SuccessContainer>
  );
};

export default SuccessPage;

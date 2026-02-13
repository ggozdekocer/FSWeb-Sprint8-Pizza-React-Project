import styled from "styled-components";

const SuccessContainer = styled.div`
  background: #ce2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 4rem;
  color: white;
  font-family: Barlow;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const Tagline = styled.p`
  font-family: Satisfy;
  font-size: 2.5rem;
  color: #fdc913;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-family: Roboto Condensed;
  font-weight: 200;
  letter-spacing: 0.1em;
  margin: 5px auto;
`;

const Divider = styled.hr`
  width: 580px;
  border: none;
  border-top: 1px solid #FAF7F2;
  margin: 1.5rem auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  width: 30%;
  align-items: center;
`;

const OrderDetails = styled.div`
  font-family: Barlow;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

const PizzaName = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  margin-top: 2rem;
  font-family: Barlow;
`;

const DetailRow = styled.div`
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-family: Barlow;
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
`;

const SummaryBox = styled.div`
  color: #FFFFFF;
  padding: 4rem;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #FAF7F2;
  font-family: Barlow;
  font-size: 1.5rem;
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: Barlow;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-family: Barlow;
`;

const SummaryTotal = styled(SummaryRow)`
  margin-top: 0.75rem;
  font-size: 1.5rem;
  font-family: Barlow;
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
`;


const SuccessPage = ({ setActivePage, orderData }) => {

  return (
    <SuccessContainer>
      <LogoSection>
        <img src="/assets/iteration-1/logo.svg" alt="Teknolojik Yemekler" style={{ height: "4rem" }} />
        <Tagline>lezzetin yolda</Tagline>
      </LogoSection>

      <Title>SİPARİŞ ALINDI</Title>
      <Divider />

      <ContentWrapper>
        <OrderDetails>
          <PizzaName>{orderData.pizzaName }</PizzaName>
            <DetailRow>
              <DetailLabel>Boyut:</DetailLabel>
              <DetailValue>{orderData.size}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Hamur:</DetailLabel>
              <DetailValue>{orderData.crust}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Ek Malzemeler:</DetailLabel>
              <DetailValue>{orderData.extras.join(", ")}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Notlar:</DetailLabel>
              <DetailValue>{orderData.note}</DetailValue>
            </DetailRow>
        </OrderDetails>

        <SummaryBox>
          <SummaryTitle>Sipariş Toplamı</SummaryTitle>
          <SummaryRow>
            <span>Seçimler</span>
            <span>{(orderData.selectionsTotal).toFixed(2)}₺</span>
          </SummaryRow>
          <SummaryTotal>
            <span>Toplam</span>
            <span>{(orderData.grandTotal).toFixed(2)}₺</span>
          </SummaryTotal>
        </SummaryBox>
      </ContentWrapper>

      <HomeButton onClick={() => setActivePage("Home")}>Ana Sayfaya Dön</HomeButton>
    </SuccessContainer>
  );
};

export default SuccessPage;

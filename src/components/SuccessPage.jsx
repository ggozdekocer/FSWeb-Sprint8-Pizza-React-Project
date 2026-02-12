import styled from "styled-components";

const SuccessContainer = styled.div`
  background: #ce2829;
  min-height: calc(100vh - 50vh);
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
  margin-bottom: 2rem;
`;

const Tagline = styled.p`
  font-family: Satisfy;
  font-size: 1.5rem;
  color: #fdc913;
  margin: 0.5rem 0 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 2rem 0 0;
`;

const Divider = styled.hr`
  width: 200px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin: 1.5rem 0 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: center;
`;

const OrderDetails = styled.div`
  flex: 1;
  min-width: 280px;
`;

const PizzaName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const DetailRow = styled.div`
  margin-bottom: 0.75rem;
  font-size: 1rem;
`;

const DetailLabel = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const DetailValue = styled.span`
  color: #ff6b6b;
  font-weight: 500;
`;

const SummaryBox = styled.div`
  background: white;
  color: #292929;
  padding: 1.5rem;
  width: 250px;
  border-radius: 4px;
`;

const SummaryTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const SummaryTotal = styled(SummaryRow)`
  color: #ce2829;
  font-weight: bold;
  margin-top: 0.75rem;
  font-size: 1.125rem;
`;

const HomeButton = styled.button`
  margin-top: 2.5rem;
  padding: 0.75rem 2rem;
  background: #fdc913;
  color: #292929;
  border: none;
  border-radius: 50px;
  font-family: Barlow;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
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

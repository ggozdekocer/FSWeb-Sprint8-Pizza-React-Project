import styled from "styled-components";

const Wrapper = styled.div`
  background: #FAF7F2;
  border-radius: 12px;
  padding: 3rem;
  width: 90%;
  transition: all 0.2s;
  border: 1px solid #D9D9D9;
  font-family: Barlow;

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: 100%;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d62828;
  font-weight: bold;
  margin-top: 0.5rem;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const OrderButton = styled.button`
  background: #FDC913;
  border: none;
  width: 100%;
  padding: 0.9rem;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.2s;
  font-family: Barlow;

  &:hover {
    background-color: #ffd966;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    padding: 0.85rem;
    margin-top: 0.75rem;
    font-size: 0.95rem;
  }
`;

const OrderPriceSummary = ({ extrasTotal, grandTotal, isFormInvalid}) => {
  return (
    <Wrapper>
      <Title>Sipariş Toplamı</Title>

      <Row>
        <span>Seçimler</span>
        <span>{extrasTotal.toFixed(2)}₺</span>
      </Row>

      <Total>
        <span>Toplam</span>
        <span>{grandTotal.toFixed(2)}₺</span>
      </Total>

      <OrderButton disabled= {isFormInvalid} type="submit">SİPARİŞ VER</OrderButton>
    </Wrapper>
  );
};

export default OrderPriceSummary;



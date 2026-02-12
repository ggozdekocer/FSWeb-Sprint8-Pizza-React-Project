import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #eee;
  padding: 1.5rem;
  width: 250px;
`;

const Total = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const OrderButton = styled.button`
  background: #f7c200;
  border: none;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const OrderPriceSummary = ({ extrasTotal, grandTotal }) => {
  return (
    <Wrapper>
      <h3>Sipariş Toplamı</h3>
      <div>Seçimler {extrasTotal.toFixed(2)}₺</div>
      <Total>Toplam {grandTotal.toFixed(2)}₺</Total>
      <OrderButton type="submit">SİPARİŞ VER</OrderButton>
    </Wrapper>
  );
};

export default OrderPriceSummary;
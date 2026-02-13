import styled from "styled-components";
import OrderCount from "./OrderCount"
import OrderPriceSummary from "./OrderPriceSummary"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: normal;
  font-family: Barlow;
  border-top: 1px solid #D9D9D9;
  margin-top: 10px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const OrderPriceRow = (props) => {
    const {count, setCount, extrasTotal, grandTotal, isFormInvalid} = props;
    return (
        <Container>
            <Row>
             <OrderCount count={count} setCount={setCount} />
             <OrderPriceSummary  isFormInvalid={isFormInvalid} extrasTotal={extrasTotal} grandTotal={grandTotal} />
            </Row>
        </Container>
    )
}

export default OrderPriceRow;
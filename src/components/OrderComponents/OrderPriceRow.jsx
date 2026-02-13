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
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  margin-buttom: 2rem;
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
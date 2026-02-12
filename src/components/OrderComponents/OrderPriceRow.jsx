import styled from "styled-components";
import OrderCount from "./OrderCount"
import OrderPriceSummary from "./OrderPriceSummary"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: normal;
  font-family: Barlow;
`;
const Row = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const OrderPriceRow = (props) => {
    const {count, setCount, extrasTotal, grandTotal} = props;
    return (
        <Container>
            <Row>
             <OrderCount count={count} setCount={setCount} />
             <OrderPriceSummary extrasTotal={extrasTotal} grandTotal={grandTotal} />
            </Row>
        </Container>
    )
}

export default OrderPriceRow;
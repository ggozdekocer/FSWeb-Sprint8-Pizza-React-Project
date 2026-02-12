import styled from "styled-components";
import OrderSizePicker from "./OrderSizePicker";
import CrustSize from "./CrustSize";

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
`;

const OrderOptionsRow = () => {
  return (
    <Container>
      <Row>
      <OrderSizePicker />
      <CrustSize />
    </Row>
    </Container>
    
  );
};

export default OrderOptionsRow;

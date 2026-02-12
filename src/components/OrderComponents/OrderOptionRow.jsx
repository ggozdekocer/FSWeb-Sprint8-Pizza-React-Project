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

const OrderOptionsRow = ({ size, setSize, crust, setCrust }) => {
  return (
    <Container>
        <Row>
          <OrderSizePicker size={size} setSize={setSize} />
          <CrustSize crust={crust} setCrust={setCrust} />
        </Row>
    </Container>
    
  );
};

export default OrderOptionsRow;

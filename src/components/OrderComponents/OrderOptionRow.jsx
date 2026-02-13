import styled from "styled-components";
import OrderSizePicker from "./OrderSizePicker";
import CrustSize from "./CrustSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: normal;
  font-family: Barlow;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
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

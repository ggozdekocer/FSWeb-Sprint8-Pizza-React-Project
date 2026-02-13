import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const Button = styled.button`
  background: #FDC913;
  border: none;
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background-color: #ffd966;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
  }
`;

const Count = styled.div`
  padding: 1rem 1.2rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 10px;

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`;

const OrderCount = ({ count, setCount }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={() => setCount(prev => Math.max(1, prev - 1))}>
        -
      </Button>
      <Count>{count}</Count>
      <Button type="button" onClick={() => setCount(prev => prev + 1)}>
        +
      </Button>
    </Wrapper>
  );
};

export default OrderCount;

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: #f7c200;
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

const Count = styled.div`
  padding: 0.75rem 1.5rem;
  border: 1px solid #eee;
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
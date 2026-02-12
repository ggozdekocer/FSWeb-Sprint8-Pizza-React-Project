import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Option = styled.label`
  display: block;
  margin-top: 0.75rem;
`;

const OrderSizePicker = ({ size, setSize }) => {
  return (
    <Wrapper>
      <Title>Boyut Seç *</Title>

      <Option>
        <input type="radio" name="size" value="küçük" checked={size === "küçük"} onChange={(e) => setSize(e.target.value)} required /> Küçük Boy
      </Option>
      <Option>
        <input type="radio" name="size" value="orta" checked={size === "orta"} onChange={(e) => setSize(e.target.value)} required /> Orta Boy
      </Option>
      <Option>
        <input type="radio" name="size" value="büyük" checked={size === "büyük"} onChange={(e) => setSize(e.target.value)} required /> Büyük Boy
      </Option>
    </Wrapper>
  );
};

export default OrderSizePicker;

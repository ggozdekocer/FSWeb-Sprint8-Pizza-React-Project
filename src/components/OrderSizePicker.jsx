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

const OrderSizePicker = () => {
  return (
    <Wrapper>
      <Title>Boyut Seç *</Title>

      <Option>
        <input type="radio" name="size" value={"küçük"}/> Küçük Boy
      </Option>
      <Option>
        <input type="radio" name="size" value={"orta"} /> Orta Boy
      </Option>
      <Option>
        <input type="radio" name="size" value={"büyük"}/> Büyük Boy
      </Option>
    </Wrapper>
  );
};

export default OrderSizePicker;

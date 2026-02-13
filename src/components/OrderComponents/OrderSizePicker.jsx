import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const OptionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Option = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  transition: all 0.2s;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
    
  input:checked + span {
    background-color: #FDC913;
  }

  &:hover span {
    background-color: #ffd966;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
`;

const LabelText = styled.span`
  position: relative;
  z-index: 1;
  font-weight: 500;
  pointer-events: none;
`;

const OrderSizePicker = ({ size, setSize }) => {
  return (
    <Wrapper>
      <Title>Boyut Seç *</Title>
      <OptionsWrapper>
        <Option>
          <input
            type="radio"
            name="size"
            value="S"
            checked={size === "S"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span><LabelText>S</LabelText></span>
        </Option>

        <Option>
          <input
            type="radio"
            name="size"
            value="M"
            checked={size === "M"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span><LabelText>M</LabelText></span>
        </Option>

        <Option>
          <input
            type="radio"
            name="size"
            value="L"
            checked={size === "L"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span><LabelText>L</LabelText></span>
        </Option>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default OrderSizePicker;

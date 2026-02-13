import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  margin-top: 2.5rem;
  width: 30%;
  font-family: Barlow;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const SubText = styled.p`
  font-size: 0.875rem;
  opacity: 0.7;
  margin-top: 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem 2rem;
  margin-top: 1.5rem;
`;

const Option = styled.label`
  display: block;
  position: relative;
  padding-left: 50px;
  padding-top: 5px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    background-color: #FAF7F2;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      background-color: #ffd966;
    }

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 14px;
      top: 5px;
      width: 10px;
      height: 20px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  input:checked + span {
    background-color: #FDC913;
    

    &::after {
      display: block;
    }
  }
`;


const OrderToppingSelector = ({ selectedExtras, setSelectedExtras }) => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    axios
      .get("/toppings.json")
      .then((response) => {
        setToppings(response.data);
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      if (selectedExtras.length <=10) {
        setSelectedExtras([...selectedExtras, value]);
      }
    } else {
      setSelectedExtras(selectedExtras.filter((e) => e !== value));
    }
  };

  return (
    <Wrapper>
      <Title>Ek Malzemeler</Title>
      <SubText>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</SubText>
      <Grid>
        {toppings.map((item, index) => (
          <Option key={index}>
            <input 
              type="checkbox" 
              value={item} 
              checked={selectedExtras.includes(item)}
              disabled={selectedExtras.length >= 10 && !selectedExtras.includes(item)} 
              onChange={handleChange}
            />
            <span></span>
            {item}
          </Option>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default OrderToppingSelector;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
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
      if (selectedExtras.length < 10) {
        setSelectedExtras([...selectedExtras, value]);
      }
    } else {
      setSelectedExtras(selectedExtras.filter((e) => e !== value));
    }
  };

  return (
    <Wrapper>
      <Title>Ek Malzemeler</Title>
      <SubText>En Fazla 10 malzeme seçebilirsiniz. 5₺</SubText>
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
            {item}
          </Option>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default OrderToppingSelector;
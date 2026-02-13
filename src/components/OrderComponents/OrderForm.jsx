import { useState } from "react";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import OrderNote from "./OrderNote";
import OrderOptionsRow from "./OrderOptionRow";
import OrderToppingSelector from "./OrderToppingSelector";
import PizzaDetails from "./PizzaDetails";
import OrderPriceRow from "./OrderPriceRow";

const WrapperFrom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NameWrapper = styled.div`
  width: 30%;
  margin-top: 2rem;
  font-family: Barlow;
`;

const NameLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #FDC913;
  }
`;

const ErrorText = styled.div`
  color: #d62828;
  font-size: 0.85rem;
  margin-top: 0.4rem;
`;


const OrderForm = (props) => {
  const { setActivePage, setOrderData, orderData } = props;
  const [count, setCount] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [size, setSize] = useState();
  const [crust, setCrust] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const extrasTotal = selectedExtras?.length * 5.00;
  const grandTotal = (85.50 + extrasTotal) * count;
  
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!name || name.trim().length < 3) {
    setNameError(true);
    return;
  }

  setNameError(false);

  setOrderData({
    pizzaName: "Position Absolute Acı Pizza",
    name,
    size,
    crust,
    extras: [...selectedExtras],
    note,
    selectionsTotal: extrasTotal,
    grandTotal,
  });

  setActivePage("Success");
};


 const isFormInvalid =
  selectedExtras.length < 4 ||
  selectedExtras.length > 10 ||
  !size ||
  !crust ||
  name.trim().length < 3;


  return (
    <>
      <FormHeader  />
      <form onSubmit={handleSubmit}>
        <WrapperFrom>
          <PizzaDetails setActivePage={setActivePage}/>
          <OrderOptionsRow size={size} setSize={setSize} crust={crust} setCrust={setCrust} />
          <OrderToppingSelector 
            selectedExtras={selectedExtras} 
            setSelectedExtras={setSelectedExtras} 
          />
          <NameWrapper>
  <NameLabel>İsim</NameLabel>
  <NameInput
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="İsminizi giriniz"
  />
  {nameError && (
    <ErrorText>İsim en az 3 harf olmalıdır.</ErrorText>
  )}
</NameWrapper>
          <OrderNote note={note} setNote={setNote} />
          <OrderPriceRow  isFormInvalid={isFormInvalid} count={count} setCount={setCount} extrasTotal={extrasTotal} grandTotal={grandTotal} />
        </WrapperFrom>
      </form>
    </>
  );
};

export default OrderForm;
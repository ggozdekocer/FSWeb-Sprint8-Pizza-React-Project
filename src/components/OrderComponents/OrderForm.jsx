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

const OrderForm = (props) => {
  const { setActivePage, setOrderData } = props;
  const [count, setCount] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [size, setSize] = useState();
  const [crust, setCrust] = useState("");
  const [note, setNote] = useState();
  const extrasTotal = selectedExtras.length * 5.00;
  const grandTotal = (85.50 + extrasTotal) * count;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderData({
      pizzaName: "Position Absolute Acı Pizza",
      size,
      crust,
      extras: [...selectedExtras],
      note,
      selectionsTotal: extrasTotal,
      grandTotal,
    });
    setActivePage("Success");
  };

  return (
    <>
      <FormHeader setActivePage={setActivePage} />
      <form onSubmit={handleSubmit}>
        <WrapperFrom>
          <PizzaDetails />
          <OrderOptionsRow size={size} setSize={setSize} crust={crust} setCrust={setCrust} />
          <OrderToppingSelector 
            selectedExtras={selectedExtras} 
            setSelectedExtras={setSelectedExtras} 
          />
          <OrderNote note={note} setNote={setNote} />
          <OrderPriceRow count={count} setCount={setCount} extrasTotal={extrasTotal} grandTotal={grandTotal} />
        </WrapperFrom>
      </form>
    </>
  );
};

export default OrderForm;
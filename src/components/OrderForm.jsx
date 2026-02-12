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
  const { setActivePage } = props;
  const [count, setCount] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const extrasTotal = selectedExtras.length * 5.00;
  const grandTotal = (85.50 + extrasTotal) * count;

  return (
    <>
      <FormHeader setActivePage={setActivePage} />
      <form>
        <WrapperFrom>
          <PizzaDetails />
          <OrderOptionsRow />
          <OrderToppingSelector 
            selectedExtras={selectedExtras} 
            setSelectedExtras={setSelectedExtras} 
          />
          <OrderNote />
          <OrderPriceRow count={count} setCount={setCount} extrasTotal={extrasTotal} grandTotal={grandTotal}/>
        </WrapperFrom>
      </form>
    </>
  );
};

export default OrderForm;
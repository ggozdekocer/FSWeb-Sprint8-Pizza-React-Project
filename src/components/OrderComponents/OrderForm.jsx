import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
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
  font-family: Barlow;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const NameWrapper = styled.div`
  width: 30%;
  margin-top: 2rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
    margin-top: 1.5rem;
  }
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
  background-color: #f3f1ed;
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

const OrderForm = ({ setActivePage, setOrderData }) => {
  const [count, setCount] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const extrasTotal = selectedExtras.length * 5.0;
  const grandTotal = (85.5 + extrasTotal) * count;

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!name || name.trim().length < 3) {
    setNameError(true);
    return;
  }

  setNameError(false);

  const payload = {
    isim: name,
    boyut: size,
    hamur: crust,
    malzemeler: selectedExtras,
    ozel: note,
    adet: count,
    toplam: grandTotal,
  };

  axios
    .post("https://reqres.in/api/pizza", payload, {
      headers: {
        "x-api-key": "reqres_6dba0a35b0124d7995308970b8630e17",
      },
    })
    .then((res) => {
      console.log("Sipariş başarıyla gönderildi. API Yanıtı:", res.data);
      setOrderData({
        ...payload,
        pizzaName: "Position Absolute Acı Pizza",
        size: payload.boyut,
        crust: payload.hamur,
        extras: payload.malzemeler,
        note: payload.ozel,
        selectionsTotal: extrasTotal,
        grandTotal,
      });
      setActivePage("Success");
    })
    .catch((err) => {
      console.error("Sipariş hatası:", err);
      alert("Siparişiniz gönderilirken bir hata oluştu.");
    });
};
  const isFormInvalid =
    selectedExtras.length < 4 ||
    selectedExtras.length > 10 ||
    !size ||
    !crust ||
    name.trim().length < 3;

  return (
    <>
      <FormHeader />
      <form onSubmit={handleSubmit}>
        <WrapperFrom>
          <PizzaDetails setActivePage={setActivePage}/>
          <OrderOptionsRow
            size={size}
            setSize={setSize}
            crust={crust}
            setCrust={setCrust}
          />
          <OrderToppingSelector
            selectedExtras={selectedExtras}
            setSelectedExtras={setSelectedExtras}
          />

          <NameWrapper>
            <NameLabel>Ad - Soyad *</NameLabel>
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

          <OrderPriceRow
            isFormInvalid={isFormInvalid}
            count={count}
            setCount={setCount}
            extrasTotal={extrasTotal}
            grandTotal={grandTotal}
          />
        </WrapperFrom>
      </form>
    </>
  );
};

export default OrderForm;

import { useState } from "react";
import OrderForm from "./components/OrderComponents/OrderForm";
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import MainPizza from "./components/MainPizza";
import NavLinkData from "./NavLinkData";
import Footer from "./components/Footer";
import SuccessPage from "./components/SuccessPage";


const App = () => {

const [activePage, setActivePage] = useState("Home");
const [orderData, setOrderData] = useState(null);

  return (
    <>
    {activePage === "Home" ? (
    <>
    <Header setActivePage={setActivePage}/>
    <NavLinks NavLinkData={NavLinkData}/>
    <MainPizza setActivePage={setActivePage}/>
    </>
    ) : activePage === "Form" ? (
    <OrderForm setActivePage={setActivePage} setOrderData={setOrderData} />
    ) : (
    <SuccessPage setActivePage={setActivePage} orderData={orderData} />
    )}
    <Footer />
    </>
  );
}

export default App;
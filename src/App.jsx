import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPizza from "./components/MainPizza";
import NavLinks from "./components/NavLinks";
import OrderForm from "./components/OrderForm";

const App = () => {

const [activePage, setActivePage] = useState("Home");

  return (
    <>
    {activePage === "Home" ? (
    <>
    <Header setActivePage={setActivePage}/>
    <NavLinks />
    <MainPizza />
    </>
    ) : (
      <>
      <OrderForm setActivePage={setActivePage} />
      </>
    )}
    
    <Footer />
    </>
  );
}

export default App;
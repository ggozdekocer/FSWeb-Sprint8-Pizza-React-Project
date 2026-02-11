import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPizza from "./components/MainPizza";
import NavLinks from "./components/NavLinks";

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
      <OrderForm />
      </>
    )}
    
    <Footer />
    </>
  );
}

export default App;
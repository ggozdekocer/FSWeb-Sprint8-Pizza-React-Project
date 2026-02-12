import Categories from "./Categories";
import Products from "./Products";
import PromoCard from "./PromoCard";

const MainPizza = (props) => {
    const {setActivePage} = props;
    return (
        <>
        <PromoCard setActivePage={setActivePage}/>
        <Categories />
        <Products />
        </>
    );
}

export default MainPizza;
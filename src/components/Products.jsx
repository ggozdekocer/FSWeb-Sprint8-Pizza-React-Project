import ProductData from "../ProductsData";

const Products = () => {
    return (
        <>
         <section className="products">
            <div className="product-list">
                {ProductData.map((item) => (
    <div key={item.id} className="product-card">
        <img src={item.imgUrl} alt={item.productName} />

        <h3>{item.productName}</h3>

        <div className="product-info">
            <p>{item.rate}</p>
            <p>{item.rateCount}</p>
            <p className="price">{item.price}</p>
        </div>
    </div>
))}
            </div>
        </section>
        </>
    );
}

export default Products;
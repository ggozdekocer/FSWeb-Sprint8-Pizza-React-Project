const Products = () => {
    return (
        <>
         <section className="products">
            <div className="product-list">
                <div className="product-card">
                    <img src="public/assets\iteration-2\pictures\food-1.png"/>

                    <h3>Terminal Pizza</h3>
                    <div className="product-info">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p className="price">₺60</p>
                    </div>
                </div>

                <div className="product-card">
                    <img src="public/assets\iteration-2\pictures\food-2.png"/>
                    <h3>Position Absolute Acı Pizza</h3>
                    <div className="product-info">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p className="price">₺60</p>
                    </div>

                </div>

                <div className="product-card">
                    <img src="public/assets\iteration-2\pictures\food-3.png"/>
                    <h3>useEffect Tavuklu Burger</h3>
                    <div className="product-info">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p className="price">₺60</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Products;
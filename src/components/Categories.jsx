const Categories = () => {
    return (
        <>
        <section className="subtitle">
            <p>en çok paketlenen menüler</p>
            <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
        </section>

        <section className="categories">
            <ul className="category-list">

                <li className="category-item">
                    <img src="public/assets\iteration-2\icons\1.svg" />
                    <p>Ramen</p>
                </li>

                <li className="category-item active">
                    <img src="public/assets\iteration-2\icons\2.svg" />
                    <p>Pizza</p>
                </li>

                <li className="category-item">
                    <img src="public/assets\iteration-2\icons\3.svg" />
                    <p>Burger</p>
                </li>

                <li className="category-item">
                    <img src="public/assets\iteration-2\icons\4.svg" />
                    <p>French Fries</p>
                </li>

                <li className="category-item">
                    <img src="public/assets\iteration-2\icons\5.svg" />
                    <p>Fast Food</p>
                </li>

                <li className="category-item">
                    <img src="public/assets\iteration-2\icons\6.svg" />
                    <p>Soft Drinks</p>
                </li>
            </ul>
        </section>
        </>
    );
}

export default Categories;
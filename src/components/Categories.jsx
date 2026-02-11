import CategoriesData from "../CategoriesData";

const Categories = () => {
    return (
        <>
        <section className="subtitle">
            <p>en çok paketlenen menüler</p>
            <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
        </section>

        <section className="categories">
            <ul className="category-list">

                {CategoriesData.map((item) => (
                        <li
                            key={item.id}
                            className={`category-item ${item.active ? "active" : ""}`}
                        >
                            <img src={item.imgUrl} alt={item.text} />
                            <p>{item.text}</p>
                        </li>
                    ))}
            </ul>
        </section>
        </>
    );
}

export default Categories;
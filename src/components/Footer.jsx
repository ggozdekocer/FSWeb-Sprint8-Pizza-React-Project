import ContactData from "../ContactData";
import HotMenuData from "../HotMenuData";
import InstagramData from "../InstagramData";

const Footer = () => {
    return (
        <>
         <footer className="footer">

        <div className="footer-container">

            <div className="footer-brand">
             <img src="/assets/iteration-2/footer/logo-footer.svg" />

              <ul className="footer-contact">
              <ul className="footer-contact">
               {ContactData.map((item) => (
                <li key={item.id}>
                <img src={item.imgUrl} alt="" />
                {item.text1}
                {item.text2 && (
                <>
                <br />
                {item.text2}
                </>
            )}
        </li>
    ))}
</ul>
              </ul>
            </div>


            <div className="footer-menu">
                <h4>Hot Menu</h4>
                <ul>
                {HotMenuData.map((item) => (
                    <li key={item.id}>
                    <a href={item.link}>{item.text}</a>
                    </li>
                    ))}
                </ul>
            </div>


            <div className="footer-instagram">
                <h4>Instagram</h4>

                <div className="instagram-grid">
                    {InstagramData.map((item) => (
                    <img
                    key={item.id}
                    src={item.imgUrl}
                    alt={item.alt}
                    />
                ))}
            </div>
        </div>
    </div>

        <div className="footer-bottom">
            <div id="bottom-items">
                <p>© 2023 Teknolojik Yemekler.</p>
                <i style={{height: "24px"}} className="fa-brands fa-twitter"></i>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;
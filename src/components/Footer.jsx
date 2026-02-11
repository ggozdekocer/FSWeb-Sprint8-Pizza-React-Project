const Footer = () => {
    return (
        <>
         <footer className="footer">

        <div className="footer-container">

            <div className="footer-brand">
                <img src="public\assets\iteration-2\footer\logo-footer.svg"/>

                <ul className="footer-contact">
                    <li>
                        <img src="public\assets\iteration-2\footer\icons\icon-1.png" /> 341 Londonderry Road, <br></br> Istanbul Türkiye
                    </li>
                    <li>
                        <img src="public\assets\iteration-2\footer\icons\icon-2.png" /> info@teknolojikyemekler.com
                    </li>
                    <li>
                        <img src="public\assets\iteration-2\footer\icons\icon-3.png" /> +90 212 123 45 67
                    </li>
                </ul>
            </div>

            <div className="footer-menu">
                <h4>Hot Menu</h4>
                <ul>
                    <li><a href="#">Terminal Pizza</a></li>
                    <li><a href="#">5 Kişilik Hackathon Pizza</a></li>
                    <li><a href="#">Kore Usulü Tavuk</a></li>
                    <li><a href="#">Burger Combo</a></li>
                    <li><a href="#">Pizza & Burger Menü</a></li>
                </ul>
            </div>


            <div className="footer-instagram">
                <h4>Instagram</h4>

                <div className="instagram-grid">
                    <img src="public\assets\iteration-2\footer\insta\li-0.png" alt=""/>
                    <img src="public\assets\iteration-2\footer\insta\li-1.png" alt=""/>
                    <img src="public\assets\iteration-2\footer\insta\li-2.png" alt=""/>
                    <img src="public\assets\iteration-2\footer\insta\li-3.png" alt=""/>
                    <img src="public\assets\iteration-2\footer\insta\li-4.png" alt=""/>
                    <img src="public\assets\iteration-2\footer\insta\li-5.png" alt=""/>
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
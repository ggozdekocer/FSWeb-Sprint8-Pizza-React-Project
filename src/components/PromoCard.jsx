const PromoCard = () => {
    return (
        <>
        <section className="promo">
            <div className="promo-card large-card">
                <img className="promo-img p-large" src="/assets/iteration-2/cta/kart-1.png" alt="" />

                <div className="l-content">
                    <h2>Özel</h2>
                    <h2>Lezzetus</h2>
                    <p>Position: Absolute Acı Burger</p>
                    <button className="promo-btn">SİPARİŞ VER</button>
                </div>
            </div>
            
            <div className="promo-small">
                <div className="promo-card p-small">
                    <img className="promo-img" src="/assets/iteration-2/cta/kart-2.png" alt="" />

                    <div className="promo-content">
                        <h2>Hackathlon</h2>
                        <h2>Burger Menü</h2>
                        <button className="promo-btn">SİPARİŞ VER</button>
                    </div>
                </div>

                <div className="promo-card p-small">
                    <img className="promo-img" src="/assets/iteration-2/cta/kart-3.png" alt="" />

                    <div className="promo-content" style={{color: "black"}}>
                        <h2><span style={{color: "#d62828"}}>Çoooook</span> hızlı</h2>
                        <h2>npm gibi kurye</h2>
                        <button className="promo-btn">SİPARİŞ VER</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default PromoCard;
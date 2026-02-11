const Header = (props) => {
    const {setActivePage} = props;
    return (
        <>
        <header className="header-main-page">
        <img src="/assets/iteration-1/logo.svg" alt="" />
        <p>fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
        <button onClick={()=>setActivePage("Form")} className="btn">ACIKTIM</button>
    </header>
        </>
    );
}

export default Header;
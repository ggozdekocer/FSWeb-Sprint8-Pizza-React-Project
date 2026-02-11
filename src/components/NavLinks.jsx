const NavLinks = (props) => {
    const {NavLinkData} = props;
    return (
        <>
        <section className="icons">
          {NavLinkData.map((item)=>{
            return (
                <div key={item.id} className="icons-item">
                    <img src={item.imgUrl} alt={item.alt}/>
                    <p>{item.text}</p>
                </div>
            );
          })}  
    </section>
        </>
    );
}

export default NavLinks;
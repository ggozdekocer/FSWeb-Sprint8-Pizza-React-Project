import styled from "styled-components";

const ButtonMain = styled.button`
background: none;
border: none;
cursor: pointer;
font-family:Barlow;
font-size: 16px;
`

const OrderForm = (props) => {
    const {setActivePage} = props;
    return (
        <div className="orderForm-container">
            <header className="orderForm-header">
                <img src="public\assets\iteration-1\logo.svg"/>
               <div>
                <nav className="form-buttons">
                    <ButtonMain onClick={()=>setActivePage("Home")} className="form-btn">Anasayfa</ButtonMain>
                    <span className="form-seperate">-</span>
                    <span className="form-active">Sipariş Oluştur</span>
                </nav>
                </div> 
            </header>
        </div>
    );
}

export default OrderForm;
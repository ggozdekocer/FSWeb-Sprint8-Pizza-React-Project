import styled from "styled-components";
const FormHeader = (props) => {

const FormHeaderSection = styled.header`
background: #CE2829;
border: 1px solid #C20608;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
`

const ButtonMain = styled.button`
background: none;
border: none;
cursor: pointer;
font-family:Barlow;
font-size: 1.5rem;
`

    const {setActivePage} = props;
    return (
        <div className="orderForm-container">
            <FormHeaderSection className="orderForm-header">
                <img src="/assets/iteration-1/logo.svg"/>
               <div>
                <nav style={{fontSize: "1.5rem",fontWeight: "bold",fontFamily: "Barlow"}} className="form-buttons">
                    <ButtonMain onClick={()=>setActivePage("Home")}>Anasayfa</ButtonMain>
                    <span className="form-seperate">-</span>
                    <span style={{fontWeight: "bold",fontFamily: "Barlow"}} className="form-active"> Sipariş Oluştur</span>
                </nav>
                </div> 
            </FormHeaderSection>
        </div>
    );
}

export default FormHeader;
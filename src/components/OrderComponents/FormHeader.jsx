import styled from "styled-components";
const FormHeader = () => {

const FormHeaderSection = styled.header`
background: #CE2829;
border: 1px solid #C20608;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
`   
    return (
        <div className="orderForm-container">
            <FormHeaderSection className="orderForm-header">
                <img src="/assets/iteration-1/logo.svg"/>
            </FormHeaderSection>
        </div>
    );
}

export default FormHeader;
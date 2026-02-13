import styled from "styled-components";

const FormHeaderSection = styled.header`
  background: #CE2829;
  border: 1px solid #C20608;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 30px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 20px;

    img {
      height: 3rem;
    }
  }

  @media (max-width: 480px) {
    padding-top: 20px;
    padding-bottom: 15px;

    img {
      height: 2.5rem;
    }
  }
`;

const FormHeader = () => {
  return (
    <div className="orderForm-container">
      <FormHeaderSection className="orderForm-header">
        <img src="/assets/iteration-1/logo.svg" alt="Teknolojik Yemekler" />
      </FormHeaderSection>
    </div>
  );
}

export default FormHeader;
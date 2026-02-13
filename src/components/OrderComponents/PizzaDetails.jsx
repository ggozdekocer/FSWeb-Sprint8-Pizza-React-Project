import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Barlow;
  background: #FAF7F2;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`;

const PriceRow = styled.p`
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
`;

const Price = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  flex-basis: 50%;
`;

const Meta = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  opacity: 0.8;
  flex-basis: 25%;
  display: flex;
  justify-content: flex-end;
`;

const Description = styled.p`
  margin-top: 1.25rem;
  text-align: justify;
  font-weight: 300;
  font-size: 1.125rem;
`;

const ContainerSection = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    width: 90%;
    padding-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 1rem 0;
    height: auto;
  }
`
const ButtonMain = styled.a`
background: none;
border: none;
cursor: pointer;
font-family:Barlow;
font-size: 1.16rem;
font-weight: 300;

&:focus {
    outline: none;
  }
    
`

const NavDiv = styled.div`
font-family:Barlow;
display: flex;
justify-content: flex-start;
padding-bottom: 10px;
`

const PizzaDetails = (props) => {
  const {setActivePage} = props;
  return (
    <Container>
      <ContainerSection>
      <img className="form-banner-img" style={{paddingBottom: "90px"}} src="./assets/iteration-2/pictures/form-banner.png" alt="Position Absolute Acı Pizza" />
      <NavDiv>
                <nav style={{fontSize: "1.2rem"}} className="form-buttons">
                    <ButtonMain onClick={()=>setActivePage("Home")}>Anasayfa</ButtonMain>
                    <span style={{paddingLeft: "8px",fontWeight: "500", color: "#CE2829"}} className="form-seperate">-</span>
                    <span style={{fontWeight: "500", color: "#CE2829"}} className="form-active"> Sipariş Oluştur</span>
                </nav>
                </NavDiv> 
      <Title>Position Absolute Acı Pizza</Title>

      <PriceRow>
        <Price>85.50₺</Price>
        <Meta>4.9</Meta>
        <Meta>(200)</Meta>
      </PriceRow>

      <Description>
        Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza
        tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
        düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
        lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </Description>
      </ContainerSection>
    </Container>
  );
};

export default PizzaDetails;
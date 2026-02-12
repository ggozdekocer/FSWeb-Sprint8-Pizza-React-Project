import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 30%;
  font-family: Barlow;
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

const PizzaDetails = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default PizzaDetails;
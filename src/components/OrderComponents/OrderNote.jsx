import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 30%;
  font-family: Barlow;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-family: Barlow;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 70px;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  background-color: #f3f1ed;
  resize: none;
  font-size: 0.95rem;
  margin-top: 10px;
  font-family: Barlow;

  &:focus {
    outline: none;
    border-color: #FDC913;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;


const OrderNote = ({ note, setNote }) => {
  return (
    <Wrapper>
      <Title>Sipariş Notu</Title>
        <TextArea rows="10" column="3"
          placeholder="Siparişine eklemek istediğin bir not var mı?" 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
        />
    </Wrapper>
  );
};

export default OrderNote;

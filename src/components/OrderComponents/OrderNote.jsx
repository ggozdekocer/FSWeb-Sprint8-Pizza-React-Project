import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 30%;
  font-family: Barlow;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const OrderNote = ({ note, setNote }) => {
  return (
    <Wrapper>
      <Title>Sipariş Notu</Title>
        <TextArea 
          placeholder="Siparişine eklemek istediğin bir not var mı?" 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
        />
    </Wrapper>
  );
};

export default OrderNote;

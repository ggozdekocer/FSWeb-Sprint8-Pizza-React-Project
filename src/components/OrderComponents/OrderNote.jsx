import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 30%;
  font-family: Barlow;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-top: 0.75rem;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background-color: #FAF7F2;
  max-width: 100%;
  min-width: 100%;
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

import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  margin-top: 0.5rem;
  padding: 0.9rem 1rem;
  width: 100%;
  border-radius: 12px;
  border: 2px solid transparent;
  background-color: #ece7df;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  &:hover {
    background-color: #ffd966;
  }

  &:focus {
    outline: none;
    background-color: #FDC913;
  }
`;


const CrustSize = ({ crust, setCrust }) => {
  return (
    <Wrapper>
      <Title>Hamur Seç *</Title>

      <SelectWrapper>
        <Select
          value={crust}
          onChange={(e) => setCrust(e.target.value)}
          required
        >
          <option value="" disabled>
            —Hamur Kalınlığı Seç —
          </option>
          <option value="Süpper İnce">Süpper İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </Select>
      </SelectWrapper>
    </Wrapper>
  );
};

export default CrustSize;

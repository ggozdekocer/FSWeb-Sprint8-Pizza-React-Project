import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Select = styled.select`
  margin-top: 0.75rem;
  padding: 0.5rem;
  width: 100%;
`;

const CrustSize = ({ crust, setCrust }) => {
  return (
    <Wrapper>
      <Title>Hamur Seç *</Title>

      <Select
        value={crust}
        onChange={(e) => setCrust(e.target.value)}
        required
      >
        <option value="" disabled>
          Hamur Kalınlığı Seç
        </option>
        <option value="thin">Süpper İnce</option>
        <option value="medium">Orta</option>
        <option value="thick">Kalın</option>
      </Select>
    </Wrapper>
  );
};

export default CrustSize;

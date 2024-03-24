import styled from 'styled-components';

export const CarsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(8)};
`;

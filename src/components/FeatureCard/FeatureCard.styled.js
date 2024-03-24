import styled from 'styled-components';

export const SvgFeature = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${p => p.theme.colors.main};
  fill: none;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: 12px 18px;
  border-radius: ${p => p.theme.radii.ld};
  background-color: ${p => p.theme.colors.blockFeatures};
  font-weight: 500;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Caption = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

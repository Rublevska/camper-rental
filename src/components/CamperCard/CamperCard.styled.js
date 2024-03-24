import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  width: 888px;
  height: 358px;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(6)};
  border: 1px solid ${p => p.theme.colors.borderColor};
  border-radius: ${p => p.theme.radii.sd};
  word-wrap: break-word;
  font-size: 14px;
`;

export const CamperImg = styled.img`
  width: 290px;
  height: 310px;
  border-radius: ${p => p.theme.radii.xsd};
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(6)};
  width: 526px;
`;

export const CamperTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: 24px;
  font-weight: 600;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;

export const CamperTitle = styled.p`
  display: block;
`;

export const BtnFavotite = styled.button`
  border: 0px none;
  background-color: transparent;
  padding: 0px;
`;

export const SvgFavotite = styled.svg`
  margin-left: ${p => p.theme.spacing(2)};
  width: 24px;
  height: 24px;
  fill: none;
  stroke: ${p => p.theme.colors.main};
`;

export const RatingWrapper = styled.div`
  display: flex;
`;

export const SvgStar = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: ${p => p.theme.spacing(1)};
`;

export const RatingInfo = styled.p`
  display: block;
  text-decoration: underline;
  margin-right: ${p => p.theme.spacing(2)};
`;

export const SvgClear = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${p => p.theme.colors.main};
  margin-right: ${p => p.theme.spacing(1)};
`;

export const CamperDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${p => p.theme.colors.text};
`;

export const ShowMoreBtn = styled.button`
  width: 166px;
  border: none;
  border-radius: ${p => p.theme.radii.ld};
  background-color: ${p => p.theme.colors.button};
  color: white;
  padding: 16px 40px;
`;

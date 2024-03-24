import { toEur } from 'helpers/helpers';
import sprite from '../../assets/sprite.svg';
import {
  BtnFavotite,
  CamperDescription,
  CamperImg,
  CamperTitle,
  CamperTitleWrapper,
  CardWrapper,
  InfoWrapper,
  PriceWrapper,
  RatingInfo,
  RatingWrapper,
  ShowMoreBtn,
  SvgClear,
  SvgFavotite,
  SvgStar,
} from './CamperCard.styled';
import { Featurelist } from 'components/FeatureList/FeatureList';

export const CamperCard = ({
  camper: {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details: { airConditioner, beds, kitchen },
    gallery,
    reviews,
  },
  // toggleModal,
}) => {
  const features = {
    adults,
    transmission,
    engine,
    ...(kitchen && { kitchen: 'Kitchen' }),
    beds,
    ...(airConditioner && { AC: 'AC' }),
  };
  return (
    <CardWrapper>
      <CamperImg src={gallery[0]} alt={name} />
      <InfoWrapper>
        <div>
          <CamperTitleWrapper>
            <CamperTitle>{name}</CamperTitle>
            <PriceWrapper>
              <CamperTitle>{toEur.format(price)}</CamperTitle>
              <BtnFavotite type="button" aria-label="add to favotite list">
                <SvgFavotite>
                  <use href={`${sprite}#toFavorite`}></use>
                </SvgFavotite>
              </BtnFavotite>
            </PriceWrapper>
          </CamperTitleWrapper>
          <RatingWrapper>
            <SvgStar>
              <use href={`${sprite}#star`}></use>
            </SvgStar>
            <RatingInfo>
              {rating} ({reviews.length} Reviews)
            </RatingInfo>
            <SvgClear>
              <use href={`${sprite}#pin-active`}></use>
            </SvgClear>
            <p>{location}</p>
          </RatingWrapper>
        </div>
        <CamperDescription>{description}</CamperDescription>
        <Featurelist addFeatures={features} />
        <ShowMoreBtn type="button">Show more</ShowMoreBtn>
      </InfoWrapper>
    </CardWrapper>
  );
};

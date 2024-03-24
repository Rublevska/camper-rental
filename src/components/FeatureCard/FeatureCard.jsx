import { Caption, FeatureItem, SvgFeature } from './FeatureCard.styled';
import sprite from '../../assets/sprite.svg';

export const FeatureCard = ({ featureKey, feature }) => {
  return (
    <FeatureItem>
      <SvgFeature>
        <use href={`${sprite}#${featureKey}`}></use>
      </SvgFeature>
      <Caption>
        {typeof feature === 'number'
          ? `${feature} ${featureKey}`
          : `${feature}`}
      </Caption>
    </FeatureItem>
  );
};

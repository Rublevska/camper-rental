import { FeatureCard } from 'components/FeatureCard/FeatureCard';
import { Features } from './FeatureList.styled';

export const Featurelist = ({ addFeatures }) => {
  return (
    <Features>
      {Object.keys(addFeatures).map(featureId => (
        <FeatureCard
          key={featureId}
          featureKey={featureId}
          feature={addFeatures[featureId]}
        />
      ))}
    </Features>
  );
};

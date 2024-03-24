import { CamperCard } from 'components/CamperCard/CamperCard';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/campersSelectors';
import { CarsList } from './CamperList.styled';

export const CamtersList = () => {
  // const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  return (
    <div>
      <CarsList>
        {campers.map(camper => {
          return (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          );
        })}
      </CarsList>
    </div>
  );
};

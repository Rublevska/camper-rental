import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersOperations';

import { CamtersList } from 'components/CampersList/CapmersList';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(changeCampersReset());
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div>
      <section>
        <CamtersList />
      </section>
      <aside>Aside</aside>
    </div>
  );
}

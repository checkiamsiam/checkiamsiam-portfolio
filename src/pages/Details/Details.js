import React  , {memo, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ActiveNavContext } from '../../App';

const ProjectDetail = () => {
  const { route } = useParams();
  const {projects} = useContext(ActiveNavContext)
  const thisProject = projects.find(product => product.detailsRoute === route)

  return (
    <div className='mt-20'>
      dfds
    </div>
  );
};

export default memo(ProjectDetail);
import React  , {memo} from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { route } = useParams();
  console.log(route);
  return (
    <div>
      dfds
    </div>
  );
};

export default memo(ProjectDetail);
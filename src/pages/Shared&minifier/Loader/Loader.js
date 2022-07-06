import React , {memo} from 'react';
import './Loader.css'

const Loader = () => {
  return (
    <div id="preloader">
      <div>
        <div class="rectangles">
          <div class="rect q"></div>
          <div class="rect w"></div>
          <div class="rect e"></div>
          <div class="rect r"></div>
        </div>
        <div class="inscription">
          <i>Loading</i>
          <span>...</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Loader);
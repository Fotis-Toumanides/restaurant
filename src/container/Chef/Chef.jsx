import React from 'react';
import { images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__ padding' id='chef'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Head Chef" />
    </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className='headtext__cormorant'>MENÚS EVENTOS</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            {/* <img src={images.quote} alt="Quote" /> */}
            <p className='p__opensans'>Disponemos de menús especiales, a precios imbatibles, para grupos de más de 8 personas. Igualmente, nos adaptamos a tus necesidades y gustos, tanto para comidas en grupo como para celebraciones tipo "finger-food".</p>
          </div>
          <div className="app__chef-content_quote">
            <p className='p__opensans'>aCelebra tus cumpleaños, fiestas y eventos con nosotros!!</p>
          </div>
        </div>
        <duv className="app__chef-sign">
          <p>Stavros</p>
          <p className='p__opensans'>Chef & Co Founder</p>
          <img src={images.sign} alt="sign" />
        </duv>
      </div>
  </div>
);

export default Chef;

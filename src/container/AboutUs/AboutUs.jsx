import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app_aboutus app__bg flex__center space__padding' id='about'>
    <div className="app_aboutus-overlay flex__center">
      <img src={images.P} alt="P" />
    </div>
    <div className="app_aboutus-content flex__center"> 
    <div className="app_aboutus-content_about">
      <h1 className="headtext__cormorant">La única taberna en Palma </h1>
      <img src={images.spoon} className="spoon__img" alt="spoon" />
      <p className="p__opensans">La única taberna Griego-Mediterránea en Palma Nos mueve el gusto por las cosas sencillas y caseras. Junto a nuestro chef Stavros, llevamos Grecia como sello de identidad y queremos rememorar "jroña que jroña" (años y años)</p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
    <div className="app_aboutus-content_knife flex__center">
      <img src={images.knife} alt="knife" />
    </div>
    <div className="app_aboutus-content_history">
      <h1 className="headtext__cormorant">Griego-Mediterránea</h1>
      <img src={images.spoon} className="spoon__img" alt="spoon" />
      <p className="p__opensans">de sabiduría culinaria combinando sabores y hierbas aromáticas, base de la dieta mediterránea.Sin artificios, sin vanguardias: simplemente cocina para disfrutar!!</p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
    </div>

  </div>
);

export default AboutUs;

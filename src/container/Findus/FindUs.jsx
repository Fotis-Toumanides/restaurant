import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>CONTACTO Y RESERVAS</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Carrer De Jacint Verdaguer 15, 07004 Palma de Mallorca, Illes Balears, Spain</p>
        <p className="p__cormorant" style={{color:'#DCCA87', margin:'2rem 0'}}>HORARIO VERANO</p>
        <p className="p__opensans">Mon - Fri: 13:00 am - 00:00 am</p>
        <p className="p__opensans">Sat - Sun: 18:00 am - 00:00 am</p>
        <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.palet_02} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;

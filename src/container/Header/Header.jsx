import React from 'react';

/* import {images} from '../../constants'; */
import './Header.css';
import { SubHeading } from '../../components';
import BootCarousel from '../../components/BootCarousel';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='The taste of Life' />
      <h1 className="app__header-h1">Bienvenido a Café PALET</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Taberna Griego-Mediterránea</p>
      <button type='button' className='custom__button'>Visitanos</button>
      
    </div>
    <div className="app__wrapper_img">
     {/*  <img src={images.palet_03} alt="header img" /> */}
     <BootCarousel />

    </div>

    
  </div>
);

export default Header;

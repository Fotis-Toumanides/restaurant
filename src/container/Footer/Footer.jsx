import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <p className="p__opensans">Carrer De Jacint Verdaguer 15, 07004 Palma de Mallorca, Illes Balears, Spain</p>
        <p className="p__opensans">871 034097</p>
        {/* <p className="p__opensans">+1 212-555-1230</p> */}
      </div>
      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="Gericht" /> */}
        <h2 className="app__footer-headtext">Palet Cafe</h2>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon"  className="spoon__img" style={{marginTop:15}} />
        <div className="app__footer-links_icons">
         <a href="https://www.facebook.com/paletpalma/" target="_blank" ><FiFacebook / ></a>
          
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h2 className="app__footer-headtext">Working Hours</h2>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">1:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">6:00 am -12:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Fotis Toumanidis. All rights reserved</p>
    </div>
  </div>
  
     
);

export default Footer;
import React from 'react';
import './footer.css'
import insta from '../../assets/inst.webp'
import facebook from '../../assets/face.png'
import twitter from '../../assets/twi.png'

const Footer = () => {
  return <div className='footer-container'>
    <div className='submit-mail'>
      <p className='long-text' style={{fontSize:"18px"}}>Sign up for exciting offers and updates</p>
      <input type='text'></input>
      <button className='submit-btn'>SUBMIT EMAIL</button>
    </div>
    <div className='social-media'>
      <div className='link-section'>
      <img className="link-img" src={insta} alt='insta'/> 
      <img className="link-img" src={facebook} alt='facebbok'/> 
      <img className="link-img" src={twitter} alt='twitter'/> 
      </div>
      <span className='small-text'>care@nuawoman.com</span>
      <span className='small-text'>service@nuawoman.com</span>
      <span className='small-text'>080-470-93155</span>
      <p className='long-text'>1st Floor and 2nd Floor, Plot No 175, Kagalwala House, CST Road Bandra Kurla Complex, Mumbai - 400098</p>
    </div>
    <div className='general-faq'>

      <span className='small-text'>FAQs</span>
      <span className='small-text'>Why Nua</span>
      <span className='small-text'>Terms and Conditions</span>
      <span className='small-text'>Returns and Cancellation Policy</span>
      <span className='small-text'>Returns and Cancellation Policy</span>
      <span className='small-text'>Contact Us</span>
      <p className='long-text'>Nua will not induce its customers via phone calls, SMS, email etc to engage in any rewards, lucky draws, etc. Nua will not be liable for any loss or damages arising out of or relating to the above.</p>


    </div>
  </div>;
};

export default Footer;

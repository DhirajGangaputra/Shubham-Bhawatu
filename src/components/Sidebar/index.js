import React from 'react';
import './index.css';
import profileImage from '../../images/profile-img.png'; // Update the path based on your directory structure
import facebookLogo from '../../images/5365678_fb_facebook_facebook logo_icon.png'; // Update the path based on your directory structure
import instgramLogo from '../../images/5296765_camera_instagram_instagram logo_icon.png'
import whatsappLogo from '../../images/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.png'

const Sidebar = (props) => {
  //const { username } = props;
  return (
    <div className='sidebar-container'>
        <div className='top-section'>
            <div className='profile-container'>
                <img src={profileImage} alt="profile" className='profile-img' />
                <h1>Username</h1>
            </div>
            <ul className='menu-option-container'>
                <h1 className='menu-heading'>Categories</h1>
                <hr className='hr-line'/>
                <li><button type="button" className='options'>Rudraksha</button></li>
                <li><button type="button" className='options'>Tulsi Mala</button></li>
                <li><button type="button" className='options'>Gems and Crystals</button></li>
            </ul>
        </div>

      <div className='footer-container'>
        <ul className='social-media-list'>
          <li>
            <button type="button" className='social-btns'>
              <img src={facebookLogo} alt="facebook" className='social-logo' />
            </button>
          </li>
          <li>
          <button type="button" className='social-btns'>
          <img src={instgramLogo} alt="facebook" className='social-logo' />
            </button>
          </li>
          <li>
            <button type="button" className='social-btns'>
              <img src={whatsappLogo} alt="facebook" className='social-logo' />
            </button>
          </li>
        </ul>
        <p className='footer-details'>If you have any query or doubt you can contact us on above platforms.</p>
      </div>
    </div>
  );
};

export default Sidebar;

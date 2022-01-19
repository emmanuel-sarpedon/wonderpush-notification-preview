// REACT
import React, { useState } from 'react';

// UTILS
import NotificationPreviewProps from '../../types/NotificationPreview.d';
import { toCapitalize } from '../../utils/StringUtils';

// ASSETS
import logoArrow from '../../assets/logo-arrow-right-white.svg';
import logoWifi from '../../assets/logo-wifi-white.svg';
import logoVolume from '../../assets/logo-volume-white.svg';
import logoBattery from '../../assets/logo-battery-white.svg';
import logoComment from '../../assets/logo-comment-white.svg';

const logosOnFooter = [
   { src: logoWifi, className: 'wifi', alt: 'wifi-icon' },
   {
      src: logoBattery,
      className: 'battery',
      alt: 'battery-icon',
   },
   {
      src: logoVolume,
      className: 'volume',
      alt: 'volume-icon',
   },
   { src: logoComment, className: 'comment', alt: 'comment-icon' },
];

const currentTime = new Date().toLocaleTimeString('en-US', {
   hour: '2-digit',
   minute: '2-digit',
});

const currentDate = new Date().toLocaleDateString('en-EN', {
   day: 'numeric',
   month: '2-digit',
   year: 'numeric',
});

const Windows = (props: NotificationPreviewProps) => {
   const { title, message, icon, image, buttons } = props;

   const [notificationIsHoveredOver, setNotificationIsHoveredOver] = useState(false);

   return (
      <div className="windows">
         <div
            className="notification"
            onMouseEnter={() => setNotificationIsHoveredOver(true)}
            onMouseLeave={() => setNotificationIsHoveredOver(false)}>
            <img className="attached-img" src={image} alt="attached-img" />

            <div className="notification-params">
               <div className="icon">
                  <img src={icon} alt="app-icon" />
               </div>

               <div className="text-content">
                  <div className="title">{title}</div>
                  <div className="message">{message}</div>
                  <div className="browser">
                     <span>Google Chrome</span>
                     <span>example.com</span>
                  </div>
               </div>

               <div
                  className="arrow"
                  style={{ visibility: notificationIsHoveredOver ? 'visible' : 'hidden' }}>
                  <img src={logoArrow} alt="arrow-right" />
               </div>
            </div>

            <div className="buttons">
               {buttons &&
                  buttons
                     .filter(Boolean)
                     .slice(0, 2)
                     .map((button) => <div>{toCapitalize(button)}</div>)}
            </div>
         </div>

         <div className="footer">
            {logosOnFooter.slice(0, 3).map((logo) => (
               <img src={logo.src} alt={logo.alt} className={logo.className} />
            ))}

            <div className="current-time">
               <span>{currentTime}</span>
               <span>{currentDate}</span>
            </div>

            {logosOnFooter.slice(3).map((logo) => (
               <img src={logo.src} alt={logo.alt} className={logo.className} />
            ))}
         </div>
      </div>
   );
};

export default Windows;

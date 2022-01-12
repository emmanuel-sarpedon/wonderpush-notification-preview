// REACT
import React, { useState, useEffect } from 'react';

// UTILS
import NotificationPreviewProps from '../../types/NotificationPreview.d';
import { toCapitalize } from '../../utils/StringUtils';

// ASSETS
import logoBluetooth from '../../assets/logo-bluetooth-grey.svg';
import logoWifi from '../../assets/logo-wifi-grey.svg';
import logoBattery from '../../assets/logo-battery-grey.svg';
import logoChevron from '../../assets/logo-chevron.svg';
import logoChrome from '../../assets/logo-chrome-grey.svg';
import defaultBadge from '../../assets/logo-bell.svg';

const defaultIconUrl = 'https://cdn.by.wonderpush.com/assets/images/logo/logo-icon-plain-256x256.png';

const logosOnTopScreen = [logoBluetooth, logoWifi, logoBattery];

const currentDate = new Date().toLocaleDateString('en-EN', {
   weekday: 'long',
   month: 'long',
   day: 'numeric',
});

const currentTime = new Date().toLocaleTimeString([], {
   hour: '2-digit',
   minute: '2-digit',
});

const Android = (props: NotificationPreviewProps) => {
   const { appName, title, message, badge, icon, image, buttons, platform } = props;

   const [isMinimizedNotification, setIsMinimizedNotification] = useState(false);
   const [isBrokenImg, setIsBrokenImg] = useState(false);

   useEffect(() => {
      setIsBrokenImg(false);
   }, [image]);

   const handleClick = () => {
      setIsMinimizedNotification(!isMinimizedNotification);
   };

   return (
      <div className='android'>
         {/* DEVICE */}
         <div className='speakers'>
            <div className='speaker' />
            <div className='speaker' />
            <div className='speaker' />
            <div className='speaker' />
            <div className='speaker' />
            <div className='speaker' />
         </div>
         <div className='volume volume-up' />
         <div className='volume volume-down' />
         <div className='lock' />
         <div className='screen'>
            <div className='status-bar'>
               {logosOnTopScreen.map((logo: any, index: number) => (
                  <img key={index} src={logo} alt='logo' />
               ))}
            </div>
            <div className='current-time'>{currentTime}</div>
            <div className='current-date'>{currentDate}</div>

            {/*PREVIEW NOTIFICATION*/}
            <div className='notification' onClick={handleClick}>
               <div className='preview-top'>

                  <div>
                     {platform === 'android' && (
                        <>
                           <div className='name'>
                              <img className='badge' src={badge || defaultBadge} alt='logo-bell' />
                              {appName}
                              <img className={`chevron ${isMinimizedNotification && 'rotate'}`}
                                   src={logoChevron}
                                   alt='logo-chevron'
                              />
                           </div>

                        </>
                     )}

                     {platform === 'web:android' && (
                        <>
                           <div className='name'>
                              <img className='badge' src={logoChrome} alt='logo-chrome' />
                              <span className='browser'>Chrome</span>
                              <span className='domain'>example.com</span>
                              <img className={`chevron ${isMinimizedNotification && 'rotate'}`}
                                   src={logoChevron}
                                   alt='logo-chevron'
                              />
                           </div>

                        </>
                     )}
                     <div className='title'>{title}</div>
                     <div className='message'>{message}</div>
                  </div>


                  {(isMinimizedNotification || isBrokenImg) && (
                     <img
                        className='app-logo'
                        src={icon || defaultIconUrl}
                        alt={'app-logo'}
                     />
                  )}

               </div>

               <div
                  className={`preview-bottom ${isMinimizedNotification ? 'hidden' : ''} ${isBrokenImg ? 'isBrokenImg' : ''} ${platform === 'web:android' ? 'isWebAndroid' : ''}`}>
                  {!isBrokenImg && (
                     <img
                        src={image}
                        alt='attached'
                        onError={() => setIsBrokenImg(true)}
                     />)}

                  {/* Display buttons only on mobile*/}
                  {platform === 'android' && (
                     <div className='buttons'>
                        {buttons?.map((buttonName: string) => buttonName &&
                           <button>{toCapitalize(buttonName)}</button>)}
                     </div>
                  )}

               </div>
            </div>
         </div>
      </div>
   );
};

export default Android;

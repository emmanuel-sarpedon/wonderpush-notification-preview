import { useState } from 'react';

import logoBluetooth from '../../assets/logo-bluetooth-grey.svg';
import logoWifi from '../../assets/logo-wifi-grey.svg';
import logoBattery from '../../assets/logo-battery-grey.svg';
import logoChevron from '../../assets/logo-chevron.svg';

import logoWp from '../../assets/logo-wp.png';
import logoBell from '../../assets/logo-bell.svg';
import nyPicture from '../../assets/ny-location.webp';

import NotificationPreviewProps from '../../types/NotificationPreview.d';
import { stringUtils } from '../../utils/StringUtils';

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

const GoogleAndroid = (props: NotificationPreviewProps) => {
   const { appName, title, message, badge, icon, image, buttons } = props;

   const [isMinimizedNotification, setIsMinimizedNotification] = useState(false);

   const handleClick = () => {
      setIsMinimizedNotification(!isMinimizedNotification);
   };

   return (
      <div className='google-android'>
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
                     <div className='app-name'>
                        <img className='bell' src={badge || logoBell} alt='logo-bell' />
                        {appName}
                        <img className={`chevron ${isMinimizedNotification && 'rotate'}`}
                             src={logoChevron}
                             alt='logo-chevron'
                        />
                     </div>
                     <div className='title'>{title}</div>
                     <div className='message'>{message}</div>
                  </div>

                  <img style={{ display: isMinimizedNotification ? 'block' : 'none' }}
                       className='app-logo'
                       src={icon || logoWp}
                       alt={'app-logo'} />

               </div>

               <div className={`preview-bottom ${isMinimizedNotification ? 'hidden' : ''}`}>
                  <img
                     src={image || nyPicture}
                     alt='attached'
                  />
                  <div className='buttons'>
                     {buttons?.map((buttonName: string) => buttonName &&
                        <button>{stringUtils(buttonName)}</button>)}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GoogleAndroid;

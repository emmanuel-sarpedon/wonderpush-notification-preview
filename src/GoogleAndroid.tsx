import { useState } from 'react';

import logoBluetooth from './assets/logo-bluetooth-grey.svg';
import logoWifi from './assets/logo-wifi-grey.svg';
import logoBattery from './assets/logo-battery-grey.svg';
import logoChevron from './assets/logo-chevron.svg';

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


const GoogleAndroid = (props: any) => {
   const { appName, title, message, icon, image, buttons, badge } = props;

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
                        <img className='bell' src={badge} alt='logo-bell' />
                        {appName}
                        <img className={`chevron ${isMinimizedNotification && 'rotate'}`}
                             src={logoChevron}
                             alt='logo-chevron'
                        />
                     </div>
                     <div className='title'>{title}</div>
                     <div className='subtitle'>{message}</div>
                  </div>

                  <img style={{ display: isMinimizedNotification ? 'block' : 'none' }}
                       className='app-logo'
                       src={icon}
                       alt={'app-logo'} />

               </div>

               <div className={`preview-bottom ${isMinimizedNotification && 'hidden'}`}>
                  <img
                     src={image}
                     alt='attached'
                  />
                  <div className='buttons'>
                     {buttons?.map((buttonName: string) => buttonName &&
                        <button>{buttonName[0].toUpperCase() + buttonName.substring(1)}</button>)}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GoogleAndroid;

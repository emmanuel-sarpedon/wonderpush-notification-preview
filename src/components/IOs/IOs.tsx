// REACT
import React from 'react';

// UTILS
import NotificationPreviewProps from '../../types/NotificationPreview.d';

// ASSETS
import logoSignal from '../../assets/logo-signal-cellular-grey.svg';
import logoWifi from '../../assets/logo-wifi-grey.svg';
import logoBattery from '../../assets/logo-battery-grey.svg';

const logosOnTopScreen = [logoSignal, logoWifi, logoBattery];

const IOs = (props: NotificationPreviewProps) => {
   return (
      <div className='ios'>
         <div className='side-screen left' />
         <div className='side-screen right' />
         <div className='speakers'>
            <div>
               <div className='speaker' />
               <div className='speaker' />
               <div className='speaker' />
               <div className='speaker' />
               <div className='speaker' />
            </div>
         </div>
         <div className='button left-side ringer-switch' />
         <div className='button left-side volume volume-up' />
         <div className='button left-side volume volume-down' />
         <div className='button right-side lock' />
         <div className='screen'>
            <div className='status-bar'>
               {logosOnTopScreen.map((logo: any, index: number) => (
                  <img key={index} src={logo} alt='logo' />
               ))}
            </div>
         </div>
      </div>
   );
};

export default IOs;

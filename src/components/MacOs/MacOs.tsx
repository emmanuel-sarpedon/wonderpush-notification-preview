// REACT
import React, { useEffect, useState } from 'react';

// UTILS
import NotificationPreviewProps from '../../types/NotificationPreview.d';

// ASSETS
import logoBluetooth from '../../assets/logo-bluetooth.svg';
import logoWifi from '../../assets/logo-wifi.svg';
import logoVolume from '../../assets/logo-volume.svg';
import logoSearch from '../../assets/logo-search.svg';
import logoList from '../../assets/logo-list.svg';
import logoChromeColor from '../../assets/logo-chrome-color.svg';
import logoChevron from '../../assets/logo-chevron-grey.svg';
import logoEllipsis from '../../assets/logo-ellipsis-grey.svg';

const logosOnTopScreen = [logoBluetooth, logoWifi, logoVolume, logoSearch, logoList];

const currentTime = new Date().toLocaleTimeString([], {
   hour: '2-digit',
   minute: '2-digit',
});

const currentTimePosition = 3;

const MacOs = (props: NotificationPreviewProps) => {
   const { image, icon } = props;

   return (
      <div className="macos">
         <div className="status-bar">
            {logosOnTopScreen.slice(0, currentTimePosition).map((logo: any, index: number) => (
               <img key={index} src={logo} alt="logo" />
            ))}

            <span className="current-time">{currentTime}</span>

            {logosOnTopScreen.slice(currentTimePosition).map((logo: any, index: number) => (
               <img key={index} src={logo} alt="logo" />
            ))}
         </div>

         <div className="notification">
            <div className="top-notification">
               <div>
                  <img src={logoChromeColor} alt="chrome-color" />
                  <div>Google Chrome</div>
               </div>

               <div>
                  <button>
                     <img src={logoEllipsis} alt="chrome-color" />
                  </button>
                  <button>
                     <img src={logoChevron} alt="chrome-color" />
                  </button>
               </div>
            </div>

            <div className="icon-container">
               <img src={icon} alt="icon" className="icon" />
            </div>
         </div>
      </div>
   );
};

export default MacOs;

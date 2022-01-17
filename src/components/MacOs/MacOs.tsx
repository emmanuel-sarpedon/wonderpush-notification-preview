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
   const { icon, title, message, buttons } = props;

   const [notificationIsHoveredOver, setNotificationIsHoveredOver] = useState(false);
   const [notificationIsMinimized, setNotificationIsMinimized] = useState(true);
   const [iconImageUrlIsBroken, setIconImageUrlIsBroken] = useState(false);
   const [displayOptionsList, setDisplayOptionsList] = useState(false);

   useEffect(() => {
      setIconImageUrlIsBroken(false);
   }, [icon]);

   return (
      <div className="macos">
         {/* -- Header --*/}
         <div className="status-bar">
            {logosOnTopScreen.slice(0, currentTimePosition).map((logo: any, index: number) => (
               <img key={index} src={logo} alt="logo" />
            ))}

            <span className="current-time">{currentTime}</span>

            {logosOnTopScreen.slice(currentTimePosition).map((logo: any, index: number) => (
               <img key={index} src={logo} alt="logo" />
            ))}
         </div>

         {/*-- Notification container --*/}
         <div
            className="notification"
            onMouseEnter={() => setNotificationIsHoveredOver(true)}
            onMouseLeave={() => setNotificationIsHoveredOver(false)}>
            {/*-- Close notification --*/}
            <div
               className="close-stick"
               style={{ opacity: notificationIsHoveredOver ? '100%' : '0%' }}>
               ╳
            </div>

            {/*-- Notification body --*/}
            <div className="top-notification">
               <div>
                  <img src={logoChromeColor} alt="chrome-color" />
                  <div>Google Chrome</div>
               </div>

               {/*-- Call to action --*/}
               <div>
                  {!notificationIsMinimized && (
                     <button>
                        <img src={logoEllipsis} alt="ellipsis" />
                     </button>
                  )}

                  {(notificationIsHoveredOver || !notificationIsMinimized) && (
                     <button onClick={() => setNotificationIsMinimized(!notificationIsMinimized)}>
                        <img
                           src={logoChevron}
                           alt="chevron"
                           className={`chevron ${!notificationIsMinimized ? 'close' : 'open'}`}
                        />
                     </button>
                  )}

                  {notificationIsMinimized && !notificationIsHoveredOver && (
                     <div className="alert-timestamp">now</div>
                  )}
               </div>
            </div>

            <div
               className="icon-container"
               style={{ display: !notificationIsMinimized ? 'flex' : 'none' }}>
               {/*display image only if notification is open*/}
               <img src={icon} alt="icon" className="icon" />
            </div>

            <div className="notification-params">
               <div>
                  <div className="title">{title}</div>
                  <div className="domain">example.com</div>
                  <div className="message">{message}</div>
               </div>

               {/*-- Logo --*/}
               <img
                  className="logo-img"
                  src={icon}
                  alt="logo-img"
                  style={{
                     visibility:
                        !notificationIsHoveredOver &&
                        notificationIsMinimized &&
                        !iconImageUrlIsBroken &&
                        !displayOptionsList
                           ? 'visible'
                           : 'hidden',
                  }}
                  onError={() => setIconImageUrlIsBroken(true)}
               />

               <div
                  className="option-button"
                  style={{
                     display:
                        (notificationIsHoveredOver || displayOptionsList) && notificationIsMinimized
                           ? 'flex'
                           : 'none',
                  }}
                  onClick={() => {
                     setDisplayOptionsList(!displayOptionsList);
                     setNotificationIsHoveredOver(false);
                  }}>
                  {buttons && buttons.filter(Boolean).length > 0 ? (
                     <span>Options</span>
                  ) : (
                     <span>Settings</span>
                  )}

                  <img src={logoChevron} className="chevron" alt="chevron" />

                  {displayOptionsList && buttons && buttons.filter(Boolean).length > 0 && (
                     <div className="options-list">
                        {buttons &&
                           [...buttons, 'Settings']
                              .filter(Boolean)
                              .map((button) => <div className="button">{button}</div>)}
                     </div>
                  )}
               </div>
            </div>

            <div className="buttons">
               {!notificationIsMinimized &&
                  buttons &&
                  [...buttons, 'Settings']
                     .filter(Boolean)
                     .map((button) => <div className="button">{button}</div>)}
            </div>
         </div>
      </div>
   );
};
export default MacOs;

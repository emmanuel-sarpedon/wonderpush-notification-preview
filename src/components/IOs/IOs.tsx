// REACT
import React, { useEffect, useState } from 'react';

// UTILS
import NotificationPreviewProps from '../../types/NotificationPreview.d';

// ASSETS
import logoSignal from '../../assets/logo-signal-cellular-grey.svg';
import logoWifi from '../../assets/logo-wifi-grey.svg';
import logoBattery from '../../assets/logo-battery-grey.svg';
import logoClose from '../../assets/logo-close.svg';
import defaultBadge from '../../assets/logo-apple-white.svg';

const logosOnTopScreen = [logoSignal, logoWifi, logoBattery];

const currentDate = new Date().toLocaleDateString('en-EN', {
   weekday: 'long',
   month: 'long',
   day: 'numeric',
});

const currentTime = new Date().toLocaleTimeString([], {
   hour: '2-digit',
   minute: '2-digit',
});

const IOs = (props: NotificationPreviewProps) => {
   const { appName, title, subtitle, message, badge, image, buttons } = props;

   const [isMinimizedNotification, setIsMinimizedNotification] = useState(false);
   const [isUrlBadgeImageBroken, setIsUrlBadgeImageBroken] = useState(false);
   const [isUrlAttachedImageBroken, setIsUrlAttachedImageBroken] = useState(false);

   useEffect(() => {
      setIsUrlBadgeImageBroken(false);
   }, [badge]);

   useEffect(() => {
      setIsUrlAttachedImageBroken(false);
   }, [image]);

   return (
      <div className="ios">
         {/* DEVICE */}
         <div className="side-screen left" />
         <div className="side-screen right" />
         <div className="speakers">
            <div>
               <div className="speaker" />
               <div className="speaker" />
               <div className="speaker" />
               <div className="speaker" />
               <div className="speaker" />
            </div>
         </div>
         <div className="button left-side ringer-switch" />
         <div className="button left-side volume volume-up" />
         <div className="button left-side volume volume-down" />
         <div className="button right-side lock" />
         <div className="screen">
            <div className="status-bar">
               {logosOnTopScreen.map((logo: any, index: number) => (
                  <img key={index} src={logo} alt="logo" />
               ))}
            </div>

            {/* NOTIFICATION PREVIEW */}

            {/*-- CLOSE NOTIFICATION --*/}
            <div className="close-notification">
               <div className="current-time">{currentTime}</div>
               <div className="current-date">{currentDate}</div>

               <div className="notification" onClick={() => setIsMinimizedNotification(false)}>
                  <div className="app-name">
                     <div>
                        {isUrlBadgeImageBroken ? (
                           <div className="default-badge">
                              <div className="background">
                                 <img className="badge" src={defaultBadge} alt="badge" />
                              </div>
                              {appName}
                           </div>
                        ) : (
                           <div className="custom-badge">
                              <img
                                 className="badge"
                                 src={badge}
                                 alt="badge"
                                 onError={() => setIsUrlBadgeImageBroken(true)}
                              />
                              {appName}
                           </div>
                        )}
                     </div>
                     <span>now</span>
                  </div>

                  <div className="app-params">
                     <div>
                        <div className="title">{title}</div>
                        <div className="subtitle">{subtitle}</div>
                        <div className="message">{message}</div>
                     </div>

                     <div>
                        {!isUrlAttachedImageBroken && (
                           <img
                              className="attached-image"
                              src={image}
                              alt="attached-img"
                              onError={() => setIsUrlAttachedImageBroken(true)}
                           />
                        )}
                     </div>
                  </div>
               </div>
            </div>

            {/*-- OPEN NOTIFICATION --*/}
            <div
               className="open-notification"
               style={{ display: isMinimizedNotification ? 'none' : 'inline-block' }}
            >
               <div className="notification" onClick={() => setIsMinimizedNotification(true)}>
                  <div className="app-name">
                     <div>
                        {isUrlBadgeImageBroken ? (
                           <div className="default-badge">
                              <div className="background">
                                 <img className="badge" src={defaultBadge} alt="badge" />
                              </div>
                              {appName}
                           </div>
                        ) : (
                           <div className="custom-badge">
                              <img
                                 className="badge"
                                 src={badge}
                                 alt="badge"
                                 onError={() => {
                                    setIsUrlBadgeImageBroken(true);
                                 }}
                              />
                              {appName}
                           </div>
                        )}
                     </div>

                     <img className="close" src={logoClose} alt="logo-close" />
                  </div>

                  {!isUrlAttachedImageBroken && (
                     <div className="attached-image">
                        <img
                           src={image}
                           alt="attached-img"
                           onError={() => {
                              setIsUrlAttachedImageBroken(true);
                              setIsMinimizedNotification(true);
                           }}
                        />
                     </div>
                  )}

                  <div className="app-params">
                     <div className="title">{title}</div>
                     <div className="subtitle">{subtitle}</div>
                     <div className="message">{message}</div>
                  </div>
               </div>

               <div className="buttons">
                  {/* .filter(Boolean) exclude falsy values */}
                  {buttons && buttons.filter(Boolean).map((button: string) => <div>{button}</div>)}
               </div>
            </div>
         </div>
      </div>
   );
};

export default IOs;

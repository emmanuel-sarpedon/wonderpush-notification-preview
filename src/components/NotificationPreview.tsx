// REACT
import React, { useState } from 'react';

// COMPONENTS
import Android from './Android/Android';
import Ios from './IOs/IOs';

// UTILS
import { Platform } from '../types/Platform.d';

const NotificationPreview = () => {
   // Handlers
   const handleChangeValue = (e: (React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>), stateCallback: Function) => {
      e.target && stateCallback((e.target as HTMLInputElement).value);
   };

   // States
   const [appName, setAppName] = useState('ExampleApp');
   const [title, setTitle] = useState('Notification Preview');
   const [subtitle, setSubtitle] = useState('');
   const [message, setMessage] = useState('Preview your push notification');
   const [badgeUrl, setBadgeUrl] = useState('');
   const [iconUrl, setIconUrl] = useState('https://cdn.by.wonderpush.com/assets/images/logo/logo-icon-plain-256x256.png');
   const [attachedImageUrl, setAttachedImageUrl] = useState('https://cdn.by.wonderpush.com/assets/images/logo/logo-icon-plain-256x256.png');
   const [buttonName1, setButtonName1] = useState('Reply');
   const [buttonName2, setButtonName2] = useState('Ignore');
   const [buttonName3, setButtonName3] = useState('Cancel');
   const [platform, setPlatform] = useState('ios' as Platform);

   const platformOptions = [{
      label: 'Google Android',
      value: 'android',
   }, {
      label: 'iOS',
      value: 'ios',
   }, {
      label: 'Web: macOS',
      value: 'web:macos',
   }, {
      label: 'Web: Windows',
      value: 'web:windows',
   }, {
      label: 'Web: Android',
      value: 'web:android',
   }];

   const formFields = [{
      label: 'Your app name',
      value: appName,
      stateCallback: setAppName,
      HTMLTag: 'input',
      className: 'app-name',
   }, {
      label: 'Title',
      value: title,
      stateCallback: setTitle,
      HTMLTag: 'textarea',
      className: 'title',
   }, {
      label: 'Subtitle (only for ios)',
      value: subtitle,
      stateCallback: setSubtitle,
      HTMLTag: 'textarea',
      className: 'subtitle',
   }, {
      label: 'Message',
      value: message,
      stateCallback: setMessage,
      HTMLTag: 'textarea',
      className: 'message',
   }, {
      label: 'Badge',
      value: badgeUrl,
      stateCallback: setBadgeUrl,
      HTMLTag: 'input',
      className: 'badge',
   }, {
      label: 'Icon',
      value: iconUrl,
      stateCallback: setIconUrl,
      HTMLTag: 'input',
      className: 'icon',
   }, {
      label: 'Attached image',
      value: attachedImageUrl,
      stateCallback: setAttachedImageUrl,
      HTMLTag: 'input',
      className: 'attached-image',
   }, {
      label: 'Button 1',
      value: buttonName1,
      stateCallback: setButtonName1,
      HTMLTag: 'input',
      className: 'button-name',
   }, {
      label: 'Button 2',
      value: buttonName2,
      stateCallback: setButtonName2,
      HTMLTag: 'input',
      className: 'button-name',
   }, {
      label: 'Button 3',
      value: buttonName3,
      stateCallback: setButtonName3,
      HTMLTag: 'input',
      className: 'button-name',
   }];

   const platformProps = {
      appName: appName,
      title: title,
      subtitle: subtitle,
      message: message,
      icon: iconUrl,
      image: attachedImageUrl,
      buttons: [buttonName1, buttonName2, buttonName3],
      badge: badgeUrl,
      platform: platform,
   };

   // Render
   return (
      <div className='notification-preview'>
         <form className='form-notification-params'>
            {formFields.map(field => {
               return field.HTMLTag === 'input' ? (
                     <label>{field.label}
                        <input
                           type='text'
                           value={field.value}
                           onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeValue(e, field.stateCallback)}
                           className={field.className}
                        />
                     </label>) :
                  field.HTMLTag === 'textarea' && (
                     <label>{field.label}
                        <textarea
                           value={field.value}
                           onChange={(e: React.FormEvent<HTMLTextAreaElement>) => handleChangeValue(e, field.stateCallback)}
                           className={field.className}
                        />
                     </label>)
                  ;
            })}

            <label>Platform
               <select
                  value={platform as Platform}
                  onChange={(e: React.FormEvent<HTMLSelectElement>) => setPlatform((e.target as HTMLSelectElement).value as Platform)}>

                  {platformOptions.map(platform => {
                     return (
                        <option value={platform.value}>{platform.label}</option>
                     );
                  })}

               </select>
            </label>
         </form>

         <div className='preview'>
            {platform === 'android' && <Android {...platformProps} />}
            {platform === 'web:android' && <Android {...platformProps} />}
            {platform === 'ios' && <Ios {...platformProps} />}
         </div>
      </div>
   );
};

export default NotificationPreview;

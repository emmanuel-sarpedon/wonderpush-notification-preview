import React, { useState } from 'react';
import { Platform } from '../types/Platform.d';

import GoogleAndroid from './GoogleAndroid/GoogleAndroid';

const NotificationPreview = () => {
   const handleChangeValue = (e: (React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>), stateCallback: Function) => {
      e.target && stateCallback((e.target as HTMLInputElement).value);
   };

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
   const [platform] = useState('android' as Platform);
   // const [platform, setPlatform] = useState('android' as Platform);

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
         </form>

         {platform === 'android' && <GoogleAndroid {...platformProps} />}
      </div>
   );


};

export default NotificationPreview;

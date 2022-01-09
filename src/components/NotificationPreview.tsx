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
   const [iconUrl, setIconUrl] = useState('');
   const [badgeUrl, setBadgeUrl] = useState('');
   const [attachedImageUrl, setAttachedImageUrl] = useState('');
   const [buttonName1, setButtonName1] = useState('reply');
   const [buttonName2, setButtonName2] = useState('ignore');
   const [buttonName3, setButtonName3] = useState('cancel');
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
      inputClassName: 'app-name',
   }, {
      label: 'Title',
      value: title,
      stateCallback: setTitle,
      inputClassName: 'title',
   }, {
      label: 'Subtitle (only for ios)',
      value: subtitle,
      stateCallback: setSubtitle,
      inputClassName: 'subtitle',
   }, {
      label: 'Message',
      value: message,
      stateCallback: setMessage,
      inputClassName: 'message',
   }, {
      label: 'Badge',
      value: badgeUrl,
      stateCallback: setBadgeUrl,
      inputClassName: 'badge',
   }, {
      label: 'Icon',
      value: iconUrl,
      stateCallback: setIconUrl,
      inputClassName: 'icon',
   }, {
      label: 'Attached image',
      value: attachedImageUrl,
      stateCallback: setAttachedImageUrl,
      inputClassName: 'attached-image',
   }, {
      label: 'Button 1',
      value: buttonName1,
      stateCallback: setButtonName1,
      inputClassName: 'button-name',
   }, {
      label: 'Button 2',
      value: buttonName2,
      stateCallback: setButtonName2,
      inputClassName: 'button-name',
   }, {
      label: 'Button 3',
      value: buttonName3,
      stateCallback: setButtonName3,
      inputClassName: 'button-name',
   }];

   return (
      <div className='notification-preview'>
         <form className='form-notification-params'>
            {formFields.map(field => {
               return (
                  <label>{field.label}
                     <input type='text'
                            value={field.value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeValue(e, field.stateCallback)}
                            className={field.inputClassName}
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

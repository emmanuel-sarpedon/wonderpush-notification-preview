import React from 'react';

import GoogleAndroid from './GoogleAndroid';
import NotificationPreviewProps from './NotificationPreviewProps.d';
import logoWp from './assets/logo-wp.png';
import logoBell from './assets/logo-bell.svg';
import nyPicture from './assets/ny-location.webp';

const NotificationPreview = (props: NotificationPreviewProps) => {
   const childrenProps = {
      appName: props.appName || 'ExampleApp',
      title: props.title || 'Notification Preview',
      subtitle: props.subtitle || 'Lorem ipsum',
      message: props.message || 'Preview your push notification',
      icon: props.icon || logoWp,
      image: props.image || nyPicture,
      buttons: props.buttons?.length === 0 ? ['reply', 'ignore', 'cancel'] : props.buttons,
      badge: props.badge || logoBell
   };
   switch (props.platform) {
      case 'android':
         return <GoogleAndroid {...childrenProps} />;
      default:
         return <GoogleAndroid {...childrenProps} />;
   }
};

export default NotificationPreview;

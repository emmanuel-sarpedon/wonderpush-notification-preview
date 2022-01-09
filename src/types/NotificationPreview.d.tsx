import { Platform } from './Platform.d';

export default interface NotificationPreviewProps {
   appName?: string;
   title?: string;
   subtitle?: string;
   message?: string;
   icon?: string; // URL
   image?: string; // URL
   buttons?: string[];
   badge?: string; // URL
   platform: Platform;
}

import logoBluetooth from './assets/logo-bluetooth-grey.svg';
import logoWifi from './assets/logo-wifi-grey.svg';
import logoBattery from './assets/logo-battery-grey.svg';

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

const GoogleAndroid = () => {
   return (
      <div className="google-android">
         <div className="speakers">
            <div className="speaker"></div>
            <div className="speaker"></div>
            <div className="speaker"></div>
            <div className="speaker"></div>
            <div className="speaker"></div>
            <div className="speaker"></div>
         </div>
         <div className="volume volume-up"></div>
         <div className="volume volume-down"></div>
         <div className="lock"></div>
         <div className="screen">
            <div className="status-bar">
               {logosOnTopScreen.map((logo: any, index: number) => (
                  <img key={index} src={logo} alt="logo" />
               ))}
            </div>
            <div className="current-time">{currentTime}</div>
            <div className="current-date">{currentDate}</div>
         </div>
      </div>
   );
};

export default GoogleAndroid;

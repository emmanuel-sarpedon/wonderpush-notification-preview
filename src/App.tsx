import NotificationPreview from './NotificationPreview';

const App = () => {
   return (
      <div className='App'>
         <NotificationPreview
            appName={''}
            title={''}
            subtitle={''}
            message={''}
            icon={''}
            image={''}
            buttons={[]}
            badge={''}
            platform={'android'} />
      </div>
   );
};

export default App;

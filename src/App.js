import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Tabs from './components/Tabs';
import ProfileCard from './components/ProfileCard';
import BasicProfile from './components/BasicProfile';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
        <div className="container">
        <Aside />
        <div className="content content__container">
          <Tabs />
            <div className="main__container">
              <div className="main__container-left">
                <ProfileCard />
              </div>
              <div className="main__container-right">
                <BasicProfile />
                <Notifications />
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default App;

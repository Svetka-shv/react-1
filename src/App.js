import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  debugger
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/profile" render={() => <Profile />} />
          
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/users" render={()=> <UsersContainer />} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  )
}

export default App;

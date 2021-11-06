import React from 'react';
import Login from './components/login/login';
import { BrowserRouter,Switch, Route } from  'react-router-dom';
import  styles from './App.module.css';
import Maker from './components/maker/maker';
import Home from './components/home/home';


function App({authService}) {
  return (
    <div className={styles.app}>
    
     <BrowserRouter>
      <Switch>
        <Route exact path ="/home">
          <Home/>
        </Route>
        <Route  path="/login">
          <Login authService={authService}/>
        </Route>
      <Route path="/maker">
        <Maker authService={authService}/>
      </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
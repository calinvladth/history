import React from 'react';
import './App.css';
import './assets/style/index.sass'
import AppComponent from "./components";
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import Alerts from './components/alerts'

class App extends React.Component{

    options = {
      position: positions.BOTTOM_RIGHT,
      timeout: 5000,
      offset: '30px',
      transition: transitions.SCALE
    }


    render() {
        return (

                <div className="App">
                    <AlertProvider template={AlertTemplate} {...this.options}>
                        <Alerts/>
                        <AppComponent/>
                    </AlertProvider>
                </div>
        );
    }
}

export default App;

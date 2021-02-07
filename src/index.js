  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'; 

var config = {
    apiKey: "AIzaSyBMAYh7kQ-zx2FDJoC3dG2ODs5eWF_sos4",
    authDomain: "py3s1-6a115.firebaseapp.com",
    databaseURL: "https://py3s1-6a115.firebaseio.com",
    storageBucket: "py3s1-6a115.appspot.com",
}; 
firebase.initializeApp(config);

var database = firebase.database; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
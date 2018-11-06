import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'; 
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount()  {
        const config = {
            apiKey: 'AIzaSyBowSqYmuv9IMCNrBlXw0mfC3iK_WeqXHQ',
            authDomain: 'managerredux-b64f1.firebaseapp.com',
            databaseURL: 'https://managerredux-b64f1.firebaseio.com',
            projectId: 'managerredux-b64f1',
            storageBucket: 'managerredux-b64f1.appspot.com',
            messagingSenderId: '241023770492'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App; 
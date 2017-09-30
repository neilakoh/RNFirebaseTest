/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBgierMHihdeSVp4PVkElZdx7huplo9UAQ",
    authDomain: "basic-functions-app.firebaseapp.com",
    databaseURL: "https://basic-functions-app.firebaseio.com",
    projectId: "basic-functions-app",
    storageBucket: "basic-functions-app.appspot.com",
    messagingSenderId: "398229805665"
};
const FirebaseApp = firebase.initializeApp(firebaseConfig);

export default class firebaseTest extends Component {
  constructor(props, context) {
    super(props, context);

    // Fetching data from database
    FirebaseApp.database().ref().child('item').on('value', (snap) => {
      snap.forEach((child)=>{
        console.log("Key: ", child.key);
        console.log("Title: ", child.val());
      });
    });

    this.addItem = this.addItem.bind(this);
  }

  addItem() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add Item" onPress={this.addItem}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('firebaseTest', () => firebaseTest);

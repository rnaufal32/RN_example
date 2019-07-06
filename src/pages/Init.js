import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { goHome, goToAuth } from "../navigation";
import AsyncStorage from "@react-native-community/async-storage";

export default class Initialising extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('auth')
    .then(data => {
      if (data != null) {
        goHome()
      } else {
        goToAuth()
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
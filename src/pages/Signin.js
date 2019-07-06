import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import { Text, TextInput, Button } from "react-native-paper"
import AsyncStorage from '@react-native-community/async-storage';
import { goHome } from "../navigation";
import {Navigation} from 'react-native-navigation'
import { post, message } from "../service";

const {width, height} = Dimensions.get('window')

export default class Signin extends React.Component {

    constructor(props) {
        super(props)
        Navigation.events().bindComponent(this);
        this.state = {
            username: null,
            password: null,
            loading: false
        }
    }

    componentDidMount() {
    }

    masuk = () => {
      if (this.state.username == null || this.state.password == null) {
        message('Form Harap Diisi.')
      } else {
        this.setState({
            loading: true
        })
        const data = new FormData()
        data.append('username', this.state.username)
        data.append('password', this.state.password)

        AsyncStorage.setItem('auth', this.state.username)
        goHome()
      }
    }

    render() {
        return (
        <View style={{flex:1}}>
          <View style={[styles.container, {height: height - 350, backgroundColor: 'blue'}]}>
            <Text style={styles.welcome}>Guest Book</Text>
          </View>
          <ScrollView>
            <View style={styles.container}>
              <TextInput label='Nama Pengguna' value={this.state.username} onChangeText={username => this.setState({ username })} style={styles.input} onSubmitEditing={() => this.pass.focus()} />
              <TextInput label='Kata Sandi' ref={ref => this.pass = ref} value={this.state.password} onChangeText={password => this.setState({ password })} style={styles.input} secureTextEntry={true} onSubmitEditing={() => this.masuk()} />
              <Button mode="contained" loading={this.state.loading} onPress={this.masuk} color="blue">Masuk</Button>
              <View style={{paddingTop:20}}>
                <Text>Belum punya akun ? </Text>
                <Button mode="text" onPress={() => Navigation.push(this.props.componentId, {
                  component: {
                    name:'Signup',
                    options: {
                      topBar: {
                        height: 0
                      }
                    }
                  }
                })}>Daftar</Button>
              </View>
            </View>
          </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  input: {
    width: width - 40,
    fontSize: 18,
    height: 55,
    marginVertical:10
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
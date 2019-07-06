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
            nama: null,
            email: null,
            loading: false
        }
    }

    componentDidMount() {
    }

    masuk = () => {
      if (this.state.username == null || this.state.password == null || this.state.nama == null || this.state.email == null) {
        message('Form Harap Diisi.')
      } else {
        this.setState({
            loading: true
        })
        const data = new FormData()
        data.append('username', this.state.username)
        data.append('password', this.state.password)

        goHome()
      }
    }

    render() {
        return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={{backgroundColor:'white'}}>
                <Text style={styles.welcome}>Registrasi</Text>
                <View style={styles.container}>
                    <TextInput 
                        label='Nama Lengkap'
                        value={this.state.nama} 
                        onChangeText={nama => this.setState({ nama })} 
                        style={styles.input} 
                        onSubmitEditing={() => this.email.focus()} />
                    <TextInput 
                        label='E-mail'
                        value={this.state.email}
                        ref={ref => this.email = ref}
                        onChangeText={email => this.setState({ email })} 
                        style={styles.input} 
                        onSubmitEditing={() => this.username.focus()} />
                    <TextInput 
                        label='Nama Pengguna'
                        value={this.state.username}
                        ref={ref => this.username = ref}
                        onChangeText={username => this.setState({ username })} 
                        style={styles.input} 
                        onSubmitEditing={() => this.pass.focus()} />
                    <TextInput 
                        label='Kata Sandi' 
                        ref={ref => this.pass = ref} 
                        value={this.state.password} 
                        onChangeText={password => this.setState({ password })} 
                        style={styles.input} 
                        secureTextEntry={true} 
                        onSubmitEditing={() => this.masuk()} />
                </View>
                <Button 
                    mode="contained" 
                    loading={this.state.loading} 
                    onPress={this.masuk} 
                    color="blue" 
                    style={{margin:20}}>Daftar
                </Button>
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    padding:20
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
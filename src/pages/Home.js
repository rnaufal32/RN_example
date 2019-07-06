import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Card, Text, Title, FAB, IconButton, Colors, List } from "react-native-paper";
import {Navigation} from "react-native-navigation";
import {goToAuth} from '../navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { post } from "../service";

let Logout = null
Icon.getImageSource('power', 20, 'gray').then((source) => Logout = source);

const {width} = Dimensions.get('window')

export default class Home extends React.Component {

    static options(passProps) {
        return {
          topBar: {
            title: {
              text: 'Beranda'
            },
            rightButtons: [
                {
                    id: `logoutBtn`,
                    icon: Logout
                }
            ],
          }
        };
    }

    constructor(props) {
        super(props)
        Navigation.events().bindComponent(this);
        this.state = {
            search: null,
            data: []
        }
    }

    logout = async () => {
        try {
            AsyncStorage.clear()
            goToAuth()
        } catch (error) {
            console.log(error)
        }
    }

    navigationButtonPressed({ buttonId }) {
        switch (buttonId) {
            case 'logoutBtn':
                this.logout()
                break;
        
            default:
                break;
        }
    }

    openScan = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Scan'
            }
        })
    }

    fetch = () => {
        const data = new FormData
        if (this.state.search != null) {
            data.append('search', this.state.search)
        }
        post('scanned', data)
            .then((data) => {
                this.setState({
                    data: data.data
                })
            })
            .catch(err => this.setState({data: []}))
    }

    componentDidAppear() {
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcom Guys</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  }
})
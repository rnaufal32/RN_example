// import AsyncStorage from "@react-native-community/async-storage";
import {Alert} from 'react-native'

// let url = null

// if (__DEV__) {
//     url = 'https://sandbox.mountoya.id/app/mitra/mobile/'
// } else {
//     url = 'https://sandbox.mountoya.id/app/mitra/mobile/'
// }

// const getid = async () => {
//     return new Promise((resolve, reject) => {
//         try {
//             const waw = AsyncStorage.getItem('auth')
//             resolve(waw)
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// export const post = (uri, data) => {
//     return new Promise( async (resolve, reject) => {
//         const x = JSON.parse(await getid())
//         if (x) {
//             data.append('id', x.username)
//         }
//         fetch(`${url+uri}`, {
//             method: 'POST',
//             body: data
//         }).then((res) => res.json())
//         .then((res) => (res.success) ? resolve(res) : reject(res))
//         .catch(err => reject(err))
//     })
// }

export const message = (body, title = 'Guest Book') => {
    Alert.alert(title, body, [
        {text:'OK'}
    ])
}
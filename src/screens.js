import {Navigation} from 'react-native-navigation';

import Init from './pages/Init'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'

export function registerScreens() {
  Navigation.registerComponent('Initializing', (sc) => Init);
  Navigation.registerComponent('Signin', (sc) => Signin);
  Navigation.registerComponent('Signup', (sc) => Signup);
  Navigation.registerComponent('Home', (sc) => Home);

}
import React from 'react'
import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Signin',
      children: [
        {
          component: {
            name: 'Signin',
            options: {
              topBar: {
                height: 0
              }
            }
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Home',
      children: [
        {
          component: {
            name: 'Home'
          },
        },
      ],
    }
  }
})
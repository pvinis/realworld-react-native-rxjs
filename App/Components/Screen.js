import React from 'react'
import {
  View,
} from 'react-native'


export const Screen = props => (
  <View
    {...props}
    style={{
      flex: 1,
      backgroundColor: 'green',
      // ...props.style,
    }}
  />
)

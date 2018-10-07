import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class App extends React.Component {
  render() {
    const { props } = this
    console.log(props.articles)
    return (
      <FlatList
        style={{ flex: 1 }}
        data={props.articles}
        // keyExtractor={ item => item.slug }
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.title}!
            </Text>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

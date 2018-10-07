import React from 'react'
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native'
import {
  ArticleList,
} from '@Components'


export default
class GlobalArticles
  extends React.Component {
  render() {
    const { props } = this
    return (
      <ArticleList
        articles={props.articles}
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

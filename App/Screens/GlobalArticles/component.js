import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import {
  Screen,
  ArticleList,
} from '@Components'


export default
class GlobalArticles
  extends React.Component {
  render() {
    const { props } = this
    return (
      <Screen>
        <ArticleList
          articles={props.articles}
        />
      </Screen>
    )
  }
}

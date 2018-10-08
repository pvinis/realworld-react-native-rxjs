import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'
import moment from 'moment'


export default
class ArticleList
  extends React.Component {
  render() {
    const { props } = this
    return (
      <FlatList
        style={{ flex: 1 }}
        data={props.articles}
        keyExtractor={ item => item.slug }
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              paddingHorizontal: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                height: 30,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: item.author.image }}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    overflow: 'hidden',
                    marginRight: 10,
                  }}
                />
                <Text>
                  {item.author.username}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'grey',
                  }}
                >
                  {moment(item.createdAt).format('ddd DD MMM YYYY')}
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'darkgrey',
              }}
            >
              {item.description}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'black',
            }}
          />
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

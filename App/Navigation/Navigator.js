import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import R from 'ramda'

import {
  GlobalArticles,
} from '@Screens'


const Screens = R.reduce(
  (acc, next) => R.assoc(next, next, acc),
  {},
  [
    'GlobalArticles',
    'Home',
  ]
)

const Home = createBottomTabNavigator({
  GlobalArticles: { screen: GlobalArticles },
  GlobalArticles222: { screen: GlobalArticles },
})

export default createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: Screens.Home,
  }
)

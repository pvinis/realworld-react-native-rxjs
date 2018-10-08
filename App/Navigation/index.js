import R from 'ramda'


const ScreensList = [
  'GlobalArticles',
]

const Screens2 = R.reduce(
  (acc, next) => R.assoc(next, next, acc),
  // console.log,
  {},
  ScreensList
)

const Screens = {
  GlobalArticles: 'GlobalArticles',
}

console.log('+++Screens')
console.log(Screens)

import Navigator from './Navigator'
export { Navigator, Screens }

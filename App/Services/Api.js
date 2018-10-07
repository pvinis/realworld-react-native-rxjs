
import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  timeout: 5000,
})

const articles = () =>
  instance.get('/articles')

export default {
  articles,
}

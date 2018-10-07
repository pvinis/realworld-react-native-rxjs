import { of } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { requestData, debug } from '@Helpers/RxOperators'

import Api from '@Services/Api'


const ArticleListController = (
  component,
  input = {},
) => {
  const articles = of(true).pipe(
    requestData(() => Api.articles()),
    map(data => data.articles),
    startWith([]),
    debug('arti'),
  )

  return {
    input: {},
    output: {
      articles,
    },
    sub: {},
  }
}

export default ArticleListController

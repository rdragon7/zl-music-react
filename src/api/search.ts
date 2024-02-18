import zlRequest from './index'

export function getSearchSuggest(keywords: any) {
  return zlRequest.get({
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}

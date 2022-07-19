import {AuthActionCreators} from './auth'
import {ProductActionCreators} from './product'
import {ArticleActionCreators} from './article'

export const allActionCreators = {
  ...AuthActionCreators,
  ...ProductActionCreators,
  ...ArticleActionCreators
}
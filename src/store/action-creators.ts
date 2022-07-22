import {AuthActionCreators} from './auth'
import {ProductActionCreators} from './product'
import {ArticleActionCreators} from './article'
import {CartActionCreators} from './cart'
import {WishesActionCreators} from './wishes'

export const allActionCreators = {
  ...AuthActionCreators,
  ...ProductActionCreators,
  ...ArticleActionCreators,
  ...CartActionCreators,
  ...WishesActionCreators
}
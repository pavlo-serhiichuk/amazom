import {AuthActionCreators} from './auth'
import {ProductActionCreators} from './product'

export const allActionCreators = {
  ...AuthActionCreators,
  ...ProductActionCreators
}
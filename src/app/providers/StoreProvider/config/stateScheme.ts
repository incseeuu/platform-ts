import { type UserSchema } from 'entities.entites'
import { type AuthorizationSchema } from 'features/Authorization'

export interface StateScheme {
  user?: UserSchema
  authorization?: AuthorizationSchema
}

import { type UserSchema } from 'entities/User'
import { type AuthorizationSchema } from 'features/Authorization'

export interface StateScheme {
  user: UserSchema
  authorization?: AuthorizationSchema
}

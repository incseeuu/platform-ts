export interface AuthorizationSchema {
  login: string
  password: string
  errorMessage?: string | null
  isLoading: boolean
}

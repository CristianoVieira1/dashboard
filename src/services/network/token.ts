import { AxiosResponse } from 'axios'
import { TokenResponse } from '../../types/Auth'

import { encodingPromisesBodies } from '../../utils/encoded'
import API from '../axios'

const params = {
  username: 'superadmin@gesta.mobi',
  password: '@Teste123',
  grant_type: 'password'
}

export const generateToken = (): Promise<AxiosResponse<TokenResponse>> => {
  return API.post('/auth', encodingPromisesBodies(params), {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
  })
}

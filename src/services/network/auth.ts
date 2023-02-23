import { AxiosResponse } from 'axios'
import API from '../axios'

import { ISession } from '../../types/Session'

export function signin(
  username: string,
  password: string
): Promise<AxiosResponse<ISession>> {
  return API({
    method: 'POST',
    url: '/auth',
    data: { username, password }
  })
}

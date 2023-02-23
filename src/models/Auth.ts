const ACCESS_TOKEN_KEY = 'gesta_access_token'

export class Auth {
  async setAccessToken(accessToken: string): Promise<void> {
    const bearerAccessToken = `Bearer ${accessToken}`
    console.log('bearerAccessToken', bearerAccessToken)
    await window.localStorage.setItem(ACCESS_TOKEN_KEY, bearerAccessToken)
  }

  async clearAccessToken(): Promise<void> {
    await window.localStorage.removeItem(ACCESS_TOKEN_KEY)
  }

  async getAccessToken(): Promise<string> {
    const accessToken = await window.localStorage.getItem(ACCESS_TOKEN_KEY)
    return accessToken || ''
  }
}

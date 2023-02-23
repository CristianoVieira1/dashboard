import { ISession as SessionSchema } from '../types/Session'

export class Session {
  async get(): Promise<any | null> {
    const storage = await window.localStorage.getItem('@gesta-session')
    return storage ? JSON.parse(storage) : null
  }

  set(params: any): void {
    return window.localStorage.setItem('@gesta-session', JSON.stringify(params))
  }

  clearOldSession(): void {
    return window.localStorage.clear()
  }

  async mountSessionSchema(response: SessionSchema): Promise<SessionSchema> {
    const schema: SessionSchema = {
      username: response.username,
      email: response.email
    }

    await this.set({ username: schema.username })
    return schema
  }
}

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

import { Auth } from '../models/Auth'
import { Session } from '../models/Session'
import { signin } from '../services/network/auth'
import { WithChildren } from '../types'
import { ISession as SessionSchema } from '../types/Session'

interface Schema {
  session: SessionSchema
  removeSession: () => Promise<void>
  fetchLastSession: () => Promise<void>
  setSession: Dispatch<SetStateAction<SessionSchema>>
  updateAccessToken: (accessToken: string) => Promise<void>
  handleAuthentication: (username: string, password: string) => Promise<void>
}

export const SessionContext = createContext({} as Schema)

export const UserSessionProvider = ({ children }: WithChildren) => {
  const [session, setSession] = useState<SessionSchema>({} as SessionSchema)

  const fetchLastSession = async (): Promise<void> => {
    const currentSession = await new Session().get()
    setSession(currentSession)
  }

  const removeSession = async () => {
    await new Auth().clearAccessToken()
    setSession({} as SessionSchema)
  }

  async function handleAuthentication(
    username: string,
    password: string
  ): Promise<void> {
    const { data } = await signin(username, password)

    const sessionSchema = await new Session().mountSessionSchema(data)
    setSession((prevSession) => ({ ...prevSession, ...sessionSchema }))
    await new Session().set(sessionSchema)
  }

  const updateAccessToken = async (accessToken: string): Promise<void> => {
    await new Auth().setAccessToken(accessToken)
  }

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        removeSession,
        fetchLastSession,
        updateAccessToken,
        handleAuthentication
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)

  if (context) {
    return context
  }

  throw new Error(
    'Invalid useSession usage! It should be nested into UserSessionProvider.'
  )
}

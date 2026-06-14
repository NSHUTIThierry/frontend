import { createContext } from 'react'

export const SessionContext = createContext({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  switchSimulatedRole: () => {},
  setTab: () => {}
})

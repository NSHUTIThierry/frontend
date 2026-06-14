import React, { useState, useEffect } from 'react'
import { SessionContext } from './SessionContext'

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    // Initialize session from localStorage
    const storedToken = localStorage.getItem('agriconnect_token')
    const storedUser = localStorage.getItem('agriconnect_user')
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userData, authToken) => {
    setUser(userData)
    setToken(authToken)
    localStorage.setItem('agriconnect_token', authToken)
    localStorage.setItem('agriconnect_user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('agriconnect_token')
    localStorage.removeItem('agriconnect_user')
  }

  const switchSimulatedRole = (role) => {
    if (user) {
      const updatedUser = { ...user, role }
      setUser(updatedUser)
      localStorage.setItem('agriconnect_user', JSON.stringify(updatedUser))
    }
  }

  const setTab = (tabName) => {
    if (user) {
      const updatedUser = { ...user, activeTab: tabName }
      setUser(updatedUser)
    }
  }

  return (
    <SessionContext.Provider value={{ user, token, login, logout, switchSimulatedRole, setTab }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider

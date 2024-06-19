import { useContext } from 'react'
import { UserContext } from '../contexts'

export default function useUserContext () {
  const userContext = useContext(UserContext)
  if (!userContext) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return userContext
}

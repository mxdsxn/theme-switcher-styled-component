import { useEffect, useState, Dispatch, SetStateAction } from 'react'

const usePersistedTheme = <T>(key: string, initialState: any): [T, Dispatch<SetStateAction<T>>] => {
 const [state, setState] = useState(() => {
  const storageTheme = localStorage.getItem(key)
  if (!!storageTheme) {
   return storageTheme
  } else {
   return initialState
  }

 })

 useEffect(() => {
  localStorage.setItem(key, state)
 }, [key, state])

 return [state, setState]
}

export default usePersistedTheme
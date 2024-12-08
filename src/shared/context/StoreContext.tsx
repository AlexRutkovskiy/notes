'use client'

import { Provider } from 'react-redux'
import { store } from '@/shared/store'

interface StoreContextProps {
  children: React.ReactNode;
}

export const StoreContext =({
  children
}: StoreContextProps) => {
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}
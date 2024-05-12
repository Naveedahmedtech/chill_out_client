import React from 'react'
import { IChildrenProps } from '../../../types/types'

const CardLayout: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <div className='bg-background '>
      <div className='flex justify-center items-center flex-col min-h-screen '>
        {children}
      </div>
    </div>
  )
}

export default CardLayout

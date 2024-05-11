import React from 'react'

const CardLayout = ({ children }) => {
  return (
    <div className='bg-background '>
      <div className='flex justify-center items-center flex-col min-h-screen '>
        {children}
      </div>
    </div>
  )
}

export default CardLayout

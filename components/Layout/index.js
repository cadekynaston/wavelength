import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-indigo-900 p-8">
      {children}
    </div>
  )
}

export default Layout

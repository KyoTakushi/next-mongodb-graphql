import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="global-wrapper">
      {children}
      <style jsx>{`
        .global-wrapper {
          min-height: 100vh;
          padding: 0;
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default Layout
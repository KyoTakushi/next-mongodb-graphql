import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="flex">
        <div className="login-title">
          <div className="login-title__main">
            Savior
          </div>
          <div className="login-title__sub">
            Build your own media<br />
            SAVE YOURSELF .
          </div>
        </div>
        <div className="login-form-container">
          <form>
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
      <style jsx>{`
        .login-container {
          width: 800px;
          height: 400px;
          margin: auto;
          border-radius: 5px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px 3px rgba(0,0,0,0.1);
        }
        .login-title {
          font-size: 20px;
          width: 50%;
          text-align: center;
        }
        .login-title__main {
          font-size: 2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Login
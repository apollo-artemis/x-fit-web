import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import store from 'store'
import axios from 'api/axios'

const AuthRouter = () => {
  const [auth, setAuth] = useState<boolean>(true)

  useEffect(() => {})

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{auth ? <Outlet /> : <Navigate to='/login' replace />}</>
    // <>
    //   <Outlet />
    // </>
  )
}

export default AuthRouter

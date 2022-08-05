import React, { FormEvent } from 'react'

import { useInput } from 'hooks/useInput'
import style from './login.module.scss'

const Login = () => {
  const [id, setId] = useInput('')
  const [pw, setPw] = useInput('')

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(id, pw)
  }
  return (
    <div className={style.logindWrap}>
      <div className={style.logo}>
        <h2>X-FIT</h2>
      </div>
      <div className={style.loginForm}>
        <form onSubmit={handleLogin}>
          <input className={style.input} type='email' value={id} onChange={setId} />
          <input className={style.input} type='password' value={pw} onChange={setPw} />
          <button type='submit' className={style.loginBtn}>
            로그인
          </button>
        </form>
        <div>
          <button type='submit' className={style.signup}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

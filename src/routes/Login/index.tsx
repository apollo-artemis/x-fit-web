import React, { FormEvent, useState } from 'react'

import { useInput } from 'hooks/useInput'
import style from './login.module.scss'
import SignupModal from './SignupModal'
import { useNavigate } from 'react-router-dom'
import axios from 'api/axios'

const Login = () => {
  const [id, setId] = useInput('')
  const [pw, setPw] = useInput('')
  const [openSignup, setOpenSignup] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = {
      email: id,
      password: pw,
    }

    axios
      .post('/auth/register', body)
      .then((res) => {
        console.log(res.data)
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  const toggleSignup = () => {
    setOpenSignup((prev) => !prev)
  }
  return (
    <div className={style.logindWrap}>
      {openSignup && <SignupModal toggle={toggleSignup} />}
      <div className={style.logo}>
        <h2>X-FIT</h2>
      </div>
      <div className={style.loginForm}>
        <form onSubmit={handleLogin}>
          <input className={style.input} placeholder='example@gmail.com' type='email' value={id} onChange={setId} />
          <input
            className={style.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={pw}
            onChange={setPw}
          />
          <button type='submit' className={style.loginBtn}>
            로그인
          </button>
        </form>
        <div>
          <button onClick={toggleSignup} type='submit' className={style.signup}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

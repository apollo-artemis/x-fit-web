import axios from 'api/axios'
import ModalWrap from 'components/ModalWrap/'
import { useInput } from 'hooks/useInput'
import React, { FormEvent } from 'react'
import style from './signupModal.module.scss'

interface Props {
  toggle: () => void
}

const SignupModal = ({ toggle }: Props) => {
  const [email, setEmail] = useInput('')
  const [pw, setPw] = useInput('')
  const [confirmPw, setConfirmPw] = useInput('')
  const [nickname, setNickName] = useInput('')

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = {
      email,
      password: pw,
      birth: '1994-02-02',
      sex: 'male',
      height: 0,
      weight: 0,
    }
    try {
      await axios.post('/auth/register', body)
      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalWrap>
      <div className={style.inner}>
        <div className={style.head}>
          <p className={style.title}>회원가입</p>
          <button className={style.closeBtn} type='button' onClick={toggle}>
            X
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <input
            className={style.input}
            placeholder='example@gmail.com'
            type='email'
            value={email}
            onChange={setEmail}
          />
          {/* <input
            className={style.input}
            placeholder='닉네임을 입력해주세요.'
            type='text'
            value={nickname}
            onChange={setNickName}
          /> */}
          <input
            className={style.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={confirmPw}
            onChange={setConfirmPw}
          />
          <input
            className={style.input}
            placeholder='비밀번호를 한번더 입력해주세요. .'
            type='password'
            value={pw}
            onChange={setPw}
          />
          <button type='submit' className={style.signup}>
            회원가입
          </button>
        </form>
      </div>
    </ModalWrap>
  )
}

export default SignupModal

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
  const [confirmPwdValue, setConfirmPwdValue] = useInput('')
  const [nickname, setNickName] = useInput('')

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          <input
            className={style.input}
            placeholder='닉네임을 입력해주세요.'
            type='text'
            value={nickname}
            onChange={setNickName}
          />
          <input
            className={style.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={confirmPwdValue}
            onChange={setConfirmPwdValue}
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

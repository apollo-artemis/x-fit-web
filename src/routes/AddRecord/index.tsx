import axios from 'api/axios'
import { useInput } from 'hooks/useInput'
import React, { useEffect } from 'react'
import style from './addRecord.module.scss'

const AddRecord = () => {
  const [recordValue, setRecordValue] = useInput('')

  useEffect(() => {
    axios.get('/record').then((res) => {
      console.log(res)
    })
  }, [])

  const addRecord = () => {
    const body = {
      date: new Date(),
      exercise_name: 'clean',
      weight: 30,
      weight_unit: 'lb',
    }
    axios.post('/record', body).then((res) => {
      console.log(res)
    })
  }
  return (
    <div className={style.addRecordWrap}>
      <p className={style.title}>지난 기록 </p>
      <h2 className={style.exerciseName}>데드리프트 </h2>
      <ul className={style.lastRecord}>
        <li className={style.lastRecordItem}>
          <div className={style.date}>
            <p className={style.month}>JUL</p>
            <p className={style.day}>08일 월요일 18시</p>
          </div>
          <p>75lb</p>
        </li>

        <li className={style.lastRecordItem}>
          <div className={style.date}>
            <p className={style.month}>JUL</p>
            <p className={style.day}>08일 월요일 18시</p>
          </div>
          <p>75lb</p>
        </li>

        <li className={style.lastRecordItem}>
          <div className={style.date}>
            <p className={style.month}>JUL</p>
            <p className={style.day}>08일 월요일 18시</p>
          </div>
          <p>75lb</p>
        </li>
      </ul>
      <div className={style.recordInputWrap}>
        <p className={style.inputTitle}>나의 최고 무게를 입력하세요!</p>
        <form className={style.recordInputForm}>
          <input
            className={style.recordInput}
            placeholder='오늘 기록은?'
            value={recordValue}
            onChange={setRecordValue}
          />
          <span className={style.unit}>lb</span>
          <button className={style.addBtn} type='button' onClick={addRecord}>
            저장
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddRecord

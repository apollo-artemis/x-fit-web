import axios from 'axios'
import { useInput } from 'hooks/useInput'
import React from 'react'
import style from './addRecord.module.scss'

const AddRecord = () => {
  const [recordValue, setRecordValue] = useInput('')
  const addRecord = () => {
    const body = {
      date: new Date(),
      exercise_name: 'clean',
      weight: 30,
      weight_unit: 'lb',
    }
    axios.post('http://dev-api.masun129.com/record', body).then((res) => {
      console.log(res)
    })
  }
  return (
    <div className={style.addRecordWrap}>
      <h2>지난 기록 </h2>
      <ul>
        <li>
          <div className={style.date}>
            <p>JUL</p>
            <p>08</p>
          </div>
          <p>75lb</p>
        </li>
      </ul>
      <div className={style.recordInputWrap}>
        <form>
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

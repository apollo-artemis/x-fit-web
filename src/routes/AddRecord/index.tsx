import axios from 'api/axios'
import { useInput } from 'hooks/useInput'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IRecordItem } from 'types/record'
import style from './addRecord.module.scss'
import RecordItem from './RecordItem'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const AddRecord = () => {
  const today: Date = new Date()
  const [recordValue, setRecordValue] = useState<number>(0)
  const [date, setDate] = useState(today)
  const param = useParams()
  const [recordList, setRecordList] = useState<IRecordItem[]>([])
  const { exercise } = param

  useEffect(() => {
    console.log(param)
    getExercise()
  }, [])

  const getExercise = () => {
    axios.get(`/records?user_id=1&exercise_name=${exercise}`).then((res) => {
      console.log(res.data)
      setRecordList(res.data)
    })
  }

  const addRecord = () => {
    if (recordValue === 0) return
    const body = {
      date,
      exercise_name: exercise,
      weight: recordValue,
      unit: 'lb',
      repetition_maximum: 1,
    }

    console.log(body)
    axios.post('/record?user_id=1', body).then((res) => {
      getExercise()
    })
  }

  const handleWeight = (e: ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value)
    setRecordValue(number)
  }

  const handleDate = (e: any) => {
    // console.log(e)
    setDate(e)
  }
  return (
    <div className={style.addRecordWrap}>
      <p className={style.title}>지난 기록 </p>

      <h2 className={style.exerciseName}>데드리프트 </h2>
      <ul className={style.lastRecord}>
        {recordList?.map((item, idx) => (
          <RecordItem key={idx} item={item} />
        ))}
      </ul>
      <div className={style.recordInputWrap}>
        <p className={style.inputTitle}>나의 최고 무게를 입력하세요!</p>
        <form className={style.recordInputForm}>
          <DatePicker className={style.datePicker} selected={date} onChange={handleDate} />
          <input
            className={style.recordInput}
            type='number'
            placeholder='오늘 기록은?'
            value={recordValue}
            onChange={handleWeight}
          />
          {/* <input type='date' value={date} onChange={handleDate} /> */}
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

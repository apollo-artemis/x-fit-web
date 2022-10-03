import axios from 'api/axios'
import { useInput } from 'hooks/useInput'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IRecordItem } from 'types/record'
import style from './addRecord.module.scss'
import RecordItem from './RecordItem'
import DatePicker from 'react-datepicker'
import { ICalendar } from 'assets/svg/'

import 'react-datepicker/dist/react-datepicker.css'
import EmptyData from 'components/EmptyData'

interface ITitle {
  [key: string]: string
}

const AddRecord = () => {
  const today: Date = new Date()
  const [recordValue, setRecordValue] = useState<string>('')
  const [date, setDate] = useState(today)
  const param = useParams()
  const [recordList, setRecordList] = useState<IRecordItem[]>([])
  const [title, setTitle] = useState('')
  const { exercise } = param

  const headerTitle: ITitle = {
    DEAD_LIFT: '데드리프트',
    BENCH_PRESS: '밴치프레스',
    BACK_SQUAT: '백스쿼트',
    SHOULDER_PRESS: '숄더프레스',
  }

  useEffect(() => {
    getExercise()
    if (exercise) {
      setTitle(headerTitle[exercise])
    }
  }, [exercise])

  const getExercise = async () => {
    const res = await axios.get(`/records?exercise_name=${exercise}`)
    setRecordList(res.data)
  }

  const addRecord = () => {
    if (!recordValue) return
    const body = {
      date,
      exercise_name: exercise,
      weight: recordValue,
      unit: 'lb',
      repetition_maximum: 1,
    }

    axios.post('/record?', body).then((res) => {
      getExercise()
    })
  }

  const handleWeight = (e: ChangeEvent<HTMLInputElement>) => {
    const numberReg = /^[0-9]+$/
    const str = e.target.value
    if (str.match(numberReg) || str == '') setRecordValue(e.target.value)
  }

  const handleDate = (e: any) => {
    // console.log(e)
    setDate(e)
  }
  return (
    <div className={style.addRecordWrap}>
      <p className={style.title}>지난 기록 </p>

      <h2 className={style.exerciseName}>{title}</h2>
      {recordList.length > 0 ? (
        <ul className={style.lastRecord}>
          {recordList?.map((item, idx) => (
            <RecordItem key={idx} item={item} />
          ))}
        </ul>
      ) : (
        <EmptyData />
      )}
      <div className={style.recordInputWrap}>
        <p className={style.inputTitle}>나의 최고 무게를 입력하세요!</p>
        <form className={style.recordInputForm}>
          <div className={style.dataPickerWrap}>
            <label htmlFor='datapicker'>
              <ICalendar className={style.calendar} />
            </label>
            <DatePicker
              maxDate={today}
              id='datapicker'
              className={style.datePicker}
              dateFormat='yyyy.MM.dd'
              selected={date}
              onChange={handleDate}
            />
          </div>
          <div>
            <input
              className={style.recordInput}
              type='text'
              placeholder='기록을 입력해주세요'
              value={recordValue}
              onChange={handleWeight}
            />
            {/* <input type='date' value={date} onChange={handleDate} /> */}
            <span className={style.unit}>LB</span>
          </div>
        </form>
        <button className={style.addBtn} type='button' onClick={addRecord}>
          저장
        </button>
      </div>
    </div>
  )
}

export default AddRecord

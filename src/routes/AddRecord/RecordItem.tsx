import React from 'react'
import style from './addRecord.module.scss'
import dayjs from 'dayjs'
import { IRecordItem } from 'types/record'

interface Props {
  item: IRecordItem
}

const RecordItem = ({ item }: Props) => {
  return (
    <li className={style.lastRecordItem}>
      <div className={style.date}>
        <p className={style.month}>JUL</p>
        {/* <p className={style.day}>08일 월요일 18시</p> */}
        <p className={style.day}>{dayjs(item.date).locale('ko').format('YYYY년 MM월 DD일')}</p>
      </div>
      <p>
        {item.weight} {item.weight_unit}
      </p>
    </li>
  )
}

export default RecordItem

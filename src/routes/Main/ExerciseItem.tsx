import React from 'react'
import { Link } from 'react-router-dom'
import style from './main.module.scss'

interface Props {
  item: {
    ko: string
    en: string
  }
}

const ExerciseItem = ({ item }: Props) => {
  return (
    <li className={style.exerciseItem}>
      <Link to='add_record'>
        <div className={style.imgWrap} />
        <p className={style.en}>{item.en}</p>
        <p className={style.ko}>{item.ko}</p>
        <p className={style.record}>등록된 기록이 없어요</p>
      </Link>
    </li>
  )
}

export default ExerciseItem

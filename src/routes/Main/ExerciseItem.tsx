import React from 'react'
import { Link } from 'react-router-dom'
import style from './main.module.scss'
import * as exerciseIcon from 'assets/svg/'

interface Props {
  item: {
    ko: string
    en: string
    param: string
  }
}

interface IexerciseIcon {
  [key: string]: any
}

const ExerciseItem = ({ item }: Props) => {
  const exercise: IexerciseIcon = {
    // deadLift: <exerciseIcon.IDeadlift className={style.exerciseIcon} />,
    DEAD_LIFT: <exerciseIcon.IDeadlift className={style.exerciseIcon} />,
    BENCH_PRESS: <exerciseIcon.IDeadlift className={style.exerciseIcon} />,
    BACK_SQUAT: <exerciseIcon.ISquat className={style.exerciseIcon} />,
    SHOULDER_PRESS: <exerciseIcon.IPress className={style.exerciseIcon} />,
  }
  return (
    <li className={style.exerciseItem}>
      <Link to={`add_record/${item.param}`}>
        <div className={style.imgWrap}>
          {exercise[item.param]}
          {/* <exerciseIcon.IDeadlift className={style.exerciseIcon} /> */}
        </div>
        <p className={style.en}>{item.en}</p>
        <p className={style.ko}>{item.ko}</p>
        {/* <p className={style.record}>등록된 기록이 없어요</p> */}
      </Link>
    </li>
  )
}

export default ExerciseItem

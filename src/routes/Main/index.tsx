import axios from 'api/axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExerciseItem from './ExerciseItem'
import style from './main.module.scss'

const recordItem = [
  {
    ko: '데드리프트',
    en: 'Deadlift',
    param: 'DEAD_LIFT',
  },
  {
    ko: '벤치프레스',
    en: 'Bench press',
    param: 'BENCH_PRESS',
  },
  {
    ko: '백스쿼트',
    en: 'Back squat',
    param: 'BACK_SQUAT',
  },
  {
    ko: '숄더프레스',
    en: 'Shoulder press',
    param: 'SHOULDER_PRESS',
  },
]
const Main = () => {
  return (
    <div className={style.main}>
      <h2>1RM 기록</h2>
      <ul className={style.recordList}>
        {recordItem?.map((item) => (
          <ExerciseItem item={item} key={item.en} />
        ))}
      </ul>
      <div className={style.surveyLink}>
        <a
          className={style.link}
          href='https://docs.google.com/forms/u/1/d/1pKG9UjcdsEaMhamKdtI8dCr4gUVSobe5th-9y6Ka8AI/edit?usp=sharing'
        >
          설문조사 참여하기
        </a>
      </div>
    </div>
  )
}

export default Main

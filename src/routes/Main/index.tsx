import React, { useState } from 'react'
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
  // 한국어 밑에 영어? 영어밑에 한국어? 모할까?

  return (
    <div className={style.main}>
      <h2>기록하고 싶은 운동을 눌러주세요!</h2>
      <ul className={style.recordList}>
        {recordItem?.map((item) => (
          <ExerciseItem item={item} key={item.en} />
        ))}
      </ul>
    </div>
  )
}

export default Main

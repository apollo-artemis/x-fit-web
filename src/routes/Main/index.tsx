import React, { useState } from 'react'
import ExerciseItem from './ExerciseItem'
import style from './main.module.scss'

import { IDeadlift } from 'assets/svg'

const recordItem = [
  {
    ko: '데드리프트',
    en: 'Deadlift',
    param: 'deadlift',
  },
  {
    ko: '벤치프레스',
    en: 'Bench press',
    param: 'banch_press',
  },
  {
    ko: '백스쿼트',
    en: 'Back squat',
    param: 'back_squat',
  },
  {
    ko: '숄더프레스',
    en: 'Shoulder press',
    param: 'shoulder_press',
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
        {/* <li className={style.exerciseItem}>
          <div className={style.imgWrap} />
          <p className={style.en}>Deadlift</p>
          <p className={style.ko}>데드리프트</p>
          <p className={style.record}>등록된 기록이 없어요</p>
        </li>
        <li className={style.exerciseItem}>
          <div className={style.imgWrap} />
          <p className={style.en}>Deadlift</p>
          <p className={style.ko}>데드리프트</p>
          <p className={style.record}>등록된 기록이 없어요</p>
        </li>
        <li className={style.exerciseItem}>
          <div className={style.imgWrap} />
          <p className={style.en}>Deadlift</p>
          <p className={style.ko}>데드리프트</p>
          <p className={style.record}>등록된 기록이 없어요</p>
        </li> */}
        {/* <li>클린</li>
        <li>숄더프레스</li>
        <li>프론트스쿼트</li>
        <li>백스쿼트</li> */}
      </ul>
    </div>
  )
}

export default Main

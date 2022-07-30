import { ChangeEvent, SetStateAction, useState } from 'react'

type Props = [string, (e: ChangeEvent) => void, () => void]

export const useInput = (initValue: string): Props => {
  const [value, setter] = useState(initValue)
  const onChangeForm = (e: ChangeEvent<any>) => {
    setter(e.target.value)
  }
  const reset = () => {
    setter('')
  }

  return [value, onChangeForm, reset]
}

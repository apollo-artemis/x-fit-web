import axios from 'api/axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import store from 'store'

export const useGetAllReord = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const me = async () => {
      try {
        const token = store.get('token')
        if (!token) navigate('/login')

        // const splitToken = token.split(' ')
        axios.defaults.headers.common.authorization = token
      } catch (error) {
        store.remove('token')
      }
    }
    me()
  }, [])
}

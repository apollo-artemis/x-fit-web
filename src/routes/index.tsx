import { Routes, Route, NavLink } from 'react-router-dom'
import Main from './Main'
import style from 'routes/routes.module.scss'
import AddRecord from './AddRecord'
import Login from './Login'

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.wrap}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add_record/:exercise' element={<AddRecord />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

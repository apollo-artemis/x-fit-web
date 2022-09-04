import { Routes, Route, NavLink } from 'react-router-dom'
import Main from './Main'
import style from 'routes/routes.module.scss'
import AddRecord from './AddRecord'
import Login from './Login'
import AuthRouter from './AuthRouter'

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.wrap}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<AuthRouter />}>
            <Route path='/' element={<Main />} />
            <Route path='/add_record/:exercise' element={<AddRecord />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

import { useRecoilValue } from 'recoil'

import Game from './Game'
import Login from './Login'

import isLoggedInSelector from '../recoil/isLoggedInSelector'

const App = function () {
  const isLoggedIn = useRecoilValue(isLoggedInSelector)
  return isLoggedIn ? <Game /> : <Login />
}

export default App
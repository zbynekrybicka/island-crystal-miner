import { useRecoilValue } from 'recoil'
import isLoggedInSelector from '../recoil/isLoggedInSelector'
import Game from './Game'
import Login from './Login'

function App() {
  const isLoggedIn = useRecoilValue(isLoggedInSelector)
  return isLoggedIn ? <Game /> : <Login />
}

export default App;

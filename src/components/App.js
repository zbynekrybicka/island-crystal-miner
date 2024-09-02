import { useRecoilValue } from 'recoil'
import isLoggedInSelector from '../recoil/isLoggedInSelector'
import Game from './Game'
import Login from './Login'

export default function () {
  const isLoggedIn = useRecoilValue(isLoggedInSelector)
  return isLoggedIn ? <Game /> : <Login />
}

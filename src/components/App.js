import { useRecoilValue } from 'recoil'
import isLoggedInSelector from '../recoil/isLoggedInSelector'

function App() {
  const isLoggedIn = useRecoilValue(isLoggedInSelector)
  return isLoggedIn ? <Game /> : <Login />
}

export default App;

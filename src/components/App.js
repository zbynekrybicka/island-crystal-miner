import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import Game from './Game'
import Login from './Login'

import userAtom from '../recoil/userAtom'

import isLoggedInSelector from '../recoil/isLoggedInSelector'

import getGameDataAction from '../actions/getGameDataAction'

const App = function () {
  const beforeLoading = "beforeLoading"
  const [status, setStatus] = useState(beforeLoading)
  const [loader, setLoader] = useState(false)

  const isLoggedIn = useRecoilValue(isLoggedInSelector)
  const setUser = useSetRecoilState(userAtom)

  if (status === beforeLoading) {
    getGameDataAction(setLoader, setStatus, setUser)
  }
  return loader ? <h1>Loading...</h1> : (isLoggedIn ? <Game /> : <Login />)
}

export default App
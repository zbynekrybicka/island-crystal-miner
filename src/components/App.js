import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import Game from './Game'
import Login from './Login'

import userAtom from '../recoil/userAtom'
import suppliedMachinesAtom from '../recoil/suppliedMachinesAtom'
import availableMachinesAtom from '../recoil/availableMachinesAtom'
import selectedMachinesAtom from '../recoil/selectedMachinesAtom'

import isLoggedInSelector from '../recoil/isLoggedInSelector'

import getGameDataAction from '../actions/getGameDataAction'

const App = function () {
  const beforeLoading = "beforeLoading"
  const [status, setStatus] = useState(beforeLoading)
  const [loader, setLoader] = useState(false)

  const isLoggedIn = useRecoilValue(isLoggedInSelector)
  const setUser = useSetRecoilState(userAtom)

  const setSuppliedMachines = useSetRecoilState(suppliedMachinesAtom)
  const setAvailableMachines = useSetRecoilState(availableMachinesAtom)
  const setSelectedMachines = useSetRecoilState(selectedMachinesAtom)


  if (status === beforeLoading) {
    getGameDataAction(setLoader, setStatus, setUser, setSuppliedMachines, setAvailableMachines, setSelectedMachines)
  }
  return loader ? <h1>Loading...</h1> : (isLoggedIn ? <Game /> : <Login />)
}

export default App
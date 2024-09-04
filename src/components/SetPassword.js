import { useState } from "react"
import { useSetRecoilState } from "recoil"

import SendButton from "./SendButton"

import errorMessageAtom from '../recoil/errorMessageAtom'
import postSetPasswordAction from '../actions/postSetPasswordAction'

const SetPassword = function() {
    const [loader, setLoader] = useState(false)
    const setErrorMessage = useSetRecoilState(errorMessageAtom)

    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const passwordState = { password, confirm }

    return <>
        <input type="password" placeholder="Heslo" onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="Potvrdit heslo" onChange={e => setConfirm(e.target.value)} />
        <SendButton label="Nastavit heslo"
            loader={loader}
            onClick={() => postSetPasswordAction(setLoader, setErrorMessage, passwordState)} />
    </>
}

export default SetPassword
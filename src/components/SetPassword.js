import { useRecoilState, useSetRecoilState } from "recoil"
import loaderAtom from "../recoil/loaderAtom"
import errorMessageAtom from '../recoil/errorMessageAtom'
import postSetPasswordAction from '../actions/postSetPasswordAction'
import SendButton from "./SendButton"
import { useState } from "react"

export default function() {
    const [loader, setLoader] = useRecoilState(loaderAtom)
    const setErrorMessage = useSetRecoilState(errorMessageAtom)

    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const passwordState = { password, confirm }

    return <>
        <input type="password" placeholder="Heslo" />
        <input type="password" placeholder="Potvrdit heslo" />
        <SendButton label="Nastavit heslo"
            loader={loader}
            onClick={() => postSetPasswordAction(setLoader, setErrorMessage, passwordState)} />
    </>
}
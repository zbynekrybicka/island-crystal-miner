import { useRecoilState, useSetRecoilState } from "recoil"
import signUpLoaderAtom from '../recoil/loaderAtom'
import SendButton from './SendButton'
import postSignUpAction from "../actions/postSignUpAction"
import errorMessageAtom from "../recoil/errorMessageAtom"
import messageAtom from '../recoil/messageAtom'
import { useState } from "react"

export default function() {
    const [loader, setLoader] = useRecoilState(signUpLoaderAtom)
    const [email, setEmail] = useState("")
    const setErrorMessage = useSetRecoilState(errorMessageAtom)
    const setSuccessMessage = useSetRecoilState(messageAtom)

    return <>
        <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <SendButton label="Zaregistrovat se"
            loader={loader}
            onClick={() => postSignUpAction(setLoader, setErrorMessage, setSuccessMessage, { email })} />
    </>
}
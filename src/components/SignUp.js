import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"

import SendButton from './SendButton'

import signUpLoaderAtom from '../recoil/loaderAtom'
import errorMessageAtom from "../recoil/errorMessageAtom"
import messageAtom from '../recoil/messageAtom'
import loginPageAtom from "../recoil/loginPageAtom"

import postSignUpAction from "../actions/postSignUpAction"
import loginPageGotoAction from "../actions/loginPageGotoAction"

const SignUp = function() {
    const [loader, setLoader] = useRecoilState(signUpLoaderAtom)
    const [email, setEmail] = useState("")
    const setErrorMessage = useSetRecoilState(errorMessageAtom)
    const setSuccessMessage = useSetRecoilState(messageAtom)
    const setLoginPage = useSetRecoilState(loginPageAtom)

    return <>
        <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <SendButton label="Zaregistrovat se"
            loader={loader}
            onClick={() => postSignUpAction(setLoader, setErrorMessage, setSuccessMessage, { email })} />
        <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "signIn")}>Přihlásit se</a>
    </>
}

export default SignUp
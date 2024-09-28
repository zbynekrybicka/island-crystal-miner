import { useState } from "react"
import { useSetRecoilState } from "recoil"

import SendButton from './SendButton'

import errorMessageAtom from "../recoil/errorMessageAtom"
import messageAtom from '../recoil/messageAtom'
import loginPageAtom from "../recoil/loginPageAtom"

import postSignUpAction from "../actions/postSignUpAction"
import loginPageGotoAction from "../actions/loginPageGotoAction"

const SignUp = function() {
    const [loader, setLoader] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const setErrorMessage = useSetRecoilState(errorMessageAtom)
    const setSuccessMessage = useSetRecoilState(messageAtom)
    const setLoginPage = useSetRecoilState(loginPageAtom)

    return <>
        <input type="text" placeholder="Jméno" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <SendButton label="Zaregistrovat se"
            loader={loader}
            onClick={() => postSignUpAction(setLoader, setErrorMessage, setSuccessMessage, { name, email })} />

        <div className="last-first">
            <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "signIn")}>Přihlásit se</a>
        </div>
    </>
}

export default SignUp
import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import postSignInAction from '../actions/postSignInAction'
import signInLoaderAtom from '../recoil/loaderAtom'
import errorMessageAtom from '../recoil/errorMessageAtom'
import userAtom from '../recoil/userAtom'
import SendButton from "./SendButton"
import loginPageAtom from "../recoil/loginPageAtom"
import loginPageGotoAction from '../actions/loginPageGotoAction'

export default function() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loader, setLoader] = useRecoilState(signInLoaderAtom)

    const setErrorMessage = useSetRecoilState(errorMessageAtom)
    const setUser = useSetRecoilState(userAtom)
    const setLoginPage = useSetRecoilState(loginPageAtom)
    
    const signInValues = { email, password }
    return <>
        <input type="text" 
            placeholder="E-mail" 
            value={email} 
            onChange={e => setEmail(e.target.value)} />
        <input type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} />
        <SendButton label="Přihlásit se" 
            loader={loader} 
            onClick={() => postSignInAction(setLoader, setErrorMessage, signInValues, setUser)} />

        <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "signUp")}>Zaregistrovat se</a>
        <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "forgottenPassword")}>Zapomenuté heslo</a>
    </>
}
import { useState } from "react"
import { useSetRecoilState } from "recoil"

import errorMessageAtom from '../recoil/errorMessageAtom'
import userAtom from '../recoil/userAtom'
import SendButton from "./SendButton"
import loginPageAtom from "../recoil/loginPageAtom"
import equipmentAtom from "../recoil/equipmentAtom"

import postSignInAction from '../actions/postSignInAction'
import loginPageGotoAction from '../actions/loginPageGotoAction'

const SignIn = function() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loader, setLoader] = useState(false)
    const [, setStatus] = useState("notLoaded")

    const setErrorMessage = useSetRecoilState(errorMessageAtom)
    const setUser = useSetRecoilState(userAtom)
    const setLoginPage = useSetRecoilState(loginPageAtom)
    const setEquipment = useSetRecoilState(equipmentAtom)
    
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
            onClick={() => postSignInAction(setLoader, setErrorMessage, signInValues, setStatus, setUser, setEquipment)} />

        <div className="last-first">
            <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "signUp")}>Zaregistrovat se</a>
            <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "forgottenPassword")}>Zapomenuté heslo</a>
        </div>
    </>
}

export default SignIn
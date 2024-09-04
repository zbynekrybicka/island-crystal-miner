import { useState } from "react"
import { useSetRecoilState } from "recoil"

import SendButton from './SendButton'

import loginPageAtom from "../recoil/loginPageAtom"

import loginPageGotoAction from "../actions/loginPageGotoAction"
import postClearPasswordAction from '../actions/postClearPasswordAction'

const ForgottenPassword = function() {
    const [loader, setLoader] = useState(false)
    const setLoginPage = useSetRecoilState(loginPageAtom)

    return <>
        <input type="text" placeholder="E-mail" />
        <SendButton label="Obnovit heslo"
            loader={loader}
            onClick={() => postClearPasswordAction(setLoader)} />
        <a href="#" onClick={e => loginPageGotoAction(e, setLoginPage, "signIn")}>Přihlásit se</a>
    </>
}

export default ForgottenPassword
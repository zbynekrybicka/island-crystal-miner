import loaderAtom from "../recoil/loaderAtom"
import postClearPasswordAction from '../actions/postClearPasswordAction'
import { useRecoilState, useSetRecoilState } from "recoil"
import SendButton from './SendButton'
import loginPageGotoAction from "../actions/loginPageGotoAction"
import loginPageAtom from "../recoil/loginPageAtom"

const ForgottenPassword = function() {
    const [loader, setLoader] = useRecoilState(loaderAtom)
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
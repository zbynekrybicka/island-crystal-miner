import { useState } from "react"
import { useRecoilState } from "recoil"
import postSingInAction from '../actions/postSingInAction'

export default function() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loader, setLoader] = useRecoilState(singInLoaderAtom)

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
            onClick={() => postSingInAction(setLoader, signInValues)} />
    </>
}
import { useRecoilState } from "recoil"
import loaderAtom from "../recoil/loaderAtom"
import postSetPasswordAction from '../actions/postSetPasswordAction'
import SendButton from "./SendButton"

export default function() {
    const [loader, setLoader] = useRecoilState(loaderAtom)

    return <>
        <input type="password" placeholder="Heslo" />
        <input type="password" placeholder="Potvrdit heslo" />
        <SendButton label="Nastavit heslo"
            loader={loader}
            onClick={() => postSetPasswordAction(setLoader)} />
    </>
}
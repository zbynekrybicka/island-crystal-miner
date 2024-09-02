import { useRecoilState } from "recoil"
import signUpLoaderAtom from '../recoil/loaderAtom'
import SendButton from './SendButton'
import postSignUpAction from "../actions/postSignUpAction"

export default function() {
    const [loader, setLoader] = useRecoilState(signUpLoaderAtom)

    return <>
        <input type="text" placeholder="E-mail" />
        <SendButton label="Zaregistrovat se"
            loader={loader}
            onClick={() => postSignUpAction(setLoader)} />
    </>
}
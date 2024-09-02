import loaderAtom from "../recoil/loaderAtom"
import postClearPasswordAction from '../actions/postClearPasswordAction'

export default function() {
    const [loader, setLoader] = useRecoilState(loaderAtom)

    return <>
        <input type="text" placeholder="E-mail" />
        <SendButton label="Obnovit heslo"
            loader={loader}
            onClick={() => postClearPasswordAction(setLoader)} />
    </>
}
import { useRecoilValue } from "recoil"
import verifyEmailSelector from "../recoil/verifyEmailSelector"


export default function() {
    const verifyEmailResult = useRecoilValue(verifyEmailSelector)

    return <>{verifyEmailResult ? "E-mail byl úspěšně verifikován" : "E-mail nebyl verifikován, zkuste to znovu."}</>
}
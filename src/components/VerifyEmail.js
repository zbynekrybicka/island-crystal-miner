import { useRecoilValue } from "recoil"

import verifyEmailSelector from "../recoil/verifyEmailSelector"


const VerifyEmail = function() {
    const verifyEmailResult = useRecoilValue(verifyEmailSelector)

    return <>{verifyEmailResult ? "E-mail byl úspěšně verifikován" : "E-mail nebyl verifikován, zkuste to znovu."}</>
}

export default VerifyEmail
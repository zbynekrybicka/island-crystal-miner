import { useRecoilValue } from "recoil";

import SignIn from './SignIn'
import SignUp from './SignUp'
import VerifyEmail from './VerifyEmail'
import ForgottenPassword from './ForgottenPassword'
import SetPassword from './SetPassword'

import loginPageSelector from "../recoil/loginPageSelector";


const Login = function () {
    const loginPage = useRecoilValue(loginPageSelector)
    switch (loginPage) {
        case 'signUp': return <SignUp />
        case 'verifyEmail': return <VerifyEmail />
        case 'forgottenPassword': return <ForgottenPassword />
        case 'setPassword': return <SetPassword />
        default: return <SignIn />
    }
}

export default Login
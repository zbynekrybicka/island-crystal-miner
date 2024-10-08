import { axios } from '../constants'

const getVerifyEmailAction = function(setLoader, setErrorMessage, setSuccessMessage, uuid) {
    setLoader(true)
    axios.get('/users/verify-email?uuid=' + uuid)
        .then(() => setSuccessMessage("Váš e-mail byl úspěšně ověřen. Můžete se přihlásit."))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}


export default getVerifyEmailAction
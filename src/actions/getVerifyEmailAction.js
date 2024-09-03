import axios from 'axios'
import { baseUrl } from '../constants'

export default function(setLoader, setErrorMessage, setSuccessMessage) {
    setLoader(true)
    axios.get(baseUrl + '/users/verify-email')
        .then(() => setSuccessMessage("Váš e-mail byl úspěšně ověřen. Můžete se přihlásit."))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}

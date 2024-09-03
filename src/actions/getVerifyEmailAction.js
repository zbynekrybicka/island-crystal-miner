import axios from 'axios'
import { baseUrl } from '../constants'

export default function(setLoader, setErrorMessage, setSuccessMessage, uuid) {
    setLoader(true)
    axios.get(baseUrl + '/users/verify-email?uuid=' + uuid)
        .then(() => setSuccessMessage("Váš e-mail byl úspěšně ověřen. Můžete se přihlásit."))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}

import axios from 'axios'
import { baseUrl } from '../constants'

export default function(setLoader, setErrorMessage, setSuccessMessage, signUpValues) {
    setLoader(true)
    axios.post(baseUrl + '/users/signIn', signUpValues)
        .then(() => setSuccessMessage("Byl jste úspěšně zaregistrován. Registraci ověřte v e-mailu."))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}

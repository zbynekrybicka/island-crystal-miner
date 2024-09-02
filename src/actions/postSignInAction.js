import axios from 'axios'
import { baseUrl } from '../constants'

export default function(setLoader, setErrorMessage, signInValues, setUser) {
    setLoader(true)
    axios.post(baseUrl + '/users/signIn', signInValues)
        .then(res => setUser(res.data))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}

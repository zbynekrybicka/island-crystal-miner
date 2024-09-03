import axios from "axios";
import { baseUrl } from '../constants'

export default function(setLoader, setErrorMessage, password) {
    setLoader(true)
    axios.post(baseUrl + '/users/password', {password})
        .then(() => {})
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}
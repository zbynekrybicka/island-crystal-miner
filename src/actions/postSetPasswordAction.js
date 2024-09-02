import axios from "axios";
import { baseUrl } from '../constants'

export default function(setLoader, setErrorMessage, passwordState) {
    setLoader(true)
    axios.post(baseUrl + '/users/password', passwordState)
        .then(() => {})
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}
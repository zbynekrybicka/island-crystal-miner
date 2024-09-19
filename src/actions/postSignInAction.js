import { axios } from '../constants'

const postSignInAction = function(setLoader, setErrorMessage, signInValues, setUser) {
    setLoader(true)
    axios.post('/users/sign-in', signInValues, { withCredentials: true })
        .then(res => setUser(res.data))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}

export default postSignInAction
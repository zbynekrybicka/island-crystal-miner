import { axios } from '../constants'
import getGameDataAction from './getGameDataAction'

const postSignInAction = function(setLoader, setErrorMessage, signInValues, setStatus, setUser, setEquipment) {
    setLoader(true)
    axios.post('/users/sign-in', signInValues, { withCredentials: true })
        .then(() => getGameDataAction(setLoader, setStatus, setUser, setEquipment))
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))
}

export default postSignInAction
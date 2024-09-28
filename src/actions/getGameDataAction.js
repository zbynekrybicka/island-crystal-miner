import { axios } from '../constants'

const getGameDataAction = function(setLoader, setStatus, setUser, setEquipment) {
    setLoader(true)
    setStatus("loading")
    axios.get('/users', { withCredentials: true })
        .then(res => {
            if (res.data.user) {
                setUser(res.data.user)
            }
            if (res.data.equipment) {
                setEquipment(res.data.equipment)
            }
            setStatus("loaded")
        })
        .catch(() => setStatus("notLoaded"))
        .finally(() => setLoader(false))
}


export default getGameDataAction
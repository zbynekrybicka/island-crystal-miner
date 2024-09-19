import { axios } from '../constants'

const getGameDataAction = function(setLoader, setStatus, setUser) {
    setLoader(true)
    setStatus("loading")
    axios.get('/users', { withCredentials: true })
        .then(res => {
            setUser(res.data)
            setStatus("loaded")
        })
        .catch(() => setStatus("notLoaded"))
        .finally(() => setLoader(false))
}


export default getGameDataAction
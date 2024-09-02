import axios from "axios";

export default function(setLoader, setErrorMessage, setSuccessMessage) {
    setLoader(true)
    axios.post(baseUrl + '/users/clear-password', {})
        .then(() => {
            setSuccessMessage("Požadavek na obnovu hesla byl přijat.")
            setLoginPage("signIn")
        })
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))

}
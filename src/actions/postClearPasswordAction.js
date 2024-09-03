import axios from "axios";
import { baseUrl } from '../constants' 

const postClearPasswordAction = function(setLoader, setErrorMessage, setSuccessMessage, setLoginPage, email) {
    setLoader(true)
    axios.post(baseUrl + '/users/clear-password', email)
        .then(() => {
            setSuccessMessage("Požadavek na obnovu hesla byl přijat.")
            setLoginPage("signIn")
        })
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))

}

export default postClearPasswordAction
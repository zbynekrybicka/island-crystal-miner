import axios from "axios";
import { baseUrl } from '../constants' 

export default function(setLoader, setErrorMessage, setSuccessMessage, setLoginPage) {
    setLoader(true)
    axios.post(baseUrl + '/users/clear-password', {})
        .then(() => {
            setSuccessMessage("Požadavek na obnovu hesla byl přijat.")
            setLoginPage("signIn")
        })
        .catch(res => setErrorMessage(res.error))
        .finally(() => setLoader(false))

}
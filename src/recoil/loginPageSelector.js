import { selector } from "recoil";
import loginPageAtom from "./loginPageAtom";

export default selector({
    key: "loginPageSelector",
    get: ({get}) => {
        const params = new URLSearchParams(window.location.search)
        switch (params.get('action')) {
            case "verifyEmail":
                return "verifyEmail"
            case "setPassword":
                return "setPassword"
            default:
                return get(loginPageAtom)
        }
        
    }
})
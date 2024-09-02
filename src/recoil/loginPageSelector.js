import { selector } from "recoil";

export default selector({
    key: "loginPageSelector",
    get: ({get}) => "signIn"
})
import { atom } from "recoil";
import { userAtom } from '../defaults'

export default atom({
    key: "userAtom",
    default: userAtom
})
import { atom } from "recoil";
import { suppliedMachinesAtom } from '../defaults'

export default atom({
    key: "suppliedMachinesAtom",
    default: suppliedMachinesAtom
})
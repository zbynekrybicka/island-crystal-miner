import { atom } from "recoil";
import { selectedMachinesAtom } from '../defaults'

export default atom({
    key: "selectedMachinesAtom",
    default: selectedMachinesAtom
})
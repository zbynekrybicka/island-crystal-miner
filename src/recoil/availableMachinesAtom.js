import { atom } from "recoil";
import { availableMachinesAtom } from "../defaults";

export default atom({
    key: "availableMachinesAtom",
    default: availableMachinesAtom
})
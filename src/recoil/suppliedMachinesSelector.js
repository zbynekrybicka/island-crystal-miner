import { selector } from "recoil";
import suppliedMachinesAtom from "./suppliedMachinesAtom";

export default selector({
    key: "suppliedMachinesSelector",
    get: ({get}) => get(suppliedMachinesAtom)?.map(id => ({
        title: "Stroj ev. " + id
    })) || []
})
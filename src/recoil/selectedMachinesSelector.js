import { selector } from "recoil";
import selectedMachinesAtom from "./selectedMachinesAtom";

export default selector({
    key: "selectedMachinesSelector",
    get: ({get}) => get(selectedMachinesAtom).map(id => ({
        title: "Stroj ev. " + id
    }))
})
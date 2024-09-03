import { selector } from "recoil";
import selectedMachinesSelector from "./selectedMachinesSelector";

export default selector({
    key: "miningMachinesSelector",
    get: ({get}) => get(selectedMachinesSelector).filter(m => m.type === "miningMachine")
})
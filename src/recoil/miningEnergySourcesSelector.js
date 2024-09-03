import { selector } from "recoil";
import selectedMachinesSelector from "./selectedMachinesSelector";

export default selector({
    key: "miningEnergySourcesSelector",
    get: ({get}) => get(selectedMachinesSelector).filter(m => m.type === "energySource")
})
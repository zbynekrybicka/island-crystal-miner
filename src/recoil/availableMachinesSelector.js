import { selector } from "recoil";
import availableMachinesAtom from "./availableMachinesAtom";

export default selector({
    key: "availableMachinesSelector",
    get: ({get}) => get(availableMachinesAtom)?.map(id => ({
        title: "Stroj ev. " + id
    })) || []
})
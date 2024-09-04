import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import MachineList from "./MachineList"
import SelectedMachine from "./SelectedMachine"

import errorMessageAtom from "../recoil/errorMessageAtom"
import availableMachinesAtom from "../recoil/availableMachinesAtom"
import selectedMachinesAtom from "../recoil/selectedMachinesAtom"

import selectedMachinesSelector from "../recoil/selectedMachinesSelector"

import dismissEquipmentAction from '../actions/dismissEquipmentAction'

const MachineListSelected = function() {
    const [availableMachines, setAvailableMachines] = useRecoilState(availableMachinesAtom)
    const [selectedMachines, setSelectedMachines] = useRecoilState(selectedMachinesAtom)

    const setErrorMessage = useSetRecoilState(errorMessageAtom)

    const selectedMachinesList = useRecoilValue(selectedMachinesSelector)
    
    const dismissEquipmentActionParams = [
        setErrorMessage, setSelectedMachines, setAvailableMachines,
        selectedMachines, availableMachines
    ]

    return <MachineList
        MachineItemTemplate={SelectedMachine}
        fromMachinesSelector={selectedMachinesList}
        machineActionArray={[ dismissEquipmentAction(...dismissEquipmentActionParams) ]}
    />

}

export default MachineListSelected
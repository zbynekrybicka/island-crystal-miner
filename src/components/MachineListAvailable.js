import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import MachineList from "./MachineList"
import AvailableMachine from "./AvailableMachine"

import errorMessageAtom from "../recoil/errorMessageAtom"
import crystalAtom from "../recoil/crystalAtom"
import availableMachinesAtom from "../recoil/availableMachinesAtom"
import suppliedMachinesAtom from "../recoil/suppliedMachinesAtom"
import selectedMachinesAtom from "../recoil/selectedMachinesAtom"

import availableMachinesSelector from "../recoil/availableMachinesSelector"

import sellEquipmentAction from "../actions/sellEquipmentAction"
import selectEquipmentAction from '../actions/selectEquipmentAction'

const MachineListAvailable = function() {
    const [crystal, setCrystal] = useRecoilState(crystalAtom)
    const [availableMachines, setAvailableMachines] = useRecoilState(availableMachinesAtom)
    const [suppliedMachines, setSuppliedMachines] = useRecoilState(suppliedMachinesAtom)
    const [selectedMachines, setSelectedMachines] = useRecoilState(selectedMachinesAtom)

    const setErrorMessage = useSetRecoilState(errorMessageAtom)

    const availableMachinesList = useRecoilValue(availableMachinesSelector)

    const sellEquipmentActionParams = [
        setErrorMessage, setCrystal, setAvailableMachines, setSuppliedMachines,
        crystal, availableMachines, suppliedMachines
    ]
    const selectEquipmentActionParams = [
        setErrorMessage, setAvailableMachines, setSelectedMachines,
        availableMachines, selectedMachines
    ]

    return <MachineList
        MachineItemTemplate={AvailableMachine}
        fromMachinesSelector={availableMachinesList}
        machineActionArray={[ sellEquipmentAction(...sellEquipmentActionParams), selectEquipmentAction(...selectEquipmentActionParams) ]}
    />

}

export default MachineListAvailable
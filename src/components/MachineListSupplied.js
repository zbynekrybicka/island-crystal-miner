import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"

import MachineList from "./MachineList"
import SuppliedMachine from "./SuppliedMachine"

import errorMessageAtom from "../recoil/errorMessageAtom"
import crystalAtom from "../recoil/crystalAtom"
import suppliedMachinesAtom from "../recoil/suppliedMachinesAtom"
import availableMachinesAtom from "../recoil/availableMachinesAtom"

import suppliedMachinesSelector from "../recoil/suppliedMachinesSelector"

import buyEquipmentAction from "../actions/buyEquipmentAction"

const MachineListSupplied = function() {
    const [crystal, setCrystal] = useRecoilState(crystalAtom)
    const [suppliedMachines, setSuppliedMachines] = useRecoilState(suppliedMachinesAtom)
    const [availableMachines, setAvailableMachines] = useRecoilState(availableMachinesAtom)

    const setErrorMessage = useResetRecoilState(errorMessageAtom)

    const suppliedMachinesList = useRecoilValue(suppliedMachinesSelector)


    const buyEquipmentActionParams = [
        setErrorMessage, setCrystal, setSuppliedMachines, setAvailableMachines, 
        crystal, suppliedMachines, availableMachines
    ]

    return <MachineList
        MachineItemTemplate={SuppliedMachine}
        fromMachinesSelector={suppliedMachinesList}
        machineActionArray={[ buyEquipmentAction(...buyEquipmentActionParams) ]}
    />
}

export default MachineListSupplied
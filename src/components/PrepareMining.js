import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import MachineList from './MachineList'
import SuppliedMachine from './SuppliedMachine'
import AvailableMachine from './AvailableMachine'
import SelectedMachine from './SelectedMachine'

import errorMessageAtom from '../recoil/errorMessageAtom'
import crystalAtom from '../recoil/crystalAtom'
import userAtom from '../recoil/userAtom'
import suppliedMachinesAtom from '../recoil/suppliedMachinesAtom'
import availableMachinesAtom from '../recoil/availableMachinesAtom'
import selectedMachinesAtom from '../recoil/selectedMachinesAtom'

import suppliedMachinesSelector from '../recoil/suppliedMachinesSelector'
import availableMachinesSelector from '../recoil/availableMachinesSelector'
import selectedMachinesSelector from '../recoil/selectedMachinesSelector'

import buyEquipmentAction from '../actions/buyEquipmentAction'
import sellEquipmentAction from '../actions/sellEquipmentAction'
import selectEquipmentAction from '../actions/selectEquipmentAction'
import dismissEquipmentAction from '../actions/dismissEquipmentAction'

const PrepareMining = function() {
    const [crystal, setCrystal] = useRecoilState(crystalAtom)
    const [suppliedMachines, setSuppliedMachines] = useRecoilState(suppliedMachinesAtom)
    const [availableMachines, setAvailableMachines] = useRecoilState(availableMachinesAtom)
    const [selectedMachines, setSelectedMachines] = useRecoilState(selectedMachinesAtom)

    const { name } = useRecoilValue(userAtom)

    const suppliedMachinesList = useRecoilValue(suppliedMachinesSelector)
    const availableMachinesList = useRecoilValue(availableMachinesSelector)
    const selectedMachinesList = useRecoilValue(selectedMachinesSelector)

    const setErrorMessage = useResetRecoilState(errorMessageAtom)

    const buyEquipmentActionParams = [
        setErrorMessage, setCrystal, setSuppliedMachines, setAvailableMachines, 
        crystal, suppliedMachines, availableMachines
    ]
    const sellEquipmentActionParams = [
        setErrorMessage, setCrystal, setAvailableMachines, setSuppliedMachines,
        crystal, availableMachines, suppliedMachines
    ]
    const selectEquipmentActionParams = [
        setErrorMessage, setAvailableMachines, setSelectedMachines,
        availableMachines, selectedMachines
    ]
    const dismissEquipmentActionParams = [
        setErrorMessage, setSelectedMachines, setAvailableMachines,
        selectedMachines, availableMachines
    ]
    return <>
        <h1>Jste přihlášen jako {name}</h1>
        <h2>Máte krystalů: {crystal}</h2>
        <MachineList
            MachineItemTemplate={SuppliedMachine}
            fromMachinesSelector={suppliedMachinesList}
            machineActionArray={[ buyEquipmentAction(...buyEquipmentActionParams) ]}
        />
        <MachineList
            MachineItemTemplate={AvailableMachine}
            fromMachinesSelector={availableMachinesList}
            machineActionArray={[ sellEquipmentAction(...sellEquipmentActionParams), selectEquipmentAction(...selectEquipmentActionParams) ]}
        />
        <MachineList
            MachineItemTemplate={SelectedMachine}
            fromMachinesSelector={selectedMachinesList}
            machineActionArray={[ dismissEquipmentAction(...dismissEquipmentActionParams) ]}
        />
    </>
}

export default PrepareMining
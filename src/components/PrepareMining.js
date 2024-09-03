import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import MachineList from './MachineList'
import SuppliedMachine from './SuppliedMachine'

import crystalAtom from '../recoil/crystalAtom'
import userAtom from '../recoil/userAtom'
import suppliedMachinesAtom from '../recoil/suppliedMachinesAtom'
import availableMachinesAtom from '../recoil/availableMachinesAtom'
import errorMessageAtom from '../recoil/errorMessageAtom'
import machineListLoaderAtom from '../recoil/machineListLoaderAtom'

import suppliedMachinesSelector from '../recoil/suppliedMachinesSelector'

import buyEquipmentAction from '../actions/buyEquipmentAction'
import sellEquipmentAction from '../actions/sellEquipmentAction'
import selectEquipmentAction from '../actions/selectEquipmentAction'
import dismissEquipmentAction from '../actions/dismissEquipmentAction'

const PrepareMining = function() {
    const [crystal, setCrystal] = useRecoilState(crystalAtom)
    const [loader, setLoader] = useRecoilState(machineListLoaderAtom)
    const [suppliedMachines, setSuppliedMachines] = useRecoilState(suppliedMachinesAtom)
    const [availableMachines, setAvailableMachines] = useRecoilState(availableMachinesAtom)

    const { name } = useRecoilValue(userAtom)

    const suppliedMachinesList = useRecoilValue(suppliedMachinesSelector)
    const availableMachinesList = useRecoilValue(availableMachinesSelector)
    const selectedMachinesList = useRecoilValue(selectedMachinesList)

    const setErrorMessage = useResetRecoilState(errorMessageAtom)

    const buyEquipmentActionParams = [
        setLoader, setErrorMessage, setCrystal, setSuppliedMachines, setAvailableMachines, 
        crystal, suppliedMachines, availableMachines
    ]
    const sellEquipmentActionParams = [
        setLoader, setErrorMessage, setCrystal, setAvailableMachines, setSuppliedMachines,
        crystal, availableMachines, suppliedMachines
    ]
    const selectEquipmentActionParams = [
        setLoader, setErrorMessage, setAvailableMachines, setSelectedMachines,
        availableMachines, selectedMachines
    ]
    const dismissEquipmentActionParams = [
        setLoader, setErrorMessage, setSelectedMachines, setAvailableMachines,
        selectedMachines, availableMachines
    ]
    return <>
        <h1>Jste přihlášen jako {name}</h1>
        <h2>Máte krystalů: {crystal}</h2>
        <MachineList
            loader={loader}
            MachineItemTemplate={SuppliedMachine}
            fromMachinesSelector={suppliedMachinesList}
            machineActionArray={[ buyEquipmentAction(buyEquipmentActionParams) ]}
        />
        <MachineList
            loader={loader}
            MachineItemTemplate={AvailableMachine}
            fromMachinesSelector={availableMachinesList}
            machineActionToArray={[ sellEquipmentAction(sellEquipmentActionParams), selectEquipmentAction(selectEquipmentActionParams) ]}
        />
        <MachineList
            loader={loader}
            MachineItemTemplate={SelectedMachine}
            fromMachinesSelector={selectedMachinesList}
            machineActionToArray={[ dismissEquipmentAction(dismissEquipmentActionParams) ]}
        />
    </>
}

export default PrepareMining
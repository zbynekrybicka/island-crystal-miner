import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'

import MachineList from './MachineList'

import crystalAtom from '../recoil/crystalAtom'
import userAtom from '../recoil/userAtom'
import suppliedMachinesAtom from '../recoil/suppliedMachinesAtom'
import availableMachinesAtom from '../recoil/availableMachinesAtom'
import errorMessageAtom from '../recoil/errorMessageAtom'
import suppliedMachinesSelector from '../recoil/suppliedMachinesSelector'
import machineListLoader from '../recoil/machineListLoader'

import buyEquipmentAction from '../actions/buyEquipmentAction'

const PrepareMining = function() {
    const [crystal, setCrystal] = useRecoilState(crystalAtom)
    const [loader, setLoader] = useRecoilState(machineListLoader)
    const [suppliedMachines, setSuppliedMachines] = useRecoilState(suppliedMachinesAtom)
    const [availableMachines, setAvailableMachines] = useRecoilState(availableMachinesAtom)

    const { name } = useRecoilValue(userAtom)
    const suppliedMachinesList = useRecoilValue(suppliedMachinesSelector)

    const setErrorMessage = useResetRecoilState(errorMessageAtom)


    return <>
        <h1>Jste přihlášen jako {name}</h1>
        <h2>Máte krystalů: {crystal}</h2>
        <MachineList 
            loader={loader}
            fromMachinesSelector={suppliedMachinesList}
            machineActionArray={[ buyEquipmentAction(
                setLoader, 
                setErrorMessage, 
                setCrystal, 
                setSuppliedMachines, 
                setAvailableMachines, 
                
                crystal, 
                suppliedMachines, 
                availableMachines
            ) ]}
        />
    </>
}

export default PrepareMining
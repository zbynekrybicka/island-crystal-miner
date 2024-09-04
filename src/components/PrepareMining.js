import { useRecoilValue } from 'recoil'

import MachineListSupplied from './MachineListSupplied'
import MachineListAvailable from './MachineListAvailable'
import MachineListSelected from './MachineListSelected'

import crystalAtom from '../recoil/crystalAtom'
import userAtom from '../recoil/userAtom'



const PrepareMining = function() {

    const { name } = useRecoilValue(userAtom)
    const crystal = useRecoilValue(crystalAtom)



    return <>
        <h1>Jste přihlášen jako {name}</h1>
        <h2>Máte krystalů: {crystal}</h2>
        <MachineListSupplied />
        <MachineListAvailable />
        <MachineListSelected />
    </>
}

export default PrepareMining
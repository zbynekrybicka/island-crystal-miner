import { useRecoilValue } from 'recoil'

import MachineListSupplied from './MachineListSupplied'
import MachineListAvailable from './MachineListAvailable'
import MachineListSelected from './MachineListSelected'

import crystalAtom from '../recoil/crystalAtom'
import userAtom from '../recoil/userAtom'



const PrepareMining = function() {

    const { name } = useRecoilValue(userAtom)
    const crystal = useRecoilValue(crystalAtom)



    return <div className="prepare-mining">
        <div className="panel">
            <div>Jste přihlášen jako {name}</div>
            <div>Máte krystalů: {crystal}</div>
        </div>
        <div class="machines-lists">
            <MachineListSupplied />
            <MachineListAvailable />
            <MachineListSelected />
        </div>
    </div>
}

export default PrepareMining
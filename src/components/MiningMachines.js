import { useRecoilValue } from "recoil"

import selectMiningMachineAction from '../actions/selectMiningMachineAction'

import miningMachinesSelector from '../recoil/miningMachinesSelector'

const MiningMachines = function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => selectMiningMachineAction()}></button>
    </>
}

export default MiningMachines
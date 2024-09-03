import { useRecoilValue } from "recoil"
import miningMachinesSelector from '../recoil/miningMachinesSelector'
import selectMiningMachineAction from '../actions/selectMiningMachineAction'

const MiningMachines = function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => selectMiningMachineAction()}></button>
    </>
}

export default MiningMachines
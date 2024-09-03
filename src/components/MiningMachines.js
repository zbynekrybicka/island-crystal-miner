import { useRecoilValue } from "recoil"
import miningMachinesSelector from '../recoil/miningMachinesSelector'
import selectMiningMachineAction from '../actions/selectMiningMachineAction'

export default function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => selectMiningMachineAction()}></button>
    </>
}
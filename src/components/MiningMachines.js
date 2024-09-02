import { useRecoilValue } from "recoil"
import miningMachinesSelector from '../recoil/miningMachinesSelector'

export default function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => selectMiningMachineAction()}></button>
    </>
}
import { useRecoilValue } from 'recoil'
import mineAction from '../actions/mineAction'
import miningMachinesSelector from '../recoil/miningMachinesSelector'

export default function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => mineAction()}></button>
    </>
}
import { useRecoilValue } from 'recoil'
import mineAction from '../actions/mineAction'

export default function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => mineAction()}></button>
    </>
}
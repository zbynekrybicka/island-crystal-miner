import { useRecoilValue } from "recoil"

import miningEnergySourcesSelector from '../recoil/miningEnergySourcesSelector'
import chargeBatteryAction from '../actions/chargeBatteryAction'

export default function() {
    const miningEnergySources = useRecoilValue(miningEnergySourcesSelector)

    return <>
        <button onClick={() => chargeBatteryAction()}></button>
    </>
}
import { useRecoilValue } from "recoil"

import miningEnergySourcesSelector from '../recoil/miningEnergySourcesSelector'
import chargeBatteryAction from '../actions/chargeBatteryAction'

const EnergySources = function() {
    const miningEnergySources = useRecoilValue(miningEnergySourcesSelector)

    return <>
        <button onClick={() => chargeBatteryAction()}></button>
    </>
}

export default EnergySources 
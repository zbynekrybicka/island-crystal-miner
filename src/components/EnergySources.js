import { useRecoilValue } from "recoil"

import chargeBatteryAction from '../actions/chargeBatteryAction'

import miningEnergySourcesSelector from '../recoil/miningEnergySourcesSelector'

const EnergySources = function() {
    const miningEnergySources = useRecoilValue(miningEnergySourcesSelector)

    return <>
        <button onClick={() => chargeBatteryAction()}></button>
    </>
}

export default EnergySources 
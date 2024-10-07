import { useRecoilValue } from "recoil"

import MachineList from './MachineList'
import EnergySource from "./EnergySource"

// import chargeBatteryAction from '../actions/chargeBatteryAction'

import miningEnergySourcesSelector from '../recoil/miningEnergySourcesSelector'

const EnergySources = function() {
    const miningEnergySources = useRecoilValue(miningEnergySourcesSelector)

    return <><h2>Zdroje energie</h2>
        <MachineList loader={false}
            MachineItemTemplate={EnergySource}
            fromMachinesSelector={miningEnergySources}
            machineActionArray={[]}
        />
    </>
}

export default EnergySources 
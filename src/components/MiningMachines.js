import { useRecoilValue } from "recoil"

import MachineList from "./MachineList"
import MiningMachine from './MiningMachine'

import selectMiningMachineAction from '../actions/selectMiningMachineAction'

import miningMachinesSelector from '../recoil/miningMachinesSelector'

const MiningMachines = function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <><h2>Těžební stroje</h2>
        <MachineList loader={false}
            MachineItemTemplate={MiningMachine}
            fromMachinesSelector={miningMachines}
            machineActionArray={[selectMiningMachineAction()]}
        />
    </>
}

export default MiningMachines
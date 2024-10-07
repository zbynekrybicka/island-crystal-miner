import { useRecoilValue } from 'recoil'

// import mineAction from '../actions/mineAction'

import miningMachinesSelector from '../recoil/miningMachinesSelector'

const Map = function() {
    const miningMachines = useRecoilValue(miningMachinesSelector)

    return <>
        <button onClick={() => {}}>Těžit</button>
    </>
}

export default Map
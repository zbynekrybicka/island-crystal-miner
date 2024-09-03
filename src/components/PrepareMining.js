import { useRecoilValue } from 'recoil'

import MachineList from './MachineList'

import crystalAtom from '../recoil/crystalAtom'

const PrepareMining = function() {
    const crystal = useRecoilValue(crystalAtom)

    return <>
        <MachineList />
    </>
}

export default PrepareMining
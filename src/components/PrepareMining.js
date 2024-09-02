import { useRecoilValue } from 'recoil'

import MachineList from './MachineList'

import crystalAtom from '../recoil/crystalAtom'

export default function() {
    const crystal = useRecoilValue(crystalAtom)

    return <>
        <MachineList />
    </>
}
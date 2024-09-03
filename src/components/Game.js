import { useRecoilValue } from "recoil"
import inGameSelector from '../recoil/inGameSelector'
import ActionMining from './ActionMining'
import PrepareMining from './PrepareMining'

export default function () {
    const inGame = useRecoilValue(inGameSelector)
    return inGame ? <ActionMining /> : <PrepareMining />
}
import { useRecoilValue } from "recoil"
import inGameSelector from '../recoil/inGameSelector'
import ActionMining from './ActionMining'
import PrepareMining from './PrepareMining'

const Game = function () {
    const inGame = useRecoilValue(inGameSelector)
    return inGame ? <ActionMining /> : <PrepareMining />
}

export default Game
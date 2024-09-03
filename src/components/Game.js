import { useRecoilValue } from "recoil"

import ActionMining from './ActionMining'
import PrepareMining from './PrepareMining'

import inGameSelector from '../recoil/inGameSelector'

const Game = function () {
    const inGame = useRecoilValue(inGameSelector)
    return inGame ? <ActionMining /> : <PrepareMining />
}

export default Game
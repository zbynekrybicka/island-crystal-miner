import { useRecoilValue } from "recoil"

import ActionMining from './ActionMining'
import PrepareMining from './PrepareMining'

import inGameSelector from '../recoil/inGameSelector'

const Game = function () {
    const inGame = useRecoilValue(inGameSelector)
    return <div className="game-frame">{inGame ? <ActionMining /> : <PrepareMining />}</div>
}

export default Game
import { useRecoilValue } from "recoil"

import ActionMining from './ActionMining'
import PrepareMining from './PrepareMining'

function Game() {
    const inGame = useRecoilValue(inGameSelector)
    return inGame ? <ActionMining /> : <PrepareMining />
}

export default Game
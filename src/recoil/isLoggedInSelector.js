import { selector } from 'recoil'
import userAtom from './userAtom'

export default selector({
    key: 'isLoggedInSelector',
    get: ({get}) => !!get(userAtom) 
})
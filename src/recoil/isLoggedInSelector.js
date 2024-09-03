import { selector } from 'recoil'
import userAtom from './userAtom'

export default selector({
    key: 'isLoggedInSelector',
    get: ({get}) => {
        const user = get(userAtom) 
        if (!user) {
            return false
        }
        if (!user.isValidUser) {
            return false
        }
        return true
    }
})
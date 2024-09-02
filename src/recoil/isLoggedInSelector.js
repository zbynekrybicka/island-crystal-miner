import { selector } from 'recoil'

export default selector({
    key: 'isLoggedInSelector',
    get: ({get}) => !!get(userAtom) 
})
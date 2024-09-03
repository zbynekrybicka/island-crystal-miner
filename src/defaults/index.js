import dev from './devDefaults'
import prod from './prodDefaults'

const data = {...prod, ...dev}

const userAtom = data.userAtom

export { userAtom } 
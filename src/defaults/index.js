import dev from './devDefaults'
import prod from './prodDefaults'

const data = {...prod, ...dev}

const userAtom = data.userAtom
const suppliedMachinesAtom = data.suppliedMachinesAtom
const availableMachinesAtom = data.availableMachinesAtom
const selectedMachinesAtom = data.selectedMachinesAtom

export { userAtom, suppliedMachinesAtom, availableMachinesAtom, selectedMachinesAtom } 
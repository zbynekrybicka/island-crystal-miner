import { axios } from '../constants'

const sellEquipmentAction = (
    setErrorMessage, 
    setAvailableMachines, 
    setSelectedMachines, 
    
    availableMachines,
    selectedMachines) => (setLoader, index) => {
        setLoader(true)
        axios.post('/equipment/select', { machine_id: availableMachines[index] })
            .then(() => {
                const m_availableMachines = [...availableMachines]
                const m_selectedMachineId = m_availableMachines.splice(index, 1)
                setAvailableMachines(m_availableMachines)

                const m_selectedMachines = [...selectedMachines]
                m_selectedMachines.push(...m_selectedMachineId)
                setSelectedMachines(m_selectedMachines)
            })
            .catch(res => setErrorMessage(res.error))
            .finally(() => setLoader(false))
}

export default sellEquipmentAction
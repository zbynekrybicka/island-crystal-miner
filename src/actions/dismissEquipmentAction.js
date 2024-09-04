import axios from 'axios'
import { baseUrl } from '../constants'

const sellEquipmentAction = ( 
    setErrorMessage, 
    setSelectedMachines, 
    setAvailableMachines, 
    
    selectedMachines, 
    availableMachines) => (setLoader, index) => {

        setLoader(true)
        axios.post(baseUrl + '/equipment/dismiss', { machine_id: selectedMachines[index] })
            .then(() => {                
                const m_selectedMachines = [...selectedMachines]
                const m_dismissedMachineId = m_selectedMachines.splice(index, 1)
                setSelectedMachines(m_selectedMachines)

                const m_availableMachines = [...availableMachines]
                m_availableMachines.push(...m_dismissedMachineId)
                setAvailableMachines(m_availableMachines)
            })
            .catch(res => setErrorMessage(res.error))
            .finally(() => setLoader(false))
}

export default sellEquipmentAction
import axios from 'axios'
import { baseUrl } from '../constants'

const sellEquipmentAction = (setLoader, 
    setErrorMessage, 
    setCrystal, 
    setSelectedMachines, 
    setAvailableMachines, 
    
    crystal, 
    selectedMachines, 
    availableMachines) => index => {

        setLoader(true)
        axios.post(baseUrl + '/equipment/sell', { machine_id: selectedMachines[index] })
            .then(res => {
                const m_crystal = crystal + res.data.paid
                setCrystal(m_crystal)
                
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
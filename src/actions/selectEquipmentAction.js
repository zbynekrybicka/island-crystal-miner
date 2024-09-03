import axios from 'axios'
import { baseUrl } from '../constants'

const sellEquipmentAction = (setLoader, 
    setErrorMessage, 
    setCrystal, 
    setAvailableMachines, 
    setSelectedMachines, 
    
    crystal, 
    availableMachines,
    selectedMachines) => index => {

        setLoader(true)
        axios.post(baseUrl + '/equipment/sell', { machine_id: availableMachines[index] })
            .then(res => {
                const m_crystal = crystal + res.data.paid
                setCrystal(m_crystal)
                
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
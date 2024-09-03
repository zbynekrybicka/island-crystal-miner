import axios from 'axios'
import { baseUrl } from '../constants'

const sellEquipmentAction = (setLoader, 
    setErrorMessage, 
    setCrystal, 
    setAvailableMachines, 
    setSuppliedMachines, 
    
    crystal, 
    availableMachines,
    suppliedMachines) => index => {

        setLoader(true)
        axios.post(baseUrl + '/equipment/sell', { machine_id: availableMachines[index] })
            .then(res => {
                const m_crystal = crystal + res.data.paid
                setCrystal(m_crystal)
                
                const m_availableMachines = [...availableMachines]
                const m_soldMachineId = m_availableMachines.splice(index, 1)
                setAvailableMachines(m_availableMachines)

                const m_suppliedMachines = [...suppliedMachines]
                m_suppliedMachines.push(...m_soldMachineId)
                setSuppliedMachines(m_suppliedMachines)
            })
            .catch(res => setErrorMessage(res.error))
            .finally(() => setLoader(false))
}

export default sellEquipmentAction
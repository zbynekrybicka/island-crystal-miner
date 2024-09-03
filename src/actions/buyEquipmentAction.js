import axios from 'axios'
import { baseUrl } from '../constants'

const buyEquipmentAction = (setLoader, 
    setErrorMessage, 
    setCrystal, 
    setSuppliedMachines, 
    setAvailableMachines, 
    
    crystal, 
    suppliedMachines, 
    availableMachines) => index => {

        setLoader(true)
        axios.post(baseUrl + '/equipment/buy', { machine_id: suppliedMachines[index] })
            .then(res => {
                const m_crystal = crystal - res.data.paid
                setCrystal(m_crystal)
                
                const m_suppliedMachines = [...suppliedMachines]
                const m_boughtMachineId = m_suppliedMachines.splice(index, 1)
                setSuppliedMachines(m_suppliedMachines)

                const m_availableMachines = [...availableMachines]
                m_availableMachines.push(...m_boughtMachineId)
                setAvailableMachines(m_availableMachines)
            })
            .catch(res => setErrorMessage(res.error))
            .finally(() => setLoader(false))
}

export default buyEquipmentAction
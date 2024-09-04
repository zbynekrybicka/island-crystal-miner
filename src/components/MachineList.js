import { useState } from 'react'

const MachineList = function({ fromMachinesSelector, MachineItemTemplate, machineActionArray }) {
    const [loader, setLoader] = useState(false)
    return <div className={['machine-list', loader ? "loading" : ""].join(" ")}>
        {fromMachinesSelector.map((item, index) => <MachineItemTemplate 
            setLoader={setLoader}
            key={index}
            index={index}
            item={item} 
            machineActionArray={machineActionArray}
        /> )}
    </div>
}

export default MachineList
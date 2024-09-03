const MachineList = function({
    fromMachinesSelector, 
    MachineItemTemplate,     
    machineActionArray
}) {

    return <>
        {fromMachinesSelector.map((item, index) => <MachineItemTemplate 
            key={index}
            index={index}
            item={item} 
            machineActionArray={machineActionArray}
        /> )}
    </>
}

export default MachineList
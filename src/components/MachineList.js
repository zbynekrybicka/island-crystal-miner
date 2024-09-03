const MachineList = function({
    loader, 
    fromMachinesSelector, 
    MachineItemTemplate,     
    machineActionArray
}) {

    return <div className={['machine-list', loader ? "loading" : ""].join(" ")}>
        {fromMachinesSelector.map((item, index) => <MachineItemTemplate 
            key={index}
            index={index}
            item={item} 
            machineActionArray={machineActionArray}
        /> )}
    </div>
}

export default MachineList
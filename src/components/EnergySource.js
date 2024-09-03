const EnergySource = function({item, index, machineActionArray }) {
    return <>
        {item.title}
        <button onClick={machineActionArray[0]}>Dobít baterii</button>    
    </>
}

export default EnergySource
const MiningMachine = function({item, index, machineActionArray }) {
    return <>
        {item.title}
        <button onClick={machineActionArray[0]}>Vybrat stroj</button>
    </>
}

export default MiningMachine
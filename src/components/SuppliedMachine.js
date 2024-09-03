import SendButton from './SendButton'

const SuppliedMachine = function({ item, index, machineActionArray }) {
    
    return <>
        {index}: {item.title}<br/>
        <SendButton label="Koupit"
            loader={false}
            onClick={machineActionArray[0]}
        />
    </>
}

export default SuppliedMachine
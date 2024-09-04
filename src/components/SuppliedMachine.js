import SendButton from './SendButton'

const SuppliedMachine = function({ setLoader, item, index, machineActionArray }) {
    
    return <>
        {index}: {item.title}<br/>
        <SendButton label="Koupit"
            loader={false}
            onClick={() => machineActionArray[0](setLoader, index)}
        />
    </>
}

export default SuppliedMachine
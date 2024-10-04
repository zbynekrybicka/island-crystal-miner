import SendButton from './SendButton'

const SuppliedMachine = function({ setLoader, item, index, machineActionArray }) {
    
    return <div className="machine-item-template">
        {index}: {item.title}<br/>
        <SendButton label="Koupit"
            loader={false}
            onClick={() => machineActionArray[0](setLoader, index)}
        />
    </div>
}

export default SuppliedMachine
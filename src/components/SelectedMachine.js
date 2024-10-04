import SendButton from './SendButton'

const SelectedMachine = function({ item, index, machineActionArray, setLoader }) {
    
    return <div className="machine-item-template">
        {index}: {item.title}<br/>
        <SendButton label="Vyřadit"
            loader={false}
            onClick={() => machineActionArray[0](setLoader, index)}
        />
    </div>
}

export default SelectedMachine
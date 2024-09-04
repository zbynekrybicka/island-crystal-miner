import SendButton from './SendButton'

const SelectedMachine = function({ item, index, machineActionArray, setLoader }) {
    
    return <>
        {index}: {item.title}<br/>
        <SendButton label="Vyřadit"
            loader={false}
            onClick={() => machineActionArray[0](setLoader, index)}
        />
    </>
}

export default SelectedMachine
import SendButton from './SendButton'

const SelectedMachine = function({ item, index, machineActionArray }) {
    
    return <>
        {index}: {item.title}<br/>
        <SendButton label="Vyřadit"
            loader={false}
            onClick={machineActionArray[0]}
        />
    </>
}

export default SelectedMachine
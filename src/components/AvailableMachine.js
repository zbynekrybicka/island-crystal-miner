import SendButton from './SendButton'

const AvailableMachine = function({ item, index, machineActionArray }) {
    
    return <>
        {index}: {item.title}<br/>
        <SendButton label="Prodat"
            loader={false}
            onClick={machineActionArray[0]}
        />
        <SendButton label="Použít"
            loader={false}
            onClick={machineActionArray[1]}
        />
    </>
}

export default AvailableMachine
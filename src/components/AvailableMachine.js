import SendButton from './SendButton'

const AvailableMachine = function({ item, index, machineActionArray, setLoader }) {
    
    return <>
        {index}: {item.title}<br/>
        <SendButton label="Prodat"
            loader={false}
            onClick={() => machineActionArray[0](setLoader, index)}
        />
        <SendButton label="Použít"
            loader={false}
            onClick={() => machineActionArray[1](setLoader, index)}
        />
    </>
}

export default AvailableMachine
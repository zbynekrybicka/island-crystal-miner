const SendButton = function({loader, label, onClick }) {
    
    return <button onClick={onClick}>
        {loader ? "..." : label}
    </button>
}

export default SendButton
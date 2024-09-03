export default function({loader, label, onClick }) {
    
    return <button onClick={onClick}>
        {loader ? "..." : label}
    </button>
}
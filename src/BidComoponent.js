const BidComponent = (props) => {
    const [maxBid, setMaxBidState] = React.useState(() => props.currentBid)
    const [inputBid, setInputBid] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const LikeComponent = window.Like
    const onPlaveBid = () => {
        setLoading(true);
        setTimeout(() => {
            alert("You have placed your bid successfully")
            props.setMaxBid(inputBid)
            setMaxBidState(inputBid)
            setLoading(false)
        }, 2000)
    }
    return <div>
        <div>Current bid: {maxBid}</div>
        <div>Current bid: {props.totalBidCount}</div>
        <div>Your max bid: <input
            type="text"
            value={inputBid}
            onChange={(e) => setInputBid(e.target.value)}
        /></div>

        <button
            disabled={loading}
            onClick={() => {
                // props?.onPlaceBidClick();
                onPlaveBid()
            }}
        >
            {props.buttonLabel}
        </button>
        <LikeComponent
            onClick={() => {
                alert("Clicked from bid")
            }}
            count={0}
        >
            Click me
        </LikeComponent>
    </div>
}
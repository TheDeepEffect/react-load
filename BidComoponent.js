var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var BidComponent = function BidComponent(props) {
    var _React$useState = React.useState(function () {
        return props.currentBid;
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        maxBid = _React$useState2[0],
        setMaxBidState = _React$useState2[1];

    var _React$useState3 = React.useState(""),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        inputBid = _React$useState4[0],
        setInputBid = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        loading = _React$useState6[0],
        setLoading = _React$useState6[1];

    var LikeComponent = window.Like;
    var onPlaveBid = function onPlaveBid() {
        setLoading(true);
        setTimeout(function () {
            alert("You have placed your bid successfully");
            props.setMaxBid(inputBid);
            setMaxBidState(inputBid);
            setLoading(false);
        }, 2000);
    };
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            "Current bid: ",
            maxBid
        ),
        React.createElement(
            "div",
            null,
            "Current bid: ",
            props.totalBidCount
        ),
        React.createElement(
            "div",
            null,
            "Your max bid: ",
            React.createElement("input", {
                type: "text",
                value: inputBid,
                onChange: function onChange(e) {
                    return setInputBid(e.target.value);
                }
            })
        ),
        React.createElement(
            "button",
            {
                disabled: loading,
                onClick: function onClick() {
                    // props?.onPlaceBidClick();
                    onPlaveBid();
                }
            },
            props.buttonLabel
        ),
        React.createElement(
            LikeComponent,
            {
                onClick: function onClick() {
                    alert("Clicked from bid");
                },
                count: 0
            },
            "Click me"
        )
    );
};
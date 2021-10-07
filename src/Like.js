
function Like(props) {
    const { children, onClick = () => { }, ...rest } = props;
    const [count, setCount] = React.useState(() => props.count)
    // return React.createElement("button", { onClick: () => setCount(state => state + 1), ...rest }, count);
    return <button
        {...rest}
        onClick={() => {
            setCount(state => state + 1)
            onClick()
        }}
    >{count}</button>
}

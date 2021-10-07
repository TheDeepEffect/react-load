
function ChildOne(props) {
    return React.createElement("p", props, ...props.children);
}

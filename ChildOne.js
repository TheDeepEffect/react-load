function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ChildOne(props) {
    var _React;

    return (_React = React).createElement.apply(_React, ["p", props].concat(_toConsumableArray(props.children)));
}
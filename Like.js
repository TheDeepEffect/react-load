var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Like(props) {
    var children = props.children,
        _props$onClick = props.onClick,
        _onClick = _props$onClick === undefined ? function () {} : _props$onClick,
        rest = _objectWithoutProperties(props, ["children", "onClick"]);

    var _React$useState = React.useState(function () {
        return props.count;
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        count = _React$useState2[0],
        setCount = _React$useState2[1];
    // return React.createElement("button", { onClick: () => setCount(state => state + 1), ...rest }, count);


    return React.createElement(
        "button",
        Object.assign({}, rest, {
            onClick: function onClick() {
                setCount(function (state) {
                    return state + 1;
                });
                _onClick();
            }
        }),
        count
    );
}
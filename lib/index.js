'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var propTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var propTypes__default = /*#__PURE__*/_interopDefaultLegacy(propTypes);

var DataContext = /*#__PURE__*/React.createContext();

function EmojiProvider(_ref) {
  var data = _ref.data,
      children = _ref.children;

  if (!data) {
    throw new Error('Please pass a data value to EmojiProvider');
  }

  return /*#__PURE__*/React__default['default'].createElement(DataContext.Provider, {
    value: data
  }, children);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function Emoji(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  var data = React.useContext(DataContext);
  var url = data[name];

  if (!url) {
    console.warn("Emoji ".concat(name, "'s URL could not be found."));
  }

  return /*#__PURE__*/React__default['default'].createElement("img", _extends({
    src: url,
    alt: name,
    "aria-label": name
  }, props));
}

Emoji.propTypes = {
  name: propTypes__default['default'].string.isRequired
};

exports.Emoji = Emoji;
exports.EmojiProvider = EmojiProvider;
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormContainer = require('./FormContainer');

var _FormContainer2 = _interopRequireDefault(_FormContainer);

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
  var components = {
    fields: _extends({}, _fields2.default, props.fields || {}),
    templates: _extends({}, props.theme.templates, props.templates || {}),
    widgets: _extends({}, props.theme.widgets, props.widgets || {})
  };

  return _react2.default.createElement(_FormContainer2.default, _extends({}, props, components));
};

if (process.env.NODE_ENV !== 'production') {
  Form.propTypes = {
    theme: _propTypes2.default.shape({
      templates: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired
    }).isRequired
  };
}

exports.default = Form;
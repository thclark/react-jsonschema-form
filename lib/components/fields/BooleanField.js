'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BooleanField(props) {
  var schema = props.schema,
      name = props.name,
      uiSchema = props.uiSchema,
      idSchema = props.idSchema,
      formData = props.formData,
      registry = props.registry,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      rawErrors = props.rawErrors;
  var title = schema.title;
  var widgets = registry.widgets,
      formContext = registry.formContext;

  var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
      _getUiOptions$widget = _getUiOptions.widget,
      widget = _getUiOptions$widget === undefined ? 'checkbox' : _getUiOptions$widget,
      options = _objectWithoutProperties(_getUiOptions, ['widget']);

  var Widget = (0, _utils.getWidget)(schema, widget, widgets);
  var enumOptions = (0, _utils.optionsList)({
    enum: [true, false],
    enumNames: schema.enumNames || ['yes', 'no']
  });

  return _react2.default.createElement(Widget, {
    options: _extends({}, options, { enumOptions: enumOptions }),
    schema: schema,
    id: idSchema && idSchema.$id,
    onChange: onChange,
    label: title === undefined ? name : title,
    value: formData,
    required: required,
    disabled: disabled,
    readonly: readonly,
    registry: registry,
    formContext: formContext,
    autofocus: autofocus,
    rawErrors: rawErrors
  });
}

if (process.env.NODE_ENV !== 'production') {
  BooleanField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.object,
    idSchema: _propTypes2.default.object,
    onChange: _propTypes2.default.func.isRequired,
    formData: _propTypes2.default.bool,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
    registry: _propTypes2.default.shape({
      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
      templates: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
      definitions: _propTypes2.default.object.isRequired,
      formContext: _propTypes2.default.object.isRequired
    }),
    rawErrors: _propTypes2.default.arrayOf(_propTypes2.default.string)
  };
}

BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

exports.default = BooleanField;
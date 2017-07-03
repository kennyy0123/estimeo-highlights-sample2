'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Kevin/Desktop/estimeo-highlights-sample2/components/Welcome.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var style = {
    textAlign: 'center'
};

var Welcome = function Welcome(props) {
    return _react2.default.createElement('div', { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, props.title), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.msg));
};

exports.default = Welcome;
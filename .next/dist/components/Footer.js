'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Kevin/Desktop/estimeo-highlights-sample2/components/Footer.js';
/**
 * Created by Adrien on 28/06/2017.
 */


var style = {
    margin: 32,
    textAlign: 'center'
};

var Footer = function Footer() {
    return _react2.default.createElement('div', { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Divider2.default, { inset: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Footer made by someone with love '));
};

exports.default = Footer;
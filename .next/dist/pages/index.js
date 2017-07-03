'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Welcome = require('../components/Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _HighlightGrid = require('../components/HighlightGrid');

var _HighlightGrid2 = _interopRequireDefault(_HighlightGrid);

var _colors = require('material-ui/styles/colors');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Kevin/Desktop/estimeo-highlights-sample2/pages/index.js?entry';
/**
 * Created by Adrien on 30/06/2017.
 */


/**
 * Make sure react-tap-event-plugin only gets injected once
 * Needed for material-ui
 */
if (!process.tapEventInjected) {
    (0, _reactTapEventPlugin2.default)();
    process.tapEventInjected = true;
}

var muiTheme = {
    palette: {
        accent1Color: _colors.deepOrange500

        /**
         * Equivalent to the `render` function of React
         * @param props
         * @returns {XML}
         * @constructor
         */
    } };var Index = function Index(props) {
    var userAgent = props.userAgent.userAgent;

    return (
        /** Wrapper around the application to include material-ui **/
        _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)((0, _extends3.default)({ userAgent: userAgent }, muiTheme)), __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('div', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }, _react2.default.createElement(_Header2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }), _react2.default.createElement('div', { className: 'container grey100', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        }, _react2.default.createElement(_Welcome2.default, { title: 'Bienvenue !', msg: 'Voici quelques start-ups mise en avant par Estimeo.', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
            }
        }), _react2.default.createElement(_HighlightGrid2.default, { highlights: props.highlights, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
            }
        }), _react2.default.createElement(_Footer2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 54
            }
        }))))
    );
};

/**
 * Get the initial properties (async) to fill the list of highlights
 * @param context
 * @returns {Promise.<{userAgent: *, highlights: *}>}
 */
Index.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var userAgent, res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        /**
                         * Ensures material-ui renders the correct css prefixes server-side
                         */
                        userAgent = void 0;

                        if (process.browser) {
                            userAgent = navigator.userAgent;
                        } else {
                            userAgent = context.req.headers['user-agent'];
                        }

                        /**
                         * Fetch the data
                         */
                        _context.next = 4;
                        return (0, _isomorphicUnfetch2.default)('http://localhost:3000/api/s/all');

                    case 4:
                        res = _context.sent;
                        _context.next = 7;
                        return res.json();

                    case 7:
                        data = _context.sent;

                        console.log('Show data fetched. Count: ' + data.length);

                        /**
                         * List of the properties of this component, which we can access via `props.*`
                         */
                        return _context.abrupt('return', {
                            userAgent: userAgent,
                            highlights: data
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * Export the component / page
 */
exports.default = Index;
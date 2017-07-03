'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GridList = require('material-ui/GridList');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _starBorder = require('material-ui/svg-icons/toggle/star-border');

var _starBorder2 = _interopRequireDefault(_starBorder);

var _StartupCard = require('./StartupCard');

var _StartupCard2 = _interopRequireDefault(_StartupCard);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Kevin/Desktop/estimeo-highlights-sample2/components/HighlightGrid.js';
/**
 * Created by Adrien on 30/06/2017.
 */

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'auto'
    /**
     * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
     */
  } };var HighlightGridList = function HighlightGridList(props) {
  return _react2.default.createElement('div', { style: styles.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, props.highlights.map(function (high) {
    return _react2.default.createElement(_GridList.GridList, {
      cols: 2,
      cellHeight: 'auto',
      style: styles.gridList,
      key: high.periode,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, _react2.default.createElement(_Subheader2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, high.periode), high.startups.map(function (tile) {
      return _react2.default.createElement(_GridList.GridTile, { cols: tile.size, rows: tile.size, key: tile.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_StartupCard2.default, {
        title: tile.title,
        pretty: tile.pretty,
        author: tile.author,
        avatar: tile.avatar,
        subtitle: tile.subtitle,
        description: tile.description,
        website: tile.website,
        youtubeLink: tile.youtubeLink,
        _id: tile._id,
        img: tile.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }));
    }));
  }));
};
HighlightGridList.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)('/api/s/all');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;

            console.log('Show data fetched. Count: ' + data.length);
            return _context.abrupt('return', {
              shows: data
            });

          case 8:
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
exports.default = HighlightGridList;
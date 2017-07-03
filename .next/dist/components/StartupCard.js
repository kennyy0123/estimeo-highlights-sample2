'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _videoLibrary = require('material-ui/svg-icons/av/video-library');

var _videoLibrary2 = _interopRequireDefault(_videoLibrary);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Kevin/Desktop/estimeo-highlights-sample2/components/StartupCard.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var containerImgStyles = {
  height: '30vh',
  zIndex: '0'
};

var noContainerImgStyles = {
  backgroundColor: '#fff',
  zIndex: '999'
};

var youtubeColor = {
  color: '#c4302b'
};

function handleClick(link) {
  window.open(link, '_blank');
}

var StartupCard = function StartupCard(props) {
  return _react2.default.createElement(_Card.Card, { zDepth: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_Card.CardHeader, {
    style: noContainerImgStyles,
    title: props.author,
    subtitle: 'Fondateur(s)',
    avatar: props.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement(_Card.CardMedia, {
    style: containerImgStyles,
    overlay: _react2.default.createElement(_Card.CardTitle, { title: props.title, subtitle: props.subtitle, __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('img', { src: props.img, alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement(_Card.CardActions, { style: noContainerImgStyles, __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_link2.default, { as: '/s/' + props._id, href: '/startup?id=' + props._id, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Voir', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }))), _react2.default.createElement(_link2.default, { href: props.website, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement('a', { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Site', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }))), _react2.default.createElement(_link2.default, { href: props.youtubeLink, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('a', { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(_FlatButton2.default, {
    label: 'Youtube',
    labelPosition: 'before',
    primary: true,
    icon: _react2.default.createElement(_videoLibrary2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    }),
    style: youtubeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  })))));
};

exports.default = StartupCard;
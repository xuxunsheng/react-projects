webpackJsonp([7],{

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.initialState = exports.stateKey = exports.reducer = exports.ArticalDetail = undefined;\n\nvar _articalDetail = __webpack_require__(958);\n\nvar _articalDetail2 = _interopRequireDefault(_articalDetail);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar reducer = _defineProperty({}, _articalDetail.stateKey, _articalDetail.reducer);\n\nvar initialState = _defineProperty({}, _articalDetail.stateKey, _articalDetail.initialState);\n\nexports.ArticalDetail = _articalDetail2.default;\nexports.reducer = reducer;\nexports.stateKey = _articalDetail.stateKey;\nexports.initialState = initialState;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9BcnRpY2FsRGV0YWlsLmpzP2JmMzEiXSwibmFtZXMiOlsicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsIkFydGljYWxEZXRhaWwiLCJzdGF0ZUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLDhFQUFOOztBQUlBLElBQU1DLHdGQUFOOztRQUtJQyxhO1FBQWVGLE8sR0FBQUEsTztRQUFTRyxRO1FBQVVGLFksR0FBQUEsWSIsImZpbGUiOiI2MjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNhbERldGFpbCwge3N0YXRlS2V5LCByZWR1Y2VyIGFzIGFkUmVkdWNlciwgaW5pdGlhbFN0YXRlIGFzIGFkaVN0YXRlfSBmcm9tICcuLi9jb21wb25lbnRzL2FydGljYWwtZGV0YWlsJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSB7XHJcbiAgICBbc3RhdGVLZXldOiBhZFJlZHVjZXJcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgW3N0YXRlS2V5XTogYWRpU3RhdGVcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIEFydGljYWxEZXRhaWwsIHJlZHVjZXIsIHN0YXRlS2V5LCBpbml0aWFsU3RhdGVcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0FydGljYWxEZXRhaWwuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///628\n");

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getArticalDetail = exports.fetchADetailFailure = exports.fetchADetailSuccess = exports.fetchADetailStarted = undefined;\n\nvar _actionTypes = __webpack_require__(938);\n\nvar _config = __webpack_require__(271);\n\nvar fetchADetailStarted = exports.fetchADetailStarted = function fetchADetailStarted() {\n    return {\n        type: _actionTypes.FETCH_STARTED\n    };\n};\n\nvar fetchADetailSuccess = exports.fetchADetailSuccess = function fetchADetailSuccess(infos) {\n    return {\n        type: _actionTypes.FETCH_SUCCESS,\n        infos: infos\n    };\n};\n\nvar fetchADetailFailure = exports.fetchADetailFailure = function fetchADetailFailure(message) {\n    return {\n        type: _actionTypes.FETCH_FAILURE,\n        message: message\n    };\n};\n\nvar getArticalDetail = exports.getArticalDetail = function getArticalDetail(id) {\n    return function (dispatch) {\n        var apiUrl = _config.SERVERADDRESS + '/get-artical-detail/' + id;\n        dispatch(fetchADetailStarted());\n\n        fetch(apiUrl).then(function (response) {\n\n            if (response.status !== 200) {\n                throw new Error('Fail to get reaponse with status ' + response.status);\n                dispatch(fetchADetailFailure(\"LOADING FAILED! Error code: \" + response.status));\n            }\n\n            response.json().then(function (responseJson) {\n                if (responseJson.status == 0) {\n                    dispatch(fetchADetailFailure(responseJson.message));\n                }\n                dispatch(fetchADetailSuccess(responseJson.infos));\n            }).catch(function (error) {\n                dispatch(fetchADetailFailure(error));\n            });\n        }).catch(function (error) {\n            dispatch(fetchADetailFailure(error));\n        });\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9hY3Rpb25zLmpzPzI2ODQiXSwibmFtZXMiOlsiZmV0Y2hBRGV0YWlsU3RhcnRlZCIsInR5cGUiLCJmZXRjaEFEZXRhaWxTdWNjZXNzIiwiaW5mb3MiLCJmZXRjaEFEZXRhaWxGYWlsdXJlIiwibWVzc2FnZSIsImdldEFydGljYWxEZXRhaWwiLCJpZCIsImRpc3BhdGNoIiwiYXBpVXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJyZXNwb25zZUpzb24iLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRU8sSUFBTUEsb0RBQXNCLFNBQXRCQSxtQkFBc0I7QUFBQSxXQUFPO0FBQ3RDQztBQURzQyxLQUFQO0FBQUEsQ0FBNUI7O0FBSUEsSUFBTUMsb0RBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDM0NGLHdDQUQyQztBQUUzQ0U7QUFGMkMsS0FBWjtBQUFBLENBQTVCOztBQUtBLElBQU1DLG9EQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLE9BQUQ7QUFBQSxXQUFjO0FBQzdDSix3Q0FENkM7QUFFN0NJO0FBRjZDLEtBQWQ7QUFBQSxDQUE1Qjs7QUFLQSxJQUFNQyw4Q0FBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7QUFDcEMsV0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDakIsWUFBTUMsMERBQWdERixFQUF0RDtBQUNBQyxpQkFBU1IscUJBQVQ7O0FBRUFVLGNBQU1ELE1BQU4sRUFBY0UsSUFBZCxDQUFtQixVQUFDQyxRQUFELEVBQWM7O0FBRTdCLGdCQUFHQSxTQUFTQyxNQUFULEtBQW9CLEdBQXZCLEVBQTRCO0FBQ3hCLHNCQUFNLElBQUlDLEtBQUosQ0FBVSxzQ0FBc0NGLFNBQVNDLE1BQXpELENBQU47QUFDQUwseUJBQVNKLG9CQUFvQixpQ0FBaUNRLFNBQVNDLE1BQTlELENBQVQ7QUFDSDs7QUFFREQscUJBQVNHLElBQVQsR0FBZ0JKLElBQWhCLENBQXFCLFVBQUNLLFlBQUQsRUFBa0I7QUFDbkMsb0JBQUdBLGFBQWFILE1BQWIsSUFBdUIsQ0FBMUIsRUFBNkI7QUFDekJMLDZCQUFTSixvQkFBb0JZLGFBQWFYLE9BQWpDLENBQVQ7QUFDSDtBQUNERyx5QkFBU04sb0JBQW9CYyxhQUFhYixLQUFqQyxDQUFUO0FBQ0gsYUFMRCxFQUtHYyxLQUxILENBS1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCVix5QkFBU0osb0JBQW9CYyxLQUFwQixDQUFUO0FBQ0gsYUFQRDtBQVFILFNBZkQsRUFlR0QsS0FmSCxDQWVTLFVBQUNDLEtBQUQsRUFBVztBQUNoQlYscUJBQVNKLG9CQUFvQmMsS0FBcEIsQ0FBVDtBQUNILFNBakJEO0FBa0JILEtBdEJEO0FBdUJILENBeEJNIiwiZmlsZSI6IjkzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RkVUQ0hfU1RBUlRFRCwgRkVUQ0hfU1VDQ0VTUywgRkVUQ0hfRkFJTFVSRX0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcblxyXG5pbXBvcnQge1NFUlZFUkFERFJFU1N9IGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBRGV0YWlsU3RhcnRlZCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBGRVRDSF9TVEFSVEVEXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQURldGFpbFN1Y2Nlc3MgPSAoaW5mb3MpID0+ICh7XHJcbiAgICB0eXBlOiBGRVRDSF9TVUNDRVNTLFxyXG4gICAgaW5mb3NcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBRGV0YWlsRmFpbHVyZSA9IChtZXNzYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogRkVUQ0hfRkFJTFVSRSxcclxuICAgIG1lc3NhZ2VcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNhbERldGFpbCA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGAke1NFUlZFUkFERFJFU1N9L2dldC1hcnRpY2FsLWRldGFpbC8ke2lkfWA7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBRGV0YWlsU3RhcnRlZCgpKTtcclxuXHJcbiAgICAgICAgZmV0Y2goYXBpVXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbCB0byBnZXQgcmVhcG9uc2Ugd2l0aCBzdGF0dXMgJyArIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaEFEZXRhaWxGYWlsdXJlKFwiTE9BRElORyBGQUlMRUQhIEVycm9yIGNvZGU6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5zdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoQURldGFpbEZhaWx1cmUocmVzcG9uc2VKc29uLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoQURldGFpbFN1Y2Nlc3MocmVzcG9uc2VKc29uLmluZm9zKSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hBRGV0YWlsRmFpbHVyZShlcnJvcikpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaEFEZXRhaWxGYWlsdXJlKGVycm9yKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///937\n");

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FETCH_STARTED = exports.FETCH_STARTED = 'ADETAIL/STARTED';\nvar FETCH_SUCCESS = exports.FETCH_SUCCESS = 'ADETAIL/SUCCESS';\nvar FETCH_FAILURE = exports.FETCH_FAILURE = 'ADETAIL/FAILURE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9hY3Rpb25UeXBlcy5qcz9hYWEzIl0sIm5hbWVzIjpbIkZFVENIX1NUQVJURUQiLCJGRVRDSF9TVUNDRVNTIiwiRkVUQ0hfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSx3Q0FBZ0IsaUJBQXRCO0FBQ0EsSUFBTUMsd0NBQWdCLGlCQUF0QjtBQUNBLElBQU1DLHdDQUFnQixpQkFBdEIiLCJmaWxlIjoiOTM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZFVENIX1NUQVJURUQgPSAnQURFVEFJTC9TVEFSVEVEJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NVQ0NFU1MgPSAnQURFVEFJTC9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX0ZBSUxVUkUgPSAnQURFVEFJTC9GQUlMVVJFJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9hY3Rpb25UeXBlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///938\n");

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.initialState = exports.stateKey = exports.reducer = exports.actions = undefined;\n\nvar _view = __webpack_require__(959);\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _actions = __webpack_require__(937);\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _reducer = __webpack_require__(962);\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.actions = actions;\nexports.reducer = _reducer2.default;\nexports.stateKey = _view.stateKey;\nexports.initialState = _view.initialState;\nexports.default = _view2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9pbmRleC5qcz9mZDg2Il0sIm5hbWVzIjpbImFjdGlvbnMiLCJyZWR1Y2VyIiwic3RhdGVLZXkiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxPOztBQUNaOzs7Ozs7OztRQUdJQSxPLEdBQUFBLE87UUFDQUMsTztRQUNBQyxRO1FBQ0FDLFkiLCJmaWxlIjoiOTU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZpZXcsIHtzdGF0ZUtleSwgaW5pdGlhbFN0YXRlfSBmcm9tICcuL3ZpZXcnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgYWN0aW9ucyxcclxuICAgIHJlZHVjZXIsXHJcbiAgICBzdGF0ZUtleSxcclxuICAgIGluaXRpYWxTdGF0ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2FydGljYWwtZGV0YWlsL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///958\n");

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.initialState = exports.stateKey = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(176);\n\nvar _actions = __webpack_require__(937);\n\n__webpack_require__(960);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar stateKey = exports.stateKey = 'artical-detail';\nvar initialState = exports.initialState = {};\n\nvar ArticalDetail = function (_Component) {\n    _inherits(ArticalDetail, _Component);\n\n    function ArticalDetail() {\n        _classCallCheck(this, ArticalDetail);\n\n        return _possibleConstructorReturn(this, (ArticalDetail.__proto__ || Object.getPrototypeOf(ArticalDetail)).apply(this, arguments));\n    }\n\n    _createClass(ArticalDetail, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                id = _props.id,\n                getDetail = _props.getDetail;\n\n            console.log('hh');\n            getDetail(id);\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            var _props2 = this.props,\n                id = _props2.id,\n                getDetail = _props2.getDetail;\n\n\n            if (id != nextProps.id) {\n                console.log(123);\n                getDetail(nextProps.id);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props$detail = this.props.detail,\n                title = _props$detail.title,\n                body = _props$detail.body,\n                tag = _props$detail.tag,\n                category = _props$detail.category,\n                created_at = _props$detail.created_at,\n                updated_at = _props$detail.updated_at,\n                views = _props$detail.views,\n                type = _props$detail.type;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'artical-detail' },\n                _react2.default.createElement(\n                    'h3',\n                    { className: 'blog-title' },\n                    type == 2 ? \"[转]\" : type == 3 ? \"[译]\" : \"\",\n                    title\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'blog-top' },\n                    _react2.default.createElement(\n                        'span',\n                        null,\n                        'Last Modified : \\xA0',\n                        updated_at ? updated_at : created_at\n                    ),\n                    _react2.default.createElement('span', { className: 'spliter' }),\n                    _react2.default.createElement(\n                        'span',\n                        null,\n                        '\\u6D4F\\u89C8 : \\xA0  ',\n                        views\n                    ),\n                    _react2.default.createElement('span', { className: 'spliter' }),\n                    _react2.default.createElement(\n                        'span',\n                        null,\n                        '\\u6807\\u7B7E : \\xA0  ',\n                        tag\n                    )\n                ),\n                _react2.default.createElement('div', { className: 'blog-content', dangerouslySetInnerHTML: { __html: body } }),\n                _react2.default.createElement('script', { src: '' })\n            );\n        }\n    }]);\n\n    return ArticalDetail;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        id: state[stateKey] && state[stateKey].id || null,\n        detail: state[stateKey] || {}\n    };\n};\n\nvar mapDispathToProps = function mapDispathToProps(dispatch) {\n    return {\n        getDetail: function getDetail(id) {\n            dispatch((0, _actions.getArticalDetail)(id));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispathToProps)(ArticalDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC92aWV3LmpzPzk3ZTQiXSwibmFtZXMiOlsic3RhdGVLZXkiLCJpbml0aWFsU3RhdGUiLCJBcnRpY2FsRGV0YWlsIiwicHJvcHMiLCJpZCIsImdldERldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UHJvcHMiLCJkZXRhaWwiLCJ0aXRsZSIsImJvZHkiLCJ0YWciLCJjYXRlZ29yeSIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkX2F0Iiwidmlld3MiLCJ0eXBlIiwiX19odG1sIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsOEJBQVcsZ0JBQWpCO0FBQ0EsSUFBTUMsc0NBQWUsRUFBckI7O0lBRURDLGE7Ozs7Ozs7Ozs7OzRDQUVrQjtBQUFBLHlCQUNNLEtBQUtDLEtBRFg7QUFBQSxnQkFDWEMsRUFEVyxVQUNYQSxFQURXO0FBQUEsZ0JBQ1BDLFNBRE8sVUFDUEEsU0FETzs7QUFFaEJDLG9CQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBRixzQkFBVUQsRUFBVjtBQUNIOzs7a0RBRXlCSSxTLEVBQVc7QUFBQSwwQkFDWCxLQUFLTCxLQURNO0FBQUEsZ0JBQzVCQyxFQUQ0QixXQUM1QkEsRUFENEI7QUFBQSxnQkFDeEJDLFNBRHdCLFdBQ3hCQSxTQUR3Qjs7O0FBR2pDLGdCQUFJRCxNQUFNSSxVQUFVSixFQUFwQixFQUF3QjtBQUNwQkUsd0JBQVFDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FGLDBCQUFVRyxVQUFVSixFQUFwQjtBQUNIO0FBQ0o7OztpQ0FFUTtBQUFBLGdDQUNxRSxLQUFLRCxLQUFMLENBQVdNLE1BRGhGO0FBQUEsZ0JBQ0VDLEtBREYsaUJBQ0VBLEtBREY7QUFBQSxnQkFDU0MsSUFEVCxpQkFDU0EsSUFEVDtBQUFBLGdCQUNlQyxHQURmLGlCQUNlQSxHQURmO0FBQUEsZ0JBQ29CQyxRQURwQixpQkFDb0JBLFFBRHBCO0FBQUEsZ0JBQzhCQyxVQUQ5QixpQkFDOEJBLFVBRDlCO0FBQUEsZ0JBQzBDQyxVQUQxQyxpQkFDMENBLFVBRDFDO0FBQUEsZ0JBQ3NEQyxLQUR0RCxpQkFDc0RBLEtBRHREO0FBQUEsZ0JBQzZEQyxJQUQ3RCxpQkFDNkRBLElBRDdEOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFJLFdBQVUsWUFBZDtBQUVRQSw0QkFBUSxDQUFSLEdBQVksS0FBWixHQUNFQSxRQUFRLENBQVIsR0FBWSxLQUFaLEdBQW9CLEVBSDlCO0FBS0tQO0FBTEwsaUJBREo7QUFRSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFHUUsscUNBQWFBLFVBQWIsR0FBMEJEO0FBSGxDLHFCQURKO0FBT0ksNERBQU0sV0FBVSxTQUFoQixHQVBKO0FBUUk7QUFBQTtBQUFBO0FBQUE7QUFBb0JFO0FBQXBCLHFCQVJKO0FBUXFDLDREQUFNLFdBQVUsU0FBaEIsR0FSckM7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFvQko7QUFBcEI7QUFUSixpQkFSSjtBQW1CSSx1REFBSyxXQUFVLGNBQWYsRUFBOEIseUJBQXlCLEVBQUNNLFFBQVFQLElBQVQsRUFBdkQsR0FuQko7QUFvQkksMERBQVEsS0FBSSxFQUFaO0FBcEJKLGFBREo7QUF3Qkg7Ozs7OztBQUdMLElBQU1RLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLFdBQU87QUFDSGhCLFlBQUlnQixNQUFNcEIsUUFBTixLQUFtQm9CLE1BQU1wQixRQUFOLEVBQWdCSSxFQUFuQyxJQUF5QyxJQUQxQztBQUVISyxnQkFBUVcsTUFBTXBCLFFBQU4sS0FBbUI7QUFGeEIsS0FBUDtBQUlILENBTEQ7O0FBT0EsSUFBTXFCLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLFFBQUQsRUFBYztBQUNwQyxXQUFPO0FBQ0hqQixtQkFBVyxtQkFBQ0QsRUFBRCxFQUFRO0FBQ2ZrQixxQkFBUywrQkFBaUJsQixFQUFqQixDQUFUO0FBQ0g7QUFIRSxLQUFQO0FBS0gsQ0FORDs7a0JBUWUseUJBQVFlLGVBQVIsRUFBeUJFLGlCQUF6QixFQUE0Q25CLGFBQTVDLEMiLCJmaWxlIjoiOTU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHtnZXRBcnRpY2FsRGV0YWlsfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRlS2V5ID0gJ2FydGljYWwtZGV0YWlsJztcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgfTtcclxuXHJcbmNsYXNzIEFydGljYWxEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCB7aWQsIGdldERldGFpbH0gPSB0aGlzLnByb3BzOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnaGgnKTtcclxuICAgICAgICBnZXREZXRhaWwoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IHtpZCwgZ2V0RGV0YWlsfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChpZCAhPSBuZXh0UHJvcHMuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMTIzKTtcclxuICAgICAgICAgICAgZ2V0RGV0YWlsKG5leHRQcm9wcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7dGl0bGUsIGJvZHksIHRhZywgY2F0ZWdvcnksIGNyZWF0ZWRfYXQsIHVwZGF0ZWRfYXQsIHZpZXdzLCB0eXBlfSA9IHRoaXMucHJvcHMuZGV0YWlsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNhbC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJibG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09IDIgPyBcIlvovaxdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09IDMgPyBcIlvor5FdXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTW9kaWZpZWQgOiAmbmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQgPyB1cGRhdGVkX2F0IDogY3JlYXRlZF9hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwbGl0ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5rWP6KeIIDogJm5ic3A7ICB7dmlld3N9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInNwbGl0ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5qCH562+IDogJm5ic3A7ICB7dGFnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYm9keX19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJcIj48L3NjcmlwdD4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHN0YXRlW3N0YXRlS2V5XSAmJiBzdGF0ZVtzdGF0ZUtleV0uaWQgfHwgbnVsbCxcclxuICAgICAgICBkZXRhaWw6IHN0YXRlW3N0YXRlS2V5XSB8fCB7fVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXREZXRhaWw6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRBcnRpY2FsRGV0YWlsKGlkKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRoVG9Qcm9wcykoQXJ0aWNhbERldGFpbCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvYXJ0aWNhbC1kZXRhaWwvdmlldy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///959\n");

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(961);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../node_modules/.npminstall/css-loader/0.28.4/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../node_modules/.npminstall/css-loader/0.28.4/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9pbmRleC5zY3NzPzg1YTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyIsImZpbGUiOiI5NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC40L2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjE4LjIvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguNC9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC40L2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2FydGljYWwtZGV0YWlsL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///960\n");

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".artical-detail {\\n  padding: 15px 35px;\\n  margin: 15px 0;\\n  font-size: 14px;\\n  box-shadow: 0 0 6px #666; }\\n\\n.blog-title {\\n  padding: 7px 0;\\n  font-size: 19px;\\n  font-weight: bold; }\\n\\n.blog-top {\\n  color: #aaa;\\n  margin-top: -2px;\\n  margin-bottom: 11px; }\\n  .blog-top > .spliter {\\n    height: 11px;\\n    margin: 0 8px;\\n    border-color: #ccc;\\n    display: inline-block;\\n    vertical-align: -2px;\\n    border-left: 1px solid #aaa; }\\n\\n.blog-content {\\n  margin: 22px 0;\\n  font-size: 15px;\\n  word-spacing: 2px;\\n  line-height: 22px;\\n  overflow: auto;\\n  word-wrap: break-word; }\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9pbmRleC5zY3NzP2RmNzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsdUJBQXVCLG1CQUFtQixvQkFBb0IsNkJBQTZCLEVBQUUsaUJBQWlCLG1CQUFtQixvQkFBb0Isc0JBQXNCLEVBQUUsZUFBZSxnQkFBZ0IscUJBQXFCLHdCQUF3QixFQUFFLDBCQUEwQixtQkFBbUIsb0JBQW9CLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLGtDQUFrQyxFQUFFLG1CQUFtQixtQkFBbUIsb0JBQW9CLHNCQUFzQixzQkFBc0IsbUJBQW1CLDBCQUEwQixFQUFFOztBQUVobkIiLCJmaWxlIjoiOTYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguNC9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFydGljYWwtZGV0YWlsIHtcXG4gIHBhZGRpbmc6IDE1cHggMzVweDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjNjY2OyB9XFxuXFxuLmJsb2ctdGl0bGUge1xcbiAgcGFkZGluZzogN3B4IDA7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ibG9nLXRvcCB7XFxuICBjb2xvcjogI2FhYTtcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMXB4OyB9XFxuICAuYmxvZy10b3AgPiAuc3BsaXRlciB7XFxuICAgIGhlaWdodDogMTFweDtcXG4gICAgbWFyZ2luOiAwIDhweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhYWE7IH1cXG5cXG4uYmxvZy1jb250ZW50IHtcXG4gIG1hcmdpbjogMjJweCAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjQvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYXBwL2NvbXBvbmVudHMvYXJ0aWNhbC1kZXRhaWwvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///961\n");

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _status = __webpack_require__(272);\n\nvar Status = _interopRequireWildcard(_status);\n\nvar _actionTypes = __webpack_require__(938);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { status: Status.LOADING };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actionTypes.FETCH_STARTED:\n            {\n                return _extends({}, state, {\n                    status: Status.LOADING\n                });\n            }\n        case _actionTypes.FETCH_SUCCESS:\n            {\n                return _extends({}, state, {\n                    status: Status.SUCCESS\n                }, action.infos);\n            }\n        case _actionTypes.FETCH_FAILURE:\n            {\n                return _extends({}, state, {\n                    status: Status.FAILURE,\n                    error: Status.message\n                });\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcnRpY2FsLWRldGFpbC9yZWR1Y2VyLmpzPzFhZDUiXSwibmFtZXMiOlsiU3RhdHVzIiwic3RhdGUiLCJzdGF0dXMiLCJMT0FESU5HIiwiYWN0aW9uIiwidHlwZSIsIlNVQ0NFU1MiLCJpbmZvcyIsIkZBSUxVUkUiLCJlcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBQVlBLE07O0FBQ1o7Ozs7a0JBRWMsWUFBOEM7QUFBQSxRQUE3Q0MsS0FBNkMsdUVBQXJDLEVBQUNDLFFBQVFGLE9BQU9HLE9BQWhCLEVBQXFDO0FBQUEsUUFBWEMsTUFBVzs7QUFDeEQsWUFBT0EsT0FBT0MsSUFBZDtBQUNJO0FBQW9CO0FBQ2hCLG9DQUNPSixLQURQO0FBRUlDLDRCQUFRRixPQUFPRztBQUZuQjtBQUlIO0FBQ0Q7QUFBb0I7QUFDaEIsb0NBQ09GLEtBRFA7QUFFSUMsNEJBQVFGLE9BQU9NO0FBRm5CLG1CQUdPRixPQUFPRyxLQUhkO0FBS0g7QUFDRDtBQUFvQjtBQUNoQixvQ0FDT04sS0FEUDtBQUVJQyw0QkFBUUYsT0FBT1EsT0FGbkI7QUFHSUMsMkJBQU9ULE9BQU9VO0FBSGxCO0FBS0g7QUFDRDtBQUFTO0FBQ0wsdUJBQU9ULEtBQVA7QUFDSDtBQXZCTDtBQXlCSCxDIiwiZmlsZSI6Ijk2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFN0YXR1cyBmcm9tIFwiLi4vLi4vY29uZmlnL3N0YXR1c1wiO1xyXG5pbXBvcnQge0ZFVENIX1NUQVJURUQsIEZFVENIX1NVQ0NFU1MsIEZFVENIX0ZBSUxVUkV9IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdChzdGF0ZSA9IHtzdGF0dXM6IFN0YXR1cy5MT0FESU5HfSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1NUQVJURUQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBTdGF0dXMuTE9BRElOR1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFN0YXR1cy5TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLmluZm9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogU3RhdHVzLkZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogU3RhdHVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2FydGljYWwtZGV0YWlsL3JlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///962\n");

/***/ })

});
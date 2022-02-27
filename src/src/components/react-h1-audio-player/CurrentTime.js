"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _utils = require("./utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CurrentTime = function (_PureComponent) {
  (0, _inherits2.default)(CurrentTime, _PureComponent);

  var _super = _createSuper(CurrentTime);

  function CurrentTime(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CurrentTime);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "audio", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasAddedAudioEventListener", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      currentTime: _this.props.defaultCurrentTime
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAudioCurrentTimeChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          isLeftTime = _this$props.isLeftTime,
          timeFormat = _this$props.timeFormat,
          defaultCurrentTime = _this$props.defaultCurrentTime;

      _this.setState({
        currentTime: (0, _utils.getDisplayTimeBySeconds)(isLeftTime ? audio.duration - audio.currentTime : audio.currentTime, audio.duration, timeFormat) || defaultCurrentTime
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addAudioEventListeners", function () {
      var audio = _this.props.audio;

      if (audio && !_this.hasAddedAudioEventListener) {
        _this.audio = audio;
        _this.hasAddedAudioEventListener = true;
        audio.addEventListener('timeupdate', _this.handleAudioCurrentTimeChange);
        audio.addEventListener('loadedmetadata', _this.handleAudioCurrentTimeChange);
      }
    });
    var _audio = props.audio,
        _defaultCurrentTime = props.defaultCurrentTime,
        _isLeftTime = props.isLeftTime,
        _timeFormat = props.timeFormat;
    var currentTime = _defaultCurrentTime;

    if (_audio) {
      currentTime = (0, _utils.getDisplayTimeBySeconds)(_isLeftTime ? _audio.duration - _audio.currentTime : _audio.currentTime, _audio.duration, _timeFormat);
    }

    _this.state = {
      currentTime: currentTime
    };
    return _this;
  }

  (0, _createClass2.default)(CurrentTime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addAudioEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.addAudioEventListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.audio && this.hasAddedAudioEventListener) {
        this.audio.removeEventListener('timeupdate', this.handleAudioCurrentTimeChange);
        this.audio.removeEventListener('loadedmetadata', this.handleAudioCurrentTimeChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.currentTime;
    }
  }]);
  return CurrentTime;
}(_react.PureComponent);

var _default = CurrentTime;
exports.default = _default;
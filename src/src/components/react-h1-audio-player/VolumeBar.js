"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var VolumeControls = function (_Component) {
  (0, _inherits2.default)(VolumeControls, _Component);

  var _super = _createSuper(VolumeControls);

  function VolumeControls() {
    var _this;

    (0, _classCallCheck2.default)(this, VolumeControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "audio", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasAddedAudioEventListener", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "volumeBar", (0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "volumeAnimationTimer", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "lastVolume", _this.props.volume);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      currentVolumePos: "".concat((_this.lastVolume / 1 * 100 || 0).toFixed(2), "%"),
      hasVolumeAnimation: false,
      isDraggingVolume: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCurrentVolume", function (event) {
      var audio = _this.props.audio;

      if (!_this.volumeBar.current) {
        return {
          currentVolume: audio.volume,
          currentVolumePos: _this.state.currentVolumePos
        };
      }

      var volumeBarRect = _this.volumeBar.current.getBoundingClientRect();

      var maxRelativePos = volumeBarRect.width;
      var relativePos = (0, _utils.getPosX)(event) - volumeBarRect.left;
      var currentVolume;
      var currentVolumePos;

      if (relativePos < 0) {
        currentVolume = 0;
        currentVolumePos = '0%';
      } else if (relativePos > volumeBarRect.width) {
        currentVolume = 1;
        currentVolumePos = '100%';
      } else {
        currentVolume = relativePos / maxRelativePos;
        currentVolumePos = "".concat(relativePos / maxRelativePos * 100, "%");
      }

      return {
        currentVolume: currentVolume,
        currentVolumePos: currentVolumePos
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleContextMenu", function (event) {
      event.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClickVolumeButton", function () {
      var audio = _this.props.audio;

      if (audio.volume > 0) {
        _this.lastVolume = audio.volume;
        audio.volume = 0;
      } else {
        audio.volume = _this.lastVolume;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleVolumnControlMouseOrTouchDown", function (event) {
      event.stopPropagation();
      var audio = _this.props.audio;

      var _this$getCurrentVolum = _this.getCurrentVolume(event.nativeEvent),
          currentVolume = _this$getCurrentVolum.currentVolume,
          currentVolumePos = _this$getCurrentVolum.currentVolumePos;

      audio.volume = currentVolume;

      _this.setState({
        isDraggingVolume: true,
        currentVolumePos: currentVolumePos
      });

      if (event.nativeEvent instanceof MouseEvent) {
        window.addEventListener('mousemove', _this.handleWindowMouseOrTouchMove);
        window.addEventListener('mouseup', _this.handleWindowMouseOrTouchUp);
      } else {
        window.addEventListener('touchmove', _this.handleWindowMouseOrTouchMove);
        window.addEventListener('touchend', _this.handleWindowMouseOrTouchUp);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleWindowMouseOrTouchMove", function (event) {
      if (event instanceof MouseEvent) {
        event.preventDefault();
      }

      event.stopPropagation();
      var audio = _this.props.audio;
      var windowSelection = window.getSelection();

      if (windowSelection && windowSelection.type === 'Range') {
        windowSelection.empty();
      }

      var isDraggingVolume = _this.state.isDraggingVolume;

      if (isDraggingVolume) {
        var _this$getCurrentVolum2 = _this.getCurrentVolume(event),
            currentVolume = _this$getCurrentVolum2.currentVolume,
            currentVolumePos = _this$getCurrentVolum2.currentVolumePos;

        audio.volume = currentVolume;

        _this.setState({
          currentVolumePos: currentVolumePos
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleWindowMouseOrTouchUp", function (event) {
      event.stopPropagation();

      _this.setState({
        isDraggingVolume: false
      });

      if (event instanceof MouseEvent) {
        window.removeEventListener('mousemove', _this.handleWindowMouseOrTouchMove);
        window.removeEventListener('mouseup', _this.handleWindowMouseOrTouchUp);
      } else {
        window.removeEventListener('touchmove', _this.handleWindowMouseOrTouchMove);
        window.removeEventListener('touchend', _this.handleWindowMouseOrTouchUp);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAudioVolumeChange", function (e) {
      var isDraggingVolume = _this.state.isDraggingVolume;
      var _ref = e.target,
          volume = _ref.volume;

      if (_this.lastVolume > 0 && volume === 0 || _this.lastVolume === 0 && volume > 0) {
        _this.props.onMuteChange();
      }

      _this.lastVolume = volume;
      if (isDraggingVolume) return;

      _this.setState({
        hasVolumeAnimation: true,
        currentVolumePos: "".concat((volume / 1 * 100 || 0).toFixed(2), "%")
      });

      clearTimeout(_this.volumeAnimationTimer);
      _this.volumeAnimationTimer = setTimeout(function () {
        _this.setState({
          hasVolumeAnimation: false
        });
      }, 100);
    });
    return _this;
  }

  (0, _createClass2.default)(VolumeControls, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var audio = this.props.audio;

      if (audio && !this.hasAddedAudioEventListener) {
        this.audio = audio;
        this.hasAddedAudioEventListener = true;
        audio.addEventListener('volumechange', this.handleAudioVolumeChange);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.audio && this.hasAddedAudioEventListener) {
        this.audio.removeEventListener('volumechange', this.handleAudioVolumeChange);
      }

      clearTimeout(this.volumeAnimationTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          audio = _this$props.audio,
          showFilledVolume = _this$props.showFilledVolume,
          i18nVolumeControl = _this$props.i18nVolumeControl;
      var _this$state = this.state,
          currentVolumePos = _this$state.currentVolumePos,
          hasVolumeAnimation = _this$state.hasVolumeAnimation;

      var _ref2 = audio || {},
          volume = _ref2.volume;

      return _react.default.createElement("div", {
        ref: this.volumeBar,
        onMouseDown: this.handleVolumnControlMouseOrTouchDown,
        onTouchStart: this.handleVolumnControlMouseOrTouchDown,
        onContextMenu: this.handleContextMenu,
        role: "progressbar",
        "aria-label": i18nVolumeControl,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Number((volume * 100).toFixed(0)),
        tabIndex: 0,
        className: "rhap_volume-bar-area"
      }, _react.default.createElement("div", {
        className: "rhap_volume-bar"
      }, _react.default.createElement("div", {
        className: "rhap_volume-indicator",
        style: {
          left: currentVolumePos,
          transitionDuration: hasVolumeAnimation ? '.1s' : '0s'
        }
      }), showFilledVolume && _react.default.createElement("div", {
        className: "rhap_volume-filled",
        style: {
          width: currentVolumePos
        }
      })));
    }
  }]);
  return VolumeControls;
}(_react.Component);

var _default = VolumeControls;
exports.default = _default;
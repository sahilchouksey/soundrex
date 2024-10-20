"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProgressBarForwardRef = exports.ProgressBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var ProgressBar = function (_Component) {
  (0, _inherits2.default)(ProgressBar, _Component);

  var _super = _createSuper(ProgressBar);

  function ProgressBar() {
    var _this;

    (0, _classCallCheck2.default)(this, ProgressBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "audio", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "timeOnMouseMove", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasAddedAudioEventListener", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "downloadProgressAnimationTimer", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isDraggingProgress: false,
      currentTimePos: '0%',
      hasDownloadProgressAnimation: false,
      downloadProgressArr: [],
      waitingForSeekCallback: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCurrentProgress", function (event) {
      var _this$props = _this.props,
          audio = _this$props.audio,
          progressBar = _this$props.progressBar;
      var isSingleFileProgressiveDownload = audio.src.indexOf('blob:') !== 0 && typeof _this.props.srcDuration === 'undefined';

      if (isSingleFileProgressiveDownload && (!audio.src || !isFinite(audio.currentTime) || !progressBar.current)) {
        return {
          currentTime: 0,
          currentTimePos: '0%'
        };
      }

      var progressBarRect = progressBar.current.getBoundingClientRect();
      var maxRelativePos = progressBarRect.width;
      var relativePos = (0, _utils.getPosX)(event) - progressBarRect.left;

      if (relativePos < 0) {
        relativePos = 0;
      } else if (relativePos > maxRelativePos) {
        relativePos = maxRelativePos;
      }

      var duration = _this.getDuration();

      var currentTime = duration * relativePos / maxRelativePos;
      return {
        currentTime: currentTime,
        currentTimePos: "".concat((relativePos / maxRelativePos * 100).toFixed(2), "%")
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleContextMenu", function (event) {
      event.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseDownOrTouchStartProgressBar", function (event) {
      event.stopPropagation();

      var _this$getCurrentProgr = _this.getCurrentProgress(event.nativeEvent),
          currentTime = _this$getCurrentProgr.currentTime,
          currentTimePos = _this$getCurrentProgr.currentTimePos;

      if (isFinite(currentTime)) {
        _this.timeOnMouseMove = currentTime;

        _this.setState({
          isDraggingProgress: true,
          currentTimePos: currentTimePos
        });

        if (event.nativeEvent instanceof MouseEvent) {
          window.addEventListener('mousemove', _this.handleWindowMouseOrTouchMove);
          window.addEventListener('mouseup', _this.handleWindowMouseOrTouchUp);
        } else {
          window.addEventListener('touchmove', _this.handleWindowMouseOrTouchMove);
          window.addEventListener('touchend', _this.handleWindowMouseOrTouchUp);
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleWindowMouseOrTouchMove", function (event) {
      if (event instanceof MouseEvent) {
        event.preventDefault();
      }

      event.stopPropagation();
      var windowSelection = window.getSelection();

      if (windowSelection && windowSelection.type === 'Range') {
        windowSelection.empty();
      }

      var isDraggingProgress = _this.state.isDraggingProgress;

      if (isDraggingProgress) {
        var _this$getCurrentProgr2 = _this.getCurrentProgress(event),
            currentTime = _this$getCurrentProgr2.currentTime,
            currentTimePos = _this$getCurrentProgr2.currentTimePos;

        _this.timeOnMouseMove = currentTime;

        _this.setState({
          currentTimePos: currentTimePos
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleWindowMouseOrTouchUp", function (event) {
      event.stopPropagation();
      var newTime = _this.timeOnMouseMove;
      var _this$props2 = _this.props,
          audio = _this$props2.audio,
          onChangeCurrentTimeError = _this$props2.onChangeCurrentTimeError,
          onSeek = _this$props2.onSeek;

      if (onSeek) {
        _this.setState({
          isDraggingProgress: false,
          waitingForSeekCallback: true
        }, function () {
          onSeek(audio, newTime).then(function () {
            return _this.setState({
              waitingForSeekCallback: false
            });
          }, function (err) {
            throw new Error(err);
          });
        });
      } else {
        var newProps = {
          isDraggingProgress: false
        };

        if (audio.readyState === audio.HAVE_NOTHING || audio.readyState === audio.HAVE_METADATA || !isFinite(newTime)) {
          try {
            audio.load();
          } catch (err) {
            newProps.currentTimePos = '0%';
            return onChangeCurrentTimeError && onChangeCurrentTimeError(err);
          }
        }

        audio.currentTime = newTime;

        _this.setState(newProps);
      }

      if (event instanceof MouseEvent) {
        window.removeEventListener('mousemove', _this.handleWindowMouseOrTouchMove);
        window.removeEventListener('mouseup', _this.handleWindowMouseOrTouchUp);
      } else {
        window.removeEventListener('touchmove', _this.handleWindowMouseOrTouchMove);
        window.removeEventListener('touchend', _this.handleWindowMouseOrTouchUp);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAudioTimeUpdate", (0, _utils.throttle)(function (e) {
      var isDraggingProgress = _this.state.isDraggingProgress;
      var audio = e.target;
      if (isDraggingProgress || _this.state.waitingForSeekCallback === true) return;
      var currentTime = audio.currentTime;

      var duration = _this.getDuration();

      _this.setState({
        currentTimePos: "".concat((currentTime / duration * 100 || 0).toFixed(2), "%")
      });
    }, _this.props.progressUpdateInterval));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAudioDownloadProgressUpdate", function (e) {
      var audio = e.target;

      var duration = _this.getDuration();

      var downloadProgressArr = [];

      for (var i = 0; i < audio.buffered.length; i++) {
        var bufferedStart = audio.buffered.start(i);
        var bufferedEnd = audio.buffered.end(i);
        downloadProgressArr.push({
          left: "".concat(Math.round(100 / duration * bufferedStart) || 0, "%"),
          width: "".concat(Math.round(100 / duration * (bufferedEnd - bufferedStart)) || 0, "%")
        });
      }

      clearTimeout(_this.downloadProgressAnimationTimer);

      _this.setState({
        downloadProgressArr: downloadProgressArr,
        hasDownloadProgressAnimation: true
      });

      _this.downloadProgressAnimationTimer = setTimeout(function () {
        _this.setState({
          hasDownloadProgressAnimation: false
        });
      }, 200);
    });
    return _this;
  }

  (0, _createClass2.default)(ProgressBar, [{
    key: "getDuration",
    value: function getDuration() {
      var _this$props3 = this.props,
          audio = _this$props3.audio,
          srcDuration = _this$props3.srcDuration;
      return typeof srcDuration === 'undefined' ? audio.duration : srcDuration;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var audio = this.props.audio;

      if (audio && !this.hasAddedAudioEventListener) {
        this.audio = audio;
        this.hasAddedAudioEventListener = true;
        audio.addEventListener('timeupdate', this.handleAudioTimeUpdate);
        audio.addEventListener('progress', this.handleAudioDownloadProgressUpdate);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.initialize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.audio && this.hasAddedAudioEventListener) {
        this.audio.removeEventListener('timeupdate', this.handleAudioTimeUpdate);
        this.audio.removeEventListener('progress', this.handleAudioDownloadProgressUpdate);
      }

      clearTimeout(this.downloadProgressAnimationTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          showDownloadProgress = _this$props4.showDownloadProgress,
          showFilledProgress = _this$props4.showFilledProgress,
          progressBar = _this$props4.progressBar,
          i18nProgressBar = _this$props4.i18nProgressBar;
      var _this$state = this.state,
          currentTimePos = _this$state.currentTimePos,
          downloadProgressArr = _this$state.downloadProgressArr,
          hasDownloadProgressAnimation = _this$state.hasDownloadProgressAnimation;
      return _react.default.createElement("div", {
        className: "rhap_progress-container",
        ref: progressBar,
        "aria-label": i18nProgressBar,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Number(currentTimePos.split('%')[0]),
        tabIndex: 0,
        onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
        onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
        onContextMenu: this.handleContextMenu
      }, _react.default.createElement("div", {
        className: "rhap_progress-bar ".concat(showDownloadProgress ? 'rhap_progress-bar-show-download' : '')
      }, _react.default.createElement("div", {
        className: "rhap_progress-indicator",
        style: {
          left: currentTimePos
        }
      }), showFilledProgress && _react.default.createElement("div", {
        className: "rhap_progress-filled",
        style: {
          width: currentTimePos
        }
      }), showDownloadProgress && downloadProgressArr.map(function (_ref, i) {
        var left = _ref.left,
            width = _ref.width;
        return _react.default.createElement("div", {
          key: i,
          className: "rhap_download-progress",
          style: {
            left: left,
            width: width,
            transitionDuration: hasDownloadProgressAnimation ? '.2s' : '0s'
          }
        });
      })));
    }
  }]);
  return ProgressBar;
}(_react.Component);

exports.ProgressBar = ProgressBar;

var ProgressBarForwardRef = function ProgressBarForwardRef(props, ref) {
  return _react.default.createElement(ProgressBar, (0, _extends2.default)({}, props, {
    progressBar: ref
  }));
};

exports.ProgressBarForwardRef = ProgressBarForwardRef;

var _default = (0, _react.forwardRef)(ProgressBarForwardRef);

exports.default = _default;
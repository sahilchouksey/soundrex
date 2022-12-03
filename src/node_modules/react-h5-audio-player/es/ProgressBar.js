import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, forwardRef } from 'react';
import { getPosX, throttle } from './utils';

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  var _super = _createSuper(ProgressBar);

  function ProgressBar() {
    var _this;

    _classCallCheck(this, ProgressBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "audio", void 0);

    _defineProperty(_assertThisInitialized(_this), "timeOnMouseMove", 0);

    _defineProperty(_assertThisInitialized(_this), "hasAddedAudioEventListener", false);

    _defineProperty(_assertThisInitialized(_this), "downloadProgressAnimationTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDraggingProgress: false,
      currentTimePos: '0%',
      hasDownloadProgressAnimation: false,
      downloadProgressArr: [],
      waitingForSeekCallback: false
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentProgress", function (event) {
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
      var relativePos = getPosX(event) - progressBarRect.left;

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

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDownOrTouchStartProgressBar", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "handleWindowMouseOrTouchMove", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "handleWindowMouseOrTouchUp", function (event) {
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
          newProps.currentTimePos = '0%';
          onChangeCurrentTimeError && onChangeCurrentTimeError();
        } else {
          audio.currentTime = newTime;
        }

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

    _defineProperty(_assertThisInitialized(_this), "handleAudioTimeUpdate", throttle(function (e) {
      var isDraggingProgress = _this.state.isDraggingProgress;
      var audio = e.target;
      if (isDraggingProgress || _this.state.waitingForSeekCallback === true) return;
      var currentTime = audio.currentTime;

      var duration = _this.getDuration();

      _this.setState({
        currentTimePos: "".concat((currentTime / duration * 100 || 0).toFixed(2), "%")
      });
    }, _this.props.progressUpdateInterval));

    _defineProperty(_assertThisInitialized(_this), "handleAudioDownloadProgressUpdate", function (e) {
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

  _createClass(ProgressBar, [{
    key: "getDuration",
    value: function getDuration() {
      var _this$props3 = this.props,
          audio = _this$props3.audio,
          srcDuration = _this$props3.srcDuration;
      return typeof srcDuration === 'undefined' ? audio.duration : srcDuration;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var audio = this.props.audio;

      if (audio && !this.hasAddedAudioEventListener) {
        this.audio = audio;
        this.hasAddedAudioEventListener = true;
        audio.addEventListener('timeupdate', this.handleAudioTimeUpdate);
        audio.addEventListener('progress', this.handleAudioDownloadProgressUpdate);
      }
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
      return React.createElement("div", {
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
      }, React.createElement("div", {
        className: "rhap_progress-bar ".concat(showDownloadProgress ? 'rhap_progress-bar-show-download' : '')
      }, React.createElement("div", {
        className: "rhap_progress-indicator",
        style: {
          left: currentTimePos
        }
      }), showFilledProgress && React.createElement("div", {
        className: "rhap_progress-filled",
        style: {
          width: currentTimePos
        }
      }), showDownloadProgress && downloadProgressArr.map(function (_ref, i) {
        var left = _ref.left,
            width = _ref.width;
        return React.createElement("div", {
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
}(Component);

var ProgressBarForwardRef = function ProgressBarForwardRef(props, ref) {
  return React.createElement(ProgressBar, _extends({}, props, {
    progressBar: ref
  }));
};

export default forwardRef(ProgressBarForwardRef);
export { ProgressBar, ProgressBarForwardRef };
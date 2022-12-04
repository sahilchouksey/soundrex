"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
Object.defineProperty(exports, "RHAP_UI", {
  enumerable: true,
  get: function get() {
    return _constants.RHAP_UI;
  },
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);

var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);

var _assertThisInitialized2 = _interopRequireDefault(
  require("@babel/runtime/helpers/assertThisInitialized")
);

var _inherits2 = _interopRequireDefault(
  require("@babel/runtime/helpers/inherits")
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime/helpers/possibleConstructorReturn")
);

var _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime/helpers/getPrototypeOf")
);

var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@iconify/react");

var _playCircle = _interopRequireDefault(
  require("@iconify/icons-mdi/play-circle")
);

var _pauseCircle = _interopRequireDefault(
  require("@iconify/icons-mdi/pause-circle")
);

var _skipPrevious = _interopRequireDefault(
  require("@iconify/icons-mdi/skip-previous")
);

var _skipNext = _interopRequireDefault(require("@iconify/icons-mdi/skip-next"));

var _fastForward = _interopRequireDefault(
  require("@iconify/icons-mdi/fast-forward")
);

var _rewind = _interopRequireDefault(require("@iconify/icons-mdi/rewind"));

var _volumeHigh = _interopRequireDefault(
  require("@iconify/icons-mdi/volume-high")
);

var _volumeMute = _interopRequireDefault(
  require("@iconify/icons-mdi/volume-mute")
);

var _repeat = _interopRequireDefault(require("@iconify/icons-mdi/repeat"));

var _repeatOff = _interopRequireDefault(
  require("@iconify/icons-mdi/repeat-off")
);

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _CurrentTime = _interopRequireDefault(require("./CurrentTime"));

var _Duration = _interopRequireDefault(require("./Duration"));

var _VolumeBar = _interopRequireDefault(require("./VolumeBar"));

var _constants = require("./constants");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

var H5AudioPlayer = (function (_Component) {
  (0, _inherits2.default)(H5AudioPlayer, _Component);

  var _super = _createSuper(H5AudioPlayer);

  function H5AudioPlayer() {
    var _this;

    (0, _classCallCheck2.default)(this, H5AudioPlayer);

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "audio",
      (0, _react.createRef)()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "progressBar",
      (0, _react.createRef)()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "container",
      (0, _react.createRef)()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "lastVolume",
      _this.props.volume
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "listenTracker",
      void 0
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "volumeAnimationTimer",
      void 0
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "downloadProgressAnimationTimer",
      void 0
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "togglePlay",
      function (e) {
        e.stopPropagation();
        var audio = _this.audio.current;

        if ((audio.paused || audio.ended) && audio.src) {
          _this.playAudioPromise();
        } else if (!audio.paused) {
          audio.pause();
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "playAudioPromise",
      function () {
        var playPromise = _this.audio.current.play();

        if (playPromise) {
          playPromise.then(null).catch(function (err) {
            var onPlayError = _this.props.onPlayError;
            onPlayError && onPlayError(new Error(err));
          });
        } else {
          _this.forceUpdate();
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "isPlaying",
      function () {
        var audio = _this.audio.current;
        if (!audio) return false;
        return !audio.paused && !audio.ended;
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handlePlay",
      function (e) {
        _this.forceUpdate();

        _this.props.onPlay && _this.props.onPlay(e);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handlePause",
      function (e) {
        if (!_this.audio) return;

        _this.forceUpdate();

        _this.props.onPause && _this.props.onPause(e);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleEnded",
      function (e) {
        if (!_this.audio) return;

        _this.forceUpdate();

        _this.props.onEnded && _this.props.onEnded(e);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleAbort",
      function (e) {
        _this.props.onAbort && _this.props.onAbort(e);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleClickVolumeButton",
      function () {
        var audio = _this.audio.current;

        if (audio.volume > 0) {
          _this.lastVolume = audio.volume;
          audio.volume = 0;
        } else {
          audio.volume = _this.lastVolume;
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleMuteChange",
      function () {
        _this.forceUpdate();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleClickLoopButton",
      function () {
        _this.audio.current.loop = !_this.audio.current.loop;

        _this.forceUpdate();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleClickRewind",
      function () {
        var _this$props = _this.props,
          progressJumpSteps = _this$props.progressJumpSteps,
          progressJumpStep = _this$props.progressJumpStep;
        var jumpStep = progressJumpSteps.backward || progressJumpStep;

        _this.setJumpTime(-jumpStep);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleClickForward",
      function () {
        var _this$props2 = _this.props,
          progressJumpSteps = _this$props2.progressJumpSteps,
          progressJumpStep = _this$props2.progressJumpStep;
        var jumpStep = progressJumpSteps.forward || progressJumpStep;

        _this.setJumpTime(jumpStep);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "setJumpTime",
      function (time) {
        var audio = _this.audio.current;
        var duration = audio.duration,
          prevTime = audio.currentTime;

        if (
          audio.readyState === audio.HAVE_NOTHING ||
          audio.readyState === audio.HAVE_METADATA ||
          !isFinite(duration) ||
          !isFinite(prevTime)
        ) {
          return (
            _this.props.onChangeCurrentTimeError &&
            _this.props.onChangeCurrentTimeError()
          );
        }

        var currentTime = prevTime + time / 1000;

        if (currentTime < 0) {
          audio.currentTime = 0;
          currentTime = 0;
        } else if (currentTime > duration) {
          audio.currentTime = duration;
          currentTime = duration;
        } else {
          audio.currentTime = currentTime;
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "setJumpVolume",
      function (volume) {
        var newVolume = _this.audio.current.volume + volume;
        if (newVolume < 0) newVolume = 0;
        else if (newVolume > 1) newVolume = 1;
        _this.audio.current.volume = newVolume;
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleKeyDown",
      function (e) {
        if (_this.props.hasDefaultKeyBindings) {
          switch (e.key) {
            case " ":
              if (
                e.target === _this.container.current ||
                e.target === _this.progressBar.current
              ) {
                e.preventDefault();

                _this.togglePlay(e);
              }

              break;

            case "ArrowLeft":
              _this.handleClickRewind();

              break;

            case "ArrowRight":
              _this.handleClickForward();

              break;

            case "ArrowUp":
              e.preventDefault();

              _this.setJumpVolume(_this.props.volumeJumpStep);

              break;

            case "ArrowDown":
              e.preventDefault();

              _this.setJumpVolume(-_this.props.volumeJumpStep);

              break;

            case "l":
              _this.handleClickLoopButton();

              break;

            case "m":
              _this.handleClickVolumeButton();

              break;
          }
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "renderUIModules",
      function (modules) {
        return modules.map(function (comp, i) {
          return _this.renderUIModule(comp, i);
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "renderUIModule",
      function (comp, key) {
        var _this$props3 = _this.props,
          defaultCurrentTime = _this$props3.defaultCurrentTime,
          progressUpdateInterval = _this$props3.progressUpdateInterval,
          showDownloadProgress = _this$props3.showDownloadProgress,
          showFilledProgress = _this$props3.showFilledProgress,
          showFilledVolume = _this$props3.showFilledVolume,
          defaultDuration = _this$props3.defaultDuration,
          customIcons = _this$props3.customIcons,
          showSkipControls = _this$props3.showSkipControls,
          onClickPrevious = _this$props3.onClickPrevious,
          onClickNext = _this$props3.onClickNext,
          onChangeCurrentTimeError = _this$props3.onChangeCurrentTimeError,
          showJumpControls = _this$props3.showJumpControls,
          customAdditionalControls = _this$props3.customAdditionalControls,
          customVolumeControls = _this$props3.customVolumeControls,
          muted = _this$props3.muted,
          timeFormat = _this$props3.timeFormat,
          volumeProp = _this$props3.volume,
          loopProp = _this$props3.loop,
          mse = _this$props3.mse,
          i18nAriaLabels = _this$props3.i18nAriaLabels;

        switch (comp) {
          case _constants.RHAP_UI.CURRENT_TIME:
            return _react.default.createElement(
              "div",
              {
                key: key,
                id: "rhap_current-time",
                className: "rhap_time rhap_current-time",
              },
              _react.default.createElement(_CurrentTime.default, {
                audio: _this.audio.current,
                isLeftTime: false,
                defaultCurrentTime: defaultCurrentTime,
                timeFormat: timeFormat,
              })
            );

          case _constants.RHAP_UI.VOLUME_CONTROLS:
            return _react.default.createElement(
              "div",
              {
                key: key,
                className: "rhap_volume-controls",
              },
              _this.renderUIModules(customVolumeControls)
            );

          case _constants.RHAP_UI.CURRENT_LEFT_TIME:
            return _react.default.createElement(
              "div",
              {
                key: key,
                id: "rhap_current-left-time",
                className: "rhap_time rhap_current-left-time",
              },
              _react.default.createElement(_CurrentTime.default, {
                audio: _this.audio.current,
                isLeftTime: true,
                defaultCurrentTime: defaultCurrentTime,
                timeFormat: timeFormat,
              })
            );

          case _constants.RHAP_UI.PROGRESS_BAR:
            return _react.default.createElement(_ProgressBar.default, {
              key: key,
              ref: _this.progressBar,
              audio: _this.audio.current,
              progressUpdateInterval: progressUpdateInterval,
              showDownloadProgress: showDownloadProgress,
              showFilledProgress: showFilledProgress,
              onSeek: mse && mse.onSeek,
              onChangeCurrentTimeError: onChangeCurrentTimeError,
              srcDuration: mse && mse.srcDuration,
              i18nProgressBar: i18nAriaLabels.progressControl,
            });

          case _constants.RHAP_UI.DURATION:
            return _react.default.createElement(
              "div",
              {
                key: key,
                className: "rhap_time rhap_total-time",
              },
              mse && mse.srcDuration
                ? (0, _utils.getDisplayTimeBySeconds)(
                    mse.srcDuration,
                    mse.srcDuration,
                    _this.props.timeFormat
                  )
                : _react.default.createElement(_Duration.default, {
                    audio: _this.audio.current,
                    defaultDuration: defaultDuration,
                    timeFormat: timeFormat,
                  })
            );

          case _constants.RHAP_UI.ADDITIONAL_CONTROLS:
            return _react.default.createElement(
              "div",
              {
                key: key,
                className: "rhap_additional-controls",
              },
              _this.renderUIModules(customAdditionalControls)
            );

          case _constants.RHAP_UI.MAIN_CONTROLS: {
            var isPlaying = _this.isPlaying();

            var actionIcon;

            if (isPlaying) {
              actionIcon = customIcons.pause
                ? customIcons.pause
                : _react.default.createElement(_react2.Icon, {
                    icon: _pauseCircle.default,
                  });
            } else {
              actionIcon = customIcons.play
                ? customIcons.play
                : _react.default.createElement(_react2.Icon, {
                    icon: _playCircle.default,
                  });
            }

            return _react.default.createElement(
              "div",
              {
                key: key,
                className: "rhap_main-controls",
              },
              showSkipControls &&
                _react.default.createElement(
                  "button",
                  {
                    "aria-label": i18nAriaLabels.previous,
                    "className":
                      "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                    "type": "button",
                    "onClick": onClickPrevious,
                  },
                  customIcons.previous
                    ? customIcons.previous
                    : _react.default.createElement(_react2.Icon, {
                        icon: _skipPrevious.default,
                      })
                ),
              showJumpControls &&
                _react.default.createElement(
                  "button",
                  {
                    "aria-label": i18nAriaLabels.rewind,
                    "className":
                      "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                    "type": "button",
                    "onClick": _this.handleClickRewind,
                  },
                  customIcons.rewind
                    ? customIcons.rewind
                    : _react.default.createElement(_react2.Icon, {
                        icon: _rewind.default,
                      })
                ),
              _react.default.createElement(
                "button",
                {
                  "aria-label": isPlaying
                    ? i18nAriaLabels.pause
                    : i18nAriaLabels.play,
                  "className":
                    "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                  "type": "button",
                  "onClick": _this.togglePlay,
                },
                actionIcon
              ),
              showJumpControls &&
                _react.default.createElement(
                  "button",
                  {
                    "aria-label": i18nAriaLabels.forward,
                    "className":
                      "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                    "type": "button",
                    "onClick": _this.handleClickForward,
                  },
                  customIcons.forward
                    ? customIcons.forward
                    : _react.default.createElement(_react2.Icon, {
                        icon: _fastForward.default,
                      })
                ),
              showSkipControls &&
                _react.default.createElement(
                  "button",
                  {
                    "aria-label": i18nAriaLabels.next,
                    "className":
                      "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                    "type": "button",
                    "onClick": onClickNext,
                  },
                  customIcons.next
                    ? customIcons.next
                    : _react.default.createElement(_react2.Icon, {
                        icon: _skipNext.default,
                      })
                )
            );
          }
          case _constants.RHAP_UI.LOOP: {
            var loop = _this.audio.current
              ? _this.audio.current.loop
              : loopProp;
            var loopIcon;

            if (loop) {
              loopIcon = customIcons.loop
                ? customIcons.loop
                : _react.default.createElement(_react2.Icon, {
                    icon: _repeat.default,
                  });
            } else {
              loopIcon = customIcons.loopOff
                ? customIcons.loopOff
                : _react.default.createElement(_react2.Icon, {
                    icon: _repeatOff.default,
                  });
            }

            return _react.default.createElement(
              "button",
              {
                "key": key,
                "aria-label": loop
                  ? i18nAriaLabels.loop
                  : i18nAriaLabels.loopOff,
                "className": "rhap_button-clear rhap_repeat-button",
                "type": "button",
                "onClick": _this.handleClickLoopButton,
              },
              loopIcon
            );
          }

          case _constants.RHAP_UI.VOLUME: {
            var _ref = _this.audio.current || {},
              _ref$volume = _ref.volume,
              volume =
                _ref$volume === void 0 ? (muted ? 0 : volumeProp) : _ref$volume;

            var volumeIcon;

            if (volume) {
              volumeIcon = customIcons.volume
                ? customIcons.volume
                : _react.default.createElement(_react2.Icon, {
                    icon: _volumeHigh.default,
                  });
            } else {
              volumeIcon = customIcons.volume
                ? customIcons.volumeMute
                : _react.default.createElement(_react2.Icon, {
                    icon: _volumeMute.default,
                  });
            }

            return _react.default.createElement(
              "div",
              {
                key: key,
                className: "rhap_volume-container",
              },
              _react.default.createElement(
                "button",
                {
                  "aria-label": volume
                    ? i18nAriaLabels.volume
                    : i18nAriaLabels.volumeMute,
                  "onClick": _this.handleClickVolumeButton,
                  "type": "button",
                  "className": "rhap_button-clear rhap_volume-button",
                },
                volumeIcon
              ),
              _react.default.createElement(_VolumeBar.default, {
                audio: _this.audio.current,
                volume: volume,
                onMuteChange: _this.handleMuteChange,
                showFilledVolume: showFilledVolume,
                i18nVolumeControl: i18nAriaLabels.volumeControl,
              })
            );
          }

          default:
            if (!(0, _react.isValidElement)(comp)) {
              return null;
            }

            return comp.key
              ? comp
              : (0, _react.cloneElement)(comp, {
                  key: key,
                });
        }
      }
    );
    return _this;
  }

  (0, _createClass2.default)(H5AudioPlayer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.forceUpdate();
        var audio = this.audio.current;

        if (this.props.muted) {
          audio.volume = 0;
        } else {
          audio.volume = this.lastVolume;
        }

        audio.addEventListener("error", function (e) {
          _this2.props.onError && _this2.props.onError(e);
        });
        audio.addEventListener("canplay", function (e) {
          _this2.props.onCanPlay && _this2.props.onCanPlay(e);
        });
        audio.addEventListener("canplaythrough", function (e) {
          _this2.props.onCanPlayThrough && _this2.props.onCanPlayThrough(e);
        });
        audio.addEventListener("play", this.handlePlay);
        audio.addEventListener("abort", this.handleAbort);
        audio.addEventListener("ended", this.handleEnded);
        audio.addEventListener("playing", function (e) {
          _this2.props.onPlaying && _this2.props.onPlaying(e);
        });
        audio.addEventListener("seeking", function (e) {
          _this2.props.onSeeking && _this2.props.onSeeking(e);
        });
        audio.addEventListener("seeked", function (e) {
          _this2.props.onSeeked && _this2.props.onSeeked(e);
        });
        audio.addEventListener("waiting", function (e) {
          _this2.props.onWaiting && _this2.props.onWaiting(e);
        });
        audio.addEventListener("emptied", function (e) {
          _this2.props.onEmptied && _this2.props.onEmptied(e);
        });
        audio.addEventListener("stalled", function (e) {
          _this2.props.onStalled && _this2.props.onStalled(e);
        });
        audio.addEventListener("suspend", function (e) {
          _this2.props.onSuspend && _this2.props.onSuspend(e);
        });
        audio.addEventListener("loadstart", function (e) {
          _this2.props.onLoadStart && _this2.props.onLoadStart(e);
        });
        audio.addEventListener("loadedmetadata", function (e) {
          _this2.props.onLoadedMetaData && _this2.props.onLoadedMetaData(e);
        });
        audio.addEventListener("loadeddata", function (e) {
          _this2.props.onLoadedData && _this2.props.onLoadedData(e);
        });
        audio.addEventListener("pause", this.handlePause);
        audio.addEventListener(
          "timeupdate",
          (0, _utils.throttle)(function (e) {
            _this2.props.onListen && _this2.props.onListen(e);
          }, this.props.listenInterval)
        );
        audio.addEventListener("volumechange", function (e) {
          _this2.props.onVolumeChange && _this2.props.onVolumeChange(e);
        });
        audio.addEventListener("encrypted", function (e) {
          var mse = _this2.props.mse;
          mse && mse.onEcrypted && mse.onEcrypted(e);
        });
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props4 = this.props,
          src = _this$props4.src,
          autoPlayAfterSrcChange = _this$props4.autoPlayAfterSrcChange;

        if (prevProps.src !== src) {
          if (autoPlayAfterSrcChange) {
            this.playAudioPromise();
          } else {
            this.forceUpdate();
          }
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var audio = this.audio.current;

        if (audio) {
          audio.removeEventListener("play", this.handlePlay);
          audio.removeEventListener("pause", this.handlePause);
          audio.removeEventListener("abort", this.handleAbort);
          audio.removeAttribute("src");
          audio.load();
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
          className = _this$props5.className,
          src = _this$props5.src,
          loopProp = _this$props5.loop,
          preload = _this$props5.preload,
          autoPlay = _this$props5.autoPlay,
          crossOrigin = _this$props5.crossOrigin,
          mediaGroup = _this$props5.mediaGroup,
          header = _this$props5.header,
          footer = _this$props5.footer,
          layout = _this$props5.layout,
          customProgressBarSection = _this$props5.customProgressBarSection,
          customControlsSection = _this$props5.customControlsSection,
          children = _this$props5.children,
          style = _this$props5.style,
          i18nAriaLabels = _this$props5.i18nAriaLabels;
        var loop = this.audio.current ? this.audio.current.loop : loopProp;
        var loopClass = loop ? "rhap_loop--on" : "rhap_loop--off";
        var isPlayingClass = this.isPlaying()
          ? "rhap_play-status--playing"
          : "rhap_play-status--paused";
        return _react.default.createElement(
          "div",
          {
            "role": "group",
            "tabIndex": 0,
            "aria-label": i18nAriaLabels.player,
            "className": "rhap_container "
              .concat(loopClass, " ")
              .concat(isPlayingClass, " ")
              .concat(className),
            "onKeyDown": this.handleKeyDown,
            "ref": this.container,
            "style": style,
          },
          _react.default.createElement(
            "audio",
            {
              src: src,
              controls: false,
              loop: loop,
              autoPlay: autoPlay,
              preload: preload,
              crossOrigin: crossOrigin,
              mediaGroup: mediaGroup,
              ref: this.audio,
            },
            children
          ),
          header &&
            _react.default.createElement(
              "div",
              {
                className: "rhap_header",
              },
              header
            ),
          _react.default.createElement(
            "div",
            {
              className: "rhap_main ".concat(
                (0, _utils.getMainLayoutClassName)(layout)
              ),
            },
            _react.default.createElement(
              "div",
              {
                className: "rhap_progress-section",
              },
              this.renderUIModules(customProgressBarSection)
            ),
            _react.default.createElement(
              "div",
              {
                className: "rhap_controls-section",
              },
              this.renderUIModules(customControlsSection)
            )
          ),
          footer &&
            _react.default.createElement(
              "div",
              {
                className: "rhap_footer",
              },
              footer
            )
        );
      },
    },
  ]);
  return H5AudioPlayer;
})(_react.Component);

(0, _defineProperty2.default)(H5AudioPlayer, "defaultProps", {
  autoPlay: false,
  autoPlayAfterSrcChange: true,
  listenInterval: 1000,
  progressJumpStep: 5000,
  progressJumpSteps: {},
  volumeJumpStep: 0.1,
  loop: false,
  muted: false,
  preload: "auto",
  progressUpdateInterval: 20,
  defaultCurrentTime: "--:--",
  defaultDuration: "--:--",
  timeFormat: "auto",
  volume: 1,
  className: "",
  showJumpControls: true,
  showSkipControls: false,
  showDownloadProgress: true,
  showFilledProgress: true,
  showFilledVolume: false,
  customIcons: {},
  customProgressBarSection: [
    _constants.RHAP_UI.CURRENT_TIME,
    _constants.RHAP_UI.PROGRESS_BAR,
    _constants.RHAP_UI.DURATION,
  ],
  customControlsSection: [
    _constants.RHAP_UI.ADDITIONAL_CONTROLS,
    _constants.RHAP_UI.MAIN_CONTROLS,
    _constants.RHAP_UI.VOLUME_CONTROLS,
  ],
  customAdditionalControls: [_constants.RHAP_UI.LOOP],
  customVolumeControls: [_constants.RHAP_UI.VOLUME],
  layout: "stacked",
  hasDefaultKeyBindings: true,
  i18nAriaLabels: {
    player: "Audio player",
    progressControl: "Audio progress control",
    volumeControl: "Volume control",
    play: "Play",
    pause: "Pause",
    rewind: "Rewind",
    forward: "Forward",
    previous: "Previous",
    next: "Skip",
    loop: "Disable loop",
    loopOff: "Enable loop",
    volume: "Mute",
    volumeMute: "Unmute",
  },
});
var _default = H5AudioPlayer;
exports.default = _default;

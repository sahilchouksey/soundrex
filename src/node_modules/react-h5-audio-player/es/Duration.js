import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { PureComponent } from 'react';
import { getDisplayTimeBySeconds } from './utils';

var Duration = function (_PureComponent) {
  _inherits(Duration, _PureComponent);

  var _super = _createSuper(Duration);

  function Duration(props) {
    var _this;

    _classCallCheck(this, Duration);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "audio", void 0);

    _defineProperty(_assertThisInitialized(_this), "hasAddedAudioEventListener", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      duration: _this.props.audio ? getDisplayTimeBySeconds(_this.props.audio.duration, _this.props.audio.duration, _this.props.timeFormat) : _this.props.defaultDuration
    });

    _defineProperty(_assertThisInitialized(_this), "handleAudioDurationChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          timeFormat = _this$props.timeFormat,
          defaultDuration = _this$props.defaultDuration;

      _this.setState({
        duration: getDisplayTimeBySeconds(audio.duration, audio.duration, timeFormat) || defaultDuration
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addAudioEventListeners", function () {
      var audio = _this.props.audio;

      if (audio && !_this.hasAddedAudioEventListener) {
        _this.audio = audio;
        _this.hasAddedAudioEventListener = true;
        audio.addEventListener('durationchange', _this.handleAudioDurationChange);
        audio.addEventListener('abort', _this.handleAudioDurationChange);
      }
    });

    var _audio = props.audio,
        _timeFormat = props.timeFormat,
        _defaultDuration = props.defaultDuration;
    _this.state = {
      duration: _audio ? getDisplayTimeBySeconds(_audio.duration, _audio.duration, _timeFormat) : _defaultDuration
    };
    return _this;
  }

  _createClass(Duration, [{
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
        this.audio.removeEventListener('durationchange', this.handleAudioDurationChange);
        this.audio.removeEventListener('abort', this.handleAudioDurationChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.duration;
    }
  }]);

  return Duration;
}(PureComponent);

export default Duration;
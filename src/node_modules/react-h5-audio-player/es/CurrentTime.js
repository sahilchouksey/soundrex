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

var CurrentTime = function (_PureComponent) {
  _inherits(CurrentTime, _PureComponent);

  var _super = _createSuper(CurrentTime);

  function CurrentTime(props) {
    var _this;

    _classCallCheck(this, CurrentTime);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "audio", void 0);

    _defineProperty(_assertThisInitialized(_this), "hasAddedAudioEventListener", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentTime: _this.props.defaultCurrentTime
    });

    _defineProperty(_assertThisInitialized(_this), "handleAudioCurrentTimeChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          isLeftTime = _this$props.isLeftTime,
          timeFormat = _this$props.timeFormat,
          defaultCurrentTime = _this$props.defaultCurrentTime;

      _this.setState({
        currentTime: getDisplayTimeBySeconds(isLeftTime ? audio.duration - audio.currentTime : audio.currentTime, audio.duration, timeFormat) || defaultCurrentTime
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addAudioEventListeners", function () {
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
      currentTime = getDisplayTimeBySeconds(_isLeftTime ? _audio.duration - _audio.currentTime : _audio.currentTime, _audio.duration, _timeFormat);
    }

    _this.state = {
      currentTime: currentTime
    };
    return _this;
  }

  _createClass(CurrentTime, [{
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
}(PureComponent);

export default CurrentTime;
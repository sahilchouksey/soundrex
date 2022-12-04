(this.webpackJsonpsoundrex = this.webpackJsonpsoundrex || []).push([
  [0],
  {
    102: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value: !0}),
        (t.getPosX =
          t.getMainLayoutClassName =
          t.getDisplayTimeBySeconds =
            void 0),
        (t.throttle = function (e, t) {
          var n = !1;
          return function (a) {
            n ||
              (e(a),
              (n = !0),
              setTimeout(function () {
                return (n = !1);
              }, t));
          };
        });
      t.getMainLayoutClassName = function (e) {
        switch (e) {
          default:
            return "rhap_stacked";
          case "stacked-reverse":
            return "rhap_stacked-reverse";
          case "horizontal":
            return "rhap_horizontal";
          case "horizontal-reverse":
            return "rhap_horizontal-reverse";
        }
      };
      t.getPosX = function (e) {
        return e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      };
      var a = function (e) {
        return e > 9 ? e.toString() : "0".concat(e);
      };
      t.getDisplayTimeBySeconds = function (e, t, n) {
        if (!isFinite(e)) return null;
        var o = Math.floor(e / 60),
          l = a(o),
          i = a(Math.floor(e % 60)),
          r = a(Math.floor(o % 60)),
          s = Math.floor(o / 60),
          c = "".concat(l, ":").concat(i),
          u = "".concat(s, ":").concat(r, ":").concat(i);
        return "auto" === n
          ? t >= 3600
            ? u
            : c
          : "mm:ss" === n
          ? c
          : "hh:mm:ss" === n
          ? u
          : void 0;
      };
    },
    105: function (e, t, n) {
      e.exports = {
        "music-card-box": "MusicShelfBox_music-card-box__4LMBF",
        "music-card-box-container":
          "MusicShelfBox_music-card-box-container___YVj0",
        "music-card-box__title": "MusicShelfBox_music-card-box__title__1rn2M",
        "music-card-box__img": "MusicShelfBox_music-card-box__img__yZrxX",
      };
    },
    106: function (e, t, n) {
      e.exports = {
        "search-navigation-item":
          "SearchNavigation_search-navigation-item__2P5uY",
        "search-navigation-link":
          "SearchNavigation_search-navigation-link__3sw0_",
        "search-navigation-link-active":
          "SearchNavigation_search-navigation-link-active__4NXXJ",
      };
    },
    107: function (e, t, n) {
      e.exports = {
        "like-button-spinner": "LikeButton_like-button-spinner__2a_yH",
        "like-button": "LikeButton_like-button__142xr",
        "like-icon-filled": "LikeButton_like-icon-filled__2wctn",
        "like-icon": "LikeButton_like-icon__kG7x4",
      };
    },
    108: function (e, t, n) {
      e.exports = {
        "toggle-player-page-button":
          "TogglePlayerPageButton_toggle-player-page-button__1a5zt",
        "toggle-player-page-button-icon":
          "TogglePlayerPageButton_toggle-player-page-button-icon__29cam",
        "toggle-player-page-button-rotate":
          "TogglePlayerPageButton_toggle-player-page-button-rotate__1lkaO",
      };
    },
    131: function (e, t, n) {
      e.exports = {
        "nav-list": "Navigation-list_nav-list__CzSUz",
        "nav-list-start": "Navigation-list_nav-list-start__teXwm",
        "nav-list-end": "Navigation-list_nav-list-end__2rAbx",
      };
    },
    148: function (e, t, n) {
      e.exports = {
        "loading": "Loading_loading__3DHQI",
        "spinner-fullscreen": "Loading_spinner-fullscreen__2mI6p",
        "spinner-fullscreen-spinner":
          "Loading_spinner-fullscreen-spinner__2h5jS",
      };
    },
    154: function (e, t, n) {
      e.exports = {
        left: "ArrowBtn_left__2EJ76",
        right: "ArrowBtn_right__SeDgF",
      };
    },
    188: function (e, t, n) {
      e.exports = {container: "Layout_container__1qghn"};
    },
    189: function (e, t, n) {
      e.exports = {header: "Header_header__2Ko_3"};
    },
    190: function (e, t, n) {
      e.exports = {content: "Content_content__3zoOY"};
    },
    191: function (e, t, n) {
      e.exports = {logo: "Logo_logo__4XOk3"};
    },
    195: function (e, t) {
      e.exports = {keywords: ["likes", "like"]};
    },
    196: function (e, t, n) {
      e.exports = {"play-button": "PlayButton_play-button__3C6PM"};
    },
    204: function (e, t, n) {
      e.exports = {navbar: "Navigation_navbar__3FboN"};
    },
    208: function (e, t, n) {
      e.exports = {
        musicCardWrapper: "MusicShelfCardWrapper_musicCardWrapper__3mBDM",
      };
    },
    210: function (e, t, n) {
      e.exports = {
        didYouMeanRenderer: "didYouMeanRenderer_didYouMeanRenderer__GulA2",
      };
    },
    211: function (e, t, n) {
      e.exports = {
        showingResultsForRenderer:
          "showingResultsForRenderer_showingResultsForRenderer__qfdwm",
      };
    },
    212: function (e, t, n) {
      e.exports = {
        "row-music-shelf-list": "RowMusicShelfList_row-music-shelf-list__1-M22",
      };
    },
    214: function (e, t, n) {
      e.exports = {"show-more": "ShowMoreButton_show-more__1ioTK"};
    },
    215: function (e, t, n) {
      e.exports = {"error-overlay": "Player_error-overlay__37CKX"};
    },
    23: function (e, t, n) {
      e.exports = {
        "song": "Song_song__hza6_",
        "song-fetching": "Song_song-fetching__ouqMN",
        "song-page-full": "Song_song-page-full__SVnlo",
        "song-page-close": "Song_song-page-close__26vvr",
        "song-thumbnail": "Song_song-thumbnail__Im5Gj",
        "song-image": "Song_song-image__1kcd-",
        "song-tabs": "Song_song-tabs__1Hn0O",
        "song-tabs-list": "Song_song-tabs-list__whVVx",
        "song-tabs-lyrics": "Song_song-tabs-lyrics__wSgCE",
        "tabs-related": "Song_tabs-related__2lXwh",
      };
    },
    24: function (e, t, n) {
      e.exports = {
        "album-playlist-wrapper":
          "Album_Playlist_album-playlist-wrapper__2MlBY",
        "album-playlist-header": "Album_Playlist_album-playlist-header__mdaKp",
        "album-playlist-header-actions":
          "Album_Playlist_album-playlist-header-actions__1zeQa",
        "album-playlist-header-actions-play":
          "Album_Playlist_album-playlist-header-actions-play__3Ca3m",
        "album-playlist-header-actions-play-icon":
          "Album_Playlist_album-playlist-header-actions-play-icon__1AoRF",
        "album-playlist-header-actions-like":
          "Album_Playlist_album-playlist-header-actions-like__3mspz",
        "album-playlist-header__img":
          "Album_Playlist_album-playlist-header__img__2eb1B",
        "album-playlist-header__img-wrapper":
          "Album_Playlist_album-playlist-header__img-wrapper__Mzg3N",
        "album-playlist-header__content":
          "Album_Playlist_album-playlist-header__content__3U0FJ",
        "album-playlist-header__title":
          "Album_Playlist_album-playlist-header__title__2t0E-",
        "album-playlist-header__subtitles":
          "Album_Playlist_album-playlist-header__subtitles__2dcLB",
        "album-playlist-header__description":
          "Album_Playlist_album-playlist-header__description__1dxNr",
        "album-playlist-header__subtitles-subtitle":
          "Album_Playlist_album-playlist-header__subtitles-subtitle__2qipy",
        "album-playlist-header__subtitles-secondSubtitle":
          "Album_Playlist_album-playlist-header__subtitles-secondSubtitle__vpmqC",
        "album-playlist-header__description-less":
          "Album_Playlist_album-playlist-header__description-less__3FyLB",
        "album-playlist-header__description-more":
          "Album_Playlist_album-playlist-header__description-more__1mx3k",
        "album-playlist-header__description-btn":
          "Album_Playlist_album-playlist-header__description-btn__22aLD",
        "album-playlist-contents":
          "Album_Playlist_album-playlist-contents__6wgkX",
        "album-playlist-contents-header":
          "Album_Playlist_album-playlist-contents-header__3wsBf",
        "album-playlist-contents-header-thumb":
          "Album_Playlist_album-playlist-contents-header-thumb__1Q9Q1",
        "album-playlist-contents-header-content":
          "Album_Playlist_album-playlist-contents-header-content__3PQj-",
        "album-playlist-contents-header-fixed":
          "Album_Playlist_album-playlist-contents-header-fixed__1NOvZ",
      };
    },
    29: function (e, t, n) {
      e.exports = {
        "selected-song": "RowMusicShelf_selected-song__3-7KZ",
        "row-music-shelf-thumbnail-container":
          "RowMusicShelf_row-music-shelf-thumbnail-container__3j90P",
        "row-music-shelf-thumbnail-img":
          "RowMusicShelf_row-music-shelf-thumbnail-img__1G9NZ",
        "row-music-shelf-thumbnail-icon":
          "RowMusicShelf_row-music-shelf-thumbnail-icon__3f6nX",
        "row-music-shelf": "RowMusicShelf_row-music-shelf__1G3o_",
        "row-music-shelf-menu": "RowMusicShelf_row-music-shelf-menu__22HGk",
        "row-music-shelf-content":
          "RowMusicShelf_row-music-shelf-content__3zG3A",
        "row-music-shelf__title": "RowMusicShelf_row-music-shelf__title__3oSx8",
        "row-music-shelf__subtitle":
          "RowMusicShelf_row-music-shelf__subtitle__BZwH3",
        "row-music-shelf-length": "RowMusicShelf_row-music-shelf-length__1ruK8",
        "row-music-shelf-title": "RowMusicShelf_row-music-shelf-title__X-DTi",
        "row-music-shelf-subtitle":
          "RowMusicShelf_row-music-shelf-subtitle__X66NR",
        "library-button": "RowMusicShelf_library-button__3a_re",
      };
    },
    30: function (e, t, n) {
      e.exports = {
        "artist-wrapper": "Artist_artist-wrapper__cD5tn",
        "artist-header": "Artist_artist-header__1aa_Q",
        "artist-header-actions": "Artist_artist-header-actions__2yNHr",
        "artist-header-actions-play":
          "Artist_artist-header-actions-play__M-jfb",
        "artist-header-actions-play-icon":
          "Artist_artist-header-actions-play-icon__gZL3D",
        "artist-header-actions-like":
          "Artist_artist-header-actions-like__ReO5o",
        "artist-header__content": "Artist_artist-header__content__GDQvn",
        "artist-header-title": "Artist_artist-header-title__3C9Du",
        "artist-header-thumbnail": "Artist_artist-header-thumbnail__2ZZTn",
        "artist-contents": "Artist_artist-contents__37MtX",
        "artist-content": "Artist_artist-content__21Pvg",
        "artist-content-header": "Artist_artist-content-header__2bNbp",
      };
    },
    303: function (e, t, n) {
      "use strict";
      var a = n(52),
        o = n(115);
      Object.defineProperty(t, "__esModule", {value: !0}),
        (t.default = t.ProgressBarForwardRef = t.ProgressBar = void 0);
      var l = a(n(167)),
        i = a(n(96)),
        r = a(n(97)),
        s = a(n(80)),
        c = a(n(98)),
        u = a(n(99)),
        d = a(n(100)),
        v = a(n(101)),
        m = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" !== o(e) && "function" !== typeof e))
            return {default: e};
          var n = b(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            l = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var r = l ? Object.getOwnPropertyDescriptor(e, i) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, i, r)
                : (a[i] = e[i]);
            }
          (a.default = e), n && n.set(e, a);
          return a;
        })(n(1)),
        h = n(102);
      function b(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (b = function (e) {
          return e ? n : t;
        })(e);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = (0, d.default)(e);
          if (t) {
            var o = (0, d.default)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return (0, u.default)(this, n);
        };
      }
      var f = (function (e) {
        (0, c.default)(n, e);
        var t = p(n);
        function n() {
          var e;
          (0, i.default)(this, n);
          for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
            o[l] = arguments[l];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, v.default)((0, s.default)(e), "audio", void 0),
            (0, v.default)((0, s.default)(e), "timeOnMouseMove", 0),
            (0, v.default)((0, s.default)(e), "hasAddedAudioEventListener", !1),
            (0, v.default)(
              (0, s.default)(e),
              "downloadProgressAnimationTimer",
              void 0
            ),
            (0, v.default)((0, s.default)(e), "state", {
              isDraggingProgress: !1,
              currentTimePos: "0%",
              hasDownloadProgressAnimation: !1,
              downloadProgressArr: [],
              waitingForSeekCallback: !1,
            }),
            (0, v.default)(
              (0, s.default)(e),
              "getCurrentProgress",
              function (t) {
                var n = e.props,
                  a = n.audio,
                  o = n.progressBar;
                if (
                  0 !== a.src.indexOf("blob:") &&
                  "undefined" === typeof e.props.srcDuration &&
                  (!a.src || !isFinite(a.currentTime) || !o.current)
                )
                  return {currentTime: 0, currentTimePos: "0%"};
                var l = o.current.getBoundingClientRect(),
                  i = l.width,
                  r = (0, h.getPosX)(t) - l.left;
                return (
                  r < 0 ? (r = 0) : r > i && (r = i),
                  {
                    currentTime: (e.getDuration() * r) / i,
                    currentTimePos: "".concat(((r / i) * 100).toFixed(2), "%"),
                  }
                );
              }
            ),
            (0, v.default)(
              (0, s.default)(e),
              "handleContextMenu",
              function (e) {
                e.preventDefault();
              }
            ),
            (0, v.default)(
              (0, s.default)(e),
              "handleMouseDownOrTouchStartProgressBar",
              function (t) {
                t.stopPropagation();
                var n = e.getCurrentProgress(t.nativeEvent),
                  a = n.currentTime,
                  o = n.currentTimePos;
                isFinite(a) &&
                  ((e.timeOnMouseMove = a),
                  e.setState({isDraggingProgress: !0, currentTimePos: o}),
                  t.nativeEvent instanceof MouseEvent
                    ? (window.addEventListener(
                        "mousemove",
                        e.handleWindowMouseOrTouchMove
                      ),
                      window.addEventListener(
                        "mouseup",
                        e.handleWindowMouseOrTouchUp
                      ))
                    : (window.addEventListener(
                        "touchmove",
                        e.handleWindowMouseOrTouchMove
                      ),
                      window.addEventListener(
                        "touchend",
                        e.handleWindowMouseOrTouchUp
                      )));
              }
            ),
            (0, v.default)(
              (0, s.default)(e),
              "handleWindowMouseOrTouchMove",
              function (t) {
                t instanceof MouseEvent && t.preventDefault(),
                  t.stopPropagation();
                var n = window.getSelection();
                if (
                  (n && "Range" === n.type && n.empty(),
                  e.state.isDraggingProgress)
                ) {
                  var a = e.getCurrentProgress(t),
                    o = a.currentTime,
                    l = a.currentTimePos;
                  (e.timeOnMouseMove = o), e.setState({currentTimePos: l});
                }
              }
            ),
            (0, v.default)(
              (0, s.default)(e),
              "handleWindowMouseOrTouchUp",
              function (t) {
                t.stopPropagation();
                var n = e.timeOnMouseMove,
                  a = e.props,
                  o = a.audio,
                  l = a.onChangeCurrentTimeError,
                  i = a.onSeek;
                if (i)
                  e.setState(
                    {isDraggingProgress: !1, waitingForSeekCallback: !0},
                    function () {
                      i(o, n).then(
                        function () {
                          return e.setState({waitingForSeekCallback: !1});
                        },
                        function (e) {
                          throw new Error(e);
                        }
                      );
                    }
                  );
                else {
                  var r = {isDraggingProgress: !1};
                  o.readyState !== o.HAVE_NOTHING &&
                  o.readyState !== o.HAVE_METADATA &&
                  isFinite(n)
                    ? (o.currentTime = n)
                    : ((r.currentTimePos = "0%"), l && l()),
                    e.setState(r);
                }
                t instanceof MouseEvent
                  ? (window.removeEventListener(
                      "mousemove",
                      e.handleWindowMouseOrTouchMove
                    ),
                    window.removeEventListener(
                      "mouseup",
                      e.handleWindowMouseOrTouchUp
                    ))
                  : (window.removeEventListener(
                      "touchmove",
                      e.handleWindowMouseOrTouchMove
                    ),
                    window.removeEventListener(
                      "touchend",
                      e.handleWindowMouseOrTouchUp
                    ));
              }
            ),
            (0, v.default)(
              (0, s.default)(e),
              "handleAudioTimeUpdate",
              (0, h.throttle)(function (t) {
                var n = e.state.isDraggingProgress,
                  a = t.target;
                if (!n && !0 !== e.state.waitingForSeekCallback) {
                  var o = a.currentTime,
                    l = e.getDuration();
                  e.setState({
                    currentTimePos: "".concat(
                      ((o / l) * 100 || 0).toFixed(2),
                      "%"
                    ),
                  });
                }
              }, e.props.progressUpdateInterval)
            ),
            (0, v.default)(
              (0, s.default)(e),
              "handleAudioDownloadProgressUpdate",
              function (t) {
                for (
                  var n = t.target, a = e.getDuration(), o = [], l = 0;
                  l < n.buffered.length;
                  l++
                ) {
                  var i = n.buffered.start(l),
                    r = n.buffered.end(l);
                  o.push({
                    left: "".concat(Math.round((100 / a) * i) || 0, "%"),
                    width: "".concat(Math.round((100 / a) * (r - i)) || 0, "%"),
                  });
                }
                clearTimeout(e.downloadProgressAnimationTimer),
                  e.setState({
                    downloadProgressArr: o,
                    hasDownloadProgressAnimation: !0,
                  }),
                  (e.downloadProgressAnimationTimer = setTimeout(function () {
                    e.setState({hasDownloadProgressAnimation: !1});
                  }, 200));
              }
            ),
            e
          );
        }
        return (
          (0, r.default)(n, [
            {
              key: "getDuration",
              value: function () {
                var e = this.props,
                  t = e.audio,
                  n = e.srcDuration;
                return "undefined" === typeof n ? t.duration : n;
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                var e = this.props.audio;
                e &&
                  !this.hasAddedAudioEventListener &&
                  ((this.audio = e),
                  (this.hasAddedAudioEventListener = !0),
                  e.addEventListener("timeupdate", this.handleAudioTimeUpdate),
                  e.addEventListener(
                    "progress",
                    this.handleAudioDownloadProgressUpdate
                  ));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.audio &&
                  this.hasAddedAudioEventListener &&
                  (this.audio.removeEventListener(
                    "timeupdate",
                    this.handleAudioTimeUpdate
                  ),
                  this.audio.removeEventListener(
                    "progress",
                    this.handleAudioDownloadProgressUpdate
                  )),
                  clearTimeout(this.downloadProgressAnimationTimer);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.showDownloadProgress,
                  n = e.showFilledProgress,
                  a = e.progressBar,
                  o = e.i18nProgressBar,
                  l = this.state,
                  i = l.currentTimePos,
                  r = l.downloadProgressArr,
                  s = l.hasDownloadProgressAnimation;
                return m.default.createElement(
                  "div",
                  {
                    "className": "rhap_progress-container",
                    "ref": a,
                    "aria-label": o,
                    "role": "progressbar",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": Number(i.split("%")[0]),
                    "tabIndex": 0,
                    "onMouseDown": this.handleMouseDownOrTouchStartProgressBar,
                    "onTouchStart": this.handleMouseDownOrTouchStartProgressBar,
                    "onContextMenu": this.handleContextMenu,
                  },
                  m.default.createElement(
                    "div",
                    {
                      className: "rhap_progress-bar ".concat(
                        t ? "rhap_progress-bar-show-download" : ""
                      ),
                    },
                    m.default.createElement("div", {
                      className: "rhap_progress-indicator",
                      style: {left: i},
                    }),
                    n &&
                      m.default.createElement("div", {
                        className: "rhap_progress-filled",
                        style: {width: i},
                      }),
                    t &&
                      r.map(function (e, t) {
                        var n = e.left,
                          a = e.width;
                        return m.default.createElement("div", {
                          key: t,
                          className: "rhap_download-progress",
                          style: {
                            left: n,
                            width: a,
                            transitionDuration: s ? ".2s" : "0s",
                          },
                        });
                      })
                  )
                );
              },
            },
          ]),
          n
        );
      })(m.Component);
      t.ProgressBar = f;
      var g = function (e, t) {
        return m.default.createElement(
          f,
          (0, l.default)({}, e, {progressBar: t})
        );
      };
      t.ProgressBarForwardRef = g;
      var j = (0, m.forwardRef)(g);
      t.default = j;
    },
    304: function (e, t, n) {
      "use strict";
      var a = n(52);
      Object.defineProperty(t, "__esModule", {value: !0}), (t.default = void 0);
      var o = a(n(96)),
        l = a(n(97)),
        i = a(n(80)),
        r = a(n(98)),
        s = a(n(99)),
        c = a(n(100)),
        u = a(n(101)),
        d = n(1),
        v = n(102);
      function m(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = (0, c.default)(e);
          if (t) {
            var o = (0, c.default)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return (0, s.default)(this, n);
        };
      }
      var h = (function (e) {
        (0, r.default)(n, e);
        var t = m(n);
        function n(e) {
          var a;
          (0, o.default)(this, n),
            (a = t.call(this, e)),
            (0, u.default)((0, i.default)(a), "audio", void 0),
            (0, u.default)((0, i.default)(a), "hasAddedAudioEventListener", !1),
            (0, u.default)((0, i.default)(a), "state", {
              currentTime: a.props.defaultCurrentTime,
            }),
            (0, u.default)(
              (0, i.default)(a),
              "handleAudioCurrentTimeChange",
              function (e) {
                var t = e.target,
                  n = a.props,
                  o = n.isLeftTime,
                  l = n.timeFormat,
                  i = n.defaultCurrentTime;
                a.setState({
                  currentTime:
                    (0, v.getDisplayTimeBySeconds)(
                      o ? t.duration - t.currentTime : t.currentTime,
                      t.duration,
                      l
                    ) || i,
                });
              }
            ),
            (0, u.default)(
              (0, i.default)(a),
              "addAudioEventListeners",
              function () {
                var e = a.props.audio;
                e &&
                  !a.hasAddedAudioEventListener &&
                  ((a.audio = e),
                  (a.hasAddedAudioEventListener = !0),
                  e.addEventListener(
                    "timeupdate",
                    a.handleAudioCurrentTimeChange
                  ),
                  e.addEventListener(
                    "loadedmetadata",
                    a.handleAudioCurrentTimeChange
                  ));
              }
            );
          var l = e.audio,
            r = e.defaultCurrentTime,
            s = e.isLeftTime,
            c = e.timeFormat,
            d = r;
          return (
            l &&
              (d = (0, v.getDisplayTimeBySeconds)(
                s ? l.duration - l.currentTime : l.currentTime,
                l.duration,
                c
              )),
            (a.state = {currentTime: d}),
            a
          );
        }
        return (
          (0, l.default)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.addAudioEventListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.addAudioEventListeners();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.audio &&
                  this.hasAddedAudioEventListener &&
                  (this.audio.removeEventListener(
                    "timeupdate",
                    this.handleAudioCurrentTimeChange
                  ),
                  this.audio.removeEventListener(
                    "loadedmetadata",
                    this.handleAudioCurrentTimeChange
                  ));
              },
            },
            {
              key: "render",
              value: function () {
                return this.state.currentTime;
              },
            },
          ]),
          n
        );
      })(d.PureComponent);
      t.default = h;
    },
    305: function (e, t, n) {
      "use strict";
      var a = n(52);
      Object.defineProperty(t, "__esModule", {value: !0}), (t.default = void 0);
      var o = a(n(96)),
        l = a(n(97)),
        i = a(n(80)),
        r = a(n(98)),
        s = a(n(99)),
        c = a(n(100)),
        u = a(n(101)),
        d = n(1),
        v = n(102);
      function m(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = (0, c.default)(e);
          if (t) {
            var o = (0, c.default)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return (0, s.default)(this, n);
        };
      }
      var h = (function (e) {
        (0, r.default)(n, e);
        var t = m(n);
        function n(e) {
          var a;
          (0, o.default)(this, n),
            (a = t.call(this, e)),
            (0, u.default)((0, i.default)(a), "audio", void 0),
            (0, u.default)((0, i.default)(a), "hasAddedAudioEventListener", !1),
            (0, u.default)((0, i.default)(a), "state", {
              duration: a.props.audio
                ? (0, v.getDisplayTimeBySeconds)(
                    a.props.audio.duration,
                    a.props.audio.duration,
                    a.props.timeFormat
                  )
                : a.props.defaultDuration,
            }),
            (0, u.default)(
              (0, i.default)(a),
              "handleAudioDurationChange",
              function (e) {
                var t = e.target,
                  n = a.props,
                  o = n.timeFormat,
                  l = n.defaultDuration;
                a.setState({
                  duration:
                    (0, v.getDisplayTimeBySeconds)(t.duration, t.duration, o) ||
                    l,
                });
              }
            ),
            (0, u.default)(
              (0, i.default)(a),
              "addAudioEventListeners",
              function () {
                var e = a.props.audio;
                e &&
                  !a.hasAddedAudioEventListener &&
                  ((a.audio = e),
                  (a.hasAddedAudioEventListener = !0),
                  e.addEventListener(
                    "durationchange",
                    a.handleAudioDurationChange
                  ),
                  e.addEventListener("abort", a.handleAudioDurationChange));
              }
            );
          var l = e.audio,
            r = e.timeFormat,
            s = e.defaultDuration;
          return (
            (a.state = {
              duration: l
                ? (0, v.getDisplayTimeBySeconds)(l.duration, l.duration, r)
                : s,
            }),
            a
          );
        }
        return (
          (0, l.default)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.addAudioEventListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.addAudioEventListeners();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.audio &&
                  this.hasAddedAudioEventListener &&
                  (this.audio.removeEventListener(
                    "durationchange",
                    this.handleAudioDurationChange
                  ),
                  this.audio.removeEventListener(
                    "abort",
                    this.handleAudioDurationChange
                  ));
              },
            },
            {
              key: "render",
              value: function () {
                return this.state.duration;
              },
            },
          ]),
          n
        );
      })(d.PureComponent);
      t.default = h;
    },
    306: function (e, t, n) {
      "use strict";
      var a = n(52),
        o = n(115);
      Object.defineProperty(t, "__esModule", {value: !0}), (t.default = void 0);
      var l = a(n(96)),
        i = a(n(97)),
        r = a(n(80)),
        s = a(n(98)),
        c = a(n(99)),
        u = a(n(100)),
        d = a(n(101)),
        v = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" !== o(e) && "function" !== typeof e))
            return {default: e};
          var n = h(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            l = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var r = l ? Object.getOwnPropertyDescriptor(e, i) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, i, r)
                : (a[i] = e[i]);
            }
          (a.default = e), n && n.set(e, a);
          return a;
        })(n(1)),
        m = n(102);
      function h(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (h = function (e) {
          return e ? n : t;
        })(e);
      }
      function b(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = (0, u.default)(e);
          if (t) {
            var o = (0, u.default)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return (0, c.default)(this, n);
        };
      }
      var p = (function (e) {
          (0, s.default)(n, e);
          var t = b(n);
          function n() {
            var e;
            (0, l.default)(this, n);
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(o))),
              (0, d.default)((0, r.default)(e), "audio", void 0),
              (0, d.default)(
                (0, r.default)(e),
                "hasAddedAudioEventListener",
                !1
              ),
              (0, d.default)(
                (0, r.default)(e),
                "volumeBar",
                (0, v.createRef)()
              ),
              (0, d.default)((0, r.default)(e), "volumeAnimationTimer", 0),
              (0, d.default)((0, r.default)(e), "lastVolume", e.props.volume),
              (0, d.default)((0, r.default)(e), "state", {
                currentVolumePos: "".concat(
                  ((e.lastVolume / 1) * 100 || 0).toFixed(2),
                  "%"
                ),
                hasVolumeAnimation: !1,
                isDraggingVolume: !1,
              }),
              (0, d.default)(
                (0, r.default)(e),
                "getCurrentVolume",
                function (t) {
                  var n = e.props.audio;
                  if (!e.volumeBar.current)
                    return {
                      currentVolume: n.volume,
                      currentVolumePos: e.state.currentVolumePos,
                    };
                  var a,
                    o,
                    l = e.volumeBar.current.getBoundingClientRect(),
                    i = l.width,
                    r = (0, m.getPosX)(t) - l.left;
                  return (
                    r < 0
                      ? ((a = 0), (o = "0%"))
                      : r > l.width
                      ? ((a = 1), (o = "100%"))
                      : ((a = r / i), (o = "".concat((r / i) * 100, "%"))),
                    {currentVolume: a, currentVolumePos: o}
                  );
                }
              ),
              (0, d.default)(
                (0, r.default)(e),
                "handleContextMenu",
                function (e) {
                  e.preventDefault();
                }
              ),
              (0, d.default)(
                (0, r.default)(e),
                "handleClickVolumeButton",
                function () {
                  var t = e.props.audio;
                  t.volume > 0
                    ? ((e.lastVolume = t.volume), (t.volume = 0))
                    : (t.volume = e.lastVolume);
                }
              ),
              (0, d.default)(
                (0, r.default)(e),
                "handleVolumnControlMouseOrTouchDown",
                function (t) {
                  t.stopPropagation();
                  var n = e.props.audio,
                    a = e.getCurrentVolume(t.nativeEvent),
                    o = a.currentVolume,
                    l = a.currentVolumePos;
                  (n.volume = o),
                    e.setState({isDraggingVolume: !0, currentVolumePos: l}),
                    t.nativeEvent instanceof MouseEvent
                      ? (window.addEventListener(
                          "mousemove",
                          e.handleWindowMouseOrTouchMove
                        ),
                        window.addEventListener(
                          "mouseup",
                          e.handleWindowMouseOrTouchUp
                        ))
                      : (window.addEventListener(
                          "touchmove",
                          e.handleWindowMouseOrTouchMove
                        ),
                        window.addEventListener(
                          "touchend",
                          e.handleWindowMouseOrTouchUp
                        ));
                }
              ),
              (0, d.default)(
                (0, r.default)(e),
                "handleWindowMouseOrTouchMove",
                function (t) {
                  t instanceof MouseEvent && t.preventDefault(),
                    t.stopPropagation();
                  var n = e.props.audio,
                    a = window.getSelection();
                  if (
                    (a && "Range" === a.type && a.empty(),
                    e.state.isDraggingVolume)
                  ) {
                    var o = e.getCurrentVolume(t),
                      l = o.currentVolume,
                      i = o.currentVolumePos;
                    (n.volume = l), e.setState({currentVolumePos: i});
                  }
                }
              ),
              (0, d.default)(
                (0, r.default)(e),
                "handleWindowMouseOrTouchUp",
                function (t) {
                  t.stopPropagation(),
                    e.setState({isDraggingVolume: !1}),
                    t instanceof MouseEvent
                      ? (window.removeEventListener(
                          "mousemove",
                          e.handleWindowMouseOrTouchMove
                        ),
                        window.removeEventListener(
                          "mouseup",
                          e.handleWindowMouseOrTouchUp
                        ))
                      : (window.removeEventListener(
                          "touchmove",
                          e.handleWindowMouseOrTouchMove
                        ),
                        window.removeEventListener(
                          "touchend",
                          e.handleWindowMouseOrTouchUp
                        ));
                }
              ),
              (0, d.default)(
                (0, r.default)(e),
                "handleAudioVolumeChange",
                function (t) {
                  var n = e.state.isDraggingVolume,
                    a = t.target.volume;
                  ((e.lastVolume > 0 && 0 === a) ||
                    (0 === e.lastVolume && a > 0)) &&
                    e.props.onMuteChange(),
                    (e.lastVolume = a),
                    n ||
                      (e.setState({
                        hasVolumeAnimation: !0,
                        currentVolumePos: "".concat(
                          ((a / 1) * 100 || 0).toFixed(2),
                          "%"
                        ),
                      }),
                      clearTimeout(e.volumeAnimationTimer),
                      (e.volumeAnimationTimer = setTimeout(function () {
                        e.setState({hasVolumeAnimation: !1});
                      }, 100)));
                }
              ),
              e
            );
          }
          return (
            (0, i.default)(n, [
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this.props.audio;
                  e &&
                    !this.hasAddedAudioEventListener &&
                    ((this.audio = e),
                    (this.hasAddedAudioEventListener = !0),
                    e.addEventListener(
                      "volumechange",
                      this.handleAudioVolumeChange
                    ));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.audio &&
                    this.hasAddedAudioEventListener &&
                    this.audio.removeEventListener(
                      "volumechange",
                      this.handleAudioVolumeChange
                    ),
                    clearTimeout(this.volumeAnimationTimer);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.audio,
                    n = e.showFilledVolume,
                    a = e.i18nVolumeControl,
                    o = this.state,
                    l = o.currentVolumePos,
                    i = o.hasVolumeAnimation,
                    r = (t || {}).volume;
                  return v.default.createElement(
                    "div",
                    {
                      "ref": this.volumeBar,
                      "onMouseDown": this.handleVolumnControlMouseOrTouchDown,
                      "onTouchStart": this.handleVolumnControlMouseOrTouchDown,
                      "onContextMenu": this.handleContextMenu,
                      "role": "progressbar",
                      "aria-label": a,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": Number((100 * r).toFixed(0)),
                      "tabIndex": 0,
                      "className": "rhap_volume-bar-area",
                    },
                    v.default.createElement(
                      "div",
                      {className: "rhap_volume-bar"},
                      v.default.createElement("div", {
                        className: "rhap_volume-indicator",
                        style: {left: l, transitionDuration: i ? ".1s" : "0s"},
                      }),
                      n &&
                        v.default.createElement("div", {
                          className: "rhap_volume-filled",
                          style: {width: l},
                        })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(v.Component),
        f = p;
      t.default = f;
    },
    307: function (e, t, n) {
      "use strict";
      var a;
      Object.defineProperty(t, "__esModule", {value: !0}),
        (t.RHAP_UI = void 0),
        (t.RHAP_UI = a),
        (function (e) {
          (e.CURRENT_TIME = "CURRENT_TIME"),
            (e.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME"),
            (e.PROGRESS_BAR = "PROGRESS_BAR"),
            (e.DURATION = "DURATION"),
            (e.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS"),
            (e.MAIN_CONTROLS = "MAIN_CONTROLS"),
            (e.VOLUME_CONTROLS = "VOLUME_CONTROLS"),
            (e.LOOP = "LOOP"),
            (e.VOLUME = "VOLUME");
        })(a || (t.RHAP_UI = a = {}));
    },
    308: function (e, t, n) {},
    309: function (e, t, n) {},
    311: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(41),
        o = n.n(a),
        l = n(27),
        i = n.n(l),
        r = n(42),
        s = n(4),
        c = n(1),
        u = n.n(c),
        d = n(28),
        v = n(26),
        m = Object(c.createContext)({
          isAuth: !1,
          token: null,
          authLoading: !1,
          userId: null,
          library: [],
          username: null,
          login: function () {},
          logout: function () {},
          setAutoLogout: function () {},
          editAuthConf: function () {},
          setIsAuth: function () {},
          setToken: function () {},
          setIsAuthLoading: function () {},
          setUserId: function () {},
          initLibrary: function () {},
          pushToLibrary: function () {},
          removeFromLibrary: function () {},
          addToFavouritesHandler: function () {},
          removeFromFavouritesHandler: function () {},
          topBoxMessage: null,
          setTopBoxMessage: function () {},
        }),
        h = n(25),
        b = n(3),
        p = Object(c.createContext)({
          isPlayerOpen: !1,
          isPlayerPageOpen: !1,
          playerState: "loading",
          upNextSongs: [],
          nextListContinuation: null,
          currentSong: {},
          currentSongIndex: 0,
          currentSongParam: "",
          renderSongPage: !1,
          openPlayer: function () {},
          closePlayer: function () {},
          changePlayerState: function () {},
          setUpNextSongs: function () {},
          setNextListContinuation: function () {},
          addToEndOfNextSongs: function () {},
          addToNextOfNextSongs: function () {},
          changeCurrentSong: function () {},
          setIsPlayerPageOpen: function () {},
          setCurrentSongIndex: function () {},
          setCurrentSongParam: function () {},
          setRenderSongPage: function () {},
          isAudioServerCrashed: !1,
          setIsAudioServerCrashed: function () {},
        }),
        f = n(0),
        g = {
          isPlayerPageOpen: !1,
          isPlayerOpen: !1,
          playerState: "loading",
          upNextSongs: [],
          renderSongPage: !1,
          currentSongIndex: 0,
          currentSongParam: "",
          currentSong: {},
          isAudioServerCrashed: !1,
          nextListContinuation: null,
        },
        j = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {INITIAL_STATE: g},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            a = t.value,
            o = e.upNextSongs,
            l = e.currentSongIndex;
          null === e || void 0 === e || e.addPlaylist;
          switch (n) {
            case "AUDIO_SERVER_CRASHED":
              return Object(b.a)(
                Object(b.a)({}, e),
                {},
                {isAudioServerCrashed: a}
              );
            case "PLAYER_OPEN":
              return Object(b.a)(Object(b.a)({}, e), {}, {isPlayerOpen: a});
            case "PLAYER_PAGE_OPEN":
              return Object(b.a)(Object(b.a)({}, e), {}, {isPlayerPageOpen: a});
            case "PLAYER_STATE":
              return Object(b.a)(Object(b.a)({}, e), {}, {playerState: a});
            case "SONG":
              return Object(b.a)(Object(b.a)({}, e), {}, {currentSong: a});
            case "RENDER_SONG_PAGE":
              return Object(b.a)(Object(b.a)({}, e), {}, {renderSongPage: a});
            case "SONG_INDEX":
              return Object(b.a)(Object(b.a)({}, e), {}, {currentSongIndex: a});
            case "SONG_PARAM":
              return Object(b.a)(Object(b.a)({}, e), {}, {currentSongParam: a});
            case "NEXT_SONG_INDEX":
              if (o && o.length > 0) {
                var i = l + 1,
                  r = o.find(function (e) {
                    return (
                      (null === e || void 0 === e ? void 0 : e.index) === i
                    );
                  }),
                  s = o.find(function (e) {
                    return (
                      0 === (null === e || void 0 === e ? void 0 : e.index)
                    );
                  });
                if (r) {
                  var c = null === r || void 0 === r ? void 0 : r.params;
                  return Object(b.a)(
                    Object(b.a)({}, e),
                    {},
                    {currentSongIndex: i, currentSongParam: c}
                  );
                }
                if (s) {
                  var u = null === s || void 0 === s ? void 0 : s.params;
                  return Object(b.a)(
                    Object(b.a)({}, e),
                    {},
                    {currentSongIndex: 0, currentSongParam: u}
                  );
                }
              }
              return Object(b.a)({}, e);
            case "PREVIOUS_SONG_INDEX":
              if (o && o.length > 0) {
                var d = l - 1,
                  v = o.find(function (e) {
                    return (
                      (null === e || void 0 === e ? void 0 : e.index) === d
                    );
                  }),
                  m = o.find(function (e) {
                    return (
                      (null === e || void 0 === e ? void 0 : e.index) ===
                      o.length - 1
                    );
                  });
                if (v) {
                  var p = null === v || void 0 === v ? void 0 : v.params;
                  return Object(b.a)(
                    Object(b.a)({}, e),
                    {},
                    {currentSongIndex: d, currentSongParam: p}
                  );
                }
                if (m) {
                  var f = null === m || void 0 === m ? void 0 : m.params;
                  return Object(b.a)(
                    Object(b.a)({}, e),
                    {},
                    {currentSongIndex: o.length - 1, currentSongParam: f}
                  );
                }
              }
              return Object(b.a)({}, e);
            case "INSERT_NEXT":
              if (o && o.length > 0) {
                var j,
                  O = l + 1,
                  x = Object(h.a)(o);
                (j = x).splice.apply(j, [O, 0].concat(Object(h.a)(a)));
                var y = {},
                  _ = x.filter(function (e) {
                    var t = null === e || void 0 === e ? void 0 : e.videoId;
                    return !y.hasOwnProperty(t) && (y[t] = !0);
                  });
                x = _;
                for (var w = 0; w < x.length; w++) {
                  var C,
                    k = x[w].playlistId;
                  (x[w].playlistId = (
                    null === e ||
                    void 0 === e ||
                    null === (C = e.currentSong) ||
                    void 0 === C
                      ? void 0
                      : C.playlistId
                  )
                    ? e.currentSong.playlistId
                    : k),
                    (x[w].index = w);
                }
                return (
                  (x = x.slice(0, 50)),
                  Object(b.a)(Object(b.a)({}, e), {}, {upNextSongs: x})
                );
              }
              return Object(b.a)({}, e);
            case "INSERT_TO_END":
              if (o && o.length > 0) {
                var N,
                  S = Object(h.a)(o);
                (N = S).splice.apply(N, [o.length, 0].concat(Object(h.a)(a)));
                var E = {},
                  P = S.filter(function (e) {
                    var t = null === e || void 0 === e ? void 0 : e.videoId;
                    return !E.hasOwnProperty(t) && (E[t] = !0);
                  });
                S = P;
                for (var I = o.length - 1; I < S.length; I++) {
                  var L,
                    M = S[I].playlistId;
                  (S[I].playlistId = (
                    null === e ||
                    void 0 === e ||
                    null === (L = e.currentSong) ||
                    void 0 === L
                      ? void 0
                      : L.playlistId
                  )
                    ? e.currentSong.playlistId
                    : M),
                    (S[I].index = I);
                }
                return (
                  (S = S.slice(0, 40)),
                  Object(b.a)(Object(b.a)({}, e), {}, {upNextSongs: S})
                );
              }
              return Object(b.a)({}, e);
            case "UP-NEXT_SONG":
              var A = a;
              return (
                (A = A.slice(0, 40)),
                Object(b.a)(Object(b.a)({}, e), {}, {upNextSongs: A})
              );
            case "UP-NEXT_CONTINUATION":
              var T = a;
              return Object(b.a)(
                Object(b.a)({}, e),
                {},
                {nextListContinuation: T}
              );
            default:
              return e;
          }
        };
      var O = function (e) {
          var t = e.children,
            n = Object(c.useReducer)(j, g),
            a = Object(s.a)(n, 2),
            o = a[0],
            l = a[1],
            i = o.isPlayerPageOpen,
            r = o.isPlayerOpen,
            u = o.playerState,
            d = o.upNextSongs,
            v = o.renderSongPage,
            m = o.currentSongIndex,
            h = o.currentSongParam,
            b = o.currentSong,
            O = o.isAudioServerCrashed,
            x = o.nextListContinuation,
            y = Object(c.useCallback)(
              function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                return l({type: "UP-NEXT_SONG", value: e, addPlaylist: t});
              },
              [l]
            ),
            _ = Object(c.useCallback)(
              function (e) {
                return l({type: "UP-NEXT_CONTINUATION", value: e});
              },
              [l]
            ),
            w = Object(c.useCallback)(
              function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                return l({type: "INSERT_TO_END", value: e, addPlaylist: t});
              },
              [l]
            ),
            C = Object(c.useCallback)(
              function (e) {
                return l({type: "INSERT_NEXT", value: e});
              },
              [l]
            ),
            k = Object(c.useCallback)(
              function () {
                return l({type: "PLAYER_OPEN", value: !0});
              },
              [l]
            ),
            N = Object(c.useCallback)(
              function () {
                console.log("player closed"),
                  l({type: "PLAYER_OPEN", value: !1});
              },
              [l]
            ),
            S = Object(c.useCallback)(
              function (e) {
                e === u ||
                  ("playing" !== e &&
                    "paused" !== e &&
                    "loading" !== e &&
                    "error" !== e) ||
                  l({type: "PLAYER_STATE", value: e});
              },
              [l, u]
            ),
            E = Object(c.useCallback)(
              function (e) {
                return l({type: "SONG", value: e});
              },
              [l]
            ),
            P = Object(c.useCallback)(
              function (e) {
                return l({type: "PLAYER_PAGE_OPEN", value: e});
              },
              [l]
            ),
            I = Object(c.useCallback)(
              function (e) {
                return l({type: "SONG_INDEX", value: e});
              },
              [l]
            ),
            L = Object(c.useCallback)(
              function (e) {
                return l({type: "SONG_PARAM", value: e});
              },
              [l]
            ),
            M = Object(c.useCallback)(
              function (e) {
                return l({type: "RENDER_SONG_PAGE", value: e});
              },
              [l]
            ),
            A = Object(c.useCallback)(
              function () {
                return l({type: "NEXT_SONG_INDEX"});
              },
              [l]
            ),
            T = Object(c.useCallback)(
              function () {
                return l({type: "PREVIOUS_SONG_INDEX"});
              },
              [l]
            ),
            R = Object(c.useCallback)(
              function (e) {
                return l({type: "AUDIO_SERVER_CRASHED", value: e});
              },
              [l]
            );
          return Object(f.jsx)(p.Provider, {
            value: {
              isPlayerOpen: r,
              isPlayerPageOpen: i,
              playerState: u,
              upNextSongs: d,
              currentSong: b,
              currentSongIndex: m,
              currentSongParam: h,
              renderSongPage: v,
              nextListContinuation: x,
              openPlayer: k,
              closePlayer: N,
              changePlayerState: S,
              setUpNextSongs: y,
              setNextListContinuation: _,
              addToEndOfNextSongs: w,
              addToNextOfNextSongs: C,
              setIsPlayerPageOpen: P,
              changeCurrentSong: E,
              setCurrentSongIndex: I,
              setCurrentSongParam: L,
              setRenderSongPage: M,
              changeToNextSongIndex: A,
              changeToPreviousSongIndex: T,
              isAudioServerCrashed: O,
              setIsAudioServerCrashed: R,
            },
            children: t,
          });
        },
        x = n(188),
        y = n.n(x),
        _ = Object(c.forwardRef)(function (e, t) {
          return Object(f.jsx)("div", {
            ref: t,
            className: y.a.container,
            children: e.children,
          });
        }),
        w = n(11),
        C = n(189),
        k = n.n(C),
        N = ["children"];
      var S = function (e) {
          var t = e.children,
            n = Object(w.a)(e, N);
          return Object(f.jsx)(
            "header",
            Object(b.a)(
              Object(b.a)({className: k.a.header}, n),
              {},
              {children: t}
            )
          );
        },
        E = n(190),
        P = n.n(E),
        I = ["className", "children"];
      var L = function (e) {
          var t = e.className,
            n = e.children,
            a = Object(w.a)(e, I);
          return Object(f.jsx)(
            "main",
            Object(b.a)(
              Object(b.a)(
                {className: "".concat(P.a.content, " ").concat(t)},
                a
              ),
              {},
              {children: n}
            )
          );
        },
        M = n(191),
        A = n.n(M),
        T = n(17);
      var R = function (e) {
          return Object(f.jsx)(T.b, {
            className: "logo-link",
            to: "/home",
            children: Object(f.jsx)("img", {
              id: "logo",
              className: [A.a.logo]
                .concat(
                  Object(h.a)(null === e || void 0 === e ? void 0 : e.className)
                )
                .join(" "),
              src: "../../../assets/svgs/soundrex.svg",
              alt: "Logo",
              height: "77",
              width: "75",
            }),
          });
        },
        B = n(131),
        D = n.n(B),
        F = ["center", "end", "isSearchFocused"];
      var H = function (e) {
          var t = e.center,
            n = e.end,
            a = e.isSearchFocused;
          return (
            Object(w.a)(e, F),
            Object(f.jsxs)("div", {
              className: D.a["nav-list"],
              children: [
                Object(f.jsx)("div", {
                  "aria-label": "Page Navigation",
                  "className": ""
                    .concat(D.a["nav-list-start"], " ")
                    .concat(a && "absolute"),
                  "children": t,
                }),
                Object(f.jsx)("div", {
                  className: D.a["nav-list-end"],
                  children: n,
                }),
              ],
            })
          );
        },
        U = n(358),
        V = ["className", "svg", "alt"];
      var z = function (e) {
          var t = e.className,
            n = e.svg,
            a = e.alt,
            o = Object(w.a)(e, V);
          return Object(f.jsx)(
            "img",
            Object(b.a)(
              {
                className: t,
                src: "../../../assets/svgs/".concat(n, ".svg"),
                alt: a,
              },
              o
            )
          );
        },
        W = n(36),
        G = n.n(W),
        Z = ["endpoint", "text", "onClick", "userSettings"],
        q = Object(c.forwardRef)(function (e, t) {
          var n = e.endpoint,
            a = e.text,
            o = e.onClick,
            l = e.userSettings,
            i = Object(w.a)(e, Z),
            r = null === i || void 0 === i ? void 0 : i.className;
          return (null === i || void 0 === i ? void 0 : i.icon)
            ? ((r = ""
                .concat(r, " ")
                .concat(G.a["nav-btn"], " ")
                .concat(l && G.a["nav-btn-settings"], " ")),
              Object(f.jsx)("div", {
                className: [G.a["nav-item"], "text-large"].join(" "),
                children: l
                  ? {}
                  : Object(f.jsxs)(U.a, {
                      title: a,
                      variant: "outlined",
                      onClick: o,
                      className: r,
                      children: [
                        Object(f.jsx)(
                          z,
                          Object(b.a)({className: G.a["nav-link-icon"]}, i.icon)
                        ),
                        a &&
                          Object(f.jsxs)("span", {
                            className: G.a["nav-link-text"],
                            children: [" ", a, " "],
                          }),
                      ],
                    }),
              }))
            : Object(f.jsx)("div", {
                className: [G.a["nav-item"], "link-large", "capitalize"].join(
                  " "
                ),
                children: Object(f.jsxs)(T.c, {
                  exact: !0,
                  activeClassName: [G.a["nav-link-active"]].join(" "),
                  to: n || "/",
                  className: "".concat(r, " ").concat(G.a["nav-link"]),
                  children: [
                    Object(f.jsx)("div", {
                      className: G.a["nav-link-icon"],
                      children:
                        (null === i || void 0 === i ? void 0 : i.textIcon) &&
                        i.textIcon,
                    }),
                    Object(f.jsx)("span", {
                      className: G.a["nav-link-text"],
                      children: a,
                    }),
                  ],
                }),
              });
        }),
        Y = n(19),
        X = n(85),
        Q = n.n(X),
        J = n(363);
      var K = function (e, t, n) {
          Object(c.useEffect)(
            function () {
              if (n) {
                var a = function (n) {
                  e.current && !e.current.contains(n.target) && t(n);
                };
                return (
                  document.addEventListener("mousedown", a),
                  document.addEventListener("touchstart", a),
                  function () {
                    document.removeEventListener("mousedown", a),
                      document.removeEventListener("touchstart", a);
                  }
                );
              }
            },
            [e, t, n]
          );
        },
        $ = n(64),
        ee = n.n($),
        te = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 ? arguments[4] : void 0,
            l = arguments.length > 5 ? arguments[5] : void 0;
          return t
            ? v.b
                .promise(ee()(e), {
                  pending: {
                    render: function () {
                      return "Loading...";
                    },
                    theme: "dark",
                  },
                  success: {
                    render: function () {
                      return "Fetched";
                    },
                    theme: "colored",
                    autoClose: 100,
                  },
                  error: {
                    render: function (e) {
                      return e.data.message;
                    },
                    theme: "colored",
                  },
                })
                .then(function (e) {
                  return null === e || void 0 === e ? void 0 : e.data;
                })
                .catch(function (e) {
                  var t,
                    n,
                    a,
                    o,
                    l,
                    i,
                    r,
                    s,
                    c,
                    u,
                    d,
                    v,
                    m,
                    h,
                    b,
                    p,
                    f,
                    g,
                    j,
                    O,
                    x,
                    y,
                    _,
                    w,
                    C,
                    k,
                    N,
                    S,
                    E,
                    P,
                    I,
                    L;
                  throw (
                    (((null === e ||
                    void 0 === e ||
                    null === (t = e.response) ||
                    void 0 === t ||
                    null === (n = t.data) ||
                    void 0 === n ||
                    null === (a = n.message) ||
                    void 0 === a ||
                    null === (o = a.toLowerCase()) ||
                    void 0 === o ||
                    null === (l = o.include) ||
                    void 0 === l
                      ? void 0
                      : l.call(o, "jwt expire")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (i = e.response) ||
                      void 0 === i ||
                      null === (r = i.data) ||
                      void 0 === r ||
                      null === (s = r.message) ||
                      void 0 === s ||
                      null === (c = s.toLowerCase()) ||
                      void 0 === c ||
                      null === (u = c.include) ||
                      void 0 === u
                        ? void 0
                        : u.call(c, "expired")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (d = e.response) ||
                      void 0 === d ||
                      null === (v = d.data) ||
                      void 0 === v ||
                      null === (m = v.message) ||
                      void 0 === m ||
                      null === (h = m.toLowerCase()) ||
                      void 0 === h ||
                      null === (b = h.include) ||
                      void 0 === b
                        ? void 0
                        : b.call(h, "jwt")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (p = e.response) ||
                      void 0 === p ||
                      null === (f = p.data) ||
                      void 0 === f ||
                      null === (g = f.message) ||
                      void 0 === g ||
                      null === (j = g.toLowerCase()) ||
                      void 0 === j ||
                      null === (O = j.include) ||
                      void 0 === O
                        ? void 0
                        : O.call(j, "not authenticated")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (x = e.message) ||
                      void 0 === x ||
                      null === (y = x.toLowerCase()) ||
                      void 0 === y ||
                      null === (_ = y.include) ||
                      void 0 === _
                        ? void 0
                        : _.call(y, "jwt expire")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (w = e.message) ||
                      void 0 === w ||
                      null === (C = w.toLowerCase()) ||
                      void 0 === C ||
                      null === (k = C.include) ||
                      void 0 === k
                        ? void 0
                        : k.call(C, "expired")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (N = e.message) ||
                      void 0 === N ||
                      null === (S = N.toLowerCase()) ||
                      void 0 === S ||
                      null === (E = S.include) ||
                      void 0 === E
                        ? void 0
                        : E.call(S, "jwt")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (P = e.message) ||
                      void 0 === P ||
                      null === (I = P.toLowerCase()) ||
                      void 0 === I ||
                      null === (L = I.include) ||
                      void 0 === L
                        ? void 0
                        : L.call(I, "not authenticated"))) &&
                      console.log("Request failed"),
                    e)
                  );
                })
            : ee()(e)
                .then(function (e) {
                  return (
                    n && v.b.success(o, Object(b.a)({}, l)),
                    null === e || void 0 === e ? void 0 : e.data
                  );
                })
                .catch(function (e) {
                  var t,
                    n,
                    i,
                    r,
                    s,
                    c,
                    u,
                    d,
                    m,
                    h,
                    p,
                    f,
                    g,
                    j,
                    O,
                    x,
                    y,
                    _,
                    w,
                    C,
                    k,
                    N,
                    S,
                    E,
                    P,
                    I,
                    L,
                    M,
                    A,
                    T,
                    R,
                    B;
                  throw (
                    (((null === e ||
                    void 0 === e ||
                    null === (t = e.response) ||
                    void 0 === t ||
                    null === (n = t.data) ||
                    void 0 === n ||
                    null === (i = n.message) ||
                    void 0 === i ||
                    null === (r = i.toLowerCase()) ||
                    void 0 === r ||
                    null === (s = r.include) ||
                    void 0 === s
                      ? void 0
                      : s.call(r, "jwt expire")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (c = e.response) ||
                      void 0 === c ||
                      null === (u = c.data) ||
                      void 0 === u ||
                      null === (d = u.message) ||
                      void 0 === d ||
                      null === (m = d.toLowerCase()) ||
                      void 0 === m ||
                      null === (h = m.include) ||
                      void 0 === h
                        ? void 0
                        : h.call(m, "expired")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (p = e.response) ||
                      void 0 === p ||
                      null === (f = p.data) ||
                      void 0 === f ||
                      null === (g = f.message) ||
                      void 0 === g ||
                      null === (j = g.toLowerCase()) ||
                      void 0 === j ||
                      null === (O = j.include) ||
                      void 0 === O
                        ? void 0
                        : O.call(j, "jwt")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (x = e.response) ||
                      void 0 === x ||
                      null === (y = x.data) ||
                      void 0 === y ||
                      null === (_ = y.message) ||
                      void 0 === _ ||
                      null === (w = _.toLowerCase()) ||
                      void 0 === w ||
                      null === (C = w.include) ||
                      void 0 === C
                        ? void 0
                        : C.call(w, "not authenticated")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (k = e.message) ||
                      void 0 === k ||
                      null === (N = k.toLowerCase()) ||
                      void 0 === N ||
                      null === (S = N.include) ||
                      void 0 === S
                        ? void 0
                        : S.call(N, "jwt expire")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (E = e.message) ||
                      void 0 === E ||
                      null === (P = E.toLowerCase()) ||
                      void 0 === P ||
                      null === (I = P.include) ||
                      void 0 === I
                        ? void 0
                        : I.call(P, "expired")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (L = e.message) ||
                      void 0 === L ||
                      null === (M = L.toLowerCase()) ||
                      void 0 === M ||
                      null === (A = M.include) ||
                      void 0 === A
                        ? void 0
                        : A.call(M, "jwt")) ||
                      (null === e ||
                      void 0 === e ||
                      null === (T = e.message) ||
                      void 0 === T ||
                      null === (R = T.toLowerCase()) ||
                      void 0 === R ||
                      null === (B = R.include) ||
                      void 0 === B
                        ? void 0
                        : B.call(R, "not authenticated"))) &&
                      console.log("Request failed"),
                    a &&
                      v.b.error(
                        (null === e || void 0 === e ? void 0 : e.message) || o,
                        Object(b.a)({}, l)
                      ),
                    e)
                  );
                });
        },
        ne = function (e) {
          var t,
            n,
            a,
            o,
            l,
            i,
            r,
            s,
            c,
            u,
            d,
            v,
            m,
            h,
            b,
            p,
            f,
            g,
            j =
              null === e ||
              void 0 === e ||
              null === (t = e.response) ||
              void 0 === t ||
              null === (n = t.data) ||
              void 0 === n
                ? void 0
                : n.message,
            O = null === e || void 0 === e ? void 0 : e.message,
            x =
              (null === j ||
              void 0 === j ||
              null === (a = j.toLowerCase()) ||
              void 0 === a ||
              null === (o = a.include) ||
              void 0 === o
                ? void 0
                : o.call(a, "jwt expire")) ||
              (null === j ||
              void 0 === j ||
              null === (l = j.toLowerCase()) ||
              void 0 === l ||
              null === (i = l.include) ||
              void 0 === i
                ? void 0
                : i.call(l, "expired")) ||
              (null === j ||
              void 0 === j ||
              null === (r = j.toLowerCase()) ||
              void 0 === r ||
              null === (s = r.include) ||
              void 0 === s
                ? void 0
                : s.call(r, "jwt")) ||
              (null === j ||
              void 0 === j ||
              null === (c = j.toLowerCase()) ||
              void 0 === c ||
              null === (u = c.include) ||
              void 0 === u
                ? void 0
                : u.call(c, "not authenticated")) ||
              (null === j || void 0 === j ? void 0 : j.includes("invalid")) ||
              (null === j || void 0 === j ? void 0 : j.includes("not valid")) ||
              (null === j || void 0 === j ? void 0 : j.includes("expired")) ||
              (null === j || void 0 === j
                ? void 0
                : j.includes("authenticated")),
            y =
              (null === O ||
              void 0 === O ||
              null === (d = O.toLowerCase()) ||
              void 0 === d ||
              null === (v = d.include) ||
              void 0 === v
                ? void 0
                : v.call(d, "jwt expire")) ||
              (null === O ||
              void 0 === O ||
              null === (m = O.toLowerCase()) ||
              void 0 === m ||
              null === (h = m.include) ||
              void 0 === h
                ? void 0
                : h.call(m, "expired")) ||
              (null === O ||
              void 0 === O ||
              null === (b = O.toLowerCase()) ||
              void 0 === b ||
              null === (p = b.include) ||
              void 0 === p
                ? void 0
                : p.call(b, "jwt")) ||
              (null === O ||
              void 0 === O ||
              null === (f = O.toLowerCase()) ||
              void 0 === f ||
              null === (g = f.include) ||
              void 0 === g
                ? void 0
                : g.call(f, "not authenticated")) ||
              (null === O || void 0 === O ? void 0 : O.includes("invalid")) ||
              (null === O || void 0 === O ? void 0 : O.includes("not valid")) ||
              (null === O || void 0 === O ? void 0 : O.includes("expired")) ||
              (null === O || void 0 === O
                ? void 0
                : O.includes("authenticated"));
          return !(!x && !y) && (x ? j : O);
        },
        ae = function (e) {
          return e + (Date.now() + "-") + Math.round(1e9 * Math.random());
        },
        oe = n(66),
        le = n.n(oe),
        ie = [
          "onClick",
          "suggestions",
          "isHistoricalSuggestion",
          "closeSuggestions",
        ];
      var re = function (e) {
          var t = e.onClick,
            n = e.suggestions,
            a = e.isHistoricalSuggestion,
            o = e.closeSuggestions,
            l = Object(w.a)(e, ie),
            i = function (e) {
              return (
                e &&
                (function (e) {
                  return "/search/".concat(e, "/songs");
                })(e)
              );
            };
          return Object(f.jsx)("ul", {
            className: le.a.suggestions,
            children: n.map(function (e, n) {
              return Object(f.jsx)(
                "li",
                {
                  className: le.a["suggestions-item"],
                  children: Object(f.jsxs)(T.b, {
                    onClick: function () {
                      t(null === e || void 0 === e ? void 0 : e.query), o();
                    },
                    to:
                      i.bind(
                        null,
                        null === e || void 0 === e ? void 0 : e.query
                      ) || "/",
                    className: le.a.suggestion,
                    children: [
                      Object(f.jsxs)(U.a, {
                        className: le.a["suggestion-box"],
                        color: "inherit",
                        children: [
                          Object(f.jsx)("div", {
                            className: le.a["suggestion-icon-container"],
                            children: Object(f.jsx)(z, {
                              svg: a ? "histroy" : "search",
                              alt: "",
                              className: [le.a["suggestion-icon"]].join(" "),
                            }),
                          }),
                          Object(f.jsx)("p", {
                            className: [
                              le.a["suggestion-text"],
                              "capitalize",
                              "text-small",
                            ].join(" "),
                            children:
                              null === e || void 0 === e ? void 0 : e.query,
                          }),
                        ],
                      }),
                      a &&
                        Object(f.jsx)(U.a, {
                          onClick: l.onRemove,
                          className: ["capitalize", le.a["suggestion-remove"]],
                          color: "inherit",
                          children: "remove",
                        }),
                    ],
                  }),
                },
                ae((null === e || void 0 === e ? void 0 : e.query) + n)
              );
            }),
          });
        },
        se = n(362),
        ce = ["className", "transparent", "children", "loadingText"];
      function ue(e) {
        var t = e.className,
          n = e.transparent,
          a = e.children,
          o = e.loadingText,
          l = Object(w.a)(e, ce);
        return Object(f.jsxs)(
          "div",
          Object(b.a)(
            Object(b.a)(
              {
                className: "full-hw fixed-center "
                  .concat(n && "transparent-bg", "  ")
                  .concat(t),
              },
              l
            ),
            {},
            {
              children: [
                o &&
                  Object(f.jsx)("p", {
                    thin: !0,
                    className: "fixed-center",
                    style: {top: "45% !important"},
                    children: "Loading...",
                  }),
                a,
              ],
            }
          )
        );
      }
      var de = n(148),
        ve = n.n(de),
        me = ["className", "thin", "fullScreen"];
      var he,
        be = function (e) {
          var t = e.className,
            n = e.thin,
            a = e.fullScreen,
            o = Object(w.a)(e, me);
          return a
            ? Object(f.jsx)(ue, {
                className: "".concat(ve.a["spinner-fullscreen"], " "),
                children: Object(f.jsx)(
                  se.a,
                  Object(b.a)(
                    {
                      className: ""
                        .concat(t, " ")
                        .concat(ve.a["spinner-fullscreen-spinner"], " ")
                        .concat(n && "thin-spinner", " fixed-center"),
                      style: {color: "#1976d2"},
                      disableShrink: !0,
                    },
                    o
                  )
                ),
              })
            : Object(f.jsx)(
                se.a,
                Object(b.a)(
                  {
                    className: "".concat(t, " ").concat(n && "thin-spinner"),
                    style: {color: "#1976d2"},
                    disableShrink: !0,
                  },
                  o
                )
              );
        },
        pe = n(38),
        fe = n.n(pe),
        ge = ["title", "titleId"];
      function je() {
        return (
          (je =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          je.apply(this, arguments)
        );
      }
      function Oe(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function xe(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Oe(e, ge);
        return c.createElement(
          "svg",
          je(
            {
              "width": 37,
              "height": 29,
              "viewBox": "0 0 37 29",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          he ||
            (he = c.createElement("path", {
              d: "M33.7778 15.6914L35.2778 15.6914L35.2778 12.6914L33.7778 12.6914L33.7778 15.6914ZM3.71711 13.1307C3.13132 13.7165 3.13132 14.6663 3.71711 15.2521L13.2631 24.798C13.8488 25.3838 14.7986 25.3838 15.3844 24.798C15.9702 24.2122 15.9702 23.2625 15.3844 22.6767L6.89909 14.1914L15.3844 5.70613C15.9702 5.12034 15.9702 4.17059 15.3844 3.58481C14.7986 2.99902 13.8488 2.99902 13.2631 3.58481L3.71711 13.1307ZM33.7778 12.6914L4.77777 12.6914L4.77777 15.6914L33.7778 15.6914L33.7778 12.6914Z",
              fill: "white",
              fillOpacity: 0.6,
            }))
        );
      }
      var ye,
        _e = c.forwardRef(xe),
        we = (n.p, ["title", "titleId"]);
      function Ce() {
        return (
          (Ce =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Ce.apply(this, arguments)
        );
      }
      function ke(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Ne(e, t) {
        var n = e.title,
          a = e.titleId,
          o = ke(e, we);
        return c.createElement(
          "svg",
          Ce(
            {
              "width": 30,
              "height": 30,
              "viewBox": "0 0 30 30",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          ye ||
            (ye = c.createElement("path", {
              d: "M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z",
              fill: "white",
              fillOpacity: 0.6,
            }))
        );
      }
      var Se = c.forwardRef(Ne),
        Ee =
          (n.p,
          Object(c.forwardRef)(function (e, t) {
            var n,
              a,
              o,
              l = e.onClose,
              i = e.isOpen,
              r = e.logout,
              u = t,
              v = Object(c.useRef)(),
              h = Object(d.g)(),
              b = Object(d.h)(),
              p = Object(c.useContext)(m).token,
              g = Object(c.useState)(!1),
              j = Object(s.a)(g, 2),
              O = j[0],
              x = j[1],
              y = Object(c.useState)(null),
              _ = Object(s.a)(y, 2),
              w = _[0],
              C = _[1],
              k = Object(c.useState)(!1),
              N = Object(s.a)(k, 2),
              S = N[0],
              E = N[1],
              P = Object(c.useState)(!1),
              I = Object(s.a)(P, 2),
              L = I[0],
              M = I[1];
            Object(c.useEffect)(
              function () {
                return (
                  i && (null === u || void 0 === u ? void 0 : u.current.focus())
                );
              },
              [i, u]
            ),
              K(
                v,
                function () {
                  C(null), !O && i && l();
                },
                !O ||
                  (null === w ||
                  void 0 === w ||
                  null === (n = w.list) ||
                  void 0 === n
                    ? void 0
                    : n.length) > 0
              ),
              Object(c.useEffect)(
                function () {
                  !O ||
                    b.pathname.startsWith("/play") ||
                    b.pathname.startsWith("/search") ||
                    (l(),
                    (null === u || void 0 === u ? void 0 : u.current) &&
                      (u.current.value = ""));
                },
                [b, u, l]
              ),
              Object(c.useEffect)(
                function () {
                  (null === u || void 0 === u ? void 0 : u.current) &&
                    x(u.current.value.trim().length > 0),
                    i || E(!0);
                },
                [u, i]
              );
            var A = Object(Y.useMutation)(
                function (e) {
                  return te(e, !1, !1, !1, null, null);
                },
                {
                  onSuccess: function (e) {
                    e && (M(!1), S || C(e));
                  },
                  onError: function (e) {
                    ne(e) && r(), M(!1), C(null), console.log(e);
                  },
                }
              ),
              T = Object(c.useCallback)(
                Q()(function () {
                  var e,
                    t,
                    n,
                    a =
                      null === u ||
                      void 0 === u ||
                      null === (e = u.current) ||
                      void 0 === e ||
                      null === (t = e.value) ||
                      void 0 === t
                        ? void 0
                        : t.trim(),
                    o =
                      (null === a ||
                      void 0 === a ||
                      null === (n = a.trim()) ||
                      void 0 === n
                        ? void 0
                        : n.length) > 0;
                  x(o),
                    o
                      ? (E(!1),
                        M(!0),
                        A.mutate({
                          url: "https://soundrex.onrender.com/api/v1/search_suggestions?query=".concat(
                            a
                          ),
                          method: "GET",
                          headers: {authorization: "Bearer " + p},
                        }))
                      : C(null);
                }, 250),
                [u, x, E, M, C, p]
              ),
              R = Object(c.useCallback)(
                function () {
                  M(!1), S || E(!0), C(null);
                },
                [M, S, E, C]
              ),
              B = Object(c.useCallback)(
                Q()(function (e) {
                  var t,
                    n,
                    a,
                    o =
                      null === u ||
                      void 0 === u ||
                      null === (t = u.current) ||
                      void 0 === t ||
                      null === (n = t.value) ||
                      void 0 === n
                        ? void 0
                        : n.trim();
                  (null === o ||
                  void 0 === o ||
                  null === (a = o.trim()) ||
                  void 0 === a
                    ? void 0
                    : a.length) > 0 && h.push("/search/".concat(o, "/songs")),
                    R();
                }, 300),
                [h, R, u]
              ),
              D =
                w &&
                (null === w ||
                void 0 === w ||
                null === (a = w.list) ||
                void 0 === a
                  ? void 0
                  : a.length) > 0,
              F = D ? {borderRadius: "8px 8px 0 0"} : {borderRadius: "8px"},
              H =
                null === u ||
                void 0 === u ||
                null === (o = u.current) ||
                void 0 === o
                  ? void 0
                  : o.value;
            Object(c.useEffect)(
              function () {
                H && E(!1);
              },
              [H]
            );
            var V = Object(c.useCallback)(
              function (e) {
                (null === u || void 0 === u ? void 0 : u.current) &&
                  (u.current.value = e),
                  x(!0),
                  E(!1);
              },
              [u, x, E]
            );
            return Object(f.jsx)(c.Fragment, {
              children: Object(f.jsxs)("div", {
                className: i
                  ? fe.a["search-box-container"]
                  : fe.a["search-box-container-closed"],
                ref: v,
                children: [
                  Object(f.jsxs)("div", {
                    id: "search-box",
                    className: ""
                      .concat(fe.a["search-box"], " ")
                      .concat(
                        i ? fe.a["search-box-open"] : fe.a["search-box-closed"],
                        " "
                      ),
                    style: F,
                    children: [
                      Object(f.jsx)(U.a, {
                        onClick: l,
                        className: fe.a["search-box__btn-container"],
                        color: "inherit",
                        children: Object(f.jsx)(_e, {
                          alt: "Close",
                          className: [
                            fe.a["search-box__btn"],
                            fe.a["search-box__btn-back"],
                          ].join(" "),
                        }),
                      }),
                      Object(f.jsx)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), B(e);
                        },
                        children: Object(f.jsx)("input", {
                          "ref": u,
                          "onChange": T,
                          "aria-autocomplete": "list",
                          "aria-owns": "suggestion-list",
                          "dir": "auto",
                          "role": "combobox",
                          "className": [
                            fe.a["search-box__input"],
                            "link-large",
                          ].join(" "),
                          "placeholder": "Search",
                          "aria-expanded": "true",
                          "aria-controls": "search-box",
                        }),
                      }),
                      L &&
                        Object(f.jsx)("div", {
                          className: fe.a["search-box__loading-container"],
                          children: Object(f.jsx)(be, {
                            className: fe.a["search-box__loading"],
                          }),
                        }),
                      O &&
                        !L &&
                        Object(f.jsx)(J.a, {
                          "size": "small",
                          "aria-label": "Close button",
                          "onClick": function () {
                            (u.current.value = null), x(!1), C(null);
                          },
                          "className": fe.a["search-box__btn-close-container"],
                          "color": "inherit",
                          "children": Object(f.jsx)(Se, {
                            alt: "Remove",
                            className: [
                              fe.a["search-box__btn"],
                              fe.a["search-box__btn-close"],
                            ].join(" "),
                          }),
                        }),
                    ],
                  }),
                  D &&
                    !S &&
                    Object(f.jsx)(re, {
                      onClick: V,
                      suggestions: null === w || void 0 === w ? void 0 : w.list,
                      closeSuggestions: R,
                    }),
                ],
              }),
            });
          })),
        Pe = n(355),
        Ie = [
          "ariaLabel",
          "ariaControls",
          "contentId",
          "contentContainerClassName",
          "triggerContent",
          "menuItems",
          "fullSpace",
          "isClosed",
        ];
      function Le(e) {
        var t = e.ariaLabel,
          n = e.ariaControls,
          a = e.contentId,
          o = e.contentContainerClassName,
          l = e.triggerContent,
          i = e.menuItems,
          r = e.fullSpace,
          u = e.isClosed,
          d = Object(w.a)(e, Ie),
          v = Object(c.useState)(null),
          m = Object(s.a)(v, 2),
          h = m[0],
          p = m[1],
          g = Boolean(h),
          j = function () {
            p(null);
          };
        return (
          Object(c.useEffect)(
            function () {
              u && j();
            },
            [u]
          ),
          Object(f.jsxs)("div", {
            className: r ? "full-hw" : "",
            children: [
              Object(f.jsx)("div", {
                "className": o,
                "aria-label": t,
                "id": a,
                "aria-controls": n,
                "aria-expanded": g ? "true" : void 0,
                "aria-haspopup": "true",
                "onClick": function (e) {
                  p(e.currentTarget);
                },
                "children": l,
              }),
              Object(f.jsx)(
                Pe.a,
                Object(b.a)(
                  Object(b.a)(
                    {
                      className: "dark-mode ".concat(
                        null === d || void 0 === d ? void 0 : d.className
                      ),
                      anchorEl: h,
                      open: g,
                      onClose: j,
                    },
                    d
                  ),
                  {},
                  {children: i}
                )
              ),
            ],
          })
        );
      }
      var Me = n(360),
        Ae = n(367),
        Te = n(349),
        Re = n(351),
        Be = n(203),
        De = n.n(Be),
        Fe = n(91),
        He = n.n(Fe),
        Ue = n(7),
        Ve = n(364),
        ze = n(348),
        We = n(365),
        Ge = n(366),
        Ze = n(194),
        qe = n.n(Ze),
        Ye = n(92),
        Xe = n.n(Ye),
        Qe = [
          "type",
          "link",
          "onClick",
          "className",
          "primary",
          "secondary",
          "tertiary",
          "standardAnimate",
          "children",
        ],
        Je = Object(c.forwardRef)(function (e, t) {
          var n = e.type,
            a = e.link,
            o = e.onClick,
            l = e.className,
            i = e.primary,
            r = e.secondary,
            s = e.tertiary,
            c = e.standardAnimate,
            u = e.children,
            d = Object(w.a)(e, Qe),
            v = [Xe.a.button, l];
          return (
            i && v.push(Xe.a["button-primary"]),
            r && v.push(Xe.a["button-secondary"]),
            s && v.push(Xe.a["button-tertiary"]),
            c && v.push(Xe.a["button-animate"]),
            a
              ? Object(f.jsx)(
                  T.b,
                  Object(b.a)(
                    Object(b.a)({}, d),
                    {},
                    {className: v.join(" "), to: a, children: u}
                  )
                )
              : Object(f.jsx)(
                  "button",
                  Object(b.a)(
                    Object(b.a)({ref: t}, d),
                    {},
                    {
                      className: v.join(" "),
                      onClick: o,
                      type: n || "button",
                      children: u,
                    }
                  )
                )
          );
        }),
        Ke = n(58),
        $e = n.n(Ke),
        et = ["children", "onClose"],
        tt = Object(Ue.a)(Ve.a)(function (e) {
          var t = e.theme;
          return {
            "& .MuiDialogContent-root": {padding: t.spacing(2)},
            "& .MuiDialogActions-root": {padding: t.spacing(1)},
          };
        }),
        nt = function (e) {
          var t = e.children,
            n = e.onClose,
            a = Object(w.a)(e, et);
          return Object(f.jsxs)(
            ze.a,
            Object(b.a)(
              Object(b.a)({sx: {m: 0, p: 2}}, a),
              {},
              {
                children: [
                  t,
                  n
                    ? Object(f.jsx)(J.a, {
                        "aria-label": "close",
                        "onClick": n,
                        "sx": {
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: function (e) {
                            return e.palette.grey[500];
                          },
                        },
                        "children": Object(f.jsx)(qe.a, {}),
                      })
                    : null,
                ],
              }
            )
          );
        };
      function at(e) {
        var t = e.closedContent,
          n = e.title,
          a = e.content,
          o = e.onSavebutton,
          l = e.onSaveButtonLoading,
          i = e.onClick,
          r = e.notCloseable,
          u = void 0 !== r && r,
          d = e.autoClose,
          v = void 0 !== d && d,
          m = e.triggerContent,
          h = Object(c.useState)(!1),
          b = Object(s.a)(h, 2),
          p = b[0],
          g = b[1],
          j = function () {
            g(!0);
          },
          O = function () {
            g(!1);
          };
        return (
          Object(c.useEffect)(
            function () {
              u && j(), v && O();
            },
            [u, v]
          ),
          Object(f.jsxs)("div", {
            className: m && "full-hw ",
            children: [
              m &&
                Object(f.jsx)("div", {
                  className: m && "full-hw",
                  onClick: j,
                  children: m,
                }),
              !m &&
                !u &&
                Object(f.jsx)(U.a, {
                  onClick: j,
                  className: " ".concat($e.a["popup-click-btn"]),
                  children: t,
                }),
              Object(f.jsxs)(tt, {
                "className": " ".concat($e.a["popup-box"]),
                "onClose": u ? function () {} : O,
                "aria-labelledby": "customized-dialog-title",
                "open": p,
                "children": [
                  !u &&
                    Object(f.jsx)(nt, {
                      id: "customized-dialog-title",
                      onClose: u ? function () {} : O,
                      className: "display-small--bold",
                      children: n && n,
                    }),
                  Object(f.jsx)(We.a, {
                    dividers: !0,
                    className: m && "mg-b-10",
                    children: a,
                  }),
                  Object(f.jsx)(Ge.a, {
                    children:
                      !m &&
                      !u &&
                      Object(f.jsxs)(c.Fragment, {
                        children: [
                          Object(f.jsx)(Je, {
                            onClick: u ? function () {} : O,
                            className: "link-medium "
                              .concat($e.a["popup-btn"], " ")
                              .concat($e.a["popup-btn-cancel"]),
                            children: "Cancel",
                          }),
                          Object(f.jsxs)(Je, {
                            disabled: l,
                            onClick: i || function () {},
                            className: "link-medium "
                              .concat($e.a["popup-btn"], " ")
                              .concat($e.a["popup-btn-success"]),
                            children: [
                              l && Object(f.jsx)(be, {className: "mg-r-1"}),
                              o && o,
                            ],
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ot = n(29),
        lt = n.n(ot),
        it = [
          "className",
          "alt",
          "sources",
          "pictureClassname",
          "sourceClass",
          "loadedClassName",
        ];
      var rt = function (e) {
          var t = e.className,
            n = e.alt,
            a = e.sources,
            o = e.pictureClassname,
            l = e.sourceClass,
            i = e.loadedClassName,
            r = Object(w.a)(e, it),
            u = Object(c.useState)(!1),
            d = Object(s.a)(u, 2),
            v = d[0],
            m = d[1],
            h = Object(c.createElement)(
              "img",
              Object(b.a)(
                Object(b.a)({}, r),
                {},
                {
                  "key": ae(Math.random()),
                  "referrerPolicy": "no-referrer",
                  "aria-hidden": "false",
                  "draggable": "false",
                  "loading": "lazy",
                  "data-testid": "card-image",
                  "alt": n,
                  "className": "".concat(t, " ").concat(v && i),
                  "onLoad": function () {
                    return m(!0);
                  },
                }
              )
            );
          if ((null === a || void 0 === a ? void 0 : a.length) > 0) {
            var p = 0;
            return Object(f.jsxs)("picture", {
              className: o,
              children: [
                a.map(function (e, t) {
                  var n = p;
                  return (
                    (p = null === e || void 0 === e ? void 0 : e.width),
                    Object(f.jsx)(
                      "source",
                      {
                        className: l,
                        media: ""
                          .concat(
                            n && t > 0
                              ? "(min-width: ".concat(n + 1, "px) and ")
                              : "",
                            "(max-width: "
                          )
                          .concat(
                            null === e || void 0 === e ? void 0 : e.width,
                            "px)"
                          ),
                        srcSet: null === e || void 0 === e ? void 0 : e.url,
                      },
                      ae(
                        (null === e || void 0 === e ? void 0 : e.width) +
                          (null === e || void 0 === e ? void 0 : e.height) +
                          t +
                          (null === e || void 0 === e ? void 0 : e.url)
                      )
                    )
                  );
                }),
                h,
              ],
            });
          }
          return h;
        },
        st = n(21),
        ct = n(195),
        ut = function (e, t) {
          var n,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          (null === (n = e) || void 0 === n ? void 0 : n.text) && (e = [e]);
          var r = new Set(ct.keywords),
            s = !1;
          return e.map(function (n, u) {
            var d, v;
            if (s) return null;
            var m = null === n || void 0 === n ? void 0 : n.text,
              h =
                null === (d = e) ||
                void 0 === d ||
                null === (v = d[u + 1]) ||
                void 0 === v
                  ? void 0
                  : v.text,
              b = ae(u + m + t);
            if (h) {
              var p,
                g = h.split(" "),
                j = Object(st.a)(g);
              try {
                for (j.s(); !(p = j.n()).done; ) {
                  var O = p.value;
                  if (r.has(O.toLowerCase().trim())) return (s = !0), null;
                }
              } catch (S) {
                j.e(S);
              } finally {
                j.f();
              }
            }
            if (null === n || void 0 === n ? void 0 : n.navigate) {
              var x,
                y,
                _,
                w,
                C =
                  null === n ||
                  void 0 === n ||
                  null === (x = n.navigate) ||
                  void 0 === x ||
                  null === (y = x.browseId) ||
                  void 0 === y
                    ? void 0
                    : y.trim(),
                k =
                  (null === n ||
                    void 0 === n ||
                    null === (_ = n.navigate) ||
                    void 0 === _ ||
                    _.videoId,
                  null === n ||
                  void 0 === n ||
                  null === (w = n.navigate) ||
                  void 0 === w
                    ? void 0
                    : w.params);
              if (a && C === a.trim())
                return Object(f.jsx)(
                  "span",
                  {className: t, children: m},
                  ae(b)
                );
              var N = "/".concat(i ? "genres" : "browse", "/").concat(C) || !1;
              return (
                !l && k ? (N += "?params=" + k) : l && k && (N += "/" + k),
                Object(f.jsxs)(c.Fragment, {
                  children: [
                    Object(f.jsx)(
                      T.b,
                      {to: N, className: t, children: m},
                      ae(b)
                    ),
                    o &&
                      Object(f.jsx)(
                        Je,
                        {
                          link: N,
                          tertiary: "true",
                          standardAnimate: "true",
                          type: "button",
                          className: "music-shelf-button link-x-small",
                          children: "see all",
                        },
                        ae(b)
                      ),
                  ],
                })
              );
            }
            return Object(f.jsx)("span", {children: m}, ae(b));
          }, null);
        },
        dt = function (e) {
          return "object" !== typeof e
            ? e
            : null === e || void 0 === e
            ? void 0
            : e.reduce(function (e, t) {
                return e + (null === t || void 0 === t ? void 0 : t.text);
              }, "");
        },
        vt = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "text";
          return "object" !== typeof e
            ? e
            : null === e || void 0 === e
            ? void 0
            : e.reduce(function (e, n) {
                return e + (null === n || void 0 === n ? void 0 : n[t]);
              }, "");
        },
        mt = ["triggerContent", "menuItems", "isClosed"];
      function ht(e) {
        var t = e.triggerContent,
          n = e.menuItems,
          a = e.isClosed,
          o = Object(w.a)(e, mt),
          l = Object(c.useState)(null),
          i = Object(s.a)(l, 2),
          r = i[0],
          u = i[1],
          d = function () {
            u(null);
          };
        return (
          Object(c.useEffect)(
            function () {
              a && d();
            },
            [a]
          ),
          Object(f.jsxs)("div", {
            onContextMenu: function (e) {
              e.preventDefault(),
                u(
                  null === r
                    ? {mouseX: e.clientX - 2, mouseY: e.clientY - 4}
                    : null
                );
            },
            style: {cursor: "context-menu"},
            children: [
              t,
              Object(f.jsx)(
                Pe.a,
                Object(b.a)(
                  Object(b.a)(
                    {
                      open: null !== r,
                      onClose: d,
                      anchorReference: "anchorPosition",
                      anchorPosition:
                        null !== r ? {top: r.mouseY, left: r.mouseX} : void 0,
                    },
                    o
                  ),
                  {},
                  {
                    className: "dark-mode ".concat(
                      null === o || void 0 === o ? void 0 : o.className
                    ),
                    children: n,
                  }
                )
              ),
            ],
          })
        );
      }
      var bt,
        pt = n(357),
        ft = n(350),
        gt = n(199),
        jt = n.n(gt),
        Ot = ["title", "titleId"];
      function xt() {
        return (
          (xt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          xt.apply(this, arguments)
        );
      }
      function yt(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function _t(e, t) {
        var n = e.title,
          a = e.titleId,
          o = yt(e, Ot);
        return c.createElement(
          "svg",
          xt(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "focusable": "false",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          bt ||
            (bt = c.createElement(
              "g",
              null,
              c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.808 4.655l2.069 1.978h-.527c-1.656 0-3.312.68-4.458 1.814L12.797 9.75l1.179 1.246 1.317-1.527c.764-.794 1.91-1.247 3.057-1.247h.55l-2.07 2.014 1.178 1.179 4.005-3.993-4.026-3.945-1.178 1.179zm1.974 10.998l-1.974-1.888 1.18-1.179 4.024 3.945-4.004 3.993-1.178-1.179 1.954-1.901h-.434c-1.656 0-3.312-.625-4.458-1.667L8.242 9.8C7.35 9.071 6.204 8.55 4.93 8.55H2l.006-1.794 2.965.003c1.784 0 3.312.521 4.459 1.563l5.904 6.185c.765.73 1.911 1.146 3.058 1.146h.39zm-9.02-2.092l-1.52 1.394c-.892.793-2.038 1.36-3.312 1.36H2v1.588h2.93c1.783 0 3.312-.567 4.459-1.701l1.537-1.396-1.164-1.245z",
              })
            ))
        );
      }
      var wt = c.forwardRef(_t),
        Ct = (n.p, n(196)),
        kt = n.n(Ct),
        Nt = ["className", "icon"];
      var St,
        Et = function (e) {
          var t = e.className,
            n = e.icon,
            a = void 0 === n ? {svg: "play", alt: "Play song"} : n,
            o = Object(w.a)(e, Nt);
          return Object(f.jsx)(c.Fragment, {
            children: Object(f.jsx)(
              Je,
              Object(b.a)(
                Object(b.a)({className: [kt.a["play-button"], t].join(" ")}, o),
                {},
                {
                  children:
                    "shuffle_play" === a.svg
                      ? Object(f.jsx)(
                          wt,
                          Object(b.a)(
                            Object(b.a)({}, a),
                            {},
                            {style: {fill: "white"}}
                          )
                        )
                      : Object(f.jsx)(z, Object(b.a)({}, a)),
                }
              )
            ),
          });
        },
        Pt = [
          "add_next",
          "service",
          "children",
          "msg",
          "onClick",
          "playButton",
          "onClickPlayButton",
          "playButtonClass",
          "playButtonIconClass",
        ],
        It = function (e) {
          var t,
            n = e.add_next,
            a = void 0 === n || n,
            o = e.service,
            l = e.children,
            i = e.msg,
            r = e.onClick,
            s =
              (e.playButton,
              e.onClickPlayButton,
              e.playButtonClass,
              e.playButtonIconClass,
              Object(w.a)(e, Pt)),
            u = Object(c.useContext)(p),
            d = u.addToEndOfNextSongs,
            m = u.addToNextOfNextSongs,
            h = null === o || void 0 === o ? void 0 : o.isVideo,
            g =
              (null === o || void 0 === o || o.isPlaylist,
              h ? "videoId" : "playlistId"),
            j = null === o || void 0 === o ? void 0 : o.queueTarget,
            O =
              null === o ||
              void 0 === o ||
              null === (t = o.queueTarget) ||
              void 0 === t
                ? void 0
                : t[g];
          h && (j = {videoIds: "object" === typeof O ? O : [O]});
          var x = Object(Y.useMutation)(
            function () {
              return te(
                {
                  url: "https://soundrex.onrender.com/api/v1/audio/get_queue",
                  method: "POST",
                  data: j,
                },
                !1,
                !1,
                !0,
                "Oops, something went wrong...",
                {autoClose: 2e3, theme: "colored"}
              );
            },
            {
              onSuccess: function (e) {
                (null === e || void 0 === e ? void 0 : e.queue) &&
                  (a
                    ? (m(e.queue),
                      Object(v.b)(i, {
                        autoClose: 2e3,
                        type: "success",
                        theme: "dark",
                        icon: !1,
                      }))
                    : (d(e.queue),
                      Object(v.b)(
                        "".concat(i.split(" ")[0], " added to queue"),
                        {
                          autoClose: 2e3,
                          type: "success",
                          theme: "dark",
                          icon: !1,
                        }
                      )));
              },
              onError: function (e) {
                console.log(e);
              },
            }
          );
          return Object(f.jsx)(
            Ae.a,
            Object(b.a)(
              Object(b.a)({}, s),
              {},
              {
                onClick: function () {
                  r && r(), x.mutate();
                },
                children: l,
              }
            )
          );
        },
        Lt = ["title", "titleId"];
      function Mt() {
        return (
          (Mt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Mt.apply(this, arguments)
        );
      }
      function At(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Tt(e, t) {
        var n = e.title,
          a = e.titleId,
          o = At(e, Lt);
        return c.createElement(
          "svg",
          Mt(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "focusable": "false",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          St ||
            (St = c.createElement(
              "g",
              null,
              c.createElement("path", {
                d: "M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z",
              })
            ))
        );
      }
      var Rt,
        Bt = c.forwardRef(Tt),
        Dt = (n.p, ["title", "titleId"]);
      function Ft() {
        return (
          (Ft =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Ft.apply(this, arguments)
        );
      }
      function Ht(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Ut(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Ht(e, Dt);
        return c.createElement(
          "svg",
          Ft(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "focusable": "false",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Rt ||
            (Rt = c.createElement(
              "g",
              null,
              c.createElement("path", {
                d: "M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z",
              })
            ))
        );
      }
      var Vt,
        zt = c.forwardRef(Ut),
        Wt = (n.p, ["title", "titleId"]);
      function Gt() {
        return (
          (Gt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Gt.apply(this, arguments)
        );
      }
      function Zt(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function qt(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Zt(e, Wt);
        return c.createElement(
          "svg",
          Gt(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "focusable": "false",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Vt ||
            (Vt = c.createElement(
              "g",
              null,
              c.createElement("path", {d: "M0 0h24v24H0z", fill: "none"}),
              c.createElement("path", {
                d: "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z",
              })
            ))
        );
      }
      var Yt,
        Xt = c.forwardRef(qt),
        Qt = (n.p, ["title", "titleId"]);
      function Jt() {
        return (
          (Jt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Jt.apply(this, arguments)
        );
      }
      function Kt(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function $t(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Kt(e, Qt);
        return c.createElement(
          "svg",
          Jt(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "focusable": "false",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Yt ||
            (Yt = c.createElement(
              "g",
              null,
              c.createElement("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z",
              })
            ))
        );
      }
      var en,
        tn = c.forwardRef($t),
        nn = (n.p, ["title", "titleId"]);
      function an() {
        return (
          (an =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          an.apply(this, arguments)
        );
      }
      function on(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function ln(e, t) {
        var n = e.title,
          a = e.titleId,
          o = on(e, nn);
        return c.createElement(
          "svg",
          an(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "focusable": "false",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          en ||
            (en = c.createElement(
              "g",
              null,
              c.createElement("path", {
                d: "M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7.5-2v5.22c-.31-.14-.64-.22-1-.22a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5V12h2v-2h-3.5zM11 14c-2.67 0-8 1.34-8 4v2h10.76c-.48-.72-.76-1.58-.76-2.5 0-1.18.46-2.26 1.21-3.06-1.17-.29-2.33-.44-3.21-.44z",
              })
            ))
        );
      }
      var rn = c.forwardRef(ln),
        sn =
          (n.p,
          [
            "menuOptions",
            "serviceSuccessMsg",
            "fullSpace",
            "className",
            "isContextMenu",
            "children",
          ]),
        cn = [
          {
            text: ["shuffle play", "play", "MUSIC_SHUFFLE"],
            standard: "Shuffle play",
            icon: Object(f.jsx)(wt, {}),
          },
          {
            text: ["start radio", "radio"],
            standard: "Start radio",
            icon: Object(f.jsx)(Bt, {}),
          },
          {
            text: ["play next", "QUEUE_PLAY_NEXT", "next"],
            standard: "Play next",
            isService: !0,
            insertion: "NEXT",
            icon: Object(f.jsx)(zt, {}),
          },
          {
            text: ["add to queue", "to queue", "ADD_TO_REMOTE_QUEUE"],
            standard: "Add to queue",
            isService: !0,
            insertion: "END",
            icon: Object(f.jsx)(Xt, {}),
          },
          {
            text: ["go to album", "to album", "album"],
            standard: "Go to album",
            icon: Object(f.jsx)(tn, {}),
          },
          {
            text: ["go to artist", "to artist", "artist"],
            standard: "Go to artist",
            icon: Object(f.jsx)(rn, {}),
          },
        ],
        un = {style: {height: "max-content", width: "20ch"}};
      var dn = function (e) {
          var t = e.menuOptions,
            n = e.serviceSuccessMsg,
            a = e.fullSpace,
            o = void 0 !== a && a,
            l = e.className,
            i = e.isContextMenu,
            r = e.children,
            u = Object(w.a)(e, sn),
            v = Object(f.jsx)(
              J.a,
              Object(b.a)(
                Object(b.a)({}, u),
                {},
                {
                  className: "more-options ".concat(l),
                  children: Object(f.jsx)(jt.a, {style: {color: "#fff"}}),
                }
              )
            ),
            m = Object(c.useState)(!1),
            h = Object(s.a)(m, 2),
            g = h[0],
            j = h[1],
            O = Object(c.useContext)(p),
            x = O.setCurrentSongIndex,
            y = O.setCurrentSongParam,
            _ = O.closePlayer,
            C = O.upNextSongs,
            k = O.setUpNextSongs,
            N = O.currentSong,
            S = Object(d.g)(),
            E = t.map(function (e, t) {
              var a,
                o,
                l,
                i,
                r,
                s,
                c,
                u,
                d = cn.find(function (t) {
                  return (
                    t.text.find(function (t) {
                      return t
                        .toLowerCase()
                        .includes(
                          null === e || void 0 === e
                            ? void 0
                            : e.text.toLowerCase()
                        );
                    }) || !1
                  );
                });
              if (!d) return null;
              if (
                (null === d || void 0 === d ? void 0 : d.isService) &&
                !(null === e ||
                void 0 === e ||
                null === (a = e.service) ||
                void 0 === a
                  ? void 0
                  : a.isVideo) &&
                !(null === e ||
                void 0 === e ||
                null === (o = e.service) ||
                void 0 === o
                  ? void 0
                  : o.isPlaylist)
              )
                return null;
              if (null === d || void 0 === d ? void 0 : d.isService)
                return Object(f.jsxs)(
                  It,
                  {
                    style: {height: 48},
                    add_next: d.insertion.toLowerCase().includes("next"),
                    service: e.service,
                    msg: n,
                    disabled:
                      (null === C || void 0 === C ? void 0 : C.length) <= 0,
                    onClick: function () {
                      j(!0);
                    },
                    children: [
                      Object(f.jsx)(Te.a, {
                        style: {fill: "#ffffff"},
                        children: d.icon,
                      }),
                      Object(f.jsx)(ft.a, {
                        className: "menuList-typo",
                        children: d.standard,
                      }),
                    ],
                  },
                  ae(d.standard)
                );
              var v,
                m =
                  (null === e ||
                  void 0 === e ||
                  null === (l = e.navigate) ||
                  void 0 === l
                    ? void 0
                    : l.playlistId) ||
                  (null === e ||
                  void 0 === e ||
                  null === (i = e.navigate) ||
                  void 0 === i
                    ? void 0
                    : i.videoId),
                h =
                  null === e ||
                  void 0 === e ||
                  null === (r = e.navigate) ||
                  void 0 === r
                    ? void 0
                    : r.browseId,
                b =
                  null === e ||
                  void 0 === e ||
                  null === (s = e.navigate) ||
                  void 0 === s
                    ? void 0
                    : s.params,
                p =
                  null === e ||
                  void 0 === e ||
                  null === (c = e.navigate) ||
                  void 0 === c
                    ? void 0
                    : c.playlistId,
                g =
                  null === e ||
                  void 0 === e ||
                  null === (u = e.navigate) ||
                  void 0 === u
                    ? void 0
                    : u.videoId;
              if (
                (m &&
                  (v = "/play"
                    .concat(g ? "?id=".concat(g) : "")
                    .concat(
                      p ? "".concat(p && !g ? "?" : "&", "list=").concat(p) : ""
                    )),
                h)
              ) {
                var O,
                  w =
                    null === e ||
                    void 0 === e ||
                    null === (O = e.navigate) ||
                    void 0 === O
                      ? void 0
                      : O.browseId;
                v = "/browse/".concat(w).concat(b ? "?params=".concat(b) : "");
              }
              return v
                ? Object(f.jsx)(
                    "a",
                    {
                      replace: !0,
                      className: "link-btn",
                      style: {marginLeft: "0", textDecoration: "none"},
                      onClick: function () {
                        var e, t;
                        if (
                          ((null === (e = v) || void 0 === e
                            ? void 0
                            : e.startsWith("/play")) &&
                            ((null === N || void 0 === N
                              ? void 0
                              : N.playlistId) !== p && k([]),
                            y(""),
                            _()),
                          S.push(v),
                          null === (t = v) || void 0 === t
                            ? void 0
                            : t.startsWith("/play"))
                        )
                          return x(0);
                      },
                      to: v,
                      children: Object(f.jsxs)(Ae.a, {
                        style: {height: 48},
                        children: [
                          Object(f.jsx)(Te.a, {
                            style: {fill: "#ffffff"},
                            children: d.icon,
                          }),
                          Object(f.jsx)(ft.a, {
                            className: "menuList-typo",
                            children: d.standard,
                          }),
                        ],
                      }),
                    },
                    ae(d.standard)
                  )
                : null;
            });
          return i
            ? Object(f.jsx)(ht, {
                isClosed: g,
                triggerContent: r,
                menuItems: Object(f.jsx)(pt.a, {children: E}),
              })
            : Object(f.jsx)(Le, {
                isClosed: g,
                fullSpace: o,
                ariaLabel: "more",
                contentContainerClassName: "full-hw flex-center",
                id: "lock-menu",
                PaperProps: un,
                MenuListProps: {
                  "aria-labelledby": "lock-button",
                  "role": "listbox",
                },
                triggerContent: v,
                menuItems: Object(f.jsx)(pt.a, {children: E}),
              });
        },
        vn = n(200),
        mn = n.n(vn),
        hn = n(202),
        bn = n.n(hn),
        pn = n(201),
        fn = n.n(pn),
        gn = [
          "refetchLibrary",
          "removeFromFavouritesHandler",
          "rawData",
          "isLibrary",
          "changeSong",
          "changeParam",
          "isStaticList",
          "selectedSong",
          "data",
          "type",
          "github",
          "linkedIn",
          "url",
        ];
      var jn = function (e) {
          var t,
            n,
            a,
            o,
            l,
            u,
            d,
            v,
            m,
            h = e.refetchLibrary,
            b = e.removeFromFavouritesHandler,
            p = e.rawData,
            g = e.isLibrary,
            j = e.changeSong,
            O = e.changeParam,
            x = e.isStaticList,
            y = e.selectedSong,
            _ = e.data,
            C = e.type,
            k = e.github,
            N = e.linkedIn,
            S = e.url,
            E =
              (Object(w.a)(e, gn),
              (p && (null === _ || void 0 === _ ? void 0 : _.title)) ||
                ((null === _ ||
                void 0 === _ ||
                null === (t = _.title) ||
                void 0 === t
                  ? void 0
                  : t.length) > 0 &&
                  dt(null === _ || void 0 === _ ? void 0 : _.title))),
            P =
              (p && (null === _ || void 0 === _ ? void 0 : _.subtitle)) ||
              ((null === _ ||
              void 0 === _ ||
              null === (n = _.subtitle) ||
              void 0 === n
                ? void 0
                : n.length) > 0 &&
                ut(_.subtitle, "card-link ")),
            I =
              (null === _ ||
              void 0 === _ ||
              null === (a = _.shortBylineText) ||
              void 0 === a
                ? void 0
                : a.length) > 0 && ut(_.shortBylineText, "card-link"),
            L =
              (null === _ ||
              void 0 === _ ||
              null === (o = _.lengthText) ||
              void 0 === o
                ? void 0
                : o.length) > 0 && ut(_.lengthText, "card-link"),
            M = p
              ? null === _ || void 0 === _
                ? void 0
                : _.thumbnail
              : (null === _ ||
                void 0 === _ ||
                null === (l = _.thumbnails) ||
                void 0 === l
                  ? void 0
                  : l.length) > 0 &&
                (null === (u = _.thumbnails) ||
                void 0 === u ||
                null === (d = u[0]) ||
                void 0 === d
                  ? void 0
                  : d.url),
            A = null === _ || void 0 === _ ? void 0 : _.videoId,
            R =
              (null === _ || void 0 === _ ? void 0 : _.browseId) &&
              "/browse/".concat(_.browseId);
          (null === _ || void 0 === _ ? void 0 : _.videoId) &&
            (R = "/play?id=".concat(_.videoId));
          var B =
            (null === _ || void 0 === _ || null === (v = _.menu) || void 0 === v
              ? void 0
              : v.length) > 0 &&
            Object(f.jsx)(dn, {
              fullSpace: !0,
              menuOptions: null === _ || void 0 === _ ? void 0 : _.menu,
              serviceSuccessMsg: A
                ? "Song will play next"
                : "Playlist will play next",
            });
          (null === _ || void 0 === _ ? void 0 : _.playlistId) &&
            (R += ""
              .concat(
                (null === _ || void 0 === _ ? void 0 : _.videoId) ? "&" : "?",
                "list="
              )
              .concat(_.playlistId));
          var D = Object(c.useState)(!1),
            F = Object(s.a)(D, 2),
            H = F[0],
            V = F[1],
            W = A ? "play" : "new-window",
            G = Object(c.useState)(W),
            Z = Object(s.a)(G, 2),
            q = Z[0],
            Y = Z[1],
            X = null === y || void 0 === y ? void 0 : y.playerState,
            Q = null === y || void 0 === y ? void 0 : y.videoId;
          Object(c.useEffect)(
            function () {
              if (
                (V(!1), y) &&
                (null === y || void 0 === y ? void 0 : y.videoId) ===
                  (null === _ || void 0 === _ ? void 0 : _.videoId) &&
                (Y("volume"),
                null === y || void 0 === y ? void 0 : y.playerState)
              )
                switch (y.playerState) {
                  case "playing":
                    V(!1), Y("volume");
                    break;
                  case "loading":
                    return V(!0);
                  case "error":
                    Y("error");
                    break;
                  default:
                    Y("volume");
                }
            },
            [Q, X]
          );
          var J = null === _ || void 0 === _ ? void 0 : _.index,
            K = null === _ || void 0 === _ ? void 0 : _.params,
            $ =
              (null === _ || void 0 === _ ? void 0 : _.videoId) ||
              (null === _ || void 0 === _ ? void 0 : _.browseId),
            ee = Object(c.useState)(!1),
            te = Object(s.a)(ee, 2),
            ne = te[0],
            ae = te[1],
            oe = H
              ? Object(f.jsx)(be, {
                  style: A
                    ? {width: "3rem", height: "3rem"}
                    : {width: "2.5rem", height: "2.5rem"},
                  className: "".concat(
                    lt.a["row-music-shelf-thumbnail-icon"],
                    " "
                  ),
                })
              : Object(f.jsx)(z, {
                  style: {width: "3rem", height: "3rem"},
                  className: "".concat(
                    lt.a["row-music-shelf-thumbnail-icon"],
                    " "
                  ),
                  svg: q,
                  alt: A ? "play song" : "open album",
                });
          "contributor" === C &&
            (oe = Object(f.jsx)(mn.a, {
              style: {width: "3rem", height: "3rem"},
              className: "".concat(lt.a["row-music-shelf-thumbnail-icon"], " "),
              title: E,
            }));
          var le = Object(f.jsxs)("li", {
            className: "relative "
              .concat(lt.a["row-music-shelf"], " ")
              .concat(
                (null === y || void 0 === y ? void 0 : y.videoId) ===
                  (null === _ || void 0 === _ ? void 0 : _.videoId) && x
                  ? lt.a["selected-song"]
                  : "",
                "  "
              )
              .concat(g && "flex-center", "  ")
              .concat("contributor" === C && "contributor"),
            children: [
              Object(f.jsx)(T.b, {
                onClick: function () {
                  if (S && "contributor" === C)
                    return window.location.replace(S);
                  x && J >= 0 && j(J), x && K && O(K);
                },
                to: R,
                className: " full-hw absolute  z-index-2",
              }),
              Object(f.jsxs)("div", {
                className: lt.a["row-music-shelf-thumbnail-container"],
                children: [
                  oe,
                  Object(f.jsx)(rt, {
                    src: M,
                    className: lt.a["row-music-shelf-thumbnail-img"],
                    alt: "Thumbnail",
                  }),
                ],
              }),
              Object(f.jsxs)("div", {
                className: " ".concat(lt.a["row-music-shelf-content"]),
                children: [
                  Object(f.jsx)("p", {
                    className: " link-medium white ".concat(
                      lt.a["row-music-shelf__title"]
                    ),
                    children: E,
                  }),
                  !g &&
                    Object(f.jsx)("span", {
                      className: ""
                        .concat(!x && "z-index-3", " ")
                        .concat(I ? "link-x-small gray" : "text-x-small", " ")
                        .concat(lt.a["row-music-shelf__subtitle"], " "),
                      children: P || I,
                    }),
                ],
              }),
              B &&
                Object(f.jsx)("div", {
                  className: "z-index-3 "
                    .concat(lt.a["row-music-shelf-length"], " ")
                    .concat(lt.a["row-music-shelf-menu"]),
                  children: B,
                }),
              L &&
                !g &&
                Object(f.jsx)("div", {
                  className: lt.a["row-music-shelf-length"],
                  children: Object(f.jsx)("span", {
                    className: "".concat(
                      lt.a["row-music-shelf__lengthText"],
                      " link-small gray "
                    ),
                    children: L,
                  }),
                }),
              g &&
                Object(f.jsx)("div", {
                  className: ""
                    .concat(lt.a["library-button"], " ")
                    .concat(lt.a["row-music-shelf-length"], " z-index-5"),
                  children: Object(f.jsx)(at, {
                    closedContent: Object(f.jsx)(z, {
                      liked: !0,
                      svg: "heart",
                      alt: "Like song",
                      style: {minWidth: "2.4rem", minHeight: "2.4rem"},
                      className: "z-index-5",
                    }),
                    title: "Remove from Favourites?",
                    content: Object(f.jsx)("p", {
                      className: "text-medium",
                      children: E,
                    }),
                    onSavebutton: "Remove",
                    onSaveButtonLoading: ne,
                    onClick: Object(r.a)(
                      i.a.mark(function e() {
                        return i.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!$) {
                                  e.next = 6;
                                  break;
                                }
                                return ae(!0), (e.next = 4), b($);
                              case 4:
                                h(), ae(!1);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                  }),
                }),
              "contributor" === C &&
                Object(f.jsxs)("div", {
                  className: "flex-center contributor-icons",
                  children: [
                    Object(f.jsx)("div", {
                      className: ""
                        .concat(lt.a["library-button"], " ")
                        .concat(lt.a["row-music-shelf-length"], " z-index-5"),
                      children: Object(f.jsx)(U.a, {
                        className: $e.a["popup-click-btn"],
                        href: k,
                        children: Object(f.jsx)(fn.a, {
                          title: "Github",
                          style: {minWidth: "2.4rem", minHeight: "2.4rem"},
                          className: "z-index-5",
                        }),
                      }),
                    }),
                    Object(f.jsx)("div", {
                      className: ""
                        .concat(lt.a["library-button"], " ")
                        .concat(lt.a["row-music-shelf-length"], " z-index-5"),
                      children: Object(f.jsx)(U.a, {
                        className: $e.a["popup-click-btn"],
                        href: N,
                        children: Object(f.jsx)(bn.a, {
                          title: "LinkedIn",
                          style: {minWidth: "2.4rem", minHeight: "2.4rem"},
                          className: "z-index-5",
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
          return (
            (null === _ || void 0 === _ || null === (m = _.menu) || void 0 === m
              ? void 0
              : m.length) > 0 &&
              (le = Object(f.jsx)(dn, {
                isContextMenu: !0,
                menuOptions: null === _ || void 0 === _ ? void 0 : _.menu,
                serviceSuccessMsg: A
                  ? "Song will play next"
                  : "Playlist will play next",
                children: le,
              })),
            le
          );
        },
        On = {
          elevation: 0,
          sx: {
            "overflow": "visible",
            "filter": "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "mt": 1.5,
            "& .MuiAvatar-root": {width: 32, height: 32, ml: -0.5, mr: 1},
            "& .MuiMenu-list": {
              bgcolor: "#212121 !important",
              color: "#fff !important",
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: "5px",
              width: 10,
              height: 10,
              bgcolor: "#212121",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        };
      var xn,
        yn = function () {
          var e,
            t,
            n,
            a,
            o = Object(c.useContext)(m),
            l = o.logout,
            i = o.username,
            r = "".concat(G.a["nav-btn"], " ").concat(G.a["nav-btn-settings"]),
            s = Object(f.jsx)(U.a, {
              color: "inherit",
              title: "settings",
              className: r,
              children: Object(f.jsx)(Me.a, {
                sx: {width: 32, height: 32},
                children:
                  (null === i ||
                  void 0 === i ||
                  null === (e = i.split("")) ||
                  void 0 === e ||
                  null === (t = e[0]) ||
                  void 0 === t
                    ? void 0
                    : t.toUpperCase()) || "X",
              }),
            }),
            u = Object(f.jsx)(at, {
              title: "Contributors",
              triggerContent: Object(f.jsxs)(
                Ae.a,
                {
                  className: "text-small "
                    .concat(He.a["menu-item"], " ")
                    .concat(He.a["menu-item-contributors"]),
                  children: [
                    Object(f.jsx)(Te.a, {
                      children: Object(f.jsx)(De.a, {
                        sx: {
                          width: 32,
                          height: 32,
                          color: "#fafafa80 !important",
                        },
                        className: He.a["menu-item-icon"],
                      }),
                    }),
                    Object(f.jsx)("span", {
                      style: {marginLeft: "12px"},
                      children: "Contributors",
                    }),
                  ],
                },
                "W"
              ),
              content: Object(f.jsxs)(c.Fragment, {
                children: [
                  Object(f.jsx)(jn, {
                    rawData: !0,
                    type: "contributor",
                    data: {
                      title: "Sahil Chouksey",
                      thumbnail: "/assets/images/xix3r.jpg",
                    },
                    github: "https://github.com/sahilchouksey",
                    linkedIn:
                      "https://www.linkedin.com/in/sahil-chouksey-5750581a2",
                    url: "https://www.instagram.com/xix3r",
                  }),
                  Object(f.jsx)(jn, {
                    rawData: !0,
                    type: "contributor",
                    data: {
                      title: "Adarsh Hegde",
                      thumbnail: "/assets/images/adarsh-hegde.jpg",
                    },
                    github: "https://github.com/adarshhegde",
                    linkedIn: "https://www.linkedin.com/in/adhegde",
                    url: "https://www.instagram.com/__adarsh.hegde__",
                  }),
                ],
              }),
            }),
            d = [
              Object(f.jsxs)(
                Ae.a,
                {
                  className: "link-small overflow-clip mg-r-1",
                  children: [
                    Object(f.jsx)(Me.a, {
                      sx: {
                        width: 32,
                        height: 32,
                        bgcolor: "#fafafa80 !important",
                        color: "#000 !important",
                      },
                      children:
                        (null === i ||
                        void 0 === i ||
                        null === (n = i.split("")) ||
                        void 0 === n ||
                        null === (a = n[0]) ||
                        void 0 === a
                          ? void 0
                          : a.toUpperCase()) || "X",
                    }),
                    Object(f.jsx)("span", {
                      className: "mg-l-1 overflow-clip",
                      children: i,
                    }),
                  ],
                },
                "X"
              ),
              u,
              Object(f.jsx)(Re.a, {}, "Y"),
              Object(f.jsxs)(
                Ae.a,
                {
                  onClick: l,
                  className: "text-small ".concat(He.a["menu-item"]),
                  children: [
                    Object(f.jsx)(Te.a, {
                      children: Object(f.jsx)(z, {
                        svg: "logout",
                        alt: "",
                        className: He.a["menu-item-icon"],
                      }),
                    }),
                    Object(f.jsx)("span", {children: "Logout"}),
                  ],
                },
                "Z"
              ),
            ];
          return Object(f.jsx)(Le, {
            fullSpace: !0,
            contentContainerClassName: "full-hw flex-align",
            className: G.a["setting-menu"],
            PaperProps: On,
            anchorOrigin: {vertical: "bottom", horizontal: "center"},
            transformOrigin: {vertical: "top", horizontal: "center"},
            triggerContent: s,
            menuItems: d,
          });
        },
        _n = n(204),
        wn = n.n(_n),
        Cn = ["title", "titleId"];
      function kn() {
        return (
          (kn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          kn.apply(this, arguments)
        );
      }
      function Nn(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Sn(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Nn(e, Cn);
        return c.createElement(
          "svg",
          kn(
            {
              "width": 29,
              "height": 30,
              "viewBox": "0 0 29 30",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          xn ||
            (xn = c.createElement("path", {
              d: "M13.2771 17.8034H14.4841H15.9563C16.3661 17.8034 16.7592 17.9662 17.049 18.256C17.3388 18.5459 17.5016 18.9389 17.5016 19.3488V27.7246C17.5016 28.1345 17.6644 28.5276 17.9543 28.8174C18.2441 29.1072 18.6371 29.27 19.047 29.27H26.8814C27.2597 29.27 27.6308 29.1672 27.9551 28.9726C28.5836 28.5955 28.9682 27.9162 28.9682 27.1832V9.51924C28.9682 9.10972 28.8607 8.70737 28.6564 8.35242C28.4649 8.01963 28.1944 7.73911 27.8688 7.53561L17.1054 0.808521C16.5702 0.473965 15.9741 0.248334 15.3515 0.144559L15.2444 0.126715C14.7417 0.0429361 14.228 0.0512197 13.7283 0.151162C13.2304 0.250732 12.7547 0.439633 12.3242 0.708719L1.24472 7.63339C1.01969 7.77404 0.817075 7.9477 0.643666 8.14857C0.22845 8.62955 0 9.24377 0 9.87918L0 27.7246C0 28.1345 0.162815 28.5276 0.452628 28.8174C0.742441 29.1072 1.13551 29.27 1.54537 29.27H9.92121C10.3311 29.27 10.7241 29.1072 11.014 28.8174C11.3038 28.5276 11.4666 28.1345 11.4666 27.7246V19.6139C11.4666 19.0441 11.7349 18.5074 12.1908 18.1655C12.5042 17.9305 12.8854 17.8034 13.2771 17.8034Z",
            }))
        );
      }
      var En,
        Pn = c.forwardRef(Sn),
        In = (n.p, ["title", "titleId"]);
      function Ln() {
        return (
          (Ln =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Ln.apply(this, arguments)
        );
      }
      function Mn(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function An(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Mn(e, In);
        return c.createElement(
          "svg",
          Ln(
            {
              "width": 30,
              "height": 30,
              "viewBox": "0 0 30 30",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          En ||
            (En = c.createElement("path", {
              d: "M27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM24 7.5H19.5V15.75C19.5 17.82 17.82 19.5 15.75 19.5C13.68 19.5 12 17.82 12 15.75C12 13.68 13.68 12 15.75 12C16.605 12 17.37 12.285 18 12.765V4.5H24V7.5ZM3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6Z",
            }))
        );
      }
      var Tn = c.forwardRef(An);
      n.p;
      var Rn = function (e) {
          var t = e.logout,
            n = Object(c.useRef)(),
            a = Object(d.h)(),
            o = Object(c.useState)(!1),
            l = Object(s.a)(o, 2),
            i = l[0],
            r = l[1],
            u = Object(c.useCallback)(
              function () {
                return r(!0);
              },
              [r]
            ),
            v = Object(c.useCallback)(
              function () {
                return r(!1);
              },
              [r]
            ),
            m = n.current;
          Object(c.useEffect)(
            function () {
              if (
                a.pathname.startsWith("/search") &&
                (null === n || void 0 === n ? void 0 : n.current)
              ) {
                u();
                var e = a.pathname.split("/"),
                  t = Object(s.a)(e, 3),
                  o = (t[0], t[1], t[2]);
                (n.current.value = o),
                  setTimeout(function () {
                    n.current.blur();
                  }, 1e3);
              }
            },
            [u, a, m]
          );
          var h = Object(c.useMemo)(function () {
              return Object(f.jsx)(Pn, {});
            }, []),
            b = Object(c.useMemo)(function () {
              return Object(f.jsx)(Tn, {});
            }, []),
            p = Object(c.useMemo)(function () {
              return {
                svg: "search",
                alt: "Search music",
                className: ["nav-logo", "search-icon"].join(" "),
              };
            }, []),
            g = Object(f.jsxs)(c.Fragment, {
              children: [
                !i &&
                  Object(f.jsxs)(c.Fragment, {
                    children: [
                      Object(f.jsx)(q, {
                        textIcon: h,
                        endpoint: "/home",
                        text: "home",
                      }),
                      Object(f.jsx)(q, {
                        textIcon: b,
                        endpoint: "/favourites",
                        text: "favourites",
                      }),
                    ],
                  }),
                Object(f.jsx)(Ee, {logout: t, isOpen: i, onClose: v, ref: n}),
              ],
            }),
            j = Object(f.jsxs)(c.Fragment, {
              children: [
                !i &&
                  Object(f.jsx)(q, {
                    text: "search",
                    className: "search-link",
                    icon: p,
                    onClick: u,
                  }),
                Object(f.jsx)(yn, {}),
              ],
            });
          return Object(f.jsx)(c.Fragment, {
            children: Object(f.jsxs)("nav", {
              className: wn.a.navbar,
              children: [
                Object(f.jsx)(R, {className: "nav-logo"}),
                Object(f.jsx)(H, {isSearchFocused: i, center: g, end: j}),
              ],
            }),
          });
        },
        Bn = n(359),
        Dn = n(368);
      function Fn(e) {
        var t = e.proc,
          n = void 0 === t ? 10 : t,
          a = e.createPortal,
          l = void 0 === a || a,
          i = Object(c.useState)(0),
          r = Object(s.a)(i, 2),
          u = r[0],
          d = r[1];
        return (
          Object(c.useEffect)(
            function () {
              var e = setInterval(function () {
                d(function (e) {
                  if (e >= 90) return 90;
                  var t = Math.random() * n;
                  return Math.min(e + t, 90);
                });
              }, 800);
              return function () {
                clearInterval(e);
              };
            },
            [n]
          ),
          l
            ? o.a.createPortal(
                Object(f.jsx)("div", {
                  className: "fixed-top",
                  children: Object(f.jsx)(Dn.a, {
                    variant: "determinate",
                    value: u,
                    style: {height: "6.5px"},
                  }),
                }),
                document.getElementById("overlays")
              )
            : Object(f.jsx)("div", {
                className: "fixed-top",
                children: Object(f.jsx)(Dn.a, {
                  variant: "determinate",
                  value: u,
                  style: {height: "6.5px"},
                }),
              })
        );
      }
      var Hn = n(209),
        Un = n(150),
        Vn = n.n(Un);
      var zn = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = Q()(function (n, a) {
              t && e(n, a);
            }, 800),
            a = Object(c.useCallback)(
              function () {
                return window.addEventListener("resize", function () {
                  return n(window.innerWidth, window.innerHeight);
                });
              },
              [n]
            ),
            o = Object(c.useCallback)(
              function () {
                return window.removeEventListener("resize", function () {
                  return n(window.innerWidth, window.innerHeight);
                });
              },
              [n]
            );
          return (
            Object(c.useEffect)(
              function () {
                return (
                  t && a(),
                  function () {
                    o();
                  }
                );
              },
              [n, t]
            ),
            o
          );
        },
        Wn = n(371),
        Gn = ["randomColor", "className"];
      var Zn,
        qn = function (e) {
          var t = e.randomColor,
            n = e.className,
            a = Object(w.a)(e, Gn);
          return Object(f.jsx)(
            "div",
            Object(b.a)(
              Object(b.a)({}, a),
              {},
              {
                style: t && {
                  backgroundColor:
                    "#" +
                    Math.floor(16777215 * Math.random())
                      .toString(16)
                      .padStart(6, "0")
                      .toUpperCase(),
                },
                className: ["underline", n].join(" "),
              }
            )
          );
        },
        Yn = n(22),
        Xn = n(44),
        Qn = n.n(Xn),
        Jn = n(206).a.div.attrs(function (e) {
          return {
            className: [
              Qn.a["music-card-container"],
              null === e || void 0 === e ? void 0 : e.className,
            ].join(" "),
          };
        })(Zn || (Zn = Object(Yn.a)(["\n    width: ", ";\n  "])), function (e) {
          var t;
          return null === e ||
            void 0 === e ||
            null === (t = e.style) ||
            void 0 === t
            ? void 0
            : t.width;
        }),
        Kn = n(105),
        $n = n.n(Kn),
        ea = ["data", "underLine", "type", "rectangleBoxClass"];
      var ta = Object(c.forwardRef)(function (e, t) {
          var n,
            a,
            o,
            l,
            i,
            r,
            s,
            c = e.data,
            u = e.underLine,
            d = e.type,
            v = e.rectangleBoxClass,
            m = Object(w.a)(e, ea),
            h =
              (null === c ||
              void 0 === c ||
              null === (n = c.title) ||
              void 0 === n
                ? void 0
                : n.length) > 0 && ut(c.title),
            b =
              (null === c ||
              void 0 === c ||
              null === (a = c.thumbnails) ||
              void 0 === a
                ? void 0
                : a.length) > 0 &&
              (null === (o = c.thumbnails) ||
              void 0 === o ||
              null === (l = o[0]) ||
              void 0 === l
                ? void 0
                : l.url),
            p = ""
              .concat((d = d || "browse"), "/")
              .concat(null === c || void 0 === c ? void 0 : c.browseId);
          return (
            (null === c || void 0 === c ? void 0 : c.params) &&
              (p = "".concat(p, "/") + c.params),
            Object(f.jsx)(Jn, {
              style: null === m || void 0 === m ? void 0 : m.styles,
              className: $n.a["music-card-box-container"],
              children: Object(f.jsx)(Wn.a, {
                children: Object(f.jsxs)(T.b, {
                  draggable: "false",
                  to: p,
                  className: [$n.a["music-card-box"], "capitalize"].join(" "),
                  ref: t,
                  children: [
                    b &&
                      Object(f.jsx)(rt, {
                        src: b,
                        alt:
                          (null === c ||
                          void 0 === c ||
                          null === (i = c.title) ||
                          void 0 === i
                            ? void 0
                            : i.length) > 0
                            ? null === c ||
                              void 0 === c ||
                              null === (r = c.title) ||
                              void 0 === r ||
                              null === (s = r[0]) ||
                              void 0 === s
                              ? void 0
                              : s.text
                            : "Not found",
                        className: $n.a["music-card-box__img"],
                      }),
                    Object(f.jsx)("p", {
                      draggable: "false",
                      className: [
                        $n.a["music-card-box__title"],
                        "text-medium",
                        v,
                      ].join(" "),
                      children: h,
                    }),
                    u && Object(f.jsx)(qn, {randomColor: !0}),
                  ],
                }),
              }),
            })
          );
        }),
        na = ["data"],
        aa = Object(c.forwardRef)(function (e, t) {
          var n,
            a,
            o,
            l,
            i,
            r,
            s,
            c,
            u,
            d,
            v = e.data,
            m = Object(w.a)(e, na),
            h =
              (null === v ||
              void 0 === v ||
              null === (n = v.title) ||
              void 0 === n
                ? void 0
                : n.length) > 0 && ut(v.title, "card-link"),
            p =
              (null === v ||
              void 0 === v ||
              null === (a = v.subtitle) ||
              void 0 === a
                ? void 0
                : a.length) > 0 && ut(v.subtitle, "card-link"),
            g =
              (null === v ||
              void 0 === v ||
              null === (o = v.thumbnails) ||
              void 0 === o
                ? void 0
                : o.length) > 0 &&
              (null === (l = v.thumbnails) ||
              void 0 === l ||
              null === (i = l[0]) ||
              void 0 === i
                ? void 0
                : i.url),
            j = null === v || void 0 === v ? void 0 : v.videoId,
            O =
              (null === v ||
              void 0 === v ||
              null === (r = v.menu) ||
              void 0 === r
                ? void 0
                : r.length) > 0 &&
              Object(f.jsx)(dn, {
                fullSpace: !0,
                className: Qn.a["music-card__header-overlay-menu"],
                menuOptions: v.menu,
                serviceSuccessMsg: (
                  null === v || void 0 === v ? void 0 : v.browseId
                )
                  ? "Playlist will play next"
                  : "Song will play next",
              }),
            x =
              (null === v || void 0 === v ? void 0 : v.browseId) &&
              "/browse/".concat(v.browseId);
          (null === v || void 0 === v ? void 0 : v.videoId) &&
            (x = "/play?id=".concat(v.videoId));
          var y = Object(f.jsx)(
            "li",
            {
              children: Object(f.jsx)(Jn, {
                style: Object(b.a)(
                  {},
                  null === m || void 0 === m ? void 0 : m.styles
                ),
                children: Object(f.jsxs)(Wn.a, {
                  component: "div",
                  children: [
                    O &&
                      Object(f.jsx)("div", {
                        className: Qn.a["music-card__header-overlay"],
                        children: O,
                      }),
                    Object(f.jsxs)(T.b, {
                      to: x,
                      className: Qn.a["music-card"],
                      ref: t,
                      children: [
                        Object(f.jsxs)("div", {
                          className: Qn.a["music-card__header"],
                          children: [
                            Object(f.jsx)(rt, {
                              src: g,
                              alt:
                                (null === v ||
                                void 0 === v ||
                                null === (s = v.title) ||
                                void 0 === s
                                  ? void 0
                                  : s.length) > 0
                                  ? null === v ||
                                    void 0 === v ||
                                    null === (c = v.title) ||
                                    void 0 === c ||
                                    null === (u = c[0]) ||
                                    void 0 === u
                                    ? void 0
                                    : u.text
                                  : "Not found",
                              className: Qn.a["music-card__img"],
                              sources:
                                null === v || void 0 === v
                                  ? void 0
                                  : v.thumbnails,
                            }),
                            Object(f.jsx)("div", {
                              className:
                                Qn.a["music-card__header-button-wrapper"],
                              children: Object(f.jsx)(Et, {
                                "className": Qn.a["music-card__header-button"],
                                "aria-label": j ? "play song" : "open album",
                                "data-testid": "open-button",
                                "icon": {
                                  svg: j ? "play" : "new-window",
                                  alt: j ? "play song" : "open album",
                                },
                              }),
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          className: Qn.a["music-card__body"],
                          children: [
                            Object(f.jsx)("p", {
                              className: "link-small ".concat(
                                Qn.a["music-card__title"]
                              ),
                              children: h,
                            }),
                            Object(f.jsx)("span", {
                              className: "text-x-small ".concat(
                                Qn.a["music-card__subtitle"]
                              ),
                              children: p,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            ae(Math.random())
          );
          return (
            (null === v || void 0 === v || null === (d = v.menu) || void 0 === d
              ? void 0
              : d.length) > 0 &&
              (y = Object(f.jsx)(dn, {
                isContextMenu: !0,
                className: Qn.a["music-card__header-overlay-menu"],
                menuOptions: v.menu,
                serviceSuccessMsg: (
                  null === v || void 0 === v ? void 0 : v.browseId
                )
                  ? "Playlist will play next"
                  : "Song will play next",
                children: y,
              })),
            y
          );
        }),
        oa = n(208),
        la = n.n(oa);
      var ia,
        ra,
        sa = function (e) {
          return Object(f.jsx)("div", {
            className: "".concat(la.a.musicCardWrapper, " flex-center"),
            children: e.children,
          });
        },
        ca = ["title", "titleId"];
      function ua() {
        return (
          (ua =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          ua.apply(this, arguments)
        );
      }
      function da(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function va(e, t) {
        var n = e.title,
          a = e.titleId,
          o = da(e, ca);
        return c.createElement(
          "svg",
          ua(
            {
              "width": 80,
              "height": 80,
              "viewBox": "0 0 80 80",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          ia ||
            (ia = c.createElement(
              "g",
              {filter: "url(#filter0_d_505:893)"},
              c.createElement("path", {
                d: "M15 40C15 26.1929 26.1929 15 40 15C53.8071 15 65 26.1929 65 40C65 53.8071 53.8071 65 40 65C26.1929 65 15 53.8071 15 40Z",
                fill: "white",
              }),
              c.createElement("path", {
                d: "M41.5002 47.5L43.2627 45.7375L37.5377 40L43.2627 34.2625L41.5002 32.5L34.0002 40L41.5002 47.5Z",
                fill: "black",
              })
            )),
          ra ||
            (ra = c.createElement(
              "defs",
              null,
              c.createElement(
                "filter",
                {
                  id: "filter0_d_505:893",
                  x: 0,
                  y: 0,
                  width: 80,
                  height: 80,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                },
                c.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                c.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                c.createElement("feOffset", null),
                c.createElement("feGaussianBlur", {stdDeviation: 7.5}),
                c.createElement("feComposite", {
                  in2: "hardAlpha",
                  operator: "out",
                }),
                c.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                }),
                c.createElement("feBlend", {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_505:893",
                }),
                c.createElement("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_505:893",
                  result: "shape",
                })
              )
            ))
        );
      }
      var ma,
        ha,
        ba = c.forwardRef(va),
        pa = (n.p, ["title", "titleId"]);
      function fa() {
        return (
          (fa =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          fa.apply(this, arguments)
        );
      }
      function ga(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function ja(e, t) {
        var n = e.title,
          a = e.titleId,
          o = ga(e, pa);
        return c.createElement(
          "svg",
          fa(
            {
              "width": 80,
              "height": 80,
              "viewBox": "0 0 80 80",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          ma ||
            (ma = c.createElement(
              "g",
              {filter: "url(#filter0_d_420:1041)"},
              c.createElement("path", {
                d: "M65 40C65 53.8071 53.8071 65 40 65C26.1929 65 15 53.8071 15 40C15 26.1929 26.1929 15 40 15C53.8071 15 65 26.1929 65 40Z",
                fill: "white",
              }),
              c.createElement("path", {
                d: "M38.4998 33.5L36.7373 35.2625L42.4623 41L36.7373 46.7375L38.4998 48.5L45.9998 41L38.4998 33.5Z",
                fill: "black",
              })
            )),
          ha ||
            (ha = c.createElement(
              "defs",
              null,
              c.createElement(
                "filter",
                {
                  id: "filter0_d_420:1041",
                  x: 0,
                  y: 0,
                  width: 80,
                  height: 80,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                },
                c.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                c.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                c.createElement("feOffset", null),
                c.createElement("feGaussianBlur", {stdDeviation: 7.5}),
                c.createElement("feComposite", {
                  in2: "hardAlpha",
                  operator: "out",
                }),
                c.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                }),
                c.createElement("feBlend", {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_420:1041",
                }),
                c.createElement("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_420:1041",
                  result: "shape",
                })
              )
            ))
        );
      }
      var Oa = c.forwardRef(ja),
        xa = (n.p, n(154)),
        ya = n.n(xa),
        _a = function (e) {
          var t = e.type;
          return "right" === t
            ? Object(f.jsx)(Oa, {
                id: ya.a[t],
                alt: t + " Arrow",
                title: t + " Arrow",
              })
            : Object(f.jsx)(ba, {
                id: ya.a[t],
                alt: t + " Arrow",
                title: t + " Arrow",
              });
        },
        wa = n(86),
        Ca = n.n(wa);
      function ka(e) {
        var t = e.list,
          n = e.isRectangleBox,
          a = e.cardWidth,
          o = e.cardGap,
          l = e.cardColumns,
          i = e.cardRows,
          r = e.carousellMargin,
          u = e.listHeight,
          d = Object(c.useRef)(a),
          v = Object(c.useRef)(),
          m = Object(c.useState)(l),
          h = Object(s.a)(m, 2),
          b = h[0],
          p = h[1],
          g = Object(c.useState)(o),
          j = Object(s.a)(g, 2),
          O = j[0],
          x = j[1],
          y = Object(c.useCallback)(
            function (e, t) {
              var n, l, s, c;
              (a =
                null === d ||
                void 0 === d ||
                null === (n = d.current) ||
                void 0 === n
                  ? void 0
                  : n.offsetWidth),
                (u =
                  i *
                  (null === d ||
                  void 0 === d ||
                  null === (l = d.current) ||
                  void 0 === l
                    ? void 0
                    : l.offsetHeight));
              var m =
                  (null === v ||
                  void 0 === v ||
                  null === (s = v.current) ||
                  void 0 === s
                    ? void 0
                    : s.offsetWidth) - r,
                h = a + o,
                b = m / h,
                f = Math.floor(b),
                g = Math.round(b),
                j = (b - f).toString().includes(".")
                  ? null === (c = (b - f).toString().split(".")) || void 0 === c
                    ? void 0
                    : c[1].substr(0, 2)
                  : (b - f).toString().substr(0, 2),
                y = Math.round((g * O - j) / g);
              if (g * h > m) {
                x(15);
                for (var _ = g, w = g; w > 0; w--)
                  if (!(w * h > m)) {
                    _ = w;
                    break;
                  }
                return p(_);
              }
              x(y > 5 ? y : 10), p(g);
            },
            [d, v, u, O, o, a, r]
          ),
          _ = zn(y);
        return (
          Object(c.useEffect)(function () {
            y();
          }, []),
          Object(c.useEffect)(
            function () {
              return function () {
                _();
              };
            },
            [_]
          ),
          Object(f.jsx)("ul", {
            className: Ca.a["music-card-carousel-list"],
            ref: v,
            style: {height: u + "rem"},
            children: Object(f.jsx)(
              Vn.a,
              {
                containerStyle: {
                  width: "100%",
                  position: "absolute",
                  margin: "0 !important",
                },
                containerClassName: "remv-children-mg",
                cols: b,
                rows: i || 1,
                gap: O,
                mobileBreakpoint: 400,
                arrowRight: Object(f.jsx)(_a, {type: "right"}),
                arrowLeft: Object(f.jsx)(_a, {type: "left"}),
                children: t.map(function (e, t) {
                  return Object(f.jsx)(
                    Vn.a.Item,
                    {
                      containerStyle: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        rowGap: "1.5rem",
                      },
                      children: Object(f.jsx)(
                        sa,
                        {
                          children: n
                            ? Object(f.jsx)(
                                ta,
                                {ref: d, data: e},
                                ae(
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.playlistId) +
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.videoId) +
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.browseId) +
                                    Math.random()
                                )
                              )
                            : Object(f.jsx)(
                                aa,
                                {ref: d, data: e},
                                ae(
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.playlistId) +
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.videoId) +
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.browseId) +
                                    Math.random()
                                )
                              ),
                        },
                        ae(
                          (null === e || void 0 === e ? void 0 : e.playlistId) +
                            (null === e || void 0 === e ? void 0 : e.videoId) +
                            (null === e || void 0 === e ? void 0 : e.browseId) +
                            Math.random()
                        )
                      ),
                    },
                    ae(
                      t +
                        (null === e || void 0 === e ? void 0 : e.playlistId) +
                        (null === e || void 0 === e ? void 0 : e.videoId) +
                        (null === e || void 0 === e ? void 0 : e.browseId) +
                        Math.random()
                    )
                  );
                }),
              },
              ae(Math.random())
            ),
          })
        );
      }
      function Na(e, t) {
        var n, a;
        return (
          ((null === e || void 0 === e || null === (n = e.list) || void 0 === n
            ? void 0
            : n.length) &&
            (null === e || void 0 === e
              ? void 0
              : e.list.reduce(function (e, t) {
                  return (
                    e +
                    (((null === t || void 0 === t ? void 0 : t.videoId) || "") +
                      ((null === t || void 0 === t ? void 0 : t.browseId) ||
                        ""))
                  );
                }, ""))) ===
            ((null === t ||
            void 0 === t ||
            null === (a = t.list) ||
            void 0 === a
              ? void 0
              : a.length) &&
              (null === t || void 0 === t
                ? void 0
                : t.list.reduce(function (e, t) {
                    return (
                      e +
                      (((null === t || void 0 === t ? void 0 : t.videoId) ||
                        "") +
                        ((null === t || void 0 === t ? void 0 : t.browseId) ||
                          ""))
                    );
                  }, ""))) &&
          (null === e || void 0 === e ? void 0 : e.isRectangleBox) ===
            (null === t || void 0 === t ? void 0 : t.isRectangleBox) &&
          (null === e || void 0 === e ? void 0 : e.cardWidth) ===
            (null === t || void 0 === t ? void 0 : t.cardWidth) &&
          (null === e || void 0 === e ? void 0 : e.cardGap) ===
            (null === t || void 0 === t ? void 0 : t.cardGap) &&
          (null === e || void 0 === e ? void 0 : e.cardColumns) ===
            (null === t || void 0 === t ? void 0 : t.cardColumns) &&
          (null === e || void 0 === e ? void 0 : e.cardRows) ===
            (null === t || void 0 === t ? void 0 : t.cardRows) &&
          (null === e || void 0 === e ? void 0 : e.carousellMargin) ===
            (null === t || void 0 === t ? void 0 : t.carousellMargin) &&
          (null === e || void 0 === e ? void 0 : e.listHeight) ===
            (null === t || void 0 === t ? void 0 : t.listHeight)
        );
      }
      var Sa = Object(c.memo)(ka, Na),
        Ea = n(129);
      var Pa = function (e) {
        var t,
          n = e.list,
          a = e.isRectangleBox,
          o = (e.listHeight, []),
          l = Object(st.a)(n);
        try {
          for (l.s(); !(t = l.n()).done; ) {
            var i = t.value;
            o.push(
              Object(f.jsx)(
                "div",
                {
                  containerStyle: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "1.5rem",
                  },
                  children: a
                    ? Object(f.jsx)(
                        ta,
                        {data: i},
                        ae(
                          (null === i || void 0 === i ? void 0 : i.playlistId) +
                            (null === i || void 0 === i ? void 0 : i.videoId) +
                            (null === i || void 0 === i ? void 0 : i.browseId)
                        )
                      )
                    : Object(f.jsx)(
                        aa,
                        {data: i},
                        ae(
                          (null === i || void 0 === i ? void 0 : i.playlistId) +
                            (null === i || void 0 === i ? void 0 : i.videoId) +
                            (null === i || void 0 === i ? void 0 : i.browseId)
                        )
                      ),
                },
                ae(
                  (null === i || void 0 === i ? void 0 : i.playlistId) +
                    (null === i || void 0 === i ? void 0 : i.videoId) +
                    (null === i || void 0 === i ? void 0 : i.browseId)
                )
              )
            );
          }
        } catch (r) {
          l.e(r);
        } finally {
          l.f();
        }
        return Object(f.jsx)(Ea.Scrollbars, {
          className: a ? "slider-boxes" : "slider",
          children: Object(f.jsx)("ul", {
            className: "".concat(Ca.a.slider),
            children: o,
          }),
        });
      };
      var Ia = function (e) {
          var t = Object.assign({}, e);
          return Object(Hn.useMediaQuery)({
            query: "(max-width: ".concat(650, "px)"),
          })
            ? Object(f.jsx)(Pa, Object(b.a)({}, t))
            : Object(f.jsx)(Sa, Object(b.a)({}, t));
        },
        La = n(46),
        Ma = n.n(La),
        Aa = ["data", "index"];
      var Ta = function (e) {
          var t,
            n,
            a,
            o,
            l,
            i,
            r,
            s,
            c,
            u = e.data,
            d = e.index,
            v =
              (Object(w.a)(e, Aa),
              (null === u ||
              void 0 === u ||
              null === (t = u.title) ||
              void 0 === t
                ? void 0
                : t.length) > 0 && vt(u.title)),
            m =
              (null === u ||
              void 0 === u ||
              null === (n = u.subtitle) ||
              void 0 === n
                ? void 0
                : n.length) > 0 && ut(u.subtitle, "card-link"),
            h =
              (null === u ||
              void 0 === u ||
              null === (a = u.otherText) ||
              void 0 === a
                ? void 0
                : a.length) > 0 && ut(u.otherText, "card-link"),
            b =
              (null === u ||
              void 0 === u ||
              null === (o = u.fixedColumns) ||
              void 0 === o
                ? void 0
                : o.length) > 0 && ut(u.fixedColumns, "card-link"),
            p =
              (null === u ||
              void 0 === u ||
              null === (l = u.thumbnails) ||
              void 0 === l
                ? void 0
                : l.length) > 0 &&
              (null === (i = u.thumbnails) ||
              void 0 === i ||
              null === (r = i[0]) ||
              void 0 === r
                ? void 0
                : r.url),
            g = null === u || void 0 === u ? void 0 : u.videoId,
            j =
              (null === u || void 0 === u ? void 0 : u.browseId) &&
              "/browse/".concat(u.browseId);
          (null === u || void 0 === u ? void 0 : u.videoId) &&
            (j = "/play?id=".concat(u.videoId));
          var O =
              (null === u ||
              void 0 === u ||
              null === (s = u.menu) ||
              void 0 === s
                ? void 0
                : s.length) > 0 &&
              Object(f.jsx)(dn, {
                fullSpace: !0,
                menuOptions: null === u || void 0 === u ? void 0 : u.menu,
                serviceSuccessMsg: g
                  ? "Song will play next"
                  : "Playlist will play next",
              }),
            x = Object(f.jsxs)("li", {
              className: "relative "
                .concat(Ma.a["rowListSong-link"], " ")
                .concat(!j && Ma.a["rowListSong-link-disabled"]),
              children: [
                Object(f.jsx)(T.b, {
                  disabled: !j,
                  draggable: "false",
                  to: j || "#",
                  className: "full-hw absolute z-index-2 ",
                }),
                Object(f.jsxs)("div", {
                  className: Ma.a["rowListSong-thumbnail-container"],
                  children: [
                    j &&
                      p &&
                      Object(f.jsx)(rt, {
                        src: p,
                        className: Ma.a["rowListSong-thumbnail-img"],
                        alt: "Thumbnail",
                      }),
                    !p &&
                      j &&
                      d >= 0 &&
                      Object(f.jsx)("p", {
                        className: " text-medium",
                        children: d + 1,
                      }),
                    !j && Object(f.jsx)(z, {svg: "error", alt: "Error"}),
                    Object(f.jsx)(z, {
                      className: Ma.a["rowListSong-thumbnail-hover"],
                      svg: "play",
                      alt: "Play",
                    }),
                  ],
                }),
                Object(f.jsxs)("div", {
                  className: Ma.a["rowListSong-content"],
                  children: [
                    Object(f.jsx)("p", {
                      className: " link-medium ".concat(
                        Ma.a.rowListSong__title
                      ),
                      children: v,
                    }),
                    Object(f.jsxs)("p", {
                      className: Ma.a.rowListSong__subtitles_container,
                      children: [
                        m &&
                          Object(f.jsx)("span", {
                            className: "z-index-3 text-medium ".concat(
                              Ma.a.rowListSong__subtitle
                            ),
                            children: m,
                          }),
                        h &&
                          Object(f.jsx)("span", {
                            className: "z-index-3 text-medium ".concat(
                              Ma.a.rowListSong__otherText
                            ),
                            children: h,
                          }),
                      ],
                    }),
                  ],
                }),
                Object(f.jsxs)("div", {
                  className: " ".concat(Ma.a["rowListSong-fixed"]),
                  children: [
                    O &&
                      Object(f.jsx)("div", {
                        className: " ".concat(Ma.a["rowListSong-menu"]),
                        children: O,
                      }),
                    Object(f.jsx)("p", {
                      className: "text-medium ".concat(
                        Ma.a["rowListSong__fixed-text"]
                      ),
                      children: b,
                    }),
                  ],
                }),
              ],
            });
          return (
            (null === u || void 0 === u || null === (c = u.menu) || void 0 === c
              ? void 0
              : c.length) > 0 &&
              (x = Object(f.jsx)(dn, {
                isContextMenu: !0,
                menuOptions: u.menu,
                serviceSuccessMsg: g
                  ? "Song will play next"
                  : "Playlist will play next",
                children: x,
              })),
            x
          );
        },
        Ra = n(210),
        Ba = n.n(Ra);
      var Da = function (e) {
        var t,
          n = e.data,
          a = e.getUrl,
          o = Object(d.g)(),
          l =
            (null === n ||
            void 0 === n ||
            null === (t = n.didYouMean) ||
            void 0 === t
              ? void 0
              : t.length) > 0 &&
            Object(f.jsx)("p", {
              className: "text-medium",
              children: vt(n.didYouMean),
            }),
          i = null === n || void 0 === n ? void 0 : n.correctedQueryEndpoint;
        return Object(f.jsxs)("div", {
          className: "".concat(Ba.a.didYouMeanRenderer, "  mg-b-3 mg-t-2"),
          children: [
            l,
            (null === i || void 0 === i ? void 0 : i.query) &&
              Object(f.jsx)(Je, {
                className: "link-btn link-medium",
                onClick: function () {
                  return (
                    (null === i || void 0 === i ? void 0 : i.query) &&
                    o.replace(
                      a(i.query, null === i || void 0 === i ? void 0 : i.params)
                    )
                  );
                },
                children: i.query,
              }),
          ],
        });
      };
      var Fa = function (e) {
          var t,
            n,
            a = e.msg,
            o =
              (null === a ||
              void 0 === a ||
              null === (t = a.text) ||
              void 0 === t
                ? void 0
                : t.length) > 0 &&
              (function () {
                var e = vt(a.text);
                return Object(f.jsxs)(c.Fragment, {
                  children: [
                    e.toLowerCase().includes("no result") &&
                      Object(f.jsx)(z, {
                        className: "mg-b-2",
                        svg: "search",
                        style: {height: "9.6rem", width: "9.6rem"},
                      }),
                    Object(f.jsx)("p", {
                      className: "link-large mg-b-1",
                      children: e,
                    }),
                  ],
                });
              })(),
            l =
              (null === a ||
              void 0 === a ||
              null === (n = a.subtext) ||
              void 0 === n
                ? void 0
                : n.length) > 0 &&
              Object(f.jsx)("p", {children: vt(a.subtext)});
          return Object(f.jsxs)("div", {
            className: "mg-b-3 mg-t-2 centered",
            children: [o, l],
          });
        },
        Ha = n(211),
        Ua = n.n(Ha);
      var Va = function (e) {
          var t,
            n,
            a = e.data,
            o = e.getUrl,
            l = Object(d.g)(),
            i = function (e) {
              return l.replace(
                o(e.query, null === e || void 0 === e ? void 0 : e.params)
              );
            },
            r =
              (null === a ||
              void 0 === a ||
              null === (t = a.showingResultsFor) ||
              void 0 === t
                ? void 0
                : t.length) > 0 &&
              Object(f.jsx)("p", {
                className: "text-medium",
                children: vt(a.showingResultsFor),
              }),
            s =
              (null === a ||
              void 0 === a ||
              null === (n = a.searchInsteadFor) ||
              void 0 === n
                ? void 0
                : n.length) > 0 &&
              Object(f.jsx)("p", {
                className: "text-medium",
                children: vt(a.searchInsteadFor),
              }),
            c = null === a || void 0 === a ? void 0 : a.correctedQueryEndpoint,
            u = null === a || void 0 === a ? void 0 : a.originalQueryEndpoint;
          return Object(f.jsxs)("div", {
            className: "".concat(
              Ua.a.showingResultsForRenderer,
              " mg-b-3 mg-t-2"
            ),
            children: [
              r,
              (null === c || void 0 === c ? void 0 : c.query) &&
                Object(f.jsx)(Je, {
                  className: "link-btn link-medium",
                  onClick: i.bind(null, c),
                  children: c.query,
                }),
              s,
              (null === u || void 0 === u ? void 0 : u.query) &&
                Object(f.jsx)(Je, {
                  className: "link-btn link-medium",
                  onClick: i.bind(null, u),
                  children: u.query,
                }),
            ],
          });
        },
        za = n(212),
        Wa = n.n(za);
      var Ga = function (e) {
        var t,
          n = e.refetchLibrary,
          a = e.removeFromFavouritesHandler,
          o = e.rawData,
          l = e.list,
          i = (e.endpointType, e.className),
          r = e.getUrl,
          s = e.isRawSongs,
          c = e.isStaticList,
          u = e.changeSong,
          d = e.changeParam,
          v = e.selectedSong,
          m = e.isLibrary;
        return (
          (t = s
            ? l.map(function (e, t) {
                return Object(f.jsx)(
                  Ta,
                  {data: e, index: t},
                  ae(
                    (null === e || void 0 === e ? void 0 : e.browseId) +
                      (null === e || void 0 === e ? void 0 : e.playlistId) +
                      (null === e || void 0 === e ? void 0 : e.videoId) +
                      (null === e || void 0 === e ? void 0 : e.params) +
                      t
                  )
                );
              })
            : l.map(function (e, t) {
                return Object(f.jsxs)(
                  "div",
                  {
                    children: [
                      (null === e || void 0 === e
                        ? void 0
                        : e.didYouMeanRenderer) &&
                        Object(f.jsx)(
                          Da,
                          {data: e, getUrl: r},
                          ae(
                            (null === e || void 0 === e ? void 0 : e.browseId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.playlistId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.videoId) +
                              (null === e || void 0 === e ? void 0 : e.params) +
                              t
                          )
                        ),
                      (null === e || void 0 === e
                        ? void 0
                        : e.messageRenderer) &&
                        Object(f.jsx)(
                          Fa,
                          {msg: e},
                          ae(
                            (null === e || void 0 === e ? void 0 : e.browseId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.playlistId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.videoId) +
                              (null === e || void 0 === e ? void 0 : e.params) +
                              t
                          )
                        ),
                      (null === e || void 0 === e
                        ? void 0
                        : e.showingResultsForRenderer) &&
                        Object(f.jsx)(
                          Va,
                          {data: e, getUrl: r},
                          ae(
                            (null === e || void 0 === e ? void 0 : e.browseId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.playlistId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.videoId) +
                              (null === e || void 0 === e ? void 0 : e.params) +
                              t
                          )
                        ),
                      !(null === e || void 0 === e
                        ? void 0
                        : e.didYouMeanRenderer) &&
                        !(null === e || void 0 === e
                          ? void 0
                          : e.messageRenderer) &&
                        !(null === e || void 0 === e
                          ? void 0
                          : e.showingResultsForRenderer) &&
                        Object(f.jsx)(
                          jn,
                          {
                            refetchLibrary: n,
                            removeFromFavouritesHandler: a,
                            rawData: o,
                            isLibrary: m,
                            changeSong: u,
                            changeParam: d,
                            isStaticList: c,
                            selectedSong: v,
                            data: e,
                          },
                          ae(
                            (null === e || void 0 === e ? void 0 : e.browseId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.playlistId) +
                              (null === e || void 0 === e
                                ? void 0
                                : e.videoId) +
                              (null === e || void 0 === e ? void 0 : e.params) +
                              t
                          )
                        ),
                    ],
                  },
                  ae(
                    (null === e || void 0 === e ? void 0 : e.browseId) +
                      (null === e || void 0 === e ? void 0 : e.playlistId) +
                      (null === e || void 0 === e ? void 0 : e.videoId) +
                      (null === e || void 0 === e ? void 0 : e.params) +
                      t
                  )
                );
              })),
          Object(f.jsx)("ul", {
            className: [Wa.a["row-music-shelf-list"], i, "row-shelf-list"].join(
              " "
            ),
            children: t,
          })
        );
      };
      var Za = function (e) {
          var t,
            n = e.list,
            a = e.isRectangleBox,
            o = e.rectangleBoxClass,
            l = e.underLine,
            i = e.endpointType,
            r = e.className,
            s = [],
            c = Object(st.a)(n);
          try {
            for (c.s(); !(t = c.n()).done; ) {
              var u = t.value;
              s.push(
                Object(f.jsx)(
                  sa,
                  {
                    children: a
                      ? Object(f.jsx)(ta, {
                          underLine: l,
                          data: u,
                          type: i,
                          rectangleBoxClass: o,
                        })
                      : Object(f.jsx)(aa, {data: u}),
                  },
                  ae(
                    (null === u || void 0 === u ? void 0 : u.browseId) +
                      (null === u || void 0 === u ? void 0 : u.params)
                  )
                )
              );
            }
          } catch (d) {
            c.e(d);
          } finally {
            c.f();
          }
          return Object(f.jsx)("ul", {
            className: [Ca.a["music-card-list"], r].join(" "),
            children: s,
          });
        },
        qa = n(93),
        Ya = n.n(qa),
        Xa = [
          "title",
          "strapline",
          "isTitleComponent",
          "isRowMusicShelf",
          "rawData",
          "navigate",
          "list",
          "isRectangleBox",
          "rectangleBoxClass",
          "underLine",
          "disableCarousel",
          "hasMoreItems",
          "listClasssName",
          "getUrl",
          "titleClasses",
          "isLibrary",
          "removeFromFavouritesHandler",
          "refetchLibrary",
          "libraryPlay",
        ],
        Qa = {
          cardWidth: 400,
          cardGap: 10,
          cardColumns: 5,
          cardRows: 3,
          listHeight: 42.5,
          carousellMargin: 0,
        },
        Ja = {
          cardWidth: 210,
          cardGap: 15,
          cardColumns: 5,
          listHeight: 32,
          cardRows: 1,
          carousellMargin: 40,
        };
      var Ka = function (e) {
        var t,
          n = e.title,
          a = e.strapline,
          o = e.isTitleComponent,
          l = e.isRowMusicShelf,
          i = e.rawData,
          r = e.navigate,
          s = e.list,
          c = e.isRectangleBox,
          u = e.rectangleBoxClass,
          d = e.underLine,
          v = e.disableCarousel,
          m = e.hasMoreItems,
          h = e.listClasssName,
          p = e.getUrl,
          g = e.titleClasses,
          j = e.isLibrary,
          O = e.removeFromFavouritesHandler,
          x = e.refetchLibrary,
          y = e.libraryPlay,
          _ = Object(w.a)(e, Xa),
          C = "mg-t-2",
          k = Ya.a["music-shelf-mg"],
          N = Ja;
        !o &&
          n &&
          (null === n ||
          void 0 === n ||
          null === (t = n.toLowerCase()) ||
          void 0 === t
            ? void 0
            : t.includes("artist")) &&
          (N = Qa);
        var S = Object(f.jsx)(
          Ia,
          Object(b.a)(Object(b.a)({list: s, isRectangleBox: c}, N), _),
          ae(Math.random())
        );
        return (
          v &&
            (S = Object(f.jsx)(
              Za,
              Object(b.a)(
                {
                  className: h,
                  underLine: d,
                  list: s,
                  isRectangleBox: c,
                  rectangleBoxClass: u && u,
                },
                _
              ),
              ae(Math.random())
            )),
          l &&
            ((C = ""),
            (k = ""),
            (S = Object(f.jsx)(
              Ga,
              Object(b.a)(
                {
                  refetchLibrary: x,
                  isLibrary: j,
                  removeFromFavouritesHandler: O,
                  rawData: i,
                  getUrl: p,
                  list: s,
                },
                _
              ),
              ae(Math.random())
            ))),
          Object(f.jsxs)("div", {
            className: "".concat(Ya.a["music-shelf"], " ").concat(k),
            children: [
              Object(f.jsxs)("div", {
                className: Ya.a["music-shelf-header"],
                children: [
                  !o &&
                    n &&
                    Object(f.jsx)("p", {
                      className: "".concat(
                        Ya.a["music-shelf-title"],
                        " display-medium capitalize"
                      ),
                      children: n,
                    }),
                  o &&
                    Object(f.jsx)("span", {
                      className:
                        "w-100 flex-space-between white display-medium capitalize ".concat(
                          g
                        ),
                      children: n,
                    }),
                  m &&
                    Object(f.jsx)(Je, {
                      link: r,
                      tertiary: !0,
                      standardAnimate: !0,
                      type: "button",
                      className: "music-shelf-button link-x-small",
                      children: "see all",
                    }),
                  y && y,
                ],
              }),
              a &&
                Object(f.jsx)("p", {
                  className: "gray link-small mg-b-1 strapline",
                  children: a,
                }),
              Object(f.jsx)("div", {
                className: ""
                  .concat(Ya.a["music-shelf-body"], " music-shelf-body ")
                  .concat(C),
                children: S,
              }),
            ],
          })
        );
      };
      var $a = function (e) {
          var t = e.token,
            n = e.logout,
            a = Object(Y.useQuery)(
              ["home", "new_releases"],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/home/browse/new_releases",
                    method: "GET",
                    headers: {authorization: "Bearer " + t},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"},
                  function () {
                    return n();
                  }
                );
              },
              {staleTime: 18e4, keepPreviousData: !0}
            ),
            o = a.data,
            l = a.error,
            i = a.isError,
            r = a.isSuccess,
            s = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)("div", {
                  className: "fixed-right",
                  children: Object(f.jsx)(be, {thin: !0}),
                }),
                Object(f.jsx)(Bn.a, {className: "skeleton-title skeleton-bg"}),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
              ],
            });
          return (
            i &&
              l &&
              (ne(l) && n(),
              (s = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              }))),
            r &&
              (s =
                o && (null === o || void 0 === o ? void 0 : o.list)
                  ? Object(f.jsx)(Ka, {
                      disableCarousel: !0,
                      listClasssName: "non-carousel-grid-shelf",
                      hasMoreItems: !1,
                      list: null === o || void 0 === o ? void 0 : o.list,
                      title: (
                        null === o || void 0 === o
                          ? void 0
                          : o.title.includes("_")
                      )
                        ? null === o || void 0 === o
                          ? void 0
                          : o.title.split("_").join(" ")
                        : null === o || void 0 === o
                        ? void 0
                        : o.title,
                    })
                  : Object(f.jsx)("p", {
                      className: "centered capitalize text-medium",
                      children: "No data found.",
                    })),
            s
          );
        },
        eo = {counter: 0};
      var to = function (e) {
          var t = e.rootElementRef,
            n = e.token,
            a = e.logout,
            o = Object(d.j)();
          Object(c.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.current) &&
                t.current.scrollIntoView({behavior: "smooth", block: "start"});
            },
            [t]
          );
          var l = Object(Y.useQuery)(
              ["home", "charts"],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/home/browse/all",
                    method: "GET",
                    headers: {authorization: "Bearer " + n},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"}
                );
              },
              {
                staleTime: 18e4,
                keepPreviousData: !0,
                select: function (e) {
                  var t;
                  if (
                    (null === e ||
                    void 0 === e ||
                    null === (t = e.home) ||
                    void 0 === t
                      ? void 0
                      : t.length) <= 0
                  )
                    throw new Error("No data found.");
                  var n,
                    a = Object(st.a)(e.home);
                  try {
                    var l = function () {
                      var e = n.value,
                        t = (
                          null === e || void 0 === e
                            ? void 0
                            : e.hasAdditionalLists
                        )
                          ? null === e || void 0 === e
                            ? void 0
                            : e.list
                          : [e];
                      "string" ===
                        typeof (null === e || void 0 === e
                          ? void 0
                          : e.title) && e.title.toLowerCase().includes("genre")
                        ? t.forEach(function (e) {
                            (e.disableCarousel = !0),
                              (e.underLine = !0),
                              (e.hasMoreItems = !1);
                          })
                        : t.forEach(function (t, n) {
                            var a, l, i, r;
                            (0 === eo.counter &&
                              (t.hasMoreItems = t.list.length > 10),
                            null === t ||
                            void 0 === t ||
                            null === (a = t.title) ||
                            void 0 === a ||
                            null === (l = a.text) ||
                            void 0 === l ||
                            null === (i = l.toLowerCase()) ||
                            void 0 === i
                              ? void 0
                              : i.includes("artist"))
                              ? (t.hasMoreItems = !1)
                              : (!(null === t ||
                                void 0 === t ||
                                null === (r = t.title) ||
                                void 0 === r
                                  ? void 0
                                  : r.navigate) &&
                                  "string" ===
                                    typeof (null === e || void 0 === e
                                      ? void 0
                                      : e.title) &&
                                  e.title.toLowerCase().includes("release") &&
                                  (t.title = {
                                    text:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.title,
                                    navigate: "".concat(
                                      o.path,
                                      "/new_releases"
                                    ),
                                  }),
                                t.list.splice(10));
                          });
                    };
                    for (a.s(); !(n = a.n()).done; ) l();
                  } catch (i) {
                    a.e(i);
                  } finally {
                    a.f();
                  }
                  return eo.counter++, e;
                },
              }
            ),
            i = l.data,
            r = l.error,
            s = l.isError,
            u = l.isSuccess,
            v = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)("div", {
                  className: "fixed-right",
                  children: Object(f.jsx)(be, {thin: !0}),
                }),
                Object(f.jsx)(Bn.a, {className: "skeleton-title skeleton-bg"}),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
                Object(f.jsx)(Bn.a, {
                  className: "skeleton-title skeleton-bg mg-t-4",
                }),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
                Object(f.jsx)(Bn.a, {
                  className: "skeleton-title skeleton-bg mg-t-4",
                }),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
              ],
            });
          if (
            (s &&
              r &&
              (ne(r) && a(),
              (v = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              }))),
            u)
          )
            if (i) {
              v = [];
              var m,
                h = Object(st.a)(i.home);
              try {
                for (h.s(); !(m = h.n()).done; ) {
                  var b = m.value,
                    p = (
                      null === b || void 0 === b ? void 0 : b.hasAdditionalLists
                    )
                      ? null === b || void 0 === b
                        ? void 0
                        : b.list
                      : [b],
                    g = null === b || void 0 === b ? void 0 : b.title,
                    j = "/browse";
                  "string" === typeof g &&
                    g.toLowerCase().includes("genre") &&
                    (j = "/genres");
                  var O,
                    x = 0,
                    y = Object(st.a)(p);
                  try {
                    for (y.s(); !(O = y.n()).done; ) {
                      var _,
                        w,
                        C = O.value,
                        k = null === C || void 0 === C ? void 0 : C.title,
                        N = k;
                      (null === k || void 0 === k ? void 0 : k.text) &&
                        (N = null === k || void 0 === k ? void 0 : k.text),
                        "string" !== typeof k &&
                          (null === k || void 0 === k ? void 0 : k.length) >
                            0 &&
                          (N = dt(k));
                      var S = ""
                        .concat(j, "/")
                        .concat(
                          null === k ||
                            void 0 === k ||
                            null === (_ = k.navigate) ||
                            void 0 === _
                            ? void 0
                            : _.browseId
                        );
                      "string" ===
                        typeof (null === k || void 0 === k
                          ? void 0
                          : k.navigate) &&
                        (S = null === k || void 0 === k ? void 0 : k.navigate);
                      var E =
                        (null === C || void 0 === C ? void 0 : C.strapline) &&
                        vt(C.strapline);
                      v.push(
                        Object(f.jsx)(
                          Ka,
                          {
                            endpointType: j,
                            isRectangleBox:
                              null === C || void 0 === C
                                ? void 0
                                : C.isRectangleBox,
                            rectangleBoxClass:
                              (null === C || void 0 === C
                                ? void 0
                                : C.isRectangleBox) && "genre-box-p",
                            disableCarousel:
                              null === C || void 0 === C
                                ? void 0
                                : C.disableCarousel,
                            underLine:
                              null === C || void 0 === C ? void 0 : C.underLine,
                            hasMoreItems:
                              null === C || void 0 === C
                                ? void 0
                                : C.hasMoreItems,
                            list: null === C || void 0 === C ? void 0 : C.list,
                            title: N.includes("_") ? N.split("_").join(" ") : N,
                            strapline: E,
                            navigate: S,
                          },
                          ae(
                            (null === k || void 0 === k ? void 0 : k.text) +
                              x +
                              (null === k ||
                              void 0 === k ||
                              null === (w = k.navigate) ||
                              void 0 === w
                                ? void 0
                                : w.browseId)
                          )
                        )
                      ),
                        x++;
                    }
                  } catch (P) {
                    y.e(P);
                  } finally {
                    y.f();
                  }
                }
              } catch (P) {
                h.e(P);
              } finally {
                h.f();
              }
            } else
              v = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              });
          return Object(f.jsxs)(c.Fragment, {
            children: [
              Object(f.jsx)(d.b, {path: o.path, exact: !0, children: v}),
              Object(f.jsx)(d.b, {
                path: "".concat(o.path, "/new_releases"),
                children: Object(f.jsx)($a, {logout: a, token: n}),
              }),
            ],
          });
        },
        no = new Y.QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: !1,
              refetchOnmount: !1,
              refetchOnReconnect: !1,
              retry: !1,
            },
          },
        }),
        ao = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 5,
            n = no.getQueryCache().findAll(e);
          if (n.length > t) {
            var a = n[0];
            no.removeQueries(a.queryKey, {exact: !0});
          }
        },
        oo = no;
      var lo = function (e) {
        var t = e.token,
          n = e.logout,
          a = Object(d.i)(),
          o = a.browseId,
          l = a.params,
          i = Object(Y.useQuery)(
            ["genres", o, l],
            function () {
              return te(
                {
                  url: "https://soundrex.onrender.com/api/v1/genre/browse?id="
                    .concat(o, "&params=")
                    .concat(l),
                  method: "GET",
                  headers: {authorization: "Bearer " + t},
                },
                !1,
                !1,
                !0,
                "Opps! something went wrong.",
                {autoClose: 1e3, theme: "dark"}
              );
            },
            {
              staleTime: 3e5,
              keepPreviousData: !0,
              select: function (e) {
                return ao("genres", 3), e;
              },
            }
          ),
          r = i.data,
          s = i.error,
          u = i.isError,
          v = i.isSuccess,
          m = Object(f.jsxs)(c.Fragment, {
            children: [
              Object(f.jsx)("div", {
                className: "fixed-top flex-center",
                children: Object(f.jsx)(Fn, {}),
              }),
              Object(f.jsx)("div", {
                className: "fixed-right",
                children: Object(f.jsx)(be, {thin: !0}),
              }),
              Object(f.jsx)(Bn.a, {className: "skeleton-title skeleton-bg"}),
              Object(f.jsxs)("div", {
                className: "skeleton-grid-list",
                children: [
                  Object(f.jsx)(Bn.a, {
                    className: "skeleton-grid-item skeleton-bg",
                  }),
                  Object(f.jsx)(Bn.a, {
                    animation: "wave",
                    className: "skeleton-grid-item skeleton-bg",
                  }),
                ],
              }),
              Object(f.jsx)(Bn.a, {
                className: "skeleton-title skeleton-bg mg-t-5",
              }),
              Object(f.jsxs)("div", {
                className: "skeleton-grid-list",
                children: [
                  Object(f.jsx)(Bn.a, {
                    className: "skeleton-grid-item skeleton-bg",
                  }),
                  Object(f.jsx)(Bn.a, {
                    animation: "wave",
                    className: "skeleton-grid-item skeleton-bg",
                  }),
                  Object(f.jsx)(Bn.a, {
                    animation: !1,
                    className: "skeleton-grid-item skeleton-bg",
                  }),
                ],
              }),
            ],
          });
        if (
          (u &&
            s &&
            (ne(s) && n(),
            (m = Object(f.jsx)("p", {
              className: "centered capitalize text-medium",
              children: "No data found.",
            }))),
          v)
        )
          if (null === r || void 0 === r ? void 0 : r.contents) {
            var h, b;
            m = [];
            var p = null === r || void 0 === r ? void 0 : r.header;
            "string" ===
              typeof (null === p || void 0 === p ? void 0 : p.title) &&
              m.push(
                Object(f.jsx)(
                  "h1",
                  {className: "display-large--bold", children: p.title},
                  ae(Math.random())
                )
              ),
              "string" ===
                typeof (null === p ||
                void 0 === p ||
                null === (h = p.title) ||
                void 0 === h
                  ? void 0
                  : h.text) &&
                m.push(
                  Object(f.jsx)(
                    "h1",
                    {className: "display-large--bold", children: p.title.text},
                    ae(Math.random())
                  )
                ),
              (null === p ||
              void 0 === p ||
              null === (b = p.title) ||
              void 0 === b
                ? void 0
                : b.length) > 0 &&
                m.push(
                  Object(f.jsx)(
                    "h1",
                    {className: "display-large--bold", children: dt(p.title)},
                    ae(Math.random())
                  )
                );
            var g,
              j = Object(st.a)(r.contents);
            try {
              for (j.s(); !(g = j.n()).done; ) {
                var O = g.value,
                  x = null === O || void 0 === O ? void 0 : O.title,
                  y = 0,
                  _ = void 0;
                x && (_ = ut(x, "card-link", null, !0, !0, !0)),
                  m.push(
                    Object(f.jsx)(
                      Ka,
                      {
                        listClasssName:
                          !(null === O || void 0 === O
                            ? void 0
                            : O.carouselRenderer) && "non-carousel-grid-shelf",
                        endpointType: "/browse",
                        isRectangleBox: !1,
                        disableCarousel: !(null === O || void 0 === O
                          ? void 0
                          : O.carouselRenderer),
                        list: null === O || void 0 === O ? void 0 : O.list,
                        title: _,
                        isTitleComponent: !0,
                      },
                      ae(y)
                    )
                  ),
                  y++;
              }
            } catch (w) {
              j.e(w);
            } finally {
              j.f();
            }
          } else
            m = Object(f.jsx)("p", {
              className: "centered capitalize text-medium",
              children: "No data found.",
            });
        return m;
      };
      var io = function (e) {
          var t = e.rootElementRef,
            n = e.token,
            a = e.logout,
            o = Object(d.j)();
          Object(c.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.current) &&
                t.current.scrollIntoView({behavior: "smooth", block: "start"});
            },
            [t]
          );
          var l = Object(Y.useQuery)(
              ["home", "genres"],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/home/browse/genres",
                    method: "GET",
                    headers: {authorization: "Bearer " + n},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"},
                  function () {
                    return a();
                  }
                );
              },
              {staleTime: 18e4, keepPreviousData: !0}
            ),
            i = l.data,
            r = l.error,
            s = l.isError,
            u = l.isSuccess,
            v = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)("div", {
                  className: "fixed-right",
                  children: Object(f.jsx)(be, {thin: !0}),
                }),
                Object(f.jsx)(Bn.a, {className: "skeleton-title skeleton-bg"}),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
              ],
            });
          if (
            (s &&
              r &&
              (ne(r) && a(),
              (v = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              }))),
            u)
          )
            if (null === i || void 0 === i ? void 0 : i.list) {
              v = [];
              var m,
                h = Object(st.a)(null === i || void 0 === i ? void 0 : i.list);
              try {
                for (h.s(); !(m = h.n()).done; ) {
                  var b,
                    p,
                    g,
                    j = m.value,
                    O = null === j || void 0 === j ? void 0 : j.title,
                    x = 0,
                    y = O;
                  (null === O || void 0 === O ? void 0 : O.text) &&
                    (y = null === O || void 0 === O ? void 0 : O.text),
                    "string" !== typeof O &&
                      (null === O || void 0 === O ? void 0 : O.length) > 0 &&
                      (y = dt(O)),
                    v.push(
                      Object(f.jsx)(
                        Ka,
                        {
                          endpointType: "/genres",
                          isRectangleBox: !0,
                          rectangleBoxClass: "genre-box-p",
                          disableCarousel: !0,
                          underLine: !0,
                          list: null === j || void 0 === j ? void 0 : j.list,
                          title: y.includes("_") ? y.split("_").join(" ") : y,
                        },
                        ae(
                          (null === j ||
                          void 0 === j ||
                          null === (b = j.title) ||
                          void 0 === b
                            ? void 0
                            : b.text) +
                            x +
                            (null === j ||
                            void 0 === j ||
                            null === (p = j.title) ||
                            void 0 === p ||
                            null === (g = p.navigate) ||
                            void 0 === g
                              ? void 0
                              : g.browseId)
                        )
                      )
                    ),
                    x++;
                }
              } catch (_) {
                h.e(_);
              } finally {
                h.f();
              }
            } else
              v = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              });
          return Object(f.jsxs)(c.Fragment, {
            children: [
              Object(f.jsx)(d.b, {path: o.path, exact: !0, children: v}),
              Object(f.jsx)(d.b, {
                path: "".concat(o.path, "/:browseId/:params"),
                exact: !0,
                children: Object(f.jsx)(lo, {logout: a, token: n}),
              }),
            ],
          });
        },
        ro = n(213),
        so = n.n(ro),
        co = n(106),
        uo = n.n(co);
      var vo = function (e) {
          var t = e.navItems,
            n = Object(d.g)();
          return Object(f.jsx)("ul", {
            className: uo.a["search-navigation-list"],
            children: t.map(function (e, t) {
              var a = [uo.a["search-navigation-link"], "text-small"].join(" ");
              return (
                (null === e || void 0 === e ? void 0 : e.selected) &&
                  (a = [
                    a,
                    uo.a["search-navigation-link-active"],
                    "link-small",
                  ].join(" ")),
                Object(f.jsx)(
                  "li",
                  {
                    className: uo.a["search-navigation-item"],
                    children: Object(f.jsx)(Je, {
                      onClick: function (t) {
                        return n.replace(e.navigate);
                      },
                      className: a,
                      children: e.text,
                    }),
                  },
                  ae(t + e.text)
                )
              );
            }),
          });
        },
        mo = [
          {text: "Songs"},
          {text: "Albums"},
          {text: "Playlists"},
          {text: "Artists"},
        ],
        ho = function (e, t, n) {
          var a = "https://soundrex.onrender.com/api/v1/search?query=".concat(
            e
          );
          return (
            t && (a += "&params=".concat(t.toUpperCase())),
            n && (a += "&rawParams=".concat(n)),
            a
          );
        },
        bo = function (e) {
          var t = e.ctoken,
            n = e.continuation,
            a = e.itct;
          return "https://soundrex.onrender.com/api/v1/search_next?ctoken="
            .concat(t, "&continuation=")
            .concat(n, "&type=next&itct=")
            .concat(a);
        },
        po = function (e, t, n, a) {
          return te(
            {
              url: ho(e, t, n),
              method: "GET",
              headers: {authorization: "Bearer " + a},
            },
            !1,
            !1,
            !0,
            "Opps! something went wrong.",
            {autoClose: 1e3, theme: "dark"}
          );
        };
      var fo = function (e) {
          var t = e.rootElementRef,
            n = e.token,
            a = e.logout,
            o = Object(d.h)(),
            l = new URLSearchParams(o.search).get("params"),
            u = Object(d.i)(),
            v = u.searchQuery,
            m = u.searchTerm;
          (m = m || "songs"),
            (v = decodeURIComponent(v.trim())),
            mo.forEach(function (e) {
              (e.selected = !1),
                e.text.toLowerCase() === m.toLowerCase() && (e.selected = !0),
                (e.navigate = "/search/"
                  .concat(v, "/")
                  .concat(e.text.toLowerCase()));
            });
          var h = function (e, t) {
            var n = "/search/".concat(e, "/").concat(m);
            return t && (n += "?params=".concat(t)), n;
          };
          Object(c.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.current) &&
                t.current.scrollIntoView({behavior: "smooth", block: "start"});
            },
            [t]
          );
          var p,
            g = Object(Y.useQuery)(
              ["search", v, m, l],
              po.bind(null, v, m, l, n),
              {
                staleTime: 3e5,
                select: function (e) {
                  return ao("search"), e;
                },
              }
            ),
            j = g.data,
            O = g.error,
            x = g.isError,
            y = g.isSuccess,
            _ = g.isFetching,
            w = g.isLoading,
            C = Object(Y.useMutation)(
              function (e) {
                return (function (e, t) {
                  return te(
                    {
                      url: bo(e),
                      method: "GET",
                      headers: {authorization: "Bearer " + t},
                    },
                    !1,
                    !1,
                    !1,
                    null,
                    null
                  );
                })(e, n);
              },
              {
                onSuccess: function (e) {
                  oo.setQueryData(["search", v, m, l], function (t) {
                    if (
                      (null === t || void 0 === t ? void 0 : t.list) &&
                      (null === e || void 0 === e ? void 0 : e.list)
                    ) {
                      var n,
                        a = t.list.length - 1,
                        o =
                          null === (n = t.list[a]) || void 0 === n
                            ? void 0
                            : n.list;
                      if (o)
                        for (
                          var l = function (t) {
                              var n = o[t],
                                a = (
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.videoId
                                )
                                  ? "videoId"
                                  : (
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.browseId
                                    )
                                  ? "browseId"
                                  : null;
                              if (a) {
                                e.list = e.list.filter(function (t, n) {
                                  return (
                                    n ===
                                    e.list.findIndex(function (e) {
                                      return e[a] === t[a];
                                    })
                                  );
                                });
                                for (var l = 0; l < e.list.length; l++) {
                                  var i = e.list[l];
                                  n[a] === i[a] && e.list.splice(l, 1);
                                }
                              }
                            },
                            i = 0;
                          i < o.length;
                          i++
                        )
                          l(i);
                      return t.list.push(e), Object(b.a)({}, t);
                    }
                  });
                },
                onError: function (e) {
                  ne(O) && a(), console.log(e);
                },
              }
            ),
            k = (function () {
              var e = Object(r.a)(
                i.a.mark(function e() {
                  var t, n, a, o;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !(
                              (null === j || void 0 === j ? void 0 : j.list) &&
                              (null === j ||
                              void 0 === j ||
                              null === (t = j.list) ||
                              void 0 === t
                                ? void 0
                                : t.length) < 50
                            ) ||
                            E
                          ) {
                            e.next = 8;
                            break;
                          }
                          if (
                            ((a = j.list.length - 1),
                            !(o =
                              null === (n = j.list[a]) || void 0 === n
                                ? void 0
                                : n.next))
                          ) {
                            e.next = 8;
                            break;
                          }
                          return P(!0), (e.next = 7), C.mutateAsync(o);
                        case 7:
                          P(!1);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            N = Object(c.useState)(!1),
            S = Object(s.a)(N, 2),
            E = S[0],
            P = S[1];
          if (
            ((_ || w) &&
              (p = Object(f.jsxs)(
                "div",
                {
                  children: [
                    Object(f.jsx)("div", {
                      className: "fixed-top flex-center",
                      children: Object(f.jsx)(Fn, {}),
                    }),
                    Object(f.jsx)("div", {
                      className: "fixed-right",
                      children: Object(f.jsx)(be, {thin: !0}),
                    }),
                    Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                      ],
                    }),
                  ],
                },
                ae(Math.random())
              )),
            x &&
              O &&
              (ne(O) && a(),
              (p = Object(f.jsx)(
                "p",
                {
                  className: "centered capitalize text-medium",
                  children: "No results found.",
                },
                ae(Math.random())
              ))),
            y && (null === j || void 0 === j ? void 0 : j.list))
          ) {
            var I = 0;
            p = [];
            var L,
              M = Object(st.a)(null === j || void 0 === j ? void 0 : j.list);
            try {
              for (M.s(); !(L = M.n()).done; ) {
                var A,
                  T = L.value,
                  R = null === T || void 0 === T ? void 0 : T.title,
                  B = R;
                (null === R || void 0 === R ? void 0 : R.text) &&
                  (B = null === R || void 0 === R ? void 0 : R.text),
                  "string" !== typeof R &&
                    (null === R || void 0 === R ? void 0 : R.length) > 0 &&
                    (B = dt(R)),
                  p.push(
                    Object(f.jsx)(
                      Ka,
                      {
                        getUrl: h,
                        isRowMusicShelf:
                          null === T || void 0 === T ? void 0 : T.list,
                        disableCarousel: !0,
                        list: null === T || void 0 === T ? void 0 : T.list,
                        title:
                          B && B.includes("_") ? B.split("_").join(" ") : B,
                      },
                      ae(
                        (null === R || void 0 === R ? void 0 : R.text) +
                          I +
                          (null === R ||
                          void 0 === R ||
                          null === (A = R.navigate) ||
                          void 0 === A
                            ? void 0
                            : A.browseId)
                      )
                    )
                  ),
                  I++;
              }
            } catch (D) {
              M.e(D);
            } finally {
              M.f();
            }
          }
          return Object(f.jsxs)(c.Fragment, {
            children: [
              Object(f.jsx)(vo, {navItems: mo}),
              Object(f.jsx)("div", {
                className: "mg-t-2",
                id: "search-content",
                children: Object(f.jsx)(so.a, {
                  pageStart: 0,
                  threshold: 100,
                  loadMore: k,
                  hasMore: !0,
                  loader: Object(f.jsx)("span", {}),
                  children: p,
                }),
              }),
              E &&
                Object(f.jsx)("div", {
                  className: "w-100 flex-center mg-t-3",
                  children: Object(f.jsx)(be, {}),
                }),
            ],
          });
        },
        go = n(214),
        jo = n.n(go),
        Oo = ["onClick", "isShowingMoreContent", "className"];
      var xo,
        yo = function (e) {
          var t = e.onClick,
            n = e.isShowingMoreContent,
            a = e.className;
          return (
            Object(w.a)(e, Oo),
            Object(f.jsx)(Je, {
              onClick: t,
              className: [jo.a["show-more"], a].join(" "),
              children: n ? "less" : "more",
            })
          );
        },
        _o = ["title", "titleId"];
      function wo() {
        return (
          (wo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          wo.apply(this, arguments)
        );
      }
      function Co(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function ko(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Co(e, _o);
        return c.createElement(
          "svg",
          wo(
            {
              "width": 24,
              "height": 23,
              "viewBox": "0 0 24 23",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          xo ||
            (xo = c.createElement("path", {
              d: "M11.5898 22.0931C11.8465 22.2595 12.2788 22.4585 12.2788 22.4585L13.4847 21.7277L16.0686 19.3526C16.0686 19.3526 17.3719 18.1239 18.1357 17.3429C18.8995 16.5619 19.455 15.9497 20.2029 14.9678C20.7778 14.2129 21.0739 13.7659 21.5809 12.9581L22.4423 11.4965C22.7786 10.9257 22.9077 10.2875 23.1313 9.48674C23.1313 9.48674 23.4187 8.61036 23.4758 8.02513C23.5174 7.5993 23.4972 7.35641 23.4758 6.92892C23.4471 6.35449 23.4299 6.02673 23.3036 5.46731C23.2045 5.02846 23.121 4.78836 22.959 4.3711C22.7872 3.92852 22.6991 3.66841 22.4423 3.27489C22.1173 2.77712 21.8703 2.53477 21.4087 2.17868C20.9221 1.80333 20.5958 1.66661 20.0306 1.44787C19.5095 1.24621 18.6525 1.08247 18.6525 1.08247C18.6525 1.08247 18.0218 1.05563 17.6189 1.08247C16.8683 1.13249 16.4337 1.18364 15.7241 1.44787C15.1563 1.65926 14.346 2.17868 14.346 2.17868C14.346 2.17868 13.5359 2.64442 13.1401 3.09219C12.8084 3.46754 12.4511 4.1884 12.4511 4.1884C12.4511 4.1884 12.1536 3.72812 11.9343 3.45759C11.6862 3.15152 11.2453 2.72678 11.2453 2.72678L10.5562 2.17868L9.52265 1.63058C9.52265 1.63058 8.81564 1.20647 8.31682 1.08247C7.66185 0.919659 7.2658 1.04106 6.59421 1.08247C5.98606 1.11997 5.63087 1.09248 5.04386 1.26517C4.55017 1.41041 3.83803 1.81328 3.83803 1.81328L2.80446 2.54408C2.80446 2.54408 2.22841 3.17232 1.94316 3.64029C1.36997 4.58064 1.20857 5.24362 1.069 6.35354C0.969846 7.14207 0.980559 7.60231 1.08186 8.39053C1.18694 9.20815 1.33105 9.6578 1.61149 10.4275C1.87855 11.1605 2.09515 11.5433 2.45994 12.2273C2.77241 12.8131 2.95779 13.1371 3.32125 13.6889C3.97732 14.6849 4.41959 15.1907 5.21612 16.064C5.41457 16.2816 5.53109 16.398 5.73291 16.6121L7.28326 18.2564C7.48507 18.4705 7.58552 18.6048 7.80004 18.8045C8.05286 19.0398 8.48909 19.3526 8.48909 19.3526C8.48909 19.3526 8.69666 19.5779 8.83361 19.718C9.28 20.1747 9.56055 20.3962 10.0394 20.8142C10.372 21.1045 10.5597 21.2659 10.9007 21.545C11.167 21.763 11.3028 21.9071 11.5898 22.0931Z",
              strokeWidth: 0.75,
            }))
        );
      }
      var No = c.forwardRef(ko),
        So = (n.p, n(107)),
        Eo = n.n(So),
        Po = ["className", "icon", "liked"];
      var Io = function (e) {
          var t = e.className,
            n = (e.icon, e.liked),
            a = Object(w.a)(e, Po);
          return Object(f.jsx)(c.Fragment, {
            children: Object(f.jsxs)(
              Je,
              Object(b.a)(
                Object(b.a)(
                  {
                    disabled: "loading" === n,
                    className: ""
                      .concat(Eo.a["like-button"], " ")
                      .concat(t || ""),
                  },
                  a
                ),
                {},
                {
                  children: [
                    "loading" === n
                      ? Object(f.jsx)(be, {
                          className: Eo.a["like-button-spinner"],
                        })
                      : Object(f.jsx)(No, {
                          className: ""
                            .concat(Eo.a["like-icon"], " ")
                            .concat(n ? Eo.a["like-icon-filled"] : ""),
                        }),
                    n
                      ? Object(f.jsx)("span", {
                          children: "Remove from favorites",
                        })
                      : Object(f.jsx)("span", {children: "Add to favorites"}),
                  ],
                }
              )
            ),
          });
        },
        Lo = n(24),
        Mo = n.n(Lo);
      var Ao = function (e) {
        var t,
          n,
          a,
          o,
          l,
          i,
          r,
          u,
          v,
          m,
          h,
          b,
          g,
          j,
          O,
          x = e.data,
          y = e.token,
          _ = e.browseId,
          w = e.addToFavouritesHandler,
          C = e.removeFromFavouritesHandler,
          k = e.logout,
          N = Object(d.g)(),
          S = Object(c.useState)(!1),
          E = Object(s.a)(S, 2),
          P = E[0],
          I = E[1],
          L = Object(c.useState)(!1),
          M = Object(s.a)(L, 2),
          A = M[0],
          T = M[1],
          R = Object(c.useContext)(p),
          B = R.setCurrentSongIndex,
          D = R.setCurrentSongParam,
          F = R.closePlayer,
          H = R.setUpNextSongs,
          U = R.currentSong,
          V = Object(Y.useQuery)(
            ["soundrex", _],
            function () {
              return te(
                {
                  url: "https://soundrex.onrender.com/soundrex/is-liked",
                  method: "POST",
                  headers: {authorization: "Bearer " + y},
                  data: {id: _},
                },
                !1,
                !1,
                !1,
                null,
                null
              );
            },
            {keepPreviousData: !0}
          ),
          W = V.data,
          G = V.error,
          Z = V.isError,
          q = V.isSuccess,
          X = Object(f.jsx)(c.Fragment, {
            children: Object(f.jsx)("div", {
              className: "flex-center",
              children: Object(f.jsx)(be, {}),
            }),
          });
        Z && G && (ne(G) && k(), (X = Object(f.jsx)("span", {}))),
          Object(c.useEffect)(
            function () {
              q &&
                null !== (null === W || void 0 === W ? void 0 : W.isLiked) &&
                T(null === W || void 0 === W ? void 0 : W.isLiked);
            },
            [q, W, _]
          );
        var Q = null === x || void 0 === x ? void 0 : x.header,
          J =
            (null === Q ||
            void 0 === Q ||
            null === (t = Q.title) ||
            void 0 === t
              ? void 0
              : t.length) > 0 &&
            dt(null === Q || void 0 === Q ? void 0 : Q.title),
          K =
            (null === Q ||
            void 0 === Q ||
            null === (n = Q.thumbnails) ||
            void 0 === n ||
            null === (a = n[0]) ||
            void 0 === a
              ? void 0
              : a.url) || "https://i.ytimg.com/vi/".concat(_, "/hqdefault.jpg"),
          $ = {title: J, thumbnail: K, id: _, browseId: _},
          ee = Object(c.useCallback)(
            function () {
              return A && J
                ? C(
                    _,
                    function () {
                      return T("loading");
                    },
                    function () {
                      return T(!1);
                    },
                    function () {
                      return T(!0);
                    }
                  )
                : w(
                    $,
                    function () {
                      return T("loading");
                    },
                    function () {
                      return T(!0);
                    },
                    function () {
                      return T(!1);
                    }
                  );
            },
            [A, J, K, _, w, C]
          );
        q &&
          (X = W
            ? Object(f.jsx)(Io, {
                liked: A,
                onClick: ee,
                className: Mo.a["album-playlist-header-actions-like"],
              })
            : Object(f.jsx)("span", {}));
        var ae =
            (null === Q ||
            void 0 === Q ||
            null === (o = Q.title) ||
            void 0 === o
              ? void 0
              : o.length) > 0 &&
            Object(f.jsx)("h1", {
              className: " ".concat(
                Mo.a["album-playlist-header__title"],
                " display-medium"
              ),
              children: dt(Q.title),
            }),
          oe =
            (null === Q ||
            void 0 === Q ||
            null === (l = Q.subtitle) ||
            void 0 === l
              ? void 0
              : l.length) > 0 && ut(Q.subtitle, "card-link"),
          le =
            (null === Q ||
            void 0 === Q ||
            null === (i = Q.description) ||
            void 0 === i
              ? void 0
              : i.length) > 0 && vt(Q.description),
          ie =
            (null === Q ||
            void 0 === Q ||
            null === (r = Q.secondSubtitle) ||
            void 0 === r
              ? void 0
              : r.length) > 0 && ut(Q.secondSubtitle),
          re =
            (null === Q || void 0 === Q || null === (u = Q.menu) || void 0 === u
              ? void 0
              : u.length) > 0 &&
            Object(f.jsx)(dn, {
              menuOptions: Q.menu,
              serviceSuccessMsg: Boolean(_.startsWith("MPREb"))
                ? "Album will play next"
                : "Playlist will play next",
            }),
          se = le && le.trim().length > 180,
          ce = null === x || void 0 === x ? void 0 : x.contents;
        (null === (v = ce) ||
        void 0 === v ||
        null === (m = v[0]) ||
        void 0 === m
          ? void 0
          : m.list) && (ce = ce[0].list);
        var ue =
            (null === (h = ce) || void 0 === h ? void 0 : h.length) > 0 &&
            (null === (b = ce) ||
            void 0 === b ||
            null ===
              (g = b.find(function (e) {
                return null === e || void 0 === e ? void 0 : e.videoId;
              })) ||
            void 0 === g
              ? void 0
              : g.videoId),
          de = Object(f.jsx)(Et, {
            onClick: function () {
              N.push("/play?id=".concat(ue));
            },
            className: Mo.a["album-playlist-header-actions-play"],
            icon: {
              className: Mo.a["album-playlist-header-actions-play-icon"],
              svg: "play",
              alt: "Play song",
            },
          });
        if (null === Q || void 0 === Q ? void 0 : Q.buttons) {
          var ve = Q.buttons;
          if (null === ve || void 0 === ve ? void 0 : ve.length) {
            var me,
              he = Object(st.a)(ve);
            try {
              var pe = function () {
                var e,
                  t = me.value,
                  n =
                    null ===
                      (e = vt(null === t || void 0 === t ? void 0 : t.text)) ||
                    void 0 === e
                      ? void 0
                      : e.toLowerCase(),
                  a =
                    (null === t || void 0 === t ? void 0 : t.params) ||
                    (null === t || void 0 === t ? void 0 : t.videoId) ||
                    (null === t || void 0 === t ? void 0 : t.browseId) ||
                    (null === t || void 0 === t ? void 0 : t.playlistId),
                  o = "";
                (null === t || void 0 === t ? void 0 : t.browseId) &&
                  (o = "/browse/".concat(t.browseId)),
                  (null === t || void 0 === t ? void 0 : t.videoId) &&
                    (o = "/play?id=".concat(t.videoId)),
                  (null === t || void 0 === t ? void 0 : t.playlistId) &&
                  !(null === t || void 0 === t ? void 0 : t.videoId)
                    ? (o += "/play?list=".concat(t.playlistId))
                    : (null === t || void 0 === t ? void 0 : t.playlistId) &&
                      !(null === t || void 0 === t ? void 0 : t.browseId) &&
                      (o += ""
                        .concat(
                          (null === t || void 0 === t ? void 0 : t.videoId)
                            ? "&"
                            : "?",
                          "list="
                        )
                        .concat(t.playlistId)),
                  !(null === t || void 0 === t ? void 0 : t.playlistId) &&
                    !(null === t || void 0 === t ? void 0 : t.videoId) &&
                    (null === t || void 0 === t ? void 0 : t.params) &&
                    (null === t || void 0 === t ? void 0 : t.browseId) &&
                    (o += "?params=".concat(t.params)),
                  a &&
                    ((null === n || void 0 === n
                      ? void 0
                      : n.includes("play")) ||
                      (null === n || void 0 === n
                        ? void 0
                        : n.includes("shuffle"))) &&
                    (de = Object(f.jsx)(Et, {
                      onClick: function () {
                        var e, n;
                        if (
                          ((null === (e = o) || void 0 === e
                            ? void 0
                            : e.startsWith("/play")) &&
                            ((null === U || void 0 === U
                              ? void 0
                              : U.playlistId) !==
                              (null === t || void 0 === t
                                ? void 0
                                : t.playlistId) && H([]),
                            F(),
                            D("")),
                          N.push(o),
                          null === (n = o) || void 0 === n
                            ? void 0
                            : n.startsWith("/play"))
                        )
                          return B(0);
                      },
                      className: Mo.a["album-playlist-header-actions-play"],
                      icon: {
                        className:
                          Mo.a["album-playlist-header-actions-play-icon"],
                        svg: (
                          null === n || void 0 === n
                            ? void 0
                            : n.includes("shuffle")
                        )
                          ? "shuffle_play"
                          : "play",
                        alt: n,
                        title: n,
                      },
                    }));
              };
              for (he.s(); !(me = he.n()).done; ) pe();
            } catch (fe) {
              he.e(fe);
            } finally {
              he.f();
            }
          }
        }
        return Object(f.jsxs)("div", {
          className: Mo.a["album-playlist-wrapper"],
          children: [
            Q &&
              Object(f.jsxs)("div", {
                className: Mo.a["album-playlist-header"],
                children: [
                  Object(f.jsx)("div", {
                    className: Mo.a["album-playlist-header__img-wrapper"],
                    children:
                      (null === Q ||
                      void 0 === Q ||
                      null === (j = Q.thumbnails) ||
                      void 0 === j
                        ? void 0
                        : j.length) > 0 &&
                      Object(f.jsx)(rt, {
                        src:
                          null ===
                            (O = Q.thumbnails[Q.thumbnails.length - 1]) ||
                          void 0 === O
                            ? void 0
                            : O.url,
                        alt: "",
                        className: Mo.a["album-playlist-header__img"],
                        sources: Q.thumbnails,
                      }),
                  }),
                  Object(f.jsxs)("div", {
                    className: Mo.a["album-playlist-header__content"],
                    children: [
                      ae,
                      Object(f.jsxs)("div", {
                        className: Mo.a["album-playlist-header__subtitles"],
                        children: [
                          Object(f.jsx)("div", {
                            className:
                              Mo.a["album-playlist-header__subtitles-subtitle"],
                            children: oe,
                          }),
                          Object(f.jsx)("div", {
                            className:
                              Mo.a[
                                "album-playlist-header__subtitles-secondSubtitle"
                              ],
                            children: ie,
                          }),
                        ],
                      }),
                      le &&
                        Object(f.jsxs)(c.Fragment, {
                          children: [
                            Object(f.jsx)("div", {
                              className:
                                Mo.a[
                                  se
                                    ? "album-playlist-header__description-".concat(
                                        P ? "less" : "more"
                                      )
                                    : "album-playlist-header__description-more"
                                ],
                              children: le,
                            }),
                            se &&
                              Object(f.jsx)(yo, {
                                className: "mg-t-1 text-x-small ".concat(
                                  Mo.a["album-playlist-header__description-btn"]
                                ),
                                onClick: function () {
                                  return I(function (e) {
                                    return !e;
                                  });
                                },
                                isShowingMoreContent: P,
                              }),
                          ],
                        }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: Mo.a["album-playlist-header-actions"],
                    children: [
                      (ue ||
                        (null === Q || void 0 === Q ? void 0 : Q.buttons)) &&
                        de,
                      X,
                      re,
                    ],
                  }),
                ],
              }),
            Object(f.jsxs)("div", {
              className: Mo.a["album-playlist-contents"],
              children: [
                Object(f.jsxs)("div", {
                  className: Mo.a["album-playlist-contents-header"],
                  children: [
                    Object(f.jsx)("p", {
                      className: "text-large ".concat(
                        Mo.a["album-playlist-contents-header-thumb"]
                      ),
                      children: "#",
                    }),
                    Object(f.jsx)("p", {
                      className: "uppercase text-medium ".concat(
                        Mo.a["album-playlist-contents-header-content"]
                      ),
                      children: "title",
                    }),
                    Object(f.jsx)(z, {
                      className: "".concat(
                        Mo.a["album-playlist-contents-header-fixed"]
                      ),
                      alt: "Duration",
                      svg: "clock",
                    }),
                  ],
                }),
                Object(f.jsx)("div", {
                  className: Mo.a["album-playlist-contents-list"],
                  children: Object(f.jsx)(Ga, {list: ce, isRawSongs: !0}),
                }),
              ],
            }),
          ],
        });
      };
      var To = function (e) {
          var t = e.token,
            n = e.addToFavouritesHandler,
            a = e.removeFromFavouritesHandler,
            o = e.logout,
            l = Object(d.i)().browseId,
            i = Object(d.h)(),
            r = new URLSearchParams(i.search).get("params"),
            s = Object(Y.useQuery)(
              ["browse", l, r],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/browse?id="
                      .concat(l)
                      .concat(r ? "&params=" + r : ""),
                    method: "GET",
                    headers: {authorization: "Bearer " + t},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"}
                );
              },
              {
                staleTime: 3e5,
                select: function (e) {
                  return ao("browse"), e;
                },
              }
            ),
            u = s.data,
            v = s.error,
            m = s.isError,
            h = s.isSuccess,
            b = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)("div", {
                  className: "fixed-right",
                  children: Object(f.jsx)(be, {thin: !0}),
                }),
                Object(f.jsxs)("div", {
                  children: [
                    Object(f.jsxs)("div", {
                      className: "flex-align",
                      children: [
                        Object(f.jsx)(Bn.a, {
                          className:
                            "skeleton skeleton-bg skeleton-thumbnail-sbox",
                          animation: "wave",
                        }),
                        Object(f.jsxs)("div", {
                          className: "flex-column full-hw mg-l-1",
                          children: [
                            Object(f.jsx)(Bn.a, {
                              className: "skeleton-bg",
                              animation: "wave",
                              height: 15,
                              width: "90%",
                            }),
                            Object(f.jsx)(Bn.a, {
                              className: "skeleton-bg mg-t-1",
                              animation: "wave",
                              height: 15,
                              width: "55%",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      className: "mg-t-2",
                      children: [
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          return (
            m &&
              v &&
              (ne(v) && o(),
              (b = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              }))),
            h &&
              (b =
                (null === u || void 0 === u ? void 0 : u.contents) ||
                (null === u || void 0 === u ? void 0 : u.header)
                  ? Object(f.jsx)(Ao, {
                      addToFavouritesHandler: n,
                      removeFromFavouritesHandler: a,
                      browseId: l,
                      token: t,
                      data: u,
                      logout: o,
                    })
                  : Object(f.jsx)("p", {
                      className: "centered capitalize text-medium",
                      children: "No data found.",
                    })),
            b
          );
        },
        Ro = n(30),
        Bo = n.n(Ro);
      var Do = function (e) {
        var t,
          n,
          a,
          o,
          l,
          i,
          r,
          u,
          v,
          m = e.data,
          h = e.artistId,
          b = Object(c.useState)(!1),
          g = Object(s.a)(b, 2),
          j = g[0],
          O = g[1],
          x = Object(c.useContext)(p),
          y = x.setCurrentSongIndex,
          _ = x.setCurrentSongParam,
          w = x.closePlayer,
          C = x.setUpNextSongs,
          k = x.currentSong,
          N = Object(d.g)(),
          S = null === m || void 0 === m ? void 0 : m.header,
          E =
            (null === S ||
            void 0 === S ||
            null === (t = S.title) ||
            void 0 === t
              ? void 0
              : t.length) > 0 &&
            Object(f.jsx)("h1", {
              className: "display-large ".concat(Bo.a["artist-header-title"]),
              children: dt(S.title),
            }),
          P =
            (null === S ||
            void 0 === S ||
            null === (n = S.description) ||
            void 0 === n
              ? void 0
              : n.length) > 0 && vt(S.description),
          I = P && P.trim().length > 149,
          L = null === m || void 0 === m ? void 0 : m.contents,
          M =
            (null === L ||
            void 0 === L ||
            null === (a = L[0]) ||
            void 0 === a ||
            null === (o = a.list) ||
            void 0 === o
              ? void 0
              : o.length) > 0 &&
            (null === (l = L[0].list) ||
            void 0 === l ||
            null ===
              (i = l.find(function (e) {
                return null === e || void 0 === e ? void 0 : e.videoId;
              })) ||
            void 0 === i
              ? void 0
              : i.videoId),
          A = Object(f.jsx)(Et, {
            onClick: function () {
              N.push("/play?id=".concat(M));
            },
            className: Bo.a["artist-header-actions-play"],
            icon: {
              className: Bo.a["artist-header-actions-play-icon"],
              svg: "play",
              alt: "Play song",
            },
          });
        if (null === S || void 0 === S ? void 0 : S.playButton) {
          var T = [S.playButton];
          if (null === T || void 0 === T ? void 0 : T.length) {
            var R,
              B = Object(st.a)(T);
            try {
              var D = function () {
                var e,
                  t = R.value,
                  n =
                    null ===
                      (e = vt(null === t || void 0 === t ? void 0 : t.text)) ||
                    void 0 === e
                      ? void 0
                      : e.toLowerCase(),
                  a =
                    (null === t || void 0 === t ? void 0 : t.params) ||
                    (null === t || void 0 === t ? void 0 : t.videoId) ||
                    (null === t || void 0 === t ? void 0 : t.browseId) ||
                    (null === t || void 0 === t ? void 0 : t.playlistId),
                  o = "";
                (null === t || void 0 === t ? void 0 : t.browseId) &&
                  (o = "/browse/".concat(t.browseId)),
                  (null === t || void 0 === t ? void 0 : t.videoId) &&
                    (o = "/play?id=".concat(t.videoId)),
                  (null === t || void 0 === t ? void 0 : t.playlistId) &&
                  !(null === t || void 0 === t ? void 0 : t.videoId)
                    ? (o += "/play?list=".concat(t.playlistId))
                    : (null === t || void 0 === t ? void 0 : t.playlistId) &&
                      !(null === t || void 0 === t ? void 0 : t.browseId) &&
                      (o += ""
                        .concat(
                          (null === t || void 0 === t ? void 0 : t.videoId)
                            ? "&"
                            : "?",
                          "list="
                        )
                        .concat(t.playlistId)),
                  !(null === t || void 0 === t ? void 0 : t.playlistId) &&
                    !(null === t || void 0 === t ? void 0 : t.videoId) &&
                    (null === t || void 0 === t ? void 0 : t.params) &&
                    (null === t || void 0 === t ? void 0 : t.browseId) &&
                    (o += "?params=".concat(t.params)),
                  a &&
                    ((null === n || void 0 === n
                      ? void 0
                      : n.includes("play")) ||
                      (null === n || void 0 === n
                        ? void 0
                        : n.includes("shuffle"))) &&
                    (A = Object(f.jsx)(Et, {
                      onClick: function () {
                        var e, n;
                        if (
                          ((null === (e = o) || void 0 === e
                            ? void 0
                            : e.startsWith("/play")) &&
                            ((null === k || void 0 === k
                              ? void 0
                              : k.playlistId) !==
                              (null === t || void 0 === t
                                ? void 0
                                : t.playlistId) && C([]),
                            w(),
                            _("")),
                          N.push(o),
                          null === (n = o) || void 0 === n
                            ? void 0
                            : n.startsWith("/play"))
                        )
                          return y(0);
                      },
                      className: Bo.a["artist-header-actions-play"],
                      icon: {
                        className: Bo.a["artist-header-actions-play-icon"],
                        svg: (
                          null === n || void 0 === n
                            ? void 0
                            : n.includes("shuffle")
                        )
                          ? "shuffle_play"
                          : "play",
                        alt: n,
                        title: n,
                      },
                    }));
              };
              for (B.s(); !(R = B.n()).done; ) D();
            } catch (F) {
              B.e(F);
            } finally {
              B.f();
            }
          }
        }
        return (
          (null === L || void 0 === L ? void 0 : L.length) &&
            (v = L.map(function (e, t) {
              var n =
                  (null === e || void 0 === e ? void 0 : e.title) &&
                  ut(e.title, "".concat(Bo.a["artist-content-title"]), h, !0),
                a = null === e || void 0 === e ? void 0 : e.list,
                o =
                  (null === e || void 0 === e ? void 0 : e.description) &&
                  vt(e.description),
                l = null === e || void 0 === e ? void 0 : e.carouselRenderer;
              if (o) {
                var i =
                    (null === e || void 0 === e ? void 0 : e.title) &&
                    ut(e.title),
                  r =
                    (null === e || void 0 === e ? void 0 : e.subtitle) &&
                    ut(e.subtitle);
                return Object(f.jsxs)(
                  "div",
                  {
                    className: " ".concat(
                      Bo.a["artist-content-footer"],
                      " description-shelf-full-w"
                    ),
                    children: [
                      Object(f.jsxs)("div", {
                        className: Bo.a["artist-content-header"],
                        children: [
                          Object(f.jsx)("p", {
                            className: "display-small white ".concat(
                              Bo.a["artist-content-title"]
                            ),
                            children: i,
                          }),
                          r &&
                            Object(f.jsx)("p", {
                              className: "link-small mg-t-1 gray ".concat(
                                Bo.a["artist-content-subtitle"]
                              ),
                              children: r,
                            }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "white mg-t-3 text-medium",
                        children: o,
                      }),
                    ],
                  },
                  ae(t).toString()
                );
              }
              return Object(f.jsx)(
                "div",
                {
                  className: Bo.a["artist-content"],
                  children: Object(f.jsx)(
                    Ka,
                    {
                      isRowMusicShelf: !l,
                      disableCarousel: !l,
                      hasMoreItems: !1,
                      list: a,
                      title: n,
                      isTitleComponent: n,
                      titleClasses: "display-small white ".concat(
                        Bo.a["artist-content-header"]
                      ),
                    },
                    ae(t + n)
                  ),
                },
                ae(t + n)
              );
            })),
          Object(f.jsxs)("div", {
            className: Bo.a["artist-wrapper"],
            children: [
              S &&
                Object(f.jsxs)("div", {
                  className: Bo.a["artist-header"],
                  children: [
                    Object(f.jsx)(rt, {
                      pictureClassname: Bo.a["artist-header-picture"],
                      alt: "",
                      className: "".concat(Bo.a["artist-header-thumbnail"]),
                      loadedClassName: "opacity-1",
                      src:
                        (null === S ||
                        void 0 === S ||
                        null === (r = S.thumbnails) ||
                        void 0 === r
                          ? void 0
                          : r.length) > 0
                          ? null ===
                              (u = S.thumbnails[S.thumbnails.length - 1]) ||
                            void 0 === u
                            ? void 0
                            : u.url
                          : "/assets/images/thumbnail.png",
                      sources:
                        null === S || void 0 === S ? void 0 : S.thumbnails,
                    }),
                    Object(f.jsx)("div", {
                      className: Bo.a["artist-header__content"],
                      children: E,
                    }),
                    Object(f.jsx)("div", {
                      className: Bo.a["artist-header-actions"],
                      children:
                        (M ||
                          (null === S || void 0 === S ? void 0 : S.buttons)) &&
                        A,
                    }),
                  ],
                }),
              Object(f.jsx)("div", {
                className: "description-shelf",
                children:
                  P &&
                  Object(f.jsxs)("div", {
                    children: [
                      Object(f.jsx)("div", {
                        className: I
                          ? "description-shelf-".concat(j ? "less" : "more")
                          : "description-shelf-more",
                        children: P,
                      }),
                      I &&
                        Object(f.jsx)(yo, {
                          className: "mg-t-1 text-x-small",
                          onClick: function () {
                            return O(function (e) {
                              return !e;
                            });
                          },
                          isShowingMoreContent: j,
                        }),
                    ],
                  }),
              }),
              Object(f.jsx)("div", {
                className: Bo.a["artist-contents"],
                children: v,
              }),
            ],
          })
        );
      };
      var Fo = function (e) {
        var t,
          n = e.token,
          a = e.logout,
          o = Object(d.i)().browseId,
          l = Object(d.h)(),
          i = new URLSearchParams(l.search).get("params"),
          r = Object(Y.useQuery)(
            ["browse", o, i],
            function () {
              return te(
                {
                  url: "https://soundrex.onrender.com/api/v1/browse?id="
                    .concat(o)
                    .concat(i ? "&params=" + i : ""),
                  method: "GET",
                  headers: {authorization: "Bearer " + n},
                },
                !1,
                !1,
                !0,
                "Opps! something went wrong.",
                {autoClose: 1e3, theme: "dark"}
              );
            },
            {
              staleTime: 3e5,
              select: function (e) {
                return ao("browse"), e;
              },
            }
          ),
          s = r.data,
          u = r.error,
          v = r.isError,
          m = r.isSuccess,
          h = r.isFetching,
          b = r.isLoading;
        return (
          (h || b) &&
            (t = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)("div", {
                  className: "fixed-right",
                  children: Object(f.jsx)(be, {thin: !0}),
                }),
                Object(f.jsxs)("div", {
                  children: [
                    Object(f.jsxs)("div", {
                      className: "flex-align",
                      children: [
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg skeleton-circular",
                          animation: "wave",
                          variant: "circular",
                        }),
                        Object(f.jsxs)("div", {
                          className: "flex-column full-hw mg-l-1",
                          children: [
                            Object(f.jsx)(Bn.a, {
                              className: "skeleton-bg",
                              animation: "wave",
                              height: 15,
                              width: "90%",
                            }),
                            Object(f.jsx)(Bn.a, {
                              className: "skeleton-bg mg-t-1",
                              animation: "wave",
                              height: 15,
                              width: "55%",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      className: "mg-t-2",
                      children: [
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
          v &&
            u &&
            (ne(u) && a(),
            (t = Object(f.jsx)("p", {
              className: "centered capitalize text-medium",
              children: "No data found.",
            }))),
          m &&
            (t =
              (null === s || void 0 === s ? void 0 : s.contents) ||
              (null === s || void 0 === s ? void 0 : s.header)
                ? Object(f.jsx)(Do, {artistId: o, data: s})
                : Object(f.jsx)("p", {
                    className: "centered capitalize text-medium",
                    children: "No data found.",
                  })),
          t
        );
      };
      var Ho = function (e) {
        var t = e.rootElementRef,
          n = e.token,
          a = e.addToFavouritesHandler,
          o = e.removeFromFavouritesHandler,
          l = e.logout,
          i = Object(d.i)().browseId.startsWith("UC");
        return (
          Object(c.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.current) &&
                t.current.scrollIntoView({behavior: "smooth", block: "start"});
            },
            [t]
          ),
          Object(f.jsx)(d.d, {
            children: i
              ? Object(f.jsx)(d.b, {
                  path: "/browse/:browseId",
                  children: Object(f.jsx)(Fo, {logout: l, token: n}),
                })
              : Object(f.jsx)(d.b, {
                  path: "/browse/:browseId",
                  children: Object(f.jsx)(To, {
                    logout: l,
                    addToFavouritesHandler: a,
                    removeFromFavouritesHandler: o,
                    token: n,
                  }),
                }),
          })
        );
      };
      var Uo = function (e) {
        var t = e.rootElementRef,
          n = Object(c.useContext)(p),
          a = n.setRenderSongPage,
          o = n.renderSongPage;
        return (
          Object(c.useEffect)(
            function () {
              o || a(!0);
            },
            [o]
          ),
          Object(c.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.current) &&
                t.current.scrollIntoView({behavior: "smooth", block: "start"});
            },
            [t]
          ),
          Object(c.useEffect)(function () {
            return (
              document.body.classList.remove("mg-b-15"),
              function () {
                document.body.classList.add("mg-b-15");
              }
            );
          }, []),
          null
        );
      };
      var Vo,
        zo,
        Wo,
        Go = function (e) {
          var t = e.rootElementRef,
            n = e.token,
            a = e.initLibrary,
            o = e.removeFromFavouritesHandler,
            l = e.logout;
          Object(c.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.current) &&
                t.current.scrollIntoView({behavior: "smooth", block: "start"});
            },
            [t]
          ),
            Object(d.g)();
          var i,
            r = Object(Y.useQuery)(
              ["soundrex", "favourites"],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/soundrex/favourites",
                    method: "GET",
                    headers: {authorization: "Bearer " + n},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"}
                );
              },
              {refetchOnMount: "always", keepPreviousData: !0}
            ),
            s = r.data,
            u = r.error,
            v = r.isError,
            m = r.isSuccess,
            h = r.refetch,
            b = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)("div", {
                  className: "fixed-right",
                  children: Object(f.jsx)(be, {thin: !0}),
                }),
                Object(f.jsxs)("div", {
                  children: [
                    Object(f.jsx)(Bn.a, {className: "skeleton skeleton-bg"}),
                    Object(f.jsx)(Bn.a, {className: "skeleton skeleton-bg"}),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton skeleton-bg",
                    }),
                  ],
                }),
              ],
            });
          if (
            (v &&
              u &&
              (ne(u) && l(),
              (b = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              }))),
            Object(c.useEffect)(
              function () {
                m &&
                  (null === s || void 0 === s ? void 0 : s.library) &&
                  a(s.library);
              },
              [m, s, a]
            ),
            m)
          )
            if (
              (null === s ||
              void 0 === s ||
              null === (i = s.library) ||
              void 0 === i
                ? void 0
                : i.length) > 0
            ) {
              var p,
                g =
                  null === s ||
                  void 0 === s ||
                  null === (p = s.library) ||
                  void 0 === p
                    ? void 0
                    : p.map(function (e) {
                        return e.videoId;
                      }),
                j = null === g || void 0 === g ? void 0 : g[0],
                O = "RDAMVM".concat(null === g || void 0 === g ? void 0 : g[0]);
              j &&
                "/play"
                  .concat(j ? "?id=".concat(j) : "")
                  .concat((!j && O ? "?" : "&") + "list=".concat(O) || "");
              console.log("Favourites ", g),
                (b = Object(f.jsx)(Ka, {
                  refetchLibrary: h,
                  removeFromFavouritesHandler: o,
                  isLibrary: !0,
                  isRowMusicShelf: !0,
                  disableCarousel: !0,
                  list: s.library,
                  title: Object(f.jsx)("p", {
                    className: "mg-b-3 link-large",
                    children: "Your library",
                  }),
                  isTitleComponent: Object(f.jsx)("p", {
                    className: "mg-b-3 link-large",
                    children: "Your library",
                  }),
                  rawData: !0,
                }));
            } else
              b = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              });
          return b;
        },
        Zo = n(37),
        qo = n.n(Zo),
        Yo = ["title", "titleId"];
      function Xo() {
        return (
          (Xo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Xo.apply(this, arguments)
        );
      }
      function Qo(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Jo(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Qo(e, Yo);
        return c.createElement(
          "svg",
          Xo(
            {
              "width": 323,
              "height": 83,
              "viewBox": "0 0 323 83",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Vo ||
            (Vo = c.createElement("path", {
              d: "M114.756 51.504C117.604 51.504 119.828 50.96 121.428 49.872C123.06 48.752 123.876 47.168 123.876 45.12C123.876 43.68 123.508 42.496 122.772 41.568C122.036 40.64 121.06 39.968 119.844 39.552C118.66 39.136 117.348 38.784 115.908 38.496C114.5 38.208 113.076 37.888 111.636 37.536C110.196 37.184 108.868 36.72 107.652 36.144C106.468 35.568 105.508 34.672 104.772 33.456C104.036 32.208 103.668 30.656 103.668 28.8C103.668 26.176 104.708 23.92 106.788 22.032C108.868 20.144 111.716 19.2 115.332 19.2C119.012 19.2 121.876 20.224 123.924 22.272C125.972 24.32 127.028 26.976 127.092 30.24H123.684C123.62 27.872 122.836 25.968 121.332 24.528C119.86 23.088 117.876 22.368 115.38 22.368C112.82 22.368 110.804 22.944 109.332 24.096C107.892 25.216 107.172 26.736 107.172 28.656C107.172 30 107.54 31.104 108.276 31.968C109.044 32.8 110.02 33.424 111.204 33.84C112.388 34.256 113.7 34.608 115.14 34.896C116.58 35.152 118.02 35.488 119.46 35.904C120.9 36.288 122.212 36.784 123.396 37.392C124.58 38 125.54 38.944 126.276 40.224C127.044 41.472 127.428 43.024 127.428 44.88C127.428 47.824 126.244 50.192 123.876 51.984C121.54 53.776 118.468 54.672 114.66 54.672C110.532 54.672 107.412 53.648 105.3 51.6C103.188 49.52 102.068 46.88 101.94 43.68H105.396C105.588 46.208 106.516 48.144 108.18 49.488C109.844 50.832 112.036 51.504 114.756 51.504ZM145.929 54.576C142.217 54.576 139.209 53.328 136.905 50.832C134.633 48.304 133.497 45.296 133.497 41.808C133.497 38.288 134.633 35.28 136.905 32.784C139.209 30.256 142.217 28.992 145.929 28.992C149.673 28.992 152.681 30.256 154.953 32.784C157.257 35.28 158.409 38.288 158.409 41.808C158.409 45.296 157.257 48.304 154.953 50.832C152.681 53.328 149.673 54.576 145.929 54.576ZM136.953 41.808C136.953 44.592 137.785 46.912 139.449 48.768C141.113 50.592 143.273 51.504 145.929 51.504C148.617 51.504 150.793 50.592 152.457 48.768C154.121 46.912 154.953 44.592 154.953 41.808C154.953 38.992 154.121 36.672 152.457 34.848C150.793 32.992 148.617 32.064 145.929 32.064C143.241 32.064 141.065 32.992 139.401 34.848C137.769 36.672 136.953 38.992 136.953 41.808ZM182.352 44.016V29.568H185.76V54H182.496V50.448C181.952 51.472 181.008 52.416 179.664 53.28C178.352 54.144 176.656 54.576 174.576 54.576C171.632 54.576 169.376 53.728 167.808 52.032C166.24 50.304 165.456 48.032 165.456 45.216V29.568H168.864V44.496C168.864 49.232 170.96 51.6 175.152 51.6C177.232 51.6 178.944 50.96 180.288 49.68C181.664 48.368 182.352 46.48 182.352 44.016ZM198.163 29.568V33.312C198.739 32.224 199.699 31.232 201.043 30.336C202.387 29.44 204.115 28.992 206.227 28.992C209.171 28.992 211.443 29.856 213.043 31.584C214.675 33.312 215.491 35.584 215.491 38.4V54H212.083V39.072C212.083 36.8 211.539 35.056 210.451 33.84C209.395 32.592 207.795 31.968 205.651 31.968C203.507 31.968 201.747 32.624 200.371 33.936C198.995 35.248 198.307 37.088 198.307 39.456V54H194.899V29.568H198.163ZM243.153 33.984V18H246.561V54H243.297V49.488C241.473 52.88 238.385 54.576 234.033 54.576C230.449 54.576 227.633 53.344 225.585 50.88C223.537 48.384 222.513 45.36 222.513 41.808C222.513 38.224 223.537 35.2 225.585 32.736C227.633 30.24 230.449 28.992 234.033 28.992C238.257 28.992 241.297 30.656 243.153 33.984ZM243.297 41.808C243.297 38.992 242.529 36.672 240.993 34.848C239.457 32.992 237.361 32.064 234.705 32.064C232.049 32.064 229.921 32.992 228.321 34.848C226.753 36.704 225.969 39.024 225.969 41.808C225.969 44.56 226.753 46.864 228.321 48.72C229.921 50.576 232.049 51.504 234.705 51.504C237.361 51.504 239.457 50.576 240.993 48.72C242.529 46.864 243.297 44.56 243.297 41.808ZM267.6 29.376V32.592C267.216 32.56 266.816 32.544 266.4 32.544C264.224 32.544 262.464 33.2 261.12 34.512C259.776 35.792 259.104 37.664 259.104 40.128V54H255.696V29.568H258.96V33.36C259.536 32.304 260.48 31.376 261.792 30.576C263.104 29.744 264.768 29.328 266.784 29.328L267.6 29.376ZM294.084 42.768H273.78C273.94 45.328 274.804 47.424 276.372 49.056C277.94 50.688 279.972 51.504 282.468 51.504C284.292 51.504 285.892 51.04 287.268 50.112C288.644 49.152 289.604 47.904 290.148 46.368H293.7C292.964 48.8 291.604 50.784 289.62 52.32C287.636 53.824 285.236 54.576 282.42 54.576C278.708 54.576 275.764 53.344 273.588 50.88C271.444 48.384 270.372 45.344 270.372 41.76C270.372 38.24 271.476 35.232 273.684 32.736C275.924 30.24 278.82 28.992 282.372 28.992C285.924 28.992 288.772 30.192 290.916 32.592C293.06 34.96 294.132 37.92 294.132 41.472L294.084 42.768ZM282.372 32.064C280.068 32.064 278.148 32.816 276.612 34.32C275.076 35.792 274.164 37.68 273.876 39.984H290.724C290.5 37.584 289.636 35.664 288.132 34.224C286.66 32.784 284.74 32.064 282.372 32.064ZM320.394 29.568L310.698 41.616L320.73 54H316.458L308.682 44.208L300.906 54H296.73L306.666 41.664L296.97 29.568H301.194L308.73 39.024L316.218 29.568H320.394Z",
              fill: "white",
            })),
          zo ||
            (zo = c.createElement("path", {
              d: "M35.0126 38.7901L15.7729 21.4865L28.1701 19.5693L44.1974 34.1188L39.7025 42.0896L55.9277 56.9182L67.8714 55.0711L49.986 36.4745",
              stroke: "white",
              strokeWidth: 3,
            })),
          Wo ||
            (Wo = c.createElement("path", {
              d: "M75.108 34.8159L56.5705 14.4702C56.4322 14.3183 56.2602 14.2008 56.0683 14.1272C55.8764 14.0536 55.67 14.0259 55.4655 14.0463C55.261 14.0667 55.0641 14.1346 54.8904 14.2447C54.7168 14.3547 54.5713 14.5038 54.4656 14.6801L34.3294 48.2468C34.0793 44.7954 32.6025 41.5479 30.1661 39.0914C27.7297 36.635 24.4945 35.1319 21.0458 34.854C17.597 34.5761 14.1624 35.5418 11.3631 37.5763C8.56374 39.6108 6.58456 42.5799 5.78348 45.9465C4.9824 49.3131 5.41232 52.8551 6.99548 55.9316C8.57864 59.0082 11.2105 61.4163 14.4151 62.7203C17.6197 64.0244 21.1853 64.1384 24.4672 63.0416C27.7491 61.9448 30.5305 59.7098 32.3084 56.7406L55.8147 17.5559L73.1588 36.5918C73.2749 36.7213 73.4155 36.8265 73.5726 36.9014C73.7296 36.9763 73.8999 37.0193 74.0736 37.0281C74.2473 37.0368 74.4211 37.0111 74.5849 36.9524C74.7486 36.8936 74.8992 36.8031 75.0278 36.6859C75.1564 36.5687 75.2606 36.4272 75.3343 36.2696C75.408 36.112 75.4497 35.9413 75.4572 35.7675C75.4646 35.5937 75.4376 35.4201 75.3777 35.2568C75.3177 35.0935 75.2261 34.9436 75.108 34.8159ZM13.77 59.4578C11.7579 58.2508 10.1491 56.4741 9.14687 54.3523C8.14467 52.2306 7.79413 49.8591 8.1396 47.5377C8.48506 45.2164 9.51101 43.0495 11.0877 41.311C12.6644 39.5725 14.721 38.3405 16.9975 37.7708C19.2739 37.2012 21.668 37.3194 23.877 38.1106C26.0859 38.9017 28.0105 40.3303 29.4074 42.2156C30.8043 44.101 31.6107 46.3584 31.7246 48.7024C31.8386 51.0464 31.255 53.3718 30.0477 55.3844C28.4262 58.0806 25.8018 60.0237 22.7502 60.7873C19.6985 61.5509 16.469 61.0728 13.77 59.4578Z",
              fill: "white",
            }))
        );
      }
      var Ko,
        $o,
        el = c.forwardRef(Jo),
        tl = (n.p, {value: "", isTouched: !1}),
        nl = function (e, t) {
          switch (t.type) {
            case "CHANGED":
              return {value: t.value, isTouched: e.isTouched};
            case "BLUR":
              return {value: e.value, isTouched: !0};
            default:
              return tl;
          }
        },
        al = function (e, t) {
          var n = Object(c.useReducer)(nl, tl),
            a = Object(s.a)(n, 2),
            o = a[0],
            l = a[1],
            i = e(o.value),
            r = !i && o.isTouched,
            u = Object(c.useCallback)(
              function (e) {
                return l({type: "CHANGED", value: e.target.value});
              },
              [l]
            ),
            d = Object(c.useCallback)(
              function (e) {
                return l({type: "BLUR"});
              },
              [l]
            ),
            v = Object(c.useCallback)(
              function () {
                return l({type: "RESET"});
              },
              [l]
            );
          return {
            value: o.value,
            isValid: i,
            hasError: r,
            inputChangeHandler: u,
            inputBlurHandler: d,
            reset: v,
            comparedValue: t === String(o.value),
          };
        },
        ol = ["title", "titleId"];
      function ll() {
        return (
          (ll =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          ll.apply(this, arguments)
        );
      }
      function il(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function rl(e, t) {
        var n = e.title,
          a = e.titleId,
          o = il(e, ol);
        return c.createElement(
          "svg",
          ll(
            {
              "width": 22,
              "height": 16,
              "viewBox": "0 0 22 16",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Ko ||
            (Ko = c.createElement("path", {
              d: "M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          $o ||
            ($o = c.createElement("path", {
              d: "M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      }
      var sl,
        cl,
        ul,
        dl,
        vl = c.forwardRef(rl),
        ml = (n.p, ["title", "titleId"]);
      function hl() {
        return (
          (hl =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          hl.apply(this, arguments)
        );
      }
      function bl(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function pl(e, t) {
        var n = e.title,
          a = e.titleId,
          o = bl(e, ml);
        return c.createElement(
          "svg",
          hl(
            {
              "width": 22,
              "height": 18,
              "viewBox": "0 0 22 18",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          sl ||
            (sl = c.createElement("path", {
              d: "M5.87313 14.129C4.02813 12.819 2.56813 11.115 1.74313 10.039C1.51244 9.74198 1.38721 9.37659 1.38721 9.0005C1.38721 8.62441 1.51244 8.25902 1.74313 7.962C3.23613 6.013 6.81813 2 11.0001 2C12.8761 2 14.6301 2.807 16.1301 3.874",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          cl ||
            (cl = c.createElement("path", {
              d: "M13.13 6.887C12.8523 6.60467 12.5214 6.38011 12.1565 6.22628C11.7916 6.07246 11.3998 5.99241 11.0038 5.99075C10.6078 5.98909 10.2153 6.06586 9.84913 6.21662C9.48293 6.36738 9.1502 6.58916 8.87014 6.86915C8.59008 7.14915 8.36822 7.48182 8.21738 7.84799C8.06653 8.21416 7.98967 8.60657 7.99123 9.00258C7.9928 9.3986 8.07276 9.79039 8.2265 10.1554C8.38024 10.5203 8.60472 10.8512 8.88698 11.129",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          ul ||
            (ul = c.createElement("path", {
              d: "M3 17L19 1",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          dl ||
            (dl = c.createElement("path", {
              d: "M9 15.704C9.6492 15.8972 10.3227 15.9969 11 16C15.182 16 18.764 11.987 20.257 10.038C20.4876 9.74071 20.6127 9.37509 20.6125 8.99883C20.6124 8.62256 20.4869 8.25707 20.256 7.96C19.7313 7.27549 19.1684 6.62112 18.57 6",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      }
      var fl = c.forwardRef(pl),
        gl = (n.p, n(39)),
        jl = n.n(gl),
        Ol = [
          "label",
          "id",
          "placeholder",
          "bottomText",
          "isPassword",
          "handleShowPassword",
          "showPassword",
          "emptyAndHasError",
          "emptyAndHasErrorMessage",
          "hasError",
          "hasErrorMessage",
        ],
        xl = u.a.forwardRef(function (e, t) {
          var n = e.label,
            a = e.id,
            o = e.placeholder,
            l = e.bottomText,
            i = e.isPassword,
            r = e.handleShowPassword,
            s = e.showPassword,
            c = e.emptyAndHasError,
            u = e.emptyAndHasErrorMessage,
            d = e.hasError,
            v = e.hasErrorMessage,
            m = Object(w.a)(e, Ol);
          return Object(f.jsxs)("div", {
            className: jl.a.form__group,
            children: [
              Object(f.jsx)("label", {
                className: "link-medium ".concat(jl.a.form__label),
                htmlFor: a,
                children: n,
              }),
              i
                ? Object(f.jsxs)("div", {
                    className: "flex-align relative",
                    children: [
                      Object(f.jsx)(
                        "input",
                        Object(b.a)(
                          Object(b.a)(
                            {
                              className: ""
                                .concat(jl.a.form__input, " ")
                                .concat(
                                  c || d ? jl.a["form__input-red-box"] : ""
                                ),
                              placeholder: o,
                              id: a,
                            },
                            m
                          ),
                          {},
                          {type: s ? "text" : "password", ref: t}
                        )
                      ),
                      s
                        ? Object(f.jsx)(fl, {
                            className: jl.a["form__password-icon"],
                            onClick: r,
                          })
                        : Object(f.jsx)(vl, {
                            className: jl.a["form__password-icon"],
                            onClick: r,
                          }),
                    ],
                  })
                : Object(f.jsx)(
                    "input",
                    Object(b.a)(
                      Object(b.a)(
                        {
                          className: ""
                            .concat(jl.a.form__input, " ")
                            .concat(c || d ? jl.a["form__input-red-box"] : ""),
                          placeholder: o,
                          id: a,
                        },
                        m
                      ),
                      {},
                      {ref: t}
                    )
                  ),
              Object(f.jsxs)("div", {
                className: jl.a["form__label-bottom-container"],
                children: [
                  c &&
                    Object(f.jsx)("label", {
                      className: ""
                        .concat(jl.a["form__label-bottom"], " ")
                        .concat(jl.a["form__label-red"]),
                      htmlFor: a,
                      children: u,
                    }),
                  !c &&
                    d &&
                    Object(f.jsx)("label", {
                      className: ""
                        .concat(jl.a["form__label-bottom"], " ")
                        .concat(jl.a["form__label-red"]),
                      htmlFor: a,
                      children: v,
                    }),
                  !c &&
                    !d &&
                    l &&
                    Object(f.jsx)("label", {
                      className: jl.a["form__label-bottom"],
                      htmlFor: a,
                      children: l,
                    }),
                ],
              }),
            ],
          });
        }),
        yl = function (e) {
          return !!String(e)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },
        _l = function (e) {
          return String(e).length >= 6;
        },
        wl = function (e) {
          return String(e).length >= 1;
        },
        Cl = {theme: "colored"},
        kl = function (e) {
          var t = e.authLoading,
            n = e.editAuthConf,
            a = e.setAuthLoading,
            o = e.topBoxMessage,
            l = e.setTopBoxMessage,
            u = al(yl),
            m = u.value,
            h = u.hasError,
            p = u.inputChangeHandler,
            g = u.inputBlurHandler,
            j = u.reset,
            O = al(yl, m),
            x = O.value,
            y = O.hasError,
            _ = O.inputChangeHandler,
            w = O.inputBlurHandler,
            C = O.reset,
            k = O.comparedValue,
            N = al(_l),
            E = N.value,
            P = N.hasError,
            I = N.inputChangeHandler,
            M = N.inputBlurHandler,
            A = N.reset,
            R = al(wl),
            B = R.value,
            D = R.hasError,
            F = R.inputChangeHandler,
            H = R.inputBlurHandler,
            U = R.reset,
            V = Object(c.useState)(!1),
            z = Object(s.a)(V, 2),
            W = z[0],
            G = z[1],
            Z = Object(c.useCallback)(
              function () {
                return G(function (e) {
                  return !e;
                });
              },
              [G]
            ),
            q = Object(c.useState)(!1),
            Y = Object(s.a)(q, 2),
            X = Y[0],
            Q = Y[1],
            J = Object(c.useState)(!1),
            K = Object(s.a)(J, 2),
            $ = K[0],
            te = K[1];
          Object(c.useEffect)(function () {
            return (
              l(null),
              document.body.classList.add("mg-b-2"),
              function () {
                document.body.classList.remove("mg-b-2");
              }
            );
          }, []),
            Object(c.useEffect)(
              function () {
                Q(!1);
                var e = yl(m),
                  t = yl(x),
                  n = e && t && m === x,
                  a = _l(E),
                  o = wl(B);
                (e && n && a && o) || Q(!0), e && n && a && o && Q(!1);
              },
              [m, x, E, B]
            );
          var ne = (function () {
            var e = Object(r.a)(
              i.a.mark(function e(t) {
                var o, r, s;
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), l(null), (e.prev = 2), X)) {
                            e.next = 17;
                            break;
                          }
                          return (
                            (o = {email: m, password: E, name: B}),
                            j(),
                            C(),
                            A(),
                            U(),
                            a(!0),
                            te(!1),
                            (e.next = 13),
                            ee.a.put(
                              "https://soundrex.onrender.com/auth/signup",
                              Object(b.a)(
                                {
                                  method: "PUT",
                                  headers: {"Content-Type": "application/json"},
                                },
                                o
                              )
                            )
                          );
                        case 13:
                          a(!1),
                            n({isAuth: !1}),
                            v.b.success("Account created successfully.", Cl),
                            te(!0);
                        case 17:
                          e.next = 25;
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(2)),
                            a(!1),
                            te(!1),
                            n({isAuth: !1}),
                            l(
                              (null === e.t0 ||
                              void 0 === e.t0 ||
                              null === (r = e.t0.response) ||
                              void 0 === r ||
                              null === (s = r.data) ||
                              void 0 === s
                                ? void 0
                                : s.message) ||
                                "Oops! Something went wrong. Please try again"
                            );
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 19]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(f.jsxs)(c.Fragment, {
            children: [
              Object(f.jsx)(S, {
                style: {backgroundColor: "transparent"},
                children: Object(f.jsx)(el, {className: qo.a.logo}),
              }),
              Object(f.jsxs)(L, {
                className: "flex-column flex-center",
                children: [
                  $ && Object(f.jsx)(d.a, {to: "/login"}),
                  Object(f.jsx)("p", {
                    className: "centered display-small--bold white",
                    children: "Sign up for free to start listening.",
                  }),
                  Object(f.jsxs)("form", {
                    className: "form mg-t-3",
                    onSubmit: ne,
                    children: [
                      o &&
                        Object(f.jsx)("div", {
                          className: "error-msg-container mg-b-2",
                          children: Object(f.jsx)("p", {
                            className: "error-msg-text link-medium",
                            children: o,
                          }),
                        }),
                      Object(f.jsx)(xl, {
                        required: !0,
                        id: "email",
                        label: "What's your email?",
                        placeholder: "Enter your email.",
                        type: "email",
                        control: "input",
                        emptyAndHasError:
                          0 ===
                            (null === m || void 0 === m ? void 0 : m.length) &&
                          h,
                        emptyAndHasErrorMessage:
                          "You need to enter your email.",
                        hasError: h,
                        hasErrorMessage:
                          "This email is invalid. Make sure it's written like example@email.com",
                        onChange: p,
                        onBlur: g,
                        value: m,
                      }),
                      Object(f.jsx)(xl, {
                        required: !0,
                        id: "confirm-email",
                        label: "Confirm your email",
                        placeholder: "Enter your email again.",
                        type: "email",
                        control: "input",
                        emptyAndHasError:
                          0 ===
                            (null === x || void 0 === x ? void 0 : x.length) &&
                          y,
                        emptyAndHasErrorMessage:
                          "You need to confirm your email.",
                        hasError: !k,
                        hasErrorMessage: "The email addresses don't match.",
                        onChange: _,
                        onBlur: w,
                        value: x,
                      }),
                      Object(f.jsx)(xl, {
                        required: !0,
                        id: "password",
                        label: "Create a password",
                        placeholder: "Enter a password.",
                        type: "password",
                        control: "input",
                        emptyAndHasError:
                          0 ===
                            (null === E || void 0 === E ? void 0 : E.length) &&
                          P,
                        emptyAndHasErrorMessage:
                          "You need to enter a password.",
                        hasError: P,
                        hasErrorMessage: "Your password is too short.",
                        onChange: I,
                        onBlur: M,
                        value: E,
                        isPassword: !0,
                        showPassword: W,
                        handleShowPassword: Z,
                      }),
                      Object(f.jsx)(xl, {
                        required: !0,
                        id: "name",
                        label: "What should we call you?",
                        placeholder: "Enter a profile name.",
                        bottomText: "This appears on your profile.",
                        type: "text",
                        control: "input",
                        emptyAndHasError:
                          0 ===
                            (null === B || void 0 === B ? void 0 : B.length) &&
                          D,
                        emptyAndHasErrorMessage:
                          "Enter a name for your profile.",
                        hasError: D,
                        onChange: F,
                        onBlur: H,
                        value: B,
                      }),
                      Object(f.jsxs)(Je, {
                        disabled: Boolean(X) || t,
                        className: "link-medium "
                          .concat(qo.a.form__button, " ")
                          .concat(qo.a),
                        id: "submit",
                        name: "submit",
                        type: "submit",
                        children: [
                          "Sign up ",
                          t && Object(f.jsx)(be, {className: "mg-l-1"}),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("p", {
                    className: "link-medium ".concat(qo.a.signup_login),
                    children: [
                      "Have an account?",
                      Object(f.jsx)(T.b, {
                        to: "/login",
                        className: qo.a["signup_login-text"],
                        children: "Log in",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Nl = {theme: "colored"},
        Sl = function (e) {
          var t = e.authLoading,
            n = e.editAuthConf,
            a = e.setAutoLogout,
            o = e.setAuthLoading,
            l = e.topBoxMessage,
            u = e.setTopBoxMessage,
            m = al(yl),
            h = m.value,
            p = m.hasError,
            g = m.inputChangeHandler,
            j = m.inputBlurHandler,
            O = m.reset,
            x = al(_l),
            y = x.value,
            _ = x.hasError,
            w = x.inputChangeHandler,
            C = x.inputBlurHandler,
            k = x.reset,
            N = Object(c.useState)(!1),
            E = Object(s.a)(N, 2),
            P = E[0],
            I = E[1],
            M = Object(c.useState)(!1),
            A = Object(s.a)(M, 2),
            R = A[0],
            B = A[1],
            D = Object(c.useState)(!1),
            F = Object(s.a)(D, 2),
            H = F[0],
            U = F[1],
            V = Object(c.useState)(null),
            z = Object(s.a)(V, 2),
            W = z[0],
            G = z[1];
          Object(c.useEffect)(function () {
            return (
              u(null),
              document.body.classList.add("mg-b-1"),
              function () {
                document.body.classList.remove("mg-b-1");
              }
            );
          }, []),
            Object(c.useEffect)(
              function () {
                B(!1);
                var e = yl(h),
                  t = _l(y);
                return (e && t) || B(!0), e && t && B(!1), function () {};
              },
              [h, y, B]
            ),
            Object(c.useEffect)(
              function () {
                return function () {
                  "function" === typeof W && W();
                };
              },
              [W]
            );
          var Z = (function () {
            var e = Object(r.a)(
              i.a.mark(function e(t) {
                var l, r, s, c, d, m, p;
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), u(null), (e.prev = 2), R)) {
                            e.next = 25;
                            break;
                          }
                          return (
                            (l = {email: h, password: y}),
                            O(),
                            k(),
                            o(!0),
                            U(!1),
                            (e.next = 11),
                            ee.a.post(
                              "https://soundrex.onrender.com/auth/login",
                              Object(b.a)(
                                {
                                  method: "POST",
                                  headers: {"Content-Type": "application/json"},
                                },
                                l
                              )
                            )
                          );
                        case 11:
                          if (((r = e.sent), (s = r.data).token)) {
                            e.next = 15;
                            break;
                          }
                          throw new Error("Login failed");
                        case 15:
                          o(!1),
                            localStorage.setItem("token", s.token),
                            localStorage.setItem("userId", s.userId),
                            (c = 36e5),
                            (d = new Date(new Date().getTime() + c)),
                            localStorage.setItem("expiryDate", d.toString()),
                            G(a(c)),
                            U(!0),
                            v.b.success("Login successfully.", Nl),
                            n({
                              isAuth: !0,
                              token: s.token,
                              userId: s.userId,
                              username: s.username,
                            });
                        case 25:
                          e.next = 34;
                          break;
                        case 27:
                          (e.prev = 27),
                            (e.t0 = e.catch(2)),
                            U(!1),
                            o(!1),
                            console.log(e.t0),
                            n({isAuth: !1}),
                            u(
                              (null === e.t0 ||
                              void 0 === e.t0 ||
                              null === (m = e.t0.response) ||
                              void 0 === m ||
                              null === (p = m.data) ||
                              void 0 === p
                                ? void 0
                                : p.message) ||
                                "Oops! Something went wrong. Please try again"
                            );
                        case 34:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 27]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(f.jsxs)(c.Fragment, {
            children: [
              Object(f.jsx)(S, {
                style: {backgroundColor: "transparent"},
                children: Object(f.jsx)(el, {className: qo.a.logo}),
              }),
              Object(f.jsxs)(L, {
                className: "flex-column flex-center",
                children: [
                  Object(f.jsx)("p", {
                    className: " text-large white",
                    children: "To continue, log in to Soundrex.",
                  }),
                  Object(f.jsxs)("form", {
                    className: "form mg-t-3",
                    onSubmit: Z,
                    children: [
                      l &&
                        Object(f.jsx)("div", {
                          className: "error-msg-container mg-b-2",
                          children: Object(f.jsx)("p", {
                            className: "error-msg-text link-medium",
                            children: l,
                          }),
                        }),
                      Object(f.jsx)(xl, {
                        required: !0,
                        id: "email",
                        label: "Email address",
                        placeholder: "Email address",
                        type: "email",
                        control: "input",
                        emptyAndHasError:
                          0 ===
                            (null === h || void 0 === h ? void 0 : h.length) &&
                          p,
                        emptyAndHasErrorMessage:
                          "Please enter your Soundrex email address",
                        hasError: p,
                        hasErrorMessage: "This email is invalid.",
                        onChange: g,
                        onBlur: j,
                        value: h,
                      }),
                      Object(f.jsx)(xl, {
                        required: !0,
                        id: "password",
                        label: "Password",
                        placeholder: "Password",
                        type: "password",
                        control: "input",
                        emptyAndHasError:
                          0 ===
                            (null === y || void 0 === y ? void 0 : y.length) &&
                          _,
                        emptyAndHasErrorMessage: "Please enter your password.",
                        hasError: _,
                        hasErrorMessage: "Your password is too short.",
                        onChange: w,
                        onBlur: C,
                        value: y,
                        isPassword: !0,
                        showPassword: P,
                        handleShowPassword: function () {
                          return I(function (e) {
                            return !e;
                          });
                        },
                      }),
                      Object(f.jsxs)(Je, {
                        disabled: Boolean(R) || t,
                        className: "link-medium "
                          .concat(qo.a.form__button, " ")
                          .concat(qo.a),
                        id: "submit",
                        name: "submit",
                        type: "submit",
                        children: [
                          "Login ",
                          t && Object(f.jsx)(be, {className: "mg-l-1"}),
                        ],
                      }),
                      Object(f.jsx)("hr", {
                        className: qo.a["signup_login-line"],
                      }),
                    ],
                  }),
                  Object(f.jsx)("p", {
                    className: "link-medium ".concat(qo.a.signup_login),
                    children: "Don't have an account? .",
                  }),
                  Object(f.jsx)(T.b, {
                    to: "/signup",
                    className: qo.a["signup_redirect-button-link"],
                    children: Object(f.jsx)(Je, {
                      className: ""
                        .concat(qo.a.form__button, " ")
                        .concat(qo.a["signup_redirect-button"]),
                      children: "Sign up for soundrex",
                    }),
                  }),
                ],
              }),
              H && Object(f.jsx)(d.a, {to: "/home"}),
            ],
          });
        },
        El = n(353),
        Pl = n(370),
        Il = ["children", "value", "index"];
      function Ll(e) {
        var t = e.children,
          n = e.value,
          a = e.index,
          o = Object(w.a)(e, Il);
        return Object(f.jsx)(
          "div",
          Object(b.a)(
            Object(b.a)(
              {
                "role": "tabpanel",
                "hidden": n !== a,
                "id": "simple-tabpanel-".concat(a),
                "aria-labelledby": "simple-tab-".concat(a),
              },
              o
            ),
            {},
            {children: n === a && t}
          )
        );
      }
      function Ml(e) {
        return {
          "id": "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      var Al = n(23),
        Tl = n.n(Al);
      function Rl(e) {
        var t = e.lyrics,
          n = e.footer,
          a = t && t.replace(/\r?\n|\r/g, "<br>"),
          o = n && n.replace(/\r?\n|\r/g, "<br>");
        return Object(f.jsxs)(c.Fragment, {
          children: [
            a &&
              Object(f.jsx)("p", {
                className: "lyrics text-small white ",
                dangerouslySetInnerHTML: {__html: "".concat(a)},
              }),
            o && Object(f.jsx)("p", {className: "mg-t-2", children: o}),
          ],
        });
      }
      var Bl = function (e) {
          var t,
            n,
            a = e.browseId,
            o = e.logout,
            l = Object(c.useContext)(m).token,
            i = Object(Y.useQuery)(
              ["lyrics", a],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/lyrics/browse?id=".concat(
                      a
                    ),
                    method: "GET",
                    headers: {authorization: "Bearer " + l},
                  },
                  !1,
                  !1,
                  !1,
                  null,
                  null
                );
              },
              {
                staleTime: 3e5,
                select: function (e) {
                  return ao("lyrics"), e;
                },
              }
            ),
            r = i.data,
            s = i.error,
            u = i.isError,
            d = i.isSuccess,
            v = Object(f.jsx)(c.Fragment, {
              children: Object(f.jsx)("div", {
                className: "flex-center mg-t-3",
                children: Object(f.jsx)(be, {}),
              }),
            });
          if (
            (u &&
              s &&
              (ne(s) && o(),
              (v = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No lyrics found.",
              }))),
            d)
          )
            if (
              (null === r || void 0 === r ? void 0 : r.list) ||
              (null === r ||
              void 0 === r ||
              null === (t = r.message) ||
              void 0 === t
                ? void 0
                : t.messageRenderer)
            )
              if (
                null === r ||
                void 0 === r ||
                null === (n = r.message) ||
                void 0 === n
                  ? void 0
                  : n.messageRenderer
              ) {
                var h = null === r || void 0 === r ? void 0 : r.message;
                v = Object(f.jsx)(Fa, {msg: h});
              } else {
                var b,
                  p = Object(st.a)(
                    null === r || void 0 === r ? void 0 : r.list
                  );
                try {
                  for (p.s(); !(b = p.n()).done; ) {
                    var g = b.value;
                    if (g.hasLyrics) {
                      var j =
                          (null === g || void 0 === g ? void 0 : g.lyrics) &&
                          vt(g.lyrics),
                        O =
                          (null === g || void 0 === g ? void 0 : g.footer) &&
                          vt(g.footer);
                      v = Object(f.jsx)(Rl, {lyrics: j, footer: O});
                    }
                  }
                } catch (x) {
                  p.e(x);
                } finally {
                  p.f();
                }
              }
            else
              v = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No lyrics found.",
              });
          return Object(f.jsx)(c.Fragment, {children: v});
        },
        Dl = ["hasLyrics", "browseId", "index", "value"];
      var Fl = function (e) {
          var t = e.hasLyrics,
            n = e.browseId,
            a = e.index,
            o = e.value,
            l = Object(w.a)(e, Dl);
          return Object(f.jsx)(Ll, {
            className: Tl.a["songs-tabs-lyrics"],
            value: o,
            index: a,
            children:
              t &&
              n &&
              Object(f.jsx)(
                Bl,
                Object(b.a)(Object(b.a)({}, l), {}, {browseId: n})
              ),
          });
        },
        Hl = n(61),
        Ul = n.n(Hl),
        Vl = {
          cardWidth: 180,
          cardGap: 5,
          cardColumns: 5,
          listHeight: 32,
          cardRows: 1,
          carousellMargin: 20,
        };
      var zl = function (e) {
          var t = e.browseId,
            n = e.logout,
            a = Object(c.useContext)(m).token,
            o = Object(Y.useQuery)(
              ["related", t],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/browse?id=".concat(
                      t
                    ),
                    method: "GET",
                    headers: {authorization: "Bearer " + a},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"}
                );
              },
              {
                staleTime: 3e5,
                select: function (e) {
                  return ao("related", 3), e;
                },
              }
            ),
            l = o.data,
            i = o.error,
            r = o.isError,
            s = o.isSuccess,
            u = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)(Bn.a, {className: "skeleton-title skeleton-bg"}),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
                Object(f.jsx)(Bn.a, {
                  className: "skeleton-title skeleton-bg mg-t-4",
                }),
                Object(f.jsxs)("div", {
                  className: "skeleton-grid-list",
                  children: [
                    Object(f.jsx)(Bn.a, {
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: "wave",
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                    Object(f.jsx)(Bn.a, {
                      animation: !1,
                      className: "skeleton-grid-item skeleton-bg",
                    }),
                  ],
                }),
              ],
            });
          if (
            (r &&
              i &&
              (ne(i) && n(),
              (u = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              }))),
            s)
          )
            if (null === l || void 0 === l ? void 0 : l.contents) {
              u = [];
              var d,
                v = Object(st.a)(l.contents);
              try {
                for (v.s(); !(d = v.n()).done; ) {
                  var h = d.value,
                    p =
                      (null === h || void 0 === h ? void 0 : h.title) &&
                      ut(h.title, "card-link", null, !0),
                    g = null === h || void 0 === h ? void 0 : h.list,
                    j = null === h || void 0 === h ? void 0 : h.description,
                    O =
                      null === h || void 0 === h ? void 0 : h.carouselRenderer;
                  if (j) {
                    var x =
                        (null === h || void 0 === h ? void 0 : h.title) &&
                        ut(h.title),
                      y =
                        (null === h || void 0 === h ? void 0 : h.subtitle) &&
                        ut(h.subtitle),
                      _ = h.description && vt(h.description);
                    u.push(
                      Object(f.jsxs)(
                        "div",
                        {
                          className: "description-shelf mg-t-3",
                          children: [
                            Object(f.jsxs)("div", {
                              className: Ul.a["related-content-header"],
                              children: [
                                Object(f.jsx)("p", {
                                  className: "display-small white ".concat(
                                    Ul.a["related-content-title"]
                                  ),
                                  children: x,
                                }),
                                y &&
                                  Object(f.jsx)("p", {
                                    className: "link-small mg-t-1 gray ".concat(
                                      Ul.a["related-content-subtitle"]
                                    ),
                                    children: y,
                                  }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "white mg-t-3 text-medium",
                              children: _,
                            }),
                          ],
                        },
                        ae(Math.random())
                      )
                    );
                  } else if (O && g) {
                    var w = p,
                      C =
                        (null === h || void 0 === h ? void 0 : h.strapline) &&
                        vt(h.strapline),
                      k =
                        (null === h || void 0 === h ? void 0 : h.thumbnail) &&
                        h.thumbnail[0],
                      N = C ? ut(h.title, "card-link") : w,
                      S = N;
                    C &&
                      !k &&
                      (S = Object(f.jsxs)("div", {
                        className: "flex-column",
                        children: [
                          Object(f.jsx)("p", {
                            className: "display-small gray",
                            children: C,
                          }),
                          N,
                        ],
                      })),
                      C &&
                        k &&
                        (S = Object(f.jsxs)("div", {
                          className: "flex-align",
                          children: [
                            Object(f.jsx)(rt, {
                              className:
                                Ul.a["related-content-header-thumbnail"],
                              src: k.url,
                            }),
                            Object(f.jsxs)("div", {
                              className: "flex-column",
                              children: [
                                Object(f.jsx)("p", {
                                  className: "gray",
                                  children: C,
                                }),
                                N,
                              ],
                            }),
                          ],
                        })),
                      u.push(
                        Object(f.jsx)("div", {
                          className: "mg-t-5 ".concat(Ul.a["related-content"]),
                          children: Object(f.jsx)(
                            Ka,
                            Object(b.a)(
                              Object(b.a)({}, Vl),
                              {},
                              {
                                isRowMusicShelf: !O,
                                disableCarousel: !O,
                                hasMoreItems: !1,
                                list: g,
                                title: Object(f.jsx)("div", {
                                  className: "link-large white ".concat(
                                    Ul.a["related-content-header"],
                                    " "
                                  ),
                                  children: S,
                                }),
                                isTitleComponent: Object(f.jsx)("div", {
                                  className: "link-large white ".concat(
                                    Ul.a["related-content-header"],
                                    " "
                                  ),
                                  children: S,
                                }),
                                titleClasses: "display-small white ".concat(
                                  Ul.a["artist-content-header"]
                                ),
                              }
                            )
                          ),
                        })
                      );
                  }
                }
              } catch (E) {
                v.e(E);
              } finally {
                v.f();
              }
            } else
              u = Object(f.jsx)("p", {
                className: "centered capitalize text-medium",
                children: "No data found.",
              });
          return Object(f.jsx)("div", {
            className: Ul.a["related-container"],
            children: u,
          });
        },
        Wl = ["hasRelated", "browseId", "index", "value"];
      var Gl = function (e) {
        var t = e.hasRelated,
          n = e.browseId,
          a = e.index,
          o = e.value,
          l = Object(w.a)(e, Wl);
        return Object(f.jsx)(Ll, {
          className: (t && Tl.a["tabs-related"]) || "",
          value: o,
          index: a,
          children:
            t &&
            n &&
            Object(f.jsx)(
              zl,
              Object(b.a)(Object(b.a)({}, l), {}, {browseId: n})
            ),
        });
      };
      var Zl = function (e) {
          var t = e.selectedSong,
            n = e.list,
            a = e.isStaticList,
            o = e.setCurrentSongIndex,
            l = e.changeParam,
            i = e.index,
            r = e.value;
          return Object(f.jsx)(Ll, {
            value: r,
            index: i,
            children: Object(f.jsx)(Ga, {
              selectedSong: t,
              isStaticList: a,
              changeSong: o,
              changeParam: l,
              list: n,
            }),
          });
        },
        ql = ["style"],
        Yl = ["style"];
      function Xl(e) {
        var t = e.style,
          n = Object(w.a)(e, ql);
        return Object(f.jsx)(
          "div",
          Object(b.a)(
            {
              style: Object(b.a)(Object(b.a)({}, t), {
                backgroundColor: "rgba(255,255,255, .7)",
              }),
            },
            n
          )
        );
      }
      function Ql(e) {
        var t = e.style,
          n = Object(w.a)(e, Yl);
        return Object(f.jsx)(
          "div",
          Object(b.a)(
            {
              className: "",
              style: Object(b.a)(Object(b.a)({}, t), {
                backgroundColor: "rgba(0,0,0, .4)",
                position: "absolute",
                width: "6px",
                right: "0",
                bottom: "2px",
                top: "2px",
                borderRadius: "3px",
              }),
            },
            n
          )
        );
      }
      function Jl(e) {
        var t,
          n,
          a,
          o,
          l,
          i,
          r,
          u,
          v,
          m = e.data,
          h = e.VID_PARAM,
          p = e.PLAYLIST_PARAM,
          g = e.isFetching,
          j = e.isPlayerPageOpen,
          O = e.changeCurrentSong,
          x = e.currentSongIndex,
          y = e.setCurrentSongIndex,
          _ = e.changeParam,
          w = e.playerState,
          C = e.openPlayer,
          k = e.upNextSongsList,
          N = e.logout,
          S = Object(d.g)(),
          E = Object(c.useState)(0),
          P = Object(s.a)(E, 2),
          I = P[0],
          L = P[1],
          M = Object(c.useState)(!1),
          A = Object(s.a)(M, 2),
          T = A[0],
          R = A[1],
          B = m.selectedSong,
          D = Boolean(B);
        B && B.playerState !== w && (B.playerState = w),
          (!D ||
            !(null === (t = Object.keys(B)) || void 0 === t
              ? void 0
              : t.length) > 0) &&
            (B =
              (null === k || void 0 === k ? void 0 : k.length) >= 0 &&
              k.find(function (e) {
                return (null === e || void 0 === e ? void 0 : e.videoId) === h;
              }));
        var F = Object(c.useState)(B),
          H = Object(s.a)(F, 2),
          U = H[0],
          V = H[1];
        D = Boolean(U);
        var z =
            (null === m ||
            void 0 === m ||
            null === (n = m.next_songs) ||
            void 0 === n ||
            null === (a = n.list) ||
            void 0 === a
              ? void 0
              : a.playlistId) ||
            (null === m ||
            void 0 === m ||
            null === (o = m.next_songs) ||
            void 0 === o ||
            null === (l = o.list) ||
            void 0 === l ||
            null === (i = l.playlist) ||
            void 0 === i
              ? void 0
              : i.playlistId),
          W = Boolean(null === m || void 0 === m ? void 0 : m.hasLyrics),
          G = Boolean(null === m || void 0 === m ? void 0 : m.hasRelated);
        Object(c.useEffect)(
          function () {
            if (null != x) {
              var e = k.find(function (e) {
                return (null === e || void 0 === e ? void 0 : e.index) === x;
              });
              if (e) {
                R(!1), (e.playerState = w);
                var t =
                  (null === e || void 0 === e ? void 0 : e.browseId) &&
                  "/browse/".concat(e.browseId);
                (null === e || void 0 === e ? void 0 : e.videoId) &&
                  (t = "/play?id=".concat(e.videoId));
                var n =
                  (null === e || void 0 === e ? void 0 : e.playlistId) || z;
                n &&
                  (t += ""
                    .concat(
                      (null === e || void 0 === e ? void 0 : e.videoId)
                        ? "&"
                        : "?",
                      "list="
                    )
                    .concat(n)),
                  V(e),
                  (null === e || void 0 === e ? void 0 : e.params) &&
                    0 !== x &&
                    _(e.params),
                  t && j && S.replace(t);
              }
            }
          },
          [x, w, _, S]
        ),
          Object(c.useEffect)(
            function () {
              L(0), R(!0);
            },
            [p]
          ),
          Object(c.useEffect)(
            function () {
              B && O(B), C();
            },
            [O, C, h, z, p, B]
          );
        var Z = null === U || void 0 === U ? void 0 : U.thumbnails,
          q = k,
          Y = Object(c.useState)("visible"),
          X = Object(s.a)(Y, 2),
          Q = X[0],
          J = X[1];
        return (
          Object(c.useEffect)(
            function () {
              var e;
              return (
                j
                  ? J("visible")
                  : (e = setTimeout(function () {
                      J("hidden");
                    }, 1500)),
                function () {
                  e && clearTimeout(e);
                }
              );
            },
            [j]
          ),
          Object(f.jsxs)(c.Fragment, {
            children: [
              g &&
                Object(f.jsxs)(c.Fragment, {
                  children: [
                    T &&
                      (null === q || void 0 === q ? void 0 : q.length) <= 0 &&
                      Object(f.jsx)(ue, {
                        transparent: !0,
                        style: {zIndex: 999},
                        loadingText: !0,
                      }),
                    Object(f.jsx)("div", {
                      className: "position-center mv-top flex-center ".concat(
                        Tl.a["song-fetching"]
                      ),
                      children: Object(f.jsx)(Fn, {createPortal: !1}),
                    }),
                  ],
                }),
              Object(f.jsxs)("div", {
                className: ""
                  .concat(Tl.a.song, " ")
                  .concat(j ? Tl.a["song-page-full"] : Tl.a["song-page-close"]),
                style: {visibility: Q},
                children: [
                  Object(f.jsx)("div", {
                    className: Tl.a["song-thumbnail"],
                    children: Object(f.jsx)(rt, {
                      pictureClassname: Tl.a["song-picture"],
                      alt: "",
                      className: Tl.a["song-image"],
                      loadedClassName: "opacity-1",
                      src: Z
                        ? null === (r = Z[Z.length - 1]) || void 0 === r
                          ? void 0
                          : r.url
                        : "/assets/images/thumbnail.png",
                      sources: Z,
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className: Tl.a["song-tabs"],
                    children: [
                      Object(f.jsxs)(El.a, {
                        "textColor": "inherit",
                        "className": "tab-header",
                        "TabIndicatorProps": {className: "bg-white"},
                        "value": Number(I),
                        "onChange": function (e, t) {
                          L(Number(t));
                        },
                        "aria-label": "tabs",
                        "children": [
                          Object(f.jsx)(
                            Pl.a,
                            Object(b.a)(
                              {
                                className: "tab-button link-small ".concat(
                                  D ? "white" : "light-gray"
                                ),
                                label: "Up next",
                              },
                              Ml(0)
                            )
                          ),
                          Object(f.jsx)(
                            Pl.a,
                            Object(b.a)(
                              {
                                className: "tab-button link-small ".concat(
                                  !W || g ? "light-gray" : "white"
                                ),
                                label: W ? "Lyrics" : "Lyrics (NA)",
                                disabled: !W || g,
                              },
                              Ml(1)
                            )
                          ),
                          Object(f.jsx)(
                            Pl.a,
                            Object(b.a)(
                              {
                                className: "tab-button link-small ".concat(
                                  !G || g ? "light-gray" : "white"
                                ),
                                label: "Related",
                                disabled: !G || g,
                              },
                              Ml(2)
                            )
                          ),
                        ],
                      }),
                      Object(f.jsx)(Ea.Scrollbars, {
                        className: Tl.a["song-tabs-list"],
                        autoHide: !1,
                        renderThumbVertical: Xl,
                        renderTrackVertical: Ql,
                        children: Object(f.jsxs)("div", {
                          className: "tab-content",
                          children: [
                            g &&
                            T &&
                            (null === q || void 0 === q ? void 0 : q.length) <=
                              0
                              ? Object(f.jsxs)("div", {
                                  index: 0,
                                  value: Number(I),
                                  children: [
                                    Object(f.jsx)(Bn.a, {
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: "wave",
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: "wave",
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: "wave",
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: "wave",
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: !1,
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: !1,
                                      className: "skeleton skeleton-bg",
                                    }),
                                    Object(f.jsx)(Bn.a, {
                                      animation: !1,
                                      className: "skeleton skeleton-bg",
                                    }),
                                  ],
                                })
                              : Object(f.jsx)(Zl, {
                                  changeSelectedSong: V,
                                  selectedSong: U,
                                  list: q,
                                  isStaticList: !0,
                                  setCurrentSongIndex: y,
                                  changeParam: _,
                                  index: 0,
                                  value: Number(I),
                                }),
                            Object(f.jsx)(Fl, {
                              logout: N,
                              hasLyrics: W,
                              browseId:
                                null === m ||
                                void 0 === m ||
                                null === (u = m.lyrics) ||
                                void 0 === u
                                  ? void 0
                                  : u.browseId,
                              index: 1,
                              value: Number(I),
                            }),
                            Object(f.jsx)(Gl, {
                              logout: N,
                              hasRelated: G,
                              browseId:
                                null === m ||
                                void 0 === m ||
                                null === (v = m.related) ||
                                void 0 === v
                                  ? void 0
                                  : v.browseId,
                              index: 2,
                              value: Number(I),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var Kl = function (e, t) {
          var n, a, o, l, i, r, s, c, u, d;
          return (
            (null === e ||
            void 0 === e ||
            null === (n = e.upNextSongsList) ||
            void 0 === n
              ? void 0
              : n
                  .map(function (e) {
                    return e.videoId || !1;
                  })
                  .join(" ")) ===
              (null === t ||
              void 0 === t ||
              null === (a = t.upNextSongsList) ||
              void 0 === a
                ? void 0
                : a
                    .map(function (e) {
                      return e.videoId || !1;
                    })
                    .join(" ")) &&
            (null === e ||
            void 0 === e ||
            null === (o = e.data) ||
            void 0 === o ||
            null === (l = o.selectedSong) ||
            void 0 === l
              ? void 0
              : l.videoId) ===
              (null === t ||
              void 0 === t ||
              null === (i = t.data) ||
              void 0 === i ||
              null === (r = i.selectedSong) ||
              void 0 === r
                ? void 0
                : r.videoId) &&
            (null === e ||
            void 0 === e ||
            null === (s = e.data) ||
            void 0 === s ||
            null === (c = s.currentVideoEndpoint) ||
            void 0 === c
              ? void 0
              : c.videoId) ===
              (null === t ||
              void 0 === t ||
              null === (u = t.data) ||
              void 0 === u ||
              null === (d = u.currentVideoEndpoint) ||
              void 0 === d
                ? void 0
                : d.videoId) &&
            (null === e || void 0 === e ? void 0 : e.VID_PARAM) ===
              (null === t || void 0 === t ? void 0 : t.VID_PARAM) &&
            (null === e || void 0 === e ? void 0 : e.PLAYLIST_PARAM) ===
              (null === t || void 0 === t ? void 0 : t.PLAYLIST_PARAM) &&
            (null === e || void 0 === e ? void 0 : e.isFetching) ===
              (null === t || void 0 === t ? void 0 : t.isFetching) &&
            (null === e || void 0 === e ? void 0 : e.isPlayerPageOpen) ===
              (null === t || void 0 === t ? void 0 : t.isPlayerPageOpen) &&
            (null === e || void 0 === e ? void 0 : e.changeCurrentSong) ===
              (null === t || void 0 === t ? void 0 : t.changeCurrentSong) &&
            (null === e || void 0 === e ? void 0 : e.currentSongIndex) ===
              (null === t || void 0 === t ? void 0 : t.currentSongIndex) &&
            (null === e || void 0 === e ? void 0 : e.setCurrentSongIndex) ===
              (null === t || void 0 === t ? void 0 : t.setCurrentSongIndex) &&
            (null === e || void 0 === e ? void 0 : e.changeParam) ===
              (null === t || void 0 === t ? void 0 : t.changeParam) &&
            (null === e || void 0 === e ? void 0 : e.playerState) ===
              (null === t || void 0 === t ? void 0 : t.playerState) &&
            (null === e || void 0 === e ? void 0 : e.openPlayer) ===
              (null === t || void 0 === t ? void 0 : t.openPlayer)
          );
        },
        $l = Object(c.memo)(Jl, Kl);
      var ei,
        ti = function (e) {
          var t,
            n,
            a,
            o,
            l,
            i = e.token,
            r = e.isPlayerPageOpen,
            s = e.changeCurrentSong,
            u = e.currentSongIndex,
            v = e.currentSongParam,
            m = e.setCurrentSongParam,
            h = e.setCurrentSongIndex,
            b = e.openPlayer,
            p = e.closePlayer,
            g = e.playerState,
            j = e.upNextSongs,
            O = e.setUpNextSongs,
            x = e.setIsAudioServerCrashed,
            y = e.addToEndOfNextSongs,
            _ = e.addToNextOfNextSongs,
            w = e.nextListContinuation,
            C = e.setNextListContinuation,
            k = e.logout,
            N = Object(d.g)(),
            S = Object(d.h)(),
            E = new URLSearchParams(S.search).get("id"),
            P = new URLSearchParams(S.search).get("list"),
            I = P || (!P && E && "RDAMVM".concat(E));
          Object(c.useEffect)(
            function () {
              var e, t, n, a;
              x(!1);
              var o = P && P.replace("RDAMVM", "").trim();
              P && E === o && (h(0), m("")),
                S.pathname.startsWith("/play") &&
                  ((null === P ||
                  void 0 === P ||
                  null === (e = P.startsWith) ||
                  void 0 === e
                    ? void 0
                    : e.call(P, "RDAMPL")) ||
                    (null === P ||
                    void 0 === P ||
                    null === (t = P.startsWith) ||
                    void 0 === t
                      ? void 0
                      : t.call(P, "OLA")) ||
                    (null === P ||
                    void 0 === P ||
                    null === (n = P.startsWith) ||
                    void 0 === n
                      ? void 0
                      : n.call(P, "RDAO")) ||
                    null === P ||
                    void 0 === P ||
                    null === (a = P.startsWith) ||
                    void 0 === a ||
                    a.call(P, "RD"));
            },
            [P, h, m, x]
          );
          var L = Object(Y.useQuery)(
              ["song", E, I, v],
              function () {
                return te(
                  {
                    url: "https://soundrex.onrender.com/api/v1/audio/next"
                      .concat(E ? "?id=".concat(E) : "")
                      .concat(
                        I
                          ? ""
                              .concat(E ? "&" : "?", "playlistId=")
                              .concat(I)
                              .concat(
                                v
                                  ? ""
                                      .concat(E || I ? "&" : "?", "params=")
                                      .concat(v)
                                  : ""
                              )
                              .concat(u >= 0 ? "&idx=".concat(u) : "")
                          : ""
                      ),
                    method: "GET",
                    headers: {authorization: "Bearer " + i},
                  },
                  !1,
                  !1,
                  !0,
                  "Opps! something went wrong.",
                  {autoClose: 1e3, theme: "dark"}
                );
              },
              {
                staleTime: 1 / 0,
                keepPreviousData: !0,
                enabled: Boolean(E) || Boolean(P),
                select: function (e) {
                  return ao("song"), e;
                },
              }
            ),
            M = L.data,
            A = L.error,
            T = L.isError,
            R = L.isSuccess,
            B = L.isFetching,
            D = L.isLoading,
            F = Object(Y.useMutation)(
              function (e) {
                return te(e, !1, !1, !1, null, null, function () {
                  return k();
                });
              },
              {
                onSuccess: function (e) {
                  if (e && Object.keys(e).length > 0) {
                    var t,
                      n,
                      a,
                      o,
                      l,
                      i =
                        (null === e ||
                        void 0 === e ||
                        null === (t = e.next_songs) ||
                        void 0 === t ||
                        null === (n = t.list) ||
                        void 0 === n ||
                        null === (a = n.list) ||
                        void 0 === a
                          ? void 0
                          : a.length) > 0,
                      r =
                        null === e ||
                        void 0 === e ||
                        null === (o = e.next_songs) ||
                        void 0 === o ||
                        null === (l = o.list) ||
                        void 0 === l
                          ? void 0
                          : l.list;
                    i && y(r, !0);
                  }
                },
                onError: function (e) {
                  ne(e) && k(), console.log(e);
                },
              }
            ),
            H = Object(Y.useMutation)(
              function (e) {
                return te(e, !1, !1, !1, null, null, function () {
                  return k();
                });
              },
              {
                onSuccess: function (e) {
                  if (e && Object.keys(e).length > 0) {
                    var t,
                      n,
                      a,
                      o,
                      l,
                      i =
                        (null === e ||
                        void 0 === e ||
                        null === (t = e.next_songs) ||
                        void 0 === t ||
                        null === (n = t.list) ||
                        void 0 === n ||
                        null === (a = n.list) ||
                        void 0 === a
                          ? void 0
                          : a.length) > 0,
                      r =
                        null === e ||
                        void 0 === e ||
                        null === (o = e.next_songs) ||
                        void 0 === o ||
                        null === (l = o.list) ||
                        void 0 === l
                          ? void 0
                          : l.list;
                    i && _(r, !0);
                  }
                },
                onError: function (e) {
                  ne(e) && k(), console.log(e);
                },
              }
            ),
            U = Object(f.jsxs)(c.Fragment, {
              children: [
                Object(f.jsx)("div", {
                  className: "fixed-top flex-center",
                  children: Object(f.jsx)(Fn, {}),
                }),
                Object(f.jsx)(be, {thin: !0, fullScreen: !0}),
                Object(f.jsxs)("div", {
                  className: "skeleton-song-page",
                  children: [
                    Object(f.jsx)("div", {
                      className: "flex-align skeleton-song-page-thumbnail",
                      children: Object(f.jsx)(Bn.a, {
                        className: "skeleton-bg skeleton-thumbnail-box",
                        animation: "wave",
                      }),
                    }),
                    Object(f.jsxs)("div", {
                      className: "mg-t-4 skeleton-song-page-tabs",
                      children: [
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: "wave",
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                        Object(f.jsx)(Bn.a, {
                          animation: !1,
                          className: "skeleton skeleton-bg",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          T &&
            A &&
            (ne(A) && k(),
            (U = Object(f.jsx)("p", {
              className: "centered capitalize text-medium "
                .concat(Tl.a.song, " mg-t-1 ")
                .concat(r ? Tl.a["song-page-full"] : Tl.a["song-page-close"]),
              children: (null === A || void 0 === A ? void 0 : A.message)
                ? A.message
                : "No data found.",
            })));
          var V =
            (null === M ||
            void 0 === M ||
            null === (t = M.next_songs) ||
            void 0 === t ||
            null === (n = t.list) ||
            void 0 === n
              ? void 0
              : n.playlistId) ||
            (null === M ||
            void 0 === M ||
            null === (a = M.currentVideoEndpoint) ||
            void 0 === a
              ? void 0
              : a.playlistId);
          Object(c.useEffect)(
            function () {
              if (R && M && Object.keys(M).length > 0) {
                var e,
                  t =
                    (null === j || void 0 === j ? void 0 : j.length) > 0 &&
                    (null === j ||
                    void 0 === j ||
                    null === (e = j[j.length - 1]) ||
                    void 0 === e
                      ? void 0
                      : e.videoId);
                if (
                  (null === j || void 0 === j ? void 0 : j.length) > 1 &&
                  t === E &&
                  w
                )
                  return (
                    H.mutate({
                      url: "https://soundrex.onrender.com/api/v1/audio/next"
                        .concat(E ? "?id=".concat(E) : "")
                        .concat(
                          P
                            ? ""
                                .concat(E ? "&" : "?", "playlistId=")
                                .concat(P)
                                .concat(
                                  v
                                    ? ""
                                        .concat(E || P ? "&" : "?", "params=")
                                        .concat(v)
                                    : ""
                                )
                            : ""
                        )
                        .concat(w ? "&continuation=".concat(w) : ""),
                      method: "GET",
                      headers: {authorization: "Bearer " + i},
                    }),
                    C(null)
                  );
              }
            },
            [u, i, E, w]
          ),
            Object(c.useEffect)(
              function () {
                if (R && M && Object.keys(M).length > 0) {
                  var e,
                    t,
                    n,
                    a,
                    o,
                    l,
                    r,
                    s,
                    c,
                    u,
                    d,
                    v,
                    m,
                    h,
                    b =
                      (null === M ||
                      void 0 === M ||
                      null === (e = M.next_songs) ||
                      void 0 === e ||
                      null === (t = e.list) ||
                      void 0 === t ||
                      null === (n = t.list) ||
                      void 0 === n
                        ? void 0
                        : n.length) > 0,
                    p =
                      null === M ||
                      void 0 === M ||
                      null === (a = M.next_songs) ||
                      void 0 === a ||
                      null === (o = a.list) ||
                      void 0 === o
                        ? void 0
                        : o.list;
                  b && O(p);
                  null === M ||
                    void 0 === M ||
                    null === (l = M.next_songs) ||
                    void 0 === l ||
                    null === (r = l.list) ||
                    void 0 === r ||
                    null === (s = r.next) ||
                    void 0 === s ||
                    null === (c = s.continuation) ||
                    void 0 === c ||
                    c.length;
                  var f =
                    null === M ||
                    void 0 === M ||
                    null === (u = M.next_songs) ||
                    void 0 === u ||
                    null === (d = u.list) ||
                    void 0 === d ||
                    null === (v = d.next) ||
                    void 0 === v
                      ? void 0
                      : v.continuation;
                  f && C(f);
                  var g =
                    null === M ||
                    void 0 === M ||
                    null === (m = M.next_songs) ||
                    void 0 === m ||
                    null === (h = m.list) ||
                    void 0 === h
                      ? void 0
                      : h.playlist;
                  if (
                    g &&
                    (null === p || void 0 === p ? void 0 : p.length) <= 5
                  ) {
                    var j = null === g || void 0 === g ? void 0 : g.videoId,
                      x = null === g || void 0 === g ? void 0 : g.playlistId,
                      y = null === g || void 0 === g ? void 0 : g.params;
                    return F.mutate({
                      url: "https://soundrex.onrender.com/api/v1/audio/next"
                        .concat(j ? "?id=".concat(j) : "")
                        .concat(
                          x
                            ? ""
                                .concat(j ? "&" : "?", "playlistId=")
                                .concat(x)
                                .concat(
                                  y
                                    ? ""
                                        .concat(j || x ? "&" : "?", "params=")
                                        .concat(y)
                                    : ""
                                )
                            : ""
                        ),
                      method: "GET",
                      headers: {authorization: "Bearer " + i},
                    });
                  }
                }
              },
              [R, V, O]
            );
          var z,
            W =
              (null === M ||
              void 0 === M ||
              null === (o = M.selectedSong) ||
              void 0 === o
                ? void 0
                : o.videoId) ||
              (null === M ||
              void 0 === M ||
              null === (l = M.currentVideoEndpoint) ||
              void 0 === l
                ? void 0
                : l.videoId);
          if (
            (Object(c.useEffect)(
              function () {
                if (S.pathname.startsWith("/play"))
                  if (!P && E) {
                    var e,
                      t = E,
                      n = t ? "&" : "?";
                    if (
                      (e = t && "RDAMVM".concat(t)) &&
                      (p(),
                      N.replace(
                        "/play"
                          .concat(t ? "?id=".concat(t) : "")
                          .concat((e && n + "list=".concat(e)) || "")
                      ),
                      I !== V)
                    )
                      return console.log("Cleaning queue", I, V), O([]);
                  } else if (!E && P) {
                    var a = P && P.replace("RDAMVM", "").trim(),
                      o = W;
                    if (
                      !o &&
                      (P.startsWith("RDAMPL") ||
                        P.startsWith("RDAO") ||
                        P.startsWith("OLA") ||
                        P.startsWith("PL") ||
                        P.startsWith("RD"))
                    )
                      return (
                        0 !== u && h(0),
                        (null === j || void 0 === j ? void 0 : j.length) > 0 &&
                          O([]),
                        void (v && m(""))
                      );
                    if (o)
                      return N.replace(
                        "/play?id=".concat(o, "&list=").concat(P)
                      );
                    if (a)
                      return N.replace(
                        "/play?id=".concat(a, "&list=").concat(P)
                      );
                  }
              },
              [E, P, S, W, O, N, p]
            ),
            R)
          )
            if (M && Object.keys(M).length > 0) {
              if (
                ((U = Object(f.jsx)($l, {
                  logout: k,
                  data: M,
                  VID_PARAM: E,
                  PLAYLIST_PARAM: P,
                  isFetching: B,
                  isPlayerPageOpen: r,
                  changeCurrentSong: s,
                  currentSongIndex: u,
                  setCurrentSongIndex: h,
                  changeParam: m,
                  playerState: g || "loading",
                  openPlayer: b,
                  upNextSongsList: j,
                })),
                !(null === j || void 0 === j ? void 0 : j.length) > 0 &&
                  !D &&
                  !B &&
                  (null === M ||
                  void 0 === M ||
                  null === (z = M.message) ||
                  void 0 === z
                    ? void 0
                    : z.includes("list is empty")))
              ) {
                var G = P && P.replace("RDAMVM", "").trim();
                U = Object(f.jsxs)("div", {
                  className: ""
                    .concat(Tl.a.song, " mg-t-1 ")
                    .concat(
                      r ? Tl.a["song-page-full"] : Tl.a["song-page-close"]
                    ),
                  children: [
                    Object(f.jsx)("p", {
                      className: "centered capitalize text-medium ",
                      children: "Up next list is empty.",
                    }),
                    Object(f.jsx)("div", {
                      className: "flex-center full-hw ",
                      children:
                        E &&
                        G !== E &&
                        Object(f.jsx)(Je, {
                          className: "fix-playlist-button ",
                          link: "/play?id=".concat(E, "&list=RDAMVM").concat(E),
                          children: "Fix list",
                        }),
                    }),
                  ],
                });
              }
            } else
              U = Object(f.jsx)("p", {
                className: "centered capitalize text-medium "
                  .concat(Tl.a.song, " mg-t-1 ")
                  .concat(r ? Tl.a["song-page-full"] : Tl.a["song-page-close"]),
                children: "No data found.",
              });
          return U;
        },
        ni = n(78),
        ai = n.n(ni),
        oi = (n(308), ["title", "titleId"]);
      function li() {
        return (
          (li =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          li.apply(this, arguments)
        );
      }
      function ii(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function ri(e, t) {
        var n = e.title,
          a = e.titleId,
          o = ii(e, oi);
        return c.createElement(
          "svg",
          li(
            {
              "width": 12,
              "height": 14,
              "viewBox": "0 0 12 14",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          ei ||
            (ei = c.createElement("path", {
              d: "M0 14H4V0H0V14ZM8 0V14H12V0H8Z",
              fill: "white",
            }))
        );
      }
      var si,
        ci = c.forwardRef(ri),
        ui = (n.p, ["title", "titleId"]);
      function di() {
        return (
          (di =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          di.apply(this, arguments)
        );
      }
      function vi(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function mi(e, t) {
        var n = e.title,
          a = e.titleId,
          o = vi(e, ui);
        return c.createElement(
          "svg",
          di(
            {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          si ||
            (si = c.createElement("polygon", {
              points: "21.57 12 5.98 3 5.98 21 21.57 12",
              fill: "#fff",
            }))
        );
      }
      var hi,
        bi = c.forwardRef(mi),
        pi = (n.p, ["title", "titleId"]);
      function fi() {
        return (
          (fi =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          fi.apply(this, arguments)
        );
      }
      function gi(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function ji(e, t) {
        var n = e.title,
          a = e.titleId,
          o = gi(e, pi);
        return c.createElement(
          "svg",
          fi(
            {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          hi ||
            (hi = c.createElement("path", {
              d: "M12 12H10.6667V4H12L12 12ZM9.66667 8L4 4L4 12L9.66667 8Z",
              fill: "white",
            }))
        );
      }
      var Oi,
        xi = c.forwardRef(ji),
        yi = (n.p, ["title", "titleId"]);
      function _i() {
        return (
          (_i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          _i.apply(this, arguments)
        );
      }
      function wi(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Ci(e, t) {
        var n = e.title,
          a = e.titleId,
          o = wi(e, yi);
        return c.createElement(
          "svg",
          _i(
            {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Oi ||
            (Oi = c.createElement("path", {
              d: "M4 4H5.33333V12H4V4ZM6.33333 8L12 12V4L6.33333 8Z",
              fill: "white",
            }))
        );
      }
      var ki,
        Ni = c.forwardRef(Ci),
        Si = (n.p, ["title", "titleId"]);
      function Ei() {
        return (
          (Ei =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Ei.apply(this, arguments)
        );
      }
      function Pi(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Ii(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Pi(e, Si);
        return c.createElement(
          "svg",
          Ei(
            {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          ki ||
            (ki = c.createElement("path", {
              d: "M13 6v12l8.5-6M4 18l8.5-6L4 6v12z",
              fill: "currentColor",
            }))
        );
      }
      var Li,
        Mi = c.forwardRef(Ii),
        Ai = (n.p, ["title", "titleId"]);
      function Ti() {
        return (
          (Ti =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Ti.apply(this, arguments)
        );
      }
      function Ri(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Bi(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Ri(e, Ai);
        return c.createElement(
          "svg",
          Ti(
            {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "style": {transform: "rotate(360deg)"},
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Li ||
            (Li = c.createElement("path", {
              d: "M11.5 12l8.5 6V6m-9 12V6l-8.5 6l8.5 6z",
              fill: "currentColor",
            }))
        );
      }
      var Di,
        Fi = c.forwardRef(Bi),
        Hi = (n.p, ["title", "titleId"]);
      function Ui() {
        return (
          (Ui =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          Ui.apply(this, arguments)
        );
      }
      function Vi(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function zi(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Vi(e, Hi);
        return c.createElement(
          "svg",
          Ui(
            {
              "width": 24,
              "height": 24,
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Di ||
            (Di = c.createElement("path", {
              d: "M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM13.2 18H10.8V15.6H13.2V18ZM13.2 13.2H10.8V6H13.2V13.2Z",
              fill: "white",
              fillOpacity: 0.501961,
            }))
        );
      }
      var Wi,
        Gi = c.forwardRef(zi),
        Zi = (n.p, ["title", "titleId"]);
      function qi() {
        return (
          (qi =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          qi.apply(this, arguments)
        );
      }
      function Yi(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Xi(e, t) {
        var n = e.title,
          a = e.titleId,
          o = Yi(e, Zi);
        return c.createElement(
          "svg",
          qi(
            {
              "focusable": "false",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "ref": t,
              "aria-labelledby": a,
            },
            o
          ),
          n ? c.createElement("title", {id: a}, n) : null,
          Wi ||
            (Wi = c.createElement("path", {
              d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
            }))
        );
      }
      var Qi = c.forwardRef(Xi),
        Ji = (n.p, n(215)),
        Ki = n.n(Ji),
        $i = n(59),
        er = n.n($i);
      var tr = function (e) {
          var t,
            n,
            a,
            o,
            l = e.song,
            i = e.videoId,
            r = e.LikeBtn,
            s =
              ((null === l || void 0 === l ? void 0 : l.title) ||
                (null === l ||
                void 0 === l ||
                null === (t = l.title) ||
                void 0 === t
                  ? void 0
                  : t.length) > 0) &&
              ut(l.title),
            c =
              ((null === l || void 0 === l ? void 0 : l.longBylineText) ||
                (null === l ||
                void 0 === l ||
                null === (n = l.longBylineText) ||
                void 0 === n
                  ? void 0
                  : n.length) > 0) &&
              ut(l.longBylineText, "card-link"),
            u =
              (null === l ||
              void 0 === l ||
              null === (a = l.thumbnails) ||
              void 0 === a
                ? void 0
                : a.length) > 0 && l.thumbnails,
            d = Boolean(i);
          return Object(f.jsxs)("div", {
            className: er.a["player-song-data"],
            children: [
              u &&
                Object(f.jsx)("div", {
                  className: er.a["player-song-thumbnail-container"],
                  children: Object(f.jsx)(rt, {
                    alt: "",
                    className: er.a["player-song-thumbnail"],
                    src:
                      null === (o = u[u.length - 1]) || void 0 === o
                        ? void 0
                        : o.url,
                    sources: u,
                  }),
                }),
              Object(f.jsxs)("div", {
                className: er.a["player-song-text"],
                children: [
                  s &&
                    Object(f.jsx)("div", {
                      className: "white ".concat(er.a["player-song-title"]),
                      children: s,
                    }),
                  c &&
                    Object(f.jsx)("div", {
                      className: "gray ".concat(er.a["player-song-subtitle"]),
                      children: c,
                    }),
                ],
              }),
              d &&
                Object(f.jsx)("div", {
                  id: "like-song",
                  className: er.a.like,
                  children: r,
                }),
            ],
          });
        },
        nr = n(108),
        ar = n.n(nr);
      var or = function (e) {
        var t = e.isPlayerPageOpen,
          n = e.togglePlayerPage,
          a = e.url;
        return Object(f.jsx)("div", {
          className: ar.a["toggle-player-page-button-container"],
          children: Object(f.jsx)("div", {
            className: ""
              .concat(!t && ar.a["toggle-player-page-button-rotate"], " ")
              .concat(ar.a["toggle-player-page-button"]),
            onClick: n.bind(null, a),
            children: Object(f.jsx)(z, {
              svg: "down-arrow-mini",
              alt: t ? "close player page" : "open player page",
              className: ar.a["toggle-player-page-button-icon"],
            }),
          }),
        });
      };
      function lr(e) {
        var t = e.text;
        return Object(f.jsx)("p", {
          className: "white position-center link-large player-error-text",
          children: t,
        });
      }
      var ir = function (e) {
        var t,
          n,
          a,
          o,
          l,
          i,
          r = e.showQueueButtons,
          u = e.token,
          d = e.song,
          v = e.previousPage,
          m = e.changePlayerState,
          h = e.isPlayerPageOpen,
          p = e.togglePlayerPage,
          g = e.currentSongIndex,
          j = e.changeCurrentSong,
          O = e.upNextSongs,
          x = void 0 === O ? [] : O,
          y = e.changeToNextSongIndex,
          _ = e.changeToPreviousSongIndex,
          w = e.setIsAudioServerCrashed,
          C = e.setToastPosition,
          k = e.addToFavouritesHandler,
          N = e.removeFromFavouritesHandler,
          S = e.logout,
          E = Object(c.useState)(!1),
          P = Object(s.a)(E, 2),
          I = P[0],
          L = P[1],
          M = Object(c.useState)(!1),
          A = Object(s.a)(M, 2),
          T = A[0],
          R = A[1],
          B = localStorage.getItem("volume") || 0.65,
          D = Object(c.useState)(B),
          F = Object(s.a)(D, 2),
          H = F[0],
          U = F[1],
          V = Object(c.useState)(!1),
          W = Object(s.a)(V, 2),
          G = W[0],
          Z = W[1],
          q = null === d || void 0 === d ? void 0 : d.videoId,
          X = null === d || void 0 === d ? void 0 : d.playlistId,
          Q = (function (e) {
            return "https://soundrex.onrender.com/api/v1/audio?id=".concat(e);
          })(q);
        Object(c.useEffect)(
          function () {
            return (
              C("top-center"),
              function () {
                C("bottom-center");
              }
            );
          },
          [C]
        );
        var J = Object(Y.useQuery)(
            ["soundrex", q],
            function () {
              return te(
                {
                  url: "https://soundrex.onrender.com/soundrex/is-liked",
                  method: "POST",
                  headers: {authorization: "Bearer " + u},
                  data: {id: q},
                },
                !1,
                !1,
                !1,
                null,
                null
              );
            },
            {}
          ),
          K = J.data,
          $ = J.error,
          ee = J.isError,
          ae = J.isSuccess,
          oe = Object(f.jsx)("div", {
            className: "flex-center",
            children: Object(f.jsx)(be, {}),
          });
        ee && $ && (ne($) && S(), (oe = Object(f.jsx)("span", {})));
        var le =
            (null === d ||
            void 0 === d ||
            null === (t = d.title) ||
            void 0 === t
              ? void 0
              : t.length) > 0 &&
            dt(null === d || void 0 === d ? void 0 : d.title),
          ie =
            ((null === d ||
            void 0 === d ||
            null === (n = d.thumbnails) ||
            void 0 === n
              ? void 0
              : n.length) > 0 &&
              (null === d ||
              void 0 === d ||
              null === (a = d.thumbnails) ||
              void 0 === a ||
              null === (o = a[0]) ||
              void 0 === o
                ? void 0
                : o.url)) ||
            "https://i.ytimg.com/vi/".concat(q, "/hqdefault.jpg"),
          re = Object(c.useCallback)(
            function () {
              return G
                ? N(
                    q,
                    function () {
                      return Z("loading");
                    },
                    function () {
                      return Z(!1);
                    },
                    function () {
                      return Z(!0);
                    }
                  )
                : k(
                    {videoId: q, id: q, title: le, thumbnail: ie},
                    function () {
                      return Z("loading");
                    },
                    function () {
                      return Z(!0);
                    },
                    function () {
                      return Z(!1);
                    }
                  );
            },
            [G, q, le, ie, k, N]
          );
        Object(c.useEffect)(
          function () {
            ae && K && Z(null === K || void 0 === K ? void 0 : K.isLiked);
          },
          [ae, K, q]
        ),
          ae &&
            (oe = K
              ? "loading" === G
                ? Object(f.jsx)(be, {})
                : Object(f.jsx)(z, {
                    liked: G,
                    onClick: re,
                    svg: G ? "heart" : "heart-outline",
                    alt: "Like song",
                    className: "".concat(er.a["like-icon"]),
                  })
              : Object(f.jsx)("span", {}));
        var se = {
            next: Object(f.jsx)(xi, {title: "next"}),
            previous: Object(f.jsx)(Ni, {title: "previous"}),
            forward: Object(f.jsx)(Mi, {title: "forward"}),
            rewind: Object(f.jsx)(Fi, {title: "rewind"}),
          },
          ce = Object(c.useState)(
            Object(b.a)(
              {
                play: Object(f.jsx)(bi, {title: "Play"}),
                pause: Object(f.jsx)(ci, {title: "Pause"}),
              },
              se
            )
          ),
          ue = Object(s.a)(ce, 2),
          de = ue[0],
          ve = ue[1];
        Object(c.useEffect)(
          function () {
            return T
              ? ((d.error = d.hasOwnProperty("error") ? d.error + 1 : 1),
                ve(
                  Object(b.a)(
                    {
                      play: Object(f.jsx)(Gi, {title: "Unable to play audio"}),
                      pause: Object(f.jsx)(Gi, {title: "Unable to play audio"}),
                    },
                    se
                  )
                ),
                void (
                  x.reduce(function (e, t) {
                    return e + t.error || 0;
                  }, 0) /
                    (null === x || void 0 === x ? void 0 : x.length) >=
                    1 && w(!0)
                ))
              : I
              ? (m("playing"),
                ve(
                  Object(b.a)(
                    {
                      play: Object(f.jsx)(bi, {title: "Play"}),
                      pause: Object(f.jsx)(ci, {title: "Pause"}),
                    },
                    se
                  )
                ))
              : void (
                  I ||
                  T ||
                  ve(
                    Object(b.a)(
                      {
                        play: Object(f.jsx)(be, {
                          title: "Loading...",
                          style: {
                            color: "#909090",
                            width: "min-content",
                            height: "min-content",
                            cursor: "progress",
                          },
                        }),
                        pause: Object(f.jsx)(be, {
                          title: "Loading...",
                          style: {
                            color: "#909090",
                            width: "min-content",
                            height: "min-content",
                            cursor: "progress",
                          },
                        }),
                      },
                      se
                    )
                  )
                );
          },
          [I, T, w, d, x]
        );
        var me = function () {
          y();
        };
        Object(c.useEffect)(
          function () {
            var e = x.find(function (e) {
              return (null === e || void 0 === e ? void 0 : e.index) === g;
            });
            null != e ? j(e) : L(!1);
          },
          [g, j, x]
        );
        var he = "/play?id=".concat(
            q,
            "".concat(X && "".concat(q ? "&" : "?", "list=").concat(X))
          ),
          pe =
            ((null === d || void 0 === d ? void 0 : d.title) ||
              (null === d ||
              void 0 === d ||
              null === (l = d.title) ||
              void 0 === l
                ? void 0
                : l.length) > 0) &&
            vt(d.title);
        return Object(f.jsx)(c.Fragment, {
          children: Object(f.jsx)(ai.a, {
            volume: H,
            showSkipControls: !Boolean(T) && Boolean(r),
            showJumpControls: !Boolean(T),
            showFilledVolume: !Boolean(T),
            showDownloadProgress: !Boolean(T),
            showFilledProgress: !Boolean(T),
            customIcons: de,
            onClickNext: function () {
              setTimeout(function () {
                me();
              }, 1500);
            },
            onClickPrevious: function () {
              setTimeout(function () {
                _();
              }, 1500);
            },
            onLoadStart: function (e) {
              B && U(Number(B)), L(!1), R(!1), m("loading");
            },
            onLoadedMetaData: function (e) {
              m("playing"), L(!0);
            },
            onLoadedData: function (e) {
              m("playing"), L(!0);
            },
            onVolumeChange: function (e) {
              var t = e.target.volume;
              localStorage.setItem("volume", t), U(t);
            },
            onError: function (e) {
              L(!1),
                R(e.target.error),
                setTimeout(function () {
                  me();
                }, 2500),
                m("error");
            },
            onPlayError: function (e) {},
            onEnded: function (e) {
              return me();
            },
            onPlay: function (e) {
              console.log("onPlay"), I && m("playing");
            },
            onPlaying: function (e) {
              console.log("onPlaying"), I && m("playing");
            },
            onPause: function (e) {},
            className: "music-player ".concat(
              T ? "disable-all ".concat(Ki.a["error-overlay"]) : ""
            ),
            autoPlay: !0,
            src: Q,
            customProgressBarSection: [ni.RHAP_UI.PROGRESS_BAR],
            customControlsSection: [
              ni.RHAP_UI.MAIN_CONTROLS,
              ni.RHAP_UI.CURRENT_TIME,
              Object(f.jsx)("div", {
                className: "rhap_time rhap_time-divider",
                children: "/",
              }),
              ni.RHAP_UI.DURATION,
              Object(f.jsx)(tr, {LikeBtn: oe, song: d, videoId: q}),
              Object(f.jsx)("input", {
                type: "checkbox",
                className: "music-player-more-options",
              }),
              Object(f.jsx)("a", {
                id: "download-audio",
                href:
                  pe &&
                  q &&
                  "https://soundrex.onrender.com/api/v1/audio-download?id="
                    .concat(q, "&title=")
                    .concat(
                      null === pe ||
                        void 0 === pe ||
                        null === (i = pe.replace(/[^a-zA-Z ]/g, "")) ||
                        void 0 === i
                        ? void 0
                        : i.replace(" ", "+")
                    ),
                target: "_blank",
                download: !0,
                rel: "noreferrer",
                children: Object(f.jsx)(Qi, {}),
              }),
              Object(f.jsx)("p", {
                className: "music-player-more-options-like-button",
                children: oe,
              }),
              ni.RHAP_UI.VOLUME_CONTROLS,
              Object(f.jsx)(or, {
                isPlayerPageOpen: h,
                togglePlayerPage: p,
                previousPage: v,
                url: he,
              }),
              T &&
                Object(f.jsx)(lr, {
                  text: (null === T || void 0 === T ? void 0 : T.message)
                    ? T.message
                    : "ERROR: Unable to play audio track.",
                }),
            ],
          }),
        });
      };
      var rr = function (e) {
          var t = e.previousPageUrl,
            n = e.token,
            a = e.setToastPosition,
            o = e.addToFavouritesHandler,
            l = e.removeFromFavouritesHandler,
            i = e.logout,
            r = Object(c.useContext)(p),
            s = Object(d.g)(),
            u = Object(d.h)(),
            m = r.isPlayerOpen,
            h = r.isPlayerPageOpen,
            b = r.playerState,
            g = r.upNextSongs,
            j = r.currentSong,
            O = r.currentSongIndex,
            x = r.currentSongParam,
            y = r.renderSongPage,
            _ = r.openPlayer,
            w = r.closePlayer,
            C = r.changePlayerState,
            k = r.setUpNextSongs,
            N = r.setIsPlayerPageOpen,
            S = r.changeCurrentSong,
            E = r.changeToNextSongIndex,
            P = r.changeToPreviousSongIndex,
            I = r.setCurrentSongIndex,
            L = r.setCurrentSongParam,
            M = r.isAudioServerCrashed,
            A = r.setIsAudioServerCrashed,
            T = r.addToEndOfNextSongs,
            R = r.addToNextOfNextSongs,
            B = r.nextListContinuation,
            D = r.setNextListContinuation;
          Object(c.useEffect)(
            function () {
              u.pathname.startsWith("/play") ? N(!0) : N(!1);
            },
            [u, N]
          );
          var F = Object(c.useCallback)(
            function (e) {
              var n = !h;
              if ((N(n), n)) s.push(e);
              else {
                var a = t.startsWith("/play") || !t ? "/home" : t;
                s.push(a);
              }
              return n;
            },
            [h, N, s, t]
          );
          return (
            M && v.b.error("too many errors.", {theme: "dark"}),
            Object(f.jsxs)(c.Fragment, {
              children: [
                y &&
                  Object(f.jsx)(ti, {
                    logout: i,
                    token: n,
                    isPlayerPageOpen: h,
                    changeCurrentSong: S,
                    currentSongIndex: O,
                    setCurrentSongIndex: I,
                    currentSongParam: x,
                    setCurrentSongParam: L,
                    openPlayer: _,
                    closePlayer: w,
                    playerState: b,
                    upNextSongs: g,
                    setUpNextSongs: k,
                    setIsAudioServerCrashed: A,
                    addToEndOfNextSongs: T,
                    addToNextOfNextSongs: R,
                    nextListContinuation: B,
                    setNextListContinuation: D,
                  }),
                m &&
                  j &&
                  !M &&
                  Object(f.jsx)(ir, {
                    logout: i,
                    showQueueButtons:
                      (null === g || void 0 === g ? void 0 : g.length) > 1,
                    token: n,
                    changeToNextSongIndex: E,
                    changeToPreviousSongIndex: P,
                    song: j,
                    previousPage: t,
                    changePlayerState: C,
                    isPlayerPageOpen: h,
                    togglePlayerPage: F,
                    currentSongIndex: O,
                    setCurrentSongIndex: I,
                    changeCurrentSong: S,
                    upNextSongs: g,
                    setIsAudioServerCrashed: A,
                    setToastPosition: a,
                    addToFavouritesHandler: o,
                    removeFromFavouritesHandler: l,
                  }),
              ],
            })
          );
        },
        sr = function () {
          var e = Object(c.useRef)(),
            t = Object(c.useState)(null),
            n = Object(s.a)(t, 2),
            a = n[0],
            o = n[1],
            l = Object(c.useState)(null),
            u = Object(s.a)(l, 2),
            h = u[0],
            b = u[1],
            p = Object(c.useState)("bottom-center"),
            g = Object(s.a)(p, 2),
            j = g[0],
            x = g[1],
            y = Object(c.useState)(!1),
            w = Object(s.a)(y, 2),
            C = w[0],
            k = w[1],
            N = Object(d.h)(),
            E = Object(d.g)(),
            P = Object(c.useContext)(m),
            I = P.token,
            M = P.isAuth,
            A = P.login,
            T = P.logout,
            R = P.authLoading,
            B = P.editAuthConf,
            D = P.setIsAuthLoading,
            F = P.setAutoLogout,
            H = P.initLibrary,
            U = P.addToFavouritesHandler,
            V = P.removeFromFavouritesHandler,
            z = P.topBoxMessage,
            W = P.setTopBoxMessage;
          return (
            Object(c.useEffect)(
              function () {
                E.listen(function (e) {
                  e.pathname.startsWith("/play") || o(e.pathname + e.search);
                });
              },
              [E]
            ),
            Object(c.useEffect)(function () {
              o(N.pathname + N.search);
            }, []),
            Object(c.useEffect)(function () {
              var e = (function () {
                  var e = Object(r.a)(
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), k(!1), (e.next = 4), A();
                              case 4:
                                k(!0), (e.next = 11);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(0)),
                                  k(!0),
                                  console.log("Not authenticated", e.t0);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                t =
                  N.pathname.includes("/login") ||
                  N.pathname.includes("/signup");
              b((t ? "/home" : N.pathname) + (t ? "" : N.search)), e();
            }, []),
            Object(f.jsxs)(_, {
              ref: e,
              children: [
                Object(f.jsxs)(d.d, {
                  children: [
                    M && Object(f.jsx)(d.a, {to: h || "/home"}),
                    Object(f.jsx)(d.b, {
                      path: "/signup",
                      children: Object(f.jsx)(kl, {
                        authLoading: R,
                        editAuthConf: B,
                        setAuthLoading: D,
                        topBoxMessage: z,
                        setTopBoxMessage: W,
                      }),
                    }),
                    Object(f.jsx)(d.b, {
                      path: "/login",
                      children: Object(f.jsx)(Sl, {
                        authLoading: R,
                        editAuthConf: B,
                        setAuthLoading: D,
                        setAutoLogout: F,
                        topBoxMessage: z,
                        setTopBoxMessage: W,
                      }),
                    }),
                  ],
                }),
                M &&
                  Object(f.jsxs)(c.Fragment, {
                    children: [
                      Object(f.jsx)(S, {
                        children: Object(f.jsx)(Rn, {
                          logout: T,
                          previousPageUrl: a,
                        }),
                      }),
                      Object(f.jsx)(L, {
                        children: Object(f.jsxs)(O, {
                          children: [
                            Object(f.jsxs)(d.d, {
                              children: [
                                Object(f.jsx)(d.a, {
                                  exact: !0,
                                  to: "/home",
                                  from: "/",
                                }),
                                Object(f.jsx)(d.b, {
                                  path: "/home",
                                  children: Object(f.jsx)(to, {
                                    logout: T,
                                    token: I,
                                    rootElementRef: e,
                                  }),
                                }),
                                Object(f.jsx)(d.b, {
                                  path: "/favourites",
                                  children: Object(f.jsx)(Go, {
                                    logout: T,
                                    removeFromFavouritesHandler: V,
                                    initLibrary: H,
                                    token: I,
                                    rootElementRef: e,
                                  }),
                                }),
                                Object(f.jsx)(d.b, {
                                  path: "/genres",
                                  children: Object(f.jsx)(io, {
                                    logout: T,
                                    token: I,
                                    rootElementRef: e,
                                  }),
                                }),
                                Object(f.jsx)(d.a, {
                                  exact: !0,
                                  path: "/search/:searchQuery",
                                  to: "/search/:searchQuery/songs",
                                }),
                                Object(f.jsx)(d.b, {
                                  path: "/search/:searchQuery/:searchTerm",
                                  children: Object(f.jsx)(fo, {
                                    logout: T,
                                    token: I,
                                    rootElementRef: e,
                                  }),
                                }),
                                Object(f.jsx)(d.b, {
                                  path: "/browse/:browseId",
                                  children: Object(f.jsx)(Ho, {
                                    logout: T,
                                    addToFavouritesHandler: U,
                                    removeFromFavouritesHandler: V,
                                    token: I,
                                    rootElementRef: e,
                                  }),
                                }),
                              ],
                            }),
                            Object(f.jsx)(d.b, {
                              path: "/play",
                              children: Object(f.jsx)(Uo, {rootElementRef: e}),
                            }),
                            Object(f.jsx)(rr, {
                              logout: T,
                              addToFavouritesHandler: U,
                              removeFromFavouritesHandler: V,
                              setToastPosition: x,
                              token: I,
                              previousPageUrl: a,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                !M && Object(f.jsx)(d.a, {from: "*", to: "/login"}),
                Object(f.jsx)(at, {
                  notCloseable: !0,
                  autoClose: C,
                  content: Object(f.jsx)(c.Fragment, {
                    children: Object(f.jsxs)("p", {
                      className: "link-large flex-center mg-t-3",
                      children: [
                        "Logging in",
                        Object(f.jsx)(be, {className: "mg-l-2"}),
                      ],
                    }),
                  }),
                }),
                Object(f.jsx)(v.a, {
                  limit: 4,
                  position: j,
                  autoClose: 2e3,
                  hideProgressBar: !0,
                  newestOnTop: !0,
                  closeOnClick: !0,
                  pauseOnHover: !1,
                  rtl: !1,
                  draggable: !0,
                }),
              ],
            })
          );
        },
        cr =
          (n(309),
          Boolean(
            "localhost" === window.location.hostname ||
              "[::1]" === window.location.hostname ||
              window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
              )
          ));
      function ur(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function () {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var dr = {
          isAuth: !1,
          token: null,
          authLoading: !1,
          userId: null,
          library: [],
          username: null,
          topBoxMessage: null,
        },
        vr = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {INITIAL_STATE: dr},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            a = t.value;
          switch (n) {
            case "EDIT":
              return Object(b.a)(Object(b.a)({}, e), a);
            case "ISAUTH":
              return Object(b.a)(Object(b.a)({}, e), {}, {isAuth: a});
            case "TOKEN":
              return Object(b.a)(Object(b.a)({}, e), {}, {token: a});
            case "AUTHLOADING":
              return Object(b.a)(Object(b.a)({}, e), {}, {authLoading: a});
            case "USERID":
              return Object(b.a)(Object(b.a)({}, e), {}, {userId: a});
            case "LIBRARY":
              return Object(b.a)(Object(b.a)({}, e), {}, {library: a});
            case "PUSH_LIBRARY":
              var o = a.id,
                l = Object(h.a)(e.library),
                i = l.find(function (e) {
                  return e._id === o;
                });
              return (
                i || l.push(a),
                Object(b.a)(Object(b.a)({}, e), {}, {library: l})
              );
            case "PULL_LIBRARY":
              var r = a,
                s = e.library.filter(function (e) {
                  return e._id !== r;
                });
              return Object(b.a)(Object(b.a)({}, e), {}, {library: s});
            case "TOP_BOX_MSG":
              return Object(b.a)(Object(b.a)({}, e), {}, {topBoxMessage: a});
            default:
              return e;
          }
        },
        mr = {theme: "colored"};
      var hr = function (e) {
          var t = e.children,
            n = Object(c.useReducer)(vr, dr),
            a = Object(s.a)(n, 2),
            o = a[0],
            l = a[1],
            u = o.isAuth,
            d = o.token,
            h = o.authLoading,
            p = o.userId,
            g = o.library,
            j = o.username,
            O = o.topBoxMessage,
            x = Object(c.useCallback)(
              function (e) {
                return l({type: "TOP_BOX_MSG", value: e});
              },
              [l]
            ),
            y = Object(c.useCallback)(
              function (e) {
                return l({type: "EDIT", value: e});
              },
              [l]
            ),
            _ = Object(c.useCallback)(
              function (e) {
                l({type: "ISAUTH", value: e});
              },
              [l]
            ),
            w = Object(c.useCallback)(
              function (e) {
                l({type: "TOKEN", value: e});
              },
              [l]
            ),
            C = Object(c.useCallback)(
              function (e) {
                l({type: "AUTHLOADING", value: e});
              },
              [l]
            ),
            k = Object(c.useCallback)(
              function (e) {
                l({type: "USERID", value: e});
              },
              [l]
            ),
            N = (function () {
              var e = Object(r.a)(
                i.a.mark(function e() {
                  var t, n, a, o, l, r, s, c, u, d, m, h, p, f, g;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (x(null),
                              (e.prev = 1),
                              (t = localStorage.getItem("token")),
                              (n = localStorage.getItem("expiryDate")),
                              t && n)
                            ) {
                              e.next = 7;
                              break;
                            }
                            throw (
                              (console.log("Invalid Token OR Expiry date"),
                              new Error("Invalid Token OR Expiry date"))
                            );
                          case 7:
                            if (!(new Date(n) <= new Date())) {
                              e.next = 11;
                              break;
                            }
                            throw (
                              (S(),
                              console.log("Token is not valid"),
                              new Error("Token is not valid"))
                            );
                          case 11:
                            return (
                              (a = {
                                method: "POST",
                                url: "https://soundrex.onrender.com/auth/is-auth",
                                headers: {authorization: "Bearer " + t},
                              }),
                              (e.next = 14),
                              v.b.promise(ee()(a), {
                                success: Object(b.a)(
                                  {
                                    render: function () {
                                      return "Successfully logged in";
                                    },
                                    autoClose: 1e3,
                                  },
                                  mr
                                ),
                                error: Object(b.a)(
                                  {
                                    render: function () {
                                      return "Unable to login";
                                    },
                                    autoClose: 2e3,
                                  },
                                  mr
                                ),
                              })
                            );
                          case 14:
                            (o = e.sent),
                              (l = o.data),
                              (r = localStorage.getItem("userId")),
                              (s =
                                new Date(n).getTime() - new Date().getTime()),
                              y({
                                isAuth: !0,
                                token: t,
                                userId: r,
                                username:
                                  null === l || void 0 === l
                                    ? void 0
                                    : l.username,
                              }),
                              E(s),
                              (e.next = 31);
                            break;
                          case 22:
                            throw (
                              ((e.prev = 22),
                              (e.t0 = e.catch(1)),
                              (m =
                                null === e.t0 ||
                                void 0 === e.t0 ||
                                null === (c = e.t0.response) ||
                                void 0 === c ||
                                null === (u = c.data) ||
                                void 0 === u ||
                                null === (d = u.message) ||
                                void 0 === d
                                  ? void 0
                                  : d.toLowerCase()),
                              (h =
                                (null === m || void 0 === m
                                  ? void 0
                                  : m.includes("invalid")) ||
                                (null === m || void 0 === m
                                  ? void 0
                                  : m.includes("not valid")) ||
                                (null === m || void 0 === m
                                  ? void 0
                                  : m.includes("expired")) ||
                                (null === m || void 0 === m
                                  ? void 0
                                  : m.includes("authenticated"))),
                              (p =
                                null === e.t0 || void 0 === e.t0
                                  ? void 0
                                  : e.t0.message),
                              (f =
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.includes("invalid")) ||
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.includes("not valid")) ||
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.includes("expired")) ||
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.includes("authenticated"))),
                              (g =
                                (h || f) &&
                                "Your session has expired. Please log in again.") &&
                                x(g),
                              e.t0)
                            );
                          case 31:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 22]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            S = Object(c.useCallback)(
              function () {
                y({isAuth: !1, token: null, username: null}),
                  localStorage.removeItem("token"),
                  localStorage.removeItem("expiryDate"),
                  localStorage.removeItem("userId"),
                  v.b.error(
                    "Logged out.",
                    Object(b.a)(
                      {type: "error", isLoading: !1, autoClose: 3e3},
                      mr
                    )
                  ),
                  setTimeout(function () {
                    x("Your session has expired. Please log in again.");
                  }, 2e3);
              },
              [y]
            ),
            E = Object(c.useCallback)(
              function (e) {
                var t = setTimeout(function () {
                  S();
                }, e);
                return function () {
                  clearTimeout(t);
                };
              },
              [S]
            ),
            P = Object(c.useCallback)(
              function (e) {
                l({type: "LIBRARY", value: e});
              },
              [l]
            ),
            I = Object(c.useCallback)(
              function (e) {
                l({type: "PUSH_LIBRARY", value: e});
              },
              [l]
            ),
            L = Object(c.useCallback)(
              function (e) {
                l({type: "PULL_LIBRARY", value: e});
              },
              [l]
            ),
            M = Object(c.useCallback)(
              (function () {
                var e = Object(r.a)(
                  i.a.mark(function e(t, n, a, o) {
                    return i.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                n && n(),
                                (e.next = 4),
                                v.b.promise(
                                  te(
                                    {
                                      url: "https://soundrex.onrender.com/soundrex/like",
                                      method: "POST",
                                      headers: {authorization: "Bearer " + d},
                                      data: t,
                                    },
                                    !1,
                                    !1,
                                    !1,
                                    null,
                                    null
                                  ),
                                  {
                                    pending: {
                                      render: function () {
                                        return "Adding to Favourites.";
                                      },
                                      theme: "dark",
                                    },
                                    success: Object(b.a)(
                                      {
                                        render: function () {
                                          return "Added to Favourites.";
                                        },
                                        autoClose: 1500,
                                      },
                                      mr
                                    ),
                                    error: Object(b.a)(
                                      {
                                        render: function () {
                                          return "Favourites request failed.";
                                        },
                                        autoClose: 1500,
                                      },
                                      mr
                                    ),
                                  }
                                )
                              );
                            case 4:
                              I(t), a && a(), (e.next = 14);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                ne(e.t0) && S(),
                                o && o(),
                                console.log(e.t0);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (t, n, a, o) {
                  return e.apply(this, arguments);
                };
              })(),
              [d, I]
            ),
            A = Object(c.useCallback)(
              (function () {
                var e = Object(r.a)(
                  i.a.mark(function e(t, n, a, o) {
                    var l;
                    return i.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (l = {id: t}),
                                n && n(),
                                (e.next = 5),
                                v.b.promise(
                                  te(
                                    {
                                      url: "https://soundrex.onrender.com/soundrex/remove-like",
                                      method: "POST",
                                      headers: {authorization: "Bearer " + d},
                                      data: l,
                                    },
                                    !1,
                                    !1,
                                    !1,
                                    null,
                                    null
                                  ),
                                  {
                                    pending: {
                                      render: function () {
                                        return "Removing from Favourites.";
                                      },
                                      theme: "dark",
                                    },
                                    success: Object(b.a)(
                                      {
                                        render: function () {
                                          return "Removed from Favourites.";
                                        },
                                        autoClose: 1500,
                                      },
                                      mr
                                    ),
                                    error: Object(b.a)(
                                      {
                                        render: function () {
                                          return "Favourites request failed.";
                                        },
                                        autoClose: 1500,
                                      },
                                      mr
                                    ),
                                  }
                                )
                              );
                            case 5:
                              L(t), a && a(), (e.next = 15);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                ne(e.t0) && S(),
                                o && o(),
                                console.log(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function (t, n, a, o) {
                  return e.apply(this, arguments);
                };
              })(),
              [d, L]
            );
          return Object(f.jsx)(m.Provider, {
            value: {
              isAuth: u,
              token: d,
              authLoading: h,
              userId: p,
              library: g,
              username: j,
              login: N,
              logout: S,
              setAutoLogout: E,
              editAuthConf: y,
              setIsAuth: _,
              setToken: w,
              setIsAuthLoading: C,
              setUserId: k,
              initLibrary: P,
              pushToLibrary: I,
              removeFromLibrary: L,
              addToFavouritesHandler: M,
              removeFromFavouritesHandler: A,
              topBoxMessage: O,
              setTopBoxMessage: x,
            },
            children: t,
          });
        },
        br = (n(310), document.getElementById("root"));
      Object(a.render)(
        Object(f.jsx)(Y.QueryClientProvider, {
          client: oo,
          children: Object(f.jsx)(hr, {
            children: Object(f.jsx)(T.a, {children: Object(f.jsx)(sr, {})}),
          }),
        }),
        br
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("", "/service-worker.js");
              cr
                ? (!(function (e, t) {
                    fetch(e, {headers: {"Service-Worker": "script"}})
                      .then(function (n) {
                        var a = n.headers.get("content-type");
                        404 === n.status ||
                        (null != a && -1 === a.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : ur(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : ur(t, e);
            });
          }
        })();
    },
    36: function (e, t, n) {
      e.exports = {
        "nav-item": "NavigationItem_nav-item__2dGe-",
        "nav-item-active": "NavigationItem_nav-item-active__2FOCX",
        "nav-link": "NavigationItem_nav-link__1SrPo",
        "nav-link-text": "NavigationItem_nav-link-text__3-KIy",
        "nav-link-icon": "NavigationItem_nav-link-icon__1VE6K",
        "nav-link-active": "NavigationItem_nav-link-active__2Lqwj",
        "nav-btn": "NavigationItem_nav-btn__2kdp8",
        "nav-btn-settings": "NavigationItem_nav-btn-settings__2_lR7",
        "setting-menu": "NavigationItem_setting-menu__1oNNA",
      };
    },
    37: function (e, t, n) {
      e.exports = {
        "logo": "Signup_logo__14rWA",
        "form__button": "Signup_form__button__21yhY",
        "signup_login": "Signup_signup_login__2jU7M",
        "signup_login-text": "Signup_signup_login-text__yzSOn",
        "signup_login-line": "Signup_signup_login-line__36Fff",
        "signup_redirect-button": "Signup_signup_redirect-button__1htis",
        "signup_redirect-button-link":
          "Signup_signup_redirect-button-link__32iRT",
      };
    },
    38: function (e, t, n) {
      e.exports = {
        "search-box__loading": "SearchBox_search-box__loading__BA_OL",
        "search-box__loading-container":
          "SearchBox_search-box__loading-container__2xnCr",
        "search-box-container": "SearchBox_search-box-container__3QchM",
        "search-box-container-closed":
          "SearchBox_search-box-container-closed__3aZmn",
        "search-box-closed": "SearchBox_search-box-closed__3jqMv",
        "search-box-open": "SearchBox_search-box-open__1ewAe",
        "expand": "SearchBox_expand__15Ly2",
        "search-box__btn-container":
          "SearchBox_search-box__btn-container__3Bky8",
        "search-box__btn": "SearchBox_search-box__btn__1M_71",
        "search-box__btn-close-container":
          "SearchBox_search-box__btn-close-container__JAppI",
        "search-box": "SearchBox_search-box__3RKhQ",
        "search-box__input": "SearchBox_search-box__input__fQK1Q",
      };
    },
    39: function (e, t, n) {
      e.exports = {
        "form__group": "Input_form__group__QltCS",
        "form__input": "Input_form__input__WXJr0",
        "form__input-red-box": "Input_form__input-red-box__1tDGX",
        "form__label": "Input_form__label__1Ncum",
        "form__label-bottom-container":
          "Input_form__label-bottom-container__1yuPq",
        "form__label-red": "Input_form__label-red__16eYk",
        "form__password-icon": "Input_form__password-icon__1_ceA",
      };
    },
    44: function (e, t, n) {
      e.exports = {
        "music-card": "MusicShelfCard_music-card__ThkXD",
        "music-card-container": "MusicShelfCard_music-card-container__or0Xc",
        "music-card__img": "MusicShelfCard_music-card__img__MgsF7",
        "music-card__header": "MusicShelfCard_music-card__header__1LCYI",
        "music-card__header-button-wrapper":
          "MusicShelfCard_music-card__header-button-wrapper__3h8BS",
        "music-card__header-overlay":
          "MusicShelfCard_music-card__header-overlay__1a1T2",
        "music-card__header-overlay-menu":
          "MusicShelfCard_music-card__header-overlay-menu__1AzTz",
        "music-card__header-button":
          "MusicShelfCard_music-card__header-button__1ptEN",
        "music-card__body": "MusicShelfCard_music-card__body__184Jw",
        "music-card__title": "MusicShelfCard_music-card__title__3il7v",
        "music-card__subtitle": "MusicShelfCard_music-card__subtitle__1HSwW",
      };
    },
    46: function (e, t, n) {
      e.exports = {
        "rowListSong-link": "RowListSong_rowListSong-link__3e1mF",
        "rowListSong__fixed-text": "RowListSong_rowListSong__fixed-text__IOFbb",
        "rowListSong-menu": "RowListSong_rowListSong-menu__1Srt7",
        "rowListSong-link-disabled":
          "RowListSong_rowListSong-link-disabled__oovCo",
        "rowListSong-thumbnail-container":
          "RowListSong_rowListSong-thumbnail-container__1e-fl",
        "rowListSong-thumbnail-hover":
          "RowListSong_rowListSong-thumbnail-hover__ESMOh",
        "rowListSong-thumbnail-img":
          "RowListSong_rowListSong-thumbnail-img__39vhL",
        "rowListSong-content": "RowListSong_rowListSong-content__38lac",
        "rowListSong__title": "RowListSong_rowListSong__title__3hJEm",
        "rowListSong__subtitle": "RowListSong_rowListSong__subtitle__TFlYu",
        "rowListSong__otherText": "RowListSong_rowListSong__otherText__2mtL4",
        "rowListSong-fixed": "RowListSong_rowListSong-fixed__1TuO0",
        "rowListSong__subtitles_container":
          "RowListSong_rowListSong__subtitles_container__18HKD",
      };
    },
    58: function (e, t, n) {
      e.exports = {
        "popup-click-btn": "Popup_popup-click-btn__2zZhv",
        "popup-box": "Popup_popup-box__buzzn",
        "popup-btn": "Popup_popup-btn__1K01g",
        "popup-btn-success": "Popup_popup-btn-success__373OA",
        "popup-btn-cancel": "Popup_popup-btn-cancel__1k58h",
      };
    },
    59: function (e, t, n) {
      e.exports = {
        "player-song-data": "PlayerSongData_player-song-data__3ubjH",
        "player-song-thumbnail": "PlayerSongData_player-song-thumbnail__lPoxa",
        "player-song-text": "PlayerSongData_player-song-text__1yE9W",
        "player-song-title": "PlayerSongData_player-song-title__2oBZC",
        "player-song-subtitle": "PlayerSongData_player-song-subtitle__4PNjw",
        "like": "PlayerSongData_like__2bFEh",
        "like-icon": "PlayerSongData_like-icon__2aY69",
      };
    },
    61: function (e, t, n) {
      e.exports = {
        "related-content-header": "Related_related-content-header__1EOlB",
        "related-content-header-thumbnail":
          "Related_related-content-header-thumbnail__hU0Jh",
      };
    },
    66: function (e, t, n) {
      e.exports = {
        "suggestions": "Suggestions_suggestions__1Bd2Z",
        "suggestion": "Suggestions_suggestion__1ptfB",
        "suggestion-box": "Suggestions_suggestion-box__31zRh",
        "suggestion-text": "Suggestions_suggestion-text__2rg3k",
        "suggestion-icon": "Suggestions_suggestion-icon__25SwV",
        "suggestion-icon-container":
          "Suggestions_suggestion-icon-container__32_-2",
      };
    },
    78: function (e, t, n) {
      "use strict";
      var a = n(52),
        o = n(115);
      Object.defineProperty(t, "__esModule", {value: !0}),
        Object.defineProperty(t, "RHAP_UI", {
          enumerable: !0,
          get: function () {
            return S.RHAP_UI;
          },
        }),
        (t.default = void 0);
      var l = a(n(96)),
        i = a(n(97)),
        r = a(n(80)),
        s = a(n(98)),
        c = a(n(99)),
        u = a(n(100)),
        d = a(n(101)),
        v = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" !== o(e) && "function" !== typeof e))
            return {default: e};
          var n = P(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            l = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var r = l ? Object.getOwnPropertyDescriptor(e, i) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, i, r)
                : (a[i] = e[i]);
            }
          (a.default = e), n && n.set(e, a);
          return a;
        })(n(1)),
        m = n(292),
        h = a(n(293)),
        b = a(n(294)),
        p = a(n(295)),
        f = a(n(296)),
        g = a(n(297)),
        j = a(n(298)),
        O = a(n(299)),
        x = a(n(300)),
        y = a(n(301)),
        _ = a(n(302)),
        w = a(n(303)),
        C = a(n(304)),
        k = a(n(305)),
        N = a(n(306)),
        S = n(307),
        E = n(102);
      function P(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (P = function (e) {
          return e ? n : t;
        })(e);
      }
      function I(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = (0, u.default)(e);
          if (t) {
            var o = (0, u.default)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return (0, c.default)(this, n);
        };
      }
      var L = (function (e) {
        (0, s.default)(n, e);
        var t = I(n);
        function n() {
          var e;
          (0, l.default)(this, n);
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, d.default)((0, r.default)(e), "audio", (0, v.createRef)()),
            (0, d.default)(
              (0, r.default)(e),
              "progressBar",
              (0, v.createRef)()
            ),
            (0, d.default)((0, r.default)(e), "container", (0, v.createRef)()),
            (0, d.default)((0, r.default)(e), "lastVolume", e.props.volume),
            (0, d.default)((0, r.default)(e), "listenTracker", void 0),
            (0, d.default)((0, r.default)(e), "volumeAnimationTimer", void 0),
            (0, d.default)(
              (0, r.default)(e),
              "downloadProgressAnimationTimer",
              void 0
            ),
            (0, d.default)((0, r.default)(e), "togglePlay", function (t) {
              t.stopPropagation();
              var n = e.audio.current;
              (n.paused || n.ended) && n.src
                ? e.playAudioPromise()
                : n.paused || n.pause();
            }),
            (0, d.default)((0, r.default)(e), "playAudioPromise", function () {
              var t = e.audio.current.play();
              t
                ? t.then(null).catch(function (t) {
                    var n = e.props.onPlayError;
                    n && n(new Error(t));
                  })
                : e.forceUpdate();
            }),
            (0, d.default)((0, r.default)(e), "isPlaying", function () {
              var t = e.audio.current;
              return !!t && !t.paused && !t.ended;
            }),
            (0, d.default)((0, r.default)(e), "handlePlay", function (t) {
              e.forceUpdate(), e.props.onPlay && e.props.onPlay(t);
            }),
            (0, d.default)((0, r.default)(e), "handlePause", function (t) {
              e.audio &&
                (e.forceUpdate(), e.props.onPause && e.props.onPause(t));
            }),
            (0, d.default)((0, r.default)(e), "handleEnded", function (t) {
              e.audio &&
                (e.forceUpdate(), e.props.onEnded && e.props.onEnded(t));
            }),
            (0, d.default)((0, r.default)(e), "handleAbort", function (t) {
              e.props.onAbort && e.props.onAbort(t);
            }),
            (0, d.default)(
              (0, r.default)(e),
              "handleClickVolumeButton",
              function () {
                var t = e.audio.current;
                t.volume > 0
                  ? ((e.lastVolume = t.volume), (t.volume = 0))
                  : (t.volume = e.lastVolume);
              }
            ),
            (0, d.default)((0, r.default)(e), "handleMuteChange", function () {
              e.forceUpdate();
            }),
            (0, d.default)(
              (0, r.default)(e),
              "handleClickLoopButton",
              function () {
                (e.audio.current.loop = !e.audio.current.loop), e.forceUpdate();
              }
            ),
            (0, d.default)((0, r.default)(e), "handleClickRewind", function () {
              var t = e.props,
                n = t.progressJumpSteps,
                a = t.progressJumpStep,
                o = n.backward || a;
              e.setJumpTime(-o);
            }),
            (0, d.default)(
              (0, r.default)(e),
              "handleClickForward",
              function () {
                var t = e.props,
                  n = t.progressJumpSteps,
                  a = t.progressJumpStep,
                  o = n.forward || a;
                e.setJumpTime(o);
              }
            ),
            (0, d.default)((0, r.default)(e), "setJumpTime", function (t) {
              var n = e.audio.current,
                a = n.duration,
                o = n.currentTime;
              if (
                n.readyState === n.HAVE_NOTHING ||
                n.readyState === n.HAVE_METADATA ||
                !isFinite(a) ||
                !isFinite(o)
              )
                return (
                  e.props.onChangeCurrentTimeError &&
                  e.props.onChangeCurrentTimeError()
                );
              var l = o + t / 1e3;
              l < 0
                ? ((n.currentTime = 0), (l = 0))
                : l > a
                ? ((n.currentTime = a), (l = a))
                : (n.currentTime = l);
            }),
            (0, d.default)((0, r.default)(e), "setJumpVolume", function (t) {
              var n = e.audio.current.volume + t;
              n < 0 ? (n = 0) : n > 1 && (n = 1), (e.audio.current.volume = n);
            }),
            (0, d.default)((0, r.default)(e), "handleKeyDown", function (t) {
              if (e.props.hasDefaultKeyBindings)
                switch (t.key) {
                  case " ":
                    (t.target !== e.container.current &&
                      t.target !== e.progressBar.current) ||
                      (t.preventDefault(), e.togglePlay(t));
                    break;
                  case "ArrowLeft":
                    e.handleClickRewind();
                    break;
                  case "ArrowRight":
                    e.handleClickForward();
                    break;
                  case "ArrowUp":
                    t.preventDefault(), e.setJumpVolume(e.props.volumeJumpStep);
                    break;
                  case "ArrowDown":
                    t.preventDefault(),
                      e.setJumpVolume(-e.props.volumeJumpStep);
                    break;
                  case "l":
                    e.handleClickLoopButton();
                    break;
                  case "m":
                    e.handleClickVolumeButton();
                }
            }),
            (0, d.default)((0, r.default)(e), "renderUIModules", function (t) {
              return t.map(function (t, n) {
                return e.renderUIModule(t, n);
              });
            }),
            (0, d.default)(
              (0, r.default)(e),
              "renderUIModule",
              function (t, n) {
                var a = e.props,
                  o = a.defaultCurrentTime,
                  l = a.progressUpdateInterval,
                  i = a.showDownloadProgress,
                  r = a.showFilledProgress,
                  s = a.showFilledVolume,
                  c = a.defaultDuration,
                  u = a.customIcons,
                  d = a.showSkipControls,
                  P = a.onClickPrevious,
                  I = a.onClickNext,
                  L = a.onChangeCurrentTimeError,
                  M = a.showJumpControls,
                  A = a.customAdditionalControls,
                  T = a.customVolumeControls,
                  R = a.muted,
                  B = a.timeFormat,
                  D = a.volume,
                  F = a.loop,
                  H = a.mse,
                  U = a.i18nAriaLabels;
                switch (t) {
                  case S.RHAP_UI.CURRENT_TIME:
                    return v.default.createElement(
                      "div",
                      {
                        key: n,
                        id: "rhap_current-time",
                        className: "rhap_time rhap_current-time",
                      },
                      v.default.createElement(C.default, {
                        audio: e.audio.current,
                        isLeftTime: !1,
                        defaultCurrentTime: o,
                        timeFormat: B,
                      })
                    );
                  case S.RHAP_UI.VOLUME_CONTROLS:
                    return v.default.createElement(
                      "div",
                      {key: n, className: "rhap_volume-controls"},
                      e.renderUIModules(T)
                    );
                  case S.RHAP_UI.CURRENT_LEFT_TIME:
                    return v.default.createElement(
                      "div",
                      {
                        key: n,
                        id: "rhap_current-left-time",
                        className: "rhap_time rhap_current-left-time",
                      },
                      v.default.createElement(C.default, {
                        audio: e.audio.current,
                        isLeftTime: !0,
                        defaultCurrentTime: o,
                        timeFormat: B,
                      })
                    );
                  case S.RHAP_UI.PROGRESS_BAR:
                    return v.default.createElement(w.default, {
                      key: n,
                      ref: e.progressBar,
                      audio: e.audio.current,
                      progressUpdateInterval: l,
                      showDownloadProgress: i,
                      showFilledProgress: r,
                      onSeek: H && H.onSeek,
                      onChangeCurrentTimeError: L,
                      srcDuration: H && H.srcDuration,
                      i18nProgressBar: U.progressControl,
                    });
                  case S.RHAP_UI.DURATION:
                    return v.default.createElement(
                      "div",
                      {key: n, className: "rhap_time rhap_total-time"},
                      H && H.srcDuration
                        ? (0, E.getDisplayTimeBySeconds)(
                            H.srcDuration,
                            H.srcDuration,
                            e.props.timeFormat
                          )
                        : v.default.createElement(k.default, {
                            audio: e.audio.current,
                            defaultDuration: c,
                            timeFormat: B,
                          })
                    );
                  case S.RHAP_UI.ADDITIONAL_CONTROLS:
                    return v.default.createElement(
                      "div",
                      {key: n, className: "rhap_additional-controls"},
                      e.renderUIModules(A)
                    );
                  case S.RHAP_UI.MAIN_CONTROLS:
                    var V,
                      z = e.isPlaying();
                    return (
                      (V = z
                        ? u.pause
                          ? u.pause
                          : v.default.createElement(m.Icon, {icon: b.default})
                        : u.play
                        ? u.play
                        : v.default.createElement(m.Icon, {icon: h.default})),
                      v.default.createElement(
                        "div",
                        {key: n, className: "rhap_main-controls"},
                        d &&
                          v.default.createElement(
                            "button",
                            {
                              "aria-label": U.previous,
                              "className":
                                "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                              "type": "button",
                              "onClick": P,
                            },
                            u.previous
                              ? u.previous
                              : v.default.createElement(m.Icon, {
                                  icon: p.default,
                                })
                          ),
                        M &&
                          v.default.createElement(
                            "button",
                            {
                              "aria-label": U.rewind,
                              "className":
                                "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                              "type": "button",
                              "onClick": e.handleClickRewind,
                            },
                            u.rewind
                              ? u.rewind
                              : v.default.createElement(m.Icon, {
                                  icon: j.default,
                                })
                          ),
                        v.default.createElement(
                          "button",
                          {
                            "aria-label": z ? U.pause : U.play,
                            "className":
                              "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                            "type": "button",
                            "onClick": e.togglePlay,
                          },
                          V
                        ),
                        M &&
                          v.default.createElement(
                            "button",
                            {
                              "aria-label": U.forward,
                              "className":
                                "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                              "type": "button",
                              "onClick": e.handleClickForward,
                            },
                            u.forward
                              ? u.forward
                              : v.default.createElement(m.Icon, {
                                  icon: g.default,
                                })
                          ),
                        d &&
                          v.default.createElement(
                            "button",
                            {
                              "aria-label": U.next,
                              "className":
                                "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                              "type": "button",
                              "onClick": I,
                            },
                            u.next
                              ? u.next
                              : v.default.createElement(m.Icon, {
                                  icon: f.default,
                                })
                          )
                      )
                    );
                  case S.RHAP_UI.LOOP:
                    var W,
                      G = e.audio.current ? e.audio.current.loop : F;
                    return (
                      (W = G
                        ? u.loop
                          ? u.loop
                          : v.default.createElement(m.Icon, {icon: y.default})
                        : u.loopOff
                        ? u.loopOff
                        : v.default.createElement(m.Icon, {icon: _.default})),
                      v.default.createElement(
                        "button",
                        {
                          "key": n,
                          "aria-label": G ? U.loop : U.loopOff,
                          "className": "rhap_button-clear rhap_repeat-button",
                          "type": "button",
                          "onClick": e.handleClickLoopButton,
                        },
                        W
                      )
                    );
                  case S.RHAP_UI.VOLUME:
                    var Z,
                      q = (e.audio.current || {}).volume,
                      Y = void 0 === q ? (R ? 0 : D) : q;
                    return (
                      (Z = Y
                        ? u.volume
                          ? u.volume
                          : v.default.createElement(m.Icon, {icon: O.default})
                        : u.volume
                        ? u.volumeMute
                        : v.default.createElement(m.Icon, {icon: x.default})),
                      v.default.createElement(
                        "div",
                        {key: n, className: "rhap_volume-container"},
                        v.default.createElement(
                          "button",
                          {
                            "aria-label": Y ? U.volume : U.volumeMute,
                            "onClick": e.handleClickVolumeButton,
                            "type": "button",
                            "className": "rhap_button-clear rhap_volume-button",
                          },
                          Z
                        ),
                        v.default.createElement(N.default, {
                          audio: e.audio.current,
                          volume: Y,
                          onMuteChange: e.handleMuteChange,
                          showFilledVolume: s,
                          i18nVolumeControl: U.volumeControl,
                        })
                      )
                    );
                  default:
                    return (0, v.isValidElement)(t)
                      ? t.key
                        ? t
                        : (0, v.cloneElement)(t, {key: n})
                      : null;
                }
              }
            ),
            e
          );
        }
        return (
          (0, i.default)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                this.forceUpdate();
                var t = this.audio.current;
                this.props.muted
                  ? (t.volume = 0)
                  : (t.volume = this.lastVolume),
                  t.addEventListener("error", function (t) {
                    e.props.onError && e.props.onError(t);
                  }),
                  t.addEventListener("canplay", function (t) {
                    e.props.onCanPlay && e.props.onCanPlay(t);
                  }),
                  t.addEventListener("canplaythrough", function (t) {
                    e.props.onCanPlayThrough && e.props.onCanPlayThrough(t);
                  }),
                  t.addEventListener("play", this.handlePlay),
                  t.addEventListener("abort", this.handleAbort),
                  t.addEventListener("ended", this.handleEnded),
                  t.addEventListener("playing", function (t) {
                    e.props.onPlaying && e.props.onPlaying(t);
                  }),
                  t.addEventListener("seeking", function (t) {
                    e.props.onSeeking && e.props.onSeeking(t);
                  }),
                  t.addEventListener("seeked", function (t) {
                    e.props.onSeeked && e.props.onSeeked(t);
                  }),
                  t.addEventListener("waiting", function (t) {
                    e.props.onWaiting && e.props.onWaiting(t);
                  }),
                  t.addEventListener("emptied", function (t) {
                    e.props.onEmptied && e.props.onEmptied(t);
                  }),
                  t.addEventListener("stalled", function (t) {
                    e.props.onStalled && e.props.onStalled(t);
                  }),
                  t.addEventListener("suspend", function (t) {
                    e.props.onSuspend && e.props.onSuspend(t);
                  }),
                  t.addEventListener("loadstart", function (t) {
                    e.props.onLoadStart && e.props.onLoadStart(t);
                  }),
                  t.addEventListener("loadedmetadata", function (t) {
                    e.props.onLoadedMetaData && e.props.onLoadedMetaData(t);
                  }),
                  t.addEventListener("loadeddata", function (t) {
                    e.props.onLoadedData && e.props.onLoadedData(t);
                  }),
                  t.addEventListener("pause", this.handlePause),
                  t.addEventListener(
                    "timeupdate",
                    (0, E.throttle)(function (t) {
                      e.props.onListen && e.props.onListen(t);
                    }, this.props.listenInterval)
                  ),
                  t.addEventListener("volumechange", function (t) {
                    e.props.onVolumeChange && e.props.onVolumeChange(t);
                  }),
                  t.addEventListener("encrypted", function (t) {
                    var n = e.props.mse;
                    n && n.onEcrypted && n.onEcrypted(t);
                  });
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this.props,
                  n = t.src,
                  a = t.autoPlayAfterSrcChange;
                e.src !== n &&
                  (a ? this.playAudioPromise() : this.forceUpdate());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                var e = this.audio.current;
                e &&
                  (e.removeEventListener("play", this.handlePlay),
                  e.removeEventListener("pause", this.handlePause),
                  e.removeEventListener("abort", this.handleAbort),
                  e.removeAttribute("src"),
                  e.load());
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.className,
                  n = e.src,
                  a = e.loop,
                  o = e.preload,
                  l = e.autoPlay,
                  i = e.crossOrigin,
                  r = e.mediaGroup,
                  s = e.header,
                  c = e.footer,
                  u = e.layout,
                  d = e.customProgressBarSection,
                  m = e.customControlsSection,
                  h = e.children,
                  b = e.style,
                  p = e.i18nAriaLabels,
                  f = this.audio.current ? this.audio.current.loop : a,
                  g = f ? "rhap_loop--on" : "rhap_loop--off",
                  j = this.isPlaying()
                    ? "rhap_play-status--playing"
                    : "rhap_play-status--paused";
                return v.default.createElement(
                  "div",
                  {
                    "role": "group",
                    "tabIndex": 0,
                    "aria-label": p.player,
                    "className": "rhap_container "
                      .concat(g, " ")
                      .concat(j, " ")
                      .concat(t),
                    "onKeyDown": this.handleKeyDown,
                    "ref": this.container,
                    "style": b,
                  },
                  v.default.createElement(
                    "audio",
                    {
                      src: n,
                      controls: !1,
                      loop: f,
                      autoPlay: l,
                      preload: o,
                      crossOrigin: i,
                      mediaGroup: r,
                      ref: this.audio,
                    },
                    h
                  ),
                  s &&
                    v.default.createElement(
                      "div",
                      {className: "rhap_header"},
                      s
                    ),
                  v.default.createElement(
                    "div",
                    {
                      className: "rhap_main ".concat(
                        (0, E.getMainLayoutClassName)(u)
                      ),
                    },
                    v.default.createElement(
                      "div",
                      {className: "rhap_progress-section"},
                      this.renderUIModules(d)
                    ),
                    v.default.createElement(
                      "div",
                      {className: "rhap_controls-section"},
                      this.renderUIModules(m)
                    )
                  ),
                  c &&
                    v.default.createElement(
                      "div",
                      {className: "rhap_footer"},
                      c
                    )
                );
              },
            },
          ]),
          n
        );
      })(v.Component);
      (0, d.default)(L, "defaultProps", {
        autoPlay: !1,
        autoPlayAfterSrcChange: !0,
        listenInterval: 1e3,
        progressJumpStep: 5e3,
        progressJumpSteps: {},
        volumeJumpStep: 0.1,
        loop: !1,
        muted: !1,
        preload: "auto",
        progressUpdateInterval: 20,
        defaultCurrentTime: "--:--",
        defaultDuration: "--:--",
        timeFormat: "auto",
        volume: 1,
        className: "",
        showJumpControls: !0,
        showSkipControls: !1,
        showDownloadProgress: !0,
        showFilledProgress: !0,
        showFilledVolume: !1,
        customIcons: {},
        customProgressBarSection: [
          S.RHAP_UI.CURRENT_TIME,
          S.RHAP_UI.PROGRESS_BAR,
          S.RHAP_UI.DURATION,
        ],
        customControlsSection: [
          S.RHAP_UI.ADDITIONAL_CONTROLS,
          S.RHAP_UI.MAIN_CONTROLS,
          S.RHAP_UI.VOLUME_CONTROLS,
        ],
        customAdditionalControls: [S.RHAP_UI.LOOP],
        customVolumeControls: [S.RHAP_UI.VOLUME],
        layout: "stacked",
        hasDefaultKeyBindings: !0,
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
      var M = L;
      t.default = M;
    },
    86: function (e, t, n) {
      e.exports = {
        "music-card-list": "MusicShelfList_music-card-list__2PKIH",
        "music-card-carousel-list":
          "MusicShelfList_music-card-carousel-list__2wfPa",
        "slider": "MusicShelfList_slider__3O8KP",
      };
    },
    91: function (e, t, n) {
      e.exports = {
        "menu-item": "Menu_menu-item__3CVzq",
        "menu-item-icon": "Menu_menu-item-icon__1IEmA",
        "menu-item-contributors": "Menu_menu-item-contributors__xzLRT",
      };
    },
    92: function (e, t, n) {
      e.exports = {
        "button": "Button_button__32FwK",
        "button-animate": "Button_button-animate__3J59F",
        "button-tertiary": "Button_button-tertiary__1A3v2",
      };
    },
    93: function (e, t, n) {
      e.exports = {
        "music-shelf": "MusicShelf_music-shelf___f-qm",
        "music-shelf-title": "MusicShelf_music-shelf-title__qZ_Sd",
        "music-shelf-header": "MusicShelf_music-shelf-header__3lXDI",
        "music-shelf-mg": "MusicShelf_music-shelf-mg__1UJow",
      };
    },
  },
  [[311, 1, 2]],
]);
//# sourceMappingURL=main.d0c4a6ee.chunk.js.map

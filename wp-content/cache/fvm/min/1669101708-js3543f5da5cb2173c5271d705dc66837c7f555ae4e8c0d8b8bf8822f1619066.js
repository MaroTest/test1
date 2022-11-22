try {
    function Layzr(t) {
        this._lastScroll = 0, this._ticking = !1, t = t || {}, this._optionsContainer = document.querySelector(t.container) || window, this._optionsSelector = t.selector || "[data-layzr]", this._optionsAttr = t.attr || "data-layzr", this._optionsAttrSrcSet = t.attrSrcSet || "data-layzr-srcset", this._optionsAttrRetina = t.retinaAttr || "data-layzr-retina", this._optionsAttrBg = t.bgAttr || "data-layzr-bg", this._optionsAttrHidden = t.hiddenAttr || "data-layzr-hidden", this._optionsThreshold = t.threshold || 0, this._optionsBefore = t.before || null, this._optionsAfter = t.after || null, this._optionsCallback = t.callback || null, this._retina = window.devicePixelRatio > 1, this._srcAttr = this._retina ? this._optionsAttrRetina : this._optionsAttr, this._nodes = document.querySelectorAll(this._optionsSelector), this._handlerBind = this._requestScroll.bind(this), this._create()
    }

    function simple_tooltip(t, e) {
        jQuery(t).each((function(t) {
            jQuery("body").append("<div class='" + e + "' id='" + e + t + "'>" + jQuery(this).find("span.tooltip-c").html() + "</div>");
            var i = jQuery("#" + e + t);
            jQuery(this).removeAttr("title").mouseover((function() {
                i.css({
                    opacity: 1,
                    display: "none"
                }).fadeIn(400)
            })).mousemove((function(t) {
                var e, s, n = jQuery(window).scrollTop(),
                    o = jQuery(window).width(),
                    a = 15;
                e = o - 30 >= i.width() + t.pageX ? t.pageX + a : o - i.width() - a, s = n + 30 >= t.pageY - i.height() ? n + a : t.pageY - i.height() - 33, i.css({
                    left: e,
                    top: s
                })
            })).mouseout((function() {
                i.css({
                    left: "-9999px"
                })
            }))
        }))
    }
    /*!
     * jquery.customSelect() - v0.4.1
     * http://adam.co/lab/jquery/customselect/
     * 2013-05-13
     *
     * Copyright 2013 Adam Coulombe
     * @license http://www.opensource.org/licenses/mit-license.html MIT License
     * @license http://www.gnu.org/licenses/gpl.html GPL2 License
     */
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function(t, e, i, s, n) {
                return jQuery.easing[jQuery.easing.def](t, e, i, s, n)
            },
            easeInQuad: function(t, e, i, s, n) {
                return s * (e /= n) * e + i
            },
            easeOutQuad: function(t, e, i, s, n) {
                return -s * (e /= n) * (e - 2) + i
            },
            easeInOutQuad: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
            },
            easeInCubic: function(t, e, i, s, n) {
                return s * (e /= n) * e * e + i
            },
            easeOutCubic: function(t, e, i, s, n) {
                return s * ((e = e / n - 1) * e * e + 1) + i
            },
            easeInOutCubic: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
            },
            easeInQuart: function(t, e, i, s, n) {
                return s * (e /= n) * e * e * e + i
            },
            easeOutQuart: function(t, e, i, s, n) {
                return -s * ((e = e / n - 1) * e * e * e - 1) + i
            },
            easeInOutQuart: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
            },
            easeInQuint: function(t, e, i, s, n) {
                return s * (e /= n) * e * e * e * e + i
            },
            easeOutQuint: function(t, e, i, s, n) {
                return s * ((e = e / n - 1) * e * e * e * e + 1) + i
            },
            easeInOutQuint: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
            },
            easeInSine: function(t, e, i, s, n) {
                return -s * Math.cos(e / n * (Math.PI / 2)) + s + i
            },
            easeOutSine: function(t, e, i, s, n) {
                return s * Math.sin(e / n * (Math.PI / 2)) + i
            },
            easeInOutSine: function(t, e, i, s, n) {
                return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
            },
            easeInExpo: function(t, e, i, s, n) {
                return 0 == e ? i : s * Math.pow(2, 10 * (e / n - 1)) + i
            },
            easeOutExpo: function(t, e, i, s, n) {
                return e == n ? i + s : s * (1 - Math.pow(2, -10 * e / n)) + i
            },
            easeInOutExpo: function(t, e, i, s, n) {
                return 0 == e ? i : e == n ? i + s : (e /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (2 - Math.pow(2, -10 * --e)) + i
            },
            easeInCirc: function(t, e, i, s, n) {
                return -s * (Math.sqrt(1 - (e /= n) * e) - 1) + i
            },
            easeOutCirc: function(t, e, i, s, n) {
                return s * Math.sqrt(1 - (e = e / n - 1) * e) + i
            },
            easeInOutCirc: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
            },
            easeInElastic: function(t, e, i, s, n) {
                var o = 1.70158,
                    a = 0,
                    r = s;
                if (0 == e) return i;
                if (1 == (e /= n)) return i + s;
                if (a || (a = .3 * n), r < Math.abs(s)) {
                    r = s;
                    o = a / 4
                } else o = a / (2 * Math.PI) * Math.asin(s / r);
                return -r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - o) * Math.PI / a) + i
            },
            easeOutElastic: function(t, e, i, s, n) {
                var o = 1.70158,
                    a = 0,
                    r = s;
                if (0 == e) return i;
                if (1 == (e /= n)) return i + s;
                if (a || (a = .3 * n), r < Math.abs(s)) {
                    r = s;
                    o = a / 4
                } else o = a / (2 * Math.PI) * Math.asin(s / r);
                return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - o) * Math.PI / a) + s + i
            },
            easeInOutElastic: function(t, e, i, s, n) {
                var o = 1.70158,
                    a = 0,
                    r = s;
                if (0 == e) return i;
                if (2 == (e /= n / 2)) return i + s;
                if (a || (a = .3 * n * 1.5), r < Math.abs(s)) {
                    r = s;
                    o = a / 4
                } else o = a / (2 * Math.PI) * Math.asin(s / r);
                return e < 1 ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - o) * Math.PI / a) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - o) * Math.PI / a) * .5 + s + i
            },
            easeInBack: function(t, e, i, s, n, o) {
                return null == o && (o = 1.70158), s * (e /= n) * e * ((o + 1) * e - o) + i
            },
            easeOutBack: function(t, e, i, s, n, o) {
                return null == o && (o = 1.70158), s * ((e = e / n - 1) * e * ((o + 1) * e + o) + 1) + i
            },
            easeInOutBack: function(t, e, i, s, n, o) {
                return null == o && (o = 1.70158), (e /= n / 2) < 1 ? s / 2 * e * e * ((1 + (o *= 1.525)) * e - o) + i : s / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + i
            },
            easeInBounce: function(t, e, i, s, n) {
                return s - jQuery.easing.easeOutBounce(t, n - e, 0, s, n) + i
            },
            easeOutBounce: function(t, e, i, s, n) {
                return (e /= n) < 1 / 2.75 ? 7.5625 * s * e * e + i : e < 2 / 2.75 ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            },
            easeInOutBounce: function(t, e, i, s, n) {
                return e < n / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, s, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, s, n) + .5 * s + i
            }
        }),
        function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                var s = (new Date).getTime(),
                    n = Math.max(0, 16 - (s - t)),
                    o = window.setTimeout((function() {
                        e(s + n)
                    }), n);
                return t = s + n, o
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }(), Layzr.prototype._requestScroll = function() {
            this._optionsContainer === window ? this._lastScroll = window.pageYOffset : this._lastScroll = this._optionsContainer.scrollTop + this._getOffset(this._optionsContainer), this._requestTick()
        }, Layzr.prototype._requestTick = function() {
            this._ticking || (requestAnimationFrame(this.update.bind(this)), this._ticking = !0)
        }, Layzr.prototype._getOffset = function(t) {
            return t.getBoundingClientRect().top + window.pageYOffset
        }, Layzr.prototype._getContainerHeight = function() {
            return this._optionsContainer.innerHeight || this._optionsContainer.offsetHeight
        }, Layzr.prototype._create = function() {
            this._prepareItems(), this._handlerBind(), this._optionsContainer.addEventListener("scroll", this._handlerBind, !1), this._optionsContainer.addEventListener("resize", this._handlerBind, !1)
        }, Layzr.prototype._destroy = function() {
            this._optionsContainer.removeEventListener("scroll", this._handlerBind, !1), this._optionsContainer.removeEventListener("resize", this._handlerBind, !1)
        }, Layzr.prototype._inViewport = function(t) {
            var e = this._lastScroll,
                i = e + this._getContainerHeight(),
                s = this._getOffset(t),
                n = s + this._getContainerHeight(),
                o = this._optionsThreshold / 100 * window.innerHeight;
            return n >= e - o && s <= i + o && !t.hasAttribute(this._optionsAttrHidden)
        }, Layzr.prototype._reveal = function(t) {
            var e = t.getAttribute(this._srcAttr) || t.getAttribute(this._optionsAttr),
                i = this;
            "function" == typeof this._optionsCallback && (t.addEventListener ? t.addEventListener("load", (function() {
                i._optionsCallback.call(t)
            })) : t.attachEvent("onload", (function() {
                i._optionsCallback.call(t)
            })));
            "function" == typeof this._optionsBefore && this._optionsBefore.call(t), t.hasAttribute(this._optionsAttrBg) ? t.style.backgroundImage = "url(" + e + ")" : (e && t.setAttribute("src", e), t.hasAttribute(this._optionsAttrSrcSet) && t.setAttribute("srcset", t.getAttribute(this._optionsAttrSrcSet))), "function" == typeof this._optionsAfter && this._optionsAfter.call(t), t.removeAttribute(this._optionsAttr), t.removeAttribute(this._optionsAttrSrcSet), t.removeAttribute(this._optionsAttrRetina), t.removeAttribute(this._optionsAttrBg), t.removeAttribute(this._optionsAttrHidden)
        }, Layzr.prototype.updateSelector = function() {
            this._nodes = document.querySelectorAll(this._optionsSelector), this._prepareItems()
        }, Layzr.prototype._prepareItems = function() {
            this._nodes.forEach((function(t) {
                if (t.hasAttribute("data-src")) var e = t.getAttribute("data-src"),
                    i = e.substring(e.lastIndexOf(".") + 1);
                "png" !== i && "svg" !== i || t.parentNode.classList.add("layzr-bg-transparent")
            }))
        }, Layzr.prototype.update = function() {
            for (var t = this._nodes.length, e = [], i = 0; i < t; i++) {
                var s = this._nodes[i];
                (s.hasAttribute(this._optionsAttr) || s.hasAttribute(this._optionsAttrSrcSet) || s.hasAttribute(this._optionsAttrRetina)) && this._inViewport(s) && e.push(s)
            }
            var n = this;
            e.forEach((function(t) {
                n._reveal(t)
            })), this._ticking = !1
        },
        function(t, e) {
            "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
        }(this, (function() {
            "use strict";
            return function(t, e, i, s) {
                var n = {
                    features: null,
                    bind: function(t, e, i, s) {
                        var n = (s ? "remove" : "add") + "EventListener";
                        e = e.split(" ");
                        for (var o = 0; o < e.length; o++) e[o] && t[n](e[o], i, !1)
                    },
                    isArray: function(t) {
                        return t instanceof Array
                    },
                    createEl: function(t, e) {
                        var i = document.createElement(e || "div");
                        return t && (i.className = t), i
                    },
                    getScrollY: function() {
                        var t = window.pageYOffset;
                        return void 0 !== t ? t : document.documentElement.scrollTop
                    },
                    unbind: function(t, e, i) {
                        n.bind(t, e, i, !0)
                    },
                    removeClass: function(t, e) {
                        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    },
                    addClass: function(t, e) {
                        n.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                    },
                    hasClass: function(t, e) {
                        return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                    },
                    getChildByClass: function(t, e) {
                        for (var i = t.firstChild; i;) {
                            if (n.hasClass(i, e)) return i;
                            i = i.nextSibling
                        }
                    },
                    arraySearch: function(t, e, i) {
                        for (var s = t.length; s--;)
                            if (t[s][i] === e) return s;
                        return -1
                    },
                    extend: function(t, e, i) {
                        for (var s in e)
                            if (e.hasOwnProperty(s)) {
                                if (i && t.hasOwnProperty(s)) continue;
                                t[s] = e[s]
                            }
                    },
                    easing: {
                        sine: {
                            out: function(t) {
                                return Math.sin(t * (Math.PI / 2))
                            },
                            inOut: function(t) {
                                return -(Math.cos(Math.PI * t) - 1) / 2
                            }
                        },
                        cubic: {
                            out: function(t) {
                                return --t * t * t + 1
                            }
                        }
                    },
                    detectFeatures: function() {
                        if (n.features) return n.features;
                        var t = n.createEl().style,
                            e = "",
                            i = {};
                        if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                            var s = navigator.userAgent;
                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                o && o.length > 0 && ((o = parseInt(o[1], 10)) >= 1 && o < 8 && (i.isOldIOSPhone = !0))
                            }
                            var a = s.match(/Android\s([0-9\.]*)/),
                                r = a ? a[1] : 0;
                            (r = parseFloat(r)) >= 1 && (r < 4.4 && (i.isOldAndroid = !0), i.androidVersion = r), i.isMobileOpera = /opera mini|opera mobi/i.test(s)
                        }
                        for (var l, d, c = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], u = 0; u < 4; u++) {
                            e = h[u];
                            for (var p = 0; p < 3; p++) l = c[p], d = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && d in t && (i[l] = d);
                            e && !i.raf && (e = e.toLowerCase(), i.raf = window[e + "RequestAnimationFrame"], i.raf && (i.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
                        }
                        if (!i.raf) {
                            var f = 0;
                            i.raf = function(t) {
                                var e = (new Date).getTime(),
                                    i = Math.max(0, 16 - (e - f)),
                                    s = window.setTimeout((function() {
                                        t(e + i)
                                    }), i);
                                return f = e + i, s
                            }, i.caf = function(t) {
                                clearTimeout(t)
                            }
                        }
                        return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, n.features = i, i
                    }
                };
                n.detectFeatures(), n.features.oldIE && (n.bind = function(t, e, i, s) {
                    e = e.split(" ");
                    for (var n, o = (s ? "detach" : "attach") + "Event", a = function() {
                            i.handleEvent.call(i)
                        }, r = 0; r < e.length; r++)
                        if (n = e[r])
                            if ("object" == typeof i && i.handleEvent) {
                                if (s) {
                                    if (!i["oldIE" + n]) return !1
                                } else i["oldIE" + n] = a;
                                t[o]("on" + n, i["oldIE" + n])
                            } else t[o]("on" + n, i)
                });
                var o = this,
                    a = {
                        allowPanToNext: !0,
                        spacing: .12,
                        bgOpacity: 1,
                        mouseUsed: !1,
                        loop: !0,
                        pinchToClose: !0,
                        closeOnScroll: !0,
                        closeOnVerticalDrag: !0,
                        verticalDragRange: .75,
                        hideAnimationDuration: 333,
                        showAnimationDuration: 333,
                        showHideOpacity: !1,
                        focus: !0,
                        escKey: !0,
                        arrowKeys: !0,
                        mainScrollEndFriction: .35,
                        panEndFriction: .35,
                        isClickableElement: function(t) {
                            return "A" === t.tagName
                        },
                        getDoubleTapZoom: function(t, e) {
                            return t || e.initialZoomLevel < .7 ? 1 : 1.33
                        },
                        maxSpreadZoom: 1.33,
                        modal: !0,
                        scaleMode: "fit"
                    };
                n.extend(a, s);
                var r, l, d, c, h, u, p, f, m, g, v, w, y, b, C, _, x, I, S, T, k, z, L, E, A, P, M, O, D, H, F, W, B, R, j, $, G, Y, N, q, U, V, X, Z, Q, K, J, tt, et, it, st, nt, ot, at, rt, lt, dt = {
                        x: 0,
                        y: 0
                    },
                    ct = {
                        x: 0,
                        y: 0
                    },
                    ht = {
                        x: 0,
                        y: 0
                    },
                    ut = {},
                    pt = 0,
                    ft = {},
                    mt = {
                        x: 0,
                        y: 0
                    },
                    gt = 0,
                    vt = !0,
                    wt = [],
                    yt = {},
                    bt = !1,
                    Ct = function(t, e) {
                        n.extend(o, e.publicMethods), wt.push(t)
                    },
                    _t = function(t) {
                        var e = je();
                        return t > e - 1 ? t - e : t < 0 ? e + t : t
                    },
                    xt = {},
                    It = function(t, e) {
                        return xt[t] || (xt[t] = []), xt[t].push(e)
                    },
                    St = function(t) {
                        var e = xt[t];
                        if (e) {
                            var i = Array.prototype.slice.call(arguments);
                            i.shift();
                            for (var s = 0; s < e.length; s++) e[s].apply(o, i)
                        }
                    },
                    Tt = function() {
                        return (new Date).getTime()
                    },
                    kt = function(t) {
                        at = t, o.bg.style.opacity = t * a.bgOpacity
                    },
                    zt = function(t, e, i, s, n) {
                        (!bt || n && n !== o.currItem) && (s /= n ? n.fitRatio : o.currItem.fitRatio), t[z] = w + e + "px, " + i + "px" + y + " scale(" + s + ")"
                    },
                    Lt = function(t) {
                        et && (t && (g > o.currItem.fitRatio ? bt || (Ze(o.currItem, !1, !0), bt = !0) : bt && (Ze(o.currItem), bt = !1)), zt(et, ht.x, ht.y, g))
                    },
                    Et = function(t) {
                        t.container && zt(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
                    },
                    At = function(t, e) {
                        e[z] = w + t + "px, 0px" + y
                    },
                    Pt = function(t, e) {
                        if (!a.loop && e) {
                            var i = c + (mt.x * pt - t) / mt.x,
                                s = Math.round(t - ce.x);
                            (i < 0 && s > 0 || i >= je() - 1 && s < 0) && (t = ce.x + s * a.mainScrollEndFriction)
                        }
                        ce.x = t, At(t, h)
                    },
                    Mt = function(t, e) {
                        var i = he[t] - ft[t];
                        return ct[t] + dt[t] + i - i * (e / v)
                    },
                    Ot = function(t, e) {
                        t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
                    },
                    Dt = function(t) {
                        t.x = Math.round(t.x), t.y = Math.round(t.y)
                    },
                    Ht = null,
                    Ft = function() {
                        Ht && (n.unbind(document, "mousemove", Ft), n.addClass(t, "pswp--has_mouse"), a.mouseUsed = !0, St("mouseUsed")), Ht = setTimeout((function() {
                            Ht = null
                        }), 100)
                    },
                    Wt = function(t, e) {
                        var i = qe(o.currItem, ut, t);
                        return e && (tt = i), i
                    },
                    Bt = function(t) {
                        return t || (t = o.currItem), t.initialZoomLevel
                    },
                    Rt = function(t) {
                        return t || (t = o.currItem), t.w > 0 ? a.maxSpreadZoom : 1
                    },
                    jt = function(t, e, i, s) {
                        return s === o.currItem.initialZoomLevel ? (i[t] = o.currItem.initialPosition[t], !0) : (i[t] = Mt(t, s), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] && (i[t] = e.max[t], !0))
                    },
                    $t = function(t) {
                        var e = "";
                        a.escKey && 27 === t.keyCode ? e = "close" : a.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, o[e]()))
                    },
                    Gt = function(t) {
                        t && (V || U || it || G) && (t.preventDefault(), t.stopPropagation())
                    },
                    Yt = function() {
                        o.setScrollOffset(0, n.getScrollY())
                    },
                    Nt = {},
                    qt = 0,
                    Ut = function(t) {
                        Nt[t] && (Nt[t].raf && P(Nt[t].raf), qt--, delete Nt[t])
                    },
                    Vt = function(t) {
                        Nt[t] && Ut(t), Nt[t] || (qt++, Nt[t] = {})
                    },
                    Xt = function() {
                        for (var t in Nt) Nt.hasOwnProperty(t) && Ut(t)
                    },
                    Zt = function(t, e, i, s, n, o, a) {
                        var r, l = Tt();
                        Vt(t);
                        var d = function() {
                            if (Nt[t]) {
                                if ((r = Tt() - l) >= s) return Ut(t), o(i), void(a && a());
                                o((i - e) * n(r / s) + e), Nt[t].raf = A(d)
                            }
                        };
                        d()
                    },
                    Qt = {
                        shout: St,
                        listen: It,
                        viewportSize: ut,
                        options: a,
                        isMainScrollAnimating: function() {
                            return it
                        },
                        getZoomLevel: function() {
                            return g
                        },
                        getCurrentIndex: function() {
                            return c
                        },
                        isDragging: function() {
                            return N
                        },
                        isZooming: function() {
                            return K
                        },
                        setScrollOffset: function(t, e) {
                            ft.x = t, H = ft.y = e, St("updateScrollOffset", ft)
                        },
                        applyZoomPan: function(t, e, i, s) {
                            ht.x = e, ht.y = i, g = t, Lt(s)
                        },
                        init: function() {
                            if (!r && !l) {
                                var i;
                                o.framework = n, o.template = t, o.bg = n.getChildByClass(t, "pswp__bg"), M = t.className, r = !0, F = n.detectFeatures(), A = F.raf, P = F.caf, z = F.transform, D = F.oldIE, o.scrollWrap = n.getChildByClass(t, "pswp__scroll-wrap"), o.container = n.getChildByClass(o.scrollWrap, "pswp__container"), h = o.container.style, o.itemHolders = _ = [{
                                        el: o.container.children[0],
                                        wrap: 0,
                                        index: -1
                                    }, {
                                        el: o.container.children[1],
                                        wrap: 0,
                                        index: -1
                                    }, {
                                        el: o.container.children[2],
                                        wrap: 0,
                                        index: -1
                                    }], _[0].el.style.display = _[2].el.style.display = "none",
                                    function() {
                                        if (z) {
                                            var e = F.perspective && !E;
                                            return w = "translate" + (e ? "3d(" : "("), void(y = F.perspective ? ", 0px)" : ")")
                                        }
                                        z = "left", n.addClass(t, "pswp--ie"), At = function(t, e) {
                                            e.left = t + "px"
                                        }, Et = function(t) {
                                            var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                i = t.container.style,
                                                s = e * t.w,
                                                n = e * t.h;
                                            i.width = s + "px", i.height = n + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
                                        }, Lt = function() {
                                            if (et) {
                                                var t = et,
                                                    e = o.currItem,
                                                    i = e.fitRatio > 1 ? 1 : e.fitRatio,
                                                    s = i * e.w,
                                                    n = i * e.h;
                                                t.width = s + "px", t.height = n + "px", t.left = ht.x + "px", t.top = ht.y + "px"
                                            }
                                        }
                                    }(), m = {
                                        resize: o.updateSize,
                                        orientationchange: function() {
                                            clearTimeout(W), W = setTimeout((function() {
                                                ut.x !== o.scrollWrap.clientWidth && o.updateSize()
                                            }), 500)
                                        },
                                        scroll: Yt,
                                        keydown: $t,
                                        click: Gt
                                    };
                                var s = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
                                for (F.animationName && F.transform && !s || (a.showAnimationDuration = a.hideAnimationDuration = 0), i = 0; i < wt.length; i++) o["init" + wt[i]]();
                                if (e)(o.ui = new e(o, n)).init();
                                St("firstUpdate"), c = c || a.index || 0, (isNaN(c) || c < 0 || c >= je()) && (c = 0), o.currItem = Re(c), (F.isOldIOSPhone || F.isOldAndroid) && (vt = !1), t.setAttribute("aria-hidden", "false"), a.modal && (vt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = n.getScrollY() + "px")), void 0 === H && (St("initialLayout"), H = O = n.getScrollY());
                                var d = "pswp--open ";
                                for (a.mainClass && (d += a.mainClass + " "), a.showHideOpacity && (d += "pswp--animate_opacity "), d += E ? "pswp--touch" : "pswp--notouch", d += F.animationName ? " pswp--css_animation" : "", d += F.svg ? " pswp--svg" : "", n.addClass(t, d), o.updateSize(), u = -1, gt = null, i = 0; i < 3; i++) At((i + u) * mt.x, _[i].el.style);
                                D || n.bind(o.scrollWrap, f, o), It("initialZoomInEnd", (function() {
                                    o.setContent(_[0], c - 1), o.setContent(_[2], c + 1), _[0].el.style.display = _[2].el.style.display = "block", a.focus && t.focus(), n.bind(document, "keydown", o), F.transform && n.bind(o.scrollWrap, "click", o), a.mouseUsed || n.bind(document, "mousemove", Ft), n.bind(window, "resize scroll orientationchange", o), St("bindEvents")
                                })), o.setContent(_[1], c), o.updateCurrItem(), St("afterInit"), vt || (b = setInterval((function() {
                                    qt || N || K || g !== o.currItem.initialZoomLevel || o.updateSize()
                                }), 1e3)), n.addClass(t, "pswp--visible")
                            }
                        },
                        close: function() {
                            r && (r = !1, l = !0, St("close"), n.unbind(window, "resize scroll orientationchange", o), n.unbind(window, "scroll", m.scroll), n.unbind(document, "keydown", o), n.unbind(document, "mousemove", Ft), F.transform && n.unbind(o.scrollWrap, "click", o), N && n.unbind(window, p, o), clearTimeout(W), St("unbindEvents"), $e(o.currItem, null, !0, o.destroy))
                        },
                        destroy: function() {
                            St("destroy"), He && clearTimeout(He), t.setAttribute("aria-hidden", "true"), t.className = M, b && clearInterval(b), n.unbind(o.scrollWrap, f, o), n.unbind(window, "scroll", o), fe(), Xt(), xt = null
                        },
                        panTo: function(t, e, i) {
                            i || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), ht.x = t, ht.y = e, Lt()
                        },
                        handleEvent: function(t) {
                            t = t || window.event, m[t.type] && m[t.type](t)
                        },
                        goTo: function(t) {
                            var e = (t = _t(t)) - c;
                            gt = e, c = t, o.currItem = Re(c), pt -= e, Pt(mt.x * pt), Xt(), it = !1, o.updateCurrItem()
                        },
                        next: function() {
                            o.goTo(c + 1)
                        },
                        prev: function() {
                            o.goTo(c - 1)
                        },
                        updateCurrZoomItem: function(t) {
                            if (t && St("beforeChange", 0), _[1].el.children.length) {
                                var e = _[1].el.children[0];
                                et = n.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                            } else et = null;
                            tt = o.currItem.bounds, v = g = o.currItem.initialZoomLevel, ht.x = tt.center.x, ht.y = tt.center.y, t && St("afterChange")
                        },
                        invalidateCurrItems: function() {
                            C = !0;
                            for (var t = 0; t < 3; t++) _[t].item && (_[t].item.needsUpdate = !0)
                        },
                        updateCurrItem: function(t) {
                            if (0 !== gt) {
                                var e, i = Math.abs(gt);
                                if (!(t && i < 2)) {
                                    o.currItem = Re(c), bt = !1, St("beforeChange", gt), i >= 3 && (u += gt + (gt > 0 ? -3 : 3), i = 3);
                                    for (var s = 0; s < i; s++) gt > 0 ? (e = _.shift(), _[2] = e, u++, At((u + 2) * mt.x, e.el.style), o.setContent(e, c - i + s + 1 + 1)) : (e = _.pop(), _.unshift(e), u--, At(u * mt.x, e.el.style), o.setContent(e, c + i - s - 1 - 1));
                                    if (et && 1 === Math.abs(gt)) {
                                        var n = Re(x);
                                        n.initialZoomLevel !== g && (qe(n, ut), Ze(n), Et(n))
                                    }
                                    gt = 0, o.updateCurrZoomItem(), x = c, St("afterChange")
                                }
                            }
                        },
                        updateSize: function(e) {
                            if (!vt && a.modal) {
                                var i = n.getScrollY();
                                if (H !== i && (t.style.top = i + "px", H = i), !e && yt.x === window.innerWidth && yt.y === window.innerHeight) return;
                                yt.x = window.innerWidth, yt.y = window.innerHeight, t.style.height = yt.y + "px"
                            }
                            if (ut.x = o.scrollWrap.clientWidth, ut.y = o.scrollWrap.clientHeight, Yt(), mt.x = ut.x + Math.round(ut.x * a.spacing), mt.y = ut.y, Pt(mt.x * pt), St("beforeResize"), void 0 !== u) {
                                for (var s, r, l, d = 0; d < 3; d++) s = _[d], At((d + u) * mt.x, s.el.style), l = c + d - 1, a.loop && je() > 2 && (l = _t(l)), (r = Re(l)) && (C || r.needsUpdate || !r.bounds) ? (o.cleanSlide(r), o.setContent(s, l), 1 === d && (o.currItem = r, o.updateCurrZoomItem(!0)), r.needsUpdate = !1) : -1 === s.index && l >= 0 && o.setContent(s, l), r && r.container && (qe(r, ut), Ze(r), Et(r));
                                C = !1
                            }
                            v = g = o.currItem.initialZoomLevel, (tt = o.currItem.bounds) && (ht.x = tt.center.x, ht.y = tt.center.y, Lt(!0)), St("resize")
                        },
                        zoomTo: function(t, e, i, s, o) {
                            e && (v = g, he.x = Math.abs(e.x) - ht.x, he.y = Math.abs(e.y) - ht.y, Ot(ct, ht));
                            var a = Wt(t, !1),
                                r = {};
                            jt("x", a, r, t), jt("y", a, r, t);
                            var l = g,
                                d = ht.x,
                                c = ht.y;
                            Dt(r);
                            var h = function(e) {
                                1 === e ? (g = t, ht.x = r.x, ht.y = r.y) : (g = (t - l) * e + l, ht.x = (r.x - d) * e + d, ht.y = (r.y - c) * e + c), o && o(e), Lt(1 === e)
                            };
                            i ? Zt("customZoomTo", 0, 1, i, s || n.easing.sine.inOut, h) : h(1)
                        }
                    },
                    Kt = {},
                    Jt = {},
                    te = {},
                    ee = {},
                    ie = {},
                    se = [],
                    ne = {},
                    oe = [],
                    ae = {},
                    re = 0,
                    le = {
                        x: 0,
                        y: 0
                    },
                    de = 0,
                    ce = {
                        x: 0,
                        y: 0
                    },
                    he = {
                        x: 0,
                        y: 0
                    },
                    ue = {
                        x: 0,
                        y: 0
                    },
                    pe = function(t, e) {
                        return ae.x = Math.abs(t.x - e.x), ae.y = Math.abs(t.y - e.y), Math.sqrt(ae.x * ae.x + ae.y * ae.y)
                    },
                    fe = function() {
                        X && (P(X), X = null)
                    },
                    me = function() {
                        N && (X = A(me), Le())
                    },
                    ge = function(t, e) {
                        return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : ge(t.parentNode, e))
                    },
                    ve = {},
                    we = function(t, e) {
                        return ve.prevent = !ge(t.target, a.isClickableElement), St("preventDragEvent", t, e, ve), ve.prevent
                    },
                    ye = function(t, e) {
                        return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
                    },
                    be = function(t, e, i) {
                        i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y)
                    },
                    Ce = function() {
                        var t = ht.y - o.currItem.initialPosition.y;
                        return 1 - Math.abs(t / (ut.y / 2))
                    },
                    _e = {},
                    xe = {},
                    Ie = [],
                    Se = function(t) {
                        for (; Ie.length > 0;) Ie.pop();
                        return L ? (lt = 0, se.forEach((function(t) {
                            0 === lt ? Ie[0] = t : 1 === lt && (Ie[1] = t), lt++
                        }))) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Ie[0] = ye(t.touches[0], _e), t.touches.length > 1 && (Ie[1] = ye(t.touches[1], xe))) : (_e.x = t.pageX, _e.y = t.pageY, _e.id = "", Ie[0] = _e), Ie
                    },
                    Te = function(t, e) {
                        var i, s, n, r, l = ht[t] + e[t],
                            d = e[t] > 0,
                            c = ce.x + e.x,
                            h = ce.x - ne.x;
                        return i = l > tt.min[t] || l < tt.max[t] ? a.panEndFriction : 1, l = ht[t] + e[t] * i, !a.allowPanToNext && g !== o.currItem.initialZoomLevel || (et ? "h" !== st || "x" !== t || U || (d ? (l > tt.min[t] && (i = a.panEndFriction, tt.min[t] - l, s = tt.min[t] - ct[t]), (s <= 0 || h < 0) && je() > 1 ? (r = c, h < 0 && c > ne.x && (r = ne.x)) : tt.min.x !== tt.max.x && (n = l)) : (l < tt.max[t] && (i = a.panEndFriction, l - tt.max[t], s = ct[t] - tt.max[t]), (s <= 0 || h > 0) && je() > 1 ? (r = c, h > 0 && c < ne.x && (r = ne.x)) : tt.min.x !== tt.max.x && (n = l))) : r = c, "x" !== t) ? void(it || Z || g > o.currItem.fitRatio && (ht[t] += e[t] * i)) : (void 0 !== r && (Pt(r, !0), Z = r !== ne.x), tt.min.x !== tt.max.x && (void 0 !== n ? ht.x = n : Z || (ht.x += e.x * i)), void 0 !== r)
                    },
                    ke = function(t) {
                        if (!("mousedown" === t.type && t.button > 0)) {
                            if (Be) return void t.preventDefault();
                            if (!Y || "mousedown" !== t.type) {
                                if (we(t, !0) && t.preventDefault(), St("pointerDown"), L) {
                                    var e = n.arraySearch(se, t.pointerId, "id");
                                    e < 0 && (e = se.length), se[e] = {
                                        x: t.pageX,
                                        y: t.pageY,
                                        id: t.pointerId
                                    }
                                }
                                var i = Se(t),
                                    s = i.length;
                                Q = null, Xt(), N && 1 !== s || (N = nt = !0, n.bind(window, p, o), $ = rt = ot = G = Z = V = q = U = !1, st = null, St("firstTouchStart", i), Ot(ct, ht), dt.x = dt.y = 0, Ot(ee, i[0]), Ot(ie, ee), ne.x = mt.x * pt, oe = [{
                                    x: ee.x,
                                    y: ee.y
                                }], R = B = Tt(), Wt(g, !0), fe(), me()), !K && s > 1 && !it && !Z && (v = g, U = !1, K = q = !0, dt.y = dt.x = 0, Ot(ct, ht), Ot(Kt, i[0]), Ot(Jt, i[1]), be(Kt, Jt, ue), he.x = Math.abs(ue.x) - ht.x, he.y = Math.abs(ue.y) - ht.y, J = pe(Kt, Jt))
                            }
                        }
                    },
                    ze = function(t) {
                        if (t.preventDefault(), L) {
                            var e = n.arraySearch(se, t.pointerId, "id");
                            if (e > -1) {
                                var i = se[e];
                                i.x = t.pageX, i.y = t.pageY
                            }
                        }
                        if (N) {
                            var s = Se(t);
                            if (st || V || K) Q = s;
                            else if (ce.x !== mt.x * pt) st = "h";
                            else {
                                var o = Math.abs(s[0].x - ee.x) - Math.abs(s[0].y - ee.y);
                                Math.abs(o) >= 10 && (st = o > 0 ? "h" : "v", Q = s)
                            }
                        }
                    },
                    Le = function() {
                        if (Q) {
                            var t = Q.length;
                            if (0 !== t)
                                if (Ot(Kt, Q[0]), te.x = Kt.x - ee.x, te.y = Kt.y - ee.y, K && t > 1) {
                                    if (ee.x = Kt.x, ee.y = Kt.y, !te.x && !te.y && function(t, e) {
                                            return t.x === e.x && t.y === e.y
                                        }(Q[1], Jt)) return;
                                    Ot(Jt, Q[1]), U || (U = !0, St("zoomGestureStarted"));
                                    var e = pe(Kt, Jt),
                                        i = Oe(e);
                                    i > o.currItem.initialZoomLevel + o.currItem.initialZoomLevel / 15 && (rt = !0);
                                    var s = 1,
                                        n = Bt(),
                                        r = Rt();
                                    if (i < n)
                                        if (a.pinchToClose && !rt && v <= o.currItem.initialZoomLevel) {
                                            var l = 1 - (n - i) / (n / 1.2);
                                            kt(l), St("onPinchClose", l), ot = !0
                                        } else(s = (n - i) / n) > 1 && (s = 1), i = n - s * (n / 3);
                                    else i > r && ((s = (i - r) / (6 * n)) > 1 && (s = 1), i = r + s * n);
                                    s < 0 && (s = 0), e, be(Kt, Jt, le), dt.x += le.x - ue.x, dt.y += le.y - ue.y, Ot(ue, le), ht.x = Mt("x", i), ht.y = Mt("y", i), $ = i > g, g = i, Lt()
                                } else {
                                    if (!st) return;
                                    if (nt && (nt = !1, Math.abs(te.x) >= 10 && (te.x -= Q[0].x - ie.x), Math.abs(te.y) >= 10 && (te.y -= Q[0].y - ie.y)), ee.x = Kt.x, ee.y = Kt.y, 0 === te.x && 0 === te.y) return;
                                    if ("v" === st && a.closeOnVerticalDrag && "fit" === a.scaleMode && g === o.currItem.initialZoomLevel) {
                                        dt.y += te.y, ht.y += te.y;
                                        var d = Ce();
                                        return G = !0, St("onVerticalDrag", d), kt(d), void Lt()
                                    }(function(t, e, i) {
                                        if (t - R > 50) {
                                            var s = oe.length > 2 ? oe.shift() : {};
                                            s.x = e, s.y = i, oe.push(s), R = t
                                        }
                                    })(Tt(), Kt.x, Kt.y), V = !0, tt = o.currItem.bounds, Te("x", te) || (Te("y", te), Dt(ht), Lt())
                                }
                        }
                    },
                    Ee = function(t) {
                        if (F.isOldAndroid) {
                            if (Y && "mouseup" === t.type) return;
                            t.type.indexOf("touch") > -1 && (clearTimeout(Y), Y = setTimeout((function() {
                                Y = 0
                            }), 600))
                        }
                        var e;
                        if (St("pointerUp"), we(t, !1) && t.preventDefault(), L) {
                            var i = n.arraySearch(se, t.pointerId, "id");
                            if (i > -1)
                                if (e = se.splice(i, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";
                                else {
                                    e.type = {
                                        4: "mouse",
                                        2: "touch",
                                        3: "pen"
                                    }[t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                                }
                        }
                        var s, r = Se(t),
                            l = r.length;
                        if ("mouseup" === t.type && (l = 0), 2 === l) return Q = null, !0;
                        1 === l && Ot(ie, r[0]), 0 !== l || st || it || (e || ("mouseup" === t.type ? e = {
                            x: t.pageX,
                            y: t.pageY,
                            type: "mouse"
                        } : t.changedTouches && t.changedTouches[0] && (e = {
                            x: t.changedTouches[0].pageX,
                            y: t.changedTouches[0].pageY,
                            type: "touch"
                        })), St("touchRelease", t, e));
                        var d = -1;
                        if (0 === l && (N = !1, n.unbind(window, p, o), fe(), K ? d = 0 : -1 !== de && (d = Tt() - de)), de = 1 === l ? Tt() : -1, s = -1 !== d && d < 150 ? "zoom" : "swipe", K && l < 2 && (K = !1, 1 === l && (s = "zoomPointerUp"), St("zoomGestureEnded")), Q = null, V || U || it || G)
                            if (Xt(), j || (j = Ae()), j.calculateSwipeSpeed("x"), G) {
                                if (Ce() < a.verticalDragRange) o.close();
                                else {
                                    var c = ht.y,
                                        h = at;
                                    Zt("verticalDrag", 0, 1, 300, n.easing.cubic.out, (function(t) {
                                        ht.y = (o.currItem.initialPosition.y - c) * t + c, kt((1 - h) * t + h), Lt()
                                    })), St("onVerticalDrag", 1)
                                }
                            } else {
                                if ((Z || it) && 0 === l) {
                                    if (Me(s, j)) return;
                                    s = "zoomPointerUp"
                                }
                                if (!it) return "swipe" !== s ? void De() : void(!Z && g > o.currItem.fitRatio && Pe(j))
                            }
                    },
                    Ae = function() {
                        var t, e, i = {
                            lastFlickOffset: {},
                            lastFlickDist: {},
                            lastFlickSpeed: {},
                            slowDownRatio: {},
                            slowDownRatioReverse: {},
                            speedDecelerationRatio: {},
                            speedDecelerationRatioAbs: {},
                            distanceOffset: {},
                            backAnimDestination: {},
                            backAnimStarted: {},
                            calculateSwipeSpeed: function(s) {
                                oe.length > 1 ? (t = Tt() - R + 50, e = oe[oe.length - 2][s]) : (t = Tt() - B, e = ie[s]), i.lastFlickOffset[s] = ee[s] - e, i.lastFlickDist[s] = Math.abs(i.lastFlickOffset[s]), i.lastFlickDist[s] > 20 ? i.lastFlickSpeed[s] = i.lastFlickOffset[s] / t : i.lastFlickSpeed[s] = 0, Math.abs(i.lastFlickSpeed[s]) < .1 && (i.lastFlickSpeed[s] = 0), i.slowDownRatio[s] = .95, i.slowDownRatioReverse[s] = 1 - i.slowDownRatio[s], i.speedDecelerationRatio[s] = 1
                            },
                            calculateOverBoundsAnimOffset: function(t, e) {
                                i.backAnimStarted[t] || (ht[t] > tt.min[t] ? i.backAnimDestination[t] = tt.min[t] : ht[t] < tt.max[t] && (i.backAnimDestination[t] = tt.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, Zt("bounceZoomPan" + t, ht[t], i.backAnimDestination[t], e || 300, n.easing.sine.out, (function(e) {
                                    ht[t] = e, Lt()
                                })))))
                            },
                            calculateAnimOffset: function(t) {
                                i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, ht[t] += i.distanceOffset[t])
                            },
                            panAnimLoop: function() {
                                if (Nt.zoomPan && (Nt.zoomPan.raf = A(i.panAnimLoop), i.now = Tt(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Lt(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return ht.x = Math.round(ht.x), ht.y = Math.round(ht.y), Lt(), void Ut("zoomPan")
                            }
                        };
                        return i
                    },
                    Pe = function(t) {
                        return t.calculateSwipeSpeed("y"), tt = o.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Vt("zoomPan"), t.lastNow = Tt(), void t.panAnimLoop())
                    },
                    Me = function(t, e) {
                        var i, s, r;
                        if (it || (re = c), "swipe" === t) {
                            var l = ee.x - ie.x,
                                d = e.lastFlickDist.x < 10;
                            l > 30 && (d || e.lastFlickOffset.x > 20) ? s = -1 : l < -30 && (d || e.lastFlickOffset.x < -20) && (s = 1)
                        }
                        s && ((c += s) < 0 ? (c = a.loop ? je() - 1 : 0, r = !0) : c >= je() && (c = a.loop ? 0 : je() - 1, r = !0), r && !a.loop || (gt += s, pt -= s, i = !0));
                        var h, u = mt.x * pt,
                            p = Math.abs(u - ce.x);
                        return i || u > ce.x == e.lastFlickSpeed.x > 0 ? (h = Math.abs(e.lastFlickSpeed.x) > 0 ? p / Math.abs(e.lastFlickSpeed.x) : 333, h = Math.min(h, 400), h = Math.max(h, 250)) : h = 333, re === c && (i = !1), it = !0, St("mainScrollAnimStart"), Zt("mainScroll", ce.x, u, h, n.easing.cubic.out, Pt, (function() {
                            Xt(), it = !1, re = -1, (i || re !== c) && o.updateCurrItem(), St("mainScrollAnimComplete")
                        })), i && o.updateCurrItem(!0), i
                    },
                    Oe = function(t) {
                        return 1 / J * t * v
                    },
                    De = function() {
                        var t = g,
                            e = Bt(),
                            i = Rt();
                        g < e ? t = e : g > i && (t = i);
                        var s, a = at;
                        return ot && !$ && !rt && g < e ? (o.close(), !0) : (ot && (s = function(t) {
                            kt((1 - a) * t + a)
                        }), o.zoomTo(t, 0, 200, n.easing.cubic.out, s), !0)
                    };
                Ct("Gestures", {
                    publicMethods: {
                        initGestures: function() {
                            var t = function(t, e, i, s, n) {
                                I = t + e, S = t + i, T = t + s, k = n ? t + n : ""
                            };
                            (L = F.pointerEvent) && F.touch && (F.touch = !1), L ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : F.touch ? (t("touch", "start", "move", "end", "cancel"), E = !0) : t("mouse", "down", "move", "up"), p = S + " " + T + " " + k, f = I, L && !E && (E = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), o.likelyTouchDevice = E, m[I] = ke, m[S] = ze, m[T] = Ee, k && (m[k] = m[T]), F.touch && (f += " mousedown", p += " mousemove mouseup", m.mousedown = m[I], m.mousemove = m[S], m.mouseup = m[T]), E || (a.allowPanToNext = !1)
                        }
                    }
                });
                var He, Fe, We, Be, Re, je, $e = function(e, i, s, r) {
                        var l;
                        He && clearTimeout(He), Be = !0, We = !0, e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
                        var h = s ? a.hideAnimationDuration : a.showAnimationDuration,
                            u = function() {
                                Ut("initialZoom"), s ? (o.template.removeAttribute("style"), o.bg.removeAttribute("style")) : (kt(1), i && (i.style.display = "block"), n.addClass(t, "pswp--animated-in"), St("initialZoom" + (s ? "OutEnd" : "InEnd"))), r && r(), Be = !1
                            };
                        if (!h || !l || void 0 === l.x) return St("initialZoom" + (s ? "Out" : "In")), g = e.initialZoomLevel, Ot(ht, e.initialPosition), Lt(), t.style.opacity = s ? 0 : 1, kt(1), void(h ? setTimeout((function() {
                            u()
                        }), h) : u());
                        ! function() {
                            var i = d,
                                r = !o.currItem.src || o.currItem.loadError || a.showHideOpacity;
                            e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), s || (g = l.w / e.w, ht.x = l.x, ht.y = l.y - O, o[r ? "template" : "bg"].style.opacity = .001, Lt()), Vt("initialZoom"), s && !i && n.removeClass(t, "pswp--animated-in"), r && (s ? n[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout((function() {
                                n.addClass(t, "pswp--animate_opacity")
                            }), 30)), He = setTimeout((function() {
                                if (St("initialZoom" + (s ? "Out" : "In")), s) {
                                    var o = l.w / e.w,
                                        a = {
                                            x: ht.x,
                                            y: ht.y
                                        },
                                        d = g,
                                        c = at,
                                        p = function(e) {
                                            1 === e ? (g = o, ht.x = l.x, ht.y = l.y - H) : (g = (o - d) * e + d, ht.x = (l.x - a.x) * e + a.x, ht.y = (l.y - H - a.y) * e + a.y), Lt(), r ? t.style.opacity = 1 - e : kt(c - e * c)
                                        };
                                    i ? Zt("initialZoom", 0, 1, h, n.easing.cubic.out, p, u) : (p(1), He = setTimeout(u, h + 20))
                                } else g = e.initialZoomLevel, Ot(ht, e.initialPosition), Lt(), kt(1), r ? t.style.opacity = 1 : kt(1), He = setTimeout(u, h + 20)
                            }), s ? 25 : 90)
                        }()
                    },
                    Ge = {},
                    Ye = [],
                    Ne = {
                        index: 0,
                        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                        forceProgressiveLoading: !1,
                        preload: [1, 1],
                        getNumItemsFn: function() {
                            return Fe.length
                        }
                    },
                    qe = function(t, e, i) {
                        if (t.src && !t.loadError) {
                            var s = !i;
                            if (s && (t.vGap || (t.vGap = {
                                    top: 0,
                                    bottom: 0
                                }), St("parseVerticalMargin", t)), Ge.x = e.x, Ge.y = e.y - t.vGap.top - t.vGap.bottom, s) {
                                var n = Ge.x / t.w,
                                    o = Ge.y / t.h;
                                t.fitRatio = n < o ? n : o;
                                var r = a.scaleMode;
                                "orig" === r ? i = 1 : "fit" === r && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = {
                                    center: {
                                        x: 0,
                                        y: 0
                                    },
                                    max: {
                                        x: 0,
                                        y: 0
                                    },
                                    min: {
                                        x: 0,
                                        y: 0
                                    }
                                })
                            }
                            if (!i) return;
                            return function(t, e, i) {
                                var s = t.bounds;
                                s.center.x = Math.round((Ge.x - e) / 2), s.center.y = Math.round((Ge.y - i) / 2) + t.vGap.top, s.max.x = e > Ge.x ? Math.round(Ge.x - e) : s.center.x, s.max.y = i > Ge.y ? Math.round(Ge.y - i) + t.vGap.top : s.center.y, s.min.x = e > Ge.x ? 0 : s.center.x, s.min.y = i > Ge.y ? t.vGap.top : s.center.y
                            }(t, t.w * i, t.h * i), s && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
                        }
                        return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = {
                            center: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            },
                            min: {
                                x: 0,
                                y: 0
                            }
                        }, t.initialPosition = t.bounds.center, t.bounds
                    },
                    Ue = function(t, e, i, s, n, a) {
                        e.loadError || s && (e.imageAppended = !0, Ze(e, s, e === o.currItem && bt), i.appendChild(s), a && setTimeout((function() {
                            e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                        }), 500))
                    },
                    Ve = function(t) {
                        t.loading = !0, t.loaded = !1;
                        var e = t.img = n.createEl("pswp__img", "img"),
                            i = function() {
                                t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                            };
                        return e.onload = i, e.onerror = function() {
                            t.loadError = !0, i()
                        }, e.src = t.src, e
                    },
                    Xe = function(t, e) {
                        if (t.src && t.loadError && t.container) return e && (t.container.innerHTML = ""), t.container.innerHTML = a.errorMsg.replace("%url%", t.src), !0
                    },
                    Ze = function(t, e, i) {
                        if (t.src) {
                            e || (e = t.container.lastChild);
                            var s = i ? t.w : Math.round(t.w * t.fitRatio),
                                n = i ? t.h : Math.round(t.h * t.fitRatio);
                            t.placeholder && !t.loaded && (t.placeholder.style.width = s + "px", t.placeholder.style.height = n + "px"), e.style.width = s + "px", e.style.height = n + "px"
                        }
                    },
                    Qe = function() {
                        if (Ye.length) {
                            for (var t, e = 0; e < Ye.length; e++)(t = Ye[e]).holder.index === t.index && Ue(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                            Ye = []
                        }
                    };
                Ct("Controller", {
                    publicMethods: {
                        lazyLoadItem: function(t) {
                            t = _t(t);
                            var e = Re(t);
                            e && (!e.loaded && !e.loading || C) && (St("gettingData", t, e), e.src && Ve(e))
                        },
                        initController: function() {
                            n.extend(a, Ne, !0), o.items = Fe = i, Re = o.getItemAt, je = a.getNumItemsFn, a.loop, je() < 3 && (a.loop = !1), It("beforeChange", (function(t) {
                                var e, i = a.preload,
                                    s = null === t || t >= 0,
                                    n = Math.min(i[0], je()),
                                    r = Math.min(i[1], je());
                                for (e = 1; e <= (s ? r : n); e++) o.lazyLoadItem(c + e);
                                for (e = 1; e <= (s ? n : r); e++) o.lazyLoadItem(c - e)
                            })), It("initialLayout", (function() {
                                o.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c)
                            })), It("mainScrollAnimComplete", Qe), It("initialZoomInEnd", Qe), It("destroy", (function() {
                                for (var t, e = 0; e < Fe.length; e++)(t = Fe[e]).container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                                Ye = null
                            }))
                        },
                        getItemAt: function(t) {
                            return t >= 0 && void 0 !== Fe[t] && Fe[t]
                        },
                        allowProgressiveImg: function() {
                            return a.forceProgressiveLoading || !E || a.mouseUsed || screen.width > 1200
                        },
                        setContent: function(t, e) {
                            a.loop && (e = _t(e));
                            var i = o.getItemAt(t.index);
                            i && (i.container = null);
                            var s, l = o.getItemAt(e);
                            if (l) {
                                St("gettingData", e, l), t.index = e, t.item = l;
                                var d = l.container = n.createEl("pswp__zoom-wrap");
                                if (!l.src && l.html && (l.html.tagName ? d.appendChild(l.html) : d.innerHTML = l.html), Xe(l), qe(l, ut), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((s = n.createEl("pswp__img", "img")).style.opacity = 1, s.src = l.src, Ze(l, s), Ue(0, l, d, s));
                                else {
                                    if (l.loadComplete = function(i) {
                                            if (r) {
                                                if (t && t.index === e) {
                                                    if (Xe(i, !0)) return i.loadComplete = i.img = null, qe(i, ut), Et(i), void(t.index === c && o.updateCurrZoomItem());
                                                    i.imageAppended ? !Be && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : F.transform && (it || Be) ? Ye.push({
                                                        item: i,
                                                        baseDiv: d,
                                                        img: i.img,
                                                        index: e,
                                                        holder: t,
                                                        clearPlaceholder: !0
                                                    }) : Ue(0, i, d, i.img, 0, !0)
                                                }
                                                i.loadComplete = null, i.img = null, St("imageLoadComplete", e, i)
                                            }
                                        }, n.features.transform) {
                                        var h = "pswp__img pswp__img--placeholder";
                                        h += l.msrc ? "" : " pswp__img--placeholder--blank";
                                        var u = n.createEl(h, l.msrc ? "img" : "");
                                        l.msrc && (u.src = l.msrc), Ze(l, u), d.appendChild(u), l.placeholder = u
                                    }
                                    l.loading || Ve(l), o.allowProgressiveImg() && (!We && F.transform ? Ye.push({
                                        item: l,
                                        baseDiv: d,
                                        img: l.img,
                                        index: e,
                                        holder: t
                                    }) : Ue(0, l, d, l.img, 0, !0))
                                }
                                We || e !== c ? Et(l) : (et = d.style, $e(l, s || l.img)), t.el.innerHTML = "", t.el.appendChild(d)
                            } else t.el.innerHTML = ""
                        },
                        cleanSlide: function(t) {
                            t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                        }
                    }
                });
                var Ke, Je, ti = {},
                    ei = function(t, e, i) {
                        var s = document.createEvent("CustomEvent"),
                            n = {
                                origEvent: t,
                                target: t.target,
                                releasePoint: e,
                                pointerType: i || "touch"
                            };
                        s.initCustomEvent("pswpTap", !0, !0, n), t.target.dispatchEvent(s)
                    };
                Ct("Tap", {
                    publicMethods: {
                        initTap: function() {
                            It("firstTouchStart", o.onTapStart), It("touchRelease", o.onTapRelease), It("destroy", (function() {
                                ti = {}, Ke = null
                            }))
                        },
                        onTapStart: function(t) {
                            t.length > 1 && (clearTimeout(Ke), Ke = null)
                        },
                        onTapRelease: function(t, e) {
                            if (e && !V && !q && !qt) {
                                var i = e;
                                if (Ke && (clearTimeout(Ke), Ke = null, function(t, e) {
                                        return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
                                    }(i, ti))) return void St("doubleTap", i);
                                if ("mouse" === e.type) return void ei(t, e, "mouse");
                                if ("BUTTON" === t.target.tagName.toUpperCase() || n.hasClass(t.target, "pswp__single-tap")) return void ei(t, e);
                                Ot(ti, i), Ke = setTimeout((function() {
                                    ei(t, e), Ke = null
                                }), 300)
                            }
                        }
                    }
                }), Ct("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function() {
                            D || (E ? It("mouseUsed", (function() {
                                o.setupDesktopZoom()
                            })) : o.setupDesktopZoom(!0))
                        },
                        setupDesktopZoom: function(e) {
                            Je = {};
                            var i = "wheel mousewheel DOMMouseScroll";
                            It("bindEvents", (function() {
                                n.bind(t, i, o.handleMouseWheel)
                            })), It("unbindEvents", (function() {
                                Je && n.unbind(t, i, o.handleMouseWheel)
                            })), o.mouseZoomedIn = !1;
                            var s, a = function() {
                                    o.mouseZoomedIn && (n.removeClass(t, "pswp--zoomed-in"), o.mouseZoomedIn = !1), g < 1 ? n.addClass(t, "pswp--zoom-allowed") : n.removeClass(t, "pswp--zoom-allowed"), r()
                                },
                                r = function() {
                                    s && (n.removeClass(t, "pswp--dragging"), s = !1)
                                };
                            It("resize", a), It("afterChange", a), It("pointerDown", (function() {
                                o.mouseZoomedIn && (s = !0, n.addClass(t, "pswp--dragging"))
                            })), It("pointerUp", r), e || a()
                        },
                        handleMouseWheel: function(t) {
                            if (g <= o.currItem.fitRatio) return a.modal && (!a.closeOnScroll || qt || N ? t.preventDefault() : z && Math.abs(t.deltaY) > 2 && (d = !0, o.close())), !0;
                            if (t.stopPropagation(), Je.x = 0, "deltaX" in t) 1 === t.deltaMode ? (Je.x = 18 * t.deltaX, Je.y = 18 * t.deltaY) : (Je.x = t.deltaX, Je.y = t.deltaY);
                            else if ("wheelDelta" in t) t.wheelDeltaX && (Je.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? Je.y = -.16 * t.wheelDeltaY : Je.y = -.16 * t.wheelDelta;
                            else {
                                if (!("detail" in t)) return;
                                Je.y = t.detail
                            }
                            Wt(g, !0);
                            var e = ht.x - Je.x,
                                i = ht.y - Je.y;
                            (a.modal || e <= tt.min.x && e >= tt.max.x && i <= tt.min.y && i >= tt.max.y) && t.preventDefault(), o.panTo(e, i)
                        },
                        toggleDesktopZoom: function(e) {
                            e = e || {
                                x: ut.x / 2 + ft.x,
                                y: ut.y / 2 + ft.y
                            };
                            var i = a.getDoubleTapZoom(!0, o.currItem),
                                s = g === i;
                            o.mouseZoomedIn = !s, o.zoomTo(s ? o.currItem.initialZoomLevel : i, e, 333), n[(s ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                        }
                    }
                });
                var ii, si, ni, oi, ai, ri, li, di, ci, hi, ui, pi, fi = {
                        history: !0,
                        galleryUID: 1
                    },
                    mi = function() {
                        return ui.hash.substring(1)
                    },
                    gi = function() {
                        ii && clearTimeout(ii), ni && clearTimeout(ni)
                    },
                    vi = function() {
                        var t = mi(),
                            e = {};
                        if (t.length < 5) return e;
                        var i, s = t.split("&");
                        for (i = 0; i < s.length; i++)
                            if (s[i]) {
                                var n = s[i].split("=");
                                n.length < 2 || (e[n[0]] = n[1])
                            }
                        if (a.galleryPIDs) {
                            var o = e.pid;
                            for (e.pid = 0, i = 0; i < Fe.length; i++)
                                if (Fe[i].pid === o) {
                                    e.pid = i;
                                    break
                                }
                        } else e.pid = parseInt(e.pid, 10) - 1;
                        return e.pid < 0 && (e.pid = 0), e
                    },
                    wi = function() {
                        if (ni && clearTimeout(ni), qt || N) ni = setTimeout(wi, 500);
                        else {
                            oi ? clearTimeout(si) : oi = !0;
                            var t = c + 1,
                                e = Re(c);
                            e.hasOwnProperty("pid") && (t = e.pid);
                            var i = li + "&gid=" + a.galleryUID + "&pid=" + t;
                            di || -1 === ui.hash.indexOf(i) && (hi = !0);
                            var s = ui.href.split("#")[0] + "#" + i;
                            pi ? "#" + i !== window.location.hash && history[di ? "replaceState" : "pushState"]("", document.title, s) : di ? ui.replace(s) : ui.hash = i, di = !0, si = setTimeout((function() {
                                oi = !1
                            }), 60)
                        }
                    };
                Ct("History", {
                    publicMethods: {
                        initHistory: function() {
                            if (n.extend(a, fi, !0), a.history) {
                                ui = window.location, hi = !1, ci = !1, di = !1, li = mi(), pi = "pushState" in history, li.indexOf("gid=") > -1 && (li = (li = li.split("&gid=")[0]).split("?gid=")[0]), It("afterChange", o.updateURL), It("unbindEvents", (function() {
                                    n.unbind(window, "hashchange", o.onHashChange)
                                }));
                                var t = function() {
                                    ri = !0, ci || (hi ? history.back() : li ? ui.hash = li : pi ? history.pushState("", document.title, ui.pathname + ui.search) : ui.hash = ""), gi()
                                };
                                It("unbindEvents", (function() {
                                    d && t()
                                })), It("destroy", (function() {
                                    ri || t()
                                })), It("firstUpdate", (function() {
                                    c = vi().pid
                                }));
                                var e = li.indexOf("pid=");
                                e > -1 && ("&" === (li = li.substring(0, e)).slice(-1) && (li = li.slice(0, -1))), setTimeout((function() {
                                    r && n.bind(window, "hashchange", o.onHashChange)
                                }), 40)
                            }
                        },
                        onHashChange: function() {
                            return mi() === li ? (ci = !0, void o.close()) : void(oi || (ai = !0, o.goTo(vi().pid), ai = !1))
                        },
                        updateURL: function() {
                            gi(), ai || (di ? ii = setTimeout(wi, 800) : wi())
                        }
                    }
                }), n.extend(o, Qt)
            }
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
        }(this, (function() {
            "use strict";
            return function(t, e) {
                var i, s, n, o, a, r, l, d, c, h, u, p, f, m, g, v, w, y, b = this,
                    C = !1,
                    _ = !0,
                    x = !0,
                    I = {
                        barsSize: {
                            top: 44,
                            bottom: "auto"
                        },
                        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                        timeToIdle: 4e3,
                        timeToIdleOutside: 1e3,
                        loadingIndicatorDelay: 1e3,
                        addCaptionHTMLFn: function(t, e) {
                            return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
                        },
                        closeEl: !0,
                        captionEl: !0,
                        fullscreenEl: !0,
                        zoomEl: !0,
                        shareEl: !0,
                        counterEl: !0,
                        arrowEl: !0,
                        preloaderEl: !0,
                        tapToClose: !1,
                        tapToToggleControls: !0,
                        clickToCloseNonZoomable: !0,
                        shareButtons: [{
                            id: "facebook",
                            label: "Share on Facebook",
                            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                        }, {
                            id: "twitter",
                            label: "Tweet",
                            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                        }, {
                            id: "pinterest",
                            label: "Pin it",
                            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                        }, {
                            id: "download",
                            label: "Download image",
                            url: "{{raw_image_url}}",
                            download: !0
                        }],
                        getImageURLForShare: function() {
                            return t.currItem.src || ""
                        },
                        getPageURLForShare: function() {
                            return window.location.href
                        },
                        getTextForShare: function() {
                            return t.currItem.title || ""
                        },
                        indexIndicatorSep: " / ",
                        fitControlsWidth: 1200
                    },
                    S = function(t) {
                        if (v) return !0;
                        t = t || window.event, g.timeToIdle && g.mouseUsed && !c && D();
                        for (var i, s, n = (t.target || t.srcElement).getAttribute("class") || "", o = 0; o < B.length; o++)(i = B[o]).onTap && n.indexOf("pswp__" + i.name) > -1 && (i.onTap(), s = !0);
                        if (s) {
                            t.stopPropagation && t.stopPropagation(), v = !0;
                            var a = e.features.isOldAndroid ? 600 : 30;
                            setTimeout((function() {
                                v = !1
                            }), a)
                        }
                    },
                    T = function() {
                        return !t.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
                    },
                    k = function(t, i, s) {
                        e[(s ? "add" : "remove") + "Class"](t, "pswp__" + i)
                    },
                    z = function() {
                        var t = 1 === g.getNumItemsFn();
                        t !== m && (k(s, "ui--one-slide", t), m = t)
                    },
                    L = function() {
                        k(l, "share-modal--hidden", x)
                    },
                    E = function() {
                        return (x = !x) ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout((function() {
                            x && L()
                        }), 300)) : (L(), setTimeout((function() {
                            x || e.addClass(l, "pswp__share-modal--fade-in")
                        }), 30)), x || P(), !1
                    },
                    A = function(e) {
                        var i = (e = e || window.event).target || e.srcElement;
                        return t.shout("shareLinkClick", e, i), !(!i.href || !i.hasAttribute("download") && (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), x || E(), 1))
                    },
                    P = function() {
                        for (var t, e, i, s, n = "", o = 0; o < g.shareButtons.length; o++) t = g.shareButtons[o], e = g.getImageURLForShare(t), i = g.getPageURLForShare(t), s = g.getTextForShare(t), n += '<a href="' + t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(e)).replace("{{raw_image_url}}", e).replace("{{text}}", encodeURIComponent(s)) + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", g.parseShareButtonOut && (n = g.parseShareButtonOut(t, n));
                        l.children[0].innerHTML = n, l.children[0].onclick = A
                    },
                    M = function(t) {
                        for (var i = 0; i < g.closeElClasses.length; i++)
                            if (e.hasClass(t, "pswp__" + g.closeElClasses[i])) return !0
                    },
                    O = 0,
                    D = function() {
                        clearTimeout(y), O = 0, c && b.setIdle(!1)
                    },
                    H = function(t) {
                        var e = (t = t || window.event).relatedTarget || t.toElement;
                        e && "HTML" !== e.nodeName || (clearTimeout(y), y = setTimeout((function() {
                            b.setIdle(!0)
                        }), g.timeToIdleOutside))
                    },
                    F = function(t) {
                        p !== t && (k(u, "preloader--active", !t), p = t)
                    },
                    W = function(t) {
                        var i = t.vGap;
                        if (T()) {
                            var a = g.barsSize;
                            if (g.captionEl && "auto" === a.bottom)
                                if (o || ((o = e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")), s.insertBefore(o, n), e.addClass(s, "pswp__ui--fit")), g.addCaptionHTMLFn(t, o, !0)) {
                                    var r = o.clientHeight;
                                    i.bottom = parseInt(r, 10) || 44
                                } else i.bottom = a.top;
                            else i.bottom = "auto" === a.bottom ? 0 : a.bottom;
                            i.top = a.top
                        } else i.top = i.bottom = 0
                    },
                    B = [{
                        name: "caption",
                        option: "captionEl",
                        onInit: function(t) {
                            n = t
                        }
                    }, {
                        name: "share-modal",
                        option: "shareEl",
                        onInit: function(t) {
                            l = t
                        },
                        onTap: function() {
                            E()
                        }
                    }, {
                        name: "button--share",
                        option: "shareEl",
                        onInit: function(t) {
                            r = t
                        },
                        onTap: function() {
                            E()
                        }
                    }, {
                        name: "button--zoom",
                        option: "zoomEl",
                        onTap: t.toggleDesktopZoom
                    }, {
                        name: "counter",
                        option: "counterEl",
                        onInit: function(t) {
                            a = t
                        }
                    }, {
                        name: "button--close",
                        option: "closeEl",
                        onTap: t.close
                    }, {
                        name: "button--arrow--left",
                        option: "arrowEl",
                        onTap: t.prev
                    }, {
                        name: "button--arrow--right",
                        option: "arrowEl",
                        onTap: t.next
                    }, {
                        name: "button--fs",
                        option: "fullscreenEl",
                        onTap: function() {
                            i.isFullscreen() ? i.exit() : i.enter()
                        }
                    }, {
                        name: "preloader",
                        option: "preloaderEl",
                        onInit: function(t) {
                            u = t
                        }
                    }];
                b.init = function() {
                    e.extend(t.options, I, !0), g = t.options, s = e.getChildByClass(t.scrollWrap, "pswp__ui"), h = t.listen,
                        function() {
                            var t;
                            h("onVerticalDrag", (function(t) {
                                _ && t < .95 ? b.hideControls() : !_ && t >= .95 && b.showControls()
                            })), h("onPinchClose", (function(e) {
                                _ && e < .9 ? (b.hideControls(), t = !0) : t && !_ && e > .9 && b.showControls()
                            })), h("zoomGestureEnded", (function() {
                                (t = !1) && !_ && b.showControls()
                            }))
                        }(), h("beforeChange", b.update), h("doubleTap", (function(e) {
                            var i = t.currItem.initialZoomLevel;
                            t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
                        })), h("preventDragEvent", (function(t, e, i) {
                            var s = t.target || t.srcElement;
                            s && s.getAttribute("class") && t.type.indexOf("mouse") > -1 && (s.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(s.tagName)) && (i.prevent = !1)
                        })), h("bindEvents", (function() {
                            e.bind(s, "pswpTap click", S), e.bind(t.scrollWrap, "pswpTap", b.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", b.onMouseOver)
                        })), h("unbindEvents", (function() {
                            x || E(), w && clearInterval(w), e.unbind(document, "mouseout", H), e.unbind(document, "mousemove", D), e.unbind(s, "pswpTap click", S), e.unbind(t.scrollWrap, "pswpTap", b.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", b.onMouseOver), i && (e.unbind(document, i.eventK, b.updateFullscreen), i.isFullscreen() && (g.hideAnimationDuration = 0, i.exit()), i = null)
                        })), h("destroy", (function() {
                            g.captionEl && (o && s.removeChild(o), e.removeClass(n, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(s, "pswp__ui--over-close"), e.addClass(s, "pswp__ui--hidden"), b.setIdle(!1)
                        })), g.showAnimationDuration || e.removeClass(s, "pswp__ui--hidden"), h("initialZoomIn", (function() {
                            g.showAnimationDuration && e.removeClass(s, "pswp__ui--hidden")
                        })), h("initialZoomOut", (function() {
                            e.addClass(s, "pswp__ui--hidden")
                        })), h("parseVerticalMargin", W),
                        function() {
                            var t, i, n, o = function(s) {
                                if (s)
                                    for (var o = s.length, a = 0; a < o; a++) {
                                        t = s[a], i = t.className;
                                        for (var r = 0; r < B.length; r++) n = B[r], i.indexOf("pswp__" + n.name) > -1 && (g[n.option] ? (e.removeClass(t, "pswp__element--disabled"), n.onInit && n.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                                    }
                            };
                            o(s.children);
                            var a = e.getChildByClass(s, "pswp__top-bar");
                            a && o(a.children)
                        }(), g.shareEl && r && l && (x = !0), z(), g.timeToIdle && h("mouseUsed", (function() {
                            e.bind(document, "mousemove", D), e.bind(document, "mouseout", H), w = setInterval((function() {
                                2 == ++O && b.setIdle(!0)
                            }), g.timeToIdle / 2)
                        })), g.fullscreenEl && !e.features.isOldAndroid && (i || (i = b.getFullscreenAPI()), i ? (e.bind(document, i.eventK, b.updateFullscreen), b.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs")), g.preloaderEl && (F(!0), h("beforeChange", (function() {
                            clearTimeout(f), f = setTimeout((function() {
                                t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && F(!1) : F(!0)
                            }), g.loadingIndicatorDelay)
                        })), h("imageLoadComplete", (function(e, i) {
                            t.currItem === i && F(!0)
                        })))
                }, b.setIdle = function(t) {
                    c = t, k(s, "ui--idle", t)
                }, b.update = function() {
                    _ && t.currItem ? (b.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(t.currItem, n), k(n, "caption--empty", !t.currItem.title)), C = !0) : C = !1, x || E(), z()
                }, b.updateFullscreen = function(s) {
                    s && setTimeout((function() {
                        t.setScrollOffset(0, e.getScrollY())
                    }), 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
                }, b.updateIndexIndicator = function() {
                    g.counterEl && (a.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
                }, b.onGlobalTap = function(i) {
                    var s = (i = i || window.event).target || i.srcElement;
                    if (!v)
                        if (i.detail && "mouse" === i.detail.pointerType) {
                            if (M(s)) return void t.close();
                            e.hasClass(s, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint))
                        } else if (g.tapToToggleControls && (_ ? b.hideControls() : b.showControls()), g.tapToClose && (e.hasClass(s, "pswp__img") || M(s))) return void t.close()
                }, b.onMouseOver = function(t) {
                    var e = (t = t || window.event).target || t.srcElement;
                    k(s, "ui--over-close", M(e))
                }, b.hideControls = function() {
                    e.addClass(s, "pswp__ui--hidden"), _ = !1
                }, b.showControls = function() {
                    _ = !0, C || b.update(), e.removeClass(s, "pswp__ui--hidden")
                }, b.supportsFullscreen = function() {
                    var t = document;
                    return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
                }, b.getFullscreenAPI = function() {
                    var e, i = document.documentElement,
                        s = "fullscreenchange";
                    return i.requestFullscreen ? e = {
                        enterK: "requestFullscreen",
                        exitK: "exitFullscreen",
                        elementK: "fullscreenElement",
                        eventK: s
                    } : i.mozRequestFullScreen ? e = {
                        enterK: "mozRequestFullScreen",
                        exitK: "mozCancelFullScreen",
                        elementK: "mozFullScreenElement",
                        eventK: "moz" + s
                    } : i.webkitRequestFullscreen ? e = {
                        enterK: "webkitRequestFullscreen",
                        exitK: "webkitExitFullscreen",
                        elementK: "webkitFullscreenElement",
                        eventK: "webkit" + s
                    } : i.msRequestFullscreen && (e = {
                        enterK: "msRequestFullscreen",
                        exitK: "msExitFullscreen",
                        elementK: "msFullscreenElement",
                        eventK: "MSFullscreenChange"
                    }), e && (e.enter = function() {
                        return d = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                    }, e.exit = function() {
                        return g.closeOnScroll = d, document[this.exitK]()
                    }, e.isFullscreen = function() {
                        return document[this.elementK]
                    }), e
                }
            }
        })), /*!-Before After*/ jQuery(document).ready((function(t) {
            t(".twentytwenty-container").length > 0 && (t.fn.twentytwenty = function(e) {
                e = t.extend({
                    default_offset_pct: .5,
                    orientation: "horizontal",
                    navigation_follow: !1
                }, e);
                return this.each((function() {
                    var i = e.default_offset_pct,
                        s = t(this),
                        n = e.orientation,
                        o = "vertical" === n ? "down" : "left",
                        a = "vertical" === n ? "up" : "right",
                        r = e.navigation_follow;
                    s.wrap("<div class='twentytwenty-wrapper twentytwenty-" + n + "'></div>");
                    var l = s.find("img:first"),
                        d = s.find("img:last"),
                        c = l.attr("title"),
                        h = d.attr("title");
                    s.append("<div class='twentytwenty-handle'></div>");
                    var u = s.find(".twentytwenty-handle");
                    u.append("<span class='twentytwenty-" + o + "-arrow'></span>"), u.append("<span class='twentytwenty-" + a + "-arrow'></span>"), s.addClass("twentytwenty-container"), l.addClass("twentytwenty-before"), d.addClass("twentytwenty-after"), void 0 !== c && c && c.length > 0 && s.append("<div class='twentytwenty-before-label'>" + c + "</div>"), void 0 !== h && h && h.length > 0 && s.append("<div class='twentytwenty-after-label'>" + h + "</div>");
                    var p = function(t) {
                        var e, i, o, a = (e = t, i = l.width(), o = l.height(), {
                            w: i + "px",
                            h: o + "px",
                            cw: e * i + "px",
                            ch: e * o + "px"
                        });
                        u.css("vertical" === n ? "top" : "left", "vertical" === n ? a.ch : a.cw),
                            function(t) {
                                "vertical" === n ? l.css("clip", "rect(0," + t.w + "," + t.ch + ",0)") : l.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"), s.css("height", t.h)
                            }(a)
                    };
                    t(window).on("resize.twentytwenty", (function(t) {
                        p(i)
                    }));
                    var f = 0,
                        m = 0;
                    u.on("movestart", (function(t) {
                        ((t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== n || (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === n) && t.preventDefault(), s.addClass("active"), s.removeClass("active-click"), f = s.offset().left, offsetY = s.offset().top, m = l.width(), imgHeight = l.height()
                    })), u.on("moveend", (function(t) {
                        s.removeClass("active")
                    })), u.on("move", (function(t) {
                        s.hasClass("active") && ((i = "vertical" === n ? (t.pageY - offsetY) / imgHeight : (t.pageX - f) / m) < 0 && (i = 0), i > 1 && (i = 1), p(i))
                    })), r || s.hasClass("active") || (s.on("mouseup", (function(t) {
                        s.removeClass("active-click")
                    })), s.on("mousedown", (function(t) {
                        s.addClass("active-click"), f = s.offset().left, offsetY = s.offset().top, m = l.width(), imgHeight = l.height(), (i = "vertical" === n ? (t.pageY - offsetY) / imgHeight : (t.pageX - f) / m) < 0 && (i = 0), i > 1 && (i = 1), p(i)
                    }))), s.find("img").on("mousedown", (function(t) {
                        t.preventDefault()
                    })), r && (s.on("mouseenter", (function(t) {
                        s.addClass("active"), f = s.offset().left, offsetY = s.offset().top, m = l.width(), imgHeight = l.height()
                    })), s.on("mouseleave", (function(t) {
                        s.removeClass("active")
                    })), s.on("mousemove", (function(t) {
                        s.hasClass("active") && ((i = "vertical" === n ? (t.pageY - offsetY) / imgHeight : (t.pageX - f) / m) < 0 && (i = 0), i > 1 && (i = 1), p(i))
                    }))), t(window).trigger("resize.twentytwenty")
                }))
            })
        })), jQuery(document).ready((function(t) {
            !("ontouchstart" in window) && ("on" == dtLocal.themeSettings.smoothScroll || "on_parallax" == dtLocal.themeSettings.smoothScroll && t(".stripe-parallax-bg").length > 0) && t("body").css({
                "scroll-behavior": "smooth"
            })
        })), jQuery(document).ready((function(t) {
            var e = t(window),
                i = e.height();
            e.on("resize", (function() {
                i = e.height()
            })), t.fn.parallax = function(s, n, o) {
                var a, r, l = t(this);

                function d() {
                    var e = dtGlobals.winScrollTop;
                    l.each((function() {
                        var o = t(this),
                            r = o.offset().top;
                        r + a(o) < e || r > e + i || l.css("backgroundPosition", s + " " + Math.round((r - e) * n) + "px")
                    }))
                }
                l.each((function() {
                    l.offset().top
                })), a = o ? function(t) {
                    return t.outerHeight(!0)
                } : function(t) {
                    return t.height()
                }, (arguments.length < 1 || null === s) && (s = "50%"), (arguments.length < 2 || null === n) && (n = .1), (arguments.length < 3 || null === o) && (o = !0), e.bind("scroll", d).on("resize", (function() {
                    d()
                })).bind("debouncedresize", (function() {
                    clearTimeout(r), r = setTimeout((function() {
                        d()
                    }), 20)
                })), d()
            }
        })), jQuery(document).ready((function(t) {
            t.fn.extend({
                customSelect: function(e) {
                    if (void 0 === document.body.style.maxHeight) return this;
                    var i = (e = t.extend({
                            customClass: "customSelect",
                            mapClass: !0,
                            mapStyle: !0
                        }, e)).customClass,
                        s = function(e, i) {
                            var s = e.find(":selected"),
                                o = i.children(":first"),
                                a = s.html() || "&nbsp;";
                            o.html(a), s.attr("disabled") ? i.addClass(n("DisabledOption")) : i.removeClass(n("DisabledOption")), setTimeout((function() {
                                i.removeClass(n("Open")), t(document).off("mouseup." + n("Open"))
                            }), 60)
                        },
                        n = function(t) {
                            return i + t
                        };
                    return this.each((function() {
                        var o = t(this),
                            a = t("<span />").addClass(n("Inner")),
                            r = t("<span />");
                        o.after(r.append(a)), r.addClass(i), e.mapClass && r.addClass(o.attr("class")), e.mapStyle && r.attr("style", o.attr("style")), o.addClass("hasCustomSelect").on("update", (function() {
                            s(o, r);
                            var t = parseInt(o.outerWidth(), 10) - (parseInt(r.outerWidth(), 10) - parseInt(r.width(), 10));
                            r.css({
                                display: "inline-block"
                            });
                            var e = r.outerHeight();
                            o.attr("disabled") ? r.addClass(n("Disabled")) : r.removeClass(n("Disabled")), a.css({
                                width: t,
                                display: "inline-block"
                            }), o.css({
                                "-webkit-appearance": "menulist-button",
                                width: r.outerWidth(),
                                position: "absolute",
                                opacity: 0,
                                height: e,
                                fontSize: r.css("font-size")
                            })
                        })).on("change", (function() {
                            r.addClass(n("Changed")), s(o, r)
                        })).on("keyup", (function(t) {
                            r.hasClass(n("Open")) ? 13 != t.which && 27 != t.which || s(o, r) : (o.blur(), o.focus())
                        })).on("mousedown", (function(t) {
                            r.removeClass(n("Changed"))
                        })).on("mouseup", (function(e) {
                            r.hasClass(n("Open")) || (t("." + n("Open")).not(r).length > 0 && "undefined" != typeof InstallTrigger ? o.focus() : (r.addClass(n("Open")), e.stopPropagation(), t(document).one("mouseup." + n("Open"), (function(e) {
                                e.target != o.get(0) && t.inArray(e.target, o.find("*").get()) < 0 ? o.blur() : s(o, r)
                            }))))
                        })).focus((function() {
                            r.removeClass(n("Changed")).addClass(n("Focus"))
                        })).blur((function() {
                            r.removeClass(n("Focus") + " " + n("Open"))
                        })).hover((function() {
                            r.addClass(n("Hover"))
                        }), (function() {
                            r.removeClass(n("Hover"))
                        })).trigger("update")
                    }))
                }
            })
        })),
        /*!
         * Isotope PACKAGED v3.0.0
         *
         * Licensed GPLv3 for open source use
         * or Isotope Commercial License for commercial use
         *
         * http://isotope.metafizzy.co
         * Copyright 2016 Metafizzy
         */
        function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
                e(t, i)
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
        }(window, (function(t, e) {
            "use strict";
            var i = Array.prototype.slice,
                s = t.console,
                n = void 0 === s ? function() {} : function(t) {
                    s.error(t)
                };

            function o(s, o, r) {
                function l(t, e, i) {
                    var o, a = "$()." + s + '("' + e + '")';
                    return t.each((function(t, l) {
                        var d = r.data(l, s);
                        if (d) {
                            var c = d[e];
                            if (c && "_" != e.charAt(0)) {
                                var h = c.apply(d, i);
                                o = void 0 === o ? h : o
                            } else n(a + " is not a valid method")
                        } else n(s + " not initialized. Cannot call methods, i.e. " + a)
                    })), void 0 !== o ? o : t
                }

                function d(t, e) {
                    t.each((function(t, i) {
                        var n = r.data(i, s);
                        n ? (n.option(e), n._init()) : (n = new o(i, e), r.data(i, s, n))
                    }))
                }(r = r || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
                    r.isPlainObject(t) && (this.options = r.extend(!0, this.options, t))
                }), r.fn[s] = function(t) {
                    if ("string" == typeof t) {
                        var e = i.call(arguments, 1);
                        return l(this, t, e)
                    }
                    return d(this, t), this
                }, a(r))
            }

            function a(t) {
                !t || t && t.bridget || (t.bridget = o)
            }
            return a(e || t.jQuery), o
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
        }(this, (function() {
            function t() {}
            var e = t.prototype;
            return e.on = function(t, e) {
                if (t && e) {
                    var i = this._events = this._events || {},
                        s = i[t] = i[t] || [];
                    return -1 == s.indexOf(e) && s.push(e), this
                }
            }, e.once = function(t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[t] = i[t] || {})[e] = !0, this
                }
            }, e.off = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = i.indexOf(e);
                    return -1 != s && i.splice(s, 1), this
                }
            }, e.emitEvent = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = 0,
                        n = i[s];
                    e = e || [];
                    for (var o = this._onceEvents && this._onceEvents[t]; n;) {
                        var a = o && o[n];
                        a && (this.off(t, n), delete o[n]), n.apply(this, e), n = i[s += a ? 0 : 1]
                    }
                    return this
                }
            }, t
        })),
        /*!
         * getSize v2.0.2
         * measure size of elements
         * MIT license
         */
        function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("get-size/get-size", [], (function() {
                return e()
            })) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
        }(window, (function() {
            "use strict";

            function t(t) {
                var e = parseFloat(t);
                return -1 == t.indexOf("%") && !isNaN(e) && e
            }
            var e = "undefined" == typeof console ? function() {} : function(t) {
                    console.error(t)
                },
                i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                s = i.length;

            function n(t) {
                var i = getComputedStyle(t);
                return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
            }
            var o, a = !1;

            function r(e) {
                if (function() {
                        if (!a) {
                            a = !0;
                            var e = document.createElement("div");
                            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                            var i = document.body || document.documentElement;
                            i.appendChild(e);
                            var s = n(e);
                            r.isBoxSizeOuter = o = 200 == t(s.width), i.removeChild(e)
                        }
                    }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var l = n(e);
                    if ("none" == l.display) return function() {
                        for (var t = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            }, e = 0; e < s; e++) t[i[e]] = 0;
                        return t
                    }();
                    var d = {};
                    d.width = e.offsetWidth, d.height = e.offsetHeight;
                    for (var c = d.isBorderBox = "border-box" == l.boxSizing, h = 0; h < s; h++) {
                        var u = i[h],
                            p = l[u],
                            f = parseFloat(p);
                        d[u] = isNaN(f) ? 0 : f
                    }
                    var m = d.paddingLeft + d.paddingRight,
                        g = d.paddingTop + d.paddingBottom,
                        v = d.marginLeft + d.marginRight,
                        w = d.marginTop + d.marginBottom,
                        y = d.borderLeftWidth + d.borderRightWidth,
                        b = d.borderTopWidth + d.borderBottomWidth,
                        C = c && o,
                        _ = t(l.width);
                    !1 !== _ && (d.width = _ + (C ? 0 : m + y));
                    var x = t(l.height);
                    return !1 !== x && (d.height = x + (C ? 0 : g + b)), d.innerWidth = d.width - (m + y), d.innerHeight = d.height - (g + b), d.outerWidth = d.width + v, d.outerHeight = d.height + w, d
                }
            }
            return r
        })),
        function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
        }(window, (function() {
            "use strict";
            var t = function() {
                var t = Element.prototype;
                if (t.matches) return "matches";
                if (t.matchesSelector) return "matchesSelector";
                for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                    var s = e[i] + "MatchesSelector";
                    if (t[s]) return s
                }
            }();
            return function(e, i) {
                return e[t](i)
            }
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
                return e(t, i)
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
        }(window, (function(t, e) {
            var i = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                },
                makeArray: function(t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "number" == typeof t.length)
                        for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t);
                    return e
                },
                removeFrom: function(t, e) {
                    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                },
                getParent: function(t, i) {
                    for (; t != document.body;)
                        if (t = t.parentNode, e(t, i)) return t
                },
                getQueryElement: function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                },
                handleEvent: function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }
            };
            i.filterFindElements = function(t, s) {
                t = i.makeArray(t);
                var n = [];
                return t.forEach((function(t) {
                    if (function(t) {
                            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
                        }(t))
                        if (s) {
                            e(t, s) && n.push(t);
                            for (var i = t.querySelectorAll(s), o = 0; o < i.length; o++) n.push(i[o])
                        } else n.push(t)
                })), n
            }, i.debounceMethod = function(t, e, i) {
                var s = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function() {
                    var t = this[n];
                    t && clearTimeout(t);
                    var e = arguments,
                        o = this;
                    this[n] = setTimeout((function() {
                        s.apply(o, e), delete o[n]
                    }), i || 100)
                }
            }, i.docReady = function(t) {
                "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
            }, i.toDashed = function(t) {
                return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                    return e + "-" + i
                })).toLowerCase()
            };
            var s = t.console;
            return i.htmlInit = function(e, n) {
                i.docReady((function() {
                    var o = i.toDashed(n),
                        a = "data-" + o,
                        r = document.querySelectorAll("[" + a + "]"),
                        l = document.querySelectorAll(".js-" + o),
                        d = i.makeArray(r).concat(i.makeArray(l)),
                        c = a + "-options",
                        h = t.jQuery;
                    d.forEach((function(t) {
                        var i, o = t.getAttribute(a) || t.getAttribute(c);
                        try {
                            i = o && JSON.parse(o)
                        } catch (e) {
                            return void(s && s.error("Error parsing " + a + " on " + t.className + ": " + e))
                        }
                        var r = new e(t, i);
                        h && h.data(t, n, r)
                    }))
                }))
            }, i
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
        }(window, (function(t, e) {
            "use strict";
            var i = document.documentElement.style,
                s = "string" == typeof i.transition ? "transition" : "WebkitTransition",
                n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
                o = {
                    WebkitTransition: "webkitTransitionEnd",
                    transition: "transitionend"
                }[s],
                a = {
                    transform: n,
                    transition: s,
                    transitionDuration: s + "Duration",
                    transitionProperty: s + "Property",
                    transitionDelay: s + "Delay"
                };

            function r(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = r.prototype = Object.create(t.prototype);
            l.constructor = r, l._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, l.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, l.getSize = function() {
                this.size = e(this.element)
            }, l.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    e[a[i] || i] = t[i]
                }
            }, l.getPosition = function() {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    s = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    o = this.layout.size,
                    a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.width : parseInt(s, 10),
                    r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.height : parseInt(n, 10);
                a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= e ? o.paddingLeft : o.paddingRight, r -= i ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = r
            }, l.layoutPosition = function() {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    s = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    o = i ? "left" : "right",
                    a = i ? "right" : "left",
                    r = this.position.x + t[n];
                e[o] = this.getXValue(r), e[a] = "";
                var l = s ? "paddingTop" : "paddingBottom",
                    d = s ? "top" : "bottom",
                    c = s ? "bottom" : "top",
                    h = this.position.y + t[l];
                e[d] = this.getYValue(h), e[c] = "", this.css(e), this.emitEvent("layout", [this])
            }, l.getXValue = function(t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
            }, l.getYValue = function(t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
            }, l._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    s = this.position.y,
                    n = parseInt(t, 10),
                    o = parseInt(e, 10),
                    a = n === this.position.x && o === this.position.y;
                if (this.setPosition(t, e), !a || this.isTransitioning) {
                    var r = t - i,
                        l = e - s,
                        d = {};
                    d.transform = this.getTranslate(r, l), this.transition({
                        to: d,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
                } else this.layoutPosition()
            }, l.getTranslate = function(t, e) {
                return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
            }, l.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, l._nonTransition = function(t) {
                for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, l.transition = function(t) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        this.element.offsetHeight;
                        null
                    }
                    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
                } else this._nonTransition(t)
            };
            var d = "opacity," + n.replace(/([A-Z])/g, (function(t) {
                return "-" + t.toLowerCase()
            }));
            l.enableTransition = function() {
                if (!this.isTransitioning) {
                    var t = this.layout.options.transitionDuration;
                    t = "number" == typeof t ? t + "ms" : t, this.css({
                        transitionProperty: d,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }), this.element.addEventListener(o, this, !1)
                }
            }, l.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, l.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var c = {
                "-webkit-transform": "transform"
            };
            l.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        i = c[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[i], function(t) {
                            for (var e in t) return !1;
                            return !0
                        }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                    this.emitEvent("transitionEnd", [this])
                }
            }, l.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
            }, l._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var h = {
                transitionProperty: "",
                transitionDuration: "",
                transitionDelay: ""
            };
            return l.removeTransitionStyles = function() {
                this.css(h)
            }, l.stagger = function(t) {
                t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
            }, l.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.css({
                    display: ""
                }), this.emitEvent("remove", [this])
            }, l.remove = function() {
                s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
                    this.removeElem()
                })), this.hide()) : this.removeElem()
            }, l.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options,
                    e = {};
                e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                })
            }, l.onRevealTransitionEnd = function() {
                this.isHidden || this.emitEvent("reveal")
            }, l.getHideRevealTransitionEndProperty = function(t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i
            }, l.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options,
                    e = {};
                e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                })
            }, l.onHideTransitionEnd = function() {
                this.isHidden && (this.css({
                    display: "none"
                }), this.emitEvent("hide"))
            }, l.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, r
        })),
        /*!
         * Outlayer v2.1.0
         * the brains and guts of a layout library
         * MIT license
         */
        function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, s, n, o) {
                return e(t, i, s, n, o)
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
        }(window, (function(t, e, i, s, n) {
            "use strict";
            var o = t.console,
                a = t.jQuery,
                r = function() {},
                l = 0,
                d = {};

            function c(t, e) {
                var i = s.getQueryElement(t);
                if (i) {
                    this.element = i, a && (this.$element = a(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
                    var n = ++l;
                    this.element.outlayerGUID = n, d[n] = this, this._create(), this._getOption("initLayout") && this.layout()
                } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
            }
            c.namespace = "outlayer", c.Item = n, c.defaults = {
                customSorters: {},
                containerStyle: {
                    position: "relative"
                },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                equalheight: !1,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            };
            var h = c.prototype;

            function u(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
            }
            s.extend(h, e.prototype), h.option = function(t) {
                s.extend(this.options, t)
            }, h._getOption = function(t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
            }, c.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            }, h._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
            }, h.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, h._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], n = 0; n < e.length; n++) {
                    var o = new i(e[n], this);
                    s.push(o)
                }
                return s
            }, h._filterFindItemElements = function(t) {
                return s.filterFindElements(t, this.options.itemSelector)
            }, h.getItemElements = function() {
                return this.items.map((function(t) {
                    return t.element
                }))
            }, h.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, h._init = h.layout, h._resetLayout = function() {
                this.getSize()
            }, h.getSize = function() {
                this.size = i(this.element)
            }, h._getMeasurement = function(t, e) {
                var s, n = this.options[t];
                n ? ("string" == typeof n ? s = this.element.querySelector(n) : n instanceof HTMLElement && (s = n), this[t] = s ? i(s)[e] : n) : this[t] = 0
            }, h.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, h._getItemsForLayout = function(t) {
                return t.filter((function(t) {
                    return !t.isIgnored
                }))
            }, h._layoutItems = function(t, e) {
                if (this._emitCompleteOnItems("layout", t), t && t.length) {
                    var i = [];
                    t.forEach((function(t) {
                        var s = this._getItemLayoutPosition(t);
                        s.item = t, s.isInstant = e || t.isLayoutInstant, i.push(s)
                    }), this), this._processLayoutQueue(i)
                }
            }, h._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, h._processLayoutQueue = function(t) {
                this.updateStagger(), t.forEach((function(t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                }), this)
            }, h.updateStagger = function() {
                var t = this.options.stagger;
                if (null != t) return this.stagger = function(t) {
                    if ("number" == typeof t) return t;
                    var e = t.match(/(^\d*\.?\d*)(\w*)/),
                        i = e && e[1],
                        s = e && e[2];
                    if (!i.length) return 0;
                    return (i = parseFloat(i)) * (p[s] || 1)
                }(t), this.stagger;
                this.stagger = 0
            }, h._positionItem = function(t, e, i, s, n) {
                s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
            }, h._postLayout = function() {
                this.resizeContainer()
            }, h.resizeContainer = function() {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, h._getContainerSize = r, h._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, h._emitCompleteOnItems = function(t, e) {
                var i = this;

                function s() {
                    i.dispatchEvent(t + "Complete", null, [e])
                }
                var n = e.length;
                if (e && n) {
                    var o = 0;
                    e.forEach((function(e) {
                        e.once(t, a)
                    }))
                } else s();

                function a() {
                    ++o == n && s()
                }
            }, h.dispatchEvent = function(t, e, i) {
                var s = e ? [e].concat(i) : i;
                if (this.emitEvent(t, s), a)
                    if (this.$element = this.$element || a(this.element), e) {
                        var n = a.Event(e);
                        n.type = t, this.$element.trigger(n, i)
                    } else this.$element.trigger(t, i)
            }, h.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, h.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, h.stamp = function(t) {
                (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
            }, h.unstamp = function(t) {
                (t = this._find(t)) && t.forEach((function(t) {
                    s.removeFrom(this.stamps, t), this.unignore(t)
                }), this)
            }, h._find = function(t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)
            }, h._manageStamps = function() {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
            }, h._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, h._manageStamp = r, h._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    s = this._boundingRect,
                    n = i(t);
                return {
                    left: e.left - s.left - n.marginLeft,
                    top: e.top - s.top - n.marginTop,
                    right: s.right - e.right - n.marginRight,
                    bottom: s.bottom - e.bottom - n.marginBottom
                }
            }, h.handleEvent = s.handleEvent, h.bindResize = function() {
                t.addEventListener("resize", this), this.isResizeBound = !0
            }, h.unbindResize = function() {
                t.removeEventListener("resize", this), this.isResizeBound = !1
            }, h.onresize = function() {
                this.resize()
            }, s.debounceMethod(c, "onresize", 100), h.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, h.needsResizeLayout = function() {
                var t = i(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth
            }, h.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, h.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, h.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, h.reveal = function(t) {
                if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                    var e = this.updateStagger();
                    t.forEach((function(t, i) {
                        t.stagger(i * e), t.reveal()
                    }))
                }
            }, h.hide = function(t) {
                if (this._emitCompleteOnItems("hide", t), t && t.length) {
                    var e = this.updateStagger();
                    t.forEach((function(t, i) {
                        t.stagger(i * e), t.hide()
                    }))
                }
            }, h.revealItemElements = function(t) {
                var e = this.getItems(t);
                this.reveal(e)
            }, h.hideItemElements = function(t) {
                var e = this.getItems(t);
                this.hide(e)
            }, h.getItem = function(t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i
                }
            }, h.getItems = function(t) {
                t = s.makeArray(t);
                var e = [];
                return t.forEach((function(t) {
                    var i = this.getItem(t);
                    i && e.push(i)
                }), this), e
            }, h.remove = function(t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
                    t.remove(), s.removeFrom(this.items, t)
                }), this)
            }, h.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
                    t.destroy()
                })), this.unbindResize();
                var e = this.element.outlayerGUID;
                delete d[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace)
            }, c.data = function(t) {
                var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
                return e && d[e]
            }, c.create = function(t, e) {
                var i = u(c);
                return i.defaults = s.extend({}, c.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, c.compatOptions), i.namespace = t, i.data = c.data, i.Item = u(n), s.htmlInit(i, t), a && a.bridget && a.bridget(t, i), i
            };
            var p = {
                ms: 1,
                s: 1e3
            };
            return c.Item = n, c
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
        }(window, (function(t) {
            "use strict";

            function e() {
                t.Item.apply(this, arguments)
            }
            var i = e.prototype = Object.create(t.Item.prototype),
                s = i._create;
            i._create = function() {
                this.id = this.layout.itemGUID++, s.call(this), this.sortData = {}
            }, i.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var s = e[i];
                        this.sortData[i] = s(this.element, this)
                    }
                }
            };
            var n = i.destroy;
            return i.destroy = function() {
                n.apply(this, arguments), this.css({
                    display: ""
                })
            }, e
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
        }(window, (function(t, e) {
            "use strict";

            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            var s = i.prototype;
            return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
                s[t] = function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            })), s.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element);
                return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
            }, s._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, s.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, s.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, s.getSegmentSize = function(t, e) {
                var i = t + e,
                    s = "outer" + e;
                if (this._getMeasurement(i, s), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[s] || this.isotope.size["inner" + e]
                }
            }, s.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, s.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, s.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function(t, e) {
                function n() {
                    i.apply(this, arguments)
                }
                return n.prototype = Object.create(s), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
            }, i
        })),
        /*!
         * Masonry v4.1.0
         * Cascading grid layout library
         * http://masonry.desandro.com
         * MIT License
         * by David DeSandro
         */
        function(t, e) {
            "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
        }(window, (function(t, e) {
            var i = t.create("masonry");
            return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                this.maxY = 0
            }, i.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                var s = this.columnWidth += this.gutter,
                    n = this.containerWidth + this.gutter,
                    o = n / s,
                    a = s - n % s;
                o = Math[a && a < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
            }, i.prototype.getContainerWidth = function() {
                var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, i.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
                i = Math.min(i, this.cols);
                for (var s = this._getColGroup(i), n = Math.min.apply(Math, s), o = s.indexOf(n), a = {
                        x: this.columnWidth * o,
                        y: n
                    }, r = n + t.size.outerHeight, l = this.cols + 1 - s.length, d = 0; d < l; d++) this.colYs[o + d] = r;
                return a
            }, i.prototype._getColGroup = function(t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) {
                    var n = this.colYs.slice(s, s + t);
                    e[s] = Math.max.apply(Math, n)
                }
                return e
            }, i.prototype._manageStamp = function(t) {
                var i = e(t),
                    s = this._getElementOffset(t),
                    n = this._getOption("originLeft") ? s.left : s.right,
                    o = n + i.outerWidth,
                    a = Math.floor(n / this.columnWidth);
                a = Math.max(0, a);
                var r = Math.floor(o / this.columnWidth);
                r -= o % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
                for (var l = (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight, d = a; d <= r; d++) this.colYs[d] = Math.max(l, this.colYs[d])
            }, i.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
            }, i.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, i.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth
            }, i
        })),
        /*!
         * Masonry layout mode
         * sub-classes Masonry
         * http://masonry.desandro.com
         */
        function(t, e) {
            "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
        }(window, (function(t, e) {
            "use strict";
            var i = t.create("masonry"),
                s = i.prototype,
                n = {
                    _getElementOffset: !0,
                    layout: !0,
                    _getMeasurement: !0
                };
            for (var o in e.prototype) n[o] || (s[o] = e.prototype[o]);
            var a = s.measureColumns;
            s.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var r = s._getOption;
            return s._getOption = function(t) {
                return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
            }, i
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
        }(window, (function(t) {
            "use strict";
            var e = t.create("fitRows"),
                i = e.prototype;
            return i._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
            }, i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
                var s = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, s
            }, i._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        })),
        function(t, e) {
            "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
        }(window, (function(t) {
            "use strict";
            var e = t.create("vertical", {
                    horizontalAlignment: 0
                }),
                i = e.prototype;
            return i._resetLayout = function() {
                this.y = 0
            }, i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, i._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        })),
        /*!
         * Isotope v3.0.0
         *
         * Licensed GPLv3 for open source use
         * or Isotope Commercial License for commercial use
         *
         * http://isotope.metafizzy.co
         * Copyright 2016 Metafizzy
         */
        function(t, e) {
            "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], (function(i, s, n, o, a, r) {
                return e(t, i, s, n, o, a, r)
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
        }(window, (function(t, e, i, s, n, o, a) {
            var r = t.jQuery,
                l = String.prototype.trim ? function(t) {
                    return t.trim()
                } : function(t) {
                    return t.replace(/^\s+|\s+$/g, "")
                },
                d = e.create("isotope", {
                    layoutMode: "masonry",
                    isJQueryFiltering: !0,
                    sortAscending: !0
                });
            d.Item = o, d.LayoutMode = a;
            var c = d.prototype;
            c._create = function() {
                for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], a.modes) this._initLayoutMode(t)
            }, c.reloadItems = function() {
                this.itemGUID = 0, e.prototype.reloadItems.call(this)
            }, c._itemize = function() {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.id = this.itemGUID++
                }
                return this._updateItemsSortData(t), t
            }, c._initLayoutMode = function(t) {
                var e = a.modes[t],
                    i = this.options[t] || {};
                this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
            }, c.layout = function() {
                this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
            }, c._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, c.arrange = function(t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
            }, c._init = c.arrange, c._hideReveal = function(t) {
                this.reveal(t.needReveal), this.hide(t.needHide)
            }, c._getIsInstant = function() {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return this._isInstant = e, e
            }, c._bindArrangeComplete = function() {
                var t, e, i, s = this;

                function n() {
                    t && e && i && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
                }
                this.once("layoutComplete", (function() {
                    t = !0, n()
                })), this.once("hideComplete", (function() {
                    e = !0, n()
                })), this.once("revealComplete", (function() {
                    i = !0, n()
                }))
            }, c._filter = function(t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], s = [], n = [], o = this._getFilterTest(e), a = 0; a < t.length; a++) {
                    var r = t[a];
                    if (!r.isIgnored) {
                        var l = o(r);
                        l && i.push(r), l && r.isHidden ? s.push(r) : l || r.isHidden || n.push(r)
                    }
                }
                return {
                    matches: i,
                    needReveal: s,
                    needHide: n
                }
            }, c._getFilterTest = function(t) {
                return r && this.options.isJQueryFiltering ? function(e) {
                    return r(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return s(e.element, t)
                }
            }, c.updateSortData = function(t) {
                var e;
                t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
            }, c._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = h(i)
                }
            }, c._updateItemsSortData = function(t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    t[i].updateSortData()
                }
            };
            var h = function(t) {
                if ("string" != typeof t) return t;
                var e = l(t).split(" "),
                    i = e[0],
                    s = i.match(/^\[(.+)\]$/),
                    n = function(t, e) {
                        return t ? function(e) {
                            return e.getAttribute(t)
                        } : function(t) {
                            var i = t.querySelector(e);
                            return i && i.textContent
                        }
                    }(s && s[1], i),
                    o = d.sortDataParsers[e[1]];
                return t = o ? function(t) {
                    return t && o(n(t))
                } : function(t) {
                    return t && n(t)
                }
            };
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, c._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = function(t, e) {
                        return function(i, s) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n],
                                    a = i.sortData[o],
                                    r = s.sortData[o],
                                    l = 0;
                                if (i.layout.options.customSorters[o] instanceof Function ? l = i.layout.options.customSorters[o].call(this, a, r) : a !== r && (l = a > r ? 1 : -1), 0 !== l) return l * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
                            }
                            return 0
                        }
                    }([].concat.apply(t, this.sortHistory), this.options.sortAscending);
                    this.filteredItems.sort(e), t != this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, c._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, c._resetLayout = function() {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, c._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, c._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, c._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, c.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, c.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, c.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
                }
            }, c._filterRevealAdded = function(t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
            }, c.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, s, n = e.length;
                    for (i = 0; i < n; i++) s = e[i], this.element.appendChild(s.element);
                    var o = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                    this.reveal(o)
                }
            };
            var u = c.remove;

            function p(t) {
                var e = t.create("fitRows");
                return e.prototype._resetLayout = function() {
                    if (this.x = 0, this.y = 0, this.maxY = 0, this.row = 0, this.rows = [], this._getMeasurement("gutter", "outerWidth"), this.isotope.options.equalheight)
                        for (var t = 0; t < this.isotope.items.length; t++) this.isotope.items[t].css({
                            height: "auto"
                        })
                }, e.prototype._getItemLayoutPosition = function(t) {
                    t.getSize();
                    var e = t.size.outerWidth,
                        i = Math.ceil(this.isotope.size.innerWidth + 1);
                    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY), 0 == this.x && 0 != this.y && this.row++;
                    var s = {
                        x: this.x,
                        y: this.y
                    };
                    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, void 0 === this.rows[this.row] ? (this.rows[this.row] = [], this.rows[this.row].start = this.y, this.rows[this.row].end = this.maxY) : this.rows[this.row].end = Math.max(this.rows[this.row].end, this.maxY), t.row = this.row, s
                }, e.prototype._equalHeight = function() {
                    for (var t = 0; t < this.isotope.items.length; t++) {
                        var e = this.isotope.items[t].row,
                            i = this.rows[e];
                        if (i) {
                            var s = i.end - i.start;
                            s -= this.isotope.items[t].size.borderTopWidth + this.isotope.items[t].size.borderBottomWidth, s -= this.isotope.items[t].size.marginTop + this.isotope.items[t].size.marginBottom, s -= this.gutter.height || 0, 0 == this.isotope.items[t].size.isBorderBox && (s -= this.isotope.items[t].size.paddingTop + this.isotope.items[t].size.paddingBottom), this.isotope.items[t].size.height = s, this.isotope.items[t].css({
                                height: s.toString() + "px"
                            })
                        }
                    }
                }, e.prototype._getContainerSize = function() {
                    return this.isotope.options.equalheight && this._equalHeight(), {
                        height: this.maxY
                    }
                }, e
            }
            return c.remove = function(t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                u.call(this, t);
                for (var i = e && e.length, s = 0; i && s < i; s++) {
                    var o = e[s];
                    n.removeFrom(this.filteredItems, o)
                }
            }, c.shuffle = function() {
                for (var t = 0; t < this.items.length; t++) {
                    this.items[t].sortData.random = Math.random()
                }
                this.options.sortBy = "random", this._sort(), this._layout()
            }, c._noTransition = function(t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var s = t.apply(this, e);
                return this.options.transitionDuration = i, s
            }, c.getFilteredItemElements = function() {
                return this.filteredItems.map((function(t) {
                    return t.element
                }))
            }, "function" == typeof define && define.amd ? define(["../layout-mode"], p) : "object" == typeof exports ? module.exports = p(require("../layout-mode")) : p(t.Isotope.LayoutMode), d
        })),
        function(t, e, i, s) {
            t(i);
            var n = t(e);
            t.fn.Filterade = function(e) {
                var i, s, o, a, r, l, d, c, h, u, p, f, m, g, v, w, y, b, C, _, x, I, S, T, k = !1;
                l = {
                    useFilters: !1,
                    useSorting: !1,
                    filterControls: ".filter-controls",
                    sortControls: ".sort-controls",
                    orderControls: ".order-controls",
                    controlsSelecter: "input",
                    controlsSelecterChecked: 'input[checked="checked"]',
                    defaultFilter: "all",
                    defaultSort: "date",
                    defaultOrder: "desc",
                    selectAll: "all",
                    paginationMode: "pages",
                    pageLimit: 15,
                    pageControls: ".page-controls",
                    previousButtonClass: "nav-prev",
                    previousButtonLabel: "←",
                    nextButtonClass: "nav-next",
                    nextButtonLabel: "→",
                    loadMoreButtonClass: "button-load-more",
                    loadMoreButtonLabel: "Load more",
                    pagerClass: "page",
                    activeClass: "act",
                    log: !1
                }, r = t(this), S = e.customSorters || {}, w = e.paginationMode || l.paginationMode, y = t(e.pageControls || l.pageControls), d = t(e.filterControls || l.filterControls), c = t(e.sortControls || l.sortControls), h = t(e.orderControls || l.orderControls), u = e.controlsSelecter || l.controlsSelecter, p = e.controlsSelecterChecked || l.controlsSelecterChecked, s = 1, I = r.parent().hasClass("show-all-pages") ? 999 : 5;
                var z = t(".phantom-sticky").exists(),
                    L = t(".sticky-top-line").exists(),
                    E = t(".phantom-fade").exists(),
                    A = t(".phantom-slide").exists(),
                    P = (t(".split-header").exists(), 0);
                return z || L ? P = t(".masthead").height() : (E || A) && (P = t("#phantom").height()), (v = t([])).$nodesCache = t([]), r.find("> article, .wf-cell").each((function() {
                        var e = t(this);
                        v.push({
                            node: this,
                            $node: e,
                            name: e.attr("data-name"),
                            date: new Date(e.attr("data-date"))
                        }), v.$nodesCache.push(this)
                    })), b = Math.ceil(v.length / e.pageLimit), g = function() {
                        var t;
                        "pages" !== w && "load-more" !== w || (t = 0, v.each((function() {
                            if (this.$node.hasClass("visible")) return t++
                        })), b = Math.ceil(t / (e.pageLimit || l.pageLimit)))
                    }, C = function() {
                        var i, n;
                        if ("pages" === w) {
                            if (y.empty(), y.addClass("hidden"), b > 1) {
                                y.removeClass("hidden"), 1 !== s && y.prepend('<a href="#" class="filter-item ' + (e.previousButtonClass || l.previousButtonClass) + '">' + (e.previousButtonLabel || l.previousButtonLabel) + "</a>");
                                var o = I - 1,
                                    a = Math.floor(o / 2),
                                    r = Math.ceil(o / 2),
                                    d = Math.max(s - a, 1),
                                    c = s + r;
                                d <= a && (c = d + o), c > b && (d = Math.max(b - o, 1), c = b);
                                var h = '<a href="javascript:void(0);" class="dots">…</a>',
                                    u = t('<div style="display: none;"></div>'),
                                    p = t('<div style="display: none;"></div>');
                                for (i = n = 1; 1 <= b ? n <= b : n >= b; i = 1 <= b ? ++n : --n) {
                                    var m = '<a href="#" class="' + (e.pagerClass || l.pagerClass) + '" data-page="' + +i + '">' + i + "</a>";
                                    i < d && 1 != i ? u.append(m) : (i == d && u.children().length && y.append(u).append(t(h)), i > c && i != b ? p.append(m) : (i == b && p.children().length && y.append(p).append(t(h)), y.append(m)))
                                }
                                s < b && y.append('<a href="#" class="filter-item ' + (e.nextButtonClass || l.nextButtonClass) + '">' + (e.nextButtonLabel || l.nextButtonLabel) + "</a>"), y.find('a[data-page="' + s + '"]').addClass(e.activeClass || l.activeClass);
                                var g = e.pagerClass || l.pagerClass;
                                g = g.trim().replace(" ", "."), y.find("a.dots").click((function(e) {
                                    y.find("div:hidden a").unwrap(), t(this).remove()
                                })), y.find("a." + g).click((function(i) {
                                    i.preventDefault(), s = parseInt(t(this).attr("data-page")), y.find("a." + (e.activeClass || l.activeClass)).removeClass(e.activeClass || l.activeClass), y.find('a[data-page="' + s + '"]').addClass(e.activeClass || l.activeClass), f()
                                })), y.find("a." + (e.previousButtonClass || l.previousButtonClass)).click((function(t) {
                                    t.preventDefault(), s--, f()
                                })), y.find("a." + (e.nextButtonClass || l.nextButtonClass)).click((function(t) {
                                    t.preventDefault(), s++, f()
                                }))
                            }
                        } else if ("load-more" === w && (y.addClass("hidden"), b > 1)) {
                            s < b && y.removeClass("hidden");
                            var v = e.loadMoreButtonClass || l.loadMoreButtonClass;
                            return v = v.trim().replace(" ", "."), y.find("a:not(.filtrade-ready)." + v).click((function(e) {
                                return e.preventDefault(), t(this).addClass("filtrade-ready"), !(s >= b) && (s++, x())
                            }))
                        }
                    }, f = function() {
                        var e = r.parent().attr("data-scroll-offset") ? parseInt(r.parent().attr("data-scroll-offset")) : 0,
                            i = r;
                        r.hasClass("dt-css-grid") && (i = r.parent());
                        var s = i.offset().top - 40;
                        !r.parent().hasClass("enable-pagination-scroll") && r.parent().hasClass("the7-elementor-widget") || t("html, body").animate({
                            scrollTop: s - P + e
                        }, 400), x()
                    }, _ = function() {
                        const i = r.attr("data-columns") ? JSON.parse(r.attr("data-columns")) : {};
                        if ("pages" === w || "load-more" === w) {
                            var n = 0,
                                o = t([]),
                                a = t([]);
                            v.each((function(t) {
                                this.$node.hasClass("visible") && (n++, "pages" === w && n > s * (e.pageLimit || l.pageLimit) - (e.pageLimit || l.pageLimit) && n <= (e.pageLimit || l.pageLimit) * s || "load-more" === w && n <= (e.pageLimit || l.pageLimit) * s ? a.push(this.node) : o.push(this.node))
                            })), o.removeClass("visible").addClass("hidden"), a.removeClass("hidden").addClass("visible"), a.removeClass("first"), a.first().addClass("first"), i.d && a.slice(0, i.d).addClass("d-hide-divider"), i.t && a.slice(0, i.t).addClass("t-hide-divider"), i.p && a.slice(0, i.p).addClass("m-hide-divider"), i.wd && a.slice(0, i.wd).addClass("wd-hide-divider"), (k || "pages" === w && "function" == typeof r.resetEffects) && r.resetEffects(), r.trigger("updateReady")
                        }
                    }, m = function() {
                        var s = t([]),
                            n = t([]);
                        e.useFilters || l.useFilters ? i === (e.selectAll || l.selectAll) ? n = v.$nodesCache : v.each((function(t) {
                            this.$node.hasClass(i.replace(/^\./, "")) ? n.push(this.node) : s.push(this.node)
                        })) : n = v.$nodesCache, s.removeClass("visible").addClass("hidden"), n.removeClass("hidden").addClass("visible")
                    }, T = function() {
                        var e = "asc" === a ? 1 : -1;
                        S[o] instanceof Function ? v.sort((function(t, i) {
                            return e * S[o].call(this, t, i)
                        })) : "date" === o ? v.sort((function(t, i) {
                            return e * (t.date - i.date)
                        })) : "name" === o && v.sort((function(t, i) {
                            var s = t.name.toLowerCase(),
                                n = i.name.toLowerCase(),
                                o = 0;
                            return s !== n && (o = s > n ? 1 : -1), e * o
                        })), v.$nodesCache = t([]), v.each((function() {
                            v.$nodesCache.push(this.node)
                        })), r.find(".paginator").length > 0 ? v.$nodesCache.detach().insertBefore(r.find(".paginator")) : v.$nodesCache.detach().appendTo(r)
                    }, x = function() {
                        if (m(), g(), _(), C(), r.hasClass("lazy-loading-mode")) {
                            var e = r.find(".button-load-more").offset();
                            e && dtGlobals.winScrollTop > (e.top - n.height()) / 2 && r.find(".button-load-more").trigger("click")
                        }
                        t(".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible:not(.shown)").layzrBlogInitialisation(), t(".layzr-loading-on .jquery-filter.dt-css-grid-wrap .wf-cell.visible").layzrBlogInitialisation(), r.trigger("updateReady")
                    },
                    function() {
                        return (e.useFilters || l.useFilters) && (i = d.find(p).attr("data-filter") || e.defaultFilter || l.defaultFilter, d.find(u).click((function(e) {
                            i = t(this).attr("data-filter"), s = 1, k = !0, x(), k = !1
                        }))), (e.useSorting || l.useSorting) && (o = c.find(p).attr("data-by") || e.defaultSort || l.defaultSort, a = h.find(p).attr("data-sort") || e.defaultOrder || l.defaultOrder, c.find(u).click((function(t) {
                            o = "date" === this.getAttribute("data-by") ? "date" : "name", T(), s = 1, x()
                        })), h.find(u).click((function(t) {
                            a = "desc" === this.getAttribute("data-sort") ? "desc" : "asc", T(), s = 1, x()
                        }))), x()
                    }()
            }
        }(jQuery, window, document),
        function(t, e) {
            "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ResizeSensor = e()
        }("undefined" != typeof window ? window : this, (function() {
            if ("undefined" == typeof window) return null;
            var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 20)
            };

            function e(t, e) {
                var i = Object.prototype.toString.call(t),
                    s = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "[object Object]" === i || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements,
                    n = 0,
                    o = t.length;
                if (s)
                    for (; n < o; n++) e(t[n]);
                else e(t)
            }

            function i(t) {
                if (!t.getBoundingClientRect) return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                };
                var e = t.getBoundingClientRect();
                return {
                    width: Math.round(e.width),
                    height: Math.round(e.height)
                }
            }
            var s = function(n, o) {
                function a() {
                    var t, e, i = [];
                    this.add = function(t) {
                        i.push(t)
                    }, this.call = function(s) {
                        for (t = 0, e = i.length; t < e; t++) i[t].call(this, s)
                    }, this.remove = function(s) {
                        var n = [];
                        for (t = 0, e = i.length; t < e; t++) i[t] !== s && n.push(i[t]);
                        i = n
                    }, this.length = function() {
                        return i.length
                    }
                }

                function r(e, s) {
                    if (e)
                        if (e.resizedAttached) e.resizedAttached.add(s);
                        else {
                            e.resizedAttached = new a, e.resizedAttached.add(s), e.resizeSensor = document.createElement("div"), e.resizeSensor.dir = "ltr", e.resizeSensor.className = "resize-sensor";
                            var n = "pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;",
                                o = "position: absolute; left: 0; top: 0; transition: 0s;";
                            e.resizeSensor.style.cssText = n, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor);
                            var r = window.getComputedStyle(e),
                                l = r ? r.getPropertyValue("position") : null;
                            "absolute" !== l && "relative" !== l && "fixed" !== l && (e.style.position = "relative");
                            var d, c, h = e.resizeSensor.childNodes[0],
                                u = h.childNodes[0],
                                p = e.resizeSensor.childNodes[1],
                                f = i(e),
                                m = f.width,
                                g = f.height,
                                v = !0,
                                w = 0,
                                y = function() {
                                    if (v) {
                                        if (0 === e.offsetWidth && 0 === e.offsetHeight) return void(w || (w = t((function() {
                                            w = 0, y()
                                        }))));
                                        v = !1
                                    }
                                    var i, s;
                                    i = e.offsetWidth, s = e.offsetHeight, u.style.width = i + 10 + "px", u.style.height = s + 10 + "px", h.scrollLeft = i + 10, h.scrollTop = s + 10, p.scrollLeft = i + 10, p.scrollTop = s + 10
                                };
                            e.resizeSensor.resetSensor = y;
                            var b = function() {
                                    c = 0, d && (m = f.width, g = f.height, e.resizedAttached && e.resizedAttached.call(f))
                                },
                                C = function() {
                                    f = i(e), (d = f.width !== m || f.height !== g) && !c && (c = t(b)), y()
                                },
                                _ = function(t, e, i) {
                                    t.attachEvent ? t.attachEvent("on" + e, i) : t.addEventListener(e, i)
                                };
                            _(h, "scroll", C), _(p, "scroll", C), t(y)
                        }
                }
                e(n, (function(t) {
                    r(t, o)
                })), this.detach = function(t) {
                    s.detach(n, t)
                }, this.reset = function() {
                    n.resizeSensor.resetSensor()
                }
            };
            if (s.reset = function(t) {
                    e(t, (function(t) {
                        t.resizeSensor.resetSensor()
                    }))
                }, s.detach = function(t, i) {
                    e(t, (function(t) {
                        t && (t.resizedAttached && "function" == typeof i && (t.resizedAttached.remove(i), t.resizedAttached.length()) || t.resizeSensor && (t.contains(t.resizeSensor) && t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached))
                    }))
                }, "undefined" != typeof MutationObserver) {
                var n = new MutationObserver((function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e))
                            for (var i = t[e].addedNodes, n = 0; n < i.length; n++) i[n].resizeSensor && s.reset(i[n])
                }));
                document.addEventListener("DOMContentLoaded", (function(t) {
                    n.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }))
            }
            return s
        })),
        function(t, e) {
            "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.StickySidebar = {})
        }(this, (function(t) {
            "use strict";
            "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
            var e, i, s = (function(t, e) {
                    ! function(t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var e, i, s = function() {
                                function t(t, e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var s = e[i];
                                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                                    }
                                }
                                return function(e, i, s) {
                                    return i && t(e.prototype, i), s && t(e, s), e
                                }
                            }(),
                            n = (e = ".stickySidebar", i = {
                                topSpacing: 0,
                                bottomSpacing: 0,
                                containerSelector: !1,
                                innerWrapperSelector: ".inner-wrapper-sticky",
                                stickyClass: "is-affixed",
                                resizeSensor: !0,
                                minWidth: !1
                            }, function() {
                                function t(e) {
                                    var s = this,
                                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (function(t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                        }(this, t), this.options = t.extend(i, n), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
                                    this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
                                        transform: !1,
                                        transform3d: !1
                                    }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
                                        translateY: 0,
                                        maxTranslateY: 0,
                                        topSpacing: 0,
                                        lastTopSpacing: 0,
                                        bottomSpacing: 0,
                                        lastBottomSpacing: 0,
                                        sidebarHeight: 0,
                                        sidebarWidth: 0,
                                        containerTop: 0,
                                        containerHeight: 0,
                                        viewportHeight: 0,
                                        viewportTop: 0,
                                        lastViewportTop: 0
                                    }, ["handleEvent"].forEach((function(t) {
                                        s[t] = s[t].bind(s)
                                    })), this.initialize()
                                }
                                return s(t, [{
                                    key: "initialize",
                                    value: function() {
                                        var t = this;
                                        if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                                            var e = document.createElement("div");
                                            for (e.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(e); this.sidebar.firstChild != e;) e.appendChild(this.sidebar.firstChild);
                                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                                        }
                                        if (this.options.containerSelector) {
                                            var i = document.querySelectorAll(this.options.containerSelector);
                                            if ((i = Array.prototype.slice.call(i)).forEach((function(e, i) {
                                                    e.contains(t.sidebar) && (t.container = e)
                                                })), !i.length) throw new Error("The container does not contains on the sidebar.")
                                        }
                                        "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
                                    }
                                }, {
                                    key: "bindEvents",
                                    value: function() {
                                        window.addEventListener("resize", this, {
                                            passive: !0,
                                            capture: !1
                                        }), window.addEventListener("scroll", this, {
                                            passive: !0,
                                            capture: !1
                                        }), this.sidebar.addEventListener("update" + e, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
                                    }
                                }, {
                                    key: "handleEvent",
                                    value: function(t) {
                                        this.updateSticky(t)
                                    }
                                }, {
                                    key: "calcDimensions",
                                    value: function() {
                                        if (!this._breakpoint) {
                                            var e = this.dimensions;
                                            e.containerTop = t.offsetRelative(this.container).top, e.containerHeight = this.container.clientHeight, e.containerBottom = e.containerTop + e.containerHeight, e.sidebarHeight = this.sidebarInner.offsetHeight, e.sidebarWidth = this.sidebarInner.offsetWidth, e.viewportHeight = window.innerHeight, e.maxTranslateY = e.containerHeight - e.sidebarHeight, this._calcDimensionsWithScroll()
                                        }
                                    }
                                }, {
                                    key: "_calcDimensionsWithScroll",
                                    value: function() {
                                        var e = this.dimensions;
                                        e.sidebarLeft = t.offsetRelative(this.sidebar).left, e.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, e.viewportBottom = e.viewportTop + e.viewportHeight, e.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, e.topSpacing = this.options.topSpacing, e.bottomSpacing = this.options.bottomSpacing, "function" == typeof e.topSpacing && (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0), "function" == typeof e.bottomSpacing && (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? e.topSpacing < e.lastTopSpacing && (e.translateY += e.lastTopSpacing - e.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && e.bottomSpacing < e.lastBottomSpacing && (e.translateY += e.lastBottomSpacing - e.bottomSpacing, this._reStyle = !0), e.lastTopSpacing = e.topSpacing, e.lastBottomSpacing = e.bottomSpacing
                                    }
                                }, {
                                    key: "isSidebarFitsViewport",
                                    value: function() {
                                        var t = this.dimensions,
                                            e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
                                        return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
                                    }
                                }, {
                                    key: "observeScrollDir",
                                    value: function() {
                                        var t = this.dimensions;
                                        if (t.lastViewportTop !== t.viewportTop) {
                                            var e = "down" === this.direction ? Math.min : Math.max;
                                            t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                                        }
                                    }
                                }, {
                                    key: "getAffixType",
                                    value: function() {
                                        this._calcDimensionsWithScroll();
                                        var t = this.dimensions,
                                            e = t.viewportTop + t.topSpacing,
                                            i = this.affixedType;
                                        return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
                                    }
                                }, {
                                    key: "_getAffixTypeScrollingDown",
                                    value: function() {
                                        var t = this.dimensions,
                                            e = t.sidebarHeight + t.containerTop,
                                            i = t.viewportTop + t.topSpacing,
                                            s = t.viewportBottom - t.bottomSpacing,
                                            n = this.affixedType;
                                        return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, n = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, n = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - e, n = "CONTAINER-BOTTOM") : e + t.translateY <= s ? (t.translateY = s - e, n = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (n = "VIEWPORT-UNBOTTOM"), n
                                    }
                                }, {
                                    key: "_getAffixTypeScrollingUp",
                                    value: function() {
                                        var t = this.dimensions,
                                            e = t.sidebarHeight + t.containerTop,
                                            i = t.viewportTop + t.topSpacing,
                                            s = t.viewportBottom - t.bottomSpacing,
                                            n = this.affixedType;
                                        return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, n = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - e, n = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (n = "VIEWPORT-UNBOTTOM"), n
                                    }
                                }, {
                                    key: "_getStyle",
                                    value: function(e) {
                                        if (void 0 !== e) {
                                            var i = {
                                                    inner: {},
                                                    outer: {}
                                                },
                                                s = this.dimensions;
                                            switch (e) {
                                                case "VIEWPORT-TOP":
                                                    i.inner = {
                                                        position: "fixed",
                                                        top: s.topSpacing,
                                                        left: s.sidebarLeft - s.viewportLeft,
                                                        width: s.sidebarWidth
                                                    };
                                                    break;
                                                case "VIEWPORT-BOTTOM":
                                                    i.inner = {
                                                        position: "fixed",
                                                        top: "auto",
                                                        left: s.sidebarLeft,
                                                        bottom: s.bottomSpacing,
                                                        width: s.sidebarWidth
                                                    };
                                                    break;
                                                case "CONTAINER-BOTTOM":
                                                case "VIEWPORT-UNBOTTOM":
                                                    var n = this._getTranslate(0, s.translateY + "px");
                                                    i.inner = n ? {
                                                        transform: n
                                                    } : {
                                                        position: "absolute",
                                                        top: s.translateY,
                                                        width: s.sidebarWidth
                                                    }
                                            }
                                            switch (e) {
                                                case "VIEWPORT-TOP":
                                                case "VIEWPORT-BOTTOM":
                                                case "VIEWPORT-UNBOTTOM":
                                                case "CONTAINER-BOTTOM":
                                                    i.outer = {
                                                        height: s.sidebarHeight,
                                                        position: "relative"
                                                    }
                                            }
                                            return i.outer = t.extend({
                                                height: "",
                                                position: ""
                                            }, i.outer), i.inner = t.extend({
                                                position: "relative",
                                                top: "",
                                                left: "",
                                                bottom: "",
                                                width: "",
                                                transform: ""
                                            }, i.inner), i
                                        }
                                    }
                                }, {
                                    key: "stickyPosition",
                                    value: function(i) {
                                        if (!this._breakpoint) {
                                            i = this._reStyle || i || !1, this.options.topSpacing, this.options.bottomSpacing;
                                            var s = this.getAffixType(),
                                                n = this._getStyle(s);
                                            if ((this.affixedType != s || i) && s) {
                                                var o = "affix." + s.toLowerCase().replace("viewport-", "") + e;
                                                for (var a in t.eventTrigger(this.sidebar, o), "STATIC" === s ? t.removeClass(this.sidebar, this.options.stickyClass) : t.addClass(this.sidebar, this.options.stickyClass), n.outer) {
                                                    var r = "number" == typeof n.outer[a] ? "px" : "";
                                                    this.sidebar.style[a] = n.outer[a] + r
                                                }
                                                for (var l in n.inner) {
                                                    var d = "number" == typeof n.inner[l] ? "px" : "";
                                                    this.sidebarInner.style[l] = n.inner[l] + d
                                                }
                                                var c = "affixed." + s.toLowerCase().replace("viewport-", "") + e;
                                                t.eventTrigger(this.sidebar, c)
                                            } else this._initialized && (this.sidebarInner.style.left = n.inner.left);
                                            this.affixedType = s
                                        }
                                    }
                                }, {
                                    key: "_widthBreakpoint",
                                    value: function() {
                                        window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), t.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                                    }
                                }, {
                                    key: "updateSticky",
                                    value: function() {
                                        var t, e = this,
                                            i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                        this._running || (this._running = !0, t = i.type, requestAnimationFrame((function() {
                                            if ("scroll" === t) e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                                            else e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0);
                                            e._running = !1
                                        })))
                                    }
                                }, {
                                    key: "_setSupportFeatures",
                                    value: function() {
                                        var e = this.support;
                                        e.transform = t.supportTransform(), e.transform3d = t.supportTransform(!0)
                                    }
                                }, {
                                    key: "_getTranslate",
                                    value: function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                                            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                                        return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        window.removeEventListener("resize", this, {
                                            capture: !1
                                        }), window.removeEventListener("scroll", this, {
                                            capture: !1
                                        }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + e, this);
                                        var t = {
                                            inner: {},
                                            outer: {}
                                        };
                                        for (var i in t.inner = {
                                                position: "",
                                                top: "",
                                                left: "",
                                                bottom: "",
                                                width: "",
                                                transform: ""
                                            }, t.outer = {
                                                height: "",
                                                position: ""
                                            }, t.outer) this.sidebar.style[i] = t.outer[i];
                                        for (var s in t.inner) this.sidebarInner.style[s] = t.inner[s];
                                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
                                    }
                                }], [{
                                    key: "supportTransform",
                                    value: function(t) {
                                        var e = !1,
                                            i = t ? "perspective" : "transform",
                                            s = i.charAt(0).toUpperCase() + i.slice(1),
                                            n = document.createElement("support").style;
                                        return (i + " " + ["Webkit", "Moz", "O", "ms"].join(s + " ") + s).split(" ").forEach((function(t, i) {
                                            if (void 0 !== n[t]) return e = t, !1
                                        })), e
                                    }
                                }, {
                                    key: "eventTrigger",
                                    value: function(t, e, i) {
                                        try {
                                            var s = new CustomEvent(e, {
                                                detail: i
                                            })
                                        } catch (t) {
                                            (s = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                                        }
                                        t.dispatchEvent(s)
                                    }
                                }, {
                                    key: "extend",
                                    value: function(t, e) {
                                        var i = {};
                                        for (var s in t) void 0 !== e[s] ? i[s] = e[s] : i[s] = t[s];
                                        return i
                                    }
                                }, {
                                    key: "offsetRelative",
                                    value: function(t) {
                                        var e = {
                                            left: 0,
                                            top: 0
                                        };
                                        do {
                                            var i = t.offsetTop,
                                                s = t.offsetLeft;
                                            isNaN(i) || (e.top += i), isNaN(s) || (e.left += s), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                                        } while (t);
                                        return e
                                    }
                                }, {
                                    key: "addClass",
                                    value: function(e, i) {
                                        t.hasClass(e, i) || (e.classList ? e.classList.add(i) : e.className += " " + i)
                                    }
                                }, {
                                    key: "removeClass",
                                    value: function(e, i) {
                                        t.hasClass(e, i) && (e.classList ? e.classList.remove(i) : e.className = e.className.replace(new RegExp("(^|\\b)" + i.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                                    }
                                }, {
                                    key: "hasClass",
                                    value: function(t, e) {
                                        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                                    }
                                }, {
                                    key: "defaults",
                                    get: function() {
                                        return i
                                    }
                                }]), t
                            }());
                        t.default = n, window.StickySidebar = n
                    }(e)
                }(e = {
                    exports: {}
                }, e.exports), e.exports),
                n = (i = s) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
            t.default = n, t.__moduleExports = s, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }));
    var the7Utils = {
        parseIntParam: function(t, e) {
            return e = void 0 !== e ? e : 0, t ? parseInt(t) : e
        },
        parseFloatParam: function(t, e) {
            return e = void 0 !== e ? e : 0, t ? parseFloat(t) : e
        },
        parseParam: function(t, e) {
            return e = void 0 !== e ? e : "", void 0 !== t ? t : e
        },
        isFunction: function(t) {
            return "function" == typeof t
        }
    };
    (function(t, e, i, s) {
        "use strict";
        var n = "rcrumbs",
            o = {
                version: "1.1.0",
                callback: {
                    preCrumbsListDisplay: t.noop,
                    preCrumbDisplay: t.noop,
                    postCrumbsListDisplay: t.noop,
                    postCrumbDisplay: t.noop
                },
                ellipsis: !0,
                windowResize: !0,
                nbUncollapsableCrumbs: 2,
                nbFixedCrumbs: 0,
                animation: {
                    activated: !0,
                    speed: 400
                }
            };

        function a(e, i) {
            this.element = e, this.$element = t(e), this.options = t.extend(!0, {}, o, i), this._defaults = o, this._name = n, a.prototype.plugin = this, this._init()
        }
        a.prototype = {
            version: function() {
                return this.options.version
            },
            _init: function() {
                if (this.$element.hasClass("rcrumbs") || this.$element.addClass("rcrumbs"), this.nbCrumbDisplayed = 0, this.$crumbsList = t(this.element), this.$crumbs = t("li", this.$crumbsList), this.$lastCrumb = this.$crumbs.last(), this.reversedCrumbs = t("li", this.$crumbsList).get().reverse(), this.lastNbCrumbDisplayed = 0, this.totalCrumbsWidth = 0, this.fixedCrumbsWidth = 0, this._initCrumbs(), this.options.nbFixedCrumbs > 0) {
                    var e = this.$crumbs.length;
                    this.$crumbs = t("li", this.$crumbsList).slice(this.options.nbFixedCrumbs, e), this.reversedCrumbs = t("li", this.$crumbsList).slice(this.options.nbFixedCrumbs, e).get().reverse();
                    var i = this;
                    t("li", this.$crumbsList).slice(0, this.options.nbFixedCrumbs).each((function(e, s) {
                        i.totalCrumbsWidth += t(s).data("width"), t(s).addClass("show")
                    }))
                }
                this._showOrHideCrumbsList(!0), this.options.windowResize && this._showOrHideCrumbsListOnWindowResize()
            },
            _getHiddenElWidth: function(e) {
                var i, s = t(e).clone(!1);
                return s.css({
                    visibility: "hidden",
                    position: "absolute"
                }), s.appendTo(this.$crumbsList), i = s.width(), s.remove(), i
            },
            _initCrumbs: function() {
                var e = this;
                t(this.$crumbsList).contents().filter((function() {
                    return 3 === this.nodeType
                })).remove(), t.each(this.$crumbs, (function(i, s) {
                    var n = t(this);
                    e._storeCrumbWidth(n)
                })), this.options.nbFixedCrumbs > 0 && t(this.$crumbs).slice(0, this.options.nbFixedCrumbs).each((function(i, s) {
                    e.fixedCrumbsWidth += t(s).data("width")
                }))
            },
            _storeCrumbWidth: function(t) {
                var e = this._getHiddenElWidth(t);
                return t.data("width", e), e
            },
            _showOrHideCrumbsList: function(e) {
                var i = this;
                this.remainingSpaceToDisplayCrumbs = this.$element.width(), this.nbCrumbDisplayed = 0, this.totalCrumbsWidth = 0, this.options.nbFixedCrumbs > 0 && (this.remainingSpaceToDisplayCrumbs -= this.fixedCrumbsWidth, t("li", this.$crumbsList).slice(0, this.options.nbFixedCrumbs).each((function(e, s) {
                    i.totalCrumbsWidth += t(s).data("width")
                }))), this.nextCrumbToShowWidth = undefined, this.options.callback.preCrumbsListDisplay(this), t.each(this.reversedCrumbs, (function(s, n) {
                    var o = t(this),
                        a = t(i.reversedCrumbs[s + 1]);
                    i._showOrHideCrumb(o, a, s, e)
                })), this.lastNbCrumbDisplayed = this.nbCrumbDisplayed, this.options.callback.postCrumbsListDisplay(this)
            },
            _showOrHideCrumb: function(t, e, i, s) {
                this.options.callback.preCrumbDisplay(t);
                var n = this;

                function o() {
                    t.addClass("show"), n.lastNbCrumbDisplayed < n.nbCrumbDisplayed + 1 && n.options.animation.activated && !s ? (t.width(0), t.animate({
                        width: t.data("width")
                    }, n.options.animation.speed, (function() {
                        n.options.callback.postCrumbDisplay(t)
                    }))) : n.options.callback.postCrumbDisplay(t), n.nbCrumbDisplayed += 1
                }
                this.remainingSpaceToDisplayCrumbs -= t.data("width"), i < this.options.nbUncollapsableCrumbs ? (o(), this.remainingSpaceToDisplayCrumbs < 0 && function(t) {
                    t.css({
                        width: n.remainingSpaceToDisplayCrumbs + t.data("width") + "px"
                    }), t.addClass("ellipsis")
                }(this.$lastCrumb), this.totalCrumbsWidth += t.data("width")) : this.remainingSpaceToDisplayCrumbs >= 0 ? (o(), this.totalCrumbsWidth += t.data("width")) : (this.lastNbCrumbDisplayed > this.nbCrumbDisplayed - 1 && this.options.animation.activated ? t.animate({
                    width: 0
                }, n.options.animation.speed, (function() {
                    t.removeClass("show")
                })) : t.removeClass("show"), this.nextCrumbToShowWidth || (this.nextCrumbToShowWidth = t.data("width")))
            },
            _showOrHideCrumbsListOnWindowResize: function() {
                var i = this;
                t(e).resize((function() {
                    var e = i.$element.width();
                    (e < i.totalCrumbsWidth || i.totalCrumbsWidth + i.nextCrumbToShowWidth < e) && (t.each(i.reversedCrumbs, (function(e, i) {
                        t(this).stop(!0, !0)
                    })), i._showOrHideCrumbsList()), e >= i.totalCrumbsWidth && i.$lastCrumb.hasClass("ellipsis") && i._disableEllipsis(i.$lastCrumb)
                }))
            },
            _disableEllipsis: function(t) {
                t.css({
                    width: "auto"
                }), t.removeClass("ellipsis")
            }
        }, t.fn.rcrumbs = function(e) {
            if (a.prototype[e] && -1 === e.indexOf("_")) {
                var i = t.data(this[0], "plugin_rcrumbs");
                if (i) return a.prototype[e].apply(i, Array.prototype.slice.call(arguments, 1));
                t.error("jquery.rcrumbs plugin must be initialized first on the element")
            } else {
                if ("object" == typeof e || !e) return this.each((function() {
                    t.data(this, "plugin_rcrumbs") ? t.error("jquery.rcrumbs plugin cannot be instantiated multiple times on same element") : t.data(this, "plugin_rcrumbs", new a(this, e))
                }));
                t.error("Method " + e + " does not exist on jquery." + n)
            }
        }
    })(jQuery, window, document),
    function(t) {
        t.fn.exists = function() {
            return t(this).length > 0
        }, t.fn.loaded = function(e, i, s) {
            var n = this.length;
            return n > 0 ? this.each((function() {
                var s = this,
                    o = t(s);
                o.on("load.dt", (function(s) {
                    t(this).off("load.dt"), "function" == typeof e && e.call(this), --n <= 0 && "function" == typeof i && i.call(this)
                })), s.complete && void 0 !== s.complete && o.trigger("load.dt")
            })) : s ? ("function" == typeof i && i.call(this), this) : void 0
        }, dtGlobals.isInViewport = function(e) {
            var i = t(window),
                s = e,
                n = i.scrollTop(),
                o = i.scrollTop() + i.height(),
                a = s.offset().top + 20;
            return o >= a && n <= a
        }, t.fn.layzrInitialisation = function(e) {
            return this.each((function() {
                t(this), new Layzr({
                    container: e,
                    selector: ".lazy-load",
                    attr: "data-src",
                    attrSrcSet: "data-srcset",
                    retinaAttr: "data-src-retina",
                    hiddenAttr: "data-src-hidden",
                    threshold: 0,
                    before: function() {
                        this.style.willChange = "opacity", t(this).parents(".blog-shortcode.mode-list").length > 0 || t(this).parents(".blog-media").length > 0 ? this.setAttribute("sizes", this.width + "px") : t(this).parents(".woocom-project").length > 0 && this.setAttribute("sizes", "(max-width:" + t(this).attr("width") + "px) 100vw," + t(this).attr("width") + "px")
                    },
                    callback: function() {
                        this.classList.add("is-loaded");
                        var e = t(this);
                        e.parents(".fancy-media-wrap.photoswipe-wrapper").initPhotoswipe(), setTimeout((function() {
                            e.parents(".layzr-bg").removeClass("layzr-bg"), e.css("will-change", "auto")
                        }), 350)
                    },
                    after: function() {
                        var e = t(this);
                        this.complete && !e.hasClass("is-loaded") && (this.classList.add("is-loaded"), setTimeout((function() {
                            var e = t(this);
                            e.parents(".layzr-bg").removeClass("layzr-bg"), e.css("will-change", "auto")
                        }), 350))
                    }
                })
            }))
        }, dtGlobals.addOnloadEvent = function(e) {
            if (("object" == typeof t.ready || "function" == typeof t.ready) && "function" == typeof t.ready.then) t.ready.then((function() {
                e()
            }));
            else if (void 0 !== window.addEventListener) window.addEventListener("load", e, !1);
            else if (void 0 !== window.attachEvent) window.attachEvent("onload", e);
            else if (null != window.onload) {
                var i = window.onload;
                window.onload = function(t) {
                    i(t), window[e]()
                }
            } else window.onload = e
        }, t.fn.the7ImageRatio = function(e) {
            var i = {
                    isIE: function() {
                        return !(void 0 !== Modernizr.objectfit && Modernizr.objectfit || void 0 === Modernizr.objectfit)
                    }
                },
                s = {
                    init: function() {
                        return i.isIE() ? this.each((function() {
                            var e = t(this),
                                i = e.parent(),
                                s = e.prop("src");
                            s && !e.hasClass("compat-object-fit") && i.css("backgroundImage", "url(" + s + ")").addClass("compat-object-fit")
                        })) : this
                    },
                    update: function(e) {
                        var s = i.isIE();
                        return this.each((function() {
                            var i = t(this),
                                n = i.find("img").first();
                            if (!s) {
                                var o = {
                                    width: "",
                                    height: ""
                                };
                                if (e) {
                                    var a = i.width(),
                                        r = i.height(),
                                        l = n.width() / n.height(),
                                        d = a / r;
                                    o = {
                                        width: "auto",
                                        height: "auto"
                                    }, l < d ? o.height = "100%" : l > d && (o.width = "100%")
                                }
                                n.css(o)
                            }
                        }))
                    }
                };
            return s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void 0 : s.init.apply(this, arguments)
        }, t.fn.the7WidgetImageRatio = function(e) {
            var i = t(this),
                s = i.find(".img-ratio-wrapper"),
                n = {
                    init: function() {
                        s.find("img").the7ImageRatio(), n.refresh(), t(window).on("debouncedresize", (function() {
                            n.refresh()
                        }))
                    },
                    refresh: function() {
                        var t = i.hasClass("preserve-img-ratio-y");
                        s.the7ImageRatio("update", t)
                    }
                };
            return n[e] ? n[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e || n.init.apply(this, arguments), i
        }, window.the7ApplyWidgetImageRatio = function(t) {
            t.the7WidgetImageRatio()
        }, window.the7GetHiddenHeight = function(t, e) {
            if (!t.length) return 0;
            var i = t.attr("style");
            t.css({
                visibility: "hidden",
                display: "block"
            });
            var s = t;
            "" !== e && (s = t.find(e));
            var n = s.height();
            return t.attr("style", i || ""), n
        }, window.the7LocaleSensitiveStringsCompare = function(t, e) {
            return new Intl.Collator(document.documentElement.lang, {
                sensitivity: "base"
            }).compare(t, e)
        }, window.the7ProcessEffects = function(e, i) {
            var s = 0;
            e.each((function() {
                var e = t(this);
                t(".mobile-true").length > 0 || e.parents(".loading-effect-none").length > 0 ? e.hasClass("shown") || e.hasClass("animation-triggered") || (e.addClass("animation-triggered"), setTimeout((function() {
                    e.hasClass("animation-triggered") && e.removeClass("animation-triggered").addClass("shown")
                }), 200)) : e.hasClass("shown") || e.hasClass("animation-triggered") || !dtGlobals.isInViewport(e) || e.hasClass("hidden") || (e.addClass("animation-triggered"), s++, setTimeout((function() {
                    e.hasClass("animation-triggered") && e.removeClass("animation-triggered").addClass("shown")
                }), 100 * s)), "function" == typeof i && i.call(this)
            }))
        }
    }(jQuery), jQuery((function(t) {
        var e, i, s, n = t(document),
            o = t(window),
            a = t("html"),
            r = t("body"),
            l = t("#page"); /*!- Custom resize function*/
        function d() {
            clearTimeout(e), e = setTimeout((function() {
                t(window).trigger("debouncedresize"), t(window).trigger("the7_widget_resize")
            }), 200)
        }

        function c() {
            i = new Layzr({
                selector: ".owl-thumb-lazy-load-show",
                attr: "data-src",
                attrSrcSet: "data-srcset",
                retinaAttr: "data-src-retina",
                hiddenAttr: "data-src-hidden",
                threshold: 30,
                before: function() {
                    this.setAttribute("sizes", t(this).attr("width") + "px"), this.style.willChange = "opacity"
                },
                callback: function() {
                    var e = t(this);
                    this.classList.add("is-loaded"), setTimeout((function() {
                        e.parent().removeClass("layzr-bg"), e.css("will-change", "auto")
                    }), 350)
                }
            })
        }

        function h() {
            if (dtGlobals.isMobile) t(".skills").length > 0 && "undefined" != typeof animateSkills && the7Utils.isFunction(animateSkills) && t(".skills").animateSkills();
            else if (t(".animation-at-the-same-time").length > 0 || t(".animate-element").length > 0) {
                var e = -1;
                t(".animation-at-the-same-time:in-viewport").each((function() {
                    var e = t(this);
                    e.find(".animate-element").addClass("animation-triggered"), e.find(".animate-element:not(.start-animation)").addClass("start-animation")
                })), t(".animate-element:not(.start-animation):in-viewport").each((function() {
                    var i = t(this);
                    !i.parents(".animation-at-the-same-time").length > 0 && (i.hasClass("start-animation") || i.hasClass("animation-triggered") || (i.addClass("animation-triggered"), e++, setTimeout((function() {
                        i.addClass("start-animation"), i.hasClass("skills") && i.animateSkills()
                    }), 200 * e)))
                }))
            }
        }!dtGlobals.isMobile || dtGlobals.isWindowsPhone || dtGlobals.isAndroid ? o.on("resize", (function() {
                d()
            })) : o.bind("orientationchange", (function() {
                d()
            })), o.trigger("debouncedresize"), t.fn.layzrCarouselUpdate = function() {
                var e = t(this),
                    s = "owl-thumb-lazy-load-show",
                    n = "." + s,
                    o = !1,
                    a = e.last().next().find("img").not(n);
                a.length && (a.addClass(s), o = !0), (a = e.first().prev().find("img").not(n)).length && (a.addClass(s), o = !0), (a = e.find("img").not(n)).length && (a.addClass(s), o = !0), o && (i.updateSelector(), i.update())
            }, t(".layzr-loading-on, .vc_single_image-img").layzrInitialisation(), t.fn.layzrBlogInitialisation = function(e) {
                return this.each((function() {
                    t(this).find("img").addClass("blog-thumb-lazy-load-show");
                    new Layzr({
                        container: e,
                        selector: ".blog-thumb-lazy-load-show",
                        attr: "data-src",
                        attrSrcSet: "data-srcset",
                        retinaAttr: "data-src-retina",
                        hiddenAttr: "data-src-hidden",
                        threshold: 30,
                        before: function() {
                            this.setAttribute("sizes", this.width + "px"), this.style.willChange = "opacity", t(this).parents(".woocom-project").length > 0 && this.setAttribute("sizes", "(max-width:" + t(this).attr("width") + "px) 100vw," + t(this).attr("width") + "px")
                        },
                        callback: function() {
                            if (t(this).parents(".post").first().hasClass("visible")) {
                                this.classList.add("is-loaded");
                                var e = t(this);
                                setTimeout((function() {
                                    e.parent().removeClass("layzr-bg"), e.css("will-change", "auto")
                                }), 350)
                            }
                        }
                    })
                }))
            }, t(".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible").layzrBlogInitialisation(), window.vc_rowBehaviour = function() {
                function t() {
                    n('[data-vc-full-width="true"]').each((function() {
                        var t, e, i = n(this),
                            s = i.next(".vc_row-full-width"),
                            a = i.parent(),
                            l = parseInt(i.css("margin-left"), 10),
                            d = parseInt(i.css("margin-right"), 10),
                            c = window.innerWidth,
                            h = o.width(),
                            u = n("#content").width(),
                            p = c > dtLocal.themeSettings.mobileHeader.firstSwitchPoint,
                            f = Math.max(u, h),
                            m = n("#main > .wf-wrap"),
                            g = parseInt(m.css("width")),
                            v = parseInt(m.css("padding-left")),
                            w = r.hasClass("responsive-off"),
                            y = r.hasClass("sticky-header"),
                            b = r.hasClass("header-side-left"),
                            C = r.hasClass("header-side-right"),
                            _ = "rtl" === jQuery(document).attr("dir") ? "right" : "left";
                        if (i.addClass("vc_hidden"), s.length || (s = i.closest(".vc_ie-flexbox-fixer").next(".vc_row-full-width")), s.length) {
                            a.hasClass("vc_section") && (l = parseInt(a.css("margin-left"), 10), d = parseInt(a.css("margin-right"), 10)), n(".boxed").length > 0 ? f = n("#main").width() : w || p && n(".side-header-v-stroke").length && "none" !== n(".side-header-v-stroke").css("display") ? f = c <= u ? u : h - n(".side-header-v-stroke").width() : !y && (b || C) && p && n(".side-header").length && "none" !== n(".side-header").css("display") && (f = c <= u ? u : h - n(".side-header").width()), t = Math.ceil((f - g + 2 * v) / 2), n(".sidebar-left").length > 0 || n(".sidebar-right").length > 0 ? (e = n("#content").width(), t = 0) : e = n("#main").innerWidth();
                            var x = 0 - t - l;
                            if (i.css(_, x), i.css({
                                    position: "relative",
                                    "box-sizing": "border-box",
                                    width: e
                                }), !i.data("vcStretchContent")) {
                                var I = -1 * x;
                                0 > I && (I = 0);
                                var S = e - I - s.width() + l + d;
                                0 > S && (S = 0), i.css({
                                    "padding-left": I + "px",
                                    "padding-right": S + "px"
                                })
                            }
                            i.data("vcStretchContent") && i.find(".upb_row_bg").length > 0 && i.find(".upb_row_bg").each((function() {
                                var t = n(this);
                                "full" === t.data("bg-override") && (t.css({
                                    "min-width": e + "px"
                                }), t.css(_, 0))
                            })), i.attr("data-vc-full-width-init", "true"), i.removeClass("vc_hidden"), i.find(".ts-wrap").each((function() {
                                var t = n(this).data("thePhotoSlider");
                                void 0 !== t && t.update()
                            }))
                        }
                    }))
                }

                function e() {
                    n(".vc_row-o-full-height:first").each((function() {
                        var t, e, i;
                        (t = n(window).height()) > (e = n(this).offset().top) && (i = 100 - e / (t / 100), n(this).css("min-height", i + "vh"))
                    }))
                }
                var i, s, n = window.jQuery;
                n(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", t).on("resize.vcRowBehaviour", e), t(), e(), (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && n(".vc_row-o-full-height").each((function() {
                    var t = n(this);
                    t.data("the7VCRowFixedInIE") || "flex" !== t.css("display") || (t.wrap('<div class="vc_ie-flexbox-fixer"></div>'), t.data("the7VCRowFixedInIE", !0))
                })), vc_initVideoBackgrounds(), s = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), n(".vc_parallax-inner").remove(), n("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), n("[data-vc-parallax]").each((function() {
                    var t, e, i, o, a;
                    s = !0, "on" === n(this).data("vcParallaxOFade") && n(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), t = 100 * n(this).data("vcParallax"), (i = n("<div />").addClass("vc_parallax-inner").appendTo(n(this))).height(t + "%"), o = n(this).data("vcParallaxImage"), (a = vcExtractYoutubeId(o)) ? insertYoutubeVideoAsBackground(i, a) : void 0 !== o && i.css("background-image", "url(" + o + ")"), e = -(t - 100), i.attr("data-bottom-top", "top: " + e + "%;").attr("data-top-bottom", "top: 0%;")
                })), s && window.skrollr && (i = {
                    forceHeight: !1,
                    smoothScrolling: !1,
                    mobileCheck: function() {
                        return !1
                    }
                }, window.vcParallaxSkroll = skrollr.init(i), window.vcParallaxSkroll)
            }, t('div[data-vc-full-width="true"][data-vc-full-width-init="false"]').length > 0 && vc_rowBehaviour(), t.fn.clickOverlayGradient = function() {
                return this.each((function() {
                    var e = t(this),
                        i = 0,
                        s = e.find(".entry-excerpt"),
                        n = e.find(".post-details, .box-button");
                    s.exists() && (i += s.height()), n.exists() && (i += n.innerHeight()), e.data("the7OverlayLayoutContentOffset", i), e.css({
                        transform: "translateY(" + i + "px)"
                    }), e.data("overlayLayoutEventsWasAdded") || dtGlobals.isMobile || (e.data("overlayLayoutEventsWasAdded", !0), e.parents(".post").first().on("mouseenter tap", (function() {
                        e.css("transform", "translateY(0px)")
                    })).on("mouseleave tap", (function() {
                        e.css("transform", "translateY(" + e.data("the7OverlayLayoutContentOffset") + "px)")
                    })))
                }))
            }, dtGlobals.addOnloadEvent((function() {
                t(".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper").clickOverlayGradient()
            })), dtGlobals.touches = {}, dtGlobals.touches.touching = !1, dtGlobals.touches.touch = !1, dtGlobals.touches.currX = 0, dtGlobals.touches.currY = 0, dtGlobals.touches.cachedX = 0, dtGlobals.touches.cachedY = 0, dtGlobals.touches.count = 0, dtGlobals.resizeCounter = 0, n.on("touchstart", (function(e) {
                1 == e.originalEvent.touches.length && (dtGlobals.touches.touch = e.originalEvent.touches[0], dtGlobals.touches.cachedX = dtGlobals.touches.touch.pageX, dtGlobals.touches.cachedY = dtGlobals.touches.touch.pageY, dtGlobals.touches.touching = !0, setTimeout((function() {
                    dtGlobals.touches.currX = dtGlobals.touches.touch.pageX, dtGlobals.touches.currY = dtGlobals.touches.touch.pageY, dtGlobals.touches.cachedX !== dtGlobals.touches.currX || dtGlobals.touches.touching || dtGlobals.touches.cachedY !== dtGlobals.touches.currY || (dtGlobals.touches.count++, t(e.target).trigger("tap"))
                }), 200))
            })), n.on("touchend touchcancel", (function(t) {
                dtGlobals.touches.touching = !1
            })), n.on("touchmove", (function(t) {
                dtGlobals.touches.touch = t.originalEvent.touches[0], dtGlobals.touches.touching
            })), n.on("tap", (function(e) {
                t(".dt-hovered").trigger("mouseout")
            })),
            function(t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
            }((function(t, e) {
                var i = t.event.add,
                    s = t.event.remove,
                    n = function(e, i, s) {
                        t.event.trigger(i, s, e)
                    },
                    o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
                        return window.setTimeout((function() {
                            t()
                        }), 25)
                    },
                    a = {
                        textarea: !0,
                        input: !0,
                        select: !0,
                        button: !0
                    },
                    r = "mousemove",
                    l = "mouseup dragstart",
                    d = "mouseup",
                    c = "touchmove",
                    h = "touchend",
                    u = "touchend";

                function p(t) {
                    var e = t,
                        i = !1,
                        s = !1;

                    function n(t) {
                        i ? (e(), o(n), s = !0, i = !1) : s = !1
                    }
                    this.kick = function(t) {
                        i = !0, s || n()
                    }, this.end = function(t) {
                        var n = e;
                        t && (s ? (e = i ? function() {
                            n(), t()
                        } : t, i = !0) : t())
                    }
                }

                function f() {
                    return !0
                }

                function m() {
                    return !1
                }

                function g(t) {
                    t.preventDefault()
                }

                function v(t) {
                    a[t.target.tagName.toLowerCase()] || t.preventDefault()
                }

                function w(t, e) {
                    var i, s;
                    if (t.identifiedTouch) return t.identifiedTouch(e);
                    for (i = -1, s = t.length; ++i < s;)
                        if (t[i].identifier === e) return t[i]
                }

                function y(t, e) {
                    var i = w(t.changedTouches, e.identifier);
                    if (i && (i.pageX !== e.pageX || i.pageY !== e.pageY)) return i
                }

                function b(t) {
                    T(t, t.data, t, _)
                }

                function C(t) {
                    _()
                }

                function _() {
                    s(document, r, b), s(document, l, C)
                }

                function x(t) {
                    var e = t.data,
                        i = y(t, e);
                    i && T(t, e, i, S)
                }

                function I(t) {
                    var e = t.data;
                    w(t.changedTouches, e.identifier) && S(e.identifier)
                }

                function S(t) {
                    s(document, "." + t, x), s(document, "." + t, I)
                }

                function T(t, e, i, s) {
                    var o = i.pageX - e.startX,
                        a = i.pageY - e.startY;
                    o * o + a * a < 36 || function(t, e, i, s, o, a) {
                        var r, l;
                        e.target;
                        r = t.targetTouches, l = t.timeStamp - e.timeStamp, e.type = "movestart", e.distX = s, e.distY = o, e.deltaX = s, e.deltaY = o, e.pageX = i.pageX, e.pageY = i.pageY, e.velocityX = s / l, e.velocityY = o / l, e.targetTouches = r, e.finger = r ? r.length : 1, e._handled = k, e._preventTouchmoveDefault = function() {
                            t.preventDefault()
                        }, n(e.target, e), a(e.identifier)
                    }(t, e, i, o, a, s)
                }

                function k() {
                    return this._handled = f, !1
                }

                function z(t) {
                    t._handled()
                }

                function L(t) {
                    var e = t.data.timer;
                    t.data.touch = t, t.data.timeStamp = t.timeStamp, e.kick()
                }

                function E(t) {
                    var e = t.data.event,
                        i = t.data.timer;
                    s(document, r, L), s(document, d, E), M(e, i, (function() {
                        setTimeout((function() {
                            s(e.target, "click", m)
                        }), 0)
                    }))
                }

                function A(t) {
                    var e = t.data.event,
                        i = t.data.timer,
                        s = y(t, e);
                    s && (t.preventDefault(), e.targetTouches = t.targetTouches, t.data.touch = s, t.data.timeStamp = t.timeStamp, i.kick())
                }

                function P(t) {
                    var e = t.data.event,
                        i = t.data.timer;
                    w(t.changedTouches, e.identifier) && (! function(t) {
                        s(document, "." + t.identifier, A), s(document, "." + t.identifier, P)
                    }(e), M(e, i))
                }

                function M(t, e, i) {
                    e.end((function() {
                        return t.type = "moveend", n(t.target, t), i && i()
                    }))
                }
                t.event.special.movestart = {
                    setup: function(t, e, s) {
                        return i(this, "movestart.move", z), !0
                    },
                    teardown: function(t) {
                        return s(this, "dragstart drag", g), s(this, "mousedown touchstart", v), s(this, "movestart", z), !0
                    },
                    add: function(t) {
                        "move" !== t.namespace && "moveend" !== t.namespace && (i(this, "dragstart." + t.guid + " drag." + t.guid, g, e, t.selector), i(this, "mousedown." + t.guid, v, e, t.selector))
                    },
                    remove: function(t) {
                        "move" !== t.namespace && "moveend" !== t.namespace && (s(this, "dragstart." + t.guid + " drag." + t.guid), s(this, "mousedown." + t.guid))
                    },
                    _default: function(t) {
                        var s, o;
                        t._handled() && (s = {
                            target: t.target,
                            startX: t.startX,
                            startY: t.startY,
                            pageX: t.pageX,
                            pageY: t.pageY,
                            distX: t.distX,
                            distY: t.distY,
                            deltaX: t.deltaX,
                            deltaY: t.deltaY,
                            velocityX: t.velocityX,
                            velocityY: t.velocityY,
                            timeStamp: t.timeStamp,
                            identifier: t.identifier,
                            targetTouches: t.targetTouches,
                            finger: t.finger
                        }, o = {
                            event: s,
                            timer: new p((function(e) {
                                ! function(t, e, i, s) {
                                    var n = i - t.timeStamp;
                                    t.type = "move", t.distX = e.pageX - t.startX, t.distY = e.pageY - t.startY, t.deltaX = e.pageX - t.pageX, t.deltaY = e.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / n, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / n, t.pageX = e.pageX, t.pageY = e.pageY
                                }(s, o.touch, o.timeStamp), n(t.target, s)
                            })),
                            touch: e,
                            timeStamp: e
                        }, t.identifier === e ? (i(t.target, "click", m), i(document, r, L, o), i(document, d, E, o)) : (t._preventTouchmoveDefault(), i(document, c + "." + t.identifier, A, o), i(document, u + "." + t.identifier, P, o)))
                    }
                }, t.event.special.move = {
                    setup: function() {
                        i(this, "movestart.move", t.noop)
                    },
                    teardown: function() {
                        s(this, "movestart.move", t.noop)
                    }
                }, t.event.special.moveend = {
                    setup: function() {
                        i(this, "movestart.moveend", t.noop)
                    },
                    teardown: function() {
                        s(this, "movestart.moveend", t.noop)
                    }
                }, i(document, "mousedown.move", (function(t) {
                    var e;
                    (function(t) {
                        return 1 === t.which && !t.ctrlKey && !t.altKey
                    })(t) && (e = {
                        target: t.target,
                        startX: t.pageX,
                        startY: t.pageY,
                        timeStamp: t.timeStamp
                    }, i(document, r, b, e), i(document, l, C, e))
                })), i(document, "touchstart.move", (function(t) {
                    var e, s;
                    a[t.target.tagName.toLowerCase()] || (s = {
                        target: (e = t.changedTouches[0]).target,
                        startX: e.pageX,
                        startY: e.pageY,
                        timeStamp: t.timeStamp,
                        identifier: e.identifier
                    }, i(document, c + "." + e.identifier, x, s), i(document, h + "." + e.identifier, I, s))
                })), "function" == typeof Array.prototype.indexOf && function(t, e) {
                    for (var i = ["changedTouches", "targetTouches"], s = i.length; s--;) - 1 === t.event.props.indexOf(i[s]) && t.event.props.push(i[s])
                }(t)
            })), t.belowthefold = function(e, i) {
                return o.height() + o.scrollTop() <= t(e).offset().top - i.threshold
            }, t.abovethetop = function(e, i) {
                return o.scrollTop() >= t(e).offset().top + t(e).height() - i.threshold
            }, t.rightofscreen = function(e, i) {
                return o.width() + o.scrollLeft() <= t(e).offset().left - i.threshold
            }, t.leftofscreen = function(e, i) {
                return o.scrollLeft() >= t(e).offset().left + t(e).width() - i.threshold
            }, t.inviewport = function(e, i) {
                return !(t.rightofscreen(e, i) || t.leftofscreen(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
            }, t.extend(t.expr.pseudos, {
                "below-the-fold": function(e, i, s) {
                    return t.belowthefold(e, {
                        threshold: 0
                    })
                },
                "above-the-top": function(e, i, s) {
                    return t.abovethetop(e, {
                        threshold: 0
                    })
                },
                "left-of-screen": function(e, i, s) {
                    return t.leftofscreen(e, {
                        threshold: 0
                    })
                },
                "right-of-screen": function(e, i, s) {
                    return t.rightofscreen(e, {
                        threshold: 0
                    })
                },
                "in-viewport": function(e, i, s) {
                    return t.inviewport(e, {
                        threshold: -30
                    })
                }
            }), t.fn.checkInViewport = function() {
                if (!dtGlobals.isMobile) {
                    var e = -1;
                    return this.each((function() {
                        var i = t(this);
                        i.hasClass("animation-ready") || (i.parents(".animation-at-the-same-time").length > 0 ? ($thisElem = i.find(".animate-element"), $thisElem.addClass("animation-triggered"), i.find(".animate-element:not(.start-animation)").addClass("start-animation")) : i.hasClass("start-animation") || i.hasClass("animation-triggered") || (i.addClass("animation-triggered"), e++, setTimeout((function() {
                            i.addClass("start-animation"), i.hasClass("skills") && i.animateSkills()
                        }), 200 * e)), i.addClass("animation-ready"))
                    }))
                }
                "undefined" != typeof animateSkills && the7Utils.isFunction(animateSkills) && t(".skills").animateSkills()
            }, clearTimeout(s), s = setTimeout((function() {
                h()
            }), 50), dtGlobals.isMobile || o.on("scroll", (function() {
                h()
            })), o.on("scroll", (function() {
                t(".dt-owl-carousel-call, .related-projects, .elementor-owl-carousel-call").each((function() {
                    var e = t(this),
                        i = "true" === e.attr("data-autoplay"),
                        s = e.attr("data-autoplay_speed") ? parseInt(e.attr("data-autoplay_speed")) : 6e3;
                    !dtGlobals.isInViewport(e) && i ? e.trigger("stop.owl.autoplay") : dtGlobals.isInViewport(e) && i && e.trigger("play.owl.autoplay", [s])
                }))
            })), t.fn.addPhotoswipeWrap = function() {
                return this.each((function(e, i) {
                    var s = t(this);
                    s.on("click", (function(t) {
                        t.preventDefault()
                    })), s.parents("figure").first().addClass("photoswipe-item"), s.hasClass("pspw-wrap-ready") || (s.parents().hasClass("dt-gallery-container") || s.parent().addClass("photoswipe-wrapper"), s.addClass("pspw-wrap-ready"))
                }))
            }, t(".dt-pswp-item, figure .dt-gallery-container a").addPhotoswipeWrap();
        var u = [{
            id: "facebook",
            label: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg> ' + dtShare.shareButtonText.facebook,
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}&picture={{raw_image_url}}&description={{text}}"
        }, {
            id: "twitter",
            label: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>' + dtShare.shareButtonText.twitter,
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
        }, {
            id: "pinterest",
            label: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/></svg> ' + dtShare.shareButtonText.pinterest,
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
        }, {
            id: "linkedin",
            label: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> ' + dtShare.shareButtonText.linkedin,
            url: "http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{text}}"
        }, {
            id: "whatsapp",
            label: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>' + dtShare.shareButtonText.whatsapp,
            url: "whatsapp://send?text={{url}}"
        }];
        dtShare.shareButtonText.download && u.push({
            id: "download",
            label: '<i class="dt-icon-the7-misc-006-244" aria-hidden="true"></i> ' + dtShare.shareButtonText.download,
            url: "{{raw_image_url}}",
            download: !0
        });
        var p = {
            youtube: {
                index: "youtube.com",
                id: "v=",
                src: "//www.youtube.com/embed/%id%",
                type: "youtube"
            },
            vimeo: {
                index: "vimeo.com/",
                id: "/",
                src: "//player.vimeo.com/video/%id%",
                type: "vimeo"
            },
            gmaps: {
                index: "//maps.google.",
                src: "%id%&output=embed"
            }
        };

        function f(e) {
            for (var i in e) {
                var s = e[i],
                    n = t(".pswp__share-tooltip");
                switch (s) {
                    case "facebook":
                        n.addClass("show-share-fb");
                        break;
                    case "twitter":
                        n.addClass("show-share-tw");
                        break;
                    case "pinterest":
                        n.addClass("show-share-pin");
                        break;
                    case "linkedin":
                        n.addClass("show-share-in");
                        break;
                    case "whatsapp":
                        n.addClass("show-share-wp");
                        break;
                    case "download":
                        n.addClass("show-share-d");
                        break;
                    default:
                        n.removeClass("show-share-in show-share-pin show-share-tw show-share-fb show-share-g show-share-wp")
                }
            }
        }

        function m(e, i) {
            var s = [],
                n = e;
            n = t.extend({
                target: ".dt-pswp-item",
                embedType: ""
            }, n);
            var o = function(e, i, o) {
                var a = document.querySelectorAll(".pswp")[0],
                    r = s[e - 1].items,
                    l = {
                        index: i,
                        galleryUID: e,
                        shareEl: !0,
                        closeOnScroll: !1,
                        history: !1,
                        shareButtons: u,
                        getImageURLForShare: function(t) {
                            return c.currItem.src || ""
                        },
                        getPageURLForShare: function(t) {
                            return c.currItem.shareLink || window.location.href
                        },
                        getTextForShare: function(t) {
                            var e = c.currItem.title;
                            return (void 0 !== e ? e.replace(/<[^>]+>/g, "") : "") || ""
                        },
                        parseShareButtonOut: function(t, e) {
                            return e
                        }
                    },
                    d = "";
                void 0 !== t(o).next(".dt-gallery-container").attr("data-pretty-share") && (d = t(o).next(".dt-gallery-container").attr("data-pretty-share").split(",")), void 0 !== t(o).parents(".dt-gallery-container").attr("data-pretty-share") ? d = t(o).parents(".dt-gallery-container").attr("data-pretty-share").split(",") : void 0 !== t(o).parents(".shortcode-single-image-wrap").attr("data-pretty-share") ? d = t(o).parents(".shortcode-single-image-wrap").attr("data-pretty-share").split(",") : void 0 !== t(o).attr("data-pretty-share") && (d = t(o).attr("data-pretty-share").split(",")), d.length <= 0 || void 0 === d ? t(".pswp__scroll-wrap").addClass("hide-pspw-share") : d.push("download"), f(d), t.extend(l, n);
                var c = new PhotoSwipe(a, PhotoSwipeUI_Default, r, l);
                c.init(), t(".pswp__video").removeClass("active");
                var h = t(c.currItem.container);
                h.find(".pswp__video").length > 0 && h.parents(".pswp").addClass("video-active"), t(".pswp__zoom-wrap").removeClass("active-item"), h.addClass("active-item");
                var p, m, g = h.find(".pswp__video");
                if (g.length > 0)
                    if (g.addClass("active"), h.parents(".pswp").addClass("video-active"), "hosted" == g.parents(".pswp-video-wrap ").attr("data-type")) g.get(0).play();
                    else {
                        var v = g.prop("src");
                        v += "?autoplay=1", g.prop("src", v)
                    }
                c.listen("beforeChange", (function() {
                    var e = t(c.currItem.container);
                    t(".pswp__zoom-wrap").removeClass("active-item"), e.addClass("active-item"), t(".pswp__video").removeClass("active"), t(".pswp").removeClass("video-active");
                    e.find(".pswp__video").addClass("active");
                    e.find(".pswp__video").length > 0 && e.parents(".pswp").addClass("video-active"), t(".pswp__video").each((function() {
                        var e = t(this);
                        if (e.hasClass("active")) "hosted" == e.parents(".pswp-video-wrap ").attr("data-type") && e.get(0).play();
                        else if ("hosted" == e.parents(".pswp-video-wrap ").attr("data-type")) e.get(0).pause();
                        else {
                            var i = e.prop("src");
                            i = i.replace("?autoplay=1", "?enablejsapi=1"), e.prop("src", ""), e.prop("src", i), t(".pswp__video").removeClass("active");
                            var s = t(this)[0].contentWindow;
                            e.hasClass("active") ? func = "playVideo" : func = "pauseVideo", s.postMessage('{"event":"command","func":"' + func + '","args":""}', "*")
                        }
                    }))
                })), c.listen("close", (function() {
                    t(".pswp__video").each((function() {
                        var e = t(this);
                        if ("hosted" == e.parents(".pswp-video-wrap ").attr("data-type")) e.get(0).pause();
                        else {
                            e.attr("src", e.attr("src"));
                            var i = e.prop("src");
                            i = i.replace("?autoplay=1", "?enablejsapi=1"), e.prop("src", ""), e.prop("src", i), t(".pswp__video").removeClass("active");
                            var s = t(this)[0].contentWindow;
                            e.hasClass("active") ? func = "playVideo" : func = "stopVideo", s.postMessage('{"event":"command","func":"' + func + '","args":""}', "*")
                        }
                        clearTimeout(p), p = setTimeout((function() {
                            t(".pswp-video-wrap").remove()
                        }), 200)
                    }))
                })), c.listen("destroy", (function() {
                    clearTimeout(m), m = setTimeout((function() {
                        t(".pswp").removeClass().addClass("pswp")
                    }), 100)
                }))
            };
            ! function(e, i) {
                s = [], e.each((function(e, i) {
                    s.push({
                        id: e,
                        items: []
                    }), t(i).find(n.target).each((function(i, o) {
                        var a = t(o),
                            r = a.attr("data-large_image_width"),
                            l = void 0 !== r && r.length > 0 && "" != r && 0 != r ? r : a.find("img").attr("width"),
                            d = a.attr("data-large_image_height"),
                            c = void 0 !== d && d.length > 0 && "" != d && 0 != d ? d : a.find("img").attr("height"),
                            h = (void 0 !== a.attr("title") && a.attr("title").length > 0 ? "<h5>" + a.attr("title") + "</h5>" : "") + (void 0 !== a.attr("data-dt-img-description") ? a.attr("data-dt-img-description") : "") || "";
                        if (a.data("gallery-id", e + 1), a.data("photo-id", i), void 0 === l && (l = a.find("img").width()), void 0 === c && (c = a.find("img").height()), t(o).hasClass("pswp-video")) {
                            var u = o.href,
                                f = n.embedType;
                            t.each(p, (function() {
                                if (u.indexOf(this.index) > -1) return this.id && (u = "string" == typeof this.id ? u.substr(u.lastIndexOf(this.id) + this.id.length, u.length) : this.id.call(this, u), f = this.type), u = this.src.replace("%id%", u), !1
                            }));
                            var m = {
                                html: '<div class="pswp-video-wrap " data-type="' + f + '"><div class="video-wrapper"><iframe allow="autoplay; fullscreen" class="pswp__video"src="' + u + ' " frameborder="0" allowfullscreen></iframe></div></div>',
                                title: h,
                                shareLink: a.attr("data-dt-location") || a.parents(".fancy-media-wrap").find("img").attr("data-dt-location") || ""
                            };
                            "hosted" == f && (m.html = '<div class="pswp-video-wrap " data-type="' + f + '"><div class="video-wrapper"><video controls class="pswp__video" src="' + u + '" type="video/mp4"</video ></div></div>')
                        } else m = {
                            src: o.href,
                            w: l,
                            h: c,
                            title: h,
                            shareLink: a.attr("data-dt-location") || a.find("img").attr("data-dt-location") || ""
                        };
                        s[e].items.push(m)
                    })), t(i).prev().hasClass("dt-gallery-pswp") ? t(i).prev(".dt-gallery-pswp").on("click", (function(e) {
                        e.preventDefault();
                        var s = t(this),
                            a = t(this).next(t(i)).find(n.target),
                            r = a.data("gallery-id"),
                            l = a.data("photo-id");
                        s.parents(".ts-wrap").hasClass("ts-interceptClicks") || o(r, l, s)
                    })) : t(i).on("click", n.target, (function(e) {
                        var i = t(this);
                        e.preventDefault();
                        var s = t(this).data("gallery-id"),
                            n = t(this).data("photo-id");
                        i.parents(".ts-wrap").hasClass("ts-interceptClicks") || o(s, n, i)
                    }))
                }))
            }(i);
            var a = function() {
                var t = window.location.hash.substring(1),
                    e = {};
                if (t.length < 5) return e;
                for (var i = t.split("&"), s = 0; s < i.length; s++)
                    if (i[s]) {
                        var n = i[s].split("=");
                        n.length < 2 || (e[n[0]] = n[1])
                    }
                return e.gid && (e.gid = parseInt(e.gid, 10)), e.hasOwnProperty("pid") ? (e.pid = parseInt(e.pid, 10), e) : e
            }();
            return a.pid > 0 && a.gid > 0 && o(a.gid, a.pid), this
        }

        function g(e, i) {
            if (void 0 !== t.fn[i]) return e.each((function() {
                t(this)[i]({
                    bgOpacity: dtShare.overlayOpacity / 100,
                    loop: !0,
                    showHideOpacity: !0
                })
            }))
        }
        if (t.fn.photoswipeGallery = function(e) {
                var i = function t(e, i) {
                    return e && (i(e) ? e : t(e.parentNode, i))
                };
                for (var s = function(e) {
                        var s = e.target || e.srcElement,
                            o = i(s, (function(t) {
                                return e = "photoswipe-item", (" " + t.className + " ").indexOf(" " + e + " ") > -1;
                                var e
                            }));
                        if (o) {
                            for (var a, r = t(o).closest(".dt-gallery-container")[0], l = t(t(o).closest(".dt-gallery-container")[0]).find(".photoswipe-item").get(), d = l.length, c = 0, h = 0; h < d; h++)
                                if (1 === l[h].nodeType) {
                                    if (l[h] === o) {
                                        a = c;
                                        break
                                    }
                                    c++
                                }
                            return a >= 0 && n(a, r), !1
                        }
                    }, n = function(e, i, s, n) {
                        var o, a, r, l = document.querySelectorAll(".pswp")[0];
                        r = function(e) {
                            for (var i, s, n = t(e).find(".photoswipe-item").get(), o = n.length, a = [], r = 0; r < o; r++)
                                if (1 === (i = n[r]).nodeType) {
                                    s = i.children[0];
                                    var l = void 0 !== t(s).attr("data-large_image_width") && t(s).attr("data-large_image_width").length > 0 && "" != t(s).attr("data-large_image_width") ? t(s).attr("data-large_image_width") : t(s).find("img").attr("width"),
                                        d = void 0 !== t(s).attr("data-large_image_height") && t(s).attr("data-large_image_height").length > 0 && "" != t(s).attr("data-large_image_height") ? t(s).attr("data-large_image_height") : t(s).find("img").attr("height"),
                                        c = (void 0 !== t(s).attr("title") && t(s).attr("title").length > 0 ? "<h5>" + t(s).attr("title") + "</h5>\n" : "") + (void 0 !== t(s).attr("data-dt-img-description") ? t(s).attr("data-dt-img-description") : "") || "";
                                    if (t(s).hasClass("pswp-video")) {
                                        var h, u = s.href;
                                        t.each(p, (function() {
                                            if (u.indexOf(this.index) > -1) return this.id && (u = "string" == typeof this.id ? u.substr(u.lastIndexOf(this.id) + this.id.length, u.length) : this.id.call(this, u), h = this.type), u = this.src.replace("%id%", u), !1
                                        }));
                                        var f = {
                                            html: '<div class="pswp-video-wrap " data-type="' + h + '"><div class="video-wrapper"><iframe allow="autoplay; fullscreen" class="pswp__video"src=" ' + u + ' " frameborder="0" allowfullscreen></iframe></div></div>',
                                            title: c
                                        }
                                    } else f = {
                                        src: s.getAttribute("href"),
                                        w: l,
                                        h: d,
                                        title: c
                                    };
                                    s.children.length > 0 && (f.msrc = s.children[0].getAttribute("src")), f.el = i, a.push(f)
                                }
                            return a
                        }(i);
                        var d = t(i).attr("data-pretty-share") ? t(i).attr("data-pretty-share").split(",") : new Array;
                        if (d.length <= 0 || void 0 === d ? t(".pswp__scroll-wrap").addClass("hide-pspw-share") : d.push("download"), f(d), a = {
                                closeOnScroll: !1,
                                galleryUID: i.getAttribute("data-pswp-uid"),
                                bgOpacity: dtShare.overlayOpacity / 100,
                                loop: !0,
                                history: !1,
                                showHideOpacity: !0,
                                showAnimationDuration: 0,
                                shareButtons: u,
                                getImageURLForShare: function(e) {
                                    return o.currItem.src || t(o.currItem.el).find("a").attr("data-dt-location") || ""
                                },
                                getPageURLForShare: function(e) {
                                    return t(o.currItem.el).find("a").attr("data-dt-location") || window.location.href
                                },
                                getTextForShare: function(t) {
                                    var e = o.currItem.title;
                                    return (void 0 !== e ? e.replace(/<[^>]+>/g, "") : "") || ""
                                },
                                parseShareButtonOut: function(t, e) {
                                    return e
                                }
                            }, n)
                            if (a.galleryPIDs) {
                                for (var c = 0; c < r.length; c++)
                                    if (r[c].pid == e) {
                                        a.index = c;
                                        break
                                    }
                            } else a.index = parseInt(e, 10) - 1;
                        else a.index = parseInt(e, 10);
                        if (!isNaN(a.index)) {
                            s && (a.showAnimationDuration = 0), (o = new PhotoSwipe(l, PhotoSwipeUI_Default, r, a)).init(), t(".pswp__zoom-wrap").removeClass("active-item"), t(".pswp__video").removeClass("active");
                            var h, m, g = t(o.currItem.container);
                            if (g.addClass("active-item"), g.find(".pswp__video").length > 0) {
                                g.find(".pswp__video").addClass("active"), g.parents(".pswp").addClass("video-active");
                                var v = g.find(".pswp__video").prop("src");
                                v += "?autoplay=1", g.find(".pswp__video").prop("src", v)
                            }
                            o.listen("beforeChange", (function() {
                                var e = t(o.currItem.container);
                                t(".pswp__zoom-wrap").removeClass("active-item"), e.addClass("active-item"), t(".pswp__video").removeClass("active"), t(".pswp").removeClass("video-active"), e.find(".pswp__video").addClass("active");
                                e.find(".pswp__video");
                                e.find(".pswp__video").length > 0 && (e.parents(".pswp").addClass("video-active"), $runVideo = 0), t(".pswp__video").each((function() {
                                    var e = t(this);
                                    if (!e.hasClass("active")) {
                                        var i = e.prop("src");
                                        i = "youtube" == e.parents(".pswp-video-wrap ").attr("data-type") || "vimeo" == e.parents(".pswp-video-wrap ").attr("data-type") ? i.replace("?autoplay=1", "?enablejsapi=1") : i.replace("?autoplay=1", ""), e.prop("src", ""), e.prop("src", i);
                                        var s = e[0].contentWindow;
                                        e.hasClass("active") ? func = "playVideo" : func = "pauseVideo", s.postMessage('{"event":"command","func":"' + func + '","args":""}', "*")
                                    }
                                }))
                            })), o.listen("close", (function() {
                                t(".pswp__video").each((function() {
                                    var e = t(this);
                                    e.attr("src", t(this).attr("src"));
                                    var i = e.prop("src");
                                    i = "youtube" == e.parents(".pswp-video-wrap ").attr("data-type") || "vimeo" == e.parents(".pswp-video-wrap ").attr("data-type") ? i.replace("?autoplay=1", "?enablejsapi=1") : i.replace("?autoplay=1", ""), e.prop("src", ""), e.prop("src", i), t(".pswp__video").removeClass("active");
                                    var s = e[0].contentWindow;
                                    t(this).hasClass("active") ? func = "playVideo" : func = "pauseVideo", s.postMessage('{"event":"command","func":"' + func + '","args":""}', "*"), clearTimeout(h), h = setTimeout((function() {
                                        t(".pswp-video-wrap").remove()
                                    }), 200)
                                }))
                            })), o.listen("destroy", (function() {
                                clearTimeout(m), m = setTimeout((function() {
                                    t(".pswp").removeClass().addClass("pswp")
                                }), 100)
                            }))
                        }
                    }, o = document.querySelectorAll(e), a = 0, r = o.length; a < r; a++) o[a].setAttribute("data-pswp-uid", a + 1), o[a].onclick = s;
                var l = function() {
                    var t = window.location.hash.substring(1),
                        e = {};
                    if (t.length < 5) return e;
                    for (var i = t.split("&"), s = 0; s < i.length; s++)
                        if (i[s]) {
                            var n = i[s].split("=");
                            n.length < 2 || (e[n[0]] = n[1])
                        }
                    return e.gid && (e.gid = parseInt(e.gid, 10)), e
                }();
                l.pid && l.gid && n(l.pid, o[l.gid - 1], !0, !0)
            }, t(".dt-gallery-container.wf-container").photoswipeGallery(".dt-gallery-container.wf-container"), t.fn.photoswipe = function(t) {
                return t.embedType = "hosted", m(t, this)
            }, dtGlobals.addOnloadEvent((function() {
                t(".photoswipe-wrapper, .photoswipe-item .dt-gallery-container, .shortcode-gallery.dt-gallery-container:not(.owl-carousel), .dt-gallery-container.gallery, .instagram-photos.dt-gallery-container, .images-container .dt-gallery-container, .shortcode-instagram.dt-gallery-container, .gallery-shortcode:not(.owl-carousel)").initPhotoswipe()
            })), t.fn.photoswipeCarousel = function(t) {
                return t.target = ".dt-owl-item.cloned .dt-pswp-item", m(t, this)
            }, t.fn.initCarouselClonedPhotoswipe = function() {
                return g(this, "photoswipeCarousel")
            }, t.fn.initPhotoswipe = function() {
                return g(this, "photoswipe")
            }, t(".shortcode-gallery.dt-gallery-container:not(.owl-loaded), .gallery-shortcode:not(.owl-loaded)").initPhotoswipe(), t(".dt-trigger-first-pswp").addClass("pspw-ready").on("click", (function(e) {
                var i = t(this),
                    s = i.parents("article.post").first();
                if (!i.parents(".ts-wrap").hasClass("ts-interceptClicks")) {
                    if (s.length > 0)(s.find(".dt-gallery-container").length > 0 ? s.find(".dt-gallery-container a.dt-pswp-item") : s.find("a.dt-pswp-item")).length > 0 && s.find(".rollover-click-target").trigger("click");
                    return !1
                }
            })), t(".dt-owl-carousel-call").length > 0 || t(".slider-content").length > 0 || t(".dt-owl-carousel-init").length > 0 || t("body").is('[class*="elementor-page"]')) {
            var v = t.fn.owlCarousel;
            ! function(t, e, i, s) {
                function n(e, i) {
                    this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                        time: null,
                        target: null,
                        pointer: null,
                        stage: {
                            start: null,
                            current: null
                        },
                        direction: null
                    }, this._states = {
                        current: {},
                        tags: {
                            initializing: ["busy"],
                            animating: ["busy"],
                            dragging: ["interacting"]
                        }
                    }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, i) {
                        this._handlers[i] = t.proxy(this[i], this)
                    }), this)), t.each(n.Plugins, t.proxy((function(t, e) {
                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
                    }), this)), t.each(n.Workers, t.proxy((function(e, i) {
                        this._pipe.push({
                            filter: i.filter,
                            run: t.proxy(i.run, this)
                        })
                    }), this)), this.setup(), this.initialize()
                }
                n.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: e,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "dt-owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab"
                }, n.Width = {
                    Default: "default",
                    Inner: "inner",
                    Outer: "outer"
                }, n.Type = {
                    Event: "event",
                    State: "state"
                }, n.Plugins = {}, n.Workers = [{
                    filter: ["width", "settings"],
                    run: function() {
                        this._width = this.$element.width()
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        t.current = this._items && this._items[this.relative(this._current)]
                    }
                }, {
                    filter: ["items", "settings"],
                    run: function() {
                        this.$stage.children(".cloned").remove()
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this.settings.margin || "",
                            i = !this.settings.autoWidth,
                            s = this.settings.rtl,
                            n = {
                                width: "auto",
                                "margin-left": s ? e : "",
                                "margin-right": s ? "" : e
                            };
                        !i && this.$stage.children().css(n), t.css = n
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = parseInt(getComputedStyle(this.$stage.get(0)).getPropertyValue("--stage-left-gap")),
                            i = parseInt(getComputedStyle(this.$stage.get(0)).getPropertyValue("--stage-right-gap")),
                            s = ((this.width() - e - i) / this.settings.items).toFixed(3) - this.settings.margin,
                            n = null,
                            o = this._items.length,
                            a = !this.settings.autoWidth,
                            r = [];
                        for (t.items = {
                                merge: !1,
                                width: s
                            }; o--;) n = this._mergers[o], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, r[o] = a ? s * n : this._items[o].width();
                        this._widths = r
                    }
                }, {
                    filter: ["items", "settings"],
                    run: function() {
                        var e = [],
                            i = this._items,
                            s = this.settings,
                            n = Math.max(2 * s.items, 4),
                            o = 2 * Math.ceil(i.length / 2),
                            a = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0,
                            r = "",
                            l = "";
                        for (a /= 2; a > 0;) e.push(this.normalize(e.length / 2, !0)), r += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, a -= 1;
                        this._clones = e, t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
                        this._coordinates = o
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            i = {
                                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                                "padding-left": t || "",
                                "padding-right": t || ""
                            };
                        this.$stage.css(i)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this._coordinates.length,
                            i = !this.settings.autoWidth,
                            s = this.$stage.children();
                        if (i && t.items.merge)
                            for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
                        else i && (t.css.width = t.items.width, s.css(t.css))
                    }
                }, {
                    filter: ["items"],
                    run: function() {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style")
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
                    }
                }, {
                    filter: ["position"],
                    run: function() {
                        this.animate(this.coordinates(this._current))
                    }
                }, {
                    filter: ["width", "position", "items", "settings"],
                    run: function() {
                        var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                            o = 2 * this.settings.stagePadding,
                            a = this.coordinates(this.current()) + o,
                            r = a + this.width() * n,
                            l = [];
                        for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", a) && this.op(t, ">", r) || this.op(e, "<", a) && this.op(e, ">", r)) && l.push(i);
                        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                    }
                }], n.prototype.initializeStage = function() {
                    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
                        class: this.settings.stageClass
                    }).wrap(t("<div/>", {
                        class: this.settings.stageOuterClass
                    })), this.$element.append(this.$stage.parent()))
                }, n.prototype.initializeItems = function() {
                    var e = this.$element.find(".dt-owl-item");
                    if (e.length) return this._items = e.get().map((function(e) {
                        return t(e)
                    })), this._mergers = this._items.map((function() {
                        return 1
                    })), void this.refresh();
                    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
                }, n.prototype.initialize = function() {
                    var t, e, i;
                    (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
                    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
                }, n.prototype.isVisible = function() {
                    return !this.settings.checkVisibility || this.$element.is(":visible")
                }, n.prototype.setup = function() {
                    var e = this.viewport(),
                        i = this.options.responsive,
                        s = -1,
                        n = null;
                    i ? (t.each(i, (function(t) {
                        t <= e && t > s && (s = Number(t))
                    })), "function" == typeof(n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
                        property: {
                            name: "settings",
                            value: n
                        }
                    }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
                        property: {
                            name: "settings",
                            value: this.settings
                        }
                    })
                }, n.prototype.optionsLogic = function() {
                    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
                }, n.prototype.prepare = function(e) {
                    var i = this.trigger("prepare", {
                        content: e
                    });
                    return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                        content: i.data
                    }), i.data
                }, n.prototype.update = function() {
                    for (var e = 0, i = this._pipe.length, s = t.proxy((function(t) {
                            return this[t]
                        }), this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
                    this._invalidated = {}, !this.is("valid") && this.enter("valid")
                }, n.prototype.width = function(t) {
                    switch (t = t || n.Width.Default) {
                        case n.Width.Inner:
                        case n.Width.Outer:
                            return this._width;
                        default:
                            return this._width - 2 * this.settings.stagePadding + this.settings.margin
                    }
                }, n.prototype.refresh = function() {
                    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
                }, n.prototype.onThrottledResize = function() {
                    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
                }, n.prototype.onResize = function() {
                    return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
                }, n.prototype.registerEventHandlers = function() {
                    t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
                        return !1
                    }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
                }, n.prototype.onDragStart = function(e) {
                    var s = null;
                    3 !== e.which && (t.support.transform ? s = {
                        x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
                        y: s[16 === s.length ? 13 : 5]
                    } : (s = this.$stage.position(), s = {
                        x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
                        y: s.top
                    }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
                        var s = this.difference(this._drag.pointer, this.pointer(e));
                        t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                    }), this)))
                }, n.prototype.onDragMove = function(t) {
                    var e = null,
                        i = null,
                        s = null,
                        n = this.difference(this._drag.pointer, this.pointer(t)),
                        o = this.difference(this._drag.stage.start, n);
                    this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
                }, n.prototype.onDragEnd = function(e) {
                    var s = this.difference(this._drag.pointer, this.pointer(e)),
                        n = this._drag.stage.current,
                        o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
                    t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
                        return !1
                    }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
                }, n.prototype.closest = function(e, i) {
                    var n = -1,
                        o = this.width(),
                        a = this.coordinates();
                    return this.settings.freeDrag || t.each(a, t.proxy((function(t, r) {
                        return "left" === i && e > r - 30 && e < r + 30 ? n = t : "right" === i && e > r - o - 30 && e < r - o + 30 ? n = t + 1 : this.op(e, "<", r) && this.op(e, ">", a[t + 1] !== s ? a[t + 1] : r - o) && (n = "left" === i ? t + 1 : t), -1 === n
                    }), this)), this.settings.loop || (this.op(e, ">", a[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", a[this.maximum()]) && (n = e = this.maximum())), n
                }, n.prototype.animate = function(e) {
                    var i = this.speed() > 0;
                    this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                        transform: "translate3d(" + e + "px,0px,0px)",
                        transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                    }) : i ? this.$stage.animate({
                        left: e + "px"
                    }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                        left: e + "px"
                    })
                }, n.prototype.is = function(t) {
                    return this._states.current[t] && this._states.current[t] > 0
                }, n.prototype.current = function(t) {
                    if (t === s) return this._current;
                    if (0 === this._items.length) return s;
                    if (t = this.normalize(t), this._current !== t) {
                        var e = this.trigger("change", {
                            property: {
                                name: "position",
                                value: t
                            }
                        });
                        e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                            property: {
                                name: "position",
                                value: this._current
                            }
                        })
                    }
                    return this._current
                }, n.prototype.invalidate = function(e) {
                    return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) {
                        return e
                    }))
                }, n.prototype.reset = function(t) {
                    (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
                }, n.prototype.normalize = function(t, e) {
                    var i = this._items.length,
                        n = e ? 0 : this._clones.length;
                    return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
                }, n.prototype.relative = function(t) {
                    return t -= this._clones.length / 2, this.normalize(t, !0)
                }, n.prototype.maximum = function(t) {
                    var e, i, s, n = this.settings,
                        o = this._coordinates.length;
                    if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
                    else if (n.autoWidth || n.merge) {
                        if (e = this._items.length)
                            for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
                        o = e + 1
                    } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
                    return t && (o -= this._clones.length / 2), Math.max(o, 0)
                }, n.prototype.minimum = function(t) {
                    return t ? 0 : this._clones.length / 2
                }, n.prototype.items = function(t) {
                    return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
                }, n.prototype.mergers = function(t) {
                    return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
                }, n.prototype.clones = function(e) {
                    var i = this._clones.length / 2,
                        n = i + this._items.length,
                        o = function(t) {
                            return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
                        };
                    return e === s ? t.map(this._clones, (function(t, e) {
                        return o(e)
                    })) : t.map(this._clones, (function(t, i) {
                        return t === e ? o(i) : null
                    }))
                }, n.prototype.speed = function(t) {
                    return t !== s && (this._speed = t), this._speed
                }, n.prototype.coordinates = function(e) {
                    var i, n = 1,
                        o = e - 1;
                    return e === s ? t.map(this._coordinates, t.proxy((function(t, e) {
                        return this.coordinates(e)
                    }), this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
                }, n.prototype.duration = function(t, e, i) {
                    return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
                }, n.prototype.to = function(t, e) {
                    var i = this.current(),
                        s = null,
                        n = t - this.relative(i),
                        o = (n > 0) - (n < 0),
                        a = this._items.length,
                        r = this.minimum(),
                        l = this.maximum();
                    this.settings.loop ? (!this.settings.rewind && Math.abs(n) > a / 2 && (n += -1 * o * a), (s = (((t = i + n) - r) % a + a) % a + r) !== t && s - n <= l && s - n > 0 && (i = s - n, t = s, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(r, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
                }, n.prototype.next = function(t) {
                    t = t || !1, this.to(this.relative(this.current()) + 1, t)
                }, n.prototype.prev = function(t) {
                    t = t || !1, this.to(this.relative(this.current()) - 1, t)
                }, n.prototype.onTransitionEnd = function(t) {
                    if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                    this.leave("animating"), this.trigger("translated")
                }, n.prototype.viewport = function() {
                    var s;
                    return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s
                }, n.prototype.replace = function(e) {
                    this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
                        return 1 === this.nodeType
                    })).each(t.proxy((function(t, e) {
                        e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                    }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
                }, n.prototype.add = function(e, i) {
                    var n = this.relative(this._current);
                    i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                        content: e,
                        position: i
                    }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                        content: e,
                        position: i
                    })
                }, n.prototype.remove = function(t) {
                    (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
                        content: this._items[t],
                        position: t
                    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                        content: null,
                        position: t
                    }))
                }, n.prototype.preloadAutoWidthImages = function(e) {
                    e.each(t.proxy((function(e, i) {
                        this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy((function(t) {
                            i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                        }), this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
                    }), this))
                }, n.prototype.destroy = function() {
                    for (var s in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[s].destroy();
                    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
                }, n.prototype.op = function(t, e, i) {
                    var s = this.settings.rtl;
                    switch (e) {
                        case "<":
                            return s ? t > i : t < i;
                        case ">":
                            return s ? t < i : t > i;
                        case ">=":
                            return s ? t <= i : t >= i;
                        case "<=":
                            return s ? t >= i : t <= i
                    }
                }, n.prototype.on = function(t, e, i, s) {
                    t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
                }, n.prototype.off = function(t, e, i, s) {
                    t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
                }, n.prototype.trigger = function(e, i, s, o, a) {
                    var r = {
                            item: {
                                count: this._items.length,
                                index: this.current()
                            }
                        },
                        l = t.camelCase(t.grep(["on", e, s], (function(t) {
                            return t
                        })).join("-").toLowerCase()),
                        d = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                            relatedTarget: this
                        }, r, i));
                    return this._supress[e] || (t.each(this._plugins, (function(t, e) {
                        e.onTrigger && e.onTrigger(d)
                    })), this.register({
                        type: n.Type.Event,
                        name: e
                    }), this.$element.trigger(d), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, d)), d
                }, n.prototype.enter = function(e) {
                    t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
                        this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
                    }), this))
                }, n.prototype.leave = function(e) {
                    t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
                        this._states.current[e]--
                    }), this))
                }, n.prototype.register = function(e) {
                    if (e.type === n.Type.Event) {
                        if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                            var i = t.event.special[e.name]._default;
                            t.event.special[e.name]._default = function(t) {
                                return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                            }, t.event.special[e.name].owl = !0
                        }
                    } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(i, s) {
                        return t.inArray(i, this._states.tags[e.name]) === s
                    }), this)))
                }, n.prototype.suppress = function(e) {
                    t.each(e, t.proxy((function(t, e) {
                        this._supress[e] = !0
                    }), this))
                }, n.prototype.release = function(e) {
                    t.each(e, t.proxy((function(t, e) {
                        delete this._supress[e]
                    }), this))
                }, n.prototype.pointer = function(t) {
                    var i = {
                        x: null,
                        y: null
                    };
                    return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
                }, n.prototype.isNumeric = function(t) {
                    return !isNaN(parseFloat(t))
                }, n.prototype.difference = function(t, e) {
                    return {
                        x: t.x - e.x,
                        y: t.y - e.y
                    }
                }, t.fn.owlCarousel = function(e) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    return this.each((function() {
                        var s = t(this),
                            o = s.data("owl.carousel");
                        o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, i) {
                            o.register({
                                type: n.Type.Event,
                                name: i
                            }), o.$element.on(i + ".owl.carousel.core", t.proxy((function(t) {
                                t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                            }), o))
                        }))), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
                    }))
                }, t.fn.owlCarousel.Constructor = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = function(e) {
                    this._core = e, this._interval = null, this._visible = null, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoRefresh && this.watch()
                        }), this)
                    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
                };
                n.Defaults = {
                    autoRefresh: !0,
                    autoRefreshInterval: 500
                }, n.prototype.watch = function() {
                    this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
                }, n.prototype.refresh = function() {
                    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
                }, n.prototype.destroy = function() {
                    var t, i;
                    for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = function(e) {
                    this._core = e, this._loaded = [], this._handlers = {
                        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
                            if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                                var i = this._core.settings,
                                    s = i.center && Math.ceil(i.items / 2) || i.items,
                                    n = i.center && -1 * s || 0,
                                    o = (e.property && undefined !== e.property.value ? e.property.value : this._core.current()) + n,
                                    a = this._core.clones().length,
                                    r = t.proxy((function(t, e) {
                                        this.load(e)
                                    }), this);
                                for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, s++)); n++ < s;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), r), o++
                            }
                        }), this)
                    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
                };
                n.Defaults = {
                    lazyLoad: !1,
                    lazyLoadEager: 0
                }, n.prototype.load = function(i) {
                    var s = this._core.$stage.children().eq(i),
                        n = s && s.find(".owl-lazy");
                    !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy((function(i, s) {
                        var n, o = t(s),
                            a = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
                        this._core.trigger("load", {
                            element: o,
                            url: a
                        }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy((function() {
                            o.css("opacity", 1), this._core.trigger("loaded", {
                                element: o,
                                url: a
                            }, "lazy")
                        }), this)).attr("src", a) : o.is("source") ? o.one("load.owl.lazy", t.proxy((function() {
                            this._core.trigger("loaded", {
                                element: o,
                                url: a
                            }, "lazy")
                        }), this)).attr("srcset", a) : ((n = new Image).onload = t.proxy((function() {
                            o.css({
                                "background-image": 'url("' + a + '")',
                                opacity: "1"
                            }), this._core.trigger("loaded", {
                                element: o,
                                url: a
                            }, "lazy")
                        }), this), n.src = a)
                    }), this)), this._loaded.push(s.get(0)))
                }, n.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = function(i) {
                    this._core = i, this._previousHeight = null, this._handlers = {
                        "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoHeight && this.update()
                        }), this),
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                        }), this),
                        "loaded.owl.lazy": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                        }), this)
                    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                    var s = this;
                    t(e).on("load", (function() {
                        s._core.settings.autoHeight && s.update()
                    })), t(e).on("resize", (function() {
                        s._core.settings.autoHeight && (null != s._intervalId && clearTimeout(s._intervalId), s._intervalId = setTimeout((function() {
                            s.update()
                        }), 250))
                    }))
                };
                n.Defaults = {
                    autoHeight: !1,
                    autoHeightClass: "owl-height"
                }, n.prototype.update = function() {
                    var e = this._core._current,
                        i = e + this._core.settings.items,
                        s = this._core.settings.lazyLoad,
                        n = this._core.$stage.children().toArray().slice(e, i),
                        o = [],
                        a = 0;
                    t.each(n, (function(e, i) {
                        o.push(t(i).height())
                    })), (a = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (a = this._previousHeight), this._previousHeight = a, this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
                }, n.prototype.destroy = function() {
                    var t, e;
                    for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = function(e) {
                    this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.register({
                                type: "state",
                                name: "playing",
                                tags: ["interacting"]
                            })
                        }), this),
                        "resize.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                        }), this),
                        "refreshed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                        }), this),
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && "position" === t.property.name && this._playing && this.stop()
                        }), this),
                        "prepared.owl.carousel": t.proxy((function(e) {
                            if (e.namespace) {
                                var i = t(e.content).find(".owl-video");
                                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                            }
                        }), this)
                    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) {
                        this.play(t)
                    }), this))
                };
                n.Defaults = {
                    video: !1,
                    videoHeight: !1,
                    videoWidth: !1
                }, n.prototype.fetch = function(t, e) {
                    var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                        n = t.attr("data-width") || this._core.settings.videoWidth,
                        o = t.attr("data-height") || this._core.settings.videoHeight,
                        a = t.attr("href");
                    if (!a) throw new Error("Missing video URL.");
                    if ((s = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
                    else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
                    else {
                        if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                        i = "vzaar"
                    }
                    s = s[6], this._videos[a] = {
                        type: i,
                        id: s,
                        width: n,
                        height: o
                    }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
                }, n.prototype.thumbnail = function(e, i) {
                    var s, n, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                        a = e.find("img"),
                        r = "src",
                        l = "",
                        d = this._core.settings,
                        c = function(i) {
                            '<div class="owl-video-play-icon"></div>',
                            s = d.lazyLoad ? t("<div/>", {
                                class: "owl-video-tn " + l,
                                srcType: i
                            }) : t("<div/>", {
                                class: "owl-video-tn",
                                style: "opacity:1;background-image:url(" + i + ")"
                            }),
                            e.after(s),
                            e.after('<div class="owl-video-play-icon"></div>')
                        };
                    if (e.wrap(t("<div/>", {
                            class: "owl-video-wrapper",
                            style: o
                        })), this._core.settings.lazyLoad && (r = "data-src", l = "owl-lazy"), a.length) return c(a.attr(r)), a.remove(), !1;
                    "youtube" === i.type ? (n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(n)) : "vimeo" === i.type ? t.ajax({
                        type: "GET",
                        url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function(t) {
                            n = t[0].thumbnail_large, c(n)
                        }
                    }) : "vzaar" === i.type && t.ajax({
                        type: "GET",
                        url: "//vzaar.com/api/videos/" + i.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function(t) {
                            n = t.framegrab_url, c(n)
                        }
                    })
                }, n.prototype.stop = function() {
                    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
                }, n.prototype.play = function(e) {
                    var i, s = t(e.target).closest("." + this._core.settings.itemClass),
                        n = this._videos[s.attr("data-video")],
                        o = n.width || "100%",
                        a = n.height || this._core.$stage.height();
                    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a), i.attr("width", o), "youtube" === n.type ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
                }, n.prototype.isInFullScreen = function() {
                    var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                    return e && t(e).parent().hasClass("owl-video-frame")
                }, n.prototype.destroy = function() {
                    var t, e;
                    for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Video = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = function(e) {
                    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
                        "change.owl.carousel": t.proxy((function(t) {
                            t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                        }), this),
                        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) {
                            t.namespace && (this.swapping = "translated" == t.type)
                        }), this),
                        "translate.owl.carousel": t.proxy((function(t) {
                            t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                        }), this)
                    }, this.core.$element.on(this.handlers)
                };
                n.Defaults = {
                    animateOut: !1,
                    animateIn: !1
                }, n.prototype.swap = function() {
                    if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                        this.core.speed(0);
                        var e, i = t.proxy(this.clear, this),
                            s = this.core.$stage.children().eq(this.previous),
                            n = this.core.$stage.children().eq(this.next),
                            o = this.core.settings.animateIn,
                            a = this.core.settings.animateOut;
                        this.core.current() !== this.previous && (a && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                            left: e + "px"
                        }).addClass("animated owl-animated-out").addClass(a)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
                    }
                }, n.prototype.clear = function(e) {
                    t(e.target).css({
                        left: ""
                    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
                }, n.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = function(e) {
                    this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                        }), this),
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoplay && this.play()
                        }), this),
                        "play.owl.autoplay": t.proxy((function(t, e, i) {
                            t.namespace && this.play(e, i)
                        }), this),
                        "stop.owl.autoplay": t.proxy((function(t) {
                            t.namespace && this.stop()
                        }), this),
                        "mouseover.owl.autoplay": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                        }), this),
                        "mouseleave.owl.autoplay": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                        }), this),
                        "touchstart.owl.core": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                        }), this),
                        "touchend.owl.core": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this.play()
                        }), this)
                    }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
                };
                n.Defaults = {
                    autoplay: !1,
                    autoplayTimeout: 5e3,
                    autoplayHoverPause: !1,
                    autoplaySpeed: !1
                }, n.prototype._next = function(s) {
                    this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
                }, n.prototype.read = function() {
                    return (new Date).getTime() - this._time
                }, n.prototype.play = function(i, s) {
                    var n;
                    this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - n, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, s), i - n)
                }, n.prototype.stop = function() {
                    this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
                }, n.prototype.pause = function() {
                    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
                }, n.prototype.destroy = function() {
                    var t, e;
                    for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                "use strict";
                var n = function(e) {
                    this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                        next: this._core.next,
                        prev: this._core.prev,
                        to: this._core.to
                    }, this._handlers = {
                        "prepared.owl.carousel": t.proxy((function(e) {
                            e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                        }), this),
                        "added.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                        }), this),
                        "remove.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                        }), this),
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && "position" == t.property.name && this.draw()
                        }), this),
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                        }), this),
                        "refreshed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                        }), this)
                    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
                };
                n.Defaults = {
                    nav: !1,
                    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                    navSpeed: !1,
                    navElement: 'button type="button" role="presentation"',
                    navContainer: !1,
                    navContainerClass: "owl-nav",
                    navClass: ["owl-prev", "owl-next"],
                    slideBy: 1,
                    dotClass: "owl-dot",
                    dotsClass: "owl-dots",
                    dots: !0,
                    dotsEach: !1,
                    dotsData: !1,
                    dotsSpeed: !1,
                    dotsContainer: !1
                }, n.prototype.initialize = function() {
                    var e, i = this._core.settings;
                    for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) {
                            this.prev(i.navSpeed)
                        }), this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) {
                            this.next(i.navSpeed)
                        }), this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function(e) {
                            var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                            e.preventDefault(), this.to(s, i.dotsSpeed)
                        }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
                }, n.prototype.destroy = function() {
                    var t, e, i, s, n;
                    for (t in n = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
                    for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                    for (s in this.overides) this._core[s] = this._overrides[s];
                    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                }, n.prototype.update = function() {
                    var t, e, i = this._core.clones().length / 2,
                        s = i + this._core.items().length,
                        n = this._core.maximum(!0),
                        o = this._core.settings,
                        a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                    if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                        for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
                            if (e >= a || 0 === e) {
                                if (this._pages.push({
                                        start: Math.min(n, t - i),
                                        end: t - i + a - 1
                                    }), Math.min(n, t - i) === n) break;
                                e = 0
                            }
                            e += this._core.mergers(this._core.relative(t))
                        }
                }, n.prototype.draw = function() {
                    var e, i = this._core.settings,
                        s = this._core.items().length <= i.items,
                        n = this._core.relative(this._core.current()),
                        o = i.loop || i.rewind;
                    this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
                }, n.prototype.onTrigger = function(e) {
                    var i = this._core.settings;
                    e.page = {
                        index: t.inArray(this.current(), this._pages),
                        count: this._pages.length,
                        size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
                    }
                }, n.prototype.current = function() {
                    var e = this._core.relative(this._core.current());
                    return t.grep(this._pages, t.proxy((function(t, i) {
                        return t.start <= e && t.end >= e
                    }), this)).pop()
                }, n.prototype.getPosition = function(e) {
                    var i, s, n = this._core.settings;
                    return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
                }, n.prototype.next = function(e) {
                    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
                }, n.prototype.prev = function(e) {
                    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
                }, n.prototype.to = function(e, i, s) {
                    var n;
                    !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
                }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                "use strict";
                var n = function(i) {
                    this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(i) {
                            i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                        }), this),
                        "prepared.owl.carousel": t.proxy((function(e) {
                            if (e.namespace) {
                                var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                if (!i) return;
                                this._hashes[i] = e.content
                            }
                        }), this),
                        "changed.owl.carousel": t.proxy((function(i) {
                            if (i.namespace && "position" === i.property.name) {
                                var s = this._core.items(this._core.relative(this._core.current())),
                                    n = t.map(this._hashes, (function(t, e) {
                                        return t === s ? e : null
                                    })).join();
                                if (!n || e.location.hash.slice(1) === n) return;
                                e.location.hash = n
                            }
                        }), this)
                    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
                        var i = e.location.hash.substring(1),
                            s = this._core.$stage.children(),
                            n = this._hashes[i] && s.index(this._hashes[i]);
                        undefined !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
                    }), this))
                };
                n.Defaults = {
                    URLhashListener: !1
                }, n.prototype.destroy = function() {
                    var i, s;
                    for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
                    for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, s) {
                var n = t("<support>").get(0).style,
                    o = "Webkit Moz O ms".split(" "),
                    a = {
                        transition: {
                            end: {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd",
                                transition: "transitionend"
                            }
                        },
                        animation: {
                            end: {
                                WebkitAnimation: "webkitAnimationEnd",
                                MozAnimation: "animationend",
                                OAnimation: "oAnimationEnd",
                                animation: "animationend"
                            }
                        }
                    },
                    r = function() {
                        return !!c("transform")
                    },
                    l = function() {
                        return !!c("perspective")
                    },
                    d = function() {
                        return !!c("animation")
                    };

                function c(e, i) {
                    var s = !1,
                        a = e.charAt(0).toUpperCase() + e.slice(1);
                    return t.each((e + " " + o.join(a + " ") + a).split(" "), (function(t, e) {
                        if (undefined !== n[e]) return s = !i || e, !1
                    })), s
                }

                function h(t) {
                    return c(t, !0)
                }(function() {
                    return !!c("transition")
                })() && (t.support.transition = new String(h("transition")), t.support.transition.end = a.transition.end[t.support.transition]), d() && (t.support.animation = new String(h("animation")), t.support.animation.end = a.animation.end[t.support.animation]), r() && (t.support.transform = new String(h("transform")), t.support.transform3d = l())
            }(window.Zepto || window.jQuery, window, document)
        }
        t.fn.scrollerSlideSize = function() {
            return this.each((function() {
                var e = t(this),
                    i = e.find("img").eq(0),
                    s = parseInt(i.attr("width")),
                    n = e.parents(".slider-wrapper"),
                    o = n.width(),
                    a = n.attr("data-max-width"),
                    r = parseInt(n.attr("data-padding-side")),
                    l = parseInt(i.parents(".wf-td").eq(0).css("paddingLeft")),
                    d = parseInt(i.parents(".wf-td").eq(0).css("paddingRight")),
                    c = 0;
                if (l > 0 && d > 0 && (c = l + d), void 0 !== a) var h = o * parseFloat(a) / 100 - c - r;
                if (s > h) var u = h;
                else {
                    u = parseInt(i.attr("width"));
                    i.exists() || (u = 280)
                }
                e.parents(".slider-wrapper").attr("data-width", u + c), e.css({
                    width: u + c
                })
            }))
        }, t(".slider-wrapper.description-under-image:not(.related-projects) article").scrollerSlideSize();
        var w = t(".slider-wrapper.owl-carousel:not(.related-projects)");
        w.each((function() {
            var e, i = t(this),
                s = i.attr("data-padding-side") ? parseInt(i.attr("data-padding-side")) : 0,
                n = "true" === i.attr("data-autoslide"),
                o = i.attr("data-delay") ? parseInt(i.attr("data-delay")) : 6e3,
                a = "true" === i.attr("data-arrows"),
                r = i.attr("data-width") ? w.width() / parseInt(i.attr("data-width")) : w.width() / w.find("article img").attr("width"),
                l = "rtl" == jQuery(document).attr("dir"),
                d = i.attr("data-next-icon") ? i.attr("data-next-icon") : "icon-ar-018-r",
                c = i.attr("data-prev-icon") ? i.attr("data-prev-icon") : "icon-ar-018-l";

            function h(t) {
                var e, s = i.find(".owl-stage"),
                    n = s.width(),
                    o = i.find(".dt-owl-item");
                (e = (o.width() + parseInt(o.css("margin-right"))) * t.item.count) > n && s.width(e)
            }
            r = i.attr("data-width") ? w.width() / parseInt(i.attr("data-width")) : i.attr("data-max-width") ? w.width() / parseInt(i.attr("data-max-width")) : w.width() / w.find("article img").attr("width"), i.owlCarousel({
                rtl: l,
                items: r,
                autoHeight: !1,
                margin: s,
                loadedClass: "owl-loaded",
                slideBy: "page",
                loop: !1,
                smartSpeed: 600,
                merge: !0,
                autoWidth: !0,
                responsive: {
                    678: {
                        mergeFit: !0
                    },
                    1e3: {
                        mergeFit: !1
                    }
                },
                autoplay: n,
                autoplayTimeout: o,
                nav: a,
                navElement: "a",
                navText: ['<i class="' + c + '"></i>', '<i class="' + d + '"></i>'],
                dots: !1,
                onInitialize: function(t) {
                    var e = parseInt(i.attr("data-max-width")),
                        n = w.width() * parseFloat(e) / 100 - s,
                        o = parseInt(i.find("img").attr("width")),
                        a = parseInt(i.find("img").attr("height"));
                    e && n < o && (i.find("article").css({
                        "max-width": n + "px"
                    }), i.find("img").css({
                        "max-width": n + "px",
                        height: n * a / o
                    }))
                },
                onInitialized: h,
                onRefreshed: h
            }).trigger("refresh.owl.carousel"), i.on("drag.owl.carousel translate.owl.carousel", (function(t) {
                i.addClass("ts-interceptClicks")
            })), i.on("dragged.owl.carousel translated.owl.carousel", (function(t) {
                clearTimeout(e), e = setTimeout((function() {
                    i.removeClass("ts-interceptClicks")
                }), 400)
            })), i.on("changed.owl.carousel", (function(e) {
                t(".dt-owl-item.cloned .is-loaded", i).parents().hasClass("layzr-bg") && t(".dt-owl-item.cloned .is-loaded", i).parents().removeClass("layzr-bg"), t(".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container", i).initPhotoswipe(), t(".animate-element:not(.start-animation):in-viewport", i).checkInViewport()
            })), i.find(".dt-owl-item").on("mouseenter", (function(t) {
                n && i.trigger("stop.owl.autoplay")
            })), i.find(".dt-owl-item").on("mouseleave", (function(t) {
                n && i.trigger("play.owl.autoplay", [o])
            })), i.find(".owl-nav a").on("mouseenter", (function(t) {
                n && i.trigger("stop.owl.autoplay")
            })), i.find(".owl-nav a").on("mouseleave", (function(t) {
                n && i.trigger("play.owl.autoplay", [o])
            })), i.on("mouseenter", (function(t) {
                i.addClass("show-arrows")
            })), i.on("mouseleave", (function(t) {
                i.removeClass("show-arrows")
            }))
        })), t.fn.postTypeScroller = function() {
            var e = t(this),
                i = "rtl" == jQuery(document).attr("dir"),
                s = e.attr("data-next-icon") ? e.attr("data-next-icon") : "icon-ar-018-r",
                n = e.attr("data-prev-icon") ? e.attr("data-prev-icon") : "icon-ar-018-l",
                a = (e.attr("data-padding-side") && parseInt(e.attr("data-padding-side")), "true" != e.attr("data-paused") && void 0 !== e.attr("data-autoslide")),
                r = (e.attr("data-paused"), e.attr("data-autoslide") && parseInt(e.attr("data-autoslide")) > 999 ? parseInt(e.attr("data-autoslide")) : 5e3),
                l = (e.attr("data-autoslide"), e.attr("data-width") ? parseInt(e.attr("data-width")) : 800),
                d = e.attr("data-height") ? parseInt(e.attr("data-height")) : 400,
                c = e.attr("data-img-mode") ? e.attr("data-img-mode") : "fill";
            e.owlCarousel({
                rtl: i,
                items: 1,
                autoHeight: !1,
                center: !1,
                margin: 0,
                loadedClass: "owl-loaded",
                slideBy: 1,
                loop: !0,
                smartSpeed: 600,
                autoplay: a,
                autoplayTimeout: r,
                nav: !0,
                navElement: "a",
                navText: ['<i class="' + n + '"></i>', '<i class="' + s + '"></i>'],
                dots: !1
            }), o.on("debouncedresize", (function() {
                e.find(".dt-owl-item").each((function(i) {
                    var s = t(this),
                        n = s.find("img");
                    if (n.css({
                            opacity: 0
                        }), !n) return !1;
                    var o;
                    o = d / l, "fit" == c ? s.css({
                        height: o * s.width()
                    }) : s.css({
                        height: o * e.width()
                    });
                    var a, r, h, u, p, f = parseInt(n.attr("width")),
                        m = parseInt(n.attr("height")),
                        g = {};
                    a = s.width() / f, r = o * s.width() / m, h = "fill" == e.attr("data-img-mode") ? a > r ? a : r : "fit" == e.attr("data-img-mode") ? a < r ? a : r : a > r ? a : r, u = Math.ceil(f * h, 10), p = Math.ceil(m * h, 10), g.width = u, g.height = p, g.opacity = 1, n.css(g)
                }))
            })), void 0 !== e.attr("data-autoslide") && t('<div class="psPlay"></div>').appendTo(e), "true" === e.attr("data-paused") && (t(".psPlay", e).addClass("paused"), e.trigger("stop.owl.autoplay")), t(".psPlay", e).on("click", (function(e) {
                e.preventDefault();
                var i = t(this);
                i.hasClass("paused") ? (i.removeClass("paused"), a = !0, i.trigger("play.owl.autoplay", [r, 600])) : (i.addClass("paused"), i.trigger("stop.owl.autoplay"))
            }))
        }, t(".slider-simple:not(.slider-masonry)").each((function() {
            t(this).postTypeScroller()
        }));
        var y, b = t("#main .slider-content, #footer .slider-content, .side-header:not(.sub-downwards) .mega-full-width > .dt-mega-menu-wrap  .slider-content, .side-header:not(.sub-downwards) .mega-auto-width > .dt-mega-menu-wrap  .slider-content");

        function C(e) {
            const i = e.attr("data-autoplay_speed") ? parseInt(e.attr("data-autoplay_speed")) : 6e3;
            e.hasClass("refreshed") || (e.addClass("refreshed"), e.trigger("refresh.owl.carousel")), e.hasClass("content-rollover-layout-list") && !e.hasClass("disable-layout-hover") && e.find(".post-entry-wrapper").clickOverlayGradient(), clearTimeout(y), y = setTimeout((function() {
                t(".dt-owl-item.cloned .animate-element.animation-triggered:not(.start-animation)").addClass("start-animation")
            }), 50), dtGlobals.isInViewport(e) || "true" !== e.attr("data-autoplay") ? dtGlobals.isInViewport(e) && "true" === e.attr("data-autoplay") && e.trigger("play.owl.autoplay", [i]) : e.trigger("stop.owl.autoplay")
        }
        t.fn.widgetScroller = function() {
            return this.each((function() {
                var e = t(this),
                    i = void 0 !== e.attr("data-autoslide"),
                    s = e.attr("data-autoslide") ? parseInt(e.attr("data-autoslide")) : 6e3,
                    n = "rtl" == jQuery(document).attr("dir");
                e.owlCarousel({
                    rtl: n,
                    items: 1,
                    autoHeight: !0,
                    margin: 0,
                    loadedClass: "owl-loaded",
                    slideBy: "page",
                    loop: e.children().length > 1,
                    smartSpeed: 600,
                    autoplay: i,
                    autoplayTimeout: s,
                    autoplayHoverPause: !1,
                    nav: !1,
                    dots: !0,
                    dotsEach: !0
                })
            }))
        }, b.widgetScroller().css("visibility", "visible");
        var _;
        t.fn.the7OwlCarousel = function() {
            var e = t(this);
            if (e.length) {
                var i, s = e.attr("data-col-gap") ? parseInt(e.attr("data-col-gap")) : 0,
                    n = "true" === e.attr("data-auto-height"),
                    o = e.attr("data-speed") ? parseInt(e.attr("data-speed")) : 600,
                    a = "true" === e.attr("data-autoplay"),
                    r = e.attr("data-autoplay_speed") ? parseInt(e.attr("data-autoplay_speed")) : 6e3,
                    l = "true" === e.attr("data-arrows"),
                    d = "true" === e.attr("data-bullet"),
                    h = e.attr("data-wide-col-num") ? parseInt(e.attr("data-wide-col-num")) : 3,
                    u = e.attr("data-col-num") ? parseInt(e.attr("data-col-num")) : 3,
                    p = e.attr("data-laptop-col") ? parseInt(e.attr("data-laptop-col")) : 3,
                    f = e.attr("data-h-tablet-columns-num") ? parseInt(e.attr("data-h-tablet-columns-num")) : 3,
                    m = e.attr("data-v-tablet-columns-num") ? parseInt(e.attr("data-v-tablet-columns-num")) : 2,
                    g = e.attr("data-phone-columns-num") ? parseInt(e.attr("data-phone-columns-num")) : 1,
                    v = "rtl" == jQuery(document).attr("dir"),
                    w = "1" == e.attr("data-scroll-mode") ? parseInt(e.attr("data-scroll-mode")) : "page",
                    y = e.attr("data-next-icon") ? e.attr("data-next-icon") : "icon-ar-002-r",
                    b = e.attr("data-prev-icon") ? e.attr("data-prev-icon") : "icon-ar-001-l",
                    _ = !("1" != e.attr("data-scroll-mode") || !d);
                if (void 0 !== e.attr("data-stage-padding")) var x = e.hasClass("enable-img-shadow") ? parseInt(e.attr("data-stage-padding")) + parseInt(e.attr("data-col-gap")) / 2 : parseInt(e.attr("data-stage-padding"));
                else x = 0;
                s = e.attr("data-col-gap") ? parseInt(e.attr("data-col-gap")) : e.attr("data-padding-side") ? parseInt(e.attr("data-padding-side")) : 0, e.on("initialize.owl.carousel", (function(i) {
                    t(e[0]).find("script, style").each((function() {
                        var e = t(this);
                        e.siblings().first();
                        t(e).prev().length > 0 ? t(e).prev().addBack().wrapAll("<div class='carousel-item-wrap' />") : t(e).next().length > 0 && t(e).next().addBack().wrapAll("<div class='carousel-item-wrap' />")
                    })), c()
                }));
                var I = {};
                t(this).hasClass("products-carousel-shortcode") && e.parent(".elementor-widget-container").length && elementorFrontendConfig ? (I[0] = {
                    items: g,
                    loop: e.children().length > g,
                    stagePadding: 0
                }, I[elementorFrontendConfig.breakpoints.md] = {
                    loop: e.children().length > f,
                    items: f,
                    stagePadding: 0
                }, I[elementorFrontendConfig.breakpoints.lg] = {
                    loop: e.children().length > u,
                    items: u
                }) : I = {
                    0: {
                        items: g,
                        loop: e.children().length > g,
                        stagePadding: 0
                    },
                    481: {
                        loop: e.children().length > m,
                        items: m,
                        stagePadding: 0
                    },
                    769: {
                        loop: e.children().length > f,
                        items: f,
                        stagePadding: 0
                    },
                    992: {
                        loop: e.children().length > p,
                        items: p
                    },
                    1199: {
                        loop: e.children().length > u,
                        items: u
                    },
                    1450: {
                        loop: e.children().length > h,
                        items: h
                    }
                }, e.owlCarousel({
                    rtl: v,
                    items: h,
                    autoHeight: n,
                    margin: s,
                    stagePadding: x,
                    loadedClass: "owl-loaded",
                    slideBy: w,
                    loop: !0,
                    smartSpeed: o,
                    responsive: I,
                    autoplay: a,
                    autoplayTimeout: r,
                    nav: l,
                    navElement: "a",
                    navText: ['<i class="' + b + '" ></i>', '<i class="' + y + '"></i>'],
                    dots: d,
                    dotsEach: _
                }), e.hasClass("content-rollover-layout-list") && !e.hasClass("disable-layout-hover") && e.find(".post-entry-wrapper").clickOverlayGradient(), dtGlobals.addOnloadEvent((function() {
                    C(e)
                })), e.on("changed.owl.carousel", (function(i) {
                    t(".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container", e).initPhotoswipe(), the7Utils.isFunction(t.fn.triggerClonedHoverClick) && t(" .dt-owl-item.cloned .buttons-on-img:not(.rollover-active) .rollover-content", e).triggerClonedHoverClick(), t(".animate-element:not(.start-animation):in-viewport", e).checkInViewport();
                    var s = t(" .dt-owl-item.cloned .post-thumbnail-wrap", e);
                    e.hasClass("albums-shortcode") && (e.hasClass("gradient-overlay-layout-list") || e.hasClass("content-rollover-layout-list") ? the7Utils.isFunction(t.fn.triggerClonedOverlayAlbumsClick) && t(" .dt-owl-item.cloned .post-entry-content", e).triggerClonedOverlayAlbumsClick() : the7Utils.isFunction(t.fn.triggerClonedAlbumsClick) && s.triggerClonedAlbumsClick()), e.hasClass("gallery-shortcode") && t(e).initCarouselClonedPhotoswipe()
                })), e.on("change.owl.carousel", (function(s) {
                    clearTimeout(i), i = setTimeout((function() {
                        e.find(".dt-owl-item.active").layzrCarouselUpdate(), t(".dt-owl-item.cloned .lazy-load", e).parent().removeClass("layzr-bg")
                    }), 20)
                })), e.on("resized.owl.carousel", (function(t) {
                    e.hasClass("content-rollover-layout-list") && !e.hasClass("disable-layout-hover") && e.find(".post-entry-wrapper").clickOverlayGradient()
                })), e.find(".dt-owl-item").on("mouseenter", (function(t) {
                    a && e.trigger("stop.owl.autoplay")
                })), e.find(".dt-owl-item").on("mouseleave", (function(t) {
                    a && e.trigger("play.owl.autoplay", [r])
                })), e.find(".owl-nav a").on("mouseenter", (function(t) {
                    a && e.trigger("stop.owl.autoplay")
                })), e.find(".owl-nav a").on("mouseleave", (function(t) {
                    a && e.trigger("play.owl.autoplay", [r])
                }))
            }
        }, t(".dt-owl-carousel-call, .related-projects").each((function() {
            t(this).the7OwlCarousel()
        })), t.fn.the7ElementorOwlCarousel = function() {
            var e = t(this);
            if (!e.length) return;
            var i, s = e.attr("data-col-gap") ? parseInt(e.attr("data-col-gap")) : 0,
                n = e.attr("data-col-gap-tablet") ? parseInt(e.attr("data-col-gap-tablet")) : s,
                o = e.attr("data-col-gap-mobile") ? parseInt(e.attr("data-col-gap-mobile")) : n,
                a = "true" === e.attr("data-auto-height"),
                r = e.attr("data-speed") ? parseInt(e.attr("data-speed")) : 600,
                l = "true" === e.attr("data-autoplay"),
                d = e.attr("data-autoplay_speed") ? parseInt(e.attr("data-autoplay_speed")) : 6e3,
                h = "true" === e.attr("data-arrows"),
                u = "true" === e.attr("data-arrows_tablet"),
                p = "true" === e.attr("data-arrows_mobile"),
                f = "y" === e.attr("data-bullet"),
                m = void 0 !== elementorFrontendConfig.breakpoints.md ? elementorFrontendConfig.breakpoints.md : 481,
                g = void 0 !== elementorFrontendConfig.breakpoints.lg ? elementorFrontendConfig.breakpoints.lg : 769,
                v = void 0 !== dtLocal.elementor.settings.container_width ? dtLocal.elementor.settings.container_width + 1 : 1450,
                w = e.attr("data-col-num") ? parseInt(e.attr("data-col-num")) : 3,
                y = e.attr("data-wide-col-num") ? parseInt(e.attr("data-wide-col-num")) : w,
                b = (e.attr("data-laptop-col") && parseInt(e.attr("data-laptop-col")), e.attr("data-h-tablet-columns-num") ? parseInt(e.attr("data-h-tablet-columns-num")) : 3),
                _ = (e.attr("data-v-tablet-columns-num") && parseInt(e.attr("data-v-tablet-columns-num")), e.attr("data-phone-columns-num") ? parseInt(e.attr("data-phone-columns-num")) : 1),
                x = "rtl" == jQuery(document).attr("dir"),
                I = "1" == e.attr("data-scroll-mode") ? parseInt(e.attr("data-scroll-mode")) : "page",
                S = (e.attr("data-next-icon") && e.attr("data-next-icon"), e.attr("data-prev-icon") && e.attr("data-prev-icon"), !("1" != e.attr("data-scroll-mode") || !f));
            if ("y" === e.attr("data-bullet_tablet")) var T = !0;
            else if ("n" === e.attr("data-bullet_tablet")) T = !1;
            else T = f;
            if ("y" === e.attr("data-bullet_mobile")) var k = !0;
            else if ("n" === e.attr("data-bullet_mobile")) k = !1;
            else k = T;
            const z = e.closest(".elementor-widget");
            if (z.length) {
                const t = z.data("settings");
                t && t.widget_columns_wide_desktop_breakpoint && (v = parseInt(t.widget_columns_wide_desktop_breakpoint) + 1)
            }
            var L = e.next(".owl-nav").find(".owl-prev").html(),
                E = e.next(".owl-nav").find(".owl-next").html();
            void 0 === e.attr("data-arrows_tablet") && (u = h), void 0 === e.attr("data-arrows_mobile") && (p = h), e.on("initialize.owl.carousel", (function(t) {
                c()
            }));
            var A = {};
            A[0] = {
                items: _,
                loop: e.children().length > _,
                nav: p,
                dots: k,
                margin: o
            }, A[m] = {
                loop: e.children().length > b,
                items: b,
                nav: u,
                dots: T,
                margin: n
            }, A[g] = {
                loop: e.children().length > w,
                items: w,
                nav: h,
                dots: f,
                margin: s
            }, A[v] = {
                loop: e.children().length > y,
                items: y,
                nav: h,
                dots: f,
                margin: s
            }, e.owlCarousel({
                rtl: x,
                items: y,
                autoHeight: a,
                margin: s,
                loadedClass: "owl-loaded",
                slideBy: I,
                loop: !0,
                smartSpeed: r,
                autoplay: l,
                autoplayTimeout: d,
                responsive: A,
                navElement: "a",
                navText: [L, E],
                dots: f,
                dotsEach: S
            }), e.hasClass("content-rollover-layout-list") && !e.hasClass("disable-layout-hover") && e.find(".post-entry-wrapper").clickOverlayGradient(), dtGlobals.addOnloadEvent((function() {
                C(e)
            })), e.on("changed.owl.carousel", (function(i) {
                t(".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container", e).initPhotoswipe(), t(".animate-element:not(.start-animation):in-viewport", e).checkInViewport();
                var s = t(" .dt-owl-item.cloned .post-thumbnail-wrap", e);
                e.hasClass("albums-shortcode") && (e.hasClass("gradient-overlay-layout-list") || e.hasClass("content-rollover-layout-list") ? the7Utils.isFunction(t.fn.triggerClonedOverlayAlbumsClick) && t(" .dt-owl-item.cloned .post-entry-content", e).triggerClonedOverlayAlbumsClick() : the7Utils.isFunction(t.fn.triggerClonedAlbumsClick) && s.triggerClonedAlbumsClick()), e.hasClass("gallery-shortcode") && t(e).initCarouselClonedPhotoswipe()
            })), e.on("change.owl.carousel", (function(s) {
                clearTimeout(i), i = setTimeout((function() {
                    e.find(".dt-owl-item.active").layzrCarouselUpdate(), t(".dt-owl-item.cloned .lazy-load", e).parent().removeClass("layzr-bg")
                }), 20)
            })), e.find("img").length > 0 && e.css("--dynamic-img-height", e.find(".dt-owl-item img").height() + "px"), e.on("resized.owl.carousel", (function(t) {
                e.hasClass("content-rollover-layout-list") && !e.hasClass("disable-layout-hover") && e.find(".post-entry-wrapper").clickOverlayGradient(), e.find("img").length > 0 && e.css("--dynamic-img-height", e.find(".dt-owl-item img").height() + "px")
            })), e.find(".dt-owl-item").on("mouseenter", (function(t) {
                l && e.trigger("stop.owl.autoplay")
            })), e.find(".dt-owl-item").on("mouseleave", (function(t) {
                l && e.trigger("play.owl.autoplay", [d])
            })), e.find(".owl-nav a").on("mouseenter", (function(t) {
                l && e.trigger("stop.owl.autoplay")
            })), e.find(".owl-nav a").on("mouseleave", (function(t) {
                l && e.trigger("play.owl.autoplay", [d])
            }))
        }, t(".elementor-owl-carousel-call").each((function() {
            t(this).the7ElementorOwlCarousel()
        })), dtGlobals.isMobile && !dtGlobals.isWindowsPhone ? o.bind("orientationchange", (function(e) {
            clearTimeout(_), _ = setTimeout((function() {
                t(".dt-owl-carousel-call, .elementor-owl-carousel-call, .related-projects").trigger("refresh.owl.carousel"), t(".slider-simple:not(.slider-masonry)").trigger("refresh.owl.carousel")
            }), 200)
        })) : dtGlobals.isAndroid && o.bind("debouncedresize", (function(e) {
            clearTimeout(_), _ = setTimeout((function() {
                t(".dt-owl-carousel-call, .elementor-owl-carousel-call, .related-projects").trigger("refresh.owl.carousel"), t(".slider-simple:not(.slider-masonry)").trigger("refresh.owl.carousel")
            }), 200)
        }));
        var x = t(".top-bar"),
            I = t(".masthead"),
            S = t(".overlay-navigation"),
            T = t(".sticky-header"),
            k = t(".sticky-top-line"),
            z = t("#main-slideshow, .photo-scroller"),
            L = (t(".header-side-left").length, t(".header-side-right").length, t("#main, #main-slideshow, .photo-scroller, .page-title, .fancy-header, .footer"), t(".floating-logo.side-header-menu-icon .branding, .side-header-h-stroke, #phantom"), t(".side-header")),
            E = (t(".page-template-template-microsite").length, r.hasClass("transparent")),
            A = t(".floating-navigation-below-slider").exists();
        if (t(".side-header-v-stroke").length > 0) L.width(), t(".side-header-v-stroke").width();
        else L.width(); /*!-Show Hide side header*/
        if (t.closeSideHeader = function() {
                l.removeClass("show-header"), l.addClass("closed-header"), t(".sticky-header-overlay").removeClass("active")
            }, t.closeMobileHeader = function() {
                l.removeClass("show-mobile-header"), l.addClass("closed-mobile-header"), r.removeClass("show-sticky-mobile-header show-overlay-mobile-header").addClass("closed-overlay-mobile-header"), t(".mobile-sticky-header-overlay, .dt-mobile-menu-icon, .menu-toggle, .menu-close-toggle").removeClass("active")
            }, T.length > 0 || S.length > 0) {
            t('<div class="lines-button x"><span class="menu-line"></span><span class="menu-line"></span><span class="menu-line"></span></div>').appendTo(".menu-toggle");
            var P = dtLocal.themeSettings.ToggleCaptionEnabled;
            ToggleCaption = "disabled" != P ? "<span class='menu-toggle-caption'>" + dtLocal.themeSettings.ToggleCaption + "</span>" : "", T.length > 0 && r.append('<div class="sticky-header-overlay"></div>');
            var M = t(".menu-toggle"),
                O = t(".menu-close-toggle"),
                D = t(".menu-toggle:not(.active), .menu-close-toggle:not(.active)"),
                H = t(".sticky-header-overlay");
            M.on("click", (function() {
                if (!t(".header-under-side-line").length > 0) var e = t(".side-header .menu-toggle");
                else e = t(".menu-toggle");
                e.hasClass("active") ? (e.removeClass("active"), l.removeClass("show-header").addClass("closed-header"), H.removeClass("active"), t(".hide-overlay").removeClass("active")) : (D.removeClass("active"), e.addClass("active").css({
                    left: "",
                    right: ""
                }), l.addClass("show-header").removeClass("closed-header"), O.addClass("active"), H.addClass("active"), t(".hide-overlay").addClass("active"))
            })), O.on("click", (function() {
                var e = t(this);
                e.hasClass("active") ? (e.removeClass("active"), l.removeClass("show-header").addClass("closed-header"), H.removeClass("active"), t(".hide-overlay").removeClass("active")) : (D.removeClass("active"), e.addClass("active").css({
                    left: "",
                    right: ""
                }), l.addClass("show-header").removeClass("closed-header"), H.addClass("active"), t(".hide-overlay").addClass("active"))
            })), H.on("click", (function() {
                t(this).hasClass("active") && (D.removeClass("active"), l.removeClass("show-header").addClass("closed-header"), H.removeClass("active"))
            })), t(".hide-overlay").on("click", (function() {
                t(this).hasClass("active") && (D.removeClass("active"), l.removeClass("show-header"), l.addClass("closed-header"), H.removeClass("active"))
            }))
        }

        function F() {
            var e = o.width(),
                i = (e - l.innerWidth()) / 2,
                s = t(".side-header-menu-icon").length > 0;
            if ((e - l.innerWidth()) / 2 > 0) i = (e - l.innerWidth()) / 2;
            else i = "";
            if (r.hasClass("header-side-right") && l.hasClass("boxed") && !T.length > 0 && L.css({
                    right: i
                }), navigator.userAgent.match(/Trident.*rv\:11\./) && A && E) {
                I.insertAfter(z);
                var n = I.attr("style");
                I.not(".sticky-on").attr("style", n + "; top:" + z.height() + "px !important;")
            }
            t(".floating-menu-icon-right").length > 0 && l.hasClass("boxed") && (D.css({
                right: i
            }), t(".branding").css({
                left: i
            })), l.hasClass("boxed") && s && !t(".floating-menu-icon-right").length > 0 && (t(".floating-logo .branding").css({
                right: i
            }), D.css({
                left: i
            })), S.length > 0 && s && l.hasClass("boxed") && (D.css({
                right: i
            }), t(".floating-logo .branding").css({
                left: i
            }))
        }
        if (F(), o.on("resize", (function() {
                F()
            })), A && r.hasClass("footer-overlap") && I.insertAfter(z), navigator.userAgent.match(/Trident.*rv\:11\./) && A && E) {
            I.insertAfter(z);
            var W = I.attr("style");
            I.attr("style", W + "; top:" + z.height() + "px !important;")
        }
        if (t(".mixed-header").length > 0) var B = t(".mixed-header");
        else B = I;
        if (t(".side-header .header-bar").wrap("<div class='header-scrollbar-wrap'></div>"), L.length > 0 && "function" == typeof t.fn.mCustomScrollbar && !dtGlobals.isMobile && (t(".header-scrollbar-wrap").mCustomScrollbar({
                scrollInertia: 150,
                callbacks: {
                    whileScrolling: function() {
                        t(".header-scrollbar-wrap").layzrInitialisation()
                    }
                }
            }), t(".sub-downwards .main-nav").find(".slider-content").widgetScroller().css("visibility", "visible")), L.length > 0 && !t(".mCSB_container").length > 0 && t(".side-header .header-scrollbar-wrap .header-bar").wrap("<div class='mCSB_container'></div>"), !r.hasClass("responsive-off")) {
            var R = t(".mixed-header"),
                j = t(".masthead .near-logo-first-switch").clone(!0).addClass("show-on-first-switch"),
                $ = t(".masthead .near-logo-second-switch").clone(!0).addClass("show-on-second-switch"),
                G = I.find(".in-menu-first-switch").clone(!0).addClass("hide-on-desktop hide-on-second-switch show-on-first-switch"),
                Y = I.find(".in-menu-second-switch").clone(!0).addClass("hide-on-desktop hide-on-first-switch show-on-second-switch"),
                N = I.find(".in-top-bar").clone(!0).addClass("hide-on-desktop hide-on-first-switch show-on-second-switch"),
                q = I.find(".in-top-bar-left").clone(!0).addClass("hide-on-desktop show-on-first-switch"),
                U = I.find(".in-top-bar-right").clone(!0).addClass("hide-on-desktop  show-on-first-switch");
            if (R.length > 0) {
                var V = R.find(".branding > a, .branding > img").clone(!0);
                B = R
            } else V = t(".masthead:not(.mixed-header)").find(".branding > a, .branding > img").clone(!0), B = I;
            if (x.length > 0 && "none" != x.css("display")) var X = x.innerHeight();
            else X = 0;
            var Z = dtLocal.themeSettings.mobileHeader.mobileToggleCaptionEnabled;
            mobileToggleCaption = "disabled" != Z ? "<span class='menu-toggle-caption'>" + dtLocal.themeSettings.mobileHeader.mobileToggleCaption + "</span>" : "", t("<div class='mobile-header-bar'><div class='mobile-navigation'></div><div class='mobile-mini-widgets'></div><div class='mobile-branding'></div></div>").appendTo(".masthead"), t(".mobile-header-bar .mobile-navigation").append("<a href='#' class='dt-mobile-menu-icon' aria-label='Mobile menu icon'>" + mobileToggleCaption + "<div class='lines-button '><span class='menu-line'></span><span class='menu-line'></span><span class='menu-line'></span></div></a>"), t(j).appendTo(".mobile-header-bar .mobile-mini-widgets"), t($).appendTo(".mobile-header-bar .mobile-mini-widgets"), t(".left-widgets", x).append(N), t(".left-widgets", x).append(q), t(".right-widgets", x).append(U).removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"), t(".right-widgets", x).append(U).removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"), t(G).appendTo(".mobile-mini-widgets-in-menu"), t(Y).appendTo(".mobile-mini-widgets-in-menu"), G.removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"), Y.removeClass("select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"), t(".mobile-header-bar .mobile-branding").append(V);
            var Q = t(".dt-mobile-header"); /*!-Show Hide mobile header*/
            if (Q.siblings().hasClass("dt-parent-menu-clickable") && Q.addClass("dt-parent-menu-clickable"), !t(".mobile-mini-widgets-in-menu").find(".in-menu-first-switch ").length > 0 && t(".mobile-mini-widgets-in-menu").addClass("first-switch-no-widgets"), !t(".mobile-mini-widgets-in-menu").find(".in-menu-second-switch ").length > 0 && t(".mobile-mini-widgets-in-menu").addClass("second-switch-no-widgets"), j.removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"), $.removeClass("select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"), N.removeClass("show-on-desktop select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch in-top-bar-left").addClass("hide-on-desktop hide-on-first-switch"), q.removeClass("show-on-desktop select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch in-top-bar").addClass("hide-on-desktop hide-on-second-switch"), U.removeClass("show-on-desktop select-type-menu list-type-menu  select-type-menu-second-switch list-type-menu-second-switch").addClass("hide-on-desktop"), t(".header-bar .mini-widgets > .mini-nav ").removeClass("select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"), t(".mini-nav.show-on-desktop:not(.show-on-first-switch):not(.show-on-second-switch)", x).removeClass("select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"), t(".masthead .hide-on-desktop").addClass("display-none"), t(".mobile-main-nav ").find("li").each((function() {
                    var e = t(this),
                        i = e.find(" > .dt-mega-menu-wrap > .sub-nav");
                    if (e.hasClass("new-column")) {
                        var s = e.prev().find(" > .sub-nav");
                        t(" > .sub-nav > *", e).appendTo(s)
                    }
                    i.unwrap()
                })).removeClass("dt-mega-menu dt-mega-parent hide-mega-title").find(" > .sub-nav").removeClass(" hover-style-bg"), Q.length > 0) {
                dtGlobals.mobileMenuPoint = 50;
                var K = t(".dt-mobile-menu-icon"),
                    J = !1,
                    tt = B.offset().top;
                if (!t(".floating-btn").length > 0 && t(".floating-mobile-menu-icon").length > 0) K.first().clone(!0).insertBefore(K).addClass("floating-btn");
                var et = t(".floating-btn");
                o.scroll((function() {
                    dtGlobals.mobileMenuPoint = tt + B.height() + 50, dtGlobals.winScrollTop > dtGlobals.mobileMenuPoint && !1 === J ? (et.parents(".masthead").addClass("show-floating-icon"), J = !0) : dtGlobals.winScrollTop <= dtGlobals.mobileMenuPoint && !0 === J && (et.parents(".masthead").removeClass("show-floating-icon"), J = !1)
                }));
                K = t(".dt-mobile-menu-icon");
                !t(".mobile-sticky-header-overlay").length > 0 && r.append('<div class="mobile-sticky-header-overlay"></div>');
                var it = t(".mobile-sticky-header-overlay");
                K.on("click", (function(e) {
                    e.preventDefault();
                    var i = t(this);
                    i.hasClass("active") ? (i.removeClass("active"), l.removeClass("show-mobile-header").addClass("closed-mobile-header"), r.removeClass("show-mobile-overlay-header").addClass("closed-overlay-mobile-header"), i.parents("body").removeClass("show-sticky-mobile-header"), it.removeClass("active")) : (K.removeClass("active"), i.addClass("active"), l.addClass("show-mobile-header").removeClass("closed-mobile-header"), r.removeClass("closed-overlay-mobile-header").addClass("show-overlay-mobile-header"), it.removeClass("active"), i.parents("body").addClass("show-sticky-mobile-header"), it.addClass("active"))
                })), it.on("click", (function() {
                    t(this).hasClass("active") && (K.removeClass("active"), l.removeClass("show-mobile-header").addClass("closed-mobile-header"), r.removeClass("show-sticky-mobile-header").addClass("closed-overlay-mobile-header").addClass("closed-overlay-mobile-header"), it.removeClass("active"), l.removeClass("show-mobile-sidebar"))
                })), t(".dt-close-mobile-menu-icon").on("click", (function() {
                    l.removeClass("show-mobile-header"), l.addClass("closed-mobile-header"), r.removeClass("show-sticky-mobile-header"), r.removeClass("show-overlay-mobile-header").addClass("closed-overlay-mobile-header"), it.removeClass("active"), K.removeClass("active")
                })), t(".dt-mobile-header").wrapInner("<div class='mobile-header-scrollbar-wrap'></div>"), t(".mobile-header-scrollbar-wrap").layzrInitialisation(), Q.find(".slider-content").widgetScroller().css("visibility", "visible"), !t(".touchevents").length > 0 && (Q.on("mouseenter", (function(t) {
                    Q.css("overflow-y", "auto")
                })), Q.on("mouseleave", (function(t) {
                    Q.css("overflow-y", "hidden")
                })))
            }
        }
        t(".l-to-r-line > li:not(.menu-item-language) > a > span:last-child").not(".l-to-r-line > li > a > span.mega-icon").append("<i class='underline'></i>"), t(".not-clickable-item").on("click", (function(t) {
            t.preventDefault(), t.stopPropagation()
        })), (t(".active-line-decoration").length > 0 || t(".hover-line-decoration").length > 0) && t(".main-nav > .menu-item > a").append("<span class='decoration-line'></span>");
        var st = t(".main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"),
            nt = t(".masthead:not(.sub-downwards) .main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"),
            ot = t(".main-nav");
        L = t(".side-header");
        t(".menu-item-language").each((function() {
            var e = t(this);
            e.children(".submenu-languages").length > 0 && e.addClass("has-children")
        }));
        ot.clone(), t(".mini-nav").clone();
        t(".mini-nav select").change((function() {
            window.location.href = t(this).val()
        })), dtGlobals.isHovering = !1, t(".main-nav li", L).each((function() {
            var e = t(this);
            if (e.hasClass("new-column")) {
                var i = e.prev().find(" > .sub-nav");
                t(" > .sub-nav > *", e).appendTo(i)
            }
        })), t(".sub-downwards .main-nav > li").each((function() {
            t(this).find(" > .dt-mega-menu-wrap > .sub-nav").unwrap()
        }));
        var at, rt, lt = t(".select-type-menu, .select-type-menu-first-switch, .select-type-menu-second-switch, .mini-wpml .wpml-ls-item-legacy-dropdown"),
            dt = "mini-sub-nav";
        lt.find("> ul").addClass(dt), t(".mini-wpml .wpml-ls-item-legacy-dropdown").find("> ul").addClass(dt), nt.each((function() {
            var e = t(this);
            t(".act", e).parents("li").addClass("act"), t(" li.has-children ", e).each((function() {
                var e, i, s = t(this),
                    n = s.find("> a");
                if (s.parent().hasClass("main-nav") && !s.parents().hasClass("side-header") && t(".masthead").hasClass("show-sub-menu-on-hover")) n = s.find("> a");
                else if (s.parent().hasClass("main-nav") && s.parents().hasClass("side-header") && t(".masthead").hasClass("show-sub-menu-on-hover")) n = s;
                else if ((s.parent().hasClass("sub-nav") || s.parents().hasClass("mini-nav")) && t(".masthead").hasClass("show-sub-menu-on-hover")) n = s;
                if ((dtGlobals.isMobile || dtGlobals.isWindowsPhone) && s.find("> a").on("click", (function(e) {
                        t(this).hasClass("dt-clicked") ? e.stopPropagation() : (e.preventDefault(), st.find(".dt-clicked").removeClass("dt-clicked"), t(this).addClass("dt-clicked"))
                    })), st.parents().hasClass("full-width") && s.hasClass("mega-full-width")) {
                    if (st.parents(".header-bar").length > 0) var a = st.parents(".header-bar").innerWidth();
                    else a = st.parents(".ph-wrap").innerWidth();
                    !L.length > 0 && s.find(".sub-nav-widgets").css({
                        width: a
                    })
                }

                function d(s) {
                    if (s.parent("li").length > 0) var n = s.parent(),
                        a = s.siblings("div.dt-mega-menu-wrap, ul");
                    else n = s, a = (d = s.find("> a")).siblings("div.dt-mega-menu-wrap, ul");
                    var r = s.offset().left,
                        d = s.offset().left,
                        c = s.parents(".masthead");
                    if (n.addClass("dt-hovered"), n.hasClass("dt-mega-menu") && n.addClass("show-mega-menu"), dtGlobals.isHovering = !0, a.length > 0 && (l.width() - (a.offset().left - l.offset().left) - a.width() < 0 && a.addClass("right-overflow"), o.height() - (a.offset().top - dtGlobals.winScrollTop) - a.innerHeight() < 0 && !a.parents().hasClass("sub-sideways") && a.addClass("bottom-overflow"), o.height() - (a.offset().top - dtGlobals.winScrollTop) - a.innerHeight() < 0 && !n.hasClass("dt-mega-menu") && a.addClass("bottom-overflow")), (n.find(".dt-mega-menu-wrap").length > 0 && n.find(".dt-mega-menu-wrap").offset().top + n.find(".dt-mega-menu-wrap").innerHeight()) > o.height() && a.parents().hasClass("sub-sideways") && n.hasClass("dt-mega-menu") && (s.find(".dt-mega-menu-wrap").height() <= o.height() ? n.find(".dt-mega-menu-wrap").css({
                            top: -(n.position().top + n.height() + s.find(".dt-mega-menu-wrap").height() - o.height())
                        }) : n.find(".dt-mega-menu-wrap").css({
                            top: -(s.position().top - 5)
                        })), !L.length > 0 && a.not(".right-overflow").css({
                            left: d - r
                        }), s.parents(".dt-mobile-header").length > 0 && a.css({
                            top: s.position().top - 13 - a.height()
                        }), n.hasClass("mega-auto-width")) {
                        n.width();
                        var h = c.offset().left,
                            u = n.offset().left;
                        if ($_this_parents_ofs = n.offset().left - h, !L.length) {
                            var p = l.width();
                            if (t(".boxed").length > 0) {
                                u = n.position().left;
                                a.innerWidth() > p - n.position().left && a.css({
                                    left: -(a.innerWidth() - (p - u) + 20)
                                })
                            } else {
                                u = n.offset().left;
                                a.innerWidth() > p - n.offset().left && a.css({
                                    left: -(a.innerWidth() - (p - u) + 20)
                                })
                            }
                            a.innerWidth() > p && (t(".boxed").length > 0 ? a.css({
                                width: c.width() - 40,
                                left: -(n.position().left + 20)
                            }) : a.css({
                                width: c.width() - 40,
                                left: -(u - h + 20)
                            }))
                        }
                        null != typeof a.find(".slider-content") && a.find(".slider-content").widgetScroller().css("visibility", "visible"), a.layzrInitialisation()
                    }
                    if (n.hasClass("mega-full-width")) {
                        u = n.offset().left;
                        if (s.parents(".header-bar").length > 0)
                            if (s.parents(".masthead").hasClass("full-width")) {
                                var f = s.parents(".header-bar").innerWidth() - 40;
                                h = s.parents(".header-bar").offset().left + 20
                            } else f = s.parents(".header-bar").innerWidth(), h = s.parents(".header-bar").offset().left;
                        else if (s.parents(".masthead").hasClass("full-width")) f = s.parents(".ph-wrap").innerWidth() - 40, h = s.parents(".ph-wrap").offset().left + 20;
                        else f = s.parents(".ph-wrap").innerWidth(), h = s.parents(".ph-wrap").offset().left;
                        !L.length > 0 && a.css({
                            width: f,
                            left: -(u - h)
                        }), null != typeof a.find(".slider-content") && a.find(".slider-content").widgetScroller().css("visibility", "visible"), a.layzrInitialisation()
                    }
                    clearTimeout(e), clearTimeout(i), e = setTimeout((function() {
                        n.hasClass("dt-hovered") && (a.stop().css("visibility", "visible").animate({
                            opacity: 1
                        }, 150, (function() {
                            n.addClass("show-mega-menu-content")
                        })), t(".searchform .submit", oe).removeClass("act"), t(".mini-search").removeClass("act"), t(".mini-search.popup-search .popup-search-wrap", oe).stop().animate({
                            opacity: 0
                        }, 150, (function() {
                            t(this).css("visibility", "hidden")
                        })))
                    }), 100)
                }

                function c(s) {
                    var n = s.find("> a").siblings("div.dt-mega-menu-wrap, ul");
                    s.removeClass("dt-hovered"), dtGlobals.isHovering = !1, clearTimeout(e), clearTimeout(i), i = setTimeout((function() {
                        s.hasClass("dt-hovered") || (n.stop().animate({
                            opacity: 0
                        }, 150, (function() {
                            t(this).css("visibility", "hidden")
                        })), s.removeClass("show-mega-menu"), s.removeClass("show-mega-menu-content"), setTimeout((function() {
                            s.hasClass("dt-hovered") || (n.removeClass("right-overflow"), n.removeClass("bottom-overflow"), s.find(".dt-mega-menu-wrap").css({
                                top: ""
                            }), s.hasClass("mega-auto-width") && n.css({
                                width: "",
                                left: ""
                            }))
                        }), 400))
                    }), 150), s.find("> a").removeClass("dt-clicked")
                }
                s.find("> a").on("focus", (function(e) {
                    "tap" == e.type && e.stopPropagation();
                    var i = t(this);
                    d(i), t(" li.has-children").removeClass("parent-clicked"), i.parent().addClass("parent-clicked"), t(e.target).parents().hasClass("sub-nav") || (t(" li.has-children").removeClass("dt-hovered"), i.parent().addClass("dt-hovered")), t(".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap").stop().animate({
                        opacity: 0
                    }, 150, (function() {
                        t(this).css("visibility", "hidden")
                    })), t(" .main-nav .sub-nav li:not(.parent-clicked) .sub-nav").stop().animate({
                        opacity: 0
                    }, 150, (function() {
                        t(this).css("visibility", "hidden")
                    }))
                })), s.find("> a").on("focusout", (function(s) {
                    var n = t(this),
                        o = t("this").siblings("div.dt-mega-menu-wrap, ul");
                    dtGlobals.isHovering = !1, clearTimeout(e), clearTimeout(i), i = setTimeout((function() {
                        n.parent().hasClass("dt-hovered") || (o.stop().animate({
                            opacity: 0
                        }, 150, (function() {
                            t(this).css("visibility", "hidden")
                        })), n.parent().removeClass("show-mega-menu"), n.parent().removeClass("show-mega-menu-content"), setTimeout((function() {
                            n.parent().hasClass("dt-hovered") || (o.removeClass("right-overflow"), o.removeClass("bottom-overflow"), n.parent().find(".dt-mega-menu-wrap").css({
                                top: ""
                            }), n.parent().hasClass("mega-auto-width") && o.css({
                                width: "",
                                left: ""
                            }))
                        }), 400))
                    }), 150), n.parent().removeClass("parent-clicked")
                })), t(".masthead").hasClass("show-sub-menu-on-hover") ? (n.on("mouseenter tap", (function(e) {
                    "tap" == e.type && e.stopPropagation(), d(t(this))
                })), s.on("mouseleave", (function(e) {
                    c(t(this))
                }))) : (r.on("click", (function(e) {
                    t(e.target).hasClass("sub-nav") && t(e.target).hasClass("dt-mega-menu-wrap") || (t(" #primary-menu li.dt-hovered:not(.dt-mega-menu) > .sub-nav").animate({
                        opacity: 0
                    }, 100, (function() {
                        t(this).css("visibility", "hidden")
                    })), t(" #primary-menu li.dt-mega-menu > .is-clicked").siblings(" .dt-mega-menu-wrap").animate({
                        opacity: 0
                    }, 100, (function() {
                        t(this).css("visibility", "hidden")
                    })), t("#primary-menu  li.has-children").removeClass("dt-hovered"), t("#primary-menu  li.has-children > a").removeClass("is-clicked"))
                })), n.on("click", (function(e) {
                    if (!t(this).parents().hasClass("mobile-main-nav")) {
                        "tap" == e.type && e.stopPropagation();
                        var i = t(this),
                            s = i.parent("li");
                        if (!i.hasClass("is-clicked")) return d(i), t(" li.has-children > a").removeClass("is-clicked"), t(" li.has-children").removeClass("parent-clicked"), i.parent().addClass("parent-clicked"), t(e.target).parents().hasClass("sub-nav") || (t(" li.has-children").removeClass("dt-hovered"), i.parent().addClass("dt-hovered")), t(".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap").stop().animate({
                            opacity: 0
                        }, 150, (function() {
                            t(this).css("visibility", "hidden")
                        })), t(".main-nav .sub-nav li:not(.parent-clicked) .sub-nav").stop().animate({
                            opacity: 0
                        }, 150, (function() {
                            t(this).css("visibility", "hidden")
                        })), i.addClass("is-clicked"), !1;
                        c(s), i.removeClass("is-clicked"), i.parent().removeClass("parent-clicked")
                    }
                })))
            }))
        })), t.fn.touchMenuItem = function() {
            return this.each((function() {
                var e = t(this);
                if (!e.hasClass("item-ready")) {
                    r.on("touchend", (function(e) {
                        t(".mobile-true .has-children > a").removeClass("is-clicked")
                    }));
                    var i = t(this),
                        s = i.attr("target") ? i.attr("target") : "_self";
                    i.on("touchstart", (function(t) {
                        origY = t.originalEvent.touches[0].pageY, origX = t.originalEvent.touches[0].pageX
                    })), i.on("touchend", (function(e) {
                        var n = e.originalEvent.changedTouches[0].pageX,
                            o = e.originalEvent.changedTouches[0].pageY;
                        if (origY == o || origX == n)
                            if (i.hasClass("is-clicked"));
                            else if (i.parent().hasClass("dt-hovered")) return e.preventDefault(), t(".mobile-true .has-children > a").removeClass("is-clicked"), i.addClass("is-clicked"), window.open(i.attr("href"), s), !1
                    })), e.addClass("item-ready")
                }
            }))
        }, t(".mobile-true .main-nav .has-children > a").touchMenuItem(), lt.on("mouseenter tap", (function(e) {
            "tap" == e.type && e.stopPropagation();
            var i = t(this);
            i.addClass("dt-hovered"), l.width() - (i.children(".mini-sub-nav").offset().left - l.offset().left) - i.find(" > .mini-sub-nav").width() < 0 && i.children(".mini-sub-nav").addClass("right-overflow"), o.height() - (i.children(".mini-sub-nav").offset().top - dtGlobals.winScrollTop) - i.children(".mini-sub-nav").height() < 0 && !i.parents(".dt-mobile-header").length > 0 && i.children(".mini-sub-nav").addClass("bottom-overflow"), i.parents(".dt-mobile-header").length > 0 && i.children(".mini-sub-nav").css({
                top: i.position().top - 13 - i.children(".mini-sub-nav").height()
            }), dtGlobals.isHovering = !0, clearTimeout(at), clearTimeout(rt), at = setTimeout((function() {
                i.hasClass("dt-hovered") && (t(".mini-sub-nav").stop().animate({
                    opacity: 0
                }, 50, (function() {
                    t(this).css("visibility", "hidden")
                })), i.children(".mini-sub-nav").stop().css("visibility", "visible").animate({
                    opacity: 1
                }, 150))
            }), 100)
        })), lt.on("mouseleave", (function(e) {
            var i = t(this);
            i.removeClass("dt-hovered"), dtGlobals.isHovering = !1, clearTimeout(at), clearTimeout(rt), rt = setTimeout((function() {
                i.hasClass("dt-hovered") || (i.parents().hasClass("dt-mega-menu") || i.children(".mini-sub-nav").stop().animate({
                    opacity: 0
                }, 150, (function() {
                    t(this).css("visibility", "hidden")
                })), setTimeout((function() {
                    i.hasClass("dt-hovered") || (i.children(".mini-sub-nav").removeClass("right-overflow"), i.children(".mini-sub-nav").removeClass("bottom-overflow"))
                }), 400))
            }), 150)
        })), dtGlobals.desktopProcessed = !1, dtGlobals.mobileProcessed = !1;
        var ct = t(".sticky-mobile-header").exists();
        window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") && (t(".masthead:not(.side-header):not(#phantom)").addClass("masthead-mobile-header"), t("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").addClass("masthead-mobile-header").addClass("desktop-side-header")), window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !r.hasClass("responsive-off") ? t(".left-widgets", x).find(".in-top-bar-left").length > 0 || t(".right-widgets", x).find(".in-top-bar-right").length > 0 ? x.removeClass("top-bar-empty") : x.addClass("top-bar-empty") : window.innerWidth <= dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !r.hasClass("responsive-off") ? t(".left-widgets", x).find(".in-top-bar").length > 0 ? x.removeClass("top-bar-empty") : x.addClass("top-bar-empty") : !t(".mini-widgets", x).find(".show-on-desktop").length > 0 ? x.addClass("top-bar-empty") : x.removeClass("top-bar-empty");
        var ht = t(".floating-navigation-below-slider").exists();
        if (t(".sticky-mobile-header").exists() && !r.hasClass("responsive-off")) {
            var ut = t(".masthead:not(.side-header):not(#phantom), body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"),
                pt = ut.find(".mobile-header-bar");
            $stickyMobileLogo = ut.find(".mobile-branding"), mobileLogoURL = t(".mobile-branding a").attr("href"), t(".sticky-mobile-logo-first-switch").exists() || dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html && (null == mobileLogoURL ? t(dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html).addClass("sticky-mobile-logo-first-switch").prependTo($stickyMobileLogo) : t('<a class="sticky-mobile-logo-first-switch" href="' + mobileLogoURL + '">' + dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html + " </a>").prependTo($stickyMobileLogo)), t(".sticky-mobile-logo-second-switch").exists() || dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html && (null == mobileLogoURL ? t(dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html).addClass("sticky-mobile-logo-second-switch").prependTo($stickyMobileLogo) : t('<a class="sticky-mobile-logo-second-switch" href="' + mobileLogoURL + '">' + dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html + " </a>").prependTo($stickyMobileLogo));
            var ft = 0,
                mt = 0,
                gt = z.height(),
                vt = 0,
                wt = 0,
                yt = !1;
            if (!E) {
                t("<div class='mobile-header-space'></div>").insertBefore(ut);
                var bt = t(".mobile-header-space")
            }
            t(".no-cssgridlegacy.no-cssgrid").length > 0 && ht && (E ? (ut.css({
                top: gt
            }), bt.css({
                top: gt
            })) : (bt.insertAfter(z), ut.insertAfter(z))), dtGlobals.resetMobileSizes = function(e) {
                if (window.innerWidth > dtLocal.themeSettings.mobileHeader.firstSwitchPoint) return t(".is-safari").length > 0 && ut.css({
                    width: "",
                    "max-width": ""
                }), ut.removeClass("sticky-mobile-off sticky-mobile-on"), yt = !1, !1;
                mt = t("#wpadminbar").exists() && !Modernizr.mq("only screen and (max-width:600px)") ? t("#wpadminbar").height() : 0, window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !r.hasClass("responsive-off") ? t(".left-widgets", x).find(".in-top-bar-left").length > 0 || t(".top-bar .right-widgets").find(".in-top-bar-right").length > 0 ? x.removeClass("top-bar-empty") : x.addClass("top-bar-empty") : t(".left-widgets", x).find(".in-top-bar").length > 0 ? x.removeClass("top-bar-empty") : x.addClass("top-bar-empty"), ft = !x.exists() || x.is(":hidden") || x.hasClass("top-bar-empty") || x.hasClass("hide-top-bar") ? 0 : x.innerHeight(), window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint ? (vt = dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight + ft, dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight) : (vt = dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight + ft, dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight), ht ? ht && !E ? wt = e : ht && E ? wt = e - vt + ft : pt.offset().top : wt = ft, ut.hasClass("sticky-mobile-on") && ut.css({
                    top: mt - ft
                }), E || (bt.css({
                    height: vt
                }), bt.css({
                    top: e
                })), t(".is-safari").length > 0 && ut.css({
                    width: document.documentElement.clientWidth,
                    "max-width": document.documentElement.clientWidth
                })
            }, dtGlobals.resetMobileSizes(z.height()), o.on("resize debouncedresize", (function() {
                dtGlobals.resetMobileSizes(z.height())
            })), o.on("scroll", (function() {
                if (window.innerWidth > dtLocal.themeSettings.mobileHeader.firstSwitchPoint) return !1;
                var e = dtGlobals.winScrollTop;
                e > wt && !yt && t(document).height() > t(window).height() ? (ut.removeClass("sticky-mobile-off").addClass("sticky-mobile-on"), A && ct && ut.addClass("fixed-mobile-header"), ut.css({
                    top: mt - ft
                }), yt = !0) : e <= wt && yt && (ut.removeClass("sticky-mobile-on").addClass("sticky-mobile-off"), A && ct && ut.removeClass("fixed-mobile-header"), ut.css({
                    top: 0
                }), t(".no-cssgridlegacy.no-cssgrid").length > 0 && ht && ut.css({
                    top: gt
                }), yt = !1)
            }))
        }
        dtGlobals.isMobile && window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !dtGlobals.isiPad && !r.hasClass("responsive-off") && (dtLocal.themeSettings.floatingHeader.showMenu && t(".phantom-sticky").exists() && E && I.addClass("fixed-masthead"), dtLocal.themeSettings.floatingHeader.showMenu = !1);
        E = r.hasClass("transparent");
        var Ct = t(".phantom-sticky").exists();
        t(".side-header").exists();
        if (dtLocal.themeSettings.floatingHeader.showMenu && Ct) {
            var _t = t(".branding a", I).attr("href"),
                xt = (T = I).find(".header-bar");
            (Dt = T.find(".branding")).find("img");
            Dt.find("a.same-logo").length > 0 || t(".sticky-logo").exists() || dtLocal.themeSettings.floatingHeader.logo.html && dtLocal.themeSettings.floatingHeader.logo.showLogo && (null == _t ? t(dtLocal.themeSettings.floatingHeader.logo.html).addClass("sticky-logo").prependTo(Dt) : t('<a class="sticky-logo" href="' + _t + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>").prependTo(Dt));
            X = 0;
            var It = 0,
                St = 0,
                Tt = 0,
                kt = 0,
                zt = !1,
                Lt = "";
            if (!E) {
                t("<div class='header-space'></div>").insertAfter(T);
                var Et = t(".header-space")
            }
            T.addClass("sticky-off fixed-masthead");
            var At = !1;

            function Pt() {
                if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off")) return !1;
                var t = dtGlobals.winScrollTop;
                if (t > kt + 1 && !zt && !dtGlobals.isHovering) {
                    if (T.removeClass("sticky-off").addClass("sticky-on"), E || Et.removeClass("sticky-space-off").addClass("sticky-space-on"), r.hasClass("floating-top-bar") ? T.css({
                            top: It
                        }) : T.css({
                            top: It - X
                        }), zt = !0, ht && E && (T.css({
                            transform: "translateY(0)"
                        }), navigator.userAgent.match(/Trident.*rv\:11\./))) {
                        var e = T.attr("style");
                        T.attr("style", e + "; top:" + X + "px !important;")
                    }
                } else if (t <= kt + 1 && zt && (T.removeClass("sticky-on").addClass("sticky-off"), E || Et.removeClass("sticky-space-on").addClass("sticky-space-off"), T.css({
                        top: 0
                    }), zt = !1, ht && E && (T.css({
                        transform: "translateY(-100%)"
                    }), navigator.userAgent.match(/Trident.*rv\:11\./)))) {
                    e = T.attr("style");
                    T.not(".sticky-on").attr("style", e + "; top:" + z.height() + "px !important;")
                }
                t > kt + 1 && t <= kt + 1 + Tt - dtLocal.themeSettings.floatingHeader.height ? (Lt = "changing", xt.css({
                    transition: "none",
                    height: kt + Tt - t
                })) : t > kt + 1 + dtLocal.themeSettings.floatingHeader.height && "end" !== Lt ? (Lt = "end", xt.css({
                    height: dtLocal.themeSettings.floatingHeader.height,
                    transition: "all 0.3s ease"
                })) : t <= kt + 1 && "start" !== Lt && (Lt = "start", xt.css({
                    height: Tt,
                    transition: "all 0.1s ease"
                }))
            }
            dtGlobals.resetSizes = function(e) {
                if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off")) return At || (At = !0, T.removeClass("sticky-off sticky-on"), E || Et.removeClass("sticky-space-off sticky-space-on"), T.css({
                    top: "",
                    transform: ""
                }), zt = !1, Lt = "", t(".is-safari").length > 0 && T.css({
                    width: "",
                    "max-width": ""
                })), !1;
                At && (At = !1), zt || "" !== Lt || (T.addClass("sticky-off"), E || Et.addClass("sticky-space-off")), It = t("#wpadminbar").exists() ? t("#wpadminbar").height() : 0, X = !x.exists() || x.is(":hidden") || x.hasClass("top-bar-empty") || x.hasClass("hide-top-bar") ? 0 : x.innerHeight(), St = dtLocal.themeSettings.desktopHeader.height + X, Tt = dtLocal.themeSettings.desktopHeader.height, ht ? ht && !E ? kt = r.hasClass("floating-top-bar") ? e - X : e : ht && E ? kt = r.hasClass("floating-top-bar") ? e - Tt - X : e - Tt : xt.offset().top : kt = r.hasClass("floating-top-bar") ? 0 : X, E || Et.css({
                    height: St
                }), t(".is-safari").length > 0 && (l.hasClass("boxed") ? T.css({
                    width: l.width(),
                    "max-width": l.width()
                }) : T.css({
                    width: document.documentElement.clientWidth,
                    "max-width": document.documentElement.clientWidth
                }))
            }, dtGlobals.resetSizes(z.height()), o.on(" debouncedresize", (function() {
                dtGlobals.resetSizes(z.height())
            })), Pt(), o.on("scroll", (function() {
                Pt()
            }))
        }
        if (k.exists()) {
            var Mt = 0,
                Ot = (It = 0, X = 0, !1);
            k.addClass("sticky-top-line-off"), t(".top-line-space").exists() || E || t("<div class='top-line-space'></div>").insertBefore(k);
            var Dt;
            _t = t(".branding a", k).attr("href"), (Dt = k.find(".branding")).find("img");
            Dt.find("a.same-logo").length > 0 || t(".sticky-logo").exists() || dtLocal.themeSettings.topLine.floatingTopLine.logo.html && dtLocal.themeSettings.topLine.floatingTopLine.logo.showLogo && (null == _t ? t(dtLocal.themeSettings.topLine.floatingTopLine.logo.html).addClass("sticky-logo").prependTo(Dt) : t('<a class="sticky-logo" href="' + _t + '">' + dtLocal.themeSettings.topLine.floatingTopLine.logo.html + " </a>").prependTo(Dt));
            At = !1;
            dtGlobals.resetTopLineSizes = function(e) {
                if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off")) return At || (At = !0, k.removeClass("sticky-top-line-on"), k.css({
                    top: ""
                }), Ot = !1), !1;
                At && (At = !1), It = t("#wpadminbar").exists() ? t("#wpadminbar").height() : 0, X = !x.exists() || x.is(":hidden") || x.hasClass("top-bar-empty") || x.hasClass("hide-top-bar") ? 0 : x.innerHeight(), Mt = k.find(".header-bar").height() + X, t(".top-line-space").css({
                    height: Mt
                }), t(".is-safari").length > 0 && (l.hasClass("boxed") ? k.css({
                    width: l.width(),
                    "max-width": l.width()
                }) : k.css({
                    width: document.documentElement.clientWidth,
                    "max-width": document.documentElement.clientWidth
                }))
            }, dtGlobals.resetTopLineSizes(z.height()), o.on("resize debouncedresize", (function() {
                dtGlobals.resetTopLineSizes(z.height())
            })), o.on("scroll", (function() {
                if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off")) return !1;
                var t = dtGlobals.winScrollTop > k.height();
                t && !Ot ? (k.removeClass("sticky-top-line-off").addClass("sticky-top-line-on"), k.hasClass("mixed-floating-top-bar") ? k.css({
                    top: It
                }) : k.css({
                    top: It - X
                }), Ot = !0) : !t && Ot && (k.removeClass("sticky-top-line-on").addClass("sticky-top-line-off"), k.css({
                    top: It
                }), Ot = !1)
            }))
        }
        if (dtLocal.themeSettings.floatingHeader.showMenu && dtLocal.themeSettings.floatingHeader.showMenu && !Ct) {
            var Ht = t(".phantom-fade").exists(),
                Ft = t(".phantom-slide").exists(),
                Wt = t(".split-header").exists();
            if (Ht || Ft) {
                var Bt = t(".masthead:not(#phantom) .main-nav").clone(!0).removeAttr("id"),
                    Rt = (_t = t(".branding a", I).attr("href"), r.hasClass("floating-top-bar") ? t(".masthead:not(#phantom) .top-bar").clone(!0) : ""),
                    jt = !1;
                if (Wt) {
                    var $t = I.attr("class"),
                        Gt = t(".side-header-h-stroke, .split-header"),
                        Yt = (Me = t('<div id="phantom" class="' + $t + '"><div class="ph-wrap"></div></div>').appendTo("body")).find(".ph-wrap"),
                        Nt = Me.find(".widget-box"),
                        qt = Bt.find(".mini-widgets"),
                        Ut = Gt.find(".branding");
                    t(".phantom-custom-logo-on").length > 0 && dtLocal.themeSettings.floatingHeader.logo.html && dtLocal.themeSettings.floatingHeader.logo.showLogo && (null == _t ? t(dtLocal.themeSettings.floatingHeader.logo.html).prependTo(Ut) : t('<a class="phantom-top-line-logo" href="' + _t + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>").prependTo(Ut)), (Bt = t(".split-header .header-bar").clone(!0)).appendTo(Yt).find(".main-nav").removeAttr("id"), r.hasClass("floating-top-bar") && Rt.insertBefore(Yt)
                } else {
                    $t = I.attr("class"), Yt = (Me = t('<div id="phantom" class="' + $t + '"><div class="ph-wrap"><div class="logo-box"></div><div class="menu-box"></div><div class="widget-box"></div></div></div>').appendTo("body")).find(".menu-box"), Nt = Me.find(".widget-box");
                    if (t(".classic-header").length > 0) qt = t(".header-bar .navigation .mini-widgets").clone(!0);
                    else if (Wt);
                    else qt = t(".header-bar .mini-widgets").clone(!0);
                    Bt.appendTo(Yt), qt.appendTo(Nt), r.hasClass("floating-top-bar") && Rt.prependTo(Me), dtLocal.themeSettings.floatingHeader.logo.html && dtLocal.themeSettings.floatingHeader.logo.showLogo && (Me.find(".ph-wrap").addClass("with-logo"), null == _t ? Me.find(".logo-box").html('<a href="' + dtLocal.themeSettings.floatingHeader.logo.url + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>") : Me.find(".logo-box").html('<a href="' + _t + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>"))
                }
                var Vt, Xt = t("#phantom");
                l.hasClass("boxed") && Me.addClass("boxed").find(".ph-wrap").addClass("boxed"), Xt.removeClass("show-phantom").addClass("hide-phantom").css("visibility", "hidden"), dtGlobals.addOnloadEvent((function() {
                    clearTimeout(Vt), Vt = setTimeout((function() {
                        Xt.css("visibility", "")
                    }), 150)
                })), Yt.layzrInitialisation();
                var Zt = !1,
                    Qt = dtGlobals.winScrollTop;
                gt = z.height(), I.height();
                if (ht && E);
                else if (ht);
                else dtLocal.themeSettings.floatingHeader.showAfter;
                o.on("scroll", (function() {
                    if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off")) return !1;
                    var t = dtGlobals.winScrollTop,
                        e = z.height(),
                        i = I.height();
                    if (ht && E) var s = t > e && !1 === jt,
                        n = t <= e && !0 === jt;
                    else if (ht) s = t > e + i && !1 === jt, n = t <= e + i && !0 === jt;
                    else s = t > dtLocal.themeSettings.floatingHeader.showAfter && !1 === jt, n = t <= dtLocal.themeSettings.floatingHeader.showAfter && !0 === jt;
                    s ? a.hasClass("menu-open") || dtGlobals.isHovering || Zt || (Zt = !0, Xt.removeClass("hide-phantom").addClass("show-phantom"), jt = !0) : n && Zt && (a.hasClass("menu-open") || (Zt = !1, Xt.removeClass("show-phantom").addClass("hide-phantom"), jt = !1))
                }))
            }
        }
        var Kt = t(".side-header:not(.sub-sideways ) .main-nav li.has-children > a:not(.not-clickable-item), .side-header:not(.sub-sideways ) .level-arrows-on > li.has-children > a, .mobile-main-nav li.has-children > a");
        t('<i class="next-level-button"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path d="M13.5,7H9V2.5c0-0.6-0.4-1-1-1s-1,0.4-1,1V7H2.5c-0.6,0-1,0.4-1,1s0.4,1,1,1H7v4.5c0,0.6,0.4,1,1,1s1-0.4,1-1V9h4.5c0.6,0,1-0.4,1-1S14.1,7,13.5,7z"/></svg></i>').insertAfter(Kt), t(".sub-downwards .main-nav li.has-children, .mobile-main-nav li.has-children").each((function() {
            var e = t(this),
                i = e.find(" > .sub-nav, .sub-menu");
            e.find(".sub-nav li, .sub-menu li").hasClass("act") && e.addClass("active"), e.find(".sub-nav li.act, .sub-menu li.act").hasClass("act") && (e.addClass("open-sub"), i.stop(!0, !0).slideDown(100), i.layzrInitialisation()), e.find(" > .next-level-button").on("click", (function(e) {
                var s = t(this).parent();
                s.hasClass("active") ? (i.stop(!0, !0).slideUp(500, (function() {
                    t(" .main-nav").layzrInitialisation()
                })), s.removeClass("active"), s.removeClass("open-sub"), s.find("a").removeClass("act")) : (s.siblings().find(" .sub-nav, .dt-mega-menu-wrap, .sub-menu").stop(!0, !0).slideUp(400), i.stop(!0, !0).slideDown(500), s.siblings().removeClass("active"), s.addClass("active"), s.siblings().removeClass("open-sub"), s.addClass("open-sub"), s.siblings().find("> a").removeClass("act"), s.find("a").addClass("act"), t(" .main-nav").layzrInitialisation())
            }))
        })), !t(".dt-parent-menu-clickable").length > 0 && t(".sub-downwards .main-nav li > a, .mobile-main-nav li.has-children > a").each((function() {
            var e = t(this);
            e.parent("li").find(".sub-nav li, .sub-menu li").hasClass("act") && e.addClass("act"), e.parent("li").find(".sub-nav li.act, .sub-menu li.act").hasClass("act") && (e.parent("li").addClass("open-sub"), e.siblings(".sub-nav, .sub-menu").stop(!0, !0).slideDown(100, (function() {
                e.siblings(".sub-nav, .sub-menu").layzrInitialisation()
            }))), e.on("click", (function(i) {
                $menuItem = e.parent(), $menuItem.hasClass("has-children menu-item-language") && i.preventDefault(), e.hasClass("act") ? (e.siblings(".sub-nav, .sub-menu").stop(!0, !0).slideUp(500), e.removeClass("act"), e.parent("li").removeClass("open-sub")) : (e.parent().siblings().find(".sub-nav, .dt-mega-menu-wrap, .sub-menu").stop(!0, !0).slideUp(400), e.siblings(".sub-nav, .sub-menu").stop(!0, !0).slideDown(500), e.parent().siblings().find("> a").removeClass("act"), e.addClass("act"), e.parent("li").siblings().removeClass("open-sub active"), e.parent("li").addClass("open-sub active")), "function" == typeof t.fn.mCustomScrollbar && t(".header-bar").mCustomScrollbar("update")
            }))
        })), t(".custom-nav > li > a").click((function(e) {
            var i = t(this).parent(),
                s = t(this);
            i.hasClass("has-children") && e.preventDefault(), s.hasClass("active") ? (s.next().stop(!0).slideUp(500), s.removeClass("active")) : (t(".custom-nav > li > ul").stop(!0).slideUp(400), s.next().stop(!0).slideDown(500), t(".custom-nav > li > a").removeClass("active"), s.addClass("active")), i.siblings().removeClass("act"), i.addClass("act")
        })), t(".custom-nav > li > ul").each((function() {
            clearTimeout(undefined), $this = t(this), $thisChildren = $this.find("li"), $thisChildren.hasClass("act") && ($this.prev().addClass("active"), $this.parent().siblings().removeClass("act"), $this.parent().addClass("act"), $this.slideDown(500))
        })), /*!-categories filter*/ window.the7ApplyGeneralFilterHandlers = function(e) {
            e.exists() && e.find("> a").on("click", (function(e) {
                var i = t(this);
                if (void 0 === arguments.callee.dtPreventD) {
                    var s = i.parents(".filter").first();
                    arguments.callee.dtPreventD = !0, s.hasClass("without-isotope") && (arguments.callee.dtPreventD = s.hasClass("with-ajax"))
                }
                e.preventDefault(), i.trigger("mouseleave"), i.hasClass("act") && !i.hasClass("show-all") ? (e.stopImmediatePropagation(), i.removeClass("act"), i.siblings("a.show-all").trigger("click")) : (i.siblings().removeClass("act"), i.addClass("act"), arguments.callee.dtPreventD || (window.location.href = i.attr("href")))
            }))
        }, window.the7ApplyGeneralOrderingSwitchHandlers = function(t) {
            if (t.exists()) {
                t.prev(".act").length > 0 ? t.addClass("left-act") : t.next(".act").length > 0 ? t.addClass("right-act") : (t.removeClass("right-act"), t.removeClass("left-act"));
                var e = t.parents(".filter").first();
                t.on("click", (function() {
                    e.hasClass("without-isotope") ? t.hasClass("right-act") ? t.prev("a")[0].click() : t.hasClass("left-act") && t.next("a")[0].click() : t.hasClass("right-act") ? t.prev("a").trigger("click") : t.hasClass("left-act") && t.next("a").trigger("click")
                }))
            }
        }, window.the7ApplyGeneralOrderingSwitchEffects = function(e) {
            if (e.exists()) {
                var i = t(".filter-switch", e);
                i.append("<span class='filter-switch-toggle'></span>"), i.each((function() {
                    the7ApplyGeneralOrderingSwitchHandlers(t(this))
                })), t(".filter-switch .filter-switch-toggle", e).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", (function(e) {
                    t(this).parent().removeClass("pressed")
                })), t(".filter-extras a", e).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", (function(e) {
                    t(this).removeClass("pressed")
                })), Modernizr.touch ? (i.on("touchstart", (function(e) {
                    t(".filter-switch").removeClass("pressed"), t(this).addClass("pressed")
                })), t(".filter-extras a", e).on("touchstart", (function(e) {
                    t(".filter-extras").removeClass("pressed"), t(this).parent(".filter-extras").addClass("pressed")
                }))) : (i.on("mousedown", (function(e) {
                    t(".filter-switch").removeClass("pressed"), t(this).addClass("pressed"), setTimeout((function() {
                        t(this).removeClass("pressed")
                    }), 600)
                })), t(".filter-extras a", e).each((function() {
                    t(this).on("mousedown", (function(e) {
                        t(".filter-extras").removeClass("pressed"), t(this).addClass("pressed"), setTimeout((function() {
                            t(this).removeClass("pressed")
                        }), 600)
                    }))
                }))), t(".filter-extras a", e).on("click", (function(e) {
                    var s = t(this);
                    if (void 0 === arguments.callee.dtPreventD) {
                        var n = s.parents(".filter").first();
                        arguments.callee.dtPreventD = !0, n.hasClass("without-isotope") && (arguments.callee.dtPreventD = n.hasClass("with-ajax"))
                    }
                    arguments.callee.dtPreventD && e.preventDefault(), s.siblings().removeClass("act"), s.addClass("act"), i.each((function() {
                        var e = t(this);
                        e.prev(s).hasClass("act") ? (e.addClass("left-act"), e.removeClass("right-act")) : e.next(s).hasClass("act") ? (e.addClass("right-act"), e.removeClass("left-act")) : (e.removeClass("right-act"), e.removeClass("left-act"))
                    }))
                }))
            }
        }, t(".filter-categories").each((function() {
            the7ApplyGeneralFilterHandlers(t(this))
        })), t(".filter").each((function() {
            the7ApplyGeneralOrderingSwitchEffects(t(this))
        })), t(".mode-list .filter-categories > a:not(.show-all), .dt-css-grid-wrap .filter-categories > a:not(.show-all)").each((function() {
            $this = t(this), $dataFiltr = $this.attr("data-filter"), $newDataFilter = $dataFiltr.substring(1, $dataFiltr.length), $this.attr("data-filter", $newDataFilter), $this.parents().removeClass("iso-filter")
        })), window.the7ShortcodesFilterConfig = function(t) {
            var e = {},
                i = t;
            return t.hasClass("dt-css-grid") && (i = t.parent()), e.filterControls = i.find(".filter-categories"), e.pageControls = i.find(".paginator"), e.sortControls = i.find(".filter-by"), e.orderControls = i.find(".filter-sorting"), e.defaultSort = i.find(".filter-by .act").attr("data-by"), e.defaultOrder = i.find(".filter-sorting .act").attr("data-sort"), e.paginationMode = i.attr("data-pagination-mode"), e.pageLimit = i.attr("data-post-limit"), e.useFilters = !0, e.useSorting = !0, e.controlsSelecter = "a", e.controlsSelecterChecked = "a.act", e.defaultFilter = "*", e.selectAll = "*", e.loadMoreButtonLabel = dtLocal.moreButtonText.loadMore, e.customSorters = {
                name: function(t, e) {
                    return window.the7LocaleSensitiveStringsCompare(t.name.toLowerCase(), e.name.toLowerCase())
                }
            }, e
        }, t.fn.shortcodesFilter = function(e) {
            var i = t(this);

            function s() {
                if (i.hasClass("dt-css-grid") ? $element = i.parent() : $element = i, $element.length && $element.hasClass("lazy-loading-mode")) {
                    var t = $element.find(".button-load-more");
                    if (!t.parent().hasClass("hidden")) {
                        var e = t.offset();
                        e && o.scrollTop() + o.height() > e.top - 2 * o.height() && t.trigger("click")
                    }
                }
            }
            i.Filterade(e), i.on("updateReady", (function() {
                je(), i.parent(".content-rollover-layout-list:not(.disable-layout-hover)").find(".post-entry-wrapper").clickOverlayGradient()
            })), o.on("scroll", (function() {
                s()
            })), s()
        }, t(".blog-shortcode.mode-list.jquery-filter, .jquery-filter .dt-css-grid:not(.custom-pagination-handler)").each((function() {
            var e = t(this);
            e.shortcodesFilter(the7ShortcodesFilterConfig(e))
        })), window.the7ApplyMasonryWidgetCSSGridFiltering = function(t) {
            var e;
            t && t.length && ((e = the7ShortcodesFilterConfig(t)).pagerClass = "page-numbers filter-item", e.previousButtonLabel = "←", e.nextButtonLabel = "→", t.shortcodesFilter(e))
        }, t.HoverDir = function(e, i) {
            this.$el = t(i), this._init(e)
        }, t.HoverDir.defaults = {
            speed: 300,
            easing: "ease",
            hoverDelay: 0,
            inverse: !1
        }, t.HoverDir.prototype = {
            _init: function(e) {
                this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
            },
            _loadEvents: function() {
                var e = this;
                this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", (function(i) {
                    var s = t(this),
                        n = s.find(".rollover-content, .gallery-rollover, .post-entry-content"),
                        o = e._getDir(s, {
                            x: i.pageX,
                            y: i.pageY
                        }),
                        a = e._getStyle(o);
                    "mouseenter" === i.type ? (n.hide().css(a.from), clearTimeout(e.tmhover), e.tmhover = setTimeout((function() {
                        n.show(0, (function() {
                            var i = t(this);
                            e.support && i.css("transition", e.transitionProp), e._applyAnimation(i, a.to, e.options.speed)
                        }))
                    }), e.options.hoverDelay)) : (e.support && n.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(n, a.from, e.options.speed))
                }))
            },
            _getDir: function(t, e) {
                var i = t.width(),
                    s = t.height(),
                    n = (e.x - t.offset().left - i / 2) * (i > s ? s / i : 1),
                    o = (e.y - t.offset().top - s / 2) * (s > i ? i / s : 1);
                return Math.round((Math.atan2(o, n) * (180 / Math.PI) + 180) / 90 + 3) % 4
            },
            _getStyle: function(t) {
                var e, i, s = {
                        left: "0px",
                        top: "-100%"
                    },
                    n = {
                        left: "0px",
                        top: "100%"
                    },
                    o = {
                        left: "-100%",
                        top: "0px"
                    },
                    a = {
                        left: "100%",
                        top: "0px"
                    },
                    r = {
                        top: "0px"
                    },
                    l = {
                        left: "0px"
                    };
                switch (t) {
                    case 0:
                        e = this.options.inverse ? n : s, i = r;
                        break;
                    case 1:
                        e = this.options.inverse ? o : a, i = l;
                        break;
                    case 2:
                        e = this.options.inverse ? s : n, i = r;
                        break;
                    case 3:
                        e = this.options.inverse ? a : o, i = l
                }
                return {
                    from: e,
                    to: i
                }
            },
            _applyAnimation: function(e, i, s) {
                t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate, e.stop().applyStyle(i, t.extend(!0, [], {
                    duration: s + "ms"
                }))
            }
        };
        var Jt = function(t) {
            window.console && window.console.error(t)
        };
        t.fn.hoverdir = function(e) {
            var i = t.data(this, "hoverdir");
            if ("string" == typeof e) {
                var s = Array.prototype.slice.call(arguments, 1);
                this.each((function() {
                    i ? the7Utils.isFunction(i[e]) && "_" !== e.charAt(0) ? i[e].apply(i, s) : Jt("no such method '" + e + "' for hoverdir instance") : Jt("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
                }))
            } else this.each((function() {
                i ? i._init() : i = t.data(this, "hoverdir", new t.HoverDir(e, this))
            }));
            return i
        }, t.fn.addRollover = function() {
            return this.each((function() {
                var e = t(this);
                e.hasClass("this-ready") || (e.append("<i></i>"), e.find(".rollover-thumbnails").length && e.addClass("rollover-thumbnails-on"), e.parent().find(".links-container").length && e.addClass("rollover-buttons-on"), e.addClass("this-ready"))
            }))
        }, /*!-Scale in hover*/ t.fn.scaleInHover = function() {
            return this.each((function() {
                var e = t(this);
                if (!e.hasClass("scale-ready")) {
                    var i = e.find("img.preload-me"),
                        s = parseInt(i.attr("width")) / parseInt(i.attr("height"));
                    s < 2 && s >= 1.5 ? e.addClass("ratio_3-2") : s < 1.5 && s >= 1 ? e.addClass("ratio_4-3") : s < 1 && s >= .75 ? e.addClass("ratio_3-4") : s < .75 && s >= .6 ? e.addClass("ratio_2-3") : e.removeClass("ratio_2-3").removeClass("ratio_3-2").removeClass("ratio-2").removeClass("ratio_4-3").removeClass("ratio_3-4"), s >= 2 && e.addClass("ratio-2"), .5 == s && e.addClass("ratio_0-5"), 1 == s && e.removeClass("ratio_2-3").removeClass("ratio-2").removeClass("ratio_3-2").removeClass("ratio_4-3").removeClass("ratio_3-4"), e.addClass("scale-ready")
                }
            }))
        }, t.fn.touchNewHover = function() {
            return this.each((function() {
                var e = t(this);
                e.hasClass("this-ready") || (t(".rollover-content", this).length > 0 && (r.on("touchend", (function(e) {
                    t(".mobile-true .rollover-content, .mobile-true .rollover-project, .mobile-true .woocom-project").removeClass("is-clicked")
                })), e.on("touchstart", (function(t) {
                    origY = t.originalEvent.touches[0].pageY, origX = t.originalEvent.touches[0].pageX
                })), e.on("touchend", (function(i) {
                    var s = i.originalEvent.changedTouches[0].pageX,
                        n = i.originalEvent.changedTouches[0].pageY;
                    if (origY == n || origX == s) {
                        if (!e.hasClass("is-clicked")) return t(".links-container > a", e).on("touchend", (function(t) {
                            t.stopPropagation(), e.addClass("is-clicked")
                        })), i.preventDefault(), t(".mobile-true .rollover-content, .mobile-true .rollover-project,.mobile-true .woocom-project").removeClass("is-clicked"), e.addClass("is-clicked"), e.find(".rollover-content").addClass("is-clicked"), !1;
                        if (e.find(".dt-gallery-container").length > 0 && e.find(".rollover-content").on("click.dtAlbums", (function(i) {
                                e.find(".rollover-content").off("click.dtAlbums"), t(this).find("a.dt-gallery-pspw, .dt-trigger-first-pspw, .dt-pswp-item").first().trigger("click")
                            })), t(this).find(".rollover-click-target.go-to").length > 0) window.location.href = t(this).find(".rollover-click-target.go-to").attr("href");
                        else if (t(this).hasClass("woocom-project")) {
                            if (t(i.target).is(".add_to_cart_button")) return !0;
                            window.location.href = t(this).find(" > a").attr("href")
                        }
                    }
                }))), e.addClass("this-ready"))
            }))
        }, /*!Trigger post click for blog Overlay (background)/Overlay (gradient) layouts*/ t.fn.triggerPostClick = function() {
            return this.each((function() {
                var e = t(this);
                if (!e.hasClass("blog-post-ready")) {
                    var i = e.siblings().find(".post-thumbnail-rollover").first(),
                        s = e.find(".entry-meta a, .fancy-date a, .fancy-categories a");
                    if (i.length > 0) {
                        i.on("click", (function(t) {
                            t.preventDefault(), t.stopPropagation(), i.parents(".ts-wrap").hasClass("ts-interceptClicks")
                        }));
                        var n = !1;
                        e.on("click", (function(t) {
                            if (!e.parents(".ts-wrap").hasClass("ts-interceptClicks")) return n || (n = !0, window.location.href = i.attr("href"), n = !1), !1
                        })), e.find(s).click((function(t) {
                            t.stopPropagation(), window.location.href = s.attr("href")
                        }))
                    }
                    e.addClass("blog-post-ready")
                }
            }))
        }, t.fn.touchTriggerPostClick = function() {
            return this.each((function() {
                var e = t(this);
                if (!e.hasClass("touch-post-ready")) {
                    var i = e.find(".post-thumbnail-rollover").first();
                    e.find(".entry-meta a, .fancy-date a, .fancy-categories a"), e.find(".entry-excerpt").height(), e.find(".post-details").height();
                    r.on("touchend", (function(e) {
                        t(".mobile-true .post").removeClass("is-clicked")
                    })), e.on("touchstart", (function(t) {
                        origY = t.originalEvent.touches[0].pageY, origX = t.originalEvent.touches[0].pageX
                    })), e.on("touchend", (function(s) {
                        var n = s.originalEvent.changedTouches[0].pageX,
                            o = s.originalEvent.changedTouches[0].pageY;
                        if (origY == o || origX == n)
                            if (e.parents().hasClass("disable-layout-hover")) "a" === s.target.tagName.toLowerCase() ? t(s.target).trigger("click") : window.location.href = i.attr("href");
                            else {
                                if (!e.hasClass("is-clicked")) return s.preventDefault(), "a" === s.target.tagName.toLowerCase() && t(s.target).trigger("click"), t(".mobile-ture .post").removeClass("is-clicked"), e.addClass("is-clicked"), e.parent().siblings().find(".post").removeClass("is-clicked"), !1;
                                window.location.href = i.attr("href")
                            }
                    })), e.addClass("touch-post-ready")
                }
            }))
        }, t.fn.triggerPostClickOnBefore = function() {
            return this.each((function() {
                var e = t(this),
                    i = e.parents(".post");
                if (!e.hasClass("post-before-ready")) {
                    var s = i.find(".post-thumbnail-rollover").first(),
                        n = i.find(".entry-meta a, .fancy-date a, .fancy-categories a");
                    if (s.length > 0) {
                        s.on("click", (function(t) {
                            s.parents(".ts-wrap").hasClass("ts-interceptClicks")
                        }));
                        var o = !1;
                        e.on("mouseenter mousemove", (function(t) {
                            var s = e.offset().top,
                                n = t.pageY;
                            s - 10 <= n && s + 125 >= n ? i.hasClass("on-hover") || i.addClass("on-hover") : i.removeClass("on-hover")
                        })), e.on("mouseleave", (function(t) {
                            e.offset().top, t.pageY;
                            i.removeClass("on-hover")
                        })), e.on("click", (function() {
                            if (i.hasClass("on-hover")) return o || (o = !0, window.location.href = s.attr("href"), o = !1), !1
                        })), e.find(n).click((function(t) {
                            i.hasClass("on-hover") && (t.stopPropagation(), window.location.href = n.attr("href"))
                        }))
                    }
                    e.addClass("post-before-ready")
                }
            }))
        }, /*!Trigger click (direct to post)*/ t.fn.forwardToPost = function() {
            return this.each((function() {
                var e = t(this);
                e.hasClass("this-ready") || (e.on("click tap", (function() {
                    var e = t(this),
                        i = e.find("a").first(),
                        s = i.attr("href");
                    if (!e.parents(".ts-wrap").hasClass("ts-interceptClicks")) return "_blank" === i.attr("target") ? (window.open(s, "_blank"), !1) : (window.location.href = s, !1)
                })), e.addClass("this-ready"))
            }))
        }, window.the7AddHovers = function(e) {
            t(".rollover, .rollover-video, .post-rollover, .rollover-project .show-content, .vc-item .vc-inner > a", e).addRollover(), t(".filter-grayscale .slider-masonry", e).on("mouseenter tap", (function(e) {
                "tap" == e.type && e.stopPropagation(), t(this).addClass("dt-hovered")
            })), t(".filter-grayscale .slider-masonry", e).on("mouseleave", (function(e) {
                t(this).removeClass("dt-hovered")
            })), t(".hover-scale .rollover-project, .hover-scale .post", e).scaleInHover()
        }, window.the7AddMobileHovers = function(e) { /*!Description on hover show content on click(albums projects touch device)*/
            t(".rollover-project, .woocom-project", e).touchNewHover(), t(".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post", e).touchTriggerPostClick()
        }, window.the7AddDesktopHovers = function(e) { /*!-Hover Direction aware init*/
            t(".hover-grid.gallery-shortcode figure, .hover-grid .rollover-project, .hover-grid.portfolio-shortcode .post", e).each((function() {
                t(this).hoverdir()
            })), t(".hover-grid-reverse.gallery-shortcode figure, .hover-grid-reverse .rollover-project, .hover-grid-reverse.portfolio-shortcode .post", e).each((function() {
                t(this).hoverdir({
                    inverse: !0
                })
            })), t(".albums .rollover-content a:not(.portfolio-categories a), .media .rollover-content, .dt-gallery-container .rollover-content", e).on("click", (function(e) {
                if (t(e.target).is("a")) return !0;
                t(this).siblings("a.dt-pswp-item").first().click()
            })), t(".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post,  .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post", e).triggerPostClick(), t(".gradient-overlap-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post-entry-content", e).triggerPostClickOnBefore(), t(".the7-elementor-widget .forward-post", e).forwardToPost()
        }, the7AddMobileHovers(t("html.mobile-true")), the7AddDesktopHovers(t("html.mobile-false")), the7AddHovers(document);
        var te = t("#commentform");

        function ee() {
            t(".full-width-wrap").length > 0 && t(".full-width-wrap").each((function() {
                var e, i, s = t(this),
                    n = window.innerWidth,
                    a = o.width(),
                    l = t(".content").width();
                if (t(".boxed").length > 0) e = (parseInt(t("#main").width()) - parseInt(l)) / 2;
                else if (t(".side-header-v-stroke").length && n > dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") || t(".side-header-v-stroke").length && r.hasClass("responsive-off")) {
                    var d = n <= parseInt(l) ? parseInt(l) : a - t(".side-header-v-stroke").width();
                    e = Math.ceil((d - parseInt(l)) / 2)
                } else if (t(".sticky-header .side-header").length && n > dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") || t(".sticky-header .side-header").length && r.hasClass("responsive-off")) {
                    d = a <= parseInt(l) ? parseInt(l) : a;
                    e = Math.ceil((a - parseInt(l)) / 2)
                } else if ((t(".header-side-left").length && n || t(".header-side-right").length && n) > dtLocal.themeSettings.mobileHeader.firstSwitchPoint) {
                    d = n <= parseInt(l) ? parseInt(l) : a - t(".side-header").width();
                    e = Math.ceil((d - parseInt(l)) / 2)
                } else {
                    d = a <= parseInt(l) ? parseInt(l) : a;
                    e = Math.ceil((a - parseInt(l)) / 2)
                }
                t(".sidebar-left").length > 0 || t(".sidebar-right").length > 0 ? (i = t(".content").width(), e = 0) : i = t("#main").innerWidth();
                var c = r.hasClass("rtl") ? "margin-right" : "margin-left";
                s.css({
                    width: i,
                    opacity: 1
                }), s.css(c, -e), s.find(".full-width-wrap").css({
                    width: "",
                    opacity: 1,
                    "padding-left": e
                }), s.find(".full-width-wrap").css(c, ""), s.find(".ts-wrap").each((function() {
                    var e = t(this).data("thePhotoSlider");
                    void 0 !== e && e.update()
                }))
            }))
        }
        te.on("click", "a.clear-form", (function(t) {
            return t.preventDefault(), te.find('input[type="text"], textarea').val(""), !1
        })), te.on("click", " a.dt-btn.dt-btn-m", (function(t) {
            return t.preventDefault(), te.find("#submit").trigger("click"), !1
        })), t(".full-width-wrap").length > 0 && (dtGlobals.isiOS ? o.bind("orientationchange", (function() {
            ee()
        })).trigger("orientationchange") : (o.on("resize", (function() {
            ee()
        })), ee())), o.trigger("dt.removeLoading");
        var ie = t("#main-slideshow");
        !ie.find("> div").length > 0 && ie.addClass("empty-slider"), /*!-Revolution slider*/ ie.is(":parent") || ie.siblings(".masthead").addClass("no-slider"), t(".rev_slider_wrapper").length > 0 && (ie.find("> .rev_slider_wrapper") && ie.addClass("fix rv-slider"), (t(".rev_slider_wrapper").hasClass("fullscreen-container") || t(".rev_slider_wrapper").hasClass("fullwidthbanner-container")) && ie.removeClass("fix")); /*!-Search*/
        var se, ne, oe = t(".masthead, .dt-mobile-header"),
            ae = t(".popup-search", oe);
        if (ae.length > 0 && (r.on("click", (function(e) {
                t(e.target).is(".field", ae) || (t(".searchform .submit", oe).removeClass("act"), ae.removeClass("act"), t(".popup-search-wrap", ae).stop().animate({
                    opacity: 0
                }, 150, (function() {
                    t(this).css("visibility", "hidden")
                })), setTimeout((function() {
                    t(".popup-search-wrap", ae).removeClass("right-overflow bottom-overflow left-overflow").css({
                        right: "",
                        left: "",
                        "max-width": ""
                    })
                }), 400))
            })), t(".searchform .submit", oe).on("click", (function(e) {
                e.preventDefault(), e.stopPropagation();
                var i = t(this);
                i.hasClass("act") ? (i.removeClass("act"), i.parents(".mini-search").removeClass("act"), i.siblings(".popup-search-wrap").stop().animate({
                    opacity: 0
                }, 150, (function() {
                    t(this).css("visibility", "hidden")
                })), setTimeout((function() {
                    i.siblings(".popup-search-wrap").removeClass("right-overflow bottom-overflow left-overflow").css({
                        right: "",
                        left: "",
                        "max-width": ""
                    })
                }), 400)) : (i.addClass("act"), i.parents(".mini-search").addClass("act"), i.parents(".dt-mobile-header").length > 0 && i.siblings(".popup-search-wrap").css({
                    top: i.parents(".mini-search").position().top - i.siblings(".popup-search-wrap").innerHeight()
                }), i.parents(".searchform").offset().left - i.siblings(".popup-search-wrap").innerWidth() < 0 && i.siblings(".popup-search-wrap").addClass("left-overflow"), l.width() - (i.parents(".searchform").offset().left - l.offset().left) - i.siblings(".popup-search-wrap").innerWidth() < 0 && (i.siblings(".popup-search-wrap").addClass("right-overflow"), i.siblings(".popup-search-wrap").removeClass("left-overflow")), l.width() - (i.parents(".searchform").offset().left - l.offset().left) - i.siblings(".popup-search-wrap").innerWidth() < 0 && i.parents(".searchform").offset().left - i.siblings(".popup-search-wrap").innerWidth() < 0 && i.siblings(".popup-search-wrap").css({
                    "max-width": i.parents(".searchform").offset().left
                }), o.height() - (i.siblings(".popup-search-wrap").offset().top - dtGlobals.winScrollTop) - i.siblings(".popup-search-wrap").innerHeight() < 0 && i.siblings(".popup-search-wrap").addClass("bottom-overflow"), i.siblings(".popup-search-wrap").stop().css("visibility", "visible").animate({
                    opacity: 1
                }, 150), i.siblings(".popup-search-wrap").find("input.searchform-s").focus())
            }))), t(".overlay-search").length > 0) {
            var re = t(".overlay-search .searchform").first().clone();
            t("body").append("<div class='overlay-search-microwidget'><i class='overlay-close icomoon-the7-font-the7-cross-01'></i></div>");
            var le = t(".overlay-search-microwidget");
            le.append(re), t(".overlay-search").hasClass("default-icon") && le.addClass("default-icon"), t(".mini-search .submit").on("click", (function(e) {
                e.preventDefault(), le.addClass("open"), t("#page").addClass("overlay-open"), le.find("input.searchform-s").focus()
            })), t(".overlay-close", le).on("click", (function() {
                t("#page").removeClass("overlay-open"), t(this).parent(le).removeClass("open")
            }))
        } /*!-Before After*/ /*!-Isotope fix for tabs*/
        (t(".twentytwenty-container .preload-me").loaded(null, (function() {
            t(".twentytwenty-container").each((function() {
                var e = t(this),
                    i = e.attr("data-orientation").length > 0 ? e.attr("data-orientation") : "horizontal",
                    s = void 0 !== e.attr("data-offset") && e.attr("data-offset").length > 0 ? e.attr("data-offset") : .5,
                    n = !!e.attr("data-navigation");
                e.twentytwenty({
                    default_offset_pct: s,
                    orientation: i,
                    navigation_follow: n
                })
            }))
        }), !0), t(".wpb_tabs .iso-container").length > 0) && t(".wpb_tour_tabs_wrapper").each((function() {
            var e = t(this),
                i = e.parents(".wpb_tabs").find(".iso-container");
            e.tabs({
                activate: function(t, e) {
                    i.isotope("layout")
                }
            }), e.find("li").each((function() {
                t(this).on("click", (function() {
                    clearTimeout(undefined), o.trigger("debouncedresize"), t(this).parents(".wpb_tabs").find(".iso-container").isotope("layout")
                }))
            }))
        }));
        t.fn.calcPics = function() {
            return !(t(".instagram-photos").length < 1) && this.each((function() {
                var e = e || parseInt(t(this).attr("data-image-max-width"));
                parseInt(t(this).find("> a").css("margin-left"));
                t(this).find(" > a").css({
                    "max-width": e,
                    opacity: 1
                });
                var i = t(this),
                    s = i.width(),
                    n = 100 / Math.ceil(s / e);
                i.find("a").css({
                    width: n + "%"
                })
            }))
        }, t(".instagram-photos").calcPics(), t(".st-accordion").each((function() {
            var e = t(this);
            e.find("ul > li > a").on("click", (function(i) {
                i.preventDefault();
                var s = t(this).next();
                t(".st-content", e).not(s).slideUp("fast"), s.slideToggle("fast")
            }))
        })), simple_tooltip(".shortcode-tooltip", "shortcode-tooltip-content"), /*!-search widget*/ t(".widget .searchform .submit, .search-icon, form.searchform:not(.mini-widget-searchform) .submit").on("click", (function(e) {
            return e.preventDefault(), t(this).closest("form").find("input.searchsubmit").click(), !1
        })), t.fn.animateSkills = function() {
            t(".skill-value", this).each((function() {
                var e = t(this),
                    i = e.data("width");
                e.css({
                    width: i + "%"
                })
            }))
        }, dtGlobals.isMobile && t(".skills").animateSkills(), /*!-Show share buttons*/ t(".project-share-overlay.allways-visible-icons .share-button").on("click", (function(t) {
            t.preventDefault()
        })), dtGlobals.addOnloadEvent((function() {
            t(".album-share-overlay, .project-share-overlay:not(.allways-visible-icons)").each((function() {
                var e = t(this);
                e.find(".share-button").on("click", (function(t) {
                    t.preventDefault()
                })), e.on("mouseover tap", (function(e) {
                    "tap" == e.type && e.stopPropagation();
                    var i = t(this);
                    i.addClass("dt-hovered"), clearTimeout(se), clearTimeout(ne), se = setTimeout((function() {
                        i.hasClass("dt-hovered") && (i.find(".soc-ico a").css("display", "inline-flex"), i.find(".soc-ico").stop().css("visibility", "visible").animate({
                            opacity: 1
                        }, 200))
                    }), 100)
                })), e.on("mouseleave ", (function(e) {
                    var i = t(this);
                    i.removeClass("dt-hovered"), clearTimeout(se), clearTimeout(ne), ne = setTimeout((function() {
                        i.hasClass("dt-hovered") || i.find(".soc-ico").stop().animate({
                            opacity: 0
                        }, 150, (function() {
                            i.find(".soc-ico a").css("display", "none"), t(this).css("visibility", "hidden")
                        }))
                    }), 50)
                }))
            }))
        })); /*!-Project floating content*/
        var de = t(".floating-content");
        t(".project-post");

        function ce() {
            t(".preload-me").loaded(null, (function() {
                var e = t(".floating-content"),
                    i = de.siblings(".project-wide-col").height(),
                    s = de.height();
                if (t(".floating-content").length > 0) {
                    var n = e.offset();
                    if (x.length > 0 && t(".phantom-sticky").length > 0) var a = x.height();
                    else a = 0;
                    var r = t(".project-post").offset();
                    o.on("scroll", (function() {
                        window.innerWidth > 1050 ? dtGlobals.winScrollTop + Me.height() > n.top ? dtGlobals.winScrollTop + Me.height() + s + 40 < r.top + i ? e.css("transform", "translateY(" + (dtGlobals.winScrollTop - n.top + Me.height() + 5 - a) + "px)") : e.css("transform", "translateY(" + (i - s - 40 - a) + "px)") : e.css("transform", "translateY(0px)") : e.css({
                            transform: "translateY(0)"
                        })
                    }))
                }
            }), !0)
        }
        ce();
        var he = t(".transparent #fancy-header").exists(),
            ue = t(".transparent .page-title").exists();
        t(".transparent .checkout-page-title").exists();
        t.fancyFeaderCalc = function() {
            t(".branding .preload-me").loaded(null, (function() {
                he && t(".transparent #fancy-header").css({
                    "padding-top": t(".masthead:not(.side-header)").height()
                }), ue && (t(".transparent .page-title").css({
                    "padding-top": t(".masthead:not(.side-header)").height()
                }), t(".transparent .page-title").css("visibility", "visible"))
            }), !0)
        }; /*!-Paginator*/
        var pe = t('.paginator[role="navigation"]'),
            fe = pe.find("a.dots");
        fe.on("click", (function() {
            pe.find("div:hidden").show().find("a").unwrap(), fe.remove()
        })), t(".share-buttons a.pinit-marklet").click((function(e) {
            e.preventDefault(), t("#pinmarklet").remove();
            var i = document.createElement("script");
            i.setAttribute("type", "text/javascript"), i.setAttribute("charset", "UTF-8"), i.setAttribute("id", "pinmarklet"), i.setAttribute("async", "async"), i.setAttribute("defer", "defer"), i.setAttribute("src", "//assets.pinterest.com/js/pinmarklet.js?r=" + 99999999 * Math.random()), document.body.appendChild(i)
        })), /*!-Scroll to Top*/ o.on("debouncedresize", (function() {
            window.innerWidth > dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") || r.hasClass("responsive-off") ? t(".masthead:not(.side-header):not(.mixed-header)").length > 0 ? dtGlobals.showTopBtn = t(".masthead:not(.side-header):not(.mixed-header)").height() + 150 : t(".masthead.side-header-h-stroke").length > 0 ? dtGlobals.showTopBtn = t(".side-header-h-stroke").height() + 150 : dtGlobals.showTopBtn = 500 : dtGlobals.showTopBtn = 500
        })), o.scroll((function() {
            dtGlobals.winScrollTop > dtGlobals.showTopBtn ? t(".scroll-top").removeClass("off").addClass("on") : t(".scroll-top").removeClass("on").addClass("off")
        })), t(".scroll-top").click((function(e) {
            return e.preventDefault(), t("html, body").animate({
                scrollTop: 0
            }, "slow"), !1
        }));
        var me = t(".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout");
        !me.length && t("form.checkout").exists() && (me = t("form.checkout").parents(".content").offset().top), t(document.body).on("checkout_error", (function() {
            t("html, body").animate({
                scrollTop: me - Me.height()
            }, "slow")
        })), /*!-Custom select*/ t('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path class="st0" d="M2.5,12c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H3C2.7,12.5,2.5,12.3,2.5,12z M2.5,8c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5H3C2.7,8.5,2.5,8.3,2.5,8z M2.5,4c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S13.3,4.5,13,4.5H3C2.7,4.5,2.5,4.3,2.5,4z"/></svg><select aria-label="Dropdown menu"/>').prependTo("#bottom-bar .mini-nav .menu-select"), t("<option />", {
            selected: "selected",
            value: "",
            text: "———"
        }).appendTo(".mini-nav .menu-select select"), t("#bottom-bar .mini-nav").each((function() {
            var e = t(this),
                i = e.find("select");
            t("a", e).each((function() {
                var e = t(this);
                t("<option />", {
                    value: e.attr("href"),
                    text: e.text(),
                    "data-level": e.attr("data-level")
                }).appendTo(i)
            }))
        })), t(".mini-nav select").change((function() {
            window.location = t(this).find("option:selected").val()
        })), t(".mini-nav select option").each((function() {
            var e = t(this),
                i = window.location.href;
            e.attr("value") == i && e.attr("selected", "selected")
        })) /*!-Appearance for custom select*/ , t(" #bottom-bar .mini-nav select").each((function() {
            t(this).customSelect()
        })), t(".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper").css("visibility", "visible"), t(".mini-nav option").each((function() {
            var e = t(this),
                i = e.text(),
                s = "";
            switch (parseInt(e.attr("data-level"))) {
                case 1:
                    s = "";
                    break;
                case 2:
                    s = "— ";
                    break;
                case 3:
                    s = "—— ";
                    break;
                case 4:
                    s = "——— ";
                    break;
                case 5:
                    s = "———— "
            }
            e.text(s + i)
        })); /*!-Material click for menu and buttons*/
        var ge = navigator.userAgent.match(/iPhone/i) ? "touchstart" : "click";
        if (t(".project-navigation a, .mobile-sticky-header-overlay").bind(ge, (function(t) {})), t((function() {
                t.fn.clickMaterialEffect = function() {
                    return this.each((function() {
                        var e, i, s, n, o = t(this);
                        0 === o.find(".ink").length && o.prepend("<span class='ink'></span>"), o.addClass("ripplelink"), (e = o.find(".ink")).removeClass("animate"), e.height() || e.width() || (i = Math.max(t(this).outerWidth(), o.outerHeight()), e.css({
                            height: i,
                            width: i
                        })), o.bind("mousedown", (function(t) {
                            clearTimeout(null), s = t.pageX - o.offset().left - e.width() / 2, n = t.pageY - o.offset().top - e.height() / 2, e.css({
                                top: n + "px",
                                left: s + "px"
                            }).addClass("animate")
                        })), o.bind("mouseup mouseleave", (function(t) {
                            clearTimeout(null), clearTimeout(null), o._timer = setTimeout((function() {
                                e.removeClass("animate")
                            }), 400)
                        }))
                    }))
                }, t(".rollover.material-click-effect, .post-rollover.material-click-effect, .rollover-video.material-click-effect").clickMaterialEffect()
            })), !dtGlobals.isMobile) { /*!-parallax initialisation*/
            t(".stripe-parallax-bg, .fancy-parallax-bg, .page-title-parallax-bg").each((function() {
                var e = t(this),
                    i = e.data("prlx-speed");
                e.parallax("50%", i), e.addClass("parallax-bg-done"), e.css("opacity", "1")
            })); /*!-Animate fancy header elements*/
            var ve = -1;
            t("#fancy-header .fancy-title:not(.start-animation), #fancy-header .fancy-subtitle:not(.start-animation), #fancy-header .breadcrumbs:not(.start-animation)").each((function() {
                var e = t(this);
                e.hasClass("start-animation") || e.hasClass("start-animation-done") || (e.addClass("start-animation-done"), ve++, setTimeout((function() {
                    e.addClass("start-animation")
                }), 300 * ve))
            }))
        }
        if (jQuery(".wpcf7").each((function() {
                var e = t(this);
                e.on("wpcf7submit", (function(t) {
                    e.find(".wpcf7-response-output").wrapInner("<div class='wpcf7-not-valid-tip-text'></div>").addClass("run-animation"), setTimeout((function() {
                        e.find(".wpcf7-response-output").removeClass("run-animation")
                    }), 12e3)
                })), e.on("wpcf7invalid", (function(t) {
                    setTimeout((function() {
                        e.find(".wpcf7-response-output").wrapInner("<div class='wpcf7-not-valid-tip-text'></div>")
                    }), 100)
                })), e.on("wpcf7mailsent", (function(t) {
                    setTimeout((function() {
                        e.find(".wpcf7-response-output").wrapInner("<div class='wpcf7-valid-tip-text'></div>").addClass("wpcf7-mail-sent-ok")
                    }), 100), setTimeout((function() {
                        e.find(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok")
                    }), 12e3)
                })), e.on("invalid.wpcf7", (function(t) {
                    setTimeout((function() {
                        e.find(".wpcf7-validation-errors").wrapInner("<div class='wpcf7-not-valid-tip-text'></div>")
                    }), 100)
                })), e.on("mailsent.wpcf7", (function(t) {
                    setTimeout((function() {
                        e.find(".wpcf7-mail-sent-ok").wrapInner("<div class='wpcf7-valid-tip-text'></div>")
                    }), 100)
                }))
            })), t(".dt-sticky-sidebar").length > 0) {
            if (zt) var we = t(".sticky-on");
            else we = t(".masthead:not(.side-header):not(.side-header-v-stroke) .header-bar");
            if (X = !x.exists() || x.is(":hidden") || x.hasClass("top-bar-empty") || x.hasClass("hide-top-bar") ? 0 : x.innerHeight(), Ht || Ft) var ye = t(Me).height() + 20;
            else if (dtLocal.themeSettings.floatingHeader.showMenu && Ct)
                if (r.hasClass("floating-top-bar")) ye = dtLocal.themeSettings.floatingHeader.height + X + 20;
                else ye = dtLocal.themeSettings.floatingHeader.height + 20;
            else if (k.exists()) ye = k.find(".header-bar").height() + X + 20;
            else ye = 0;
            new StickySidebar("#sidebar", {
                topSpacing: ye,
                bottomSpacing: 20,
                viewportTop: 0,
                containerSelector: ".wf-container-main",
                innerWrapperSelector: ".sidebar-content",
                minWidth: dtLocal.themeSettings.sidebar.switchPoint
            })
        }
        t("#mphb-booking-details").find(".mphb-booking-details-title, .mphb-check-in-date, .mphb-check-out-date").wrapAll('<div class="mphb-details-sidebar"></div>'), t("#mphb-price-details").appendTo(".mphb-details-sidebar"), !t(".footer .widget").length > 0 && t(".footer").addClass("empty-footer"), dtGlobals.addOnloadEvent((function() {
            t(".the7-elementor-widget:not(.the7-elementor-product-comments)").each((function() {
                var e = t(this),
                    i = e.find(".stars a");
                i.length ? (i.length > 5 && (i.slice(5, i.length).remove(), i = e.find(".stars a")), e.find(".stars span").append(i.get().reverse())) : e.find("#rating").hide().before('<p class="stars">                            <span>                                <a class="star-5" href="#">5</a>                                <a class="star-4" href="#">4</a>                                <a class="star-3" href="#">3</a>                                <a class="star-2" href="#">2</a>                                <a class="star-1" href="#">1</a>                            </span>                        </p>'), i.on("click", (function() {
                    var e = t(this),
                        i = t(this).closest("#respond").find("#rating"),
                        s = t(this).closest(".stars");
                    return i.val(e.text()), e.siblings("a").removeClass("active"), e.addClass("active"), s.addClass("selected"), !1
                }))
            })), t(".dt-tab-accordion-title").each((function() {
                var e = t(this);
                e.parents().hasClass("hide-tab-description") && !e.parents().hasClass("hide-tab-additional") ? t("#tab-title-additional_information.dt-tab-accordion-title").addClass("first") : e.parents().hasClass("hide-tab-additional") && !e.parents().hasClass("hide-tab-description") || e.parents().hasClass("hide-tab-additional") && e.parents().hasClass("hide-tab-description") ? t("#tab-title-reviews.dt-tab-accordion-title").addClass("first") : t("#tab-title-description.dt-tab-accordion-title").addClass("first"), t(".dt-tab-accordion-title.first").next().css("display", "block"), e.on("click", (function(e) {
                    var i = t(this),
                        s = i.next(),
                        n = He(i.parent());
                    t(".dt-tab-accordion-title").removeClass("active"), i.hasClass("active") ? t(".woocommerce-Tabs-panel").slideUp("fast") : (i.addClass("active"), t(".woocommerce-Tabs-panel").not(s).hide(), De(n, 0, (function() {
                        s.slideDown("fast")
                    })))
                }))
            })), t(".the7-elementor-widget.elementor-widget-tabs").each((function() {
                var e = t(this),
                    i = e.find(".wc-tabs li:visible").first().attr("aria-controls");
                e.find(".wc-tabs li").removeClass("active"), e.find(".wc-tabs li:visible").first().addClass("active"), "none" !== e.find(".wc-tabs").css("display") && (e.find(".panel").css("display", "none"), e.find("#" + i).css("display", "block")), window.location.hash && !t(".hide-tab-eviews").length > 0 && (e.find(".wc-tabs li").removeClass("active"), e.find(".wc-tabs li.reviews_tab").addClass("active"), e.find(".panel").css("display", "none"), e.find(".woocommerce-Tabs-panel--reviews").css("display", "block")), e.find(".comment-form-rating .stars").length > 1 && e.find(".comment-respond .stars").not(":first").remove(), e.find(".wc-tabs li").on("click", (function() {
                    var i = t(this).attr("aria-controls");
                    t(this).siblings().removeClass("active"), t(this).addClass("active"), e.find("> .woocommerce-tabs > .panel").css("display", "none"), e.find("#" + i).css("display", "block")
                }))
            }))
        }));
        var be = t(".elementor-popup-modal .dialog-message");
        n.on("elementor/popup/show", be, (function(e, i, s) {
            "function" != typeof t.fn.mCustomScrollbar || dtGlobals.isMobile || s.$element.mCustomScrollbar({
                advanced: {
                    autoUpdateTimeout: 1e3
                },
                scrollbarPosition: "outside"
            }), t(document.body).trigger("init_price_filter"), s.$element.find(" .dt-sub-menu-display-on_click li.has-children, .dt-sub-menu-display-on_item_click li.has-children").each((function() {
                "undefined" != typeof the7ElementorMenu && the7Utils.isFunction(the7ElementorMenu) && t(this).the7ElementorMenu()
            })), s.$element.find(".dt-css-grid .wf-cell img, .menu-item img, .lazy-load").each((function() {
                var e = t(this);
                e.attr("data-src") && e.prop("src", e.attr("data-src")), e.attr("data-srcset") && e.prop("srcset", e.attr("data-srcset")), e.removeAttr("data-src"), e.removeAttr("data-srcset"), e.removeClass("lazy-load"), setTimeout((function() {
                    e.parent().removeClass("layzr-bg"), e.css("will-change", "auto")
                }), 200)
            }))
        })), window.the7GetMasonryColumnsConfig = function(t) {
            var e = t.parent().hasClass("mode-masonry") ? t.parent() : t,
                i = t.width() - 1,
                s = {
                    mobile: parseInt(e.attr("data-phone-columns-num")),
                    desktop: parseInt(e.attr("data-desktop-columns-num")),
                    tabletV: parseInt(e.attr("data-v-tablet-columns-num")),
                    tabletH: parseInt(e.attr("data-h-tablet-columns-num"))
                };
            return Modernizr.mq("only screen and (max-width:767px)") ? (singleWidth = Math.floor(i / s.mobile) + "px", doubleWidth = 2 * Math.floor(i / s.mobile) + "px", columnsNum = s.mobile) : Modernizr.mq("(min-width:768px) and (max-width:991px)") ? (singleWidth = Math.floor(i / s.tabletV) + "px", doubleWidth = 2 * Math.floor(i / s.tabletV) + "px", columnsNum = s.tabletV) : Modernizr.mq("(min-width:992px) and (max-width:1199px)") ? (singleWidth = Math.floor(i / s.tabletH) + "px", doubleWidth = 2 * Math.floor(i / s.tabletH) + "px", columnsNum = s.tabletH) : (singleWidth = Math.floor(i / s.desktop) + "px", doubleWidth = 2 * Math.floor(i / s.desktop) + "px", columnsNum = s.desktop), {
                singleWidth: singleWidth,
                doubleWidth: doubleWidth,
                columnsNum: columnsNum
            }
        }, t.fn.simpleCalculateColumns = function(t, e, i) {
            var s = parseInt(t.attr("data-width")),
                n = parseInt(t.attr("data-columns")),
                o = parseInt(t.attr("data-padding"));
            void 0 === i && (i = "px"), this.calculateColumns(s, n, o, null, null, null, null, i, e)
        }, t.fn.calculateColumns = function(e, i, s, n, o, a, r, l, d) {
            return this.each((function() {
                var n, o, a, r, c, h = "",
                    u = t(this),
                    p = u,
                    f = u.attr("data-cont-id"),
                    m = t(".cont-id-" + f),
                    g = !1 !== s ? s : 20,
                    v = -g,
                    w = g - 10,
                    y = g - 5;
                g < 10 && (w = 0, y = 0), 0 === g && (v = 0), u.parent().hasClass("products-shortcode") && (w = g), u.parent().hasClass("mode-masonry") && (p = p.parent(), m = m.parent());
                var b = m.not(".bg-under-post, .content-bg-on").hasClass("description-under-image");
                if (t("#col-style-id-" + f).exists()) var C = document.getElementById("col-style-id-" + f);
                else(C = document.createElement("style")).id = "col-style-id-" + f, C.appendChild(document.createTextNode("")), document.head.appendChild(C);
                var _ = t("#col-style-id-" + f);
                if (h = b ? " \t\t\t\t\t\t\t.cont-id-" + f + " { margin: -" + y + "px  -" + g + "px -" + w + "px ; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" + f + " { margin: " + -y + "px " + g + "px " + -w + "px ; }" : " \t\t\t\t\t\t\t.cont-id-" + f + " { margin: -" + g + "px; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" + f + " { margin: " + v + "px  " + g + "px; } \t\t\t\t\t\t", _.html(h), p.hasClass("resize-by-browser-width")) void 0 === d && (d = the7GetMasonryColumnsConfig), a = (n = d.call(this, u)).singleWidth, r = n.doubleWidth, c = n.columnsNum;
                else {
                    for (o = u.width() - 1, e = e || 200, i = i || 6; Math.floor(o / i) < e && !(--i <= 1););
                    "px" === l ? (a = Math.floor(o / i) + "px", r = 2 * Math.floor(o / i) + "px", c = i) : (a = Math.floor(1e5 / i) / 1e3 + "%", r = 2 * Math.floor(1e5 / i) / 1e3 + "%")
                }
                h += b ? c > 1 ? " \t\t\t\t\t\t\t.cont-id-" + f + "  .wf-cell { width: " + a + "; padding: " + y + "px " + g + "px " + w + "px; } \t\t\t\t\t\t\t.cont-id-" + f + "  .wf-cell.double-width { width: " + r + "; } \t\t\t\t\t\t" : " \t\t\t\t\t\t\t.cont-id-" + f + "  .wf-cell { width: " + a + "; padding: " + y + "px " + w + "px " + g + "px; } \t\t\t\t\t\t" : c > 1 ? " \t\t\t\t\t\t\t.cont-id-" + f + " .wf-cell { width: " + a + ";  padding: " + g + "px; } \t\t\t\t\t\t\t.cont-id-" + f + " .wf-cell.double-width { width: " + r + "; } \t\t\t\t\t\t" : " \t\t\t\t\t\t\t.cont-id-" + f + " .wf-cell { width: " + a + "; padding: " + g + "px; } \t\t\t\t\t\t", _.html(h);
                var x = C.sheet.cssRules.length;
                C.sheet.insertRule(".webkit-hack { }", x), C.sheet.deleteRule(x), u.trigger("columnsReady")
            }))
        }, t.fn.initSlider = function() {
            return this.each((function() {
                var e = t(this);
                e.data("width"), e.data("height");
                e.hasClass("royalReady") || (e.postTypeScroller(), e.addClass("royalReady"))
            }))
        };
        var Ce = Isotope.prototype._positionItem;

        function _e(e, i, s, n) {
            var o = !0;
            return e.each((function() {
                t(this).find(s).addClass(n), new Layzr({
                    container: i,
                    selector: "." + n,
                    attr: "data-src",
                    attrSrcSet: "data-srcset",
                    retinaAttr: "data-src-retina",
                    threshold: 30,
                    before: function() {
                        t(this).one("load", (function() {
                            var e = this.width + "px";
                            if (t(this).parents(".woocom-project").length > 0) {
                                var i = t(this).attr("width");
                                e = "(max-width:" + i + "px) 100vw," + i + "px"
                            }
                            this.setAttribute("sizes", e), this.style.willChange = "opacity"
                        }))
                    },
                    callback: function() {
                        this.classList.add("iso-layzr-loaded");
                        var e = t(this);
                        e.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", (function(t) {
                            setTimeout((function() {
                                e.parent().removeClass("layzr-bg"), e.css("will-change", "auto")
                            }), 200)
                        })), setTimeout((function() {
                            e.parent().removeClass("layzr-bg"), e.css("will-change", "auto")
                        }), 350), e.parents(".dt-isotope").length > 0 && o && (e.parents(".dt-isotope").isotope("layout"), o = !1)
                    }
                })
            }))
        }
        Isotope.prototype._positionItem = function(t, e, i, s) {
            Ce(t, e, i, !0)
        }, t.fn.IsoLayzrInitialisation = function(t) {
            return _e(this, t, "img[class*=iso-]", "iso-item-lazy-load")
        }, t.fn.IsoLayzrJqInitialisation = function(t) {
            return _e(this, t, "img", "thumb-lazy-load-show")
        };
        var xe = t(".iso-container"),
            Ie = t(".iso-grid:not(.jg-container, .iso-container), .blog.layout-grid .wf-container.description-under-image:not(.jg-container, .iso-container), .grid-masonry:not(.iso-container), .shortcode-blog-posts.iso-grid"),
            Se = xe.add(Ie),
            Te = dtGlobals.isoPreloader = t('<div class="iso-preloader dt-posts-preload dt-posts-preload-active"><div class="dt-posts-preload-activity"></div></div>').appendTo("body").hide();
        Se.not(".blog-grid-shortcode").addClass("dt-isotope"), window.the7ApplyColumns = function(t, e, i) {
            var s, n;
            e && e.length && (t = t || 0, s = e.parent().hasClass("mode-masonry") ? e.parent() : e, n = parseInt(s.attr("data-padding")), e.addClass("cont-id-" + t).attr("data-cont-id", t), e.simpleCalculateColumns(s, i), n > 10 && e.addClass("mobile-paddings"), o.on("debouncedresize", (function() {
                e.simpleCalculateColumns(s, i), n > 10 && e.addClass("mobile-paddings")
            })))
        }, Se.exists() && Se.not(".custom-iso-columns").each((function(e) {
            the7ApplyColumns(e, t(this), the7GetMasonryColumnsConfig)
        })), t.fn.heightHack = function() {
            return this.each((function() {
                var e, i = t(this).not(".back-image");
                i.exists() && (i.hasClass("height-ready") || i.parents(".testimonial-thumb").exists() || i.parents(".post-rollover").exists() || i.parents(".slider-masonry").exists() || i.parents(".rollover-thumbnails").exists() || (e = parseInt(i.attr("width")) / parseInt(i.attr("height")), i.parents(".testimonial-vcard, .dt-format-gallery, .shortcode-blog-posts.iso-grid ").exists() && i.wrap("<div />"), isNaN(e) && i[0] && (e = i[0].naturalWidth / i[0].naturalHeight), i.parent().not(".img-ratio-wrapper").css({
                    "padding-bottom": 100 / e + "%",
                    height: 0,
                    display: "block"
                }), i.parents(".dt-team-masonry-shortcode").exists() && "none" !== i.parent().css("max-width") && i.parents(".team-media").addClass("apply-max-width"), i.attr("data-ratio", e).addClass("height-ready")))
            }))
        }, t.fn.IsoInitialisation = function(e, i, s, n) {
            return this.each((function() {
                var s = t(this);
                s.hasClass("iso-item-ready") || (s.isotope({
                    itemSelector: e,
                    layoutMode: i,
                    stagger: 30,
                    resize: !1,
                    transitionDuration: 0,
                    equalheight: n,
                    hiddenStyle: {
                        opacity: 0
                    },
                    visibleStyle: {
                        opacity: 1
                    },
                    masonry: {
                        columnWidth: 1
                    },
                    getSortData: {
                        date: function(e) {
                            return t(e).attr("data-date")
                        },
                        name: function(e) {
                            return t(e).attr("data-name")
                        }
                    },
                    customSorters: {
                        name: window.the7LocaleSensitiveStringsCompare
                    }
                }), s.addClass("iso-item-ready"))
            }))
        }, t(".iso-container, .portfolio-grid").each((function() {
            if (t(this).parent().hasClass("mode-masonry")) var e = null;
            else e = t(this);
            t(".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-categories a").on("click.presscorFilterCategories", (function(i) {
                var s = t(this).attr("data-filter");
                return null != e && e.isotope({
                    filter: s
                }), !1
            })), t(".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-by a").on("click", (function(i) {
                var s = t(this).attr("data-by"),
                    n = t(this).parents(".filter-extras").find(".filter-sorting > a.act").first().attr("data-sort");
                return null != e && e.isotope({
                    sortBy: s,
                    sortAscending: "asc" == n
                }), !1
            })), t(".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-sorting a").on("click", (function(i) {
                var s = t(this).attr("data-sort"),
                    n = t(this).parents(".filter-extras").find(".filter-by > a.act").first().attr("data-by");
                return null != e && e.isotope({
                    sortBy: n,
                    sortAscending: "asc" == s
                }), !1
            }))
        })), t(".dt-css-grid .wf-cell.visible").IsoLayzrJqInitialisation(), (xe.exists() || Ie.exists()) && (Te.fadeIn(50), Se.not(".blog-grid-shortcode").each((function() {
            var e = t(this),
                i = e;
            e.hasClass("mode-masonry") && (i = e.find(".dt-isotope")), t(".preload-me", i).heightHack(), t(".slider-masonry", i).initSlider(), i.one("columnsReady", (function() {
                if (i.hasClass("iso-container")) i.IsoInitialisation(".iso-item", "masonry", 400);
                else {
                    var e = !0;
                    (i.parent().hasClass("gradient-overlay-layout-list") || i.parent().hasClass("content-rollover-layout-list")) && (e = !1), i.IsoInitialisation(".wf-cell", "fitRows", 400, e)
                }
                i.isotope("on", "layoutComplete", (function(e) {
                    for (var s = 0; s < e.length; s++) {
                        e[s], t(this);
                        i.trigger("IsoReady")
                    }
                })), i.parent(".content-rollover-layout-list:not(.disable-layout-hover)").find(".post-entry-wrapper").clickOverlayGradient(), i.one("IsoReady", (function() {
                    var t = i;
                    i.parent().hasClass("jquery-filter") && "none" != i.parent().attr("data-pagination-mode") && (t = i.find(".wf-cell.visible")), t.IsoLayzrJqInitialisation(), setTimeout((function() {
                        i.isotope("layout")
                    }), 350)
                }))
            })), i.on("columnsReady", (function() {
                t(".slider-masonry", i).hasClass("royalReady") && t(".slider-masonry", i).each((function() {
                    var e = t(this).parents(".ts-wrap").data("thePhotoSlider");
                    void 0 !== e && e.update()
                })), i.parent(".content-rollover-layout-list:not(.disable-layout-hover)").find(".post-entry-wrapper").clickOverlayGradient(), i.isotope("layout")
            }))
        })), Te.stop().fadeOut(300)), o.on("debouncedresize", (function(e) {
            if (dtGlobals.resizeCounter++, the7Utils.isFunction(t.fn.calcPics) && t(".instagram-photos").calcPics(), l.hasClass("boxed")) {
                var i = l.css("maxWidth"),
                    s = i.indexOf("px") >= 0,
                    n = i.indexOf("%") >= 0;
                s && (I.addClass("width-in-pixel"), void 0 !== Me && Me.addClass("width-in-pixel")), n && (t(".masthead.full-width:not(.side-header)").css({
                    width: l.width()
                }), void 0 !== Me && Me.find(".top-bar-bg").length > 0 && Me.find(".top-bar-bg").css({
                    width: l.width()
                }), r.hasClass("phantom-sticky") && t(".top-bar-bg").length > 0 && t(".top-bar-bg").css({
                    width: l.width()
                }))
            }
            if (t(".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper").clickOverlayGradient(), window.innerWidth >= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && (l.removeClass("show-mobile-header"), l.addClass("closed-mobile-header"), r.removeClass("show-sticky-mobile-header"), r.removeClass("show-overlay-mobile-header").addClass("closed-overlay-mobile-header"), t(".mobile-sticky-header-overlay").removeClass("active"), t(".dt-mobile-menu-icon").removeClass("active"), a.removeClass("menu-open")), window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") ? (t(".masthead").hasClass("masthead-mobile") || t(".masthead:not(.mixed-header):not(#phantom)").addClass("masthead-mobile"), t(".masthead").hasClass("masthead-mobile-header") || (t(".masthead:not(.side-header):not(#phantom)").addClass("masthead-mobile-header"), t("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").addClass("masthead-mobile-header")), k.exists() && (k.removeClass("sticky-top-line-on sticky-top-line-on"), Ot = !1), t(".mobile-header-scrollbar-wrap").css({
                    "max-width": t(".dt-mobile-header ").width() - 13
                })) : (t(".masthead:not(.mixed-header):not(#phantom)").removeClass("masthead-mobile"), t(".masthead:not(.side-header):not(#phantom)").removeClass("masthead-mobile-header"), t("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").removeClass("masthead-mobile-header"), t(".masthead").hasClass("desktop-side-header") || t("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").addClass("desktop-side-header")), window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !r.hasClass("responsive-off") ? t(".left-widgets", x).find(".in-top-bar-left").length > 0 || t(".top-bar .right-widgets").find(".in-top-bar-right").length > 0 ? x.removeClass("top-bar-empty") : x.addClass("top-bar-empty") : window.innerWidth <= dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !r.hasClass("responsive-off") ? t(".left-widgets", x).find(".in-top-bar").length > 0 ? x.removeClass("top-bar-empty") : x.addClass("top-bar-empty") : !t(".mini-widgets", x).find(".show-on-desktop").length > 0 ? x.addClass("top-bar-empty") : x.removeClass("top-bar-empty"), x.exists() && (topBarMobH = x.innerHeight()), t(".mini-nav select").trigger("render"), t.fancyFeaderCalc(), t(".dt-default").each((function() {
                    var e = t(this),
                        i = e.attr("data-min-height");
                    t.isNumeric(i) ? e.css({
                        minHeight: i + "px"
                    }) : i ? i.search("%") > 0 ? e.css({
                        minHeight: o.height() * (parseInt(i) / 100) + "px"
                    }) : e.css({
                        minHeight: i
                    }) : e.css({
                        minHeight: 0
                    })
                })), de.siblings(".project-wide-col").height(), de.height(), ce(), t(".boxed").length > 0) {
                var d = t(".boxed");
                t(".header-side-left.footer-overlap:not(.sticky-header) .boxed .footer, .left-side-line.footer-overlap .boxed .footer").css({
                    right: o.width() - (d.offset().left + d.outerWidth())
                })
            }
            t(".footer-overlap .footer").css({
                opacity: 1
            }), t(".mobile-false .footer-overlap .page-inner").css({
                "min-height": window.innerHeight - t(".footer").innerHeight(),
                "margin-bottom": t(".footer").innerHeight()
            }), t(".mobile-false .footer-overlap .footer").css({
                bottom: parseInt(r.css("padding-bottom")) + parseInt(r.css("margin-bottom"))
            })
        })).trigger("debouncedresize"), t(window).trigger("the7_widget_resize");
        var ke = t("html, body"),
            ze = t(".phantom-sticky"),
            Le = t(".sticky-top-line"),
            Ee = (Ct = ze.exists(), Le.exists()),
            Ae = t(".sticky-mobile-header").exists(),
            Pe = Ct || Ee,
            Me = null;
        we = null;

        function Oe() {
            window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") ? Ae && (Me = t(".masthead-mobile-header")) : Me = Pe ? t(".masthead") : Ae && !t(".mobile-false").length > 0 ? t(".masthead-mobile-header") : t("#phantom");
            var e = t(".mobile-header-bar");
            e.length > 0 && "none" != e.css("display") ? (we = e, Ee && (we = t(".sticky-top-line.masthead-mobile-header .mobile-header-bar")), (Ct || Ee) && (Me = t(".sticky-header .masthead.side-header").length > 0 || t(".overlay-navigation .masthead.side-header").length > 0 ? e.parent(".masthead:not(.side-header)") : e.parent())) : (we = t(".masthead:not(.side-header):not(.side-header-v-stroke)"), r.hasClass("floating-top-bar") || (we = we.find(".header-bar")))
        }
        Oe();
        var De = function(t, e, i) {
                ke.stop().animate({
                    scrollTop: t
                }, {
                    duration: e,
                    easing: "swing",
                    complete: i
                })
            },
            He = function(e) {
                var i = null,
                    s = 0,
                    n = r.hasClass("overlay-navigation");
                window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !r.hasClass("responsive-off") && Ae && (yt ? i = t(".masthead-mobile-header .mobile-header-bar") : Ot ? i = Le : (i = t(we, Me), Pe && "solid" === Me.css("border-bottom-style") && (s = parseInt(Me.css("border-bottom-width"))))), n ? null == i && Ee && (i = Le) : null == i && (i = Ct && zt ? r.hasClass("floating-top-bar") ? t(".masthead") : t(".header-bar") : Ee ? t(".masthead").hasClass("mixed-floating-top-bar") ? Le : Le.find(".header-bar") : Me);
                var o = 0;
                return i && i.length && (o = i.height()), e.offset().top + 1 - o + s
            },
            Fe = function(e, i, s) {
                if (e) {
                    var n = t("#" + e),
                        o = !1;
                    if ("up" !== e || n.length || (o = !0), !n.length && !o) return !1;
                    void 0 !== i && (location.hash = i), Oe();
                    var a = 650,
                        l = 0,
                        d = r.hasClass("overlay-navigation");
                    if (o || (l = He(n)), void 0 !== s && !o) {
                        var c = s.offset().top,
                            h = n.offset().top,
                            u = Math.abs(h - c);
                        a = 150 * Math.log(1.022 ^ u)
                    }
                    return t.closeMobileHeader(), d && t.closeSideHeader(), De(l, a, (function() {
                        if (d || setTimeout((function() {
                                t.closeSideHeader()
                            }), 50), "up" === e) return !0;
                        var i, s, o, a = He(n);
                        l !== a && (De(a), s = a, o = He, (i = n).one("animationend", (function() {
                            var t = o(i);
                            t !== s && De(t)
                        })))
                    })), !0
                }
                return !1
            },
            We = function(t) {
                return t.match("^#!") ? t.substring(3) : t.match("^#") ? t.substring(1) : t.substring(t.indexOf("#")).substring(3)
            };

        function Be(e) {
            e.on("click", (function(e) {
                if (!t(e.target).parent().hasClass("next-level-button") && clickAnchorLink(t(this))) return e.preventDefault(), !1
            }))
        }
        dtGlobals.addOnloadEvent((function() {
            var e = window.location.hash,
                i = We(e);
            setTimeout((function() {
                if (i) {
                    t(".menu-item a").parent("li").removeClass("act"), t(".dt-nav-menu a").removeClass("active-item");
                    var s = t(".menu-item a[href='" + e + "']"),
                        n = t(".dt-nav-menu a[href='" + e + "']");
                    s.parent("li").addClass("act"), n.addClass("active-item"), t(".menu-item a[href*='" + e + "']").parent("li").addClass("act"), t(".dt-nav-menu a[href*='" + e + "']").addClass("active-item");
                    var o = s.parents("li");
                    if (o.find(".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act").length) {
                        var a = o.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
                        o.addClass("open-sub"), a.stop(!0, !0).slideDown(100)
                    }
                    setTimeout((function() {
                        Fe(i)
                    }), 300)
                } else {
                    var r = t(".menu-item > a[href='#!/up']");
                    r.length > 0 && r.parent("li").addClass("act")
                }
            }), 300)
        })), jQuery(window).on("resize", (function() {
            Oe()
        })), /*!-scroll to anchor*/ window.clickAnchorLink = function(e) {
            const i = e.attr("href"),
                s = We(i),
                n = Fe(s, i, e);
            if (n && t(window).trigger("the7.anchorScrolling", [s, i, e]), e.parents().hasClass("elementor-popup-modal")) {
                const t = e.parents(".elementor-location-popup").attr("data-elementor-id");
                elementorFrontend.documentsManager.documents[t].getModal().hide()
            }
            return t(".menu-item a").parent("li").removeClass("act"), t(".dt-nav-menu a").removeClass("active-item"), e.parents("li.menu-item ").addClass("act"), e.parents().hasClass("dt-nav-menu") && e.addClass("active-item"), n
        }, r.on("click", '.anchor-link[href^="#!"], .anchor-link a[href^="#!"], .logo-box a[href^="#!"], .branding a[href^="#!"], #branding-bottom a[href^="#!"], .mobile-branding a[href^="#!"],  .woocommerce-product-rating a.woocommerce-review-link[href^="#"]', (function(e) {
            if (clickAnchorLink(t(this))) return e.preventDefault(), !1
        })), Be(t('.menu-item > a[href*="#!"]')), n.on("elementor/popup/show", t(".elementor-popup-modal .dialog-message"), (function(t, e, i) {
            Be(i.$element.find('.menu-item > a[href*="#!"]'))
        }));
        be = t(".elementor-popup-modal .dialog-message");
        n.on("elementor/popup/show", be, (function(e, i, s) {
            t("#elementor-popup-modal-" + i + " .elementor-location-popup");
            s.$element.find('.menu-item > a[href*="#!"]').on("click", (function(e) {
                if (!t(e.target).parent().hasClass("next-level-button") && clickAnchorLink(t(this))) return e.preventDefault(), !1
            }))
        })), n.on("elementor/popup/show", (function(e, i, s) {
            var n = window.location.hash;
            if (We(n)) {
                t(".menu-item a").parent("li").removeClass("act"), t(".dt-nav-menu a").removeClass("active-item");
                var o = t(".menu-item a[href='" + n + "']"),
                    a = t(".dt-nav-menu a[href='" + n + "']");
                o.parent("li").addClass("act"), a.addClass("active-item"), t(".menu-item a[href*='" + n + "']").parent("li").addClass("act"), t(".dt-nav-menu a[href*='" + n + "']").addClass("active-item");
                var r = o.parents("li");
                if (r.find(".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act").length) {
                    var l = r.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
                    r.addClass("open-sub"), l.stop(!0, !0).slideDown(100)
                }
                elementorFrontend.elements.$window.one("the7.anchorScrolling.elementorPopup", (function() {
                    s.getModal() && s.getModal().hide()
                }))
            } else {
                var d = t(".menu-item > a[href='#!/up']");
                d.length > 0 && d.parent("li").addClass("act")
            }
        })), n.on("elementor/popup/hide", (function() {
            elementorFrontend.elements.$window.off("the7.anchorScrolling.elementorPopup")
        }));
        var Re = null; /*!-set active menu item on scroll*/
        function je() {
            var e = t(".dt-isotope"),
                i = t(".iso-grid .wf-cell:not(.shown), .dt-css-grid .wf-cell:not(.shown)");
            if (i.exists() && window.the7ProcessEffects(i), e.exists()) {
                e.each((function() {
                    0;
                    var e = t(this).find(".wf-cell");
                    e.exists() && window.the7ProcessEffects(e)
                }))
            } else {
                var s = t(".iso-item:not(.shown)");
                if (!s.exists()) return;
                window.the7ProcessEffects(s)
            }
        }
        o.scroll((function(e) {
            if (!r.hasClass("is-scroll")) {
                var i, s = null;
                s = jt && "solid" == Me.css("border-bottom-style") ? Me.height() + 1 : jt ? Me.height() : we.height(), t(".masthead.side-header").length > 0 && null == s && (s = 0), null == s && (s = 0);
                var n = t(".one-page-row div[data-anchor^='#']"),
                    o = t(".one-page-row .vc_row[id], .one-page-row .vc_section[id], .elementor-element[id], .elementor-menu-anchor[id]");
                if (t.merge(n, o).each((function() {
                        var e = t(this),
                            n = e.attr("id");
                        e.hasClass("wpb_animate_when_almost_visible") && e.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", (function(o) {
                            e.is(":visible") && dtGlobals.winScrollTop >= Math.floor(e.offset().top - s) && (i = "#!/" + n), t('.menu-item a[href^="#!"]').parents("li").removeClass("act"), t('.dt-nav-menu a[href^="#!"]').removeClass("active-item");
                            var a = t('.menu-item a[href="' + i + '"]'),
                                r = t('.dt-nav-menu a[href="' + i + '"]');
                            a.parents("li").addClass("act"), r.addClass("active-item")
                        })), e.is(":visible") && dtGlobals.winScrollTop >= Math.floor(e.offset().top - s) && (i = "#!/" + n)
                    })), i !== Re) {
                    Re = i, t('.menu-item a[href^="#!"]').parents("li").removeClass("act"), t('.dt-nav-menu a[href^="#!"]').removeClass("active-item");
                    var a = t('.menu-item a[href="' + i + '"]'),
                        l = t('.dt-nav-menu a[href="' + i + '"]');
                    a.parents("li").addClass("act"), l.addClass("active-item")
                }
                var d = t('.menu-item > a[href="#!/up"]');
                if (d.length > 0) {
                    var c = null;
                    n.length > 0 ? c = n : o.length > 0 && (c = o), null !== c && dtGlobals.winScrollTop < c.first().offset().top - s && d.parents("li").addClass("act")
                }
            }
        })), t.fn.resetEffects = function(e) {
            return this.each((function() {
                t(this).find(".iso-item.shown, .wf-cell.shown").removeClass("start-animation").removeClass("animation-triggered").removeClass("shown")
            }))
        };
        var $e = {
            xhr: !1,
            settings: !1,
            launch: function(e) {
                var i = this;
                e && (this.settings = e), this.xhr && this.xhr.abort();
                this.xhr = t.post(e.ajaxurl, {
                    action: "presscore_template_ajax",
                    postID: e.postID,
                    paged: e.paged,
                    targetPage: e.targetPage,
                    term: e.term,
                    orderby: e.orderBy,
                    order: e.order,
                    nonce: e.nonce,
                    visibleItems: e.visibleItems,
                    contentType: e.contentType,
                    pageData: e.pageData,
                    sender: e.sender
                }, (function(s) {
                    if (s.success) {
                        var n = jQuery(s.html),
                            a = e.targetContainer;
                        parseInt(a.attr("data-width")), parseInt(a.attr("data-max-width")), parseInt(a.attr("data-padding"));
                        if (isIsotope = "grid" == e.layout || "masonry" == e.layout, itemsToDeleteLength = 0, trashItems = new Array, sortBy = s.orderby.replace("title", "name"), sortAscending = "asc" == s.order.toString(), s.newNonce && (dtLocal.ajaxNonce = s.newNonce), void 0 !== s.itemsToDelete && (itemsToDeleteLength = s.itemsToDelete.length), isIsotope && itemsToDeleteLength > 0) {
                            for (var r = 0; r < s.itemsToDelete.length; r++) trashItems.push('.wf-cell[data-post-id="' + s.itemsToDelete[r] + '"]');
                            a.isotope("remove", a.find(trashItems.join(",")))
                        } else isIsotope || "filter" != e.sender && "paginator" != e.sender || a.find(".wf-cell, article").remove();
                        n.length > 0 ? (a.append(n), dtGlobals.ajaxContainerItems = a.find("div.wf-cell, .project-even, .project-odd").not(".animation-triggered"), isIsotope ? (t(".preload-me", a).heightHack(), t(".slider-masonry", a).initSlider(), t(".slider-masonry", a).css("visibility", "visible"), a.isotope("addItems", n), "media" != e.contentType ? a.isotope({
                            sortBy: sortBy,
                            sortAscending: sortAscending
                        }) : a.isotope({
                            sortBy: "original-order"
                        }), a.isotope("layout"), i.init(), a.layzrInitialisation(), a.IsoLayzrInitialisation()) : (t(".slider-masonry", a).initSlider(), t("ul.photoSlider:not(.slider-masonry)").each((function() {
                            t(this).postTypeScroller()
                        })), t("ul.photoSlider").css("visibility", "visible"), "jgrid" == e.layout && a.collagePlus(dtGlobals.jGrid), i.init(), a.layzrInitialisation(), a.IsoLayzrInitialisation(".mobile-true")), void 0 !== e.afterSuccessInit && e.afterSuccessInit(s), o.trigger("dt.ajax.content.appended")) : isIsotope && a.isotope({
                            sortBy: sortBy,
                            sortAscending: sortAscending
                        })
                    }
                    void 0 !== e.afterResponce && e.afterResponce(s), je()
                }))
            },
            init: function() {
                switch (this.settings.contentType) {
                    case "portfolio":
                        this.initPortfolio();
                        break;
                    case "albums":
                        this.initAlbums();
                        break;
                    case "media":
                        this.initMedia();
                        break;
                    case "blog":
                    case "testimonials":
                        this.basicInit()
                }
            },
            initPortfolio: function() {
                this.basicInit()
            },
            initAlbums: function() {
                this.basicInit()
            },
            initMedia: function() {
                this.basicInit()
            },
            basicInit: function() {
                var e = this.settings.targetContainer;
                t(".dt-pswp-item, .dt-gallery-container a", e).addPhotoswipeWrap(), t(".dt-gallery-container", e).initPhotoswipe(), t(".photoswipe-wrapper", e).initPhotoswipe(), e.photoswipeGallery(".dt-gallery-container.wf-container"), t(".rollover, .rollover-video, .post-rollover, .rollover-project .show-content", e).addRollover(), the7Utils.isFunction(t.fn.hoverdir) && (t(".mobile-false .hover-grid .rollover-project").each((function() {
                    t(this).hoverdir()
                })), t(".mobile-false .hover-grid-reverse .rollover-project ").each((function() {
                    t(this).hoverdir({
                        inverse: !0
                    })
                }))), t(".mobile-true .rollover-project a.link.show-content, .hover-style-one article:not(.description-off) .rollover-project > a, .hover-style-two article:not(.description-off) .rollover-project > a, .hover-style-three article:not(.description-off) .rollover-project > a").on("click", (function(t) {
                    t.preventDefault()
                })), t(".dt-trigger-first-pswp", e).not(".pspw-ready").on("click", (function() {
                    var e = t(this).parents("article.post");
                    if (e.length > 0) {
                        var i = e.find("a.dt-pswp-item");
                        i.length > 0 && i.first().trigger("click")
                    }
                    return !1
                })).addClass("mfp-ready"), t(".mobile-true .rollover-project").touchNewHover(), the7Utils.isFunction(t.fn.triggerHoverClick) && t(".mobile-false .rollover-project:not(.rollover-active) .rollover-content, .buttons-on-img:not(.rollover-active) .rollover-content").triggerHoverClick(), the7Utils.isFunction(t.fn.triggerHoverClick) && t(".mobile-false .rollover-project.forward-post").triggerHoverClick(), the7Utils.isFunction(t.fn.triggerHoverClick) && t(".mobile-false .rollover-project.rollover-active, .mobile-false .buttons-on-img.rollover-active").followCurentLink(), the7Utils.isFunction(t.fn.triggerAlbumsClick) && t(".mobile-false .albums .rollover-project, .mobile-false .albums .buttons-on-img, .mobile-false .archive .type-dt_gallery .buttons-on-img").triggerAlbumsClick(), the7Utils.isFunction(t.fn.triggerAlbumsTouch) && t(".mobile-true .albums .rollover-project, .mobile-true .albums .buttons-on-img, .mobile-true .archive .type-dt_gallery .buttons-on-img").triggerAlbumsTouch(), the7Utils.isFunction(t.fn.triggerPostClick) && t(".mobile-false .content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .mobile-false .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post").triggerPostClick(), the7Utils.isFunction(t.fn.touchforwardToPost) && t(".mobile-true .rollover-project.forward-post").touchforwardToPost(), the7Utils.isFunction(t.fn.touchHoverImage) && t(".mobile-true .buttons-on-img").touchHoverImage(), t(".hover-scale .rollover-project").scaleInHover(), the7Utils.isFunction(t.fn.addIconToLinks) && t(".links-container a").addIconToLinks()
            }
        };

        function Ge(e) {
            var i = e.find(".filter.with-ajax").first(),
                s = e.find(".wf-container.with-ajax, .articles-list.with-ajax").first(),
                n = i.find(".filter-categories a.act"),
                o = i.find(".filter-by a.act"),
                a = i.find(".filter-sorting a.act"),
                r = parseInt(s.attr("data-cur-page")),
                l = new Array,
                d = n.length > 0 ? n.attr("data-filter").replace(".category-", "").replace("*", "") : "";
            return "0" == d && (d = "none"), s.hasClass("dt-isotope") && t(".wf-cell", s).each((function() {
                l.push(t(this).attr("data-post-id"))
            })), {
                visibleItems: l,
                postID: dtLocal.postID,
                paged: r,
                term: d,
                orderBy: o.length > 0 ? o.attr("data-by") : "",
                order: a.length > 0 ? a.attr("data-sort") : "",
                ajaxurl: dtLocal.ajaxurl,
                nonce: dtLocal.ajaxNonce,
                pageData: dtLocal.pageData,
                layout: dtLocal.pageData.layout,
                targetContainer: s,
                isPhone: dtGlobals.isPhone
            }
        }

        function Ye() {
            if (dtGlobals.loadMoreButton && dtGlobals.loadMoreButton.exists()) {
                var t = dtGlobals.loadMoreButton.offset();
                t && o.scrollTop() > (t.top - o.height()) / 2 && !dtGlobals.loadMoreButton.hasClass("animate-load") && dtGlobals.loadMoreButton.trigger("click")
            }
        }
        t("#content").on("click", ".paginator.with-ajax a", (function(e) {
            if (e.preventDefault(), !t(e.target).hasClass("dots") && !t(e.target).hasClass("disabled")) {
                var i = t(this),
                    s = i.closest(".paginator"),
                    n = s.parent(),
                    a = n.find(".wf-container.with-ajax, .articles-list.with-ajax").first(),
                    r = t(".button-load-more"),
                    l = r.find(".button-caption").text(),
                    d = s.hasClass("paginator-more-button") ? "more" : "paginator",
                    c = "more" == d,
                    h = Ge(n),
                    u = c ? h.paged + 1 : i.attr("data-page-num"),
                    p = dtGlobals.isoPreloader;
                if (r.addClass("animate-load").find(".button-caption").text(dtLocal.moreButtonText.loading), p && !t(".paginator-more-button").length && dtGlobals.isoPreloader.fadeIn(50), c) t("html, body").scrollTop(o.scrollTop() + 1);
                else {
                    var f = n.find(".filter.with-ajax").first(),
                        m = 44;
                    f.exists() || (f = a, m = 50), t("html, body").animate({
                        scrollTop: f.offset().top - t("#phantom").height() - m
                    }, 400)
                }
                $e.launch(t.extend({}, h, {
                    contentType: h.pageData.template,
                    targetPage: u,
                    sender: d,
                    visibleItems: c ? new Array : h.visibleItems,
                    afterResponce: function(e) {
                        s.length > 0 ? (e.paginationHtml ? s.html(t(e.paginationHtml).html()).show() : s.html("").hide(), setTimeout((function() {
                            t(".button-load-more").removeClass("animate-load").find(".button-caption").text(l)
                        }), 200)) : e.paginationHtml && a.parent().append(t(e.paginationHtml)), s.find(".dots").on("click", (function() {
                            s.find("div:hidden").show().find("a").unwrap(), t(this).remove()
                        })), a.attr("data-cur-page", e.currentPage), dtGlobals.isoPreloader.stop().fadeOut(300), dtGlobals.loadMoreButton = t(".button-load-more")
                    }
                }))
            }
        })), t(".filter.with-ajax .filter-categories a, .filter.with-ajax .filter-extras a").on("click", (function(e) {
            e.preventDefault();
            var i = t(this).closest(".filter").parent(),
                s = i.find(".wf-container.with-ajax").first(),
                n = i.find(".paginator").first(),
                o = Ge(i),
                a = dtGlobals.isoPreloader;
            s.resetEffects(), a && dtGlobals.isoPreloader.fadeIn(50), $e.launch(t.extend({}, o, {
                contentType: o.pageData.template,
                targetPage: 1,
                paged: 1,
                sender: "filter",
                afterResponce: function(e) {
                    n.length > 0 ? e.paginationHtml ? n.html(t(e.paginationHtml).html()).show() : n.html("").hide() : e.paginationHtml && s.parent().append(t(e.paginationHtml)), n.find(".dots").on("click", (function() {
                        n.find("div:hidden").show().find("a").unwrap(), t(this).remove()
                    })), s.attr("data-cur-page", e.currentPage), dtGlobals.isoPreloader.stop().fadeOut(300), dtGlobals.loadMoreButton = t(".button-load-more")
                }
            }))
        })), void 0 !== dtLocal.themeSettings.lazyLoading && dtLocal.themeSettings.lazyLoading && (dtGlobals.loadMoreButton = t(".button-load-more"), o.on("scroll", (function() {
            Ye()
        })), Ye());
        var Ne, qe = (Ne = {}, function(t, e, i) {
            i || (i = "Don't call this twice without a uniqueId"), Ne[i] && clearTimeout(Ne[i]), Ne[i] = setTimeout(t, e)
        });
        o.on("resize", (function() {
            t(".iso-item, .iso-grid .wf-cell").addClass("animate-position"), qe((function() {
                t(".iso-item, .iso-grid .wf-cell").removeClass("animate-position")
            }), 2500, "")
        }));
        var Ue = t(".dt-isotope"),
            Ve = t(".iso-item:not(.shown):not(.is-visible)"),
            Xe = t(".iso-grid .wf-cell:not(.shown):not(.is-visible), .dt-css-grid .wf-cell:not(.shown):not(.is-visible)");
        (Ue.exists() || Ve.exists() || Xe.exists()) && (setTimeout((function() {
            je()
        }), 100), o.on("scroll", (function() {
            je()
        })));
        var Ze = function() {
                function e(e) {
                    this.config = t.extend({
                        paginatorContainer: null,
                        postLimit: 1,
                        curPage: 1,
                        items: [],
                        filter: null,
                        onPaginate: function() {}
                    }, e)
                }
                return e.prototype.setCurPage = function(t) {
                    this.config.curPage = parseInt(t)
                }, e.prototype.getCurPage = function() {
                    return this.config.curPage
                }, e.prototype.reset = function(t) {
                    this.config.items = t, this.setCurPage(1), this.appendControls(), this._filterByCurPage()
                }, e.prototype.appendControls = function() {}, e.prototype._filterByCurPage = function() {
                    this.showItem(this.config.items)
                }, e.prototype.hideItem = function(t) {
                    t.removeClass("visible").addClass("hidden").hide()
                }, e.prototype.showItem = function(t) {
                    t.addClass("visible").removeClass("hidden").show()
                }, e.prototype.applyLoadingEffects = function() {
                    this.lazyLoadImages(), je()
                }, e.prototype.lazyLoadImages = function() {
                    this.config.items && this.config.items.filter(".visible").IsoLayzrJqInitialisation()
                }, e.prototype.layoutItems = function() {
                    this._filterByCurPage(), this.config.filter && "function" == typeof this.config.filter.layoutItems && this.config.filter.layoutItems()
                }, e
            }(),
            Qe = function() {
                function e(e) {
                    Ze.call(this, e);
                    this.config = t.extend({
                        previousButtonClass: "",
                        previousButtonLabel: "",
                        pagerClass: "",
                        nextButtonClass: "",
                        nextButtonLabel: "",
                        activeClass: "act",
                        pagesToShow: 5
                    }, this.config), this.appendControls(), t("a.act", this.config.paginatorContainer).trigger("click.dtPostsPaginationFilter", {
                        onSetup: !0
                    })
                }
                return e.prototype = new Ze, e.prototype.addEvents = function() {
                    var e = this;
                    t("a", this.config.paginatorContainer).not(".dots").on("click.dtPostsPaginationFilter", {
                        self: this
                    }, (function(t, i) {
                        e.config.onPaginate.call(this, t, i)
                    })), t("a.dots", this.config.paginatorContainer).on("click.dtPostsPaginationDots", {
                        self: this
                    }, (function(t) {
                        t.preventDefault(), t.data.self.config.paginatorContainer.find("div:hidden a").unwrap(), t.data.self.config.paginatorContainer.find("a.dots").remove()
                    }))
                }, e.prototype.appendControls = function() {
                    var e = this.config.paginatorContainer,
                        i = Math.ceil(this.config.items.length / this.config.postLimit),
                        s = this.config.curPage;
                    if (e.empty(), i <= 1) e.addClass("hidden");
                    else {
                        var n, o;
                        e.removeClass("hidden"), 1 !== s && e.prepend('<a href="#" class="' + this.config.previousButtonClass + '" data-page-num="' + (s - 1) + '">' + this.config.previousButtonLabel + "</a>");
                        var a = (5 | this.config.pagesToShow) - 1,
                            r = Math.floor(a / 2),
                            l = Math.ceil(a / 2),
                            d = Math.max(s - r, 1),
                            c = s + l;
                        d <= r && (c = d + a), c > i && (d = Math.max(i - a, 1), c = i);
                        var h = '<a href="javascript:void(0);" class="dots">…</a>',
                            u = t('<div style="display: none;"></div>'),
                            p = t('<div style="display: none;"></div>');
                        for (n = o = 1; 1 <= i ? o <= i : o >= i; n = 1 <= i ? ++o : --o) n < d && 1 != n ? u.append('<a href="#" class="' + this.config.pagerClass + '" data-page-num="' + +n + '">' + n + "</a>") : (n == d && u.children().length && e.append(u).append(t(h)), n > c && n != i ? p.append('<a href="#" class="' + this.config.pagerClass + '" data-page-num="' + +n + '">' + n + "</a>") : (n == i && p.children().length && e.append(p).append(t(h)), e.append('<a href="#" class="' + this.config.pagerClass + '" data-page-num="' + +n + '">' + n + "</a>")));
                        s < i && e.append('<a href="#" class="' + this.config.nextButtonClass + '" data-page-num="' + (s + 1) + '">' + this.config.nextButtonLabel + "</a>"), e.find('a[data-page-num="' + s + '"]').addClass(this.config.activeClass), this.addEvents()
                    }
                }, e.prototype._filterByCurPage = function() {
                    var e = this;
                    this.config.items.get().map((function(i, s) {
                        e._showOnCurPage(s + 1) ? e.showItem(t(i)) : e.hideItem(t(i))
                    }))
                }, e.prototype._showOnCurPage = function(t) {
                    return this.config.postLimit <= 0 || this.config.postLimit * (this.getCurPage() - 1) < t && t <= this.config.postLimit * this.getCurPage()
                }, e.prototype._setAsActive = function(t) {
                    t.addClass("act").siblings().removeClass("act")
                }, e
            }(),
            Ke = function() {
                function e(t) {
                    Ze.call(this, t), this.appendControls(), this.addEvents(), this.layoutItems(), this.applyLoadingEffects()
                }
                return e.prototype = new Ze, e.prototype.addEvents = function() {
                    t("a", this.config.paginatorContainer).on("click.dtPostsPaginationFilter", {
                        self: this
                    }, this.config.onPaginate)
                }, e.prototype.appendControls = function() {
                    var t = this.config.paginatorContainer,
                        e = Math.ceil(this.config.items.length / this.config.postLimit);
                    this.config.curPage < e ? t.removeClass("hidden") : t.addClass("hidden")
                }, e.prototype._filterByCurPage = function() {
                    var e = this,
                        i = e.getCurPage() * e.config.postLimit;
                    this.config.items.get().map((function(s, n) {
                        n < i ? e.showItem(t(s)) : e.hideItem(t(s))
                    }))
                }, e
            }(),
            Je = function() {
                function e(e) {
                    this.config = t.extend({
                        onCategoryFilter: function() {},
                        onOrderFilter: function() {},
                        onOrderByFilter: function() {},
                        categoryContainer: null,
                        orderContainer: null,
                        orderByContainer: null,
                        postsContainer: null,
                        order: "desc",
                        orderBy: "date",
                        curCategory: "*"
                    }, e), this.addEvents(), "*" !== this.config.curCategory && this._filterPosts()
                }
                return e.prototype.addEvents = function() {
                    var e = this;
                    this.config.categoryContainer && t("a", this.config.categoryContainer).on("click.dtPostsCategoryFilter", {
                        self: this
                    }, (function(t) {
                        e.config.onCategoryFilter.call(this, t)
                    })), this.config.orderContainer && t("a", this.config.orderContainer).on("click.dtPostsOrderFilter", {
                        self: this
                    }, (function(t) {
                        e.config.onOrderFilter.call(this, t)
                    })), this.config.orderByContainer && t("a", this.config.orderByContainer).on("click.dtPostsOrderByFilter", {
                        self: this
                    }, (function(t) {
                        e.config.onOrderByFilter.call(this, t)
                    }))
                }, e.prototype.setOrder = function(t) {
                    this.config.order = t
                }, e.prototype.setOrderBy = function(t) {
                    this.config.orderBy = t
                }, e.prototype.setCurCategory = function(t) {
                    this.config.curCategory = t
                }, e.prototype.getFilteredItems = function() {
                    return t(this.config.postsContainer.isotope("getFilteredItemElements"))
                }, e.prototype.getItems = function() {
                    return t(this.config.postsContainer.isotope("getItemElements"))
                }, e.prototype.layoutItems = function() {
                    this.layout(), this.config.postsContainer.trigger("updateReady")
                }, e.prototype.layout = function() {
                    this.config.postsContainer.isotope("layout")
                }, e.prototype.scrollToTopOfContainer = function(e, i) {
                    var s = this.config.postsContainer.parent(),
                        n = t(".phantom-sticky").exists(),
                        o = t(".sticky-top-line").exists(),
                        a = s.attr("data-scroll-offset") ? parseInt(s.attr("data-scroll-offset")) : 0;
                    if (n || o) var r = t(".masthead:not(.side-header)").height();
                    else if (t(".phantom-fade").exists() || t(".phantom-slide").exists()) r = t("#phantom").height();
                    else r = 0;
                    !s.hasClass("enable-pagination-scroll") && s.hasClass("the7-elementor-widget") || t("html, body").animate({
                        scrollTop: s.offset().top - r - 50 + a
                    }, 400, e ? e.bind(i | this) : void 0)
                }, e.prototype._filterPosts = function() {
                    this.config.postsContainer && this.config.postsContainer.isotope({
                        filter: this.config.curCategory,
                        sortAscending: "asc" == this.config.order,
                        sortBy: this.config.orderBy
                    })
                }, e.prototype._setAsActive = function(t) {
                    t.addClass("act").siblings().removeClass("act")
                }, e
            }(),
            ti = function() {
                function e(e) {
                    Je.call(this, e);
                    this.config = t.extend({
                        showOnCurPage: function() {}
                    }, this.config), this.items = this.config.postsContainer.find(".wf-cell"), this.filteredItems = this.items
                }
                return e.prototype = new Je, e.prototype.getFilteredItems = function() {
                    return this.filteredItems
                }, e.prototype.getItems = function() {
                    return this.items
                }, e.prototype.layout = function() {
                    var e = this;
                    e.items.css("display", "none");
                    var i = 0,
                        s = [];
                    e.filteredItems.each((function() {
                        e.config.showOnCurPage(++i) && (t(this).css("display", "block"), s.push(this))
                    })), s = t(s), e.config.postsContainer.data("visibleItems", s), e.config.postsContainer.collage({
                        images: s
                    })
                }, e.prototype._filterPosts = function() {
                    var t = this;
                    t.filteredItems = t.items.filter(t.config.curCategory)
                }, e
            }();
        ! function() {
            function e(t) {
                Je.call(this, t), this.items = this.config.postsContainer.find(".wf-cell"), this.filteredItems = this.items
            }
            e.prototype = new Je, e.prototype.getFilteredItems = function() {
                return this.filteredItems
            }, e.prototype.getItems = function() {
                return this.items
            }, e.prototype.layout = function() {}, e.prototype._filterPosts = function() {
                this.items.hide(), this.filteredItems = this._sortItems(this.items.filter(this.config.curCategory)), this.filteredItems.detach().prependTo(this.config.postsContainer), this.filteredItems.show()
            }, e.prototype._sortItems = function(e) {
                var i = this.config.orderBy,
                    s = this.config.order,
                    n = t([]);
                return n.$nodesCache = t([]), e.each((function() {
                    var e = t(this);
                    n.push({
                        node: this,
                        $node: e,
                        name: e.attr("data-name"),
                        date: new Date(e.attr("data-date"))
                    })
                })), "date" === i && "desc" === s ? n.sort((function(t, e) {
                    return e.date - t.date
                })) : "date" === i && "asc" === s ? n.sort((function(t, e) {
                    return t.date - e.date
                })) : "name" === i && "desc" === s ? n.sort((function(t, e) {
                    var i = t.name.toLowerCase(),
                        s = e.name.toLowerCase();
                    return i > s ? -1 : i < s ? 1 : 0
                })) : "name" === i && "asc" === s && n.sort((function(t, e) {
                    var i = t.name.toLowerCase(),
                        s = e.name.toLowerCase();
                    return i < s ? -1 : i > s ? 1 : 0
                })), n.each((function() {
                    n.$nodesCache.push(this.node)
                })), n.$nodesCache
            }
        }();
        t(".dt-shortcode.with-isotope").each((function() {
            var e = t(this),
                i = e.find(".iso-grid, .iso-container"),
                s = i.hasClass("dt-isotope"),
                n = {
                    postsContainer: i,
                    categoryContainer: e.find(".filter-categories"),
                    curCategory: e.find(".filter-categories a.act").attr("data-filter")
                };
            if (s) {
                var o = e.find(".filter-extras .filter-sorting a.act").attr("data-sort");
                o || (o = e.find(".filter-categories").attr("data-default-order"));
                var a = e.find(".filter-extras .filter-by a.act").attr("data-by");
                a || (a = e.find(".filter-categories").attr("data-default-orderby")), t.extend(n, {
                    order: o,
                    orderBy: a,
                    orderByContainer: e.find(".filter-extras .filter-by"),
                    orderContainer: e.find(".filter-extras .filter-sorting"),
                    onCategoryFilter: function(e) {
                        e.preventDefault();
                        var i = t(this),
                            s = e.data.self;
                        s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setCurCategory(i.attr("data-filter")), s._filterPosts(), l.hideItem(s.getItems()), l.reset(s.getFilteredItems()), s.layout(), s.config.postsContainer.IsoLayzrInitialisation(), Ye(), je()
                    },
                    onOrderFilter: function(e) {
                        e.preventDefault();
                        var i = t(this),
                            s = e.data.self;
                        s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setOrder(i.attr("data-sort")), s._filterPosts(), l.hideItem(s.getItems()), l.reset(s.getFilteredItems()), s.layout(), s.config.postsContainer.IsoLayzrInitialisation(), Ye(), je()
                    },
                    onOrderByFilter: function(e) {
                        e.preventDefault();
                        var i = t(this),
                            s = e.data.self;
                        s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setOrderBy(i.attr("data-by")), s._filterPosts(), l.hideItem(s.getItems()), l.reset(s.getFilteredItems()), s.layout(), s.config.postsContainer.IsoLayzrInitialisation(), Ye(), je()
                    }
                });
                var r = new Je(n),
                    l = new Qe({
                        previousButtonClass: "nav-prev filter-item",
                        previousButtonLabel: "←",
                        nextButtonClass: "nav-next filter-item",
                        nextButtonLabel: "→",
                        postLimit: i.attr("data-posts-per-page"),
                        curPage: 1,
                        pagesToShow: i.hasClass("show-all-pages") ? 999 : 5,
                        items: r.getFilteredItems(),
                        paginatorContainer: e.find(".paginator"),
                        onPaginate: function(e, i) {
                            e.preventDefault();
                            var s = t(this),
                                n = e.data.self;
                            n._setAsActive(s), n.setCurPage(s.attr("data-page-num")), n._filterByCurPage(), r.layout(), i || (n.appendControls(), r.scrollToTopOfContainer())
                        }
                    })
            } else {
                r = new ti(n), l = new Qe({
                    previousButtonClass: "nav-prev filter-item",
                    previousButtonLabel: "←",
                    nextButtonClass: "nav-next filter-item",
                    nextButtonLabel: "→",
                    postLimit: i.attr("data-posts-per-page"),
                    curPage: 1,
                    pagesToShow: i.hasClass("show-all-pages") ? 999 : 5,
                    items: r.getFilteredItems(),
                    paginatorContainer: e.find(".paginator")
                });
                r.config.onCategoryFilter = function(e) {
                    e.preventDefault();
                    var i = t(this),
                        s = e.data.self;
                    s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setCurCategory(i.attr("data-filter")), s._filterPosts(), l.hideItem(s.getItems()), l.reset(s.getFilteredItems()), s.layout(), Ye(), je()
                }, r.config.showOnCurPage = function(t) {
                    return l._showOnCurPage(t)
                }, l.config.onPaginate = function(e, i) {
                    e.preventDefault();
                    var s = t(this),
                        n = e.data.self;
                    n._setAsActive(s), n.setCurPage(s.attr("data-page-num")), n._filterByCurPage(), r.layout(), i || (n.appendControls(), r.scrollToTopOfContainer())
                }, t("a.act", l.config.paginatorContainer).trigger("click.dtPostsPaginationFilter", {
                    onSetup: !0
                })
            }
        })), window.the7ApplyMasonryJsFiltering = function(e) {
            var i = e.find(".iso-grid, .iso-container"),
                s = e.find(".paginator"),
                n = e.hasClass("lazy-loading-mode"),
                a = e.find(".filter-extras .filter-sorting a.act").attr("data-sort");
            a || (a = e.find(".filter-categories").attr("data-default-order"));
            var r = e.find(".filter-extras .filter-by a.act").attr("data-by");
            r || (r = e.find(".filter-categories").attr("data-default-orderby")), e.is(".content-rollover-layout-list:not(.disable-layout-hover)") && i.on("updateReady", (function() {
                t(this).find(".wf-cell.visible .post-entry-wrapper").clickOverlayGradient()
            }));
            var l = {
                    order: a,
                    orderBy: r,
                    curCategory: e.find(".filter-categories a.act").attr("data-filter"),
                    postsContainer: i,
                    categoryContainer: e.find(".filter-categories"),
                    orderByContainer: e.find(".filter-extras .filter-by"),
                    orderContainer: e.find(".filter-extras .filter-sorting"),
                    onCategoryFilter: function(e) {
                        e.preventDefault();
                        var i = t(this),
                            s = e.data.self;
                        s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setCurCategory(i.attr("data-filter")), s._filterPosts(), c.hideItem(s.getItems()), c.reset(s.getFilteredItems()), s.layoutItems(), s.config.postsContainer.IsoLayzrInitialisation(), g(), je()
                    },
                    onOrderFilter: function(e) {
                        e.preventDefault();
                        var i = t(this),
                            s = e.data.self;
                        s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setOrder(i.attr("data-sort")), s._filterPosts(), c.hideItem(s.getItems()), c.reset(s.getFilteredItems()), s.layoutItems(), s.config.postsContainer.IsoLayzrInitialisation(), g(), je()
                    },
                    onOrderByFilter: function(e) {
                        e.preventDefault();
                        var i = t(this),
                            s = e.data.self;
                        s.config.postsContainer.resetEffects(), s._setAsActive(i), s.setOrderBy(i.attr("data-by")), s._filterPosts(), c.hideItem(s.getItems()), c.reset(s.getFilteredItems()), s.layoutItems(), s.config.postsContainer.IsoLayzrInitialisation(), g(), je()
                    }
                },
                d = new Je(l);
            switch (e.attr("data-pagination-mode")) {
                case "load-more":
                    var c = new Ke({
                        postLimit: e.attr("data-post-limit"),
                        curPage: 1,
                        items: d.getFilteredItems(),
                        filter: d,
                        paginatorContainer: s,
                        onPaginate: function(t) {
                            var e = t.data.self;
                            t.preventDefault(), e.setCurPage(e.getCurPage() + 1), e.layoutItems(), e.applyLoadingEffects(), e.appendControls()
                        }
                    });
                    break;
                case "pages":
                    var h = "←",
                        u = "→",
                        p = "page";
                    e.is("[class*='the7_elements-']") && (h = "←", u = "→", p = "page-numbers filter-item");
                    c = new Qe({
                        previousButtonClass: "nav-prev filter-item",
                        previousButtonLabel: h,
                        nextButtonClass: "nav-next filter-item",
                        nextButtonLabel: u,
                        pagerClass: p,
                        postLimit: e.attr("data-post-limit"),
                        curPage: 1,
                        pagesToShow: e.hasClass("show-all-pages") ? 999 : 5,
                        items: d.getFilteredItems(),
                        filter: d,
                        paginatorContainer: s,
                        onPaginate: function(e, i) {
                            var s = t(this),
                                n = e.data.self;
                            e.preventDefault(), n._setAsActive(s), n.setCurPage(s.attr("data-page-num")), n.layoutItems(), i || (n.appendControls(), d.scrollToTopOfContainer()), n.applyLoadingEffects()
                        }
                    });
                    break;
                default:
                    c = new Ze
            }

            function f() {
                var t = s.find(".button-load-more"),
                    e = t.offset();
                s.hasClass("hidden") && m(), e && o.scrollTop() > (e.top - o.height()) / 2 && t.trigger("click")
            }

            function m() {
                o.off("scroll", f)
            }

            function g() {
                n && (m(), o.on("scroll", f), f())
            }
            g()
        }, t(".mode-masonry.jquery-filter, .mode-grid.jquery-filter:not(.dt-css-grid-wrap)").one("IsoReady", (function() {
            the7ApplyMasonryJsFiltering(t(this))
        })), void 0 !== v && (t.fn.owlCarousel = v)
    }))
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/themes/dt-the7/js/main.min.js?ver=11.2.0-b11210853 ] [ " + e.stack + " ]");
}
try { /*!pro-elements - v3.7.3 - 31-07-2022*/
    (() => {
        "use strict";
        var e, r, _, a = {},
            n = {};

        function __webpack_require__(e) {
            var r = n[e];
            if (void 0 !== r) return r.exports;
            var _ = n[e] = {
                exports: {}
            };
            return a[e](_, _.exports, __webpack_require__), _.exports
        }
        __webpack_require__.m = a, e = [], __webpack_require__.O = (r, _, a, n) => {
            if (!_) {
                var c = 1 / 0;
                for (o = 0; o < e.length; o++) {
                    for (var [_, a, n] = e[o], i = !0, t = 0; t < _.length; t++)(!1 & n || c >= n) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[t]))) ? _.splice(t--, 1) : (i = !1, n < c && (c = n));
                    if (i) {
                        e.splice(o--, 1);
                        var b = a();
                        void 0 !== b && (r = b)
                    }
                }
                return r
            }
            n = n || 0;
            for (var o = e.length; o > 0 && e[o - 1][2] > n; o--) e[o] = e[o - 1];
            e[o] = [_, a, n]
        }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r), r)), [])), __webpack_require__.u = e => 714 === e ? "code-highlight.28a979661569ddbbf60d.bundle.min.js" : 721 === e ? "video-playlist.20d0d34e5188d18f240e.bundle.min.js" : 256 === e ? "paypal-button.3d0d5af7df85963df32c.bundle.min.js" : 156 === e ? "stripe-button.7c183c3003a91f048606.bundle.min.js" : 241 === e ? "progress-tracker.e19e2547639d7d9dac17.bundle.min.js" : 26 === e ? "animated-headline.ffb4bb4ce1b16b11446d.bundle.min.js" : 534 === e ? "media-carousel.0ff23fb71c8407fa6255.bundle.min.js" : 369 === e ? "carousel.36aa659d3ca597704333.bundle.min.js" : 804 === e ? "countdown.b0ef6392ec4ff09ca2f2.bundle.min.js" : 888 === e ? "hotspot.6ab1751404c381bfe390.bundle.min.js" : 680 === e ? "form.72b77b99d67b130634d2.bundle.min.js" : 121 === e ? "gallery.9c61bb9957e10e6d7bda.bundle.min.js" : 288 === e ? "lottie.147bf20db94f86cc4295.bundle.min.js" : 42 === e ? "nav-menu.3de49ba5ef86f9a22ff5.bundle.min.js" : 50 === e ? "popup.483b906ddaa1af17ff14.bundle.min.js" : 985 === e ? "load-more.80eb3caec79a44347d74.bundle.min.js" : 287 === e ? "posts.4e0ec95059abf8573a38.bundle.min.js" : 824 === e ? "portfolio.c62d64841537ab8eb283.bundle.min.js" : 58 === e ? "share-buttons.0bdd88c45462dfb2b073.bundle.min.js" : 114 === e ? "slides.8e4c7cc58ad39c5630ac.bundle.min.js" : 443 === e ? "social.2d2e44e8608690943f29.bundle.min.js" : 838 === e ? "table-of-contents.a695231ee79a390b7620.bundle.min.js" : 685 === e ? "archive-posts.bf30b7cf2d022d6e0828.bundle.min.js" : 858 === e ? "search-form.a396372f407d3c16a0ef.bundle.min.js" : 102 === e ? "woocommerce-menu-cart.37905d32f638831bc09d.bundle.min.js" : 1 === e ? "woocommerce-purchase-summary.46445ab1120a8c28c05c.bundle.min.js" : 124 === e ? "woocommerce-checkout-page.b18af78282979b6f74e4.bundle.min.js" : 859 === e ? "woocommerce-cart.fc30c6cb753d4098eff5.bundle.min.js" : 979 === e ? "woocommerce-my-account.3ee10d01e625dad87f73.bundle.min.js" : 497 === e ? "woocommerce-notices.da27b22c491f7cbe9158.bundle.min.js" : void 0, __webpack_require__.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), r = {}, _ = "elementor-pro:", __webpack_require__.l = (e, a, n, c) => {
            if (r[e]) r[e].push(a);
            else {
                var i, t;
                if (void 0 !== n)
                    for (var b = document.getElementsByTagName("script"), o = 0; o < b.length; o++) {
                        var u = b[o];
                        if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == _ + n) {
                            i = u;
                            break
                        }
                    }
                i || (t = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, __webpack_require__.nc && i.setAttribute("nonce", __webpack_require__.nc), i.setAttribute("data-webpack", _ + n), i.src = e), r[e] = [a];
                var onScriptComplete = (_, a) => {
                        i.onerror = i.onload = null, clearTimeout(d);
                        var n = r[e];
                        if (delete r[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), _) return _(a)
                    },
                    d = setTimeout(onScriptComplete.bind(null, void 0, {
                        type: "timeout",
                        target: i
                    }), 12e4);
                i.onerror = onScriptComplete.bind(null, i.onerror), i.onload = onScriptComplete.bind(null, i.onload), t && document.head.appendChild(i)
            }
        }, (() => {
            var e;
            __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
            var r = __webpack_require__.g.document;
            if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
                var _ = r.getElementsByTagName("script");
                _.length && (e = _[_.length - 1].src)
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e
        })(), (() => {
            var e = {
                396: 0
            };
            __webpack_require__.f.j = (r, _) => {
                var a = __webpack_require__.o(e, r) ? e[r] : void 0;
                if (0 !== a)
                    if (a) _.push(a[2]);
                    else if (396 != r) {
                    var n = new Promise(((_, n) => a = e[r] = [_, n]));
                    _.push(a[2] = n);
                    var c = __webpack_require__.p + __webpack_require__.u(r),
                        i = new Error;
                    __webpack_require__.l(c, (_ => {
                        if (__webpack_require__.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                            var n = _ && ("load" === _.type ? "missing" : _.type),
                                c = _ && _.target && _.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + c + ")", i.name = "ChunkLoadError", i.type = n, i.request = c, a[1](i)
                        }
                    }), "chunk-" + r, r)
                } else e[r] = 0
            }, __webpack_require__.O.j = r => 0 === e[r];
            var webpackJsonpCallback = (r, _) => {
                    var a, n, [c, i, t] = _,
                        b = 0;
                    if (c.some((r => 0 !== e[r]))) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (t) var o = t(__webpack_require__)
                    }
                    for (r && r(_); b < c.length; b++) n = c[b], __webpack_require__.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                    return __webpack_require__.O(o)
                },
                r = self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || [];
            r.forEach(webpackJsonpCallback.bind(null, 0)), r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
        })()
    })()
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/pro-elements/assets/js/webpack-pro.runtime.min.js?ver=3.7.3 ] [ " + e.stack + " ]");
}
try { /*!elementor - v3.7.8 - 02-10-2022*/
    (() => {
        "use strict";
        var e, r, _, t, i, a = {},
            n = {};

        function __webpack_require__(e) {
            var r = n[e];
            if (void 0 !== r) return r.exports;
            var _ = n[e] = {
                exports: {}
            };
            return a[e](_, _.exports, __webpack_require__), _.exports
        }
        __webpack_require__.m = a, e = [], __webpack_require__.O = (r, _, t, i) => {
            if (!_) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [_, t, i] = e[u], n = !0, c = 0; c < _.length; c++)(!1 & i || a >= i) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[c]))) ? _.splice(c--, 1) : (n = !1, i < a && (a = i));
                    if (n) {
                        e.splice(u--, 1);
                        var o = t();
                        void 0 !== o && (r = o)
                    }
                }
                return r
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [_, t, i]
        }, _ = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, __webpack_require__.t = function(e, t) {
            if (1 & t && (e = this(e)), 8 & t) return e;
            if ("object" == typeof e && e) {
                if (4 & t && e.__esModule) return e;
                if (16 & t && "function" == typeof e.then) return e
            }
            var i = Object.create(null);
            __webpack_require__.r(i);
            var a = {};
            r = r || [null, _({}), _([]), _(_)];
            for (var n = 2 & t && e;
                "object" == typeof n && !~r.indexOf(n); n = _(n)) Object.getOwnPropertyNames(n).forEach((r => a[r] = () => e[r]));
            return a.default = () => e, __webpack_require__.d(i, a), i
        }, __webpack_require__.d = (e, r) => {
            for (var _ in r) __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
                enumerable: !0,
                get: r[_]
            })
        }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r), r)), [])), __webpack_require__.u = e => 723 === e ? "lightbox.2d166d71ba2a6a9e66fd.bundle.min.js" : 48 === e ? "text-path.b1be1b4899a9ff20217b.bundle.min.js" : 209 === e ? "accordion.be7db2e47c14ed1141fb.bundle.min.js" : 745 === e ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js" : 120 === e ? "counter.02cef29c589e742d4c8c.bundle.min.js" : 192 === e ? "progress.ca55d33bb06cee4e6f02.bundle.min.js" : 520 === e ? "tabs.2327c8f9bd0a558456b9.bundle.min.js" : 181 === e ? "toggle.933918840481dcc64242.bundle.min.js" : 791 === e ? "video.fab0f05f6306583e8ff8.bundle.min.js" : 268 === e ? "image-carousel.e02695895b33b77d89de.bundle.min.js" : 357 === e ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js" : 52 === e ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js" : 413 === e ? "container.0d946aa461a67ecc166a.bundle.min.js" : void 0, __webpack_require__.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, i = "elementor:", __webpack_require__.l = (e, r, _, a) => {
            if (t[e]) t[e].push(r);
            else {
                var n, c;
                if (void 0 !== _)
                    for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                        var b = o[u];
                        if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == i + _) {
                            n = b;
                            break
                        }
                    }
                n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc), n.setAttribute("data-webpack", i + _), n.src = e), t[e] = [r];
                var onScriptComplete = (r, _) => {
                        n.onerror = n.onload = null, clearTimeout(p);
                        var i = t[e];
                        if (delete t[e], n.parentNode && n.parentNode.removeChild(n), i && i.forEach((e => e(_))), r) return r(_)
                    },
                    p = setTimeout(onScriptComplete.bind(null, void 0, {
                        type: "timeout",
                        target: n
                    }), 12e4);
                n.onerror = onScriptComplete.bind(null, n.onerror), n.onload = onScriptComplete.bind(null, n.onload), c && document.head.appendChild(n)
            }
        }, __webpack_require__.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, (() => {
            var e;
            __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
            var r = __webpack_require__.g.document;
            if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
                var _ = r.getElementsByTagName("script");
                _.length && (e = _[_.length - 1].src)
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e
        })(), (() => {
            var e = {
                162: 0
            };
            __webpack_require__.f.j = (r, _) => {
                var t = __webpack_require__.o(e, r) ? e[r] : void 0;
                if (0 !== t)
                    if (t) _.push(t[2]);
                    else if (162 != r) {
                    var i = new Promise(((_, i) => t = e[r] = [_, i]));
                    _.push(t[2] = i);
                    var a = __webpack_require__.p + __webpack_require__.u(r),
                        n = new Error;
                    __webpack_require__.l(a, (_ => {
                        if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                            var i = _ && ("load" === _.type ? "missing" : _.type),
                                a = _ && _.target && _.target.src;
                            n.message = "Loading chunk " + r + " failed.\n(" + i + ": " + a + ")", n.name = "ChunkLoadError", n.type = i, n.request = a, t[1](n)
                        }
                    }), "chunk-" + r, r)
                } else e[r] = 0
            }, __webpack_require__.O.j = r => 0 === e[r];
            var webpackJsonpCallback = (r, _) => {
                    var t, i, [a, n, c] = _,
                        o = 0;
                    if (a.some((r => 0 !== e[r]))) {
                        for (t in n) __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
                        if (c) var u = c(__webpack_require__)
                    }
                    for (r && r(_); o < a.length; o++) i = a[o], __webpack_require__.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                    return __webpack_require__.O(u)
                },
                r = self.webpackChunkelementor = self.webpackChunkelementor || [];
            r.forEach(webpackJsonpCallback.bind(null, 0)), r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
        })()
    })()
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.7.8 ] [ " + e.stack + " ]");
}
try { /*!elementor - v3.7.8 - 02-10-2022*/
    (self.webpackChunkelementor = self.webpackChunkelementor || []).push([
        [354], {
            381: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = (e, t) => {
                    t = Array.isArray(t) ? t : [t];
                    for (const r of t)
                        if (e.constructor.name === r.prototype[Symbol.toStringTag]) return !0;
                    return !1
                }
            },
            8135: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.ViewModule {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                elements: ".elementor-element",
                                nestedDocumentElements: ".elementor .elementor-element"
                            },
                            classes: {
                                editMode: "elementor-edit-mode"
                            }
                        }
                    }
                    getDefaultElements() {
                        const e = this.getSettings("selectors");
                        return {
                            $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                        }
                    }
                    getDocumentSettings(e) {
                        let t;
                        if (this.isEdit) {
                            t = {};
                            const e = elementor.settings.page.model;
                            jQuery.each(e.getActiveControls(), (r => {
                                t[r] = e.attributes[r]
                            }))
                        } else t = this.$element.data("elementor-settings") || {};
                        return this.getItems(t, e)
                    }
                    runElementsHandlers() {
                        this.elements.$elements.each(((e, t) => elementorFrontend.elementsHandler.runReadyTrigger(t)))
                    }
                    onInit() {
                        this.$element = this.getSettings("$element"), super.onInit(), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.on("document:loaded", (() => {
                            elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                        })) : this.runElementsHandlers()
                    }
                    onSettingsChange() {}
                }
                t.default = _default
            },
            2821: (e, t, r) => {
                "use strict";
                var n = r(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = n(r(3090));
                class SwiperHandlerBase extends o.default {
                    getInitialSlide() {
                        const e = this.getEditSettings();
                        return e.activeItemIndex ? e.activeItemIndex - 1 : 0
                    }
                    getSlidesCount() {
                        return this.elements.$slides.length
                    }
                    togglePauseOnHover(e) {
                        e ? this.elements.$swiperContainer.on({
                            mouseenter: () => {
                                this.swiper.autoplay.stop()
                            },
                            mouseleave: () => {
                                this.swiper.autoplay.start()
                            }
                        }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
                    }
                    handleKenBurns() {
                        const e = this.getSettings();
                        this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive), this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(), this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground), this.$activeImageBg.addClass(e.classes.kenBurnsActive)
                    }
                }
                t.default = SwiperHandlerBase
            },
            3090: e => {
                "use strict";
                e.exports = elementorModules.ViewModule.extend({
                    $element: null,
                    editorListeners: null,
                    onElementChange: null,
                    onEditSettingsChange: null,
                    onPageSettingsChange: null,
                    isEdit: null,
                    __construct(e) {
                        this.isActive(e) && (this.$element = e.$element, this.isEdit = this.$element.hasClass("elementor-element-edit-mode"), this.isEdit && this.addEditorListeners())
                    },
                    isActive: () => !0,
                    findElement(e) {
                        var t = this.$element;
                        return t.find(e).filter((function() {
                            return jQuery(this).parent().closest(".elementor-element").is(t)
                        }))
                    },
                    getUniqueHandlerID(e, t) {
                        return e || (e = this.getModelCID()), t || (t = this.$element), e + t.attr("data-element_type") + this.getConstructorID()
                    },
                    initEditorListeners() {
                        var e = this;
                        if (e.editorListeners = [{
                                event: "element:destroy",
                                to: elementor.channels.data,
                                callback(t) {
                                    t.cid === e.getModelCID() && e.onDestroy()
                                }
                            }], e.onElementChange) {
                            const t = e.getWidgetType() || e.getElementType();
                            let r = "change";
                            "global" !== t && (r += ":" + t), e.editorListeners.push({
                                event: r,
                                to: elementor.channels.editor,
                                callback(t, r) {
                                    e.getUniqueHandlerID(r.model.cid, r.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, r)
                                }
                            })
                        }
                        e.onEditSettingsChange && e.editorListeners.push({
                            event: "change:editSettings",
                            to: elementor.channels.editor,
                            callback(t, r) {
                                if (r.model.cid !== e.getModelCID()) return;
                                const n = Object.keys(t.changed)[0];
                                e.onEditSettingsChange(n, t.changed[n])
                            }
                        }), ["page"].forEach((function(t) {
                            var r = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                            e[r] && e.editorListeners.push({
                                event: "change",
                                to: elementor.settings[t].model,
                                callback(t) {
                                    e[r](t.changed)
                                }
                            })
                        }))
                    },
                    getEditorListeners() {
                        return this.editorListeners || this.initEditorListeners(), this.editorListeners
                    },
                    addEditorListeners() {
                        var e = this.getUniqueHandlerID();
                        this.getEditorListeners().forEach((function(t) {
                            elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                        }))
                    },
                    removeEditorListeners() {
                        var e = this.getUniqueHandlerID();
                        this.getEditorListeners().forEach((function(t) {
                            elementorFrontend.removeListeners(e, t.event, null, t.to)
                        }))
                    },
                    getElementType() {
                        return this.$element.data("element_type")
                    },
                    getWidgetType() {
                        const e = this.$element.data("widget_type");
                        if (e) return e.split(".")[0]
                    },
                    getID() {
                        return this.$element.data("id")
                    },
                    getModelCID() {
                        return this.$element.data("model-cid")
                    },
                    getElementSettings(e) {
                        let t = {};
                        const r = this.getModelCID();
                        if (this.isEdit && r) {
                            const e = elementorFrontend.config.elements.data[r],
                                n = e.attributes;
                            let o = n.widgetType || n.elType;
                            n.isInner && (o = "inner-" + o);
                            let i = elementorFrontend.config.elements.keys[o];
                            i || (i = elementorFrontend.config.elements.keys[o] = [], jQuery.each(e.controls, ((e, t) => {
                                t.frontend_available && i.push(e)
                            }))), jQuery.each(e.getActiveControls(), (function(e) {
                                if (-1 !== i.indexOf(e)) {
                                    let r = n[e];
                                    r.toJSON && (r = r.toJSON()), t[e] = r
                                }
                            }))
                        } else t = this.$element.data("settings") || {};
                        return this.getItems(t, e)
                    },
                    getEditSettings(e) {
                        var t = {};
                        return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(t, e)
                    },
                    getCurrentDeviceSetting(e) {
                        return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
                    },
                    onInit() {
                        this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
                    },
                    onDestroy() {
                        this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents()
                    }
                })
            },
            6412: (e, t, r) => {
                "use strict";
                var n = r(3203),
                    o = n(r(5955)),
                    i = n(r(8135)),
                    s = n(r(5658)),
                    a = n(r(3090)),
                    u = n(r(2821));
                o.default.frontend = {
                    Document: i.default,
                    tools: {
                        StretchElement: s.default
                    },
                    handlers: {
                        Base: a.default,
                        SwiperBase: u.default
                    }
                }
            },
            5658: e => {
                "use strict";
                e.exports = elementorModules.ViewModule.extend({
                    getDefaultSettings: () => ({
                        element: null,
                        direction: elementorFrontend.config.is_rtl ? "right" : "left",
                        selectors: {
                            container: window
                        }
                    }),
                    getDefaultElements() {
                        return {
                            $element: jQuery(this.getSettings("element"))
                        }
                    },
                    stretch() {
                        var e, t = this.getSettings("selectors.container");
                        try {
                            e = jQuery(t)
                        } catch (e) {}
                        e && e.length || (e = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
                        var r = this.elements.$element,
                            n = e.innerWidth(),
                            o = r.offset().left,
                            i = "fixed" === r.css("position"),
                            s = i ? 0 : o;
                        if (window !== e[0]) {
                            var a = e.offset().left;
                            i && (s = a), o > a && (s = o - a)
                        }
                        i || (elementorFrontend.config.is_rtl && (s = n - (r.outerWidth() + s)), s = -s);
                        var u = {};
                        u.width = n + "px", u[this.getSettings("direction")] = s + "px", r.css(u)
                    },
                    reset() {
                        var e = {
                            width: ""
                        };
                        e[this.getSettings("direction")] = "", this.elements.$element.css(e)
                    }
                })
            },
            2618: (e, t, r) => {
                "use strict";
                var n = r(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, r(740);
                var o = n(r(7597)),
                    i = n(r(381));
                class ArgsObject extends o.default {
                    static getInstanceType() {
                        return "ArgsObject"
                    }
                    constructor(e) {
                        super(), this.args = e
                    }
                    requireArgument(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                        if (!Object.prototype.hasOwnProperty.call(t, e)) throw Error(`${e} is required.`)
                    }
                    requireArgumentType(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                        if (this.requireArgument(e, r), typeof r[e] !== t) throw Error(`${e} invalid type: ${t}.`)
                    }
                    requireArgumentInstance(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                        if (this.requireArgument(e, r), !(r[e] instanceof t || (0, i.default)(r[e], t))) throw Error(`${e} invalid instance.`)
                    }
                    requireArgumentConstructor(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                        if (this.requireArgument(e, r), r[e].constructor.toString() !== t.prototype.constructor.toString()) throw Error(`${e} invalid constructor type.`)
                    }
                }
                t.default = ArgsObject
            },
            869: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = t.ForceMethodImplementation = void 0, r(740), r(5623);
                class ForceMethodImplementation extends Error {
                    constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`, t), Object.keys(t).length && console.error(t), Error.captureStackTrace(this, ForceMethodImplementation)
                    }
                }
                t.ForceMethodImplementation = ForceMethodImplementation;
                t.default = e => {
                    const t = Error().stack.split("\n")[2].trim(),
                        r = t.startsWith("at new") ? "constructor" : t.split(" ")[1],
                        n = {};
                    if (n.functionName = r, n.fullName = r, n.functionName.includes(".")) {
                        const e = n.functionName.split(".");
                        n.className = e[0], n.functionName = e[1]
                    } else n.isStatic = !0;
                    throw new ForceMethodImplementation(n, e)
                }
            },
            7597: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class InstanceType {
                    static[Symbol.hasInstance](e) {
                        let t = super[Symbol.hasInstance](e);
                        if (e && !e.constructor.getInstanceType) return t;
                        if (e && (e.instanceTypes || (e.instanceTypes = []), t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0), t)) {
                            const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType(); - 1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                        }
                        return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())), t
                    }
                    static getInstanceType() {
                        elementorModules.ForceMethodImplementation()
                    }
                    constructor() {
                        let e = new.target;
                        const t = [];
                        for (; e.__proto__ && e.__proto__.name;) t.push(e.__proto__), e = e.__proto__;
                        t.reverse().forEach((e => this instanceof e))
                    }
                }
                t.default = InstanceType
            },
            1192: (e, t, r) => {
                "use strict";
                r(740);
                const Module = function() {
                    const e = jQuery,
                        t = arguments,
                        r = this,
                        n = {};
                    let o;
                    const ensureClosureMethods = function() {
                            e.each(r, (function(e) {
                                const t = r[e];
                                "function" == typeof t && (r[e] = function() {
                                    return t.apply(r, arguments)
                                })
                            }))
                        },
                        initSettings = function() {
                            o = r.getDefaultSettings();
                            const n = t[0];
                            n && e.extend(!0, o, n)
                        },
                        init = function() {
                            r.__construct.apply(r, t), ensureClosureMethods(), initSettings(), r.trigger("init")
                        };
                    this.getItems = function(e, t) {
                        if (t) {
                            const r = t.split("."),
                                n = r.splice(0, 1);
                            if (!r.length) return e[n];
                            if (!e[n]) return;
                            return this.getItems(e[n], r.join("."))
                        }
                        return e
                    }, this.getSettings = function(e) {
                        return this.getItems(o, e)
                    }, this.setSettings = function(t, n, i) {
                        if (i || (i = o), "object" == typeof t) return e.extend(i, t), r;
                        const s = t.split("."),
                            a = s.splice(0, 1);
                        return s.length ? (i[a] || (i[a] = {}), r.setSettings(s.join("."), n, i[a])) : (i[a] = n, r)
                    }, this.getErrorMessage = function(e, t) {
                        let r;
                        if ("forceMethodImplementation" === e) r = `The method '${t}' must to be implemented in the inheritor child.`;
                        else r = "An error occurs";
                        return r
                    }, this.forceMethodImplementation = function(e) {
                        throw new Error(this.getErrorMessage("forceMethodImplementation", e))
                    }, this.on = function(t, o) {
                        if ("object" == typeof t) return e.each(t, (function(e) {
                            r.on(e, this)
                        })), r;
                        return t.split(" ").forEach((function(e) {
                            n[e] || (n[e] = []), n[e].push(o)
                        })), r
                    }, this.off = function(e, t) {
                        if (!n[e]) return r;
                        if (!t) return delete n[e], r;
                        const o = n[e].indexOf(t);
                        return -1 !== o && (delete n[e][o], n[e] = n[e].filter((e => e))), r
                    }, this.trigger = function(t) {
                        const o = "on" + t[0].toUpperCase() + t.slice(1),
                            i = Array.prototype.slice.call(arguments, 1);
                        r[o] && r[o].apply(r, i);
                        const s = n[t];
                        return s ? (e.each(s, (function(e, t) {
                            t.apply(r, i)
                        })), r) : r
                    }, init()
                };
                Module.prototype.__construct = function() {}, Module.prototype.getDefaultSettings = function() {
                    return {}
                }, Module.prototype.getConstructorID = function() {
                    return this.constructor.name
                }, Module.extend = function(e) {
                    const t = jQuery,
                        r = this,
                        child = function() {
                            return r.apply(this, arguments)
                        };
                    return t.extend(child, r), (child.prototype = Object.create(t.extend({}, r.prototype, e))).constructor = child, child.__super__ = r.prototype, child
                }, e.exports = Module
            },
            6516: (e, t, r) => {
                "use strict";
                var n = r(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = n(r(2640)).default.extend({
                    getDefaultSettings: () => ({
                        container: null,
                        items: null,
                        columnsCount: 3,
                        verticalSpaceBetween: 30
                    }),
                    getDefaultElements() {
                        return {
                            $container: jQuery(this.getSettings("container")),
                            $items: jQuery(this.getSettings("items"))
                        }
                    },
                    run() {
                        var e = [],
                            t = this.elements.$container.position().top,
                            r = this.getSettings(),
                            n = r.columnsCount;
                        t += parseInt(this.elements.$container.css("margin-top"), 10), this.elements.$items.each((function(o) {
                            var i = Math.floor(o / n),
                                s = jQuery(this),
                                a = s[0].getBoundingClientRect().height + r.verticalSpaceBetween;
                            if (i) {
                                var u = s.position(),
                                    c = o % n,
                                    l = u.top - t - e[c];
                                l -= parseInt(s.css("margin-top"), 10), l *= -1, s.css("margin-top", l + "px"), e[c] += a
                            } else e.push(a)
                        }))
                    }
                });
                t.default = o
            },
            400: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = class Scroll {
                    static scrollObserver(e) {
                        let t = 0;
                        const r = {
                            root: e.root || null,
                            rootMargin: e.offset || "0px",
                            threshold: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                const t = [];
                                if (e > 0 && e <= 100) {
                                    const r = 100 / e;
                                    for (let e = 0; e <= 100; e += r) t.push(e / 100)
                                } else t.push(0);
                                return t
                            }(e.sensitivity)
                        };
                        return new IntersectionObserver((function handleIntersect(r) {
                            const n = r[0].boundingClientRect.y,
                                o = r[0].isIntersecting,
                                i = n < t ? "down" : "up",
                                s = Math.abs(parseFloat((100 * r[0].intersectionRatio).toFixed(2)));
                            e.callback({
                                sensitivity: e.sensitivity,
                                isInViewport: o,
                                scrollPercentage: s,
                                intersectionScrollDirection: i
                            }), t = n
                        }), r)
                    }
                    static getElementViewportPercentage(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const r = e[0].getBoundingClientRect(),
                            n = t.start || 0,
                            o = t.end || 0,
                            i = window.innerHeight * n / 100,
                            s = window.innerHeight * o / 100,
                            a = r.top - window.innerHeight,
                            u = 0 - a + i,
                            c = r.top + i + e.height() - a + s,
                            l = Math.max(0, Math.min(u / c, 1));
                        return parseFloat((100 * l).toFixed(2))
                    }
                    static getPageScrollPercentage() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        const r = e.start || 0,
                            n = e.end || 0,
                            o = t || document.documentElement.scrollHeight - document.documentElement.clientHeight,
                            i = o * r / 100,
                            s = o + i + o * n / 100;
                        return (document.documentElement.scrollTop + document.body.scrollTop + i) / s * 100
                    }
                }
            },
            2640: (e, t, r) => {
                "use strict";
                var n = r(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = n(r(1192)).default.extend({
                    elements: null,
                    getDefaultElements: () => ({}),
                    bindEvents() {},
                    onInit() {
                        this.initElements(), this.bindEvents()
                    },
                    initElements() {
                        this.elements = this.getDefaultElements()
                    }
                });
                t.default = o
            },
            5955: (e, t, r) => {
                "use strict";
                var n = r(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = n(r(1192)),
                    i = n(r(2640)),
                    s = n(r(2618)),
                    a = n(r(6516)),
                    u = n(r(400)),
                    c = n(r(869)),
                    l = window.elementorModules = {
                        Module: o.default,
                        ViewModule: i.default,
                        ArgsObject: s.default,
                        ForceMethodImplementation: c.default,
                        utils: {
                            Masonry: a.default,
                            Scroll: u.default
                        }
                    };
                t.default = l
            },
            5089: (e, t, r) => {
                var n = r(930),
                    o = r(9268),
                    i = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw i(o(e) + " is not a function")
                }
            },
            1378: (e, t, r) => {
                var n = r(930),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if ("object" == typeof e || n(e)) return e;
                    throw i("Can't set " + o(e) + " as a prototype")
                }
            },
            8669: (e, t, r) => {
                var n = r(211),
                    o = r(4710),
                    i = r(7826).f,
                    s = n("unscopables"),
                    a = Array.prototype;
                null == a[s] && i(a, s, {
                    configurable: !0,
                    value: o(null)
                }), e.exports = function(e) {
                    a[s][e] = !0
                }
            },
            6112: (e, t, r) => {
                var n = r(8759),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw i(o(e) + " is not an object")
                }
            },
            6198: (e, t, r) => {
                var n = r(4088),
                    o = r(7740),
                    i = r(2871),
                    createMethod = function(e) {
                        return function(t, r, s) {
                            var a, u = n(t),
                                c = i(u),
                                l = o(s, c);
                            if (e && r != r) {
                                for (; c > l;)
                                    if ((a = u[l++]) != a) return !0
                            } else
                                for (; c > l; l++)
                                    if ((e || l in u) && u[l] === r) return e || l || 0;
                            return !e && -1
                        }
                    };
                e.exports = {
                    includes: createMethod(!0),
                    indexOf: createMethod(!1)
                }
            },
            2306: (e, t, r) => {
                var n = r(8240),
                    o = n({}.toString),
                    i = n("".slice);
                e.exports = function(e) {
                    return i(o(e), 8, -1)
                }
            },
            375: (e, t, r) => {
                var n = r(2371),
                    o = r(930),
                    i = r(2306),
                    s = r(211)("toStringTag"),
                    a = Object,
                    u = "Arguments" == i(function() {
                        return arguments
                    }());
                e.exports = n ? i : function(e) {
                    var t, r, n;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = a(e), s)) ? r : u ? i(t) : "Object" == (n = i(t)) && o(t.callee) ? "Arguments" : n
                }
            },
            1765: (e, t, r) => {
                var n = r(8240),
                    o = Error,
                    i = n("".replace),
                    s = String(o("zxcasd").stack),
                    a = /\n\s*at [^:]*:[^\n]*/,
                    u = a.test(s);
                e.exports = function(e, t) {
                    if (u && "string" == typeof e && !o.prepareStackTrace)
                        for (; t--;) e = i(e, a, "");
                    return e
                }
            },
            8474: (e, t, r) => {
                var n = r(9606),
                    o = r(6095),
                    i = r(4399),
                    s = r(7826);
                e.exports = function(e, t, r) {
                    for (var a = o(t), u = s.f, c = i.f, l = 0; l < a.length; l++) {
                        var f = a[l];
                        n(e, f) || r && n(r, f) || u(e, f, c(t, f))
                    }
                }
            },
            2585: (e, t, r) => {
                var n = r(5283),
                    o = r(7826),
                    i = r(5736);
                e.exports = n ? function(e, t, r) {
                    return o.f(e, t, i(1, r))
                } : function(e, t, r) {
                    return e[t] = r, e
                }
            },
            5736: e => {
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            1343: (e, t, r) => {
                var n = r(930),
                    o = r(7826),
                    i = r(3712),
                    s = r(9444);
                e.exports = function(e, t, r, a) {
                    a || (a = {});
                    var u = a.enumerable,
                        c = void 0 !== a.name ? a.name : t;
                    if (n(r) && i(r, c, a), a.global) u ? e[t] = r : s(t, r);
                    else {
                        try {
                            a.unsafe ? e[t] && (u = !0) : delete e[t]
                        } catch (e) {}
                        u ? e[t] = r : o.f(e, t, {
                            value: r,
                            enumerable: !1,
                            configurable: !a.nonConfigurable,
                            writable: !a.nonWritable
                        })
                    }
                    return e
                }
            },
            9444: (e, t, r) => {
                var n = r(2086),
                    o = Object.defineProperty;
                e.exports = function(e, t) {
                    try {
                        o(n, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (r) {
                        n[e] = t
                    }
                    return t
                }
            },
            5283: (e, t, r) => {
                var n = r(3677);
                e.exports = !n((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            821: (e, t, r) => {
                var n = r(2086),
                    o = r(8759),
                    i = n.document,
                    s = o(i) && o(i.createElement);
                e.exports = function(e) {
                    return s ? i.createElement(e) : {}
                }
            },
            4999: (e, t, r) => {
                var n = r(563);
                e.exports = n("navigator", "userAgent") || ""
            },
            1448: (e, t, r) => {
                var n, o, i = r(2086),
                    s = r(4999),
                    a = i.process,
                    u = i.Deno,
                    c = a && a.versions || u && u.version,
                    l = c && c.v8;
                l && (o = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (o = +n[1]), e.exports = o
            },
            8684: e => {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            2114: (e, t, r) => {
                var n = r(3677),
                    o = r(5736);
                e.exports = !n((function() {
                    var e = Error("a");
                    return !("stack" in e) || (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
                }))
            },
            1695: (e, t, r) => {
                var n = r(2086),
                    o = r(4399).f,
                    i = r(2585),
                    s = r(1343),
                    a = r(9444),
                    u = r(8474),
                    c = r(7189);
                e.exports = function(e, t) {
                    var r, l, f, p, d, g = e.target,
                        h = e.global,
                        m = e.stat;
                    if (r = h ? n : m ? n[g] || a(g, {}) : (n[g] || {}).prototype)
                        for (l in t) {
                            if (p = t[l], f = e.dontCallGetSet ? (d = o(r, l)) && d.value : r[l], !c(h ? l : g + (m ? "." : "#") + l, e.forced) && void 0 !== f) {
                                if (typeof p == typeof f) continue;
                                u(p, f)
                            }(e.sham || f && f.sham) && i(p, "sham", !0), s(r, l, p, e)
                        }
                }
            },
            3677: e => {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            },
            7258: (e, t, r) => {
                var n = r(6059),
                    o = Function.prototype,
                    i = o.apply,
                    s = o.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (n ? s.bind(i) : function() {
                    return s.apply(i, arguments)
                })
            },
            6059: (e, t, r) => {
                var n = r(3677);
                e.exports = !n((function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }))
            },
            9413: (e, t, r) => {
                var n = r(6059),
                    o = Function.prototype.call;
                e.exports = n ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            4398: (e, t, r) => {
                var n = r(5283),
                    o = r(9606),
                    i = Function.prototype,
                    s = n && Object.getOwnPropertyDescriptor,
                    a = o(i, "name"),
                    u = a && "something" === function something() {}.name,
                    c = a && (!n || n && s(i, "name").configurable);
                e.exports = {
                    EXISTS: a,
                    PROPER: u,
                    CONFIGURABLE: c
                }
            },
            8240: (e, t, r) => {
                var n = r(6059),
                    o = Function.prototype,
                    i = o.bind,
                    s = o.call,
                    a = n && i.bind(s, s);
                e.exports = n ? function(e) {
                    return e && a(e)
                } : function(e) {
                    return e && function() {
                        return s.apply(e, arguments)
                    }
                }
            },
            563: (e, t, r) => {
                var n = r(2086),
                    o = r(930),
                    aFunction = function(e) {
                        return o(e) ? e : void 0
                    };
                e.exports = function(e, t) {
                    return arguments.length < 2 ? aFunction(n[e]) : n[e] && n[e][t]
                }
            },
            2964: (e, t, r) => {
                var n = r(5089);
                e.exports = function(e, t) {
                    var r = e[t];
                    return null == r ? void 0 : n(r)
                }
            },
            2086: (e, t, r) => {
                var check = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof r.g && r.g) || function() {
                    return this
                }() || Function("return this")()
            },
            9606: (e, t, r) => {
                var n = r(8240),
                    o = r(3060),
                    i = n({}.hasOwnProperty);
                e.exports = Object.hasOwn || function hasOwn(e, t) {
                    return i(o(e), t)
                }
            },
            7153: e => {
                e.exports = {}
            },
            5963: (e, t, r) => {
                var n = r(563);
                e.exports = n("document", "documentElement")
            },
            6761: (e, t, r) => {
                var n = r(5283),
                    o = r(3677),
                    i = r(821);
                e.exports = !n && !o((function() {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            5974: (e, t, r) => {
                var n = r(8240),
                    o = r(3677),
                    i = r(2306),
                    s = Object,
                    a = n("".split);
                e.exports = o((function() {
                    return !s("z").propertyIsEnumerable(0)
                })) ? function(e) {
                    return "String" == i(e) ? a(e, "") : s(e)
                } : s
            },
            5070: (e, t, r) => {
                var n = r(930),
                    o = r(8759),
                    i = r(7530);
                e.exports = function(e, t, r) {
                    var s, a;
                    return i && n(s = t.constructor) && s !== r && o(a = s.prototype) && a !== r.prototype && i(e, a), e
                }
            },
            9277: (e, t, r) => {
                var n = r(8240),
                    o = r(930),
                    i = r(4489),
                    s = n(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(e) {
                    return s(e)
                }), e.exports = i.inspectSource
            },
            8945: (e, t, r) => {
                var n = r(8759),
                    o = r(2585);
                e.exports = function(e, t) {
                    n(t) && "cause" in t && o(e, "cause", t.cause)
                }
            },
            3278: (e, t, r) => {
                var n, o, i, s = r(9316),
                    a = r(2086),
                    u = r(8240),
                    c = r(8759),
                    l = r(2585),
                    f = r(9606),
                    p = r(4489),
                    d = r(8944),
                    g = r(7153),
                    h = "Object already initialized",
                    m = a.TypeError,
                    v = a.WeakMap;
                if (s || p.state) {
                    var y = p.state || (p.state = new v),
                        b = u(y.get),
                        x = u(y.has),
                        E = u(y.set);
                    n = function(e, t) {
                        if (x(y, e)) throw new m(h);
                        return t.facade = e, E(y, e, t), t
                    }, o = function(e) {
                        return b(y, e) || {}
                    }, i = function(e) {
                        return x(y, e)
                    }
                } else {
                    var S = d("state");
                    g[S] = !0, n = function(e, t) {
                        if (f(e, S)) throw new m(h);
                        return t.facade = e, l(e, S, t), t
                    }, o = function(e) {
                        return f(e, S) ? e[S] : {}
                    }, i = function(e) {
                        return f(e, S)
                    }
                }
                e.exports = {
                    set: n,
                    get: o,
                    has: i,
                    enforce: function(e) {
                        return i(e) ? o(e) : n(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var r;
                            if (!c(t) || (r = o(t)).type !== e) throw m("Incompatible receiver, " + e + " required");
                            return r
                        }
                    }
                }
            },
            930: e => {
                e.exports = function(e) {
                    return "function" == typeof e
                }
            },
            7189: (e, t, r) => {
                var n = r(3677),
                    o = r(930),
                    i = /#|\.prototype\./,
                    isForced = function(e, t) {
                        var r = a[s(e)];
                        return r == c || r != u && (o(t) ? n(t) : !!t)
                    },
                    s = isForced.normalize = function(e) {
                        return String(e).replace(i, ".").toLowerCase()
                    },
                    a = isForced.data = {},
                    u = isForced.NATIVE = "N",
                    c = isForced.POLYFILL = "P";
                e.exports = isForced
            },
            8759: (e, t, r) => {
                var n = r(930);
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : n(e)
                }
            },
            3296: e => {
                e.exports = !1
            },
            2071: (e, t, r) => {
                var n = r(563),
                    o = r(930),
                    i = r(5516),
                    s = r(1876),
                    a = Object;
                e.exports = s ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = n("Symbol");
                    return o(t) && i(t.prototype, a(e))
                }
            },
            2871: (e, t, r) => {
                var n = r(4005);
                e.exports = function(e) {
                    return n(e.length)
                }
            },
            3712: (e, t, r) => {
                var n = r(3677),
                    o = r(930),
                    i = r(9606),
                    s = r(5283),
                    a = r(4398).CONFIGURABLE,
                    u = r(9277),
                    c = r(3278),
                    l = c.enforce,
                    f = c.get,
                    p = Object.defineProperty,
                    d = s && !n((function() {
                        return 8 !== p((function() {}), "length", {
                            value: 8
                        }).length
                    })),
                    g = String(String).split("String"),
                    h = e.exports = function(e, t, r) {
                        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!i(e, "name") || a && e.name !== t) && (s ? p(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), d && r && i(r, "arity") && e.length !== r.arity && p(e, "length", {
                            value: r.arity
                        });
                        try {
                            r && i(r, "constructor") && r.constructor ? s && p(e, "prototype", {
                                writable: !1
                            }) : e.prototype && (e.prototype = void 0)
                        } catch (e) {}
                        var n = l(e);
                        return i(n, "source") || (n.source = g.join("string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = h((function toString() {
                    return o(this) && f(this).source || u(this)
                }), "toString")
            },
            5681: e => {
                var t = Math.ceil,
                    r = Math.floor;
                e.exports = Math.trunc || function trunc(e) {
                    var n = +e;
                    return (n > 0 ? r : t)(n)
                }
            },
            3193: (e, t, r) => {
                var n = r(1448),
                    o = r(3677);
                e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
                }))
            },
            9316: (e, t, r) => {
                var n = r(2086),
                    o = r(930),
                    i = r(9277),
                    s = n.WeakMap;
                e.exports = o(s) && /native code/.test(i(s))
            },
            1879: (e, t, r) => {
                var n = r(4059);
                e.exports = function(e, t) {
                    return void 0 === e ? arguments.length < 2 ? "" : t : n(e)
                }
            },
            4710: (e, t, r) => {
                var n, o = r(6112),
                    i = r(7711),
                    s = r(8684),
                    a = r(7153),
                    u = r(5963),
                    c = r(821),
                    l = r(8944),
                    f = l("IE_PROTO"),
                    EmptyConstructor = function() {},
                    scriptTag = function(e) {
                        return "<script>" + e + "</" + "script>"
                    },
                    NullProtoObjectViaActiveX = function(e) {
                        e.write(scriptTag("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    },
                    NullProtoObject = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (e) {}
                        var e, t;
                        NullProtoObject = "undefined" != typeof document ? document.domain && n ? NullProtoObjectViaActiveX(n) : ((t = c("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(scriptTag("document.F=Object")), e.close(), e.F) : NullProtoObjectViaActiveX(n);
                        for (var r = s.length; r--;) delete NullProtoObject.prototype[s[r]];
                        return NullProtoObject()
                    };
                a[f] = !0, e.exports = Object.create || function create(e, t) {
                    var r;
                    return null !== e ? (EmptyConstructor.prototype = o(e), r = new EmptyConstructor, EmptyConstructor.prototype = null, r[f] = e) : r = NullProtoObject(), void 0 === t ? r : i.f(r, t)
                }
            },
            7711: (e, t, r) => {
                var n = r(5283),
                    o = r(8202),
                    i = r(7826),
                    s = r(6112),
                    a = r(4088),
                    u = r(8779);
                t.f = n && !o ? Object.defineProperties : function defineProperties(e, t) {
                    s(e);
                    for (var r, n = a(t), o = u(t), c = o.length, l = 0; c > l;) i.f(e, r = o[l++], n[r]);
                    return e
                }
            },
            7826: (e, t, r) => {
                var n = r(5283),
                    o = r(6761),
                    i = r(8202),
                    s = r(6112),
                    a = r(2258),
                    u = TypeError,
                    c = Object.defineProperty,
                    l = Object.getOwnPropertyDescriptor,
                    f = "enumerable",
                    p = "configurable",
                    d = "writable";
                t.f = n ? i ? function defineProperty(e, t, r) {
                    if (s(e), t = a(t), s(r), "function" == typeof e && "prototype" === t && "value" in r && d in r && !r.writable) {
                        var n = l(e, t);
                        n && n.writable && (e[t] = r.value, r = {
                            configurable: p in r ? r.configurable : n.configurable,
                            enumerable: f in r ? r.enumerable : n.enumerable,
                            writable: !1
                        })
                    }
                    return c(e, t, r)
                } : c : function defineProperty(e, t, r) {
                    if (s(e), t = a(t), s(r), o) try {
                        return c(e, t, r)
                    } catch (e) {}
                    if ("get" in r || "set" in r) throw u("Accessors not supported");
                    return "value" in r && (e[t] = r.value), e
                }
            },
            4399: (e, t, r) => {
                var n = r(5283),
                    o = r(9413),
                    i = r(7446),
                    s = r(5736),
                    a = r(4088),
                    u = r(2258),
                    c = r(9606),
                    l = r(6761),
                    f = Object.getOwnPropertyDescriptor;
                t.f = n ? f : function getOwnPropertyDescriptor(e, t) {
                    if (e = a(e), t = u(t), l) try {
                        return f(e, t)
                    } catch (e) {}
                    if (c(e, t)) return s(!o(i.f, e, t), e[t])
                }
            },
            62: (e, t, r) => {
                var n = r(1352),
                    o = r(8684).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
                    return n(e, o)
                }
            },
            6952: (e, t) => {
                t.f = Object.getOwnPropertySymbols
            },
            5516: (e, t, r) => {
                var n = r(8240);
                e.exports = n({}.isPrototypeOf)
            },
            1352: (e, t, r) => {
                var n = r(8240),
                    o = r(9606),
                    i = r(4088),
                    s = r(6198).indexOf,
                    a = r(7153),
                    u = n([].push);
                e.exports = function(e, t) {
                    var r, n = i(e),
                        c = 0,
                        l = [];
                    for (r in n) !o(a, r) && o(n, r) && u(l, r);
                    for (; t.length > c;) o(n, r = t[c++]) && (~s(l, r) || u(l, r));
                    return l
                }
            },
            8779: (e, t, r) => {
                var n = r(1352),
                    o = r(8684);
                e.exports = Object.keys || function keys(e) {
                    return n(e, o)
                }
            },
            7446: (e, t) => {
                "use strict";
                var r = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    o = n && !r.call({
                        1: 2
                    }, 1);
                t.f = o ? function propertyIsEnumerable(e) {
                    var t = n(this, e);
                    return !!t && t.enumerable
                } : r
            },
            7530: (e, t, r) => {
                var n = r(8240),
                    o = r(6112),
                    i = r(1378);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var e, t = !1,
                        r = {};
                    try {
                        (e = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), t = r instanceof Array
                    } catch (e) {}
                    return function setPrototypeOf(r, n) {
                        return o(r), i(n), t ? e(r, n) : r.__proto__ = n, r
                    }
                }() : void 0)
            },
            7999: (e, t, r) => {
                var n = r(9413),
                    o = r(930),
                    i = r(8759),
                    s = TypeError;
                e.exports = function(e, t) {
                    var r, a;
                    if ("string" === t && o(r = e.toString) && !i(a = n(r, e))) return a;
                    if (o(r = e.valueOf) && !i(a = n(r, e))) return a;
                    if ("string" !== t && o(r = e.toString) && !i(a = n(r, e))) return a;
                    throw s("Can't convert object to primitive value")
                }
            },
            6095: (e, t, r) => {
                var n = r(563),
                    o = r(8240),
                    i = r(62),
                    s = r(6952),
                    a = r(6112),
                    u = o([].concat);
                e.exports = n("Reflect", "ownKeys") || function ownKeys(e) {
                    var t = i.f(a(e)),
                        r = s.f;
                    return r ? u(t, r(e)) : t
                }
            },
            1632: (e, t, r) => {
                var n = r(7826).f;
                e.exports = function(e, t, r) {
                    r in e || n(e, r, {
                        configurable: !0,
                        get: function() {
                            return t[r]
                        },
                        set: function(e) {
                            t[r] = e
                        }
                    })
                }
            },
            9586: e => {
                var t = TypeError;
                e.exports = function(e) {
                    if (null == e) throw t("Can't call method on " + e);
                    return e
                }
            },
            8944: (e, t, r) => {
                var n = r(9197),
                    o = r(5422),
                    i = n("keys");
                e.exports = function(e) {
                    return i[e] || (i[e] = o(e))
                }
            },
            4489: (e, t, r) => {
                var n = r(2086),
                    o = r(9444),
                    i = "__core-js_shared__",
                    s = n[i] || o(i, {});
                e.exports = s
            },
            9197: (e, t, r) => {
                var n = r(3296),
                    o = r(4489);
                (e.exports = function(e, t) {
                    return o[e] || (o[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: "3.24.1",
                    mode: n ? "pure" : "global",
                    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            7740: (e, t, r) => {
                var n = r(9502),
                    o = Math.max,
                    i = Math.min;
                e.exports = function(e, t) {
                    var r = n(e);
                    return r < 0 ? o(r + t, 0) : i(r, t)
                }
            },
            4088: (e, t, r) => {
                var n = r(5974),
                    o = r(9586);
                e.exports = function(e) {
                    return n(o(e))
                }
            },
            9502: (e, t, r) => {
                var n = r(5681);
                e.exports = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : n(t)
                }
            },
            4005: (e, t, r) => {
                var n = r(9502),
                    o = Math.min;
                e.exports = function(e) {
                    return e > 0 ? o(n(e), 9007199254740991) : 0
                }
            },
            3060: (e, t, r) => {
                var n = r(9586),
                    o = Object;
                e.exports = function(e) {
                    return o(n(e))
                }
            },
            1288: (e, t, r) => {
                var n = r(9413),
                    o = r(8759),
                    i = r(2071),
                    s = r(2964),
                    a = r(7999),
                    u = r(211),
                    c = TypeError,
                    l = u("toPrimitive");
                e.exports = function(e, t) {
                    if (!o(e) || i(e)) return e;
                    var r, u = s(e, l);
                    if (u) {
                        if (void 0 === t && (t = "default"), r = n(u, e, t), !o(r) || i(r)) return r;
                        throw c("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), a(e, t)
                }
            },
            2258: (e, t, r) => {
                var n = r(1288),
                    o = r(2071);
                e.exports = function(e) {
                    var t = n(e, "string");
                    return o(t) ? t : t + ""
                }
            },
            2371: (e, t, r) => {
                var n = {};
                n[r(211)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
            },
            4059: (e, t, r) => {
                var n = r(375),
                    o = String;
                e.exports = function(e) {
                    if ("Symbol" === n(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(e)
                }
            },
            9268: e => {
                var t = String;
                e.exports = function(e) {
                    try {
                        return t(e)
                    } catch (e) {
                        return "Object"
                    }
                }
            },
            5422: (e, t, r) => {
                var n = r(8240),
                    o = 0,
                    i = Math.random(),
                    s = n(1..toString);
                e.exports = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36)
                }
            },
            1876: (e, t, r) => {
                var n = r(3193);
                e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            8202: (e, t, r) => {
                var n = r(5283),
                    o = r(3677);
                e.exports = n && o((function() {
                    return 42 != Object.defineProperty((function() {}), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }))
            },
            211: (e, t, r) => {
                var n = r(2086),
                    o = r(9197),
                    i = r(9606),
                    s = r(5422),
                    a = r(3193),
                    u = r(1876),
                    c = o("wks"),
                    l = n.Symbol,
                    f = l && l.for,
                    p = u ? l : l && l.withoutSetter || s;
                e.exports = function(e) {
                    if (!i(c, e) || !a && "string" != typeof c[e]) {
                        var t = "Symbol." + e;
                        a && i(l, e) ? c[e] = l[e] : c[e] = u && f ? f(t) : p(t)
                    }
                    return c[e]
                }
            },
            1557: (e, t, r) => {
                "use strict";
                var n = r(563),
                    o = r(9606),
                    i = r(2585),
                    s = r(5516),
                    a = r(7530),
                    u = r(8474),
                    c = r(1632),
                    l = r(5070),
                    f = r(1879),
                    p = r(8945),
                    d = r(1765),
                    g = r(2114),
                    h = r(5283),
                    m = r(3296);
                e.exports = function(e, t, r, v) {
                    var y = "stackTraceLimit",
                        b = v ? 2 : 1,
                        x = e.split("."),
                        E = x[x.length - 1],
                        S = n.apply(null, x);
                    if (S) {
                        var w = S.prototype;
                        if (!m && o(w, "cause") && delete w.cause, !r) return S;
                        var O = n("Error"),
                            I = t((function(e, t) {
                                var r = f(v ? t : e, void 0),
                                    n = v ? new S(e) : new S;
                                return void 0 !== r && i(n, "message", r), g && i(n, "stack", d(n.stack, 2)), this && s(w, this) && l(n, this, I), arguments.length > b && p(n, arguments[b]), n
                            }));
                        if (I.prototype = w, "Error" !== E ? a ? a(I, O) : u(I, O, {
                                name: !0
                            }) : h && y in S && (c(I, S, y), c(I, S, "prepareStackTrace")), u(I, S), !m) try {
                            w.name !== E && i(w, "name", E), w.constructor = I
                        } catch (e) {}
                        return I
                    }
                }
            },
            5623: (e, t, r) => {
                "use strict";
                var n = r(1695),
                    o = r(6198).includes,
                    i = r(3677),
                    s = r(8669);
                n({
                    target: "Array",
                    proto: !0,
                    forced: i((function() {
                        return !Array(1).includes()
                    }))
                }, {
                    includes: function includes(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), s("includes")
            },
            740: (e, t, r) => {
                var n = r(1695),
                    o = r(2086),
                    i = r(7258),
                    s = r(1557),
                    a = "WebAssembly",
                    u = o.WebAssembly,
                    c = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    exportGlobalErrorCauseWrapper = function(e, t) {
                        var r = {};
                        r[e] = s(e, t, c), n({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, r)
                    },
                    exportWebAssemblyErrorCauseWrapper = function(e, t) {
                        if (u && u[e]) {
                            var r = {};
                            r[e] = s("WebAssembly." + e, t, c), n({
                                target: a,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: c
                            }, r)
                        }
                    };
                exportGlobalErrorCauseWrapper("Error", (function(e) {
                    return function Error(t) {
                        return i(e, this, arguments)
                    }
                })), exportGlobalErrorCauseWrapper("EvalError", (function(e) {
                    return function EvalError(t) {
                        return i(e, this, arguments)
                    }
                })), exportGlobalErrorCauseWrapper("RangeError", (function(e) {
                    return function RangeError(t) {
                        return i(e, this, arguments)
                    }
                })), exportGlobalErrorCauseWrapper("ReferenceError", (function(e) {
                    return function ReferenceError(t) {
                        return i(e, this, arguments)
                    }
                })), exportGlobalErrorCauseWrapper("SyntaxError", (function(e) {
                    return function SyntaxError(t) {
                        return i(e, this, arguments)
                    }
                })), exportGlobalErrorCauseWrapper("TypeError", (function(e) {
                    return function TypeError(t) {
                        return i(e, this, arguments)
                    }
                })), exportGlobalErrorCauseWrapper("URIError", (function(e) {
                    return function URIError(t) {
                        return i(e, this, arguments)
                    }
                })), exportWebAssemblyErrorCauseWrapper("CompileError", (function(e) {
                    return function CompileError(t) {
                        return i(e, this, arguments)
                    }
                })), exportWebAssemblyErrorCauseWrapper("LinkError", (function(e) {
                    return function LinkError(t) {
                        return i(e, this, arguments)
                    }
                })), exportWebAssemblyErrorCauseWrapper("RuntimeError", (function(e) {
                    return function RuntimeError(t) {
                        return i(e, this, arguments)
                    }
                }))
            },
            3203: e => {
                e.exports = function _interopRequireDefault(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            }
        },
        e => {
            var t;
            t = 6412, e(e.s = t)
        }
    ])
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.7.8 ] [ " + e.stack + " ]");
}
try { /*!pro-elements - v3.7.3 - 31-07-2022*/
    (self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([
        [819], {
            2: (e, t, n) => {
                "use strict";
                var s = n(3203);
                n(4242);
                var i = s(n(4774)),
                    o = s(n(9575)),
                    r = s(n(6254)),
                    a = s(n(5161)),
                    l = s(n(5039)),
                    c = s(n(9210));
                class ElementorProFrontend extends elementorModules.ViewModule {
                    onInit() {
                        super.onInit(), this.config = ElementorProFrontendConfig, this.modules = {}
                    }
                    bindEvents() {
                        jQuery(window).on("elementor/frontend/init", this.onElementorFrontendInit.bind(this))
                    }
                    initModules() {
                        let e = {
                            motionFX: i.default,
                            sticky: o.default,
                            codeHighlight: r.default,
                            videoPlaylist: a.default,
                            payments: l.default,
                            progressTracker: c.default
                        };
                        elementorProFrontend.trigger("elementor-pro/modules/init:before"), elementorProFrontend.trigger("elementor-pro/modules/init/before"), e = elementorFrontend.hooks.applyFilters("elementor-pro/frontend/handlers", e), jQuery.each(e, ((e, t) => {
                            this.modules[e] = new t
                        })), this.modules.linkActions = {
                            addAction: function() {
                                elementorFrontend.utils.urlActions.addAction(...arguments)
                            }
                        }
                    }
                    onElementorFrontendInit() {
                        this.initModules()
                    }
                }
                window.elementorProFrontend = new ElementorProFrontend
            },
            4242: (e, t, n) => {
                "use strict";
                n.p = ElementorProFrontendConfig.urls.assets + "js/"
            },
            6254: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("code-highlight", (() => n.e(714).then(n.bind(n, 8604))))
                    }
                }
                t.default = _default
            },
            4774: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(3515));
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("global", i.default, null)
                    }
                }
                t.default = _default
            },
            3515: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(5469));
                class _default extends elementorModules.frontend.handlers.Base {
                    __construct() {
                        super.__construct(...arguments), this.toggle = elementorFrontend.debounce(this.toggle, 200)
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                container: ".elementor-widget-container"
                            }
                        }
                    }
                    getDefaultElements() {
                        const e = this.getSettings("selectors");
                        return {
                            $container: this.$element.find(e.container)
                        }
                    }
                    bindEvents() {
                        elementorFrontend.elements.$window.on("resize", this.toggle)
                    }
                    unbindEvents() {
                        elementorFrontend.elements.$window.off("resize", this.toggle)
                    }
                    addCSSTransformEvents() {
                        this.getElementSettings("motion_fx_motion_fx_scrolling") && !this.isTransitionEventAdded && (this.isTransitionEventAdded = !0, this.elements.$container.on("mouseenter", (() => {
                            this.elements.$container.css("--e-transform-transition-duration", "")
                        })))
                    }
                    initEffects() {
                        this.effects = {
                            translateY: {
                                interaction: "scroll",
                                actions: ["translateY"]
                            },
                            translateX: {
                                interaction: "scroll",
                                actions: ["translateX"]
                            },
                            rotateZ: {
                                interaction: "scroll",
                                actions: ["rotateZ"]
                            },
                            scale: {
                                interaction: "scroll",
                                actions: ["scale"]
                            },
                            opacity: {
                                interaction: "scroll",
                                actions: ["opacity"]
                            },
                            blur: {
                                interaction: "scroll",
                                actions: ["blur"]
                            },
                            mouseTrack: {
                                interaction: "mouseMove",
                                actions: ["translateXY"]
                            },
                            tilt: {
                                interaction: "mouseMove",
                                actions: ["tilt"]
                            }
                        }
                    }
                    prepareOptions(e) {
                        const t = this.getElementSettings(),
                            n = "motion_fx" === e ? "element" : "background",
                            s = {};
                        jQuery.each(t, ((n, i) => {
                            const o = new RegExp("^" + e + "_(.+?)_effect"),
                                r = n.match(o);
                            if (!r || !i) return;
                            const a = {},
                                l = r[1];
                            jQuery.each(t, ((t, n) => {
                                const s = new RegExp(e + "_" + l + "_(.+)"),
                                    i = t.match(s);
                                if (!i) return;
                                "effect" !== i[1] && ("object" == typeof n && (n = Object.keys(n.sizes).length ? n.sizes : n.size), a[i[1]] = n)
                            }));
                            const c = this.effects[l],
                                d = c.interaction;
                            s[d] || (s[d] = {}), c.actions.forEach((e => s[d][e] = a))
                        }));
                        let i, o = this.$element;
                        const r = this.getElementType();
                        if ("element" === n && !["section", "container"].includes(r)) {
                            let e;
                            i = o, e = "column" === r ? elementorFrontend.config.legacyMode.elementWrappers ? ".elementor-column-wrap" : ".elementor-widget-wrap" : ".elementor-widget-container", o = o.find("> " + e)
                        }
                        const a = {
                            type: n,
                            interactions: s,
                            elementSettings: t,
                            $element: o,
                            $dimensionsElement: i,
                            refreshDimensions: this.isEdit,
                            range: t[e + "_range"],
                            classes: {
                                element: "elementor-motion-effects-element",
                                parent: "elementor-motion-effects-parent",
                                backgroundType: "elementor-motion-effects-element-type-background",
                                container: "elementor-motion-effects-container",
                                layer: "elementor-motion-effects-layer",
                                perspective: "elementor-motion-effects-perspective"
                            }
                        };
                        return a.range || "fixed" !== this.getCurrentDeviceSetting("_position") || (a.range = "page"), "fixed" === this.getCurrentDeviceSetting("_position") && (a.isFixedPosition = !0), "background" === n && "column" === this.getElementType() && (a.addBackgroundLayerTo = " > .elementor-element-populated"), a
                    }
                    activate(e) {
                        const t = this.prepareOptions(e);
                        jQuery.isEmptyObject(t.interactions) || (this[e] = new i.default(t))
                    }
                    deactivate(e) {
                        this[e] && (this[e].destroy(), delete this[e])
                    }
                    toggle() {
                        const e = elementorFrontend.getCurrentDeviceMode(),
                            t = this.getElementSettings();
                        ["motion_fx", "background_motion_fx"].forEach((n => {
                            const s = t[n + "_devices"];
                            (!s || -1 !== s.indexOf(e)) && (t[n + "_motion_fx_scrolling"] || t[n + "_motion_fx_mouse"]) ? this[n] ? this.refreshInstance(n) : this.activate(n): this.deactivate(n)
                        }))
                    }
                    refreshInstance(e) {
                        const t = this[e];
                        if (!t) return;
                        const n = this.prepareOptions(e);
                        t.setSettings(n), t.refresh()
                    }
                    onInit() {
                        super.onInit(), this.initEffects(), this.addCSSTransformEvents(), this.toggle()
                    }
                    onElementChange(e) {
                        if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(e)) return "motion_fx_motion_fx_scrolling" === e && this.addCSSTransformEvents(), void this.toggle();
                        const t = e.match(".*?(motion_fx|_transform)");
                        if (t) {
                            const e = t[0].match("(_transform)") ? "motion_fx" : t[0];
                            this.refreshInstance(e), this[e] || this.activate(e)
                        }
                        /^_position/.test(e) && ["motion_fx", "background_motion_fx"].forEach((e => {
                            this.refreshInstance(e)
                        }))
                    }
                    onDestroy() {
                        super.onDestroy(), ["motion_fx", "background_motion_fx"].forEach((e => {
                            this.deactivate(e)
                        }))
                    }
                }
                t.default = _default
            },
            2292: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    getMovePointFromPassedPercents(e, t) {
                        return +(t / e * 100).toFixed(2)
                    }
                    getEffectValueFromMovePoint(e, t) {
                        return e * t / 100
                    }
                    getStep(e, t) {
                        return "element" === this.getSettings("type") ? this.getElementStep(e, t) : this.getBackgroundStep(e, t)
                    }
                    getElementStep(e, t) {
                        return -(e - 50) * t.speed
                    }
                    getBackgroundStep(e, t) {
                        const n = this.getSettings("dimensions.movable" + t.axis.toUpperCase());
                        return -this.getEffectValueFromMovePoint(n, e)
                    }
                    getDirectionMovePoint(e, t, n) {
                        let s;
                        return e < n.start ? "out-in" === t ? s = 0 : "in-out" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(n.start, e), "in-out-in" === t && (s = 100 - s)) : e < n.end ? "in-out-in" === t ? s = 0 : "out-in-out" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(n.end - n.start, e - n.start), "in-out" === t && (s = 100 - s)) : "in-out" === t ? s = 0 : "out-in" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(100 - n.end, 100 - e), "in-out-in" === t && (s = 100 - s)), s
                    }
                    translateX(e, t) {
                        e.axis = "x", e.unit = "px", this.transform("translateX", t, e)
                    }
                    translateY(e, t) {
                        e.axis = "y", e.unit = "px", this.transform("translateY", t, e)
                    }
                    translateXY(e, t, n) {
                        this.translateX(e, t), this.translateY(e, n)
                    }
                    tilt(e, t, n) {
                        const s = {
                            speed: e.speed / 10,
                            direction: e.direction
                        };
                        this.rotateX(s, n), this.rotateY(s, 100 - t)
                    }
                    rotateX(e, t) {
                        e.axis = "x", e.unit = "deg", this.transform("rotateX", t, e)
                    }
                    rotateY(e, t) {
                        e.axis = "y", e.unit = "deg", this.transform("rotateY", t, e)
                    }
                    rotateZ(e, t) {
                        e.unit = "deg", this.transform("rotateZ", t, e)
                    }
                    scale(e, t) {
                        const n = this.getDirectionMovePoint(t, e.direction, e.range);
                        this.updateRulePart("transform", "scale", 1 + e.speed * n / 1e3)
                    }
                    transform(e, t, n) {
                        n.direction && (t = 100 - t), this.updateRulePart("transform", e, this.getStep(t, n) + n.unit)
                    }
                    setCSSTransformVariables(e) {
                        this.CSSTransformVariables = [], jQuery.each(e, ((e, t) => {
                            const n = e.match(/_transform_(.+?)_effect/m);
                            if (n && t) {
                                if ("perspective" === n[1]) return void this.CSSTransformVariables.unshift(n[1]);
                                if (this.CSSTransformVariables.includes(n[1])) return;
                                this.CSSTransformVariables.push(n[1])
                            }
                        }))
                    }
                    opacity(e, t) {
                        const n = this.getDirectionMovePoint(t, e.direction, e.range),
                            s = e.level / 10,
                            i = 1 - s + this.getEffectValueFromMovePoint(s, n);
                        this.$element.css({
                            opacity: i,
                            "will-change": "opacity"
                        })
                    }
                    blur(e, t) {
                        const n = this.getDirectionMovePoint(t, e.direction, e.range),
                            s = e.level - this.getEffectValueFromMovePoint(e.level, n);
                        this.updateRulePart("filter", "blur", s + "px")
                    }
                    updateRulePart(e, t, n) {
                        this.rulesVariables[e] || (this.rulesVariables[e] = {}), this.rulesVariables[e][t] || (this.rulesVariables[e][t] = !0, this.updateRule(e));
                        const s = `--${t}`;
                        this.$element[0].style.setProperty(s, n)
                    }
                    updateRule(e) {
                        let t = "";
                        t += this.concatTransformCSSProperties(e), t += this.concatTransformMotionEffectCSSProperties(e), this.$element.css(e, t)
                    }
                    concatTransformCSSProperties(e) {
                        let t = "";
                        return "transform" === e && jQuery.each(this.CSSTransformVariables, ((e, n) => {
                            const s = n;
                            n.startsWith("flip") && (n = n.replace("flip", "scale"));
                            const i = n.startsWith("rotate") || n.startsWith("skew") ? "deg" : "px",
                                o = n.startsWith("scale") ? 1 : 0 + i;
                            t += `${n}(var(--e-transform-${s}, ${o}))`
                        })), t
                    }
                    concatTransformMotionEffectCSSProperties(e) {
                        let t = "";
                        return jQuery.each(this.rulesVariables[e], (e => {
                            t += `${e}(var(--${e}))`
                        })), t
                    }
                    runAction(e, t, n) {
                        t.affectedRange && (t.affectedRange.start > n && (n = t.affectedRange.start), t.affectedRange.end < n && (n = t.affectedRange.end));
                        for (var s = arguments.length, i = new Array(s > 3 ? s - 3 : 0), o = 3; o < s; o++) i[o - 3] = arguments[o];
                        this[e](t, n, ...i)
                    }
                    refresh() {
                        this.rulesVariables = {}, this.CSSTransformVariables = [], this.$element.css({
                            transform: "",
                            filter: "",
                            opacity: "",
                            "will-change": ""
                        })
                    }
                    onInit() {
                        this.$element = this.getSettings("$targetElement"), this.refresh()
                    }
                }
                t.default = _default
            },
            371: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(3231));
                class _default extends elementorModules.ViewModule {
                    constructor() {
                        super(...arguments), (0, i.default)(this, "onInsideViewport", (() => {
                            this.run(), this.animationFrameRequest = requestAnimationFrame(this.onInsideViewport)
                        }))
                    }
                    __construct(e) {
                        this.motionFX = e.motionFX, this.intersectionObservers || this.setElementInViewportObserver()
                    }
                    setElementInViewportObserver() {
                        this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({
                            callback: e => {
                                e.isInViewport ? this.onInsideViewport() : this.removeAnimationFrameRequest()
                            }
                        });
                        const e = "page" === this.motionFX.getSettings("range") ? elementorFrontend.elements.$body[0] : this.motionFX.elements.$parent[0];
                        this.intersectionObserver.observe(e)
                    }
                    runCallback() {
                        this.getSettings("callback")(...arguments)
                    }
                    removeIntersectionObserver() {
                        this.intersectionObserver && this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0])
                    }
                    removeAnimationFrameRequest() {
                        this.animationFrameRequest && cancelAnimationFrame(this.animationFrameRequest)
                    }
                    destroy() {
                        this.removeAnimationFrameRequest(), this.removeIntersectionObserver()
                    }
                    onInit() {
                        super.onInit()
                    }
                }
                t.default = _default
            },
            3802: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(371));
                class MouseMoveInteraction extends i.default {
                    bindEvents() {
                        MouseMoveInteraction.mouseTracked || (elementorFrontend.elements.$window.on("mousemove", MouseMoveInteraction.updateMousePosition), MouseMoveInteraction.mouseTracked = !0)
                    }
                    run() {
                        const e = MouseMoveInteraction.mousePosition,
                            t = this.oldMousePosition;
                        if (t.x === e.x && t.y === e.y) return;
                        this.oldMousePosition = {
                            x: e.x,
                            y: e.y
                        };
                        const n = 100 / innerWidth * e.x,
                            s = 100 / innerHeight * e.y;
                        this.runCallback(n, s)
                    }
                    onInit() {
                        this.oldMousePosition = {}, super.onInit()
                    }
                }
                t.default = MouseMoveInteraction, MouseMoveInteraction.mousePosition = {}, MouseMoveInteraction.updateMousePosition = e => {
                    MouseMoveInteraction.mousePosition = {
                        x: e.clientX,
                        y: e.clientY
                    }
                }
            },
            5931: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(371));
                class _default extends i.default {
                    run() {
                        if (pageYOffset === this.windowScrollTop) return !1;
                        this.onScrollMovement(), this.windowScrollTop = pageYOffset
                    }
                    onScrollMovement() {
                        this.updateMotionFxDimensions(), this.updateAnimation(), this.resetTransitionVariable()
                    }
                    resetTransitionVariable() {
                        this.motionFX.$element.css("--e-transform-transition-duration", "100ms")
                    }
                    updateMotionFxDimensions() {
                        this.motionFX.getSettings().refreshDimensions && this.motionFX.defineDimensions()
                    }
                    updateAnimation() {
                        let e;
                        e = "page" === this.motionFX.getSettings("range") ? elementorModules.utils.Scroll.getPageScrollPercentage() : this.motionFX.getSettings("isFixedPosition") ? elementorModules.utils.Scroll.getPageScrollPercentage({}, window.innerHeight) : elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent), this.runCallback(e)
                    }
                }
                t.default = _default
            },
            5469: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(5931)),
                    o = s(n(3802)),
                    r = s(n(2292));
                class _default extends elementorModules.ViewModule {
                    getDefaultSettings() {
                        return {
                            type: "element",
                            $element: null,
                            $dimensionsElement: null,
                            addBackgroundLayerTo: null,
                            interactions: {},
                            refreshDimensions: !1,
                            range: "viewport",
                            classes: {
                                element: "motion-fx-element",
                                parent: "motion-fx-parent",
                                backgroundType: "motion-fx-element-type-background",
                                container: "motion-fx-container",
                                layer: "motion-fx-layer",
                                perspective: "motion-fx-perspective"
                            }
                        }
                    }
                    bindEvents() {
                        this.defineDimensions = this.defineDimensions.bind(this), elementorFrontend.elements.$window.on("resize elementor-pro/motion-fx/recalc", this.defineDimensions)
                    }
                    unbindEvents() {
                        elementorFrontend.elements.$window.off("resize elementor-pro/motion-fx/recalc", this.defineDimensions)
                    }
                    addBackgroundLayer() {
                        const e = this.getSettings();
                        this.elements.$motionFXContainer = jQuery("<div>", {
                            class: e.classes.container
                        }), this.elements.$motionFXLayer = jQuery("<div>", {
                            class: e.classes.layer
                        }), this.updateBackgroundLayerSize(), this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
                        (e.addBackgroundLayerTo ? this.$element.find(e.addBackgroundLayerTo) : this.$element).prepend(this.elements.$motionFXContainer)
                    }
                    removeBackgroundLayer() {
                        this.elements.$motionFXContainer.remove()
                    }
                    updateBackgroundLayerSize() {
                        const e = this.getSettings(),
                            t = {
                                x: 0,
                                y: 0
                            },
                            n = e.interactions.mouseMove,
                            s = e.interactions.scroll;
                        n && n.translateXY && (t.x = 10 * n.translateXY.speed, t.y = 10 * n.translateXY.speed), s && (s.translateX && (t.x = 10 * s.translateX.speed), s.translateY && (t.y = 10 * s.translateY.speed)), this.elements.$motionFXLayer.css({
                            width: 100 + t.x + "%",
                            height: 100 + t.y + "%"
                        })
                    }
                    defineDimensions() {
                        const e = this.getSettings("$dimensionsElement") || this.$element,
                            t = e.offset(),
                            n = {
                                elementHeight: e.outerHeight(),
                                elementWidth: e.outerWidth(),
                                elementTop: t.top,
                                elementLeft: t.left
                            };
                        n.elementRange = n.elementHeight + innerHeight, this.setSettings("dimensions", n), "background" === this.getSettings("type") && this.defineBackgroundLayerDimensions()
                    }
                    defineBackgroundLayerDimensions() {
                        const e = this.getSettings("dimensions");
                        e.layerHeight = this.elements.$motionFXLayer.height(), e.layerWidth = this.elements.$motionFXLayer.width(), e.movableX = e.layerWidth - e.elementWidth, e.movableY = e.layerHeight - e.elementHeight, this.setSettings("dimensions", e)
                    }
                    initInteractionsTypes() {
                        this.interactionsTypes = {
                            scroll: i.default,
                            mouseMove: o.default
                        }
                    }
                    prepareSpecialActions() {
                        const e = this.getSettings(),
                            t = !(!e.interactions.mouseMove || !e.interactions.mouseMove.tilt);
                        this.elements.$parent.toggleClass(e.classes.perspective, t)
                    }
                    cleanSpecialActions() {
                        const e = this.getSettings();
                        this.elements.$parent.removeClass(e.classes.perspective)
                    }
                    runInteractions() {
                        var e = this;
                        const t = this.getSettings();
                        this.actions.setCSSTransformVariables(t.elementSettings), this.prepareSpecialActions(), jQuery.each(t.interactions, ((t, n) => {
                            this.interactions[t] = new this.interactionsTypes[t]({
                                motionFX: this,
                                callback: function() {
                                    for (var t = arguments.length, s = new Array(t), i = 0; i < t; i++) s[i] = arguments[i];
                                    jQuery.each(n, ((t, n) => e.actions.runAction(t, n, ...s)))
                                }
                            }), this.interactions[t].run()
                        }))
                    }
                    destroyInteractions() {
                        this.cleanSpecialActions(), jQuery.each(this.interactions, ((e, t) => t.destroy())), this.interactions = {}
                    }
                    refresh() {
                        this.actions.setSettings(this.getSettings()), "background" === this.getSettings("type") && (this.updateBackgroundLayerSize(), this.defineBackgroundLayerDimensions()), this.actions.refresh(), this.destroyInteractions(), this.runInteractions()
                    }
                    destroy() {
                        this.destroyInteractions(), this.actions.refresh();
                        const e = this.getSettings();
                        this.$element.removeClass(e.classes.element), this.elements.$parent.removeClass(e.classes.parent), "background" === e.type && (this.$element.removeClass(e.classes.backgroundType), this.removeBackgroundLayer())
                    }
                    onInit() {
                        super.onInit();
                        const e = this.getSettings();
                        this.$element = e.$element, this.elements.$parent = this.$element.parent(), this.$element.addClass(e.classes.element), this.elements.$parent = this.$element.parent(), this.elements.$parent.addClass(e.classes.parent), "background" === e.type && (this.$element.addClass(e.classes.backgroundType), this.addBackgroundLayer()), this.defineDimensions(), e.$targetElement = "element" === e.type ? this.$element : this.elements.$motionFXLayer, this.interactions = {}, this.actions = new r.default(e), this.initInteractionsTypes(), this.runInteractions()
                    }
                }
                t.default = _default
            },
            5039: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("paypal-button", (() => n.e(256).then(n.bind(n, 4452)))), elementorFrontend.elementsHandler.attachHandler("stripe-button", (() => n.e(156).then(n.bind(n, 7121))))
                    }
                }
                t.default = _default
            },
            9210: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("progress-tracker", (() => n.e(241).then(n.bind(n, 2177))))
                    }
                }
                t.default = _default
            },
            9575: (e, t, n) => {
                "use strict";
                var s = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(n(2090));
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("section", i.default, null), elementorFrontend.elementsHandler.attachHandler("container", i.default, null), elementorFrontend.elementsHandler.attachHandler("widget", i.default, null)
                    }
                }
                t.default = _default
            },
            2090: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = elementorModules.frontend.handlers.Base.extend({
                    currentConfig: {},
                    debouncedReactivate: null,
                    bindEvents() {
                        elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "sticky", "resize", this.reactivateOnResize)
                    },
                    unbindEvents() {
                        elementorFrontend.removeListeners(this.getUniqueHandlerID() + "sticky", "resize", this.reactivateOnResize)
                    },
                    isStickyInstanceActive() {
                        return void 0 !== this.$element.data("sticky")
                    },
                    getResponsiveSetting(e) {
                        const t = this.getElementSettings();
                        return elementorFrontend.getCurrentDeviceSetting(t, e)
                    },
                    getResponsiveSettingList: e => ["", ...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((t => t ? `${e}_${t}` : e)),
                    getConfig() {
                        const e = this.getElementSettings(),
                            t = {
                                to: e.sticky,
                                offset: this.getResponsiveSetting("sticky_offset"),
                                effectsOffset: this.getResponsiveSetting("sticky_effects_offset"),
                                classes: {
                                    sticky: "elementor-sticky",
                                    stickyActive: "elementor-sticky--active elementor-section--handles-inside",
                                    stickyEffects: "elementor-sticky--effects",
                                    spacer: "elementor-sticky__spacer"
                                },
                                isRTL: elementorFrontend.config.is_rtl,
                                handleScrollbarWidth: elementorFrontend.isEditMode()
                            },
                            n = elementorFrontend.elements.$wpAdminBar;
                        return e.sticky_parent && (t.parent = ".e-container, .elementor-widget-wrap"), n.length && "top" === e.sticky && "fixed" === n.css("position") && (t.offset += n.height()), this.$element[0].parentElement ? .classList.contains("e-container") ? t.relativeTarget = "document" : t.relativeTarget = "parent", t
                    },
                    activate() {
                        this.currentConfig = this.getConfig(), this.$element.sticky(this.currentConfig)
                    },
                    deactivate() {
                        this.isStickyInstanceActive() && this.$element.sticky("destroy")
                    },
                    run(e) {
                        if (this.getElementSettings("sticky")) {
                            var t = elementorFrontend.getCurrentDeviceMode(); - 1 !== this.getElementSettings("sticky_on").indexOf(t) ? !0 === e ? this.reactivate() : this.isStickyInstanceActive() || this.activate() : this.deactivate()
                        } else this.deactivate()
                    },
                    reactivateOnResize() {
                        clearTimeout(this.debouncedReactivate), this.debouncedReactivate = setTimeout((() => {
                            const e = this.getConfig();
                            JSON.stringify(e) !== JSON.stringify(this.currentConfig) && this.run(!0)
                        }), 300)
                    },
                    reactivate() {
                        this.deactivate(), this.activate()
                    },
                    onElementChange(e) {
                        -1 !== ["sticky", "sticky_on"].indexOf(e) && this.run(!0); - 1 !== [...this.getResponsiveSettingList("sticky_offset"), ...this.getResponsiveSettingList("sticky_effects_offset"), "sticky_parent"].indexOf(e) && this.reactivate()
                    },
                    onDeviceModeChange() {
                        setTimeout((() => this.run(!0)))
                    },
                    onInit() {
                        elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), elementorFrontend.isEditMode() && elementor.listenTo(elementor.channels.deviceMode, "change", (() => this.onDeviceModeChange())), this.run()
                    },
                    onDestroy() {
                        elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments), this.deactivate()
                    }
                });
                t.default = n
            },
            5161: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.hooks.addAction("frontend/element_ready/video-playlist.default", (e => {
                            n.e(721).then(n.bind(n, 1580)).then((t => {
                                let {
                                    default: n
                                } = t;
                                elementorFrontend.elementsHandler.addHandler(n, {
                                    $element: e,
                                    toggleSelf: !1
                                })
                            }))
                        }))
                    }
                }
                t.default = _default
            },
            3231: e => {
                e.exports = function _defineProperty(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            3203: e => {
                e.exports = function _interopRequireDefault(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            }
        },
        e => {
            var t;
            t = 2, e(e.s = t)
        }
    ])
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/pro-elements/assets/js/frontend.min.js?ver=3.7.3 ] [ " + e.stack + " ]");
}
try {
    ! function() {
        "use strict";

        function Waypoint(options) {
            if (!options) throw new Error("No options passed to Waypoint constructor");
            if (!options.element) throw new Error("No element option passed to Waypoint constructor");
            if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
        }
        var keyCounter = 0,
            allWaypoints = {};
        Waypoint.prototype.queueTrigger = function(direction) {
            this.group.queueTrigger(this, direction)
        }, Waypoint.prototype.trigger = function(args) {
            this.enabled && this.callback && this.callback.apply(this, args)
        }, Waypoint.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
        }, Waypoint.prototype.disable = function() {
            return this.enabled = !1, this
        }, Waypoint.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, Waypoint.prototype.next = function() {
            return this.group.next(this)
        }, Waypoint.prototype.previous = function() {
            return this.group.previous(this)
        }, Waypoint.invokeAll = function(method) {
            var allWaypointsArray = [];
            for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
            for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
        }, Waypoint.destroyAll = function() {
            Waypoint.invokeAll("destroy")
        }, Waypoint.disableAll = function() {
            Waypoint.invokeAll("disable")
        }, Waypoint.enableAll = function() {
            Waypoint.Context.refreshAll();
            for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
            return this
        }, Waypoint.refreshAll = function() {
            Waypoint.Context.refreshAll()
        }, Waypoint.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, Waypoint.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, Waypoint.adapters = [], Waypoint.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, Waypoint.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = Waypoint
    }(),
    function() {
        "use strict";

        function requestAnimationFrameShim(callback) {
            window.setTimeout(callback, 1e3 / 60)
        }

        function Context(element) {
            this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var keyCounter = 0,
            contexts = {},
            Waypoint = window.Waypoint,
            oldWindowLoad = window.onload;
        Context.prototype.add = function(waypoint) {
            var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
        }, Context.prototype.checkEmpty = function() {
            var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
                isWindow = this.element == this.element.window;
            horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
        }, Context.prototype.createThrottledResizeHandler = function() {
            function resizeHandler() {
                self.handleResize(), self.didResize = !1
            }
            var self = this;
            this.adapter.on("resize.waypoints", function() {
                self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
            })
        }, Context.prototype.createThrottledScrollHandler = function() {
            function scrollHandler() {
                self.handleScroll(), self.didScroll = !1
            }
            var self = this;
            this.adapter.on("scroll.waypoints", function() {
                self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
            })
        }, Context.prototype.handleResize = function() {
            Waypoint.Context.refreshAll()
        }, Context.prototype.handleScroll = function() {
            var triggeredGroups = {},
                axes = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var axisKey in axes) {
                var axis = axes[axisKey],
                    isForward = axis.newScroll > axis.oldScroll,
                    direction = isForward ? axis.forward : axis.backward;
                for (var waypointKey in this.waypoints[axisKey]) {
                    var waypoint = this.waypoints[axisKey][waypointKey];
                    if (null !== waypoint.triggerPoint) {
                        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
                            nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                            crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                            crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                        (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
                    }
                }
            }
            for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
            this.oldScroll = {
                x: axes.horizontal.newScroll,
                y: axes.vertical.newScroll
            }
        }, Context.prototype.innerHeight = function() {
            return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
        }, Context.prototype.remove = function(waypoint) {
            delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
        }, Context.prototype.innerWidth = function() {
            return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
        }, Context.prototype.destroy = function() {
            var allWaypoints = [];
            for (var axis in this.waypoints)
                for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
            for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
        }, Context.prototype.refresh = function() {
            var axes, isWindow = this.element == this.element.window,
                contextOffset = isWindow ? void 0 : this.adapter.offset(),
                triggeredGroups = {};
            this.handleScroll(), axes = {
                horizontal: {
                    contextOffset: isWindow ? 0 : contextOffset.left,
                    contextScroll: isWindow ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: isWindow ? 0 : contextOffset.top,
                    contextScroll: isWindow ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var axisKey in axes) {
                var axis = axes[axisKey];
                for (var waypointKey in this.waypoints[axisKey]) {
                    var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey],
                        adjustment = waypoint.options.offset,
                        oldTriggerPoint = waypoint.triggerPoint,
                        elementOffset = 0,
                        freshWaypoint = null == oldTriggerPoint;
                    waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
            return Waypoint.requestAnimationFrame(function() {
                for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
            }), this
        }, Context.findOrCreateByElement = function(element) {
            return Context.findByElement(element) || new Context(element)
        }, Context.refreshAll = function() {
            for (var contextId in contexts) contexts[contextId].refresh()
        }, Context.findByElement = function(element) {
            return contexts[element.waypointContextKey]
        }, window.onload = function() {
            oldWindowLoad && oldWindowLoad(), Context.refreshAll()
        }, Waypoint.requestAnimationFrame = function(callback) {
            var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
            requestFn.call(window, callback)
        }, Waypoint.Context = Context
    }(),
    function() {
        "use strict";

        function byTriggerPoint(a, b) {
            return a.triggerPoint - b.triggerPoint
        }

        function byReverseTriggerPoint(a, b) {
            return b.triggerPoint - a.triggerPoint
        }

        function Group(options) {
            this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
        }
        var groups = {
                vertical: {},
                horizontal: {}
            },
            Waypoint = window.Waypoint;
        Group.prototype.add = function(waypoint) {
            this.waypoints.push(waypoint)
        }, Group.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, Group.prototype.flushTriggers = function() {
            for (var direction in this.triggerQueues) {
                var waypoints = this.triggerQueues[direction],
                    reverse = "up" === direction || "left" === direction;
                waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
                for (var i = 0, end = waypoints.length; i < end; i += 1) {
                    var waypoint = waypoints[i];
                    (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
                }
            }
            this.clearTriggerQueues()
        }, Group.prototype.next = function(waypoint) {
            this.waypoints.sort(byTriggerPoint);
            var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
                isLast = index === this.waypoints.length - 1;
            return isLast ? null : this.waypoints[index + 1]
        }, Group.prototype.previous = function(waypoint) {
            this.waypoints.sort(byTriggerPoint);
            var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
            return index ? this.waypoints[index - 1] : null
        }, Group.prototype.queueTrigger = function(waypoint, direction) {
            this.triggerQueues[direction].push(waypoint)
        }, Group.prototype.remove = function(waypoint) {
            var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
            index > -1 && this.waypoints.splice(index, 1)
        }, Group.prototype.first = function() {
            return this.waypoints[0]
        }, Group.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, Group.findOrCreate = function(options) {
            return groups[options.axis][options.name] || new Group(options)
        }, Waypoint.Group = Group
    }(),
    function() {
        "use strict";

        function JQueryAdapter(element) {
            this.$element = $(element)
        }
        var $ = window.jQuery,
            Waypoint = window.Waypoint;
        $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
            JQueryAdapter.prototype[method] = function() {
                var args = Array.prototype.slice.call(arguments);
                return this.$element[method].apply(this.$element, args)
            }
        }), $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
            JQueryAdapter[method] = $[method]
        }), Waypoint.adapters.push({
            name: "jquery",
            Adapter: JQueryAdapter
        }), Waypoint.Adapter = JQueryAdapter
    }(),
    function() {
        "use strict";

        function createExtension(framework) {
            return function() {
                var waypoints = [],
                    overrides = arguments[0];
                return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function() {
                    var options = framework.extend({}, overrides, {
                        element: this
                    });
                    "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
                }), waypoints
            }
        }
        var Waypoint = window.Waypoint;
        window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
    }()
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2 ] [ " + e.stack + " ]");
}
try { /*!elementor - v3.7.8 - 02-10-2022*/
    (self.webpackChunkelementor = self.webpackChunkelementor || []).push([
        [819], {
            9220: (e, t, n) => {
                "use strict";
                var i = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = i(n(8135));
                class _default extends elementorModules.ViewModule {
                    constructor() {
                        super(...arguments), this.documents = {}, this.initDocumentClasses(), this.attachDocumentsClasses()
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                document: ".elementor"
                            }
                        }
                    }
                    getDefaultElements() {
                        const e = this.getSettings("selectors");
                        return {
                            $documents: jQuery(e.document)
                        }
                    }
                    initDocumentClasses() {
                        this.documentClasses = {
                            base: s.default
                        }, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
                    }
                    addDocumentClass(e, t) {
                        this.documentClasses[e] = t
                    }
                    attachDocumentsClasses() {
                        this.elements.$documents.each(((e, t) => this.attachDocumentClass(jQuery(t))))
                    }
                    attachDocumentClass(e) {
                        const t = e.data(),
                            n = t.elementorId,
                            i = t.elementorType,
                            s = this.documentClasses[i] || this.documentClasses.base;
                        this.documents[n] = new s({
                            $element: e,
                            id: n
                        })
                    }
                }
                t.default = _default
            },
            9804: (e, t, n) => {
                "use strict";
                var i = n(3203),
                    s = i(n(6397)),
                    o = i(n(8704)),
                    r = i(n(4985)),
                    a = i(n(7537)),
                    l = i(n(355)),
                    d = i(n(2804)),
                    c = i(n(3384));
                e.exports = function(e) {
                    var t = this;
                    const i = {};
                    this.elementsHandlers = {
                        "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
                        "alert.default": () => n.e(745).then(n.bind(n, 9269)),
                        "counter.default": () => n.e(120).then(n.bind(n, 7884)),
                        "progress.default": () => n.e(192).then(n.bind(n, 1351)),
                        "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
                        "toggle.default": () => n.e(181).then(n.bind(n, 2)),
                        "video.default": () => n.e(791).then(n.bind(n, 5363)),
                        "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
                        "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
                        "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602))
                    };
                    const addElementsHandlers = () => {
                            this.elementsHandlers.section = [d.default, ...o.default, l.default, c.default], this.elementsHandlers.container = [...o.default], elementorFrontend.isEditMode() && this.elementsHandlers.container.push(...r.default), this.elementsHandlers.column = a.default, e.each(this.elementsHandlers, ((e, t) => {
                                const n = e.split(".");
                                e = n[0];
                                const i = n[1] || null;
                                this.attachHandler(e, t, i)
                            }))
                        },
                        isClassHandler = e => e.prototype ? .getUniqueHandlerID;
                    this.addHandler = function(e, t) {
                        const n = t.$element.data("model-cid");
                        let s;
                        if (n) {
                            s = e.prototype.getConstructorID(), i[n] || (i[n] = {});
                            const t = i[n][s];
                            t && t.onDestroy()
                        }
                        const o = new e(t);
                        n && (i[n][s] = o)
                    }, this.attachHandler = (e, n, i) => {
                        Array.isArray(n) || (n = [n]), n.forEach((n => function(e, n) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                            i = i ? "." + i : "", elementorFrontend.hooks.addAction(`frontend/element_ready/${e}${i}`, (e => {
                                if (isClassHandler(n)) t.addHandler(n, {
                                    $element: e
                                }, !0);
                                else {
                                    const i = n();
                                    if (!i) return;
                                    i instanceof Promise ? i.then((n => {
                                        let {
                                            default: i
                                        } = n;
                                        t.addHandler(i, {
                                            $element: e
                                        }, !0)
                                    })) : t.addHandler(i, {
                                        $element: e
                                    }, !0)
                                }
                            }))
                        }(e, n, i)))
                    }, this.getHandler = function(e) {
                        const t = this.elementsHandlers[e];
                        return isClassHandler(t) ? t : new Promise((e => {
                            t().then((t => {
                                let {
                                    default: n
                                } = t;
                                e(n)
                            }))
                        }))
                    }, this.getHandlers = function(e) {
                        return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"), e ? this.getHandler(e) : this.elementsHandlers
                    }, this.runReadyTrigger = function(t) {
                        if (elementorFrontend.config.is_static) return;
                        const n = jQuery(t),
                            i = n.attr("data-element_type");
                        if (i && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e), elementorFrontend.hooks.doAction(`frontend/element_ready/${i}`, n, e), "widget" === i)) {
                            const t = n.attr("data-widget_type");
                            elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                        }
                    }, this.init = () => {
                        elementorFrontend.hooks.addAction("frontend/element_ready/global", s.default), addElementsHandlers()
                    }
                }
            },
            5654: (e, t, n) => {
                "use strict";
                var i = n(3203);
                n(59);
                var s = i(n(9220)),
                    o = i(n(5107)),
                    r = i(n(3308)),
                    a = i(n(1604)),
                    l = i(n(1911)),
                    d = i(n(4773)),
                    c = i(n(2064)),
                    u = i(n(8628)),
                    h = i(n(8646)),
                    m = i(n(6866)),
                    g = i(n(4375)),
                    p = i(n(6404)),
                    f = i(n(6046)),
                    v = n(6028);
                const b = n(9469),
                    _ = n(9804),
                    y = n(3346);
                class Frontend extends elementorModules.ViewModule {
                    constructor() {
                        super(...arguments), this.config = elementorFrontendConfig, this.config.legacyMode = {
                            get elementWrappers() {
                                return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0", "elementorFrontend.config.experimentalFeatures.e_dom_optimization"), !elementorFrontend.config.experimentalFeatures.e_dom_optimization
                            }
                        }, this.populateActiveBreakpointsConfig()
                    }
                    get Module() {
                        return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"), elementorModules.frontend.handlers.Base
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                elementor: ".elementor",
                                adminBar: "#wpadminbar"
                            }
                        }
                    }
                    getDefaultElements() {
                        const e = {
                            window,
                            $window: jQuery(window),
                            $document: jQuery(document),
                            $head: jQuery(document.head),
                            $body: jQuery(document.body),
                            $deviceMode: jQuery("<span>", {
                                id: "elementor-device-mode",
                                class: "elementor-screen-only"
                            })
                        };
                        return e.$body.append(e.$deviceMode), e
                    }
                    bindEvents() {
                        this.elements.$window.on("resize", (() => this.setDeviceModeData()))
                    }
                    getElements(e) {
                        return this.getItems(this.elements, e)
                    }
                    getPageSettings(e) {
                        const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                        return this.getItems(t, e)
                    }
                    getGeneralSettings(e) {
                        return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings", "3.0.0", "getKitSettings and remove the `elementor_` prefix"), this.getKitSettings(`elementor_${e}`)
                    }
                    getKitSettings(e) {
                        return this.getItems(this.config.kit, e)
                    }
                    getCurrentDeviceMode() {
                        return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
                    }
                    getDeviceSetting(e, t, n) {
                        if ("widescreen" === e) return this.getWidescreenSetting(t, n);
                        const i = elementorFrontend.breakpoints.getActiveBreakpointsList({
                            largeToSmall: !0,
                            withDesktop: !0
                        });
                        let s = i.indexOf(e);
                        for (; s > 0;) {
                            const e = t[n + "_" + i[s]];
                            if (e || 0 === e) return e;
                            s--
                        }
                        return t[n]
                    }
                    getWidescreenSetting(e, t) {
                        const n = t + "_widescreen";
                        let i;
                        return i = e[n] ? e[n] : e[t], i
                    }
                    getCurrentDeviceSetting(e, t) {
                        return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
                    }
                    isEditMode() {
                        return this.config.environmentMode.edit
                    }
                    isWPPreviewMode() {
                        return this.config.environmentMode.wpPreview
                    }
                    initDialogsManager() {
                        let e;
                        this.getDialogsManager = () => (e || (e = new DialogsManager.Instance), e)
                    }
                    initOnReadyComponents() {
                        this.utils = {
                            youtube: new a.default,
                            vimeo: new l.default,
                            baseVideoLoader: new d.default,
                            anchors: new y,
                            get lightbox() {
                                return h.default.getLightbox()
                            },
                            urlActions: new c.default,
                            swiper: u.default,
                            environment: r.default,
                            assetsLoader: new m.default,
                            escapeHTML: v.escapeHTML,
                            events: p.default
                        }, this.modules = {
                            StretchElement: elementorModules.frontend.tools.StretchElement,
                            Masonry: elementorModules.utils.Masonry
                        }, this.elementsHandler.init(), this.isEditMode() ? elementor.once("document:loaded", (() => this.onDocumentLoaded())) : this.onDocumentLoaded()
                    }
                    initOnReadyElements() {
                        this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
                    }
                    addUserAgentClasses() {
                        for (const [e, t] of Object.entries(r.default)) t && this.elements.$body.addClass("e--ua-" + e)
                    }
                    setDeviceModeData() {
                        this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
                    }
                    addListenerOnce(e, t, n, i) {
                        if (i || (i = this.elements.$window), this.isEditMode())
                            if (this.removeListeners(e, t, i), i instanceof jQuery) {
                                const s = t + "." + e;
                                i.on(s, n)
                            } else i.on(t, n, e);
                        else i.on(t, n)
                    }
                    removeListeners(e, t, n, i) {
                        if (i || (i = this.elements.$window), i instanceof jQuery) {
                            const s = t + "." + e;
                            i.off(s, n)
                        } else i.off(t, n, e)
                    }
                    debounce(e, t) {
                        let n;
                        return function() {
                            const i = this,
                                s = arguments,
                                later = () => {
                                    n = null, e.apply(i, s)
                                },
                                o = !n;
                            clearTimeout(n), n = setTimeout(later, t), o && e.apply(i, s)
                        }
                    }
                    waypoint(e, t, n) {
                        n = jQuery.extend({
                            offset: "100%",
                            triggerOnce: !0
                        }, n);
                        return e.elementorWaypoint((function() {
                            const e = this.element || this,
                                i = t.apply(e, arguments);
                            return n.triggerOnce && this.destroy && this.destroy(), i
                        }), n)
                    }
                    muteMigrationTraces() {
                        jQuery.migrateMute = !0, jQuery.migrateTrace = !1
                    }
                    initModules() {
                        const e = {
                            shapes: f.default
                        };
                        elementorFrontend.trigger("elementor/modules/init:before"), elementorFrontend.trigger("elementor/modules/init/before"), Object.entries(e).forEach((e => {
                            let [t, n] = e;
                            this.modulesHandlers[t] = new n
                        }))
                    }
                    populateActiveBreakpointsConfig() {
                        this.config.responsive.activeBreakpoints = {}, Object.entries(this.config.responsive.breakpoints).forEach((e => {
                            let [t, n] = e;
                            n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                        }))
                    }
                    init() {
                        this.hooks = new b, this.breakpoints = new g.default(this.config.responsive), this.storage = new o.default, this.elementsHandler = new _(jQuery), this.modulesHandlers = {}, this.addUserAgentClasses(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), p.default.dispatch(this.elements.$window, "elementor/frontend/init"), this.initModules(), this.initOnReadyElements(), this.initOnReadyComponents()
                    }
                    onDocumentLoaded() {
                        this.documentsManager = new s.default, this.trigger("components:init"), new h.default
                    }
                }
                window.elementorFrontend = new Frontend, elementorFrontend.isEditMode() || jQuery((() => elementorFrontend.init()))
            },
            4058: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
                    getDefaultSettings() {
                        return {
                            classes: {
                                swiperContainer: "elementor-background-slideshow swiper-container",
                                swiperWrapper: "swiper-wrapper",
                                swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                                swiperPreloader: "swiper-lazy-preloader",
                                slideBackground: "elementor-background-slideshow__slide__image",
                                kenBurns: "elementor-ken-burns",
                                kenBurnsActive: "elementor-ken-burns--active",
                                kenBurnsIn: "elementor-ken-burns--in",
                                kenBurnsOut: "elementor-ken-burns--out"
                            }
                        }
                    }
                    getSwiperOptions() {
                        const e = this.getElementSettings(),
                            t = {
                                grabCursor: !1,
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                loop: "yes" === e.background_slideshow_loop,
                                speed: e.background_slideshow_transition_duration,
                                autoplay: {
                                    delay: e.background_slideshow_slide_duration,
                                    stopOnLastSlide: !e.background_slideshow_loop
                                },
                                handleElementorBreakpoints: !0,
                                on: {
                                    slideChange: () => {
                                        e.background_slideshow_ken_burns && this.handleKenBurns()
                                    }
                                }
                            };
                        switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()), e.background_slideshow_slide_transition) {
                            case "fade":
                                t.effect = "fade", t.fadeEffect = {
                                    crossFade: !0
                                };
                                break;
                            case "slide_down":
                                t.autoplay.reverseDirection = !0, t.direction = "vertical";
                                break;
                            case "slide_up":
                                t.direction = "vertical"
                        }
                        return "yes" === e.background_slideshow_lazyload && (t.lazy = {
                            loadPrevNext: !0,
                            loadPrevNextAmount: 1
                        }), t
                    }
                    buildSwiperElements() {
                        const e = this.getSettings("classes"),
                            t = this.getElementSettings(),
                            n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl",
                            i = jQuery("<div>", {
                                class: e.swiperContainer,
                                dir: n
                            }),
                            s = jQuery("<div>", {
                                class: e.swiperWrapper
                            }),
                            o = t.background_slideshow_ken_burns,
                            r = "yes" === t.background_slideshow_lazyload;
                        let a = e.slideBackground;
                        if (o) {
                            a += " " + e.kenBurns;
                            const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                            a += " " + e[n]
                        }
                        r && (a += " swiper-lazy"), this.elements.$slides = jQuery(), t.background_slideshow_gallery.forEach((t => {
                            const n = jQuery("<div>", {
                                class: e.swiperSlide
                            });
                            let i;
                            if (r) {
                                const n = jQuery("<div>", {
                                    class: e.swiperPreloader
                                });
                                i = jQuery("<div>", {
                                    class: a,
                                    "data-background": t.url
                                }), i.append(n)
                            } else i = jQuery("<div>", {
                                class: a,
                                style: 'background-image: url("' + t.url + '");'
                            });
                            n.append(i), s.append(n), this.elements.$slides = this.elements.$slides.add(n)
                        })), i.append(s), this.$element.prepend(i), this.elements.$backgroundSlideShowContainer = i
                    }
                    async initSlider() {
                        if (1 >= this.getSlidesCount()) return;
                        const e = this.getElementSettings(),
                            t = elementorFrontend.utils.swiper;
                        this.swiper = await new t(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()), this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper), e.background_slideshow_ken_burns && this.handleKenBurns()
                    }
                    activate() {
                        this.buildSwiperElements(), this.initSlider()
                    }
                    deactivate() {
                        this.swiper && (this.swiper.destroy(), this.elements.$backgroundSlideShowContainer.remove())
                    }
                    run() {
                        "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
                    }
                    onInit() {
                        super.onInit(), this.getElementSettings("background_slideshow_gallery") && this.run()
                    }
                    onDestroy() {
                        super.onDestroy(), this.deactivate()
                    }
                    onElementChange(e) {
                        "background_background" === e && this.run()
                    }
                }
                t.default = BackgroundSlideshow
            },
            9501: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class BackgroundVideo extends elementorModules.frontend.handlers.Base {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                backgroundVideoContainer: ".elementor-background-video-container",
                                backgroundVideoEmbed: ".elementor-background-video-embed",
                                backgroundVideoHosted: ".elementor-background-video-hosted"
                            }
                        }
                    }
                    getDefaultElements() {
                        const e = this.getSettings("selectors"),
                            t = {
                                $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                            };
                        return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed), t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted), t
                    }
                    calcVideosSize(e) {
                        let t = "16:9";
                        "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                        const n = this.elements.$backgroundVideoContainer.outerWidth(),
                            i = this.elements.$backgroundVideoContainer.outerHeight(),
                            s = t.split(":"),
                            o = s[0] / s[1],
                            r = n / i > o;
                        return {
                            width: r ? n : i * o,
                            height: r ? n / o : i
                        }
                    }
                    changeVideoSize() {
                        if ("hosted" !== this.videoType && !this.player) return;
                        let e;
                        if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted), !e) return;
                        const t = this.calcVideosSize(e);
                        e.width(t.width).height(t.height)
                    }
                    startVideoLoop(e) {
                        if (!this.player.getIframe().contentWindow) return;
                        const t = this.getElementSettings(),
                            n = t.background_video_start || 0,
                            i = t.background_video_end;
                        if (!t.background_play_once || e) {
                            if (this.player.seekTo(n), i) {
                                setTimeout((() => {
                                    this.startVideoLoop(!1)
                                }), 1e3 * (i - n + 1))
                            }
                        } else this.player.stopVideo()
                    }
                    prepareVimeoVideo(e, t) {
                        const n = this.getElementSettings(),
                            i = {
                                url: t,
                                width: this.elements.$backgroundVideoContainer.outerWidth().width,
                                autoplay: !0,
                                loop: !n.background_play_once,
                                transparent: !1,
                                background: !0,
                                muted: !0
                            };
                        this.player = new e.Player(this.elements.$backgroundVideoContainer, i), this.handleVimeoStartEndTimes(n), this.player.ready().then((() => {
                            jQuery(this.player.element).addClass("elementor-background-video-embed"), this.changeVideoSize()
                        }))
                    }
                    handleVimeoStartEndTimes(e) {
                        e.background_video_start && this.player.on("play", (t => {
                            0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                        })), this.player.on("timeupdate", (t => {
                            e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)), this.player.getDuration().then((n => {
                                e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                            }))
                        }))
                    }
                    prepareYTVideo(e, t) {
                        const n = this.elements.$backgroundVideoContainer,
                            i = this.getElementSettings();
                        let s = e.PlayerState.PLAYING;
                        window.chrome && (s = e.PlayerState.UNSTARTED);
                        const o = {
                            videoId: t,
                            events: {
                                onReady: () => {
                                    this.player.mute(), this.changeVideoSize(), this.startVideoLoop(!0), this.player.playVideo()
                                },
                                onStateChange: t => {
                                    switch (t.data) {
                                        case s:
                                            n.removeClass("elementor-invisible elementor-loading");
                                            break;
                                        case e.PlayerState.ENDED:
                                            this.player.seekTo(i.background_video_start || 0), i.background_play_once && this.player.destroy()
                                    }
                                }
                            },
                            playerVars: {
                                controls: 0,
                                rel: 0,
                                playsinline: 1
                            }
                        };
                        i.background_privacy_mode && (o.host = "https://www.youtube-nocookie.com", o.origin = window.location.hostname), n.addClass("elementor-loading elementor-invisible"), this.player = new e.Player(this.elements.$backgroundVideoEmbed[0], o)
                    }
                    activate() {
                        let e, t = this.getElementSettings("background_video_link");
                        const n = this.getElementSettings("background_play_once");
                        if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo", this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube", this.apiProvider = elementorFrontend.utils.youtube), this.apiProvider) e = this.apiProvider.getVideoIDFromURL(t), this.apiProvider.onApiReady((n => {
                            "youtube" === this.videoType && this.prepareYTVideo(n, e), "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                        }));
                        else {
                            this.videoType = "hosted";
                            const e = this.getElementSettings("background_video_start"),
                                i = this.getElementSettings("background_video_end");
                            (e || i) && (t += "#t=" + (e || 0) + (i ? "," + i : "")), this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)), n && this.elements.$backgroundVideoHosted.on("ended", (() => {
                                this.elements.$backgroundVideoHosted.hide()
                            }))
                        }
                        elementorFrontend.elements.$window.on("resize", this.changeVideoSize)
                    }
                    deactivate() {
                        "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"), elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
                    }
                    run() {
                        const e = this.getElementSettings();
                        (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
                    }
                    onInit() {
                        super.onInit(...arguments), this.changeVideoSize = this.changeVideoSize.bind(this), this.run()
                    }
                    onElementChange(e) {
                        "background_background" === e && this.run()
                    }
                }
                t.default = BackgroundVideo
            },
            8704: (e, t, n) => {
                "use strict";
                var i = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = i(n(4058)),
                    o = i(n(9501)),
                    r = [s.default, o.default];
                t.default = r
            },
            7537: (e, t, n) => {
                "use strict";
                var i = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = [i(n(4058)).default];
                t.default = s
            },
            4985: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = [() => n.e(413).then(n.bind(n, 2929)), () => n.e(413).then(n.bind(n, 343))];
                t.default = i
            },
            6397: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class GlobalHandler extends elementorModules.frontend.handlers.Base {
                    getWidgetType() {
                        return "global"
                    }
                    animate() {
                        const e = this.$element,
                            t = this.getAnimation();
                        if ("none" === t) return void e.removeClass("elementor-invisible");
                        const n = this.getElementSettings(),
                            i = n._animation_delay || n.animation_delay || 0;
                        e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout((() => {
                            e.removeClass("elementor-invisible").addClass("animated " + t)
                        }), i)
                    }
                    getAnimation() {
                        return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
                    }
                    onInit() {
                        if (super.onInit(...arguments), this.getAnimation()) {
                            const e = elementorModules.utils.Scroll.scrollObserver({
                                callback: t => {
                                    t.isInViewport && (this.animate(), e.unobserve(this.$element[0]))
                                }
                            });
                            e.observe(this.$element[0])
                        }
                    }
                    onElementChange(e) {
                        /^_?animation/.test(e) && this.animate()
                    }
                }
                t.default = e => {
                    elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                        $element: e
                    })
                }
            },
            355: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class HandlesPosition extends elementorModules.frontend.handlers.Base {
                    isActive() {
                        return elementorFrontend.isEditMode()
                    }
                    isFirstSection() {
                        return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
                    }
                    isOverflowHidden() {
                        return "hidden" === this.$element.css("overflow")
                    }
                    getOffset() {
                        if ("body" === elementor.config.document.container) return this.$element.offset().top;
                        const e = jQuery(elementor.config.document.container);
                        return this.$element.offset().top - e.offset().top
                    }
                    setHandlesPosition() {
                        const e = elementor.documents.getCurrent();
                        if (!e || !e.container.isEditable()) return;
                        const t = "elementor-section--handles-inside";
                        if (elementor.settings.page.model.attributes.scroll_snap) return void this.$element.addClass(t);
                        const n = this.isOverflowHidden();
                        if (!n && !this.isFirstSection()) return;
                        const i = n ? 0 : this.getOffset();
                        if (i < 25) {
                            this.$element.addClass(t);
                            const e = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                            i < -5 ? e.css("top", -i) : e.css("top", "")
                        } else this.$element.removeClass(t)
                    }
                    onInit() {
                        this.isActive() && (this.setHandlesPosition(), this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
                    }
                }
                t.default = HandlesPosition
            },
            3384: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class Shapes extends elementorModules.frontend.handlers.Base {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                container: "> .elementor-shape-%s"
                            },
                            svgURL: elementorFrontend.config.urls.assets + "shapes/"
                        }
                    }
                    getDefaultElements() {
                        const e = {},
                            t = this.getSettings("selectors");
                        return e.$topContainer = this.$element.find(t.container.replace("%s", "top")), e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")), e
                    }
                    isActive() {
                        return elementorFrontend.isEditMode()
                    }
                    getSvgURL(e, t) {
                        let n = this.getSettings("svgURL") + t + ".svg";
                        return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e], -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))), n
                    }
                    buildSVG(e) {
                        const t = "shape_divider_" + e,
                            n = this.getElementSettings(t),
                            i = this.elements["$" + e + "Container"];
                        if (i.attr("data-shape", n), !n) return void i.empty();
                        let s = n;
                        this.getElementSettings(t + "_negative") && (s += "-negative");
                        const o = this.getSvgURL(n, s);
                        jQuery.get(o, (e => {
                            i.empty().append(e.childNodes[0])
                        })), this.setNegative(e)
                    }
                    setNegative(e) {
                        this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
                    }
                    onInit() {
                        this.isActive(this.getSettings()) && (super.onInit(...arguments), ["top", "bottom"].forEach((e => {
                            this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                        })))
                    }
                    onElementChange(e) {
                        const t = e.match(/^shape_divider_(top|bottom)$/);
                        if (t) return void this.buildSVG(t[1]);
                        const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                        n && (this.buildSVG(n[1]), this.setNegative(n[1]))
                    }
                }
                t.default = Shapes
            },
            2804: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class StretchedSection extends elementorModules.frontend.handlers.Base {
                    bindEvents() {
                        const e = this.getUniqueHandlerID();
                        elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element), elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this), elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
                    }
                    unbindEvents() {
                        elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch), elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
                    }
                    isActive(e) {
                        return elementorFrontend.isEditMode() || e.$element.hasClass("elementor-section-stretched")
                    }
                    initStretch() {
                        this.stretch = this.stretch.bind(this), this.stretchElement = new elementorModules.frontend.tools.StretchElement({
                            element: this.$element,
                            selectors: {
                                container: this.getStretchContainer()
                            }
                        })
                    }
                    getStretchContainer() {
                        return elementorFrontend.getKitSettings("stretched_section_container") || window
                    }
                    stretch() {
                        this.getElementSettings("stretch_section") && this.stretchElement.stretch()
                    }
                    onInit() {
                        this.isActive(this.getSettings()) && (this.initStretch(), super.onInit(...arguments), this.stretch())
                    }
                    onElementChange(e) {
                        "stretch_section" === e && (this.getElementSettings("stretch_section") ? this.stretch() : this.stretchElement.reset())
                    }
                    onKitChangeStretchContainerChange() {
                        this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch()
                    }
                }
                t.default = StretchedSection
            },
            3346: (e, t, n) => {
                "use strict";
                var i = n(6028);
                e.exports = elementorModules.ViewModule.extend({
                    getDefaultSettings: () => ({
                        scrollDuration: 500,
                        selectors: {
                            links: 'a[href*="#"]',
                            targets: ".elementor-element, .elementor-menu-anchor",
                            scrollable: (0, i.isScrollSnapActive)() ? "body" : "html, body"
                        }
                    }),
                    getDefaultElements() {
                        return {
                            $scrollable: jQuery(this.getSettings("selectors").scrollable)
                        }
                    },
                    bindEvents() {
                        elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
                    },
                    handleAnchorLinks(e) {
                        var t, n = e.currentTarget,
                            s = location.pathname === n.pathname;
                        if (location.hostname === n.hostname && s && !(n.hash.length < 2)) {
                            try {
                                t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                            } catch (e) {
                                return
                            }
                            if (t.length) {
                                var o = t.offset().top,
                                    r = elementorFrontend.elements.$wpAdminBar,
                                    a = jQuery(".elementor-section.elementor-sticky--active:visible");
                                r.length > 0 && (o -= r.height()), a.length > 0 && (o -= Math.max.apply(null, a.map((function() {
                                    return jQuery(this).outerHeight()
                                })).get())), e.preventDefault(), o = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", o), (0, i.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"), this.elements.$scrollable.animate({
                                    scrollTop: o
                                }, this.getSettings("scrollDuration"), "linear", (() => {
                                    (0, i.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                                }))
                            }
                        }
                    },
                    onInit() {
                        elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
                    }
                })
            },
            6866: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class AssetsLoader {
                    getScriptElement(e) {
                        const t = document.createElement("script");
                        return t.src = e, t
                    }
                    getStyleElement(e) {
                        const t = document.createElement("link");
                        return t.rel = "stylesheet", t.href = e, t
                    }
                    load(e, t) {
                        const n = AssetsLoader.assets[e][t];
                        return n.loader || (n.loader = new Promise((t => {
                            const i = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                            i.onload = () => t(!0);
                            const s = "head" === n.parent ? n.parent : "body";
                            document[s].appendChild(i)
                        }))), n.loader
                    }
                }
                t.default = AssetsLoader;
                const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min";
                AssetsLoader.assets = {
                    script: {
                        dialog: {
                            src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`
                        },
                        "share-link": {
                            src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`
                        },
                        swiper: {
                            src: `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`
                        }
                    },
                    style: {}
                }
            },
            8646: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class LightboxManager extends elementorModules.ViewModule {
                    static getLightbox() {
                        const e = new Promise((e => {
                                n.e(723).then(n.t.bind(n, 3896, 23)).then((t => {
                                    let {
                                        default: n
                                    } = t;
                                    return e(new n)
                                }))
                            })),
                            t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
                            i = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                        return Promise.all([e, t, i]).then((() => e))
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                links: "a, [data-elementor-lightbox]"
                            }
                        }
                    }
                    getDefaultElements() {
                        return {
                            $links: jQuery(this.getSettings("selectors.links"))
                        }
                    }
                    isLightboxLink(e) {
                        if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo) return !1;
                        const t = elementorFrontend.getKitSettings("global_image_lightbox"),
                            n = e.dataset.elementorOpenLightbox;
                        return "yes" === n || t && "no" !== n
                    }
                    async onLinkClick(e) {
                        const t = e.currentTarget,
                            n = jQuery(e.target),
                            i = elementorFrontend.isEditMode(),
                            s = i && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),
                            o = !!n.closest(".elementor-edit-area").length;
                        if (!this.isLightboxLink(t)) return void(i && o && e.preventDefault());
                        if (e.preventDefault(), i && !elementor.getPreferences("lightbox_in_editor")) return;
                        if (s) return;
                        (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
                    }
                    isOptimizedAssetsLoading() {
                        return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
                    }
                    bindEvents() {
                        elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e => this.onLinkClick(e)))
                    }
                    onInit() {
                        super.onInit(...arguments), this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e, t) => {
                            if (this.isLightboxLink(t)) return LightboxManager.getLightbox(), !1
                        }))
                    }
                }
                t.default = LightboxManager
            },
            8628: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = class Swiper {
                    constructor(e, t) {
                        return this.config = t, this.config.breakpoints && (this.config = this.adjustConfig(t)), jQuery(e).closest(".elementor-widget-wrap").addClass("e-swiper-container"), jQuery(e).closest(".elementor-widget").addClass("e-widget-swiper"), new Promise((t => {
                            if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading) return t(this.createSwiperInstance(e, this.config));
                            elementorFrontend.utils.assetsLoader.load("script", "swiper").then((() => t(this.createSwiperInstance(e, this.config))))
                        }))
                    }
                    createSwiperInstance(e, t) {
                        const n = window.Swiper;
                        return n.prototype.adjustConfig = this.adjustConfig, new n(e, t)
                    }
                    adjustConfig(e) {
                        if (!e.handleElementorBreakpoints) return e;
                        const t = elementorFrontend.config.responsive.activeBreakpoints,
                            n = elementorFrontend.breakpoints.getBreakpointValues();
                        return Object.keys(e.breakpoints).forEach((i => {
                            const s = parseInt(i);
                            let o;
                            if (s === t.mobile.value || s + 1 === t.mobile.value) o = 0;
                            else if (!t.widescreen || s !== t.widescreen.value && s + 1 !== t.widescreen.value) {
                                const e = n.findIndex((e => s === e || s + 1 === e));
                                o = n[e - 1]
                            } else o = s;
                            e.breakpoints[o] = e.breakpoints[i], e.breakpoints[i] = {
                                slidesPerView: e.slidesPerView,
                                slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                            }
                        })), e
                    }
                }
            },
            2064: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, n(5719);
                class _default extends elementorModules.ViewModule {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                            }
                        }
                    }
                    bindEvents() {
                        elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
                    }
                    initActions() {
                        this.actions = {
                            lightbox: async e => {
                                const t = await elementorFrontend.utils.lightbox;
                                e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"), t.showModal(e))
                            }
                        }
                    }
                    addAction(e, t) {
                        this.actions[e] = t
                    }
                    runAction(e) {
                        const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                        if (!t) return;
                        const n = this.actions[t[1]];
                        if (!n) return;
                        let i = {};
                        const s = e.match(/settings=(.+)/);
                        s && (i = JSON.parse(atob(s[1])));
                        for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = arguments[a];
                        n(i, ...r)
                    }
                    runLinkAction(e) {
                        e.preventDefault(), this.runAction(jQuery(e.currentTarget).attr("href"), e)
                    }
                    runHashAction() {
                        if (!location.hash) return;
                        const e = document.querySelector(`[e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                        e && this.runAction(e.getAttribute("e-action-hash"))
                    }
                    createActionHash(e, t) {
                        return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
                    }
                    onInit() {
                        super.onInit(), this.initActions(), elementorFrontend.on("components:init", this.runHashAction.bind(this))
                    }
                }
                t.default = _default
            },
            6028: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isScrollSnapActive = t.escapeHTML = void 0;
                t.escapeHTML = e => {
                    const t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    };
                    return e.replace(/[&<>'"]/g, (e => t[e] || e))
                };
                t.isScrollSnapActive = () => "yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes ? .scroll_snap : elementorFrontend.config.settings.page ? .scroll_snap)
            },
            4773: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class BaseLoader extends elementorModules.ViewModule {
                    getDefaultSettings() {
                        return {
                            isInserted: !1,
                            selectors: {
                                firstScript: "script:first"
                            }
                        }
                    }
                    getDefaultElements() {
                        return {
                            $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                        }
                    }
                    insertAPI() {
                        this.elements.$firstScript.before(jQuery("<script>", {
                            src: this.getApiURL()
                        })), this.setSettings("isInserted", !0)
                    }
                    getVideoIDFromURL(e) {
                        const t = e.match(this.getURLRegex());
                        return t && t[1]
                    }
                    onApiReady(e) {
                        this.getSettings("isInserted") || this.insertAPI(), this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((() => {
                            this.onApiReady(e)
                        }), 350)
                    }
                    getAutoplayURL(e) {
                        return e.replace("&autoplay=0", "") + "&autoplay=1"
                    }
                }
                t.default = BaseLoader
            },
            1911: (e, t, n) => {
                "use strict";
                var i = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = i(n(4773));
                class VimeoLoader extends s.default {
                    getApiURL() {
                        return "https://player.vimeo.com/api/player.js"
                    }
                    getURLRegex() {
                        return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
                    }
                    isApiLoaded() {
                        return window.Vimeo
                    }
                    getApiObject() {
                        return Vimeo
                    }
                    getAutoplayURL(e) {
                        const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                        return e.replace(t[0], "") + t
                    }
                }
                t.default = VimeoLoader
            },
            1604: (e, t, n) => {
                "use strict";
                var i = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = i(n(4773));
                class YoutubeLoader extends s.default {
                    getApiURL() {
                        return "https://www.youtube.com/iframe_api"
                    }
                    getURLRegex() {
                        return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
                    }
                    isApiLoaded() {
                        return window.YT && YT.loaded
                    }
                    getApiObject() {
                        return YT
                    }
                }
                t.default = YoutubeLoader
            },
            59: (e, t, n) => {
                "use strict";
                n.p = elementorFrontendConfig.urls.assets + "js/"
            },
            4375: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class Breakpoints extends elementorModules.Module {
                    constructor(e) {
                        super(), this.responsiveConfig = e
                    }
                    getActiveBreakpointsList() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e = {
                            largeToSmall: !1,
                            withDesktop: !1,
                            ...e
                        };
                        const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                        if (e.withDesktop) {
                            const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                            t.splice(e, 0, "desktop")
                        }
                        return e.largeToSmall && t.reverse(), t
                    }
                    getBreakpointValues() {
                        const {
                            activeBreakpoints: e
                        } = this.responsiveConfig, t = [];
                        return Object.values(e).forEach((e => {
                            t.push(e.value)
                        })), t
                    }
                    getDesktopPreviousDeviceKey() {
                        let e = "";
                        const {
                            activeBreakpoints: t
                        } = this.responsiveConfig, n = Object.keys(t), i = n.length;
                        return e = "min" === t[n[i - 1]].direction ? n[i - 2] : n[i - 1], e
                    }
                    getDesktopMinPoint() {
                        const {
                            activeBreakpoints: e
                        } = this.responsiveConfig;
                        return e[this.getDesktopPreviousDeviceKey()].value + 1
                    }
                    getDeviceMinBreakpoint(e) {
                        if ("desktop" === e) return this.getDesktopMinPoint();
                        const {
                            activeBreakpoints: t
                        } = this.responsiveConfig, n = Object.keys(t);
                        let i;
                        if (n[0] === e) i = 320;
                        else if ("widescreen" === e) i = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                        else {
                            const s = n.indexOf(e);
                            i = t[n[s - 1]].value + 1
                        }
                        return i
                    }
                    getActiveMatchRegex() {
                        return new RegExp(this.getActiveBreakpointsList().map((e => "_" + e)).join("|") + "$")
                    }
                }
                t.default = Breakpoints
            },
            6404: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = t.Events = void 0;
                class Events {
                    static dispatch(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        e = e instanceof jQuery ? e[0] : e, i && e.dispatchEvent(new CustomEvent(i, {
                            detail: n
                        })), e.dispatchEvent(new CustomEvent(t, {
                            detail: n
                        }))
                    }
                }
                t.Events = Events;
                var n = Events;
                t.default = n
            },
            9469: e => {
                "use strict";
                e.exports = function() {
                    var e, t = Array.prototype.slice,
                        n = {
                            actions: {},
                            filters: {}
                        };

                    function _removeHook(e, t, i, s) {
                        var o, r, a;
                        if (n[e][t])
                            if (i)
                                if (o = n[e][t], s)
                                    for (a = o.length; a--;)(r = o[a]).callback === i && r.context === s && o.splice(a, 1);
                                else
                                    for (a = o.length; a--;) o[a].callback === i && o.splice(a, 1);
                        else n[e][t] = []
                    }

                    function _addHook(e, t, i, s, o) {
                        var r = {
                                callback: i,
                                priority: s,
                                context: o
                            },
                            a = n[e][t];
                        if (a) {
                            var l = !1;
                            if (jQuery.each(a, (function() {
                                    if (this.callback === i) return l = !0, !1
                                })), l) return;
                            a.push(r), a = function _hookInsertSort(e) {
                                for (var t, n, i, s = 1, o = e.length; s < o; s++) {
                                    for (t = e[s], n = s;
                                        (i = e[n - 1]) && i.priority > t.priority;) e[n] = e[n - 1], --n;
                                    e[n] = t
                                }
                                return e
                            }(a)
                        } else a = [r];
                        n[e][t] = a
                    }

                    function _runHook(e, t, i) {
                        var s, o, r = n[e][t];
                        if (!r) return "filters" === e && i[0];
                        if (o = r.length, "filters" === e)
                            for (s = 0; s < o; s++) i[0] = r[s].callback.apply(r[s].context, i);
                        else
                            for (s = 0; s < o; s++) r[s].callback.apply(r[s].context, i);
                        return "filters" !== e || i[0]
                    }
                    return e = {
                        removeFilter: function removeFilter(t, n) {
                            return "string" == typeof t && _removeHook("filters", t, n), e
                        },
                        applyFilters: function applyFilters() {
                            var n = t.call(arguments),
                                i = n.shift();
                            return "string" == typeof i ? _runHook("filters", i, n) : e
                        },
                        addFilter: function addFilter(t, n, i, s) {
                            return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, i = parseInt(i || 10, 10), s), e
                        },
                        removeAction: function removeAction(t, n) {
                            return "string" == typeof t && _removeHook("actions", t, n), e
                        },
                        doAction: function doAction() {
                            var n = t.call(arguments),
                                i = n.shift();
                            return "string" == typeof i && _runHook("actions", i, n), e
                        },
                        addAction: function addAction(t, n, i, s) {
                            return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, i = parseInt(i || 10, 10), s), e
                        }
                    }, e
                }
            },
            3308: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                const matchUserAgent = e => n.indexOf(e) >= 0,
                    n = navigator.userAgent,
                    i = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/"),
                    s = matchUserAgent("Firefox"),
                    o = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
                    r = /Trident|MSIE/.test(n) && !!document.documentMode,
                    a = !r && !!window.StyleMedia || matchUserAgent("Edg"),
                    l = !!window.chrome && matchUserAgent("Chrome") && !(a || i),
                    d = matchUserAgent("Chrome") && !!window.CSS;
                var c = {
                    appleWebkit: matchUserAgent("AppleWebKit") && !d,
                    blink: d,
                    chrome: l,
                    edge: a,
                    firefox: s,
                    ie: r,
                    mac: matchUserAgent("Macintosh"),
                    opera: i,
                    safari: o,
                    webkit: matchUserAgent("AppleWebKit")
                };
                t.default = c
            },
            5107: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    get(e, t) {
                        let n;
                        t = t || {};
                        try {
                            n = t.session ? sessionStorage : localStorage
                        } catch (t) {
                            return e ? void 0 : {}
                        }
                        let i = n.getItem("elementor");
                        i = i ? JSON.parse(i) : {}, i.__expiration || (i.__expiration = {});
                        const s = i.__expiration;
                        let o = [];
                        e ? s[e] && (o = [e]) : o = Object.keys(s);
                        let r = !1;
                        return o.forEach((e => {
                            new Date(s[e]) < new Date && (delete i[e], delete s[e], r = !0)
                        })), r && this.save(i, t.session), e ? i[e] : i
                    }
                    set(e, t, n) {
                        n = n || {};
                        const i = this.get(null, n);
                        if (i[e] = t, n.lifetimeInSeconds) {
                            const t = new Date;
                            t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds), i.__expiration[e] = t.getTime()
                        }
                        this.save(i, n.session)
                    }
                    save(e, t) {
                        let n;
                        try {
                            n = t ? sessionStorage : localStorage
                        } catch (e) {
                            return
                        }
                        n.setItem("elementor", JSON.stringify(e))
                    }
                }
                t.default = _default
            },
            6046: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("text-path", (() => n.e(48).then(n.bind(n, 6468))))
                    }
                }
                t.default = _default
            },
            1855: (e, t, n) => {
                var i = n(5516),
                    s = TypeError;
                e.exports = function(e, t) {
                    if (i(t, e)) return e;
                    throw s("Incorrect invocation")
                }
            },
            3621: e => {
                e.exports = {
                    IndexSizeError: {
                        s: "INDEX_SIZE_ERR",
                        c: 1,
                        m: 1
                    },
                    DOMStringSizeError: {
                        s: "DOMSTRING_SIZE_ERR",
                        c: 2,
                        m: 0
                    },
                    HierarchyRequestError: {
                        s: "HIERARCHY_REQUEST_ERR",
                        c: 3,
                        m: 1
                    },
                    WrongDocumentError: {
                        s: "WRONG_DOCUMENT_ERR",
                        c: 4,
                        m: 1
                    },
                    InvalidCharacterError: {
                        s: "INVALID_CHARACTER_ERR",
                        c: 5,
                        m: 1
                    },
                    NoDataAllowedError: {
                        s: "NO_DATA_ALLOWED_ERR",
                        c: 6,
                        m: 0
                    },
                    NoModificationAllowedError: {
                        s: "NO_MODIFICATION_ALLOWED_ERR",
                        c: 7,
                        m: 1
                    },
                    NotFoundError: {
                        s: "NOT_FOUND_ERR",
                        c: 8,
                        m: 1
                    },
                    NotSupportedError: {
                        s: "NOT_SUPPORTED_ERR",
                        c: 9,
                        m: 1
                    },
                    InUseAttributeError: {
                        s: "INUSE_ATTRIBUTE_ERR",
                        c: 10,
                        m: 1
                    },
                    InvalidStateError: {
                        s: "INVALID_STATE_ERR",
                        c: 11,
                        m: 1
                    },
                    SyntaxError: {
                        s: "SYNTAX_ERR",
                        c: 12,
                        m: 1
                    },
                    InvalidModificationError: {
                        s: "INVALID_MODIFICATION_ERR",
                        c: 13,
                        m: 1
                    },
                    NamespaceError: {
                        s: "NAMESPACE_ERR",
                        c: 14,
                        m: 1
                    },
                    InvalidAccessError: {
                        s: "INVALID_ACCESS_ERR",
                        c: 15,
                        m: 1
                    },
                    ValidationError: {
                        s: "VALIDATION_ERR",
                        c: 16,
                        m: 0
                    },
                    TypeMismatchError: {
                        s: "TYPE_MISMATCH_ERR",
                        c: 17,
                        m: 1
                    },
                    SecurityError: {
                        s: "SECURITY_ERR",
                        c: 18,
                        m: 1
                    },
                    NetworkError: {
                        s: "NETWORK_ERR",
                        c: 19,
                        m: 1
                    },
                    AbortError: {
                        s: "ABORT_ERR",
                        c: 20,
                        m: 1
                    },
                    URLMismatchError: {
                        s: "URL_MISMATCH_ERR",
                        c: 21,
                        m: 1
                    },
                    QuotaExceededError: {
                        s: "QUOTA_EXCEEDED_ERR",
                        c: 22,
                        m: 1
                    },
                    TimeoutError: {
                        s: "TIMEOUT_ERR",
                        c: 23,
                        m: 1
                    },
                    InvalidNodeTypeError: {
                        s: "INVALID_NODE_TYPE_ERR",
                        c: 24,
                        m: 1
                    },
                    DataCloneError: {
                        s: "DATA_CLONE_ERR",
                        c: 25,
                        m: 1
                    }
                }
            },
            5719: (e, t, n) => {
                "use strict";
                var i = n(1695),
                    s = n(2086),
                    o = n(563),
                    r = n(5736),
                    a = n(7826).f,
                    l = n(9606),
                    d = n(1855),
                    c = n(5070),
                    u = n(1879),
                    h = n(3621),
                    m = n(1765),
                    g = n(5283),
                    p = n(3296),
                    f = "DOMException",
                    v = o("Error"),
                    b = o(f),
                    _ = function DOMException() {
                        d(this, y);
                        var e = arguments.length,
                            t = u(e < 1 ? void 0 : arguments[0]),
                            n = u(e < 2 ? void 0 : arguments[1], "Error"),
                            i = new b(t, n),
                            s = v(t);
                        return s.name = f, a(i, "stack", r(1, m(s.stack, 1))), c(i, this, _), i
                    },
                    y = _.prototype = b.prototype,
                    w = "stack" in v(f),
                    k = "stack" in new b(1, 2),
                    S = b && g && Object.getOwnPropertyDescriptor(s, f),
                    E = !(!S || S.writable && S.configurable),
                    C = w && !E && !k;
                i({
                    global: !0,
                    constructor: !0,
                    forced: p || C
                }, {
                    DOMException: C ? _ : b
                });
                var M = o(f),
                    A = M.prototype;
                if (A.constructor !== M)
                    for (var D in p || a(A, "constructor", r(1, M)), h)
                        if (l(h, D)) {
                            var $ = h[D],
                                O = $.s;
                            l(M, O) || a(M, O, r(6, $.c))
                        }
            }
        },
        e => {
            e.O(0, [354], (() => {
                return t = 5654, e(e.s = t);
                var t
            }));
            e.O()
        }
    ])
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.7.8 ] [ " + e.stack + " ]");
}
try { /*!pro-elements - v3.7.3 - 31-07-2022*/
    "use strict";
    (self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([
        [437], {
            7996: (e, t, n) => {
                var o = n(3203),
                    s = o(n(4042)),
                    r = o(n(8528)),
                    l = o(n(7857)),
                    a = o(n(3184)),
                    d = o(n(7043)),
                    i = o(n(4223)),
                    u = o(n(4231)),
                    c = o(n(2741)),
                    m = o(n(3513)),
                    h = o(n(3002)),
                    f = o(n(8650)),
                    g = o(n(6701)),
                    _ = o(n(102)),
                    p = o(n(1748)),
                    v = o(n(5438)),
                    b = o(n(2439)),
                    M = o(n(5032));
                const extendDefaultHandlers = e => ({ ...e,
                    ...{
                        animatedText: s.default,
                        carousel: r.default,
                        countdown: l.default,
                        hotspot: a.default,
                        form: d.default,
                        gallery: i.default,
                        lottie: u.default,
                        nav_menu: c.default,
                        popup: m.default,
                        posts: h.default,
                        share_buttons: f.default,
                        slides: g.default,
                        social: _.default,
                        themeBuilder: v.default,
                        themeElements: b.default,
                        woocommerce: M.default,
                        tableOfContents: p.default
                    }
                });
                elementorProFrontend.on("elementor-pro/modules/init:before", (() => {
                    elementorFrontend.hooks.addFilter("elementor-pro/frontend/handlers", extendDefaultHandlers)
                }))
            },
            8115: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.close = void 0;
                const s = new(o(n(4519)).default)("eicon"),
                    r = {
                        get element() {
                            return s.createSvgElement("close", {
                                path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
                                width: 1e3,
                                height: 1e3
                            })
                        }
                    };
                t.close = r
            },
            4519: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3231));
                class IconsManager {
                    constructor(e) {
                        if (this.prefix = `${e}-`, !IconsManager.symbolsContainer) {
                            const e = "e-font-icon-svg-symbols";
                            IconsManager.symbolsContainer = document.getElementById(e), IconsManager.symbolsContainer || (IconsManager.symbolsContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg"), IconsManager.symbolsContainer.setAttributeNS(null, "style", "display: none;"), IconsManager.symbolsContainer.setAttributeNS(null, "class", e), document.body.appendChild(IconsManager.symbolsContainer))
                        }
                    }
                    createSvgElement(e, t) {
                        let {
                            path: n,
                            width: o,
                            height: s
                        } = t;
                        const r = this.prefix + e,
                            l = "#" + this.prefix + e;
                        if (!IconsManager.iconsUsageList.includes(r)) {
                            if (!IconsManager.symbolsContainer.querySelector(l)) {
                                const e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
                                e.id = r, e.innerHTML = '<path d="' + n + '"></path>', e.setAttributeNS(null, "viewBox", "0 0 " + o + " " + s), IconsManager.symbolsContainer.appendChild(e)
                            }
                            IconsManager.iconsUsageList.push(r)
                        }
                        const a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        return a.innerHTML = '<use xlink:href="' + l + '" />', a.setAttributeNS(null, "class", "e-font-icon-svg e-" + r), a
                    }
                }
                t.default = IconsManager, (0, s.default)(IconsManager, "symbolsContainer", void 0), (0, s.default)(IconsManager, "iconsUsageList", [])
            },
            4042: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("animated-headline", (() => n.e(26).then(n.bind(n, 629))))
                    }
                }
                t.default = _default
            },
            8528: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("media-carousel", (() => n.e(534).then(n.bind(n, 8509)))), elementorFrontend.elementsHandler.attachHandler("testimonial-carousel", (() => n.e(369).then(n.bind(n, 4526)))), elementorFrontend.elementsHandler.attachHandler("reviews", (() => n.e(369).then(n.bind(n, 4526))))
                    }
                }
                t.default = _default
            },
            7857: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("countdown", (() => n.e(804).then(n.bind(n, 5449))))
                    }
                }
                t.default = _default
            },
            7043: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("form", [() => n.e(680).then(n.bind(n, 8503)), () => n.e(680).then(n.bind(n, 1393)), () => n.e(680).then(n.bind(n, 6529)), () => n.e(680).then(n.bind(n, 784)), () => n.e(680).then(n.bind(n, 2108)), () => n.e(680).then(n.bind(n, 5347))]), elementorFrontend.elementsHandler.attachHandler("subscribe", [() => n.e(680).then(n.bind(n, 8503)), () => n.e(680).then(n.bind(n, 1393)), () => n.e(680).then(n.bind(n, 6529))])
                    }
                }
                t.default = _default
            },
            4223: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("gallery", (() => n.e(121).then(n.bind(n, 2219))))
                    }
                }
                t.default = _default
            },
            3184: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("hotspot", (() => n.e(888).then(n.bind(n, 1016))))
                    }
                }
                t.default = _default
            },
            4231: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("lottie", (() => n.e(288).then(n.bind(n, 1464))))
                    }
                }
                t.default = _default
            },
            2741: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), jQuery.fn.smartmenus && (jQuery.SmartMenus.prototype.isCSSOn = function() {
                            return !0
                        }, elementorFrontend.config.is_rtl && (jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = !0)), elementorFrontend.elementsHandler.attachHandler("nav-menu", (() => n.e(42).then(n.bind(n, 7480))))
                    }
                }
                t.default = _default
            },
            7107: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2635)),
                    r = o(n(3467)),
                    l = n(8115);
                class _default extends elementorModules.frontend.Document {
                    bindEvents() {
                        const e = this.getDocumentSettings("open_selector");
                        e && elementorFrontend.elements.$body.on("click", e, this.showModal.bind(this))
                    }
                    startTiming() {
                        new r.default(this.getDocumentSettings("timing"), this).check() && this.initTriggers()
                    }
                    initTriggers() {
                        this.triggers = new s.default(this.getDocumentSettings("triggers"), this)
                    }
                    showModal(e) {
                        const t = this.getDocumentSettings();
                        if (!this.isEdit) {
                            if (!elementorFrontend.isWPPreviewMode()) {
                                if (this.getStorage("disable")) return;
                                if (e && elementorProFrontend.modules.popup.popupPopped && t.avoid_multiple_popups) return
                            }
                            this.$element = jQuery(this.elementHTML), this.elements.$elements = this.$element.find(this.getSettings("selectors.elements"))
                        }
                        const n = this.getModal(),
                            o = n.getElements("closeButton");
                        n.setMessage(this.$element).show(), this.isEdit || (t.close_button_delay && (o.hide(), clearTimeout(this.closeButtonTimeout), this.closeButtonTimeout = setTimeout((() => o.show()), 1e3 * t.close_button_delay)), super.runElementsHandlers()), this.setEntranceAnimation(), t.timing && t.timing.times_count || this.countTimes(), elementorProFrontend.modules.popup.popupPopped = !0
                    }
                    setEntranceAnimation() {
                        const e = this.getModal().getElements("widgetContent"),
                            t = this.getDocumentSettings(),
                            n = elementorFrontend.getCurrentDeviceSetting(t, "entrance_animation");
                        if (this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = n, !n) return;
                        const o = t.entrance_animation_duration.size;
                        e.addClass(n), setTimeout((() => e.removeClass(n)), 1e3 * o)
                    }
                    setExitAnimation() {
                        const e = this.getModal(),
                            t = this.getDocumentSettings(),
                            n = e.getElements("widgetContent"),
                            o = elementorFrontend.getCurrentDeviceSetting(t, "exit_animation"),
                            s = o ? t.entrance_animation_duration.size : 0;
                        setTimeout((() => {
                            o && n.removeClass(o + " reverse"), this.isEdit || (this.$element.remove(), e.getElements("widget").hide())
                        }), 1e3 * s), o && n.addClass(o + " reverse")
                    }
                    initModal() {
                        let e;
                        this.getModal = () => {
                            if (!e) {
                                const t = this.getDocumentSettings(),
                                    n = this.getSettings("id"),
                                    triggerPopupEvent = e => {
                                        const t = "elementor/popup/" + e;
                                        elementorFrontend.elements.$document.trigger(t, [n, this]), window.dispatchEvent(new CustomEvent(t, {
                                            detail: {
                                                id: n,
                                                instance: this
                                            }
                                        }))
                                    };
                                let o = "elementor-popup-modal";
                                t.classes && (o += " " + t.classes);
                                const s = {
                                    id: "elementor-popup-modal-" + n,
                                    className: o,
                                    closeButton: !0,
                                    preventScroll: t.prevent_scroll,
                                    onShow: () => triggerPopupEvent("show"),
                                    onHide: () => triggerPopupEvent("hide"),
                                    effects: {
                                        hide: () => {
                                            t.timing && t.timing.times_count && this.countTimes(), this.setExitAnimation()
                                        },
                                        show: "show"
                                    },
                                    hide: {
                                        auto: !!t.close_automatically,
                                        autoDelay: 1e3 * t.close_automatically,
                                        onBackgroundClick: !t.prevent_close_on_background_click,
                                        onOutsideClick: !t.prevent_close_on_background_click,
                                        onEscKeyPress: !t.prevent_close_on_esc_key,
                                        ignore: ".flatpickr-calendar"
                                    },
                                    position: {
                                        enable: !1
                                    }
                                };
                                elementorFrontend.config.experimentalFeatures.e_font_icon_svg && (s.closeButtonOptions = {
                                    iconElement: l.close.element
                                }), s.closeButtonClass = "eicon-close", e = elementorFrontend.getDialogsManager().createWidget("lightbox", s), e.getElements("widgetContent").addClass("animated");
                                const r = e.getElements("closeButton");
                                this.isEdit && (r.off("click"), e.hide = () => {}), this.setCloseButtonPosition()
                            }
                            return e
                        }
                    }
                    setCloseButtonPosition() {
                        const e = this.getModal(),
                            t = this.getDocumentSettings("close_button_position");
                        e.getElements("closeButton").appendTo(e.getElements("outside" === t ? "widget" : "widgetContent"))
                    }
                    disable() {
                        this.setStorage("disable", !0)
                    }
                    setStorage(e, t, n) {
                        elementorFrontend.storage.set(`popup_${this.getSettings("id")}_${e}`, t, n)
                    }
                    getStorage(e, t) {
                        return elementorFrontend.storage.get(`popup_${this.getSettings("id")}_${e}`, t)
                    }
                    countTimes() {
                        const e = this.getStorage("times") || 0;
                        this.setStorage("times", e + 1)
                    }
                    runElementsHandlers() {}
                    async onInit() {
                        super.onInit(), window.DialogsManager || await elementorFrontend.utils.assetsLoader.load("script", "dialog"), this.initModal(), this.isEdit ? this.showModal() : (this.$element.show().remove(), this.elementHTML = this.$element[0].outerHTML, elementorFrontend.isEditMode() || (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings("id") ? this.showModal() : this.startTiming()))
                    }
                    onSettingsChange(e) {
                        const t = Object.keys(e.changed)[0]; - 1 !== t.indexOf("entrance_animation") && this.setEntranceAnimation(), "exit_animation" === t && this.setExitAnimation(), "close_button_position" === t && this.setCloseButtonPosition()
                    }
                }
                t.default = _default
            },
            3513: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(7107));
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.hooks.addAction("elementor/frontend/documents-manager/init-classes", this.addDocumentClass), elementorFrontend.elementsHandler.attachHandler("form", (() => n.e(50).then(n.bind(n, 8872)))), elementorFrontend.on("components:init", (() => this.onFrontendComponentsInit())), elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode() || this.setViewsAndSessions()
                    }
                    addDocumentClass(e) {
                        e.addDocumentClass("popup", s.default)
                    }
                    setViewsAndSessions() {
                        const e = elementorFrontend.storage.get("pageViews") || 0;
                        elementorFrontend.storage.set("pageViews", e + 1);
                        if (!elementorFrontend.storage.get("activeSession", {
                                session: !0
                            })) {
                            elementorFrontend.storage.set("activeSession", !0, {
                                session: !0
                            });
                            const e = elementorFrontend.storage.get("sessions") || 0;
                            elementorFrontend.storage.set("sessions", e + 1)
                        }
                    }
                    showPopup(e) {
                        const t = elementorFrontend.documentsManager.documents[e.id];
                        if (!t) return;
                        const n = t.getModal();
                        e.toggle && n.isVisible() ? n.hide() : t.showModal()
                    }
                    closePopup(e, t) {
                        const n = jQuery(t.target).parents('[data-elementor-type="popup"]').data("elementorId");
                        if (!n) return;
                        const o = elementorFrontend.documentsManager.documents[n];
                        o.getModal().hide(), e.do_not_show_again && o.disable()
                    }
                    onFrontendComponentsInit() {
                        elementorFrontend.utils.urlActions.addAction("popup:open", (e => this.showPopup(e))), elementorFrontend.utils.urlActions.addAction("popup:close", ((e, t) => this.closePopup(e, t)))
                    }
                }
                t.default = _default
            },
            3467: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(6723)),
                    r = o(n(3754)),
                    l = o(n(6470)),
                    a = o(n(221)),
                    d = o(n(2193)),
                    i = o(n(6195)),
                    u = o(n(5247)),
                    c = o(n(349));
                class _default extends elementorModules.Module {
                    constructor(e, t) {
                        super(e), this.document = t, this.timingClasses = {
                            page_views: s.default,
                            sessions: r.default,
                            url: l.default,
                            sources: a.default,
                            logged_in: d.default,
                            devices: i.default,
                            times: u.default,
                            browsers: c.default
                        }
                    }
                    check() {
                        const e = this.getSettings();
                        let t = !0;
                        return jQuery.each(this.timingClasses, ((n, o) => {
                            if (!e[n]) return;
                            new o(e, this.document).check() || (t = !1)
                        })), t
                    }
                }
                t.default = _default
            },
            3107: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor(e, t) {
                        super(e), this.document = t
                    }
                    getTimingSetting(e) {
                        return this.getSettings(this.getName() + "_" + e)
                    }
                }
                t.default = _default
            },
            349: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "browsers"
                    }
                    check() {
                        if ("all" === this.getTimingSetting("browsers")) return !0;
                        const e = this.getTimingSetting("browsers_options"),
                            t = elementorFrontend.utils.environment;
                        return e.some((e => t[e]))
                    }
                }
                t.default = _default
            },
            6195: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "devices"
                    }
                    check() {
                        return -1 !== this.getTimingSetting("devices").indexOf(elementorFrontend.getCurrentDeviceMode())
                    }
                }
                t.default = _default
            },
            2193: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "logged_in"
                    }
                    check() {
                        const e = elementorFrontend.config.user;
                        if (!e) return !0;
                        if ("all" === this.getTimingSetting("users")) return !1;
                        return !this.getTimingSetting("roles").filter((t => -1 !== e.roles.indexOf(t))).length
                    }
                }
                t.default = _default
            },
            6723: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "page_views"
                    }
                    check() {
                        const e = elementorFrontend.storage.get("pageViews"),
                            t = this.getName();
                        let n = this.document.getStorage(t + "_initialPageViews");
                        return n || (this.document.setStorage(t + "_initialPageViews", e), n = e), e - n >= this.getTimingSetting("views")
                    }
                }
                t.default = _default
            },
            3754: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "sessions"
                    }
                    check() {
                        const e = elementorFrontend.storage.get("sessions"),
                            t = this.getName();
                        let n = this.document.getStorage(t + "_initialSessions");
                        return n || (this.document.setStorage(t + "_initialSessions", e), n = e), e - n >= this.getTimingSetting("sessions")
                    }
                }
                t.default = _default
            },
            221: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "sources"
                    }
                    check() {
                        const e = this.getTimingSetting("sources");
                        if (3 === e.length) return !0;
                        const t = document.referrer.replace(/https?:\/\/(?:www\.)?/, "");
                        return 0 === t.indexOf(location.host.replace("www.", "")) ? -1 !== e.indexOf("internal") : -1 !== e.indexOf("external") || -1 !== e.indexOf("search") && /^(google|yahoo|bing|yandex|baidu)\./.test(t)
                    }
                }
                t.default = _default
            },
            5247: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "times"
                    }
                    check() {
                        const e = this.document.getStorage("times") || 0;
                        return this.getTimingSetting("times") > e
                    }
                }
                t.default = _default
            },
            6470: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(3107));
                class _default extends s.default {
                    getName() {
                        return "url"
                    }
                    check() {
                        const e = this.getTimingSetting("url"),
                            t = this.getTimingSetting("action"),
                            n = document.referrer;
                        if ("regex" !== t) return "hide" === t ^ -1 !== n.indexOf(e);
                        let o;
                        try {
                            o = new RegExp(e)
                        } catch (e) {
                            return !1
                        }
                        return o.test(n)
                    }
                }
                t.default = _default
            },
            2635: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(4622)),
                    r = o(n(8729)),
                    l = o(n(358)),
                    a = o(n(62)),
                    d = o(n(8811)),
                    i = o(n(9758));
                class _default extends elementorModules.Module {
                    constructor(e, t) {
                        super(e), this.document = t, this.triggers = [], this.triggerClasses = {
                            page_load: s.default,
                            scrolling: r.default,
                            scrolling_to: l.default,
                            click: a.default,
                            inactivity: d.default,
                            exit_intent: i.default
                        }, this.runTriggers()
                    }
                    runTriggers() {
                        const e = this.getSettings();
                        jQuery.each(this.triggerClasses, ((t, n) => {
                            if (!e[t]) return;
                            const o = new n(e, (() => this.onTriggerFired()));
                            o.run(), this.triggers.push(o)
                        }))
                    }
                    destroyTriggers() {
                        this.triggers.forEach((e => e.destroy())), this.triggers = []
                    }
                    onTriggerFired() {
                        this.document.showModal(!0), this.destroyTriggers()
                    }
                }
                t.default = _default
            },
            2162: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor(e, t) {
                        super(e), this.callback = t
                    }
                    getTriggerSetting(e) {
                        return this.getSettings(this.getName() + "_" + e)
                    }
                }
                t.default = _default
            },
            62: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2162));
                class _default extends s.default {
                    constructor() {
                        super(...arguments), this.checkClick = this.checkClick.bind(this), this.clicksCount = 0
                    }
                    getName() {
                        return "click"
                    }
                    checkClick() {
                        this.clicksCount++, this.clicksCount === this.getTriggerSetting("times") && this.callback()
                    }
                    run() {
                        elementorFrontend.elements.$body.on("click", this.checkClick)
                    }
                    destroy() {
                        elementorFrontend.elements.$body.off("click", this.checkClick)
                    }
                }
                t.default = _default
            },
            9758: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2162));
                class _default extends s.default {
                    constructor() {
                        super(...arguments), this.detectExitIntent = this.detectExitIntent.bind(this)
                    }
                    getName() {
                        return "exit_intent"
                    }
                    detectExitIntent(e) {
                        e.clientY <= 0 && this.callback()
                    }
                    run() {
                        elementorFrontend.elements.$window.on("mouseleave", this.detectExitIntent)
                    }
                    destroy() {
                        elementorFrontend.elements.$window.off("mouseleave", this.detectExitIntent)
                    }
                }
                t.default = _default
            },
            8811: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2162));
                class _default extends s.default {
                    constructor() {
                        super(...arguments), this.restartTimer = this.restartTimer.bind(this)
                    }
                    getName() {
                        return "inactivity"
                    }
                    run() {
                        this.startTimer(), elementorFrontend.elements.$document.on("keypress mousemove", this.restartTimer)
                    }
                    startTimer() {
                        this.timeOut = setTimeout(this.callback, 1e3 * this.getTriggerSetting("time"))
                    }
                    clearTimer() {
                        clearTimeout(this.timeOut)
                    }
                    restartTimer() {
                        this.clearTimer(), this.startTimer()
                    }
                    destroy() {
                        this.clearTimer(), elementorFrontend.elements.$document.off("keypress mousemove", this.restartTimer)
                    }
                }
                t.default = _default
            },
            4622: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2162));
                class _default extends s.default {
                    getName() {
                        return "page_load"
                    }
                    run() {
                        this.timeout = setTimeout(this.callback, 1e3 * this.getTriggerSetting("delay"))
                    }
                    destroy() {
                        clearTimeout(this.timeout)
                    }
                }
                t.default = _default
            },
            358: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2162));
                class _default extends s.default {
                    getName() {
                        return "scrolling_to"
                    }
                    run() {
                        let e;
                        try {
                            e = jQuery(this.getTriggerSetting("selector"))
                        } catch (e) {
                            return
                        }
                        this.waypointInstance = elementorFrontend.waypoint(e, this.callback)[0]
                    }
                    destroy() {
                        this.waypointInstance && this.waypointInstance.destroy()
                    }
                }
                t.default = _default
            },
            8729: (e, t, n) => {
                var o = n(3203);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var s = o(n(2162));
                class _default extends s.default {
                    constructor() {
                        super(...arguments), this.checkScroll = this.checkScroll.bind(this), this.lastScrollOffset = 0
                    }
                    getName() {
                        return "scrolling"
                    }
                    checkScroll() {
                        const e = scrollY > this.lastScrollOffset ? "down" : "up",
                            t = this.getTriggerSetting("direction");
                        if (this.lastScrollOffset = scrollY, e !== t) return;
                        if ("up" === e) return void this.callback();
                        const n = elementorFrontend.elements.$document.height() - innerHeight;
                        scrollY / n * 100 >= this.getTriggerSetting("offset") && this.callback()
                    }
                    run() {
                        elementorFrontend.elements.$window.on("scroll", this.checkScroll)
                    }
                    destroy() {
                        elementorFrontend.elements.$window.off("scroll", this.checkScroll)
                    }
                }
                t.default = _default
            },
            3002: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), ["classic", "full_content", "cards"].forEach((e => {
                            elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(985).then(n.bind(n, 2607))), e)
                        })), elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(287).then(n.bind(n, 2298))), "classic"), elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(287).then(n.bind(n, 2298))), "full_content"), elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(287).then(n.bind(n, 8496))), "cards"), elementorFrontend.elementsHandler.attachHandler("portfolio", (() => n.e(824).then(n.bind(n, 5208))))
                    }
                }
                t.default = _default
            },
            8650: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("share-buttons", (() => n.e(58).then(n.bind(n, 4112))))
                    }
                }
                t.default = _default
            },
            6701: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("slides", (() => n.e(114).then(n.bind(n, 9378))))
                    }
                }
                t.default = _default
            },
            102: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("facebook-button", (() => n.e(443).then(n.bind(n, 3225)))), elementorFrontend.elementsHandler.attachHandler("facebook-comments", (() => n.e(443).then(n.bind(n, 3225)))), elementorFrontend.elementsHandler.attachHandler("facebook-embed", (() => n.e(443).then(n.bind(n, 3225)))), elementorFrontend.elementsHandler.attachHandler("facebook-page", (() => n.e(443).then(n.bind(n, 3225))))
                    }
                }
                t.default = _default
            },
            1748: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("table-of-contents", (() => n.e(838).then(n.bind(n, 8208))))
                    }
                }
                t.default = _default
            },
            5438: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), ["archive_classic", "archive_full_content", "archive_cards"].forEach((e => {
                            elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 8297))), e)
                        })), elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 8537))), "archive_classic"), elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 8537))), "archive_full_content"), elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 9409))), "archive_cards"), jQuery((function() {
                            var e = location.search.match(/theme_template_id=(\d*)/),
                                t = e ? jQuery(".elementor-" + e[1]) : [];
                            t.length && jQuery("html, body").animate({
                                scrollTop: t.offset().top - window.innerHeight / 2
                            })
                        }))
                    }
                }
                t.default = _default
            },
            2439: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("search-form", (() => n.e(858).then(n.bind(n, 6709))))
                    }
                }
                t.default = _default
            },
            5032: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super(), elementorFrontend.elementsHandler.attachHandler("woocommerce-menu-cart", (() => n.e(102).then(n.bind(n, 2083)))), elementorFrontend.elementsHandler.attachHandler("woocommerce-purchase-summary", (() => n.e(1).then(n.bind(n, 484)))), elementorFrontend.elementsHandler.attachHandler("woocommerce-checkout-page", (() => n.e(124).then(n.bind(n, 9035)))), elementorFrontend.elementsHandler.attachHandler("woocommerce-cart", (() => n.e(859).then(n.bind(n, 7649)))), elementorFrontend.elementsHandler.attachHandler("woocommerce-my-account", (() => n.e(979).then(n.bind(n, 1915)))), elementorFrontend.elementsHandler.attachHandler("woocommerce-notices", (() => n.e(497).then(n.bind(n, 2627)))), elementorFrontend.isEditMode() && elementorFrontend.on("components:init", (() => {
                            elementorFrontend.elements.$body.find(".elementor-widget-woocommerce-cart").length || elementorFrontend.elements.$body.append('<div class="woocommerce-cart-form">')
                        }))
                    }
                }
                t.default = _default
            },
            8003: e => {
                e.exports = wp.i18n
            }
        },
        e => {
            e.O(0, [819], (() => {
                return t = 7996, e(e.s = t);
                var t
            }));
            e.O()
        }
    ])
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/pro-elements/assets/js/elements-handlers.min.js?ver=3.7.3 ] [ " + e.stack + " ]");
}
try {
    ! function($) {
        var a = function(d, e) {
            var c, a, i, j, k = !1,
                l = !1,
                m = !1,
                b = {},
                n = function() {
                    b.$window.off("scroll", g).off("resize", h)
                },
                o = function(a, b, c) {
                    var d = {},
                        e = a[0].style;
                    c.forEach(function(a) {
                        d[a] = void 0 !== e[a] ? e[a] : ""
                    }), a.data("css-backup-" + b, d)
                },
                p = function(a, b) {
                    return a.data("css-backup-" + b)
                };
            let q = () => {
                if ("document" === a.relativeTarget) {
                    if (i = k ? b.$spacer.offset().left : c.offset().left, a.isRTL) {
                        let d = a.handleScrollbarWidth ? window.innerWidth : document.body.offsetWidth;
                        i = Math.max(d - j - i, 0)
                    }
                } else j = x(c, "width")
            };
            var r = function() {
                    b.$spacer = c.clone().addClass(a.classes.spacer).css({
                        visibility: "hidden",
                        transition: "none",
                        animation: "none"
                    }), c.after(b.$spacer)
                },
                s = function() {
                    b.$spacer.remove()
                },
                t = function() {
                    o(c, "unsticky", ["position", "width", "margin-top", "margin-bottom", "top", "bottom", "inset-inline-start"]);
                    let b = {
                        position: "fixed",
                        width: j,
                        marginTop: 0,
                        marginBottom: 0
                    };
                    b[a.to] = a.offset, b["top" === a.to ? "bottom" : "top"] = "", i && (b["inset-inline-start"] = i + "px"), c.css(b).addClass(a.classes.stickyActive)
                },
                u = function() {
                    c.css(p(c, "unsticky")).removeClass(a.classes.stickyActive)
                },
                v = function() {
                    o(b.$parent, "childNotFollowing", ["position"]), b.$parent.css("position", "relative"), o(c, "notFollowing", ["position", "top", "bottom"]);
                    let d = {
                        position: "absolute"
                    };
                    d[a.to] = "", d["top" === a.to ? "bottom" : "top"] = 0, c.css(d), l = !0
                },
                w = function() {
                    b.$parent.css(p(b.$parent, "childNotFollowing")), c.css(p(c, "notFollowing")), l = !1
                },
                x = function(d, b, e) {
                    var c = getComputedStyle(d[0]),
                        f = parseFloat(c[b]),
                        g = "height" === b ? ["top", "bottom"] : ["left", "right"],
                        a = [];
                    return "border-box" !== c.boxSizing && a.push("border", "padding"), e && a.push("margin"), a.forEach(function(a) {
                        g.forEach(function(b) {
                            f += parseFloat(c[a + "-" + b])
                        })
                    }), f
                },
                y = function(c) {
                    var f = b.$window.scrollTop(),
                        d = x(c, "height"),
                        g = innerHeight,
                        a = c.offset().top - f,
                        e = a - g;
                    return {
                        top: {
                            fromTop: a,
                            fromBottom: e
                        },
                        bottom: {
                            fromTop: a + d,
                            fromBottom: e + d
                        }
                    }
                },
                z = function() {
                    q(), r(), t(), k = !0, c.trigger("sticky:stick")
                },
                A = function() {
                    u(), s(), k = !1, c.trigger("sticky:unstick")
                },
                B = function() {
                    var d = y(c),
                        e = "top" === a.to;
                    if (l)(e ? d.top.fromTop > a.offset : d.bottom.fromBottom < -a.offset) && w();
                    else {
                        var f = y(b.$parent),
                            i = getComputedStyle(b.$parent[0]),
                            g = parseFloat(i[e ? "borderBottomWidth" : "borderTopWidth"]),
                            h = e ? f.bottom.fromTop - g : f.top.fromBottom + g;
                        (e ? h <= d.bottom.fromTop : h >= d.top.fromBottom) && v()
                    }
                },
                C = function(b) {
                    m && -b < a.effectsOffset ? (c.removeClass(a.classes.stickyEffects), m = !1) : !m && -b >= a.effectsOffset && (c.addClass(a.classes.stickyEffects), m = !0)
                },
                f = function() {
                    var d, e = a.offset;
                    if (k) {
                        var f = y(b.$spacer);
                        d = "top" === a.to ? f.top.fromTop - e : -f.bottom.fromBottom - e, a.parent && B(), d > 0 && A()
                    } else {
                        var g = y(c);
                        (d = "top" === a.to ? g.top.fromTop - e : -g.bottom.fromBottom - e) <= 0 && (z(), a.parent && B())
                    }
                    C(d)
                },
                g = function() {
                    f()
                },
                h = function() {
                    k && ("document" === a.relativeTarget && k && (j = b.$spacer.width()), u(), q(), t(), a.parent && (l = !1, B()))
                };
            this.destroy = function() {
                k && A(), n(), c.removeClass(a.classes.sticky)
            }, a = jQuery.extend(!0, {
                to: "top",
                offset: 0,
                effectsOffset: 0,
                parent: !1,
                classes: {
                    sticky: "sticky",
                    stickyActive: "sticky-active",
                    stickyEffects: "sticky-effects",
                    spacer: "sticky-spacer"
                },
                isRTL: !1,
                relativeTarget: "parent",
                handleScrollbarWidth: !1
            }, e), c = $(d).addClass(a.classes.sticky), b.$window = $(window), a.parent && (b.$parent = c.parent(), "parent" !== a.parent && (b.$parent = b.$parent.closest(a.parent))), b.$window.on({
                scroll: g,
                resize: h
            }), f()
        };
        $.fn.sticky = function(b) {
            var c = "string" == typeof b;
            return this.each(function() {
                var e = $(this);
                if (!c) {
                    e.data("sticky", new a(this, b));
                    return
                }
                var d = e.data("sticky");
                if (!d) throw Error("Trying to perform the `" + b + "` method prior to initialization");
                if (!d[b]) throw ReferenceError("Method `" + b + "` not found in sticky instance");
                d[b].apply(d, Array.prototype.slice.call(arguments, 1)), "destroy" === b && e.removeData("sticky")
            }), this
        }, window.Sticky = a
    }(jQuery)
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/elementor-restaurant/wp-content/plugins/pro-elements/assets/lib/sticky/jquery.sticky.min.js?ver=3.7.3 ] [ " + e.stack + " ]");
}
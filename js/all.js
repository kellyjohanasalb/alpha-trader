!function(r) {
    "use strict";
    function p(t, e) {
        t.className += " " + e
    }
    function c(t, e) {
        for (var i = t.className.split(" "), s = e.split(" "), n = 0; n < s.length; n += 1) {
            var o = i.indexOf(s[n]);
            -1 < o && i.splice(o, 1)
        }
        t.className = i.join(" ")
    }
    function $() {
        return "rtl" === r.getComputedStyle(document.body).direction
    }
    function W() {
        return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
    }
    function R() {
        return document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft
    }
    function n(t) {
        for (; t.lastChild; )
            t.removeChild(t.lastChild)
    }
    function m(t) {
        if (null === t)
            return t;
        if (Array.isArray(t))
            for (var e = [], i = 0; i < t.length; i += 1)
                e.push(m(t[i]));
        else {
            if (t instanceof Date)
                return new Date(t.getTime());
            if (t instanceof RegExp)
                (e = new RegExp(t.source)).global = t.global,
                e.ignoreCase = t.ignoreCase,
                e.multiline = t.multiline,
                e.lastIndex = t.lastIndex;
            else {
                if ("object" != typeof t)
                    return t;
                for (var s in e = {},
                t)
                    t.hasOwnProperty(s) && (e[s] = m(t[s]))
            }
        }
        return e
    }
    function t(t, e) {
        var i = t.elements.root;
        i.parentNode.removeChild(i),
        delete t.elements,
        t.settings = m(t.__settings),
        t.__init = e,
        delete t.__internal
    }
    function f(i, s) {
        return function() {
            if (0 < arguments.length) {
                for (var t = [], e = 0; e < arguments.length; e += 1)
                    t.push(arguments[e]);
                return t.push(i),
                s.apply(i, t)
            }
            return s.apply(i, [null, i])
        }
    }
    function B(t, e) {
        return {
            index: t,
            button: e,
            cancel: !1
        }
    }
    function l(t, e) {
        if ("function" == typeof e.get(t))
            return e.get(t).call(e)
    }
    var a, h, d, F, o, g, _, q, V, Q, U, X, Y, K, Z, G, J, tt, et, it, v, e, s, i, u, y, st, b, w, x, C, E, T, k, O, A, L, z, M = {
        ENTER: 13,
        ESC: 27,
        F1: 112,
        F12: 123,
        LEFT: 37,
        RIGHT: 39
    }, nt = {
        autoReset: !0,
        basic: !1,
        closable: !0,
        closableByDimmer: !0,
        frameless: !1,
        maintainFocus: !0,
        maximizable: !0,
        modal: !0,
        movable: !0,
        moveBounded: !1,
        overflow: !0,
        padding: !0,
        pinnable: !0,
        pinned: !0,
        preventBodyShift: !1,
        resizable: !0,
        startMaximized: !1,
        transition: "pulse",
        notifier: {
            delay: 5,
            position: "bottom-right",
            closeButton: !1
        },
        glossary: {
            title: "AlertifyJS",
            ok: "OK",
            cancel: "Cancel",
            acccpt: "Accept",
            deny: "Deny",
            confirm: "Confirm",
            decline: "Decline",
            close: "Close",
            maximize: "Maximize",
            restore: "Restore"
        },
        theme: {
            input: "ajs-input",
            ok: "ajs-ok",
            cancel: "ajs-cancel"
        }
    }, D = [], j = document.addEventListener ? function(t, e, i, s) {
        t.addEventListener(e, i, !0 === s)
    }
    : document.attachEvent ? function(t, e, i) {
        t.attachEvent("on" + e, i)
    }
    : void 0, S = document.removeEventListener ? function(t, e, i, s) {
        t.removeEventListener(e, i, !0 === s)
    }
    : document.detachEvent ? function(t, e, i) {
        t.detachEvent("on" + e, i)
    }
    : void 0, N = function() {
        var t, e, i = !1, s = {
            animation: "animationend",
            OAnimation: "oAnimationEnd oanimationend",
            msAnimation: "MSAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for (t in s)
            if (void 0 !== document.documentElement.style[t]) {
                e = s[t],
                i = !0;
                break
            }
        return {
            type: e,
            supported: i
        }
    }(), ot = (g = [],
    _ = null,
    q = -1 < r.navigator.userAgent.indexOf("Safari") && r.navigator.userAgent.indexOf("Chrome") < 0,
    V = '<div class="ajs-dimmer"></div>',
    Q = '<div class="ajs-modal" tabindex="0"></div>',
    U = '<div class="ajs-dialog" tabindex="0"></div>',
    X = '<button class="ajs-reset"></button>',
    Y = '<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',
    K = '<div class="ajs-header"></div>',
    Z = '<div class="ajs-body"></div>',
    G = '<div class="ajs-content"></div>',
    J = '<div class="ajs-footer"></div>',
    tt = {
        primary: '<div class="ajs-primary ajs-buttons"></div>',
        auxiliary: '<div class="ajs-auxiliary ajs-buttons"></div>'
    },
    et = '<button class="ajs-button"></button>',
    it = '<div class="ajs-handle"></div>',
    e = "",
    u = i = !(v = {
        animationIn: "ajs-in",
        animationOut: "ajs-out",
        base: "alertify",
        basic: "ajs-basic",
        capture: "ajs-capture",
        closable: "ajs-closable",
        fixed: "ajs-fixed",
        frameless: "ajs-frameless",
        hidden: "ajs-hidden",
        maximize: "ajs-maximize",
        maximized: "ajs-maximized",
        maximizable: "ajs-maximizable",
        modeless: "ajs-modeless",
        movable: "ajs-movable",
        noSelection: "ajs-no-selection",
        noOverflow: "ajs-no-overflow",
        noPadding: "ajs-no-padding",
        pin: "ajs-pin",
        pinnable: "ajs-pinnable",
        prefix: "ajs-",
        resizable: "ajs-resizable",
        restore: "ajs-restore",
        shake: "ajs-shake",
        unpinned: "ajs-unpinned"
    }),
    b = st = s = 0,
    w = "pageX",
    E = !(x = "pageY"),
    k = T = C = y = null,
    O = Number.Nan,
    z = L = A = 0,
    {
        __init: ct,
        isOpen: function() {
            return this.__internal.isOpen
        },
        isModal: function() {
            return this.elements.root.className.indexOf(v.modeless) < 0
        },
        isMaximized: function() {
            return -1 < this.elements.root.className.indexOf(v.maximized)
        },
        isPinned: function() {
            return this.elements.root.className.indexOf(v.unpinned) < 0
        },
        maximize: function() {
            return this.isMaximized() || bt(this),
            this
        },
        restore: function() {
            return this.isMaximized() && wt(this),
            this
        },
        pin: function() {
            return this.isPinned() || vt(this),
            this
        },
        unpin: function() {
            return this.isPinned() && yt(this),
            this
        },
        bringToFront: function() {
            return pt(0, this),
            this
        },
        moveTo: function(t, e) {
            if (!isNaN(t) && !isNaN(e)) {
                l("onmove", this);
                var i = this.elements.dialog
                  , s = i
                  , n = 0
                  , o = 0;
                for (i.style.left && (n -= parseInt(i.style.left, 10)),
                i.style.top && (o -= parseInt(i.style.top, 10)); n += s.offsetLeft,
                o += s.offsetTop,
                s = s.offsetParent; )
                    ;
                t = t - n,
                e = e - o;
                $() && (t *= -1),
                i.style.left = t + "px",
                i.style.top = e + "px",
                l("onmoved", this)
            }
            return this
        },
        resizeTo: function(t, e) {
            var i = parseFloat(t)
              , s = parseFloat(e)
              , n = /(\d*\.\d+|\d+)%/;
            return isNaN(i) || isNaN(s) || !0 !== this.get("resizable") || (l("onresize", this),
            ("" + t).match(n) && (i = i / 100 * document.documentElement.clientWidth),
            ("" + e).match(n) && (s = s / 100 * document.documentElement.clientHeight),
            "none" !== (t = this.elements.dialog).style.maxWidth && (t.style.minWidth = (L = t.offsetWidth) + "px"),
            t.style.maxWidth = "none",
            t.style.minHeight = this.elements.header.offsetHeight + this.elements.footer.offsetHeight + "px",
            t.style.width = i + "px",
            t.style.height = s + "px",
            l("onresized", this)),
            this
        },
        setting: function(t, e) {
            var s = this
              , i = ft(this, this.__internal.options, function(t, e, i) {
                mt(s, t, e, i)
            }, t, e);
            if ("get" === i.op)
                return i.found ? i.value : void 0 !== this.settings ? ft(this, this.settings, this.settingUpdated || function() {}
                , t, e).value : void 0;
            if ("set" === i.op) {
                if (0 < i.items.length)
                    for (var n = this.settingUpdated || function() {}
                    , o = 0; o < i.items.length; o += 1) {
                        var r = i.items[o];
                        r.found || void 0 === this.settings || ft(this, this.settings, n, r.key, r.value)
                    }
                return this
            }
        },
        set: function(t, e) {
            return this.setting(t, e),
            this
        },
        get: function(t) {
            return this.setting(t)
        },
        setHeader: function(t) {
            return "string" == typeof t ? (n(this.elements.header),
            this.elements.header.innerHTML = t) : t instanceof r.HTMLElement && this.elements.header.firstChild !== t && (n(this.elements.header),
            this.elements.header.appendChild(t)),
            this
        },
        setContent: function(t) {
            return "string" == typeof t ? (n(this.elements.content),
            this.elements.content.innerHTML = t) : t instanceof r.HTMLElement && this.elements.content.firstChild !== t && (n(this.elements.content),
            this.elements.content.appendChild(t)),
            this
        },
        showModal: function(t) {
            return this.show(!0, t)
        },
        show: function(t, e) {
            var i, s, n;
            return ct(this),
            this.__internal.isOpen ? ($t(this),
            Ft(this),
            p(this.elements.dialog, v.shake),
            i = this,
            setTimeout(function() {
                c(i.elements.dialog, v.shake)
            }, 200)) : (this.__internal.isOpen = !0,
            D.push(this),
            I.defaults.maintainFocus && (this.__internal.activeElement = document.activeElement),
            "function" == typeof this.prepare && this.prepare(),
            n = this,
            1 === D.length && (j(r, "resize", qt),
            j(document.body, "keyup", At),
            j(document.body, "keydown", Lt),
            j(document.body, "focus", Mt),
            j(document.documentElement, "mousemove", It),
            j(document.documentElement, "touchmove", It),
            j(document.documentElement, "mouseup", Pt),
            j(document.documentElement, "touchend", Pt),
            j(document.documentElement, "mousemove", Rt),
            j(document.documentElement, "touchmove", Rt),
            j(document.documentElement, "mouseup", Bt),
            j(document.documentElement, "touchend", Bt)),
            j(n.elements.commands.container, "click", n.__internal.commandsClickHandler),
            j(n.elements.footer, "click", n.__internal.buttonsClickHandler),
            j(n.elements.reset[0], "focus", n.__internal.resetHandler),
            j(n.elements.reset[1], "focus", n.__internal.resetHandler),
            u = !0,
            j(n.elements.dialog, N.type, n.__internal.transitionInHandler),
            n.get("modal") || Vt(n),
            n.get("resizable") && Yt(n),
            n.get("movable") && Ut(n),
            void 0 !== t && this.set("modal", t),
            F = R(),
            o = W(),
            P(),
            "string" == typeof e && "" !== e && (this.__internal.className = e,
            p(this.elements.root, e)),
            this.get("startMaximized") ? this.maximize() : this.isMaximized() && wt(this),
            Et(this),
            c(this.elements.root, v.animationOut),
            p(this.elements.root, v.animationIn),
            clearTimeout(this.__internal.timerIn),
            this.__internal.timerIn = setTimeout(this.__internal.transitionInHandler, N.supported ? 1e3 : 100),
            q && ((s = this.elements.root).style.display = "none",
            setTimeout(function() {
                s.style.display = "block"
            }, 0)),
            _ = this.elements.root.offsetWidth,
            c(this.elements.root, v.hidden),
            "function" == typeof this.hooks.onshow && this.hooks.onshow.call(this),
            l("onshow", this)),
            this
        },
        close: function() {
            return this.__internal.isOpen && !1 !== l("onclosing", this) && (t = this,
            1 === D.length && (S(r, "resize", qt),
            S(document.body, "keyup", At),
            S(document.body, "keydown", Lt),
            S(document.body, "focus", Mt),
            S(document.documentElement, "mousemove", It),
            S(document.documentElement, "mouseup", Pt),
            S(document.documentElement, "mousemove", Rt),
            S(document.documentElement, "mouseup", Bt)),
            S(t.elements.commands.container, "click", t.__internal.commandsClickHandler),
            S(t.elements.footer, "click", t.__internal.buttonsClickHandler),
            S(t.elements.reset[0], "focus", t.__internal.resetHandler),
            S(t.elements.reset[1], "focus", t.__internal.resetHandler),
            j(t.elements.dialog, N.type, t.__internal.transitionOutHandler),
            t.get("modal") || Qt(t),
            t.get("movable") && Xt(t),
            t.get("resizable") && Kt(t),
            c(this.elements.root, v.animationIn),
            p(this.elements.root, v.animationOut),
            clearTimeout(this.__internal.timerOut),
            this.__internal.timerOut = setTimeout(this.__internal.transitionOutHandler, N.supported ? 1e3 : 100),
            p(this.elements.root, v.hidden),
            _ = this.elements.modal.offsetWidth,
            void 0 !== this.__internal.className && "" !== this.__internal.className && c(this.elements.root, this.__internal.className),
            "function" == typeof this.hooks.onclose && this.hooks.onclose.call(this),
            l("onclose", this),
            D.splice(D.indexOf(this), 1),
            this.__internal.isOpen = !1,
            P()),
            this;
            var t
        },
        closeOthers: function() {
            return I.closeAll(this),
            this
        },
        destroy: function() {
            return this.__internal.isOpen ? (this.__internal.destroy = function() {
                t(this, ct)
            }
            ,
            this.close()) : t(this, ct),
            this
        }
    }), H = (h = [],
    d = {
        base: "alertify-notifier",
        message: "ajs-message",
        top: "ajs-top",
        right: "ajs-right",
        bottom: "ajs-bottom",
        left: "ajs-left",
        center: "ajs-center",
        visible: "ajs-visible",
        hidden: "ajs-hidden",
        close: "ajs-close"
    },
    {
        setting: function(t, e) {
            if (rt(this),
            void 0 === e)
                return this.__internal[t];
            switch (t) {
            case "position":
                this.__internal.position = e,
                at(this);
                break;
            case "delay":
                this.__internal.delay = e
            }
            return this
        },
        set: function(t, e) {
            return this.setting(t, e),
            this
        },
        get: function(t) {
            return this.setting(t)
        },
        create: function(t, e) {
            rt(this);
            var i = document.createElement("div");
            return i.className = d.message + ("string" == typeof t && "" !== t ? " ajs-" + t : ""),
            lt(i, e)
        },
        dismissAll: function(t) {
            for (var e = h.slice(0), i = 0; i < e.length; i += 1) {
                var s = e[i];
                void 0 !== t && t === s || s.dismiss()
            }
        }
    }), I = new function() {
        function c(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }
        function h(t) {
            t = d[t].dialog;
            return t && "function" == typeof t.__init && t.__init(t),
            t
        }
        var d = {};
        return {
            defaults: nt,
            dialog: function(t, e, i, s) {
                if ("function" != typeof e)
                    return h(t);
                if (this.hasOwnProperty(t))
                    throw new Error("alertify.dialog: name already exists");
                n = t,
                r = i,
                e = {
                    dialog: null,
                    factory: o = e
                },
                void 0 !== (a = s) && (e.factory = function() {
                    return c(new d[a].factory, new o)
                }
                ),
                r || (e.dialog = c(new e.factory, ot));
                var n, o, r, a, l = d[n] = e;
                this[t] = i ? function() {
                    var t;
                    return 0 === arguments.length ? l.dialog : ((t = c(new l.factory, ot)) && "function" == typeof t.__init && t.__init(t),
                    t.main.apply(t, arguments),
                    t.show.apply(t))
                }
                : function() {
                    var t;
                    return l.dialog && "function" == typeof l.dialog.__init && l.dialog.__init(l.dialog),
                    0 === arguments.length ? l.dialog : ((t = l.dialog).main.apply(l.dialog, arguments),
                    t.show.apply(l.dialog))
                }
            },
            closeAll: function(t) {
                for (var e = D.slice(0), i = 0; i < e.length; i += 1) {
                    var s = e[i];
                    void 0 !== t && t === s || s.close()
                }
            },
            setting: function(t, e, i) {
                return "notifier" === t ? H.setting(e, i) : (t = h(t)) ? t.setting(e, i) : void 0
            },
            set: function(t, e, i) {
                return this.setting(t, e, i)
            },
            get: function(t, e) {
                return this.setting(t, e)
            },
            notify: function(t, e, i, s) {
                return H.create(e, s).push(t, i)
            },
            message: function(t, e, i) {
                return H.create(null, i).push(t, e)
            },
            success: function(t, e, i) {
                return H.create("success", i).push(t, e)
            },
            error: function(t, e, i) {
                return H.create("error", i).push(t, e)
            },
            warning: function(t, e, i) {
                return H.create("warning", i).push(t, e)
            },
            dismissAll: function() {
                H.dismissAll()
            }
        }
    }
    ;
    function rt(t) {
        t.__internal || (t.__internal = {
            position: I.defaults.notifier.position,
            delay: I.defaults.notifier.delay
        },
        a = document.createElement("DIV"),
        at(t)),
        a.parentNode !== document.body && document.body.appendChild(a)
    }
    function at(t) {
        switch (a.className = d.base,
        t.__internal.position) {
        case "top-right":
            p(a, d.top + " " + d.right);
            break;
        case "top-left":
            p(a, d.top + " " + d.left);
            break;
        case "top-center":
            p(a, d.top + " " + d.center);
            break;
        case "bottom-left":
            p(a, d.bottom + " " + d.left);
            break;
        case "bottom-center":
            p(a, d.bottom + " " + d.center);
            break;
        default:
            p(a, d.bottom + " " + d.right)
        }
    }
    function lt(t, e) {
        function i(t, e) {
            e.__internal.closeButton && "true" !== t.target.getAttribute("data-close") || e.dismiss(!0)
        }
        function s(t, e) {
            S(e.element, N.type, s),
            a.removeChild(e.element)
        }
        function o(t) {
            clearTimeout(t.__internal.timer),
            clearTimeout(t.__internal.transitionTimeout)
        }
        return (t = {
            element: t,
            push: function(t, e) {
                var i, s, n;
                if (this.__internal.pushed)
                    return this;
                switch ((i = this).__internal.pushed = !0,
                h.push(i),
                o(this),
                arguments.length) {
                case 0:
                    n = this.__internal.delay;
                    break;
                case 1:
                    n = "number" == typeof t ? t : (s = t,
                    this.__internal.delay);
                    break;
                case 2:
                    s = t,
                    n = e
                }
                return this.__internal.closeButton = I.defaults.notifier.closeButton,
                void 0 !== s && this.setContent(s),
                H.__internal.position.indexOf("top") < 0 ? a.appendChild(this.element) : a.insertBefore(this.element, a.firstChild),
                this.element.offsetWidth,
                p(this.element, d.visible),
                j(this.element, "click", this.__internal.clickHandler),
                this.delay(n)
            },
            ondismiss: function() {},
            callback: e,
            dismiss: function(t) {
                return this.__internal.pushed && (o(this),
                "function" == typeof this.ondismiss && !1 === this.ondismiss.call(this) || (S(this.element, "click", this.__internal.clickHandler),
                void 0 !== this.element && this.element.parentNode === a && (this.__internal.transitionTimeout = setTimeout(this.__internal.transitionEndHandler, N.supported ? 1e3 : 100),
                c(this.element, d.visible),
                "function" == typeof this.callback) && this.callback.call(this, t),
                t = this,
                h.splice(h.indexOf(t), 1),
                t.__internal.pushed = !1)),
                this
            },
            delay: function(t) {
                var e;
                return o(this),
                this.__internal.delay = void 0 === t || isNaN(+t) ? H.__internal.delay : +t,
                0 < this.__internal.delay && ((e = this).__internal.timer = setTimeout(function() {
                    e.dismiss()
                }, 1e3 * this.__internal.delay)),
                this
            },
            setContent: function(t) {
                return "string" == typeof t ? (n(this.element),
                this.element.innerHTML = t) : t instanceof r.HTMLElement && this.element.firstChild !== t && (n(this.element),
                this.element.appendChild(t)),
                this.__internal.closeButton && (p(t = document.createElement("span"), d.close),
                t.setAttribute("data-close", !0),
                this.element.appendChild(t)),
                this
            },
            dismissOthers: function() {
                return H.dismissAll(this),
                this
            }
        }).__internal || (t.__internal = {
            pushed: !1,
            delay: void 0,
            timer: void 0,
            clickHandler: void 0,
            transitionEndHandler: void 0,
            transitionTimeout: void 0
        },
        t.__internal.clickHandler = f(t, i),
        t.__internal.transitionEndHandler = f(t, s)),
        t
    }
    function ct(t) {
        if (!t.__internal) {
            delete t.__init,
            t.__settings || (t.__settings = m(t.settings)),
            null === _ && document.body.setAttribute("tabindex", "0"),
            "function" == typeof t.setup ? ((e = t.setup()).options = e.options || {},
            e.focus = e.focus || {}) : e = {
                buttons: [],
                focus: {
                    element: null,
                    select: !1
                },
                options: {}
            },
            "object" != typeof t.hooks && (t.hooks = {});
            var e, i = [];
            if (Array.isArray(e.buttons))
                for (var s = 0; s < e.buttons.length; s += 1) {
                    var n, o = e.buttons[s], r = {};
                    for (n in o)
                        o.hasOwnProperty(n) && (r[n] = o[n]);
                    i.push(r)
                }
            var a = t.__internal = {
                isOpen: !1,
                activeElement: document.body,
                timerIn: void 0,
                timerOut: void 0,
                buttons: i,
                focus: e.focus,
                options: {
                    title: void 0,
                    modal: void 0,
                    basic: void 0,
                    frameless: void 0,
                    pinned: void 0,
                    movable: void 0,
                    moveBounded: void 0,
                    resizable: void 0,
                    autoReset: void 0,
                    closable: void 0,
                    closableByDimmer: void 0,
                    maximizable: void 0,
                    startMaximized: void 0,
                    pinnable: void 0,
                    transition: void 0,
                    padding: void 0,
                    overflow: void 0,
                    onshow: void 0,
                    onclosing: void 0,
                    onclose: void 0,
                    onfocus: void 0,
                    onmove: void 0,
                    onmoved: void 0,
                    onresize: void 0,
                    onresized: void 0,
                    onmaximize: void 0,
                    onmaximized: void 0,
                    onrestore: void 0,
                    onrestored: void 0
                },
                resetHandler: void 0,
                beginMoveHandler: void 0,
                beginResizeHandler: void 0,
                bringToFrontHandler: void 0,
                modalClickHandler: void 0,
                buttonsClickHandler: void 0,
                commandsClickHandler: void 0,
                transitionInHandler: void 0,
                transitionOutHandler: void 0,
                destroy: void 0
            }
              , l = {};
            l.root = document.createElement("div"),
            l.root.className = v.base + " " + v.hidden + " ",
            l.root.innerHTML = V + Q,
            l.dimmer = l.root.firstChild,
            l.modal = l.root.lastChild,
            l.modal.innerHTML = U,
            l.dialog = l.modal.firstChild,
            l.dialog.innerHTML = X + Y + K + Z + J + it + X,
            l.reset = [],
            l.reset.push(l.dialog.firstChild),
            l.reset.push(l.dialog.lastChild),
            l.commands = {},
            l.commands.container = l.reset[0].nextSibling,
            l.commands.pin = l.commands.container.firstChild,
            l.commands.maximize = l.commands.pin.nextSibling,
            l.commands.close = l.commands.maximize.nextSibling,
            l.header = l.commands.container.nextSibling,
            l.body = l.header.nextSibling,
            l.body.innerHTML = G,
            l.content = l.body.firstChild,
            l.footer = l.body.nextSibling,
            l.footer.innerHTML = tt.auxiliary + tt.primary,
            l.resizeHandle = l.footer.nextSibling,
            l.buttons = {},
            l.buttons.auxiliary = l.footer.firstChild,
            l.buttons.primary = l.buttons.auxiliary.nextSibling,
            l.buttons.primary.innerHTML = et,
            l.buttonTemplate = l.buttons.primary.firstChild,
            l.buttons.primary.removeChild(l.buttonTemplate);
            for (var c, h = 0; h < t.__internal.buttons.length; h += 1) {
                var d, u = t.__internal.buttons[h];
                for (d in g.indexOf(u.key) < 0 && g.push(u.key),
                u.element = l.buttonTemplate.cloneNode(),
                u.element.innerHTML = u.text,
                "string" == typeof u.className && "" !== u.className && p(u.element, u.className),
                u.attrs)
                    "className" !== d && u.attrs.hasOwnProperty(d) && u.element.setAttribute(d, u.attrs[d]);
                ("auxiliary" === u.scope ? l.buttons.auxiliary : l.buttons.primary).appendChild(u.element)
            }
            for (c in t.elements = l,
            a.resetHandler = f(t, Mt),
            a.beginMoveHandler = f(t, Ht),
            a.beginResizeHandler = f(t, Wt),
            a.bringToFrontHandler = f(t, pt),
            a.modalClickHandler = f(t, Tt),
            a.buttonsClickHandler = f(t, Ot),
            a.commandsClickHandler = f(t, _t),
            a.transitionInHandler = f(t, Dt),
            a.transitionOutHandler = f(t, jt),
            a.options)
                void 0 !== e.options[c] ? t.set(c, e.options[c]) : I.defaults.hasOwnProperty(c) ? t.set(c, I.defaults[c]) : "title" === c && t.set(c, I.defaults.glossary[c]);
            "function" == typeof t.build && t.build()
        }
        document.body.appendChild(t.elements.root)
    }
    function ht() {
        r.scrollTo(F, o)
    }
    function P() {
        for (var t = 0, e = 0; e < D.length; e += 1) {
            var i = D[e];
            (i.isModal() || i.isMaximized()) && (t += 1)
        }
        0 === t && 0 <= document.body.className.indexOf(v.noOverflow) ? (c(document.body, v.noOverflow),
        dt(!1)) : 0 < t && document.body.className.indexOf(v.noOverflow) < 0 && (dt(!0),
        p(document.body, v.noOverflow))
    }
    function dt(t) {
        I.defaults.preventBodyShift && document.documentElement.scrollHeight > document.documentElement.clientHeight && (t ? (s = o,
        e = r.getComputedStyle(document.body).top,
        p(document.body, v.fixed),
        document.body.style.top = -o + "px") : (o = s,
        document.body.style.top = e,
        c(document.body, v.fixed),
        ht()))
    }
    function ut(t, e, i) {
        "string" == typeof i && c(t.elements.root, v.prefix + i),
        p(t.elements.root, v.prefix + e),
        _ = t.elements.root.offsetWidth
    }
    function pt(t, e) {
        for (var i = D.indexOf(e) + 1; i < D.length; i += 1)
            if (D[i].isModal())
                return;
        return document.body.lastChild !== e.elements.root && (document.body.appendChild(e.elements.root),
        D.splice(D.indexOf(e), 1),
        D.push(e),
        zt(e)),
        !1
    }
    function mt(t, e, i, s) {
        switch (e) {
        case "title":
            t.setHeader(s);
            break;
        case "modal":
            (l = t).get("modal") ? (c(l.elements.root, v.modeless),
            l.isOpen() && (Qt(l),
            Et(l),
            P())) : (p(l.elements.root, v.modeless),
            l.isOpen() && (Vt(l),
            Et(l),
            P()));
            break;
        case "basic":
            ((l = t).get("basic") ? p : c)(l.elements.root, v.basic);
            break;
        case "frameless":
            ((a = t).get("frameless") ? p : c)(a.elements.root, v.frameless);
            break;
        case "pinned":
            (a = t).get("pinned") ? (c(a.elements.root, v.unpinned),
            a.isOpen() && Ct(a)) : (p(a.elements.root, v.unpinned),
            a.isOpen() && !a.isModal() && xt(a));
            break;
        case "closable":
            ((r = t).get("closable") ? (p(r.elements.root, v.closable),
            function(t) {
                j(t.elements.modal, "click", t.__internal.modalClickHandler)
            }
            ) : (c(r.elements.root, v.closable),
            function(t) {
                S(t.elements.modal, "click", t.__internal.modalClickHandler)
            }
            ))(r);
            break;
        case "maximizable":
            ((r = t).get("maximizable") ? p : c)(r.elements.root, v.maximizable);
            break;
        case "pinnable":
            ((o = t).get("pinnable") ? p : c)(o.elements.root, v.pinnable);
            break;
        case "movable":
            (o = t).get("movable") ? (p(o.elements.root, v.movable),
            o.isOpen() && Ut(o)) : ($t(o),
            c(o.elements.root, v.movable),
            o.isOpen() && Xt(o));
            break;
        case "resizable":
            (n = t).get("resizable") ? (p(n.elements.root, v.resizable),
            n.isOpen() && Yt(n)) : (Ft(n),
            c(n.elements.root, v.resizable),
            n.isOpen() && Kt(n));
            break;
        case "transition":
            ut(t, s, i);
            break;
        case "padding":
            s ? c(t.elements.root, v.noPadding) : t.elements.root.className.indexOf(v.noPadding) < 0 && p(t.elements.root, v.noPadding);
            break;
        case "overflow":
            s ? c(t.elements.root, v.noOverflow) : t.elements.root.className.indexOf(v.noOverflow) < 0 && p(t.elements.root, v.noOverflow);
            break;
        case "transition":
            ut(t, s, i)
        }
        var n, o, r, a, l;
        "function" == typeof t.hooks.onupdate && t.hooks.onupdate.call(t, e, i, s)
    }
    function ft(t, e, i, s, n) {
        var o, r = {
            op: void 0,
            items: []
        };
        if (void 0 === n && "string" == typeof s)
            r.op = "get",
            e.hasOwnProperty(s) ? (r.found = !0,
            r.value = e[s]) : (r.found = !1,
            r.value = void 0);
        else if (r.op = "set",
        "object" == typeof s) {
            var a, l = s;
            for (a in l)
                e.hasOwnProperty(a) ? (e[a] !== l[a] && (o = e[a],
                e[a] = l[a],
                i.call(t, a, o, l[a])),
                r.items.push({
                    key: a,
                    value: l[a],
                    found: !0
                })) : r.items.push({
                    key: a,
                    value: l[a],
                    found: !1
                })
        } else {
            if ("string" != typeof s)
                throw new Error("args must be a string or object");
            e.hasOwnProperty(s) ? (e[s] !== n && (o = e[s],
            e[s] = n,
            i.call(t, s, o, n)),
            r.items.push({
                key: s,
                value: n,
                found: !0
            })) : r.items.push({
                key: s,
                value: n,
                found: !1
            })
        }
        return r
    }
    function gt(t) {
        var e;
        kt(t, function(t) {
            return e = !0 === t.invokeOnClose
        }),
        !e && t.isOpen() && t.close()
    }
    function _t(t, e) {
        switch (t.srcElement || t.target) {
        case e.elements.commands.pin:
            (e.isPinned() ? yt : vt)(e);
            break;
        case e.elements.commands.maximize:
            (e.isMaximized() ? wt : bt)(e);
            break;
        case e.elements.commands.close:
            gt(e)
        }
        return !1
    }
    function vt(t) {
        t.set("pinned", !0)
    }
    function yt(t) {
        t.set("pinned", !1)
    }
    function bt(t) {
        l("onmaximize", t),
        p(t.elements.root, v.maximized),
        t.isOpen() && P(),
        l("onmaximized", t)
    }
    function wt(t) {
        l("onrestore", t),
        c(t.elements.root, v.maximized),
        t.isOpen() && P(),
        l("onrestored", t)
    }
    function xt(t) {
        var e = R();
        t.elements.modal.style.marginTop = W() + "px",
        t.elements.modal.style.marginLeft = e + "px",
        t.elements.modal.style.marginRight = -e + "px"
    }
    function Ct(t) {
        var e, i, s = parseInt(t.elements.modal.style.marginTop, 10), n = parseInt(t.elements.modal.style.marginLeft, 10);
        t.elements.modal.style.marginTop = "",
        t.elements.modal.style.marginLeft = "",
        t.elements.modal.style.marginRight = "",
        t.isOpen() && (i = e = 0,
        "" !== t.elements.dialog.style.top && (e = parseInt(t.elements.dialog.style.top, 10)),
        t.elements.dialog.style.top = e + (s - W()) + "px",
        "" !== t.elements.dialog.style.left && (i = parseInt(t.elements.dialog.style.left, 10)),
        t.elements.dialog.style.left = i + (n - R()) + "px")
    }
    function Et(t) {
        (t.get("modal") || t.get("pinned") ? Ct : xt)(t)
    }
    function Tt(t, e) {
        t = t.srcElement || t.target;
        return i || t !== e.elements.modal || !0 !== e.get("closableByDimmer") || gt(e),
        i = !1
    }
    function kt(t, e) {
        for (var i = 0; i < t.__internal.buttons.length; i += 1) {
            var s = t.__internal.buttons[i];
            if (!s.element.disabled && e(s)) {
                s = B(i, s);
                "function" == typeof t.callback && t.callback.apply(t, [s]),
                !1 === s.cancel && t.close();
                break
            }
        }
    }
    function Ot(t, e) {
        var i = t.srcElement || t.target;
        kt(e, function(t) {
            return t.element === i && (u = !0)
        })
    }
    function At(t) {
        var e, i;
        if (!u)
            return e = D[D.length - 1],
            i = t.keyCode,
            0 === e.__internal.buttons.length && i === M.ESC && !0 === e.get("closable") ? (gt(e),
            !1) : -1 < g.indexOf(i) ? (kt(e, function(t) {
                return t.key === i
            }),
            !1) : void 0;
        u = !1
    }
    function Lt(t) {
        var e = D[D.length - 1]
          , i = t.keyCode;
        if (i === M.LEFT || i === M.RIGHT) {
            for (var s = e.__internal.buttons, n = 0; n < s.length; n += 1)
                if (document.activeElement === s[n].element)
                    switch (i) {
                    case M.LEFT:
                        return void s[(n || s.length) - 1].element.focus();
                    case M.RIGHT:
                        return void s[(n + 1) % s.length].element.focus()
                    }
        } else if (i < M.F12 + 1 && i > M.F1 - 1 && -1 < g.indexOf(i))
            return t.preventDefault(),
            t.stopPropagation(),
            kt(e, function(t) {
                return t.key === i
            }),
            !1
    }
    function zt(t, e) {
        if (e)
            e.focus();
        else {
            var i = t.__internal.focus
              , s = i.element;
            switch (typeof i.element) {
            case "number":
                t.__internal.buttons.length > i.element && (s = !0 === t.get("basic") ? t.elements.reset[0] : t.__internal.buttons[i.element].element);
                break;
            case "string":
                s = t.elements.body.querySelector(i.element);
                break;
            case "function":
                s = i.element.call(t)
            }
            (s = null == s && 0 === t.__internal.buttons.length ? t.elements.reset[0] : s) && s.focus && (s.focus(),
            i.select) && s.select && s.select()
        }
    }
    function Mt(t, e) {
        if (!e)
            for (var i = D.length - 1; -1 < i; --i)
                if (D[i].isModal()) {
                    e = D[i];
                    break
                }
        var s, n;
        e && e.isModal() && ((n = (t = t.srcElement || t.target) === e.elements.reset[1] || 0 === e.__internal.buttons.length && t === document.body) && (e.get("maximizable") ? s = e.elements.commands.maximize : e.get("closable") && (s = e.elements.commands.close)),
        void 0 === s && ("number" == typeof e.__internal.focus.element ? t === e.elements.reset[0] ? s = e.elements.buttons.auxiliary.firstChild || e.elements.buttons.primary.firstChild : n && (s = e.elements.reset[0]) : t === e.elements.reset[0] && (s = e.elements.buttons.primary.lastChild || e.elements.buttons.auxiliary.lastChild)),
        zt(e, s))
    }
    function Dt(t, e) {
        clearTimeout(e.__internal.timerIn),
        zt(e),
        ht(),
        u = !1,
        l("onfocus", e),
        S(e.elements.dialog, N.type, e.__internal.transitionInHandler),
        c(e.elements.root, v.animationIn)
    }
    function jt(t, e) {
        clearTimeout(e.__internal.timerOut),
        S(e.elements.dialog, N.type, e.__internal.transitionOutHandler),
        $t(e),
        Ft(e),
        e.isMaximized() && !e.get("startMaximized") && wt(e),
        I.defaults.maintainFocus && e.__internal.activeElement && (e.__internal.activeElement.focus(),
        e.__internal.activeElement = null),
        "function" == typeof e.__internal.destroy && e.__internal.destroy.apply(e)
    }
    function St(t, e) {
        var i = t[w] - st
          , t = t[x] - b;
        E && (t -= document.body.scrollTop),
        e.style.left = i + "px",
        e.style.top = t + "px"
    }
    function Nt(t, e) {
        var i = t[w] - st
          , t = t[x] - b;
        E && (t -= document.body.scrollTop),
        e.style.left = Math.min(C.maxLeft, Math.max(C.minLeft, i)) + "px",
        e.style.top = E ? Math.min(C.maxTop, Math.max(C.minTop, t)) + "px" : Math.max(C.minTop, t) + "px"
    }
    function Ht(t, e) {
        if (null === k && !e.isMaximized() && e.get("movable")) {
            var i, s = 0, n = 0;
            if ("touchstart" === t.type ? (t.preventDefault(),
            i = t.targetTouches[0],
            w = "clientX",
            x = "clientY") : 0 === t.button && (i = t),
            i) {
                t = e.elements.dialog;
                if (p(t, v.capture),
                t.style.left && (s = parseInt(t.style.left, 10)),
                t.style.top && (n = parseInt(t.style.top, 10)),
                st = i[w] - s,
                b = i[x] - n,
                e.isModal() ? b += e.elements.modal.scrollTop : e.isPinned() && (b -= document.body.scrollTop),
                e.get("moveBounded")) {
                    for (var o = t, r = -s, a = -n; r += o.offsetLeft,
                    a += o.offsetTop,
                    o = o.offsetParent; )
                        ;
                    C = {
                        maxLeft: r,
                        minLeft: -r,
                        maxTop: document.documentElement.clientHeight - t.clientHeight - a,
                        minTop: -a
                    },
                    T = Nt
                } else
                    C = null,
                    T = St;
                return l("onmove", e),
                E = !e.isModal() && e.isPinned(),
                y = e,
                T(i, t),
                p(document.body, v.noSelection),
                !1
            }
        }
    }
    function It(t) {
        var e;
        y && ("touchmove" === t.type ? (t.preventDefault(),
        e = t.targetTouches[0]) : 0 === t.button && (e = t),
        e) && T(e, y.elements.dialog)
    }
    function Pt() {
        var t;
        y && (t = y,
        y = C = null,
        c(document.body, v.noSelection),
        c(t.elements.dialog, v.capture),
        l("onmoved", t))
    }
    function $t(t) {
        y = null;
        t = t.elements.dialog;
        t.style.left = t.style.top = ""
    }
    function Wt(t, e) {
        var i;
        if (!e.isMaximized() && ("touchstart" === t.type ? (t.preventDefault(),
        i = t.targetTouches[0]) : 0 === t.button && (i = t),
        i))
            return l("onresize", e),
            z = (k = e).elements.resizeHandle.offsetHeight / 2,
            p(t = e.elements.dialog, v.capture),
            O = parseInt(t.style.left, 10),
            t.style.height = t.offsetHeight + "px",
            t.style.minHeight = e.elements.header.offsetHeight + e.elements.footer.offsetHeight + "px",
            t.style.width = (A = t.offsetWidth) + "px",
            "none" !== t.style.maxWidth && (t.style.minWidth = (L = t.offsetWidth) + "px"),
            t.style.maxWidth = "none",
            p(document.body, v.noSelection),
            !1
    }
    function Rt(t) {
        if (k && ("touchmove" === t.type ? (t.preventDefault(),
        i = t.targetTouches[0]) : 0 === t.button && (i = t),
        i)) {
            for (var e, t = i, i = k.elements.dialog, s = !k.get("modal") && !k.get("pinned"), n = i, o = 0, r = 0; o += n.offsetLeft,
            r += n.offsetTop,
            n = n.offsetParent; )
                ;
            var s = !0 === s ? (e = t.pageX,
            t.pageY) : (e = t.clientX,
            t.clientY);
            (t = $()) && (e = document.body.offsetWidth - e,
            isNaN(O) || (o = document.body.offsetWidth - o - i.offsetWidth)),
            i.style.height = s - r + z + "px",
            i.style.width = e - o + z + "px",
            isNaN(O) || (s = .5 * Math.abs(i.offsetWidth - A),
            t && (s *= -1),
            i.offsetWidth > A ? i.style.left = O + s + "px" : i.offsetWidth >= L && (i.style.left = O - s + "px"))
        }
    }
    function Bt() {
        var t;
        k && (t = k,
        k = null,
        c(document.body, v.noSelection),
        c(t.elements.dialog, v.capture),
        i = !0,
        l("onresized", t))
    }
    function Ft(t) {
        k = null;
        t = t.elements.dialog;
        "none" === t.style.maxWidth && (t.style.maxWidth = t.style.minWidth = t.style.width = t.style.height = t.style.minHeight = t.style.left = "",
        O = Number.Nan,
        A = L = z = 0)
    }
    function qt() {
        for (var t = 0; t < D.length; t += 1) {
            var e = D[t];
            e.get("autoReset") && ($t(e),
            Ft(e))
        }
    }
    function Vt(t) {
        j(t.elements.dialog, "focus", t.__internal.bringToFrontHandler, !0)
    }
    function Qt(t) {
        S(t.elements.dialog, "focus", t.__internal.bringToFrontHandler, !0)
    }
    function Ut(t) {
        j(t.elements.header, "mousedown", t.__internal.beginMoveHandler),
        j(t.elements.header, "touchstart", t.__internal.beginMoveHandler)
    }
    function Xt(t) {
        S(t.elements.header, "mousedown", t.__internal.beginMoveHandler),
        S(t.elements.header, "touchstart", t.__internal.beginMoveHandler)
    }
    function Yt(t) {
        j(t.elements.resizeHandle, "mousedown", t.__internal.beginResizeHandler),
        j(t.elements.resizeHandle, "touchstart", t.__internal.beginResizeHandler)
    }
    function Kt(t) {
        S(t.elements.resizeHandle, "mousedown", t.__internal.beginResizeHandler),
        S(t.elements.resizeHandle, "touchstart", t.__internal.beginResizeHandler)
    }
    I.dialog("alert", function() {
        return {
            main: function(t, e, i) {
                var s, n, o;
                switch (arguments.length) {
                case 1:
                    n = t;
                    break;
                case 2:
                    "function" == typeof e ? (n = t,
                    o = e) : (s = t,
                    n = e);
                    break;
                case 3:
                    s = t,
                    n = e,
                    o = i
                }
                return this.set("title", s),
                this.set("message", n),
                this.set("onok", o),
                this
            },
            setup: function() {
                return {
                    buttons: [{
                        text: I.defaults.glossary.ok,
                        key: M.ESC,
                        invokeOnClose: !0,
                        className: I.defaults.theme.ok
                    }],
                    focus: {
                        element: 0,
                        select: !1
                    },
                    options: {
                        maximizable: !1,
                        resizable: !1
                    }
                }
            },
            build: function() {},
            prepare: function() {},
            setMessage: function(t) {
                this.setContent(t)
            },
            settings: {
                message: void 0,
                onok: void 0,
                label: void 0
            },
            settingUpdated: function(t, e, i) {
                switch (t) {
                case "message":
                    this.setMessage(i);
                    break;
                case "label":
                    this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = i)
                }
            },
            callback: function(t) {
                var e;
                "function" == typeof this.get("onok") && void 0 !== (e = this.get("onok").call(this, t)) && (t.cancel = !e)
            }
        }
    }),
    I.dialog("confirm", function() {
        function s(t) {
            null !== n.timer && (clearInterval(n.timer),
            n.timer = null,
            t.__internal.buttons[n.index].element.innerHTML = n.text)
        }
        function e(t, e, i) {
            s(t),
            n.duration = i,
            n.index = e,
            n.text = t.__internal.buttons[e].element.innerHTML,
            n.timer = setInterval(f(t, n.task), 1e3),
            n.task(null, t)
        }
        var n = {
            timer: null,
            index: null,
            text: null,
            duration: null,
            task: function(t, e) {
                var i;
                e.isOpen() ? (e.__internal.buttons[n.index].element.innerHTML = n.text + " (&#8207;" + n.duration + "&#8207;) ",
                --n.duration,
                -1 === n.duration && (s(e),
                i = e.__internal.buttons[n.index],
                i = B(n.index, i),
                "function" == typeof e.callback && e.callback.apply(e, [i]),
                !1 !== i.close) && e.close()) : s(e)
            }
        };
        return {
            main: function(t, e, i, s) {
                var n, o, r, a;
                switch (arguments.length) {
                case 1:
                    o = t;
                    break;
                case 2:
                    o = t,
                    r = e;
                    break;
                case 3:
                    o = t,
                    r = e,
                    a = i;
                    break;
                case 4:
                    n = t,
                    o = e,
                    r = i,
                    a = s
                }
                return this.set("title", n),
                this.set("message", o),
                this.set("onok", r),
                this.set("oncancel", a),
                this
            },
            setup: function() {
                return {
                    buttons: [{
                        text: I.defaults.glossary.ok,
                        key: M.ENTER,
                        className: I.defaults.theme.ok
                    }, {
                        text: I.defaults.glossary.cancel,
                        key: M.ESC,
                        invokeOnClose: !0,
                        className: I.defaults.theme.cancel
                    }],
                    focus: {
                        element: 0,
                        select: !1
                    },
                    options: {
                        maximizable: !1,
                        resizable: !1
                    }
                }
            },
            build: function() {},
            prepare: function() {},
            setMessage: function(t) {
                this.setContent(t)
            },
            settings: {
                message: null,
                labels: null,
                onok: null,
                oncancel: null,
                defaultFocus: null,
                reverseButtons: null
            },
            settingUpdated: function(t, e, i) {
                switch (t) {
                case "message":
                    this.setMessage(i);
                    break;
                case "labels":
                    "ok"in i && this.__internal.buttons[0].element && (this.__internal.buttons[0].text = i.ok,
                    this.__internal.buttons[0].element.innerHTML = i.ok),
                    "cancel"in i && this.__internal.buttons[1].element && (this.__internal.buttons[1].text = i.cancel,
                    this.__internal.buttons[1].element.innerHTML = i.cancel);
                    break;
                case "reverseButtons":
                    !0 === i ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);
                    break;
                case "defaultFocus":
                    this.__internal.focus.element = "ok" === i ? 0 : 1
                }
            },
            callback: function(t) {
                var e;
                switch (s(this),
                t.index) {
                case 0:
                    "function" == typeof this.get("onok") && void 0 !== (e = this.get("onok").call(this, t)) && (t.cancel = !e);
                    break;
                case 1:
                    "function" == typeof this.get("oncancel") && void 0 !== (e = this.get("oncancel").call(this, t)) && (t.cancel = !e)
                }
            },
            autoOk: function(t) {
                return e(this, 0, t),
                this
            },
            autoCancel: function(t) {
                return e(this, 1, t),
                this
            }
        }
    }),
    I.dialog("prompt", function() {
        var s = document.createElement("INPUT")
          , e = document.createElement("P");
        return {
            main: function(t, e, i, s, n) {
                var o, r, a, l, c;
                switch (arguments.length) {
                case 1:
                    r = t;
                    break;
                case 2:
                    r = t,
                    a = e;
                    break;
                case 3:
                    r = t,
                    a = e,
                    l = i;
                    break;
                case 4:
                    r = t,
                    a = e,
                    l = i,
                    c = s;
                    break;
                case 5:
                    o = t,
                    r = e,
                    a = i,
                    l = s,
                    c = n
                }
                return this.set("title", o),
                this.set("message", r),
                this.set("value", a),
                this.set("onok", l),
                this.set("oncancel", c),
                this
            },
            setup: function() {
                return {
                    buttons: [{
                        text: I.defaults.glossary.ok,
                        key: M.ENTER,
                        className: I.defaults.theme.ok
                    }, {
                        text: I.defaults.glossary.cancel,
                        key: M.ESC,
                        invokeOnClose: !0,
                        className: I.defaults.theme.cancel
                    }],
                    focus: {
                        element: s,
                        select: !0
                    },
                    options: {
                        maximizable: !1,
                        resizable: !1
                    }
                }
            },
            build: function() {
                s.className = I.defaults.theme.input,
                s.setAttribute("type", "text"),
                s.value = this.get("value"),
                this.elements.content.appendChild(e),
                this.elements.content.appendChild(s)
            },
            prepare: function() {},
            setMessage: function(t) {
                "string" == typeof t ? (n(e),
                e.innerHTML = t) : t instanceof r.HTMLElement && e.firstChild !== t && (n(e),
                e.appendChild(t))
            },
            settings: {
                message: void 0,
                labels: void 0,
                onok: void 0,
                oncancel: void 0,
                value: "",
                type: "text",
                reverseButtons: void 0
            },
            settingUpdated: function(t, e, i) {
                switch (t) {
                case "message":
                    this.setMessage(i);
                    break;
                case "value":
                    s.value = i;
                    break;
                case "type":
                    switch (i) {
                    case "text":
                    case "color":
                    case "date":
                    case "datetime-local":
                    case "email":
                    case "month":
                    case "number":
                    case "password":
                    case "search":
                    case "tel":
                    case "time":
                    case "week":
                        s.type = i;
                        break;
                    default:
                        s.type = "text"
                    }
                    break;
                case "labels":
                    i.ok && this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = i.ok),
                    i.cancel && this.__internal.buttons[1].element && (this.__internal.buttons[1].element.innerHTML = i.cancel);
                    break;
                case "reverseButtons":
                    !0 === i ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)
                }
            },
            callback: function(t) {
                var e;
                switch (t.index) {
                case 0:
                    this.settings.value = s.value,
                    "function" == typeof this.get("onok") && void 0 !== (e = this.get("onok").call(this, t, this.settings.value)) && (t.cancel = !e);
                    break;
                case 1:
                    "function" == typeof this.get("oncancel") && void 0 !== (e = this.get("oncancel").call(this, t)) && (t.cancel = !e),
                    t.cancel || (s.value = this.settings.value)
                }
            }
        }
    }),
    "object" == typeof module && "object" == typeof module.exports ? module.exports = I : "function" == typeof define && define.amd ? define([], function() {
        return I
    }) : r.alertify || (r.alertify = I)
}("undefined" != typeof window ? window : this),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function() {
    "use strict";
    const H = 1e3
      , I = "transitionend"
      , P = e => {
        let i = e.getAttribute("data-bs-target");
        if (!i || "#" === i) {
            let t = e.getAttribute("href");
            if (!t || !t.includes("#") && !t.startsWith("."))
                return null;
            t.includes("#") && !t.startsWith("#") && (t = "#" + t.split("#")[1]),
            i = t && "#" !== t ? t.trim() : null
        }
        return i
    }
      , $ = t => {
        t = P(t);
        return t && document.querySelector(t) ? t : null
    }
      , n = t => {
        t = P(t);
        return t ? document.querySelector(t) : null
    }
      , W = t => {
        t.dispatchEvent(new Event(I))
    }
      , o = t => !(!t || "object" != typeof t) && void 0 !== (t = void 0 !== t.jquery ? t[0] : t).nodeType
      , s = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && 0 < t.length ? document.querySelector(t) : null
      , r = t => {
        if (!o(t) || 0 === t.getClientRects().length)
            return !1;
        var e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
          , i = t.closest("details:not([open])");
        if (i && i !== t) {
            t = t.closest("summary");
            if (t && t.parentNode !== i)
                return !1;
            if (null === t)
                return !1
        }
        return e
    }
      , a = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , R = t => {
        var e;
        return document.documentElement.attachShadow ? "function" == typeof t.getRootNode ? (e = t.getRootNode())instanceof ShadowRoot ? e : null : t instanceof ShadowRoot ? t : t.parentNode ? R(t.parentNode) : null : null
    }
      , B = () => {}
      , F = t => {
        t.offsetHeight
    }
      , q = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , V = []
      , l = () => "rtl" === document.documentElement.dir;
    var t = s => {
        var t;
        t = () => {
            const t = q();
            if (t) {
                const e = s.NAME
                  , i = t.fn[e];
                t.fn[e] = s.jQueryInterface,
                t.fn[e].Constructor = s,
                t.fn[e].noConflict = () => (t.fn[e] = i,
                s.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (V.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t of V)
                t()
        }
        ),
        V.push(t)) : t()
    }
    ;
    const c = t => {
        "function" == typeof t && t()
    }
      , Q = (i, s, t=!0) => {
        if (t) {
            t = (t => {
                if (!t)
                    return 0;
                let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
                var t = Number.parseFloat(e)
                  , s = Number.parseFloat(i);
                return t || s ? (e = e.split(",")[0],
                i = i.split(",")[0],
                (Number.parseFloat(e) + Number.parseFloat(i)) * H) : 0
            }
            )(s) + 5;
            let e = !1;
            const n = ({target: t}) => {
                t === s && (e = !0,
                s.removeEventListener(I, n),
                c(i))
            }
            ;
            s.addEventListener(I, n),
            setTimeout( () => {
                e || W(s)
            }
            , t)
        } else
            c(i)
    }
      , U = (t, e, i, s) => {
        var n = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1,
        s && (o = (o + n) % n),
        t[Math.max(0, Math.min(o, n - 1))])
    }
      , X = /[^.]*(?=\..*)\.|.*/
      , Y = /\..*/
      , K = /::\d+$/
      , Z = {};
    let G = 1;
    const J = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , tt = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function et(t, e) {
        return e && e + "::" + G++ || t.uidEvent || G++
    }
    function it(t) {
        var e = et(t);
        return t.uidEvent = e,
        Z[e] = Z[e] || {},
        Z[e]
    }
    function st(t, e, i=null) {
        return Object.values(t).find(t => t.originalHandler === e && t.delegationSelector === i)
    }
    function nt(t, e, i) {
        var s = "string" == typeof e
          , i = s ? i : e;
        let n = at(t);
        return [s, i, n = tt.has(n) ? n : t]
    }
    function ot(t, e, i, s, n) {
        var o, r, a, l, c, h, d, u, p, m;
        "string" == typeof e && t && ([o,r,a] = (i || (i = s,
        s = null),
        e in J && (o = e => function(t) {
            if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
                return e.call(this, t)
        }
        ,
        s ? s = o(s) : i = o(i)),
        nt(e, i, s)),
        (c = st(l = (l = it(t))[a] || (l[a] = {}), r, o ? i : null)) ? c.oneOff = c.oneOff && n : (c = et(r, e.replace(X, "")),
        (e = o ? (u = t,
        p = i,
        m = s,
        function e(i) {
            var s = u.querySelectorAll(p);
            for (let t = i["target"]; t && t !== this; t = t.parentNode)
                for (const n of s)
                    if (n === t)
                        return i.delegateTarget = t,
                        e.oneOff && f.off(u, i.type, p, m),
                        m.apply(t, [i])
        }
        ) : (h = t,
        d = i,
        function t(e) {
            return e.delegateTarget = h,
            t.oneOff && f.off(h, e.type, d),
            d.apply(h, [e])
        }
        )).delegationSelector = o ? i : null,
        e.originalHandler = r,
        e.oneOff = n,
        l[e.uidEvent = c] = e,
        t.addEventListener(a, e, o)))
    }
    function rt(t, e, i, s, n) {
        s = st(e[i], s, n);
        s && (t.removeEventListener(i, s, Boolean(n)),
        delete e[i][s.uidEvent])
    }
    function at(t) {
        return t = t.replace(Y, ""),
        J[t] || t
    }
    const f = {
        on(t, e, i, s) {
            ot(t, e, i, s, !1)
        },
        one(t, e, i, s) {
            ot(t, e, i, s, !0)
        },
        off(t, e, i, s) {
            if ("string" == typeof e && t) {
                var [s,n,o] = nt(e, i, s)
                  , r = o !== e
                  , a = it(t)
                  , l = e.startsWith(".");
                if (void 0 !== n)
                    return a && a[o] ? void rt(t, a, o, n, s ? i : null) : void 0;
                if (l)
                    for (const _ of Object.keys(a)) {
                        c = m = p = u = d = h = void 0;
                        var c, h = t, d = a, u = _, p = e.slice(1), m = d[u] || {};
                        for (const v of Object.keys(m))
                            v.includes(p) && rt(h, d, u, (c = m[v]).originalHandler, c.delegationSelector)
                    }
                var f = a[o] || {};
                for (const y of Object.keys(f)) {
                    var g = y.replace(K, "");
                    r && !e.includes(g) || rt(t, a, o, (g = f[y]).originalHandler, g.delegationSelector)
                }
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            var s = q();
            let n = null
              , o = !0
              , r = !0
              , a = !1;
            e !== at(e) && s && (n = s.Event(e, i),
            s(t).trigger(n),
            o = !n.isPropagationStopped(),
            r = !n.isImmediatePropagationStopped(),
            a = n.isDefaultPrevented());
            var l = new Event(e,{
                bubbles: o,
                cancelable: !0
            });
            if (void 0 !== i)
                for (const c of Object.keys(i))
                    Object.defineProperty(l, c, {
                        get() {
                            return i[c]
                        }
                    });
            return a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && n && n.preventDefault(),
            l
        }
    }
      , h = new Map
      , lt = {
        set(t, e, i) {
            h.has(t) || h.set(t, new Map);
            t = h.get(t);
            t.has(e) || 0 === t.size ? t.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(t.keys())[0]}.`)
        },
        get(t, e) {
            return h.has(t) && h.get(t).get(e) || null
        },
        remove(t, e) {
            var i;
            h.has(t) && ((i = h.get(t)).delete(e),
            0 === i.size) && h.delete(t)
        }
    };
    function ct(e) {
        if ("true" === e)
            return !0;
        if ("false" === e)
            return !1;
        if (e === Number(e).toString())
            return Number(e);
        if ("" === e || "null" === e)
            return null;
        if ("string" != typeof e)
            return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch (t) {
            return e
        }
    }
    function ht(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    const d = {
        setDataAttribute(t, e, i) {
            t.setAttribute("data-bs-" + ht(e), i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-" + ht(e))
        },
        getDataAttributes(e) {
            if (!e)
                return {};
            var i = {};
            for (const s of Object.keys(e.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"))) {
                let t = s.replace(/^bs/, "");
                i[t = t.charAt(0).toLowerCase() + t.slice(1, t.length)] = ct(e.dataset[s])
            }
            return i
        },
        getDataAttribute(t, e) {
            return ct(t.getAttribute("data-bs-" + ht(e)))
        }
    };
    class dt {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            var i = o(e) ? d.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? d.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const n of Object.keys(e)) {
                var i = e[n]
                  , s = t[n]
                  , s = o(s) ? "element" : null == (s = s) ? "" + s : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(i).test(s))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${i}".`)
            }
        }
    }
    class e extends dt {
        constructor(t, e) {
            super(),
            (t = s(t)) && (this._element = t,
            this._config = this._getConfig(e),
            lt.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            lt.remove(this._element, this.constructor.DATA_KEY),
            f.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, i=!0) {
            Q(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return lt.get(s(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.2.0-beta1"
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
        static eventName(t) {
            return "" + t + this.EVENT_KEY
        }
    }
    var ut = (e, i="hide") => {
        var t = "click.dismiss" + e.EVENT_KEY;
        const s = e.NAME;
        f.on(document, t, `[data-bs-dismiss="${s}"]`, function(t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            a(this) || (t = n(this) || this.closest("." + s),
            e.getOrCreateInstance(t)[i]())
        })
    }
    ;
    class pt extends e {
        static get NAME() {
            return "alert"
        }
        close() {
            var t;
            f.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"),
            t = this._element.classList.contains("fade"),
            this._queueCallback( () => this._destroyElement(), this._element, t))
        }
        _destroyElement() {
            this._element.remove(),
            f.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = pt.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    ut(pt, "close"),
    t(pt);
    const mt = '[data-bs-toggle="button"]';
    class ft extends e {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = ft.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }
    f.on(document, "click.bs.button.data-api", mt, t => {
        t.preventDefault();
        t = t.target.closest(mt);
        ft.getOrCreateInstance(t).toggle()
    }
    ),
    t(ft);
    const u = {
        find(t, e=document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(e, t))
        },
        findOne(t, e=document.documentElement) {
            return Element.prototype.querySelector.call(e, t)
        },
        children(t, e) {
            return [].concat(...t.children).filter(t => t.matches(e))
        },
        parents(t, e) {
            var i = [];
            let s = t.parentNode.closest(e);
            for (; s; )
                i.push(s),
                s = s.parentNode.closest(e);
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => t + ':not([tabindex^="-"])').join(",");
            return this.find(e, t).filter(t => !a(t) && r(t))
        }
    }
      , i = ".bs.swipe"
      , gt = (i,
    i,
    i,
    i,
    i,
    {
        leftCallback: null,
        rightCallback: null,
        endCallback: null
    })
      , _t = {
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
        endCallback: "(function|null)"
    };
    class vt extends dt {
        constructor(t, e) {
            super(),
            (this._element = t) && vt.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return gt
        }
        static get DefaultType() {
            return _t
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            f.off(this._element, i)
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            c(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && 1 < t.touches.length ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            var t = Math.abs(this._deltaX);
            t <= 40 || (t = t / this._deltaX,
            this._deltaX = 0,
            t && c(0 < t ? this._config.rightCallback : this._config.leftCallback))
        }
        _initEvents() {
            this._supportPointerEvents ? (f.on(this._element, "pointerdown.bs.swipe", t => this._start(t)),
            f.on(this._element, "pointerup.bs.swipe", t => this._end(t)),
            this._element.classList.add("pointer-event")) : (f.on(this._element, "touchstart.bs.swipe", t => this._start(t)),
            f.on(this._element, "touchmove.bs.swipe", t => this._move(t)),
            f.on(this._element, "touchend.bs.swipe", t => this._end(t)))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints
        }
    }
    var p = ".bs.carousel";
    const yt = "next"
      , m = "prev"
      , g = "left"
      , bt = "right"
      , wt = "slid" + p;
    const xt = "carousel"
      , Ct = "active"
      , Et = ".active"
      , Tt = ".carousel-item";
    Et,
    Tt;
    const kt = {
        ArrowLeft: bt,
        ArrowRight: g
    }
      , Ot = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , At = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        ride: "(boolean|string)",
        pause: "(string|boolean)",
        touch: "boolean",
        wrap: "boolean"
    };
    class Lt extends e {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = u.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === xt && this.cycle()
        }
        static get Default() {
            return Ot
        }
        static get DefaultType() {
            return At
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(yt)
        }
        nextWhenVisible() {
            !document.hidden && r(this._element) && this.next()
        }
        prev() {
            this._slide(m)
        }
        pause() {
            this._isSliding && W(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval( () => this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? f.one(this._element, wt, () => this.cycle()) : this.cycle())
        }
        to(t) {
            var e, i = this._getItems();
            t > i.length - 1 || t < 0 || (this._isSliding ? f.one(this._element, wt, () => this.to(t)) : (e = this._getItemIndex(this._getActive())) !== t && (e = e < t ? yt : m,
            this._slide(e, i[t])))
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && f.on(this._element, "keydown.bs.carousel", t => this._keydown(t)),
            "hover" === this._config.pause && (f.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
            f.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())),
            this._config.touch && vt.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const e of u.find(".carousel-item img", this._element))
                f.on(e, "dragstart.bs.carousel", t => t.preventDefault());
            var t = {
                leftCallback: () => this._slide(this._directionToOrder(g)),
                rightCallback: () => this._slide(this._directionToOrder(bt)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout( () => this._maybeEnableCycle(), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new vt(this._element,t)
        }
        _keydown(t) {
            var e;
            /input|textarea/i.test(t.target.tagName) || (e = kt[t.key]) && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            var e;
            this._indicatorsElement && ((e = u.findOne(Et, this._indicatorsElement)).classList.remove(Ct),
            e.removeAttribute("aria-current"),
            e = u.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement)) && (e.classList.add(Ct),
            e.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            var t = this._activeElement || this._getActive();
            t && (t = Number.parseInt(t.getAttribute("data-bs-interval"), 10),
            this._config.interval = t || this._config.defaultInterval)
        }
        _slide(e, t=null) {
            if (!this._isSliding) {
                const s = this._getActive();
                var i = e === yt;
                const n = t || U(this._getItems(), s, i, this._config.wrap);
                if (n !== s) {
                    const o = this._getItemIndex(n)
                      , r = t => f.trigger(this._element, t, {
                        relatedTarget: n,
                        direction: this._orderToDirection(e),
                        from: this._getItemIndex(s),
                        to: o
                    });
                    t = r("slide.bs.carousel");
                    if (!t.defaultPrevented && s && n) {
                        t = Boolean(this._interval);
                        this.pause(),
                        this._isSliding = !0,
                        this._setActiveIndicatorElement(o),
                        this._activeElement = n;
                        const a = i ? "carousel-item-start" : "carousel-item-end"
                          , l = i ? "carousel-item-next" : "carousel-item-prev";
                        n.classList.add(l),
                        F(n),
                        s.classList.add(a),
                        n.classList.add(a);
                        this._queueCallback( () => {
                            n.classList.remove(a, l),
                            n.classList.add(Ct),
                            s.classList.remove(Ct, l, a),
                            this._isSliding = !1,
                            r(wt)
                        }
                        , s, this._isAnimated()),
                        t && this.cycle()
                    }
                }
            }
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return u.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return u.find(Tt, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return l() ? t === g ? m : yt : t === g ? yt : m
        }
        _orderToDirection(t) {
            return l() ? t === m ? g : bt : t === m ? bt : g
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = Lt.getOrCreateInstance(this, e);
                if ("number" == typeof e)
                    t.to(e);
                else if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    f.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t) {
        var e = n(this);
        e && e.classList.contains(xt) && (t.preventDefault(),
        t = Lt.getOrCreateInstance(e),
        (e = this.getAttribute("data-bs-slide-to")) ? t.to(e) : "next" === d.getDataAttribute(this, "slide") ? t.next() : t.prev(),
        t._maybeEnableCycle())
    }),
    f.on(window, "load.bs.carousel.data-api", () => {
        for (const t of u.find('[data-bs-ride="carousel"]'))
            Lt.getOrCreateInstance(t)
    }
    ),
    t(Lt);
    const zt = "show"
      , _ = "collapse"
      , Mt = "collapsing"
      , Dt = (_,
    _,
    '[data-bs-toggle="collapse"]')
      , jt = {
        toggle: !0,
        parent: null
    }
      , St = {
        toggle: "boolean",
        parent: "(null|element)"
    };
    class Nt extends e {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            for (const n of u.find(Dt)) {
                var i = $(n)
                  , s = u.find(i).filter(t => t === this._element);
                null !== i && s.length && this._triggerArray.push(n)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return jt
        }
        static get DefaultType() {
            return St
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let t = [];
                if (!(t = this._config.parent ? this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t => t !== this._element).map(t => Nt.getOrCreateInstance(t, {
                    toggle: !1
                })) : t).length || !t[0]._isTransitioning) {
                    var e = f.trigger(this._element, "show.bs.collapse");
                    if (!e.defaultPrevented) {
                        for (const s of t)
                            s.hide();
                        const i = this._getDimension();
                        this._element.classList.remove(_),
                        this._element.classList.add(Mt),
                        this._element.style[i] = 0,
                        this._addAriaAndCollapsedClass(this._triggerArray, !0),
                        this._isTransitioning = !0;
                        e = "scroll" + (i[0].toUpperCase() + i.slice(1));
                        this._queueCallback( () => {
                            this._isTransitioning = !1,
                            this._element.classList.remove(Mt),
                            this._element.classList.add(_, zt),
                            this._element.style[i] = "",
                            f.trigger(this._element, "shown.bs.collapse")
                        }
                        , this._element, !0),
                        this._element.style[i] = this._element[e] + "px"
                    }
                }
            }
        }
        hide() {
            if (!this._isTransitioning && this._isShown()) {
                var t = f.trigger(this._element, "hide.bs.collapse");
                if (!t.defaultPrevented) {
                    t = this._getDimension();
                    this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
                    F(this._element),
                    this._element.classList.add(Mt),
                    this._element.classList.remove(_, zt);
                    for (const i of this._triggerArray) {
                        var e = n(i);
                        e && !this._isShown(e) && this._addAriaAndCollapsedClass([i], !1)
                    }
                    this._isTransitioning = !0;
                    this._element.style[t] = "",
                    this._queueCallback( () => {
                        this._isTransitioning = !1,
                        this._element.classList.remove(Mt),
                        this._element.classList.add(_),
                        f.trigger(this._element, "hidden.bs.collapse")
                    }
                    , this._element, !0)
                }
            }
        }
        _isShown(t=this._element) {
            return t.classList.contains(zt)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = s(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (this._config.parent)
                for (const e of this._getFirstLevelChildren(Dt)) {
                    var t = n(e);
                    t && this._addAriaAndCollapsedClass([e], this._isShown(t))
                }
        }
        _getFirstLevelChildren(t) {
            const e = u.find(":scope .collapse .collapse", this._config.parent);
            return u.find(t, this._config.parent).filter(t => !e.includes(t))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t)
                    i.classList.toggle("collapsed", !e),
                    i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(e) {
            const i = {};
            return "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1),
            this.each(function() {
                var t = Nt.getOrCreateInstance(this, i);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    f.on(document, "click.bs.collapse.data-api", Dt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        t = $(this);
        for (const e of u.find(t))
            Nt.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
    }),
    t(Nt);
    var O = "top"
      , A = "bottom"
      , L = "right"
      , z = "left"
      , Ht = "auto"
      , M = [O, A, L, z]
      , D = "start"
      , y = "end"
      , It = "clippingParents"
      , Pt = "viewport"
      , $t = "popper"
      , Wt = "reference"
      , Rt = M.reduce(function(t, e) {
        return t.concat([e + "-" + D, e + "-" + y])
    }, [])
      , Bt = [].concat(M, [Ht]).reduce(function(t, e) {
        return t.concat([e, e + "-" + D, e + "-" + y])
    }, [])
      , p = "beforeRead"
      , Ft = "afterRead"
      , qt = "beforeMain"
      , Vt = "afterMain"
      , Qt = "beforeWrite"
      , Ut = "afterWrite"
      , Xt = [p, "read", Ft, qt, "main", Vt, Qt, "write", Ut];
    function v(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function b(t) {
        var e;
        return null == t ? window : "[object Window]" !== t.toString() ? (e = t.ownerDocument) && e.defaultView || window : t
    }
    function Yt(t) {
        return t instanceof b(t).Element || t instanceof Element
    }
    function w(t) {
        return t instanceof b(t).HTMLElement || t instanceof HTMLElement
    }
    function Kt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof b(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var Zt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var n = t.state;
            Object.keys(n.elements).forEach(function(t) {
                var e = n.styles[t] || {}
                  , i = n.attributes[t] || {}
                  , s = n.elements[t];
                w(s) && v(s) && (Object.assign(s.style, e),
                Object.keys(i).forEach(function(t) {
                    var e = i[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        },
        effect: function(t) {
            var s = t.state
              , n = {
                popper: {
                    position: s.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(s.elements.popper.style, n.popper),
            s.styles = n,
            s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow),
            function() {
                Object.keys(s.elements).forEach(function(t) {
                    var e = s.elements[t]
                      , i = s.attributes[t] || {}
                      , t = Object.keys((s.styles.hasOwnProperty(t) ? s.styles : n)[t]).reduce(function(t, e) {
                        return t[e] = "",
                        t
                    }, {});
                    w(e) && v(e) && (Object.assign(e.style, t),
                    Object.keys(i).forEach(function(t) {
                        e.removeAttribute(t)
                    }))
                })
            }
        },
        requires: ["computeStyles"]
    };
    function j(t) {
        return t.split("-")[0]
    }
    var k = Math.max
      , Gt = Math.min
      , Jt = Math.round;
    function te(t, e) {
        void 0 === e && (e = !1);
        var i = t.getBoundingClientRect()
          , s = 1
          , n = 1;
        return w(t) && e && (e = t.offsetHeight,
        0 < (t = t.offsetWidth) && (s = Jt(i.width) / t || 1),
        0 < e) && (n = Jt(i.height) / e || 1),
        {
            width: i.width / s,
            height: i.height / n,
            top: i.top / n,
            right: i.right / s,
            bottom: i.bottom / n,
            left: i.left / s,
            x: i.left / s,
            y: i.top / n
        }
    }
    function ee(t) {
        var e = te(t)
          , i = t.offsetWidth
          , s = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width),
        Math.abs(e.height - s) <= 1 && (s = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: s
        }
    }
    function ie(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && Kt(i)) {
            var s = e;
            do {
                if (s && t.isSameNode(s))
                    return !0
            } while (s = s.parentNode || s.host)
        }
        return !1
    }
    function x(t) {
        return b(t).getComputedStyle(t)
    }
    function C(t) {
        return ((Yt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function se(t) {
        return "html" === v(t) ? t : t.assignedSlot || t.parentNode || (Kt(t) ? t.host : null) || C(t)
    }
    function ne(t) {
        return w(t) && "fixed" !== x(t).position ? t.offsetParent : null
    }
    function oe(t) {
        for (var e, i = b(t), s = ne(t); s && (e = s,
        0 <= ["table", "td", "th"].indexOf(v(e))) && "static" === x(s).position; )
            s = ne(s);
        return (!s || "html" !== v(s) && ("body" !== v(s) || "static" !== x(s).position)) && (s || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")
              , i = -1 !== navigator.userAgent.indexOf("Trident");
            if (!i || !w(t) || "fixed" !== x(t).position) {
                var s = se(t);
                for (Kt(s) && (s = s.host); w(s) && ["html", "body"].indexOf(v(s)) < 0; ) {
                    var n = x(s);
                    if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter)
                        return s;
                    s = s.parentNode
                }
            }
            return null
        }(t)) || i
    }
    function re(t) {
        return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y"
    }
    function ae(t, e, i) {
        return k(t, Gt(e, i))
    }
    function le() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }
    function ce(t) {
        return Object.assign({}, le(), t)
    }
    function he(i, t) {
        return t.reduce(function(t, e) {
            return t[e] = i,
            t
        }, {})
    }
    var de = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i, s, n, o = t.state, r = t.name, t = t.options, a = o.elements.arrow, l = o.modifiersData.popperOffsets, c = re(h = j(o.placement)), h = 0 <= [z, L].indexOf(h) ? "height" : "width";
            a && l && (t = t.padding,
            i = o,
            i = ce("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, i.rects, {
                placement: i.placement
            })) : t) ? t : he(t, M)),
            t = ee(a),
            n = "y" === c ? O : z,
            s = "y" === c ? A : L,
            e = o.rects.reference[h] + o.rects.reference[c] - l[c] - o.rects.popper[h],
            l = l[c] - o.rects.reference[c],
            a = (a = oe(a)) ? "y" === c ? a.clientHeight || 0 : a.clientWidth || 0 : 0,
            n = i[n],
            i = a - t[h] - i[s],
            n = ae(n, s = a / 2 - t[h] / 2 + (e / 2 - l / 2), i),
            o.modifiersData[r] = ((a = {})[c] = n,
            a.centerOffset = n - s,
            a))
        },
        effect: function(t) {
            var e = t.state;
            null != (t = void 0 === (t = t.options.element) ? "[data-popper-arrow]" : t) && ("string" != typeof t || (t = e.elements.popper.querySelector(t))) && ie(e.elements.popper, t) && (e.elements.arrow = t)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function ue(t) {
        return t.split("-")[1]
    }
    var pe = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function me(t) {
        var e, i, s, n = t.popper, o = t.popperRect, r = t.placement, a = t.variation, l = t.offsets, c = t.position, h = t.gpuAcceleration, d = t.adaptive, u = t.roundOffsets, t = t.isFixed, p = l.x, p = void 0 === p ? 0 : p, m = l.y, m = void 0 === m ? 0 : m, f = "function" == typeof u ? u({
            x: p,
            y: m
        }) : {
            x: p,
            y: m
        }, f = (p = f.x,
        m = f.y,
        l.hasOwnProperty("x")), l = l.hasOwnProperty("y"), g = z, _ = O, v = window, n = (d && (i = "clientHeight",
        e = "clientWidth",
        (s = oe(n)) === b(n) && "static" !== x(s = C(n)).position && "absolute" === c && (i = "scrollHeight",
        e = "scrollWidth"),
        r !== O && (r !== z && r !== L || a !== y) || (_ = A,
        m = (m - ((t && s === v && v.visualViewport ? v.visualViewport.height : s[i]) - o.height)) * (h ? 1 : -1)),
        r !== z && (r !== O && r !== A || a !== y) || (g = L,
        p = (p - ((t && s === v && v.visualViewport ? v.visualViewport.width : s[e]) - o.width)) * (h ? 1 : -1))),
        Object.assign({
            position: c
        }, d && pe)), t = !0 === u ? (r = (i = {
            x: p,
            y: m
        }).x,
        i = i.y,
        a = window.devicePixelRatio || 1,
        {
            x: Jt(r * a) / a || 0,
            y: Jt(i * a) / a || 0
        }) : {
            x: p,
            y: m
        };
        return p = t.x,
        m = t.y,
        h ? Object.assign({}, n, ((s = {})[_] = l ? "0" : "",
        s[g] = f ? "0" : "",
        s.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)",
        s)) : Object.assign({}, n, ((e = {})[_] = l ? m + "px" : "",
        e[g] = f ? p + "px" : "",
        e.transform = "",
        e))
    }
    var fe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , t = t.options
              , i = void 0 === (i = t.gpuAcceleration) || i
              , s = void 0 === (s = t.adaptive) || s
              , t = void 0 === (t = t.roundOffsets) || t
              , i = {
                placement: j(e.placement),
                variation: ue(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: i,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, me(Object.assign({}, i, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: s,
                roundOffsets: t
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, me(Object.assign({}, i, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: t
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , ge = {
        passive: !0
    };
    var _e = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , i = t.instance
              , s = (t = t.options).scroll
              , n = void 0 === s || s
              , o = void 0 === (s = t.resize) || s
              , r = b(e.elements.popper)
              , a = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return n && a.forEach(function(t) {
                t.addEventListener("scroll", i.update, ge)
            }),
            o && r.addEventListener("resize", i.update, ge),
            function() {
                n && a.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, ge)
                }),
                o && r.removeEventListener("resize", i.update, ge)
            }
        },
        data: {}
    }
      , ve = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function ye(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return ve[t]
        })
    }
    var be = {
        start: "end",
        end: "start"
    };
    function we(t) {
        return t.replace(/start|end/g, function(t) {
            return be[t]
        })
    }
    function xe(t) {
        t = b(t);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }
    function Ce(t) {
        return te(C(t)).left + xe(t).scrollLeft
    }
    function Ee(t) {
        var t = x(t)
          , e = t.overflow
          , i = t.overflowX
          , t = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(e + t + i)
    }
    function Te(t, e) {
        void 0 === e && (e = []);
        var i = function t(e) {
            return 0 <= ["html", "body", "#document"].indexOf(v(e)) ? e.ownerDocument.body : w(e) && Ee(e) ? e : t(se(e))
        }(t)
          , t = i === (null == (t = t.ownerDocument) ? void 0 : t.body)
          , s = b(i)
          , s = t ? [s].concat(s.visualViewport || [], Ee(i) ? i : []) : i
          , i = e.concat(s);
        return t ? i : i.concat(Te(se(s)))
    }
    function ke(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function Oe(t, e) {
        return e === Pt ? ke((s = b(i = t),
        n = C(i),
        s = s.visualViewport,
        o = n.clientWidth,
        n = n.clientHeight,
        a = r = 0,
        s && (o = s.width,
        n = s.height,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft,
        a = s.offsetTop)),
        {
            width: o,
            height: n,
            x: r + Ce(i),
            y: a
        })) : Yt(e) ? ((o = te(s = e)).top = o.top + s.clientTop,
        o.left = o.left + s.clientLeft,
        o.bottom = o.top + s.clientHeight,
        o.right = o.left + s.clientWidth,
        o.width = s.clientWidth,
        o.height = s.clientHeight,
        o.x = o.left,
        o.y = o.top,
        o) : ke((n = C(t),
        r = C(n),
        i = xe(n),
        a = null == (a = n.ownerDocument) ? void 0 : a.body,
        e = k(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
        t = k(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
        n = -i.scrollLeft + Ce(n),
        i = -i.scrollTop,
        "rtl" === x(a || r).direction && (n += k(r.clientWidth, a ? a.clientWidth : 0) - e),
        {
            width: e,
            height: t,
            x: n,
            y: i
        }));
        var i, s, n, o, r, a
    }
    function Ae(i, t, e) {
        var s, n = "clippingParents" === t ? (o = Te(se(n = i)),
        Yt(s = 0 <= ["absolute", "fixed"].indexOf(x(n).position) && w(n) ? oe(n) : n) ? o.filter(function(t) {
            return Yt(t) && ie(t, s) && "body" !== v(t)
        }) : []) : [].concat(t), o = [].concat(n, [e]), t = o[0], e = o.reduce(function(t, e) {
            e = Oe(i, e);
            return t.top = k(e.top, t.top),
            t.right = Gt(e.right, t.right),
            t.bottom = Gt(e.bottom, t.bottom),
            t.left = k(e.left, t.left),
            t
        }, Oe(i, t));
        return e.width = e.right - e.left,
        e.height = e.bottom - e.top,
        e.x = e.left,
        e.y = e.top,
        e
    }
    function Le(t) {
        var e, i = t.reference, s = t.element, t = t.placement, n = t ? j(t) : null, t = t ? ue(t) : null, o = i.x + i.width / 2 - s.width / 2, r = i.y + i.height / 2 - s.height / 2;
        switch (n) {
        case O:
            e = {
                x: o,
                y: i.y - s.height
            };
            break;
        case A:
            e = {
                x: o,
                y: i.y + i.height
            };
            break;
        case L:
            e = {
                x: i.x + i.width,
                y: r
            };
            break;
        case z:
            e = {
                x: i.x - s.width,
                y: r
            };
            break;
        default:
            e = {
                x: i.x,
                y: i.y
            }
        }
        var a = n ? re(n) : null;
        if (null != a) {
            var l = "y" === a ? "height" : "width";
            switch (t) {
            case D:
                e[a] = e[a] - (i[l] / 2 - s[l] / 2);
                break;
            case y:
                e[a] = e[a] + (i[l] / 2 - s[l] / 2)
            }
        }
        return e
    }
    function ze(t, e) {
        var s, e = e = void 0 === e ? {} : e, i = e.placement, i = void 0 === i ? t.placement : i, n = e.boundary, n = void 0 === n ? It : n, o = e.rootBoundary, o = void 0 === o ? Pt : o, r = e.elementContext, r = void 0 === r ? $t : r, a = e.altBoundary, a = void 0 !== a && a, e = e.padding, e = void 0 === e ? 0 : e, e = ce("number" != typeof e ? e : he(e, M)), l = t.rects.popper, a = t.elements[a ? r === $t ? Wt : $t : r], a = Ae(Yt(a) ? a : a.contextElement || C(t.elements.popper), n, o), n = te(t.elements.reference), o = Le({
            reference: n,
            element: l,
            strategy: "absolute",
            placement: i
        }), l = ke(Object.assign({}, l, o)), o = r === $t ? l : n, c = {
            top: a.top - o.top + e.top,
            bottom: o.bottom - a.bottom + e.bottom,
            left: a.left - o.left + e.left,
            right: o.right - a.right + e.right
        }, l = t.modifiersData.offset;
        return r === $t && l && (s = l[i],
        Object.keys(c).forEach(function(t) {
            var e = 0 <= [L, A].indexOf(t) ? 1 : -1
              , i = 0 <= [O, A].indexOf(t) ? "y" : "x";
            c[t] += s[i] * e
        })),
        c
    }
    var Me = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var d = t.state
              , e = t.options
              , t = t.name;
            if (!d.modifiersData[t]._skip) {
                for (var i = e.mainAxis, s = void 0 === i || i, i = e.altAxis, n = void 0 === i || i, i = e.fallbackPlacements, u = e.padding, p = e.boundary, m = e.rootBoundary, o = e.altBoundary, r = e.flipVariations, f = void 0 === r || r, g = e.allowedAutoPlacements, r = d.options.placement, e = j(r), i = i || (e === r || !f ? [ye(r)] : j(i = r) === Ht ? [] : (e = ye(i),
                [we(i), e, we(e)])), a = [r].concat(i).reduce(function(t, e) {
                    return t.concat(j(e) === Ht ? (i = d,
                    s = (t = t = void 0 === (t = {
                        placement: e,
                        boundary: p,
                        rootBoundary: m,
                        padding: u,
                        flipVariations: f,
                        allowedAutoPlacements: g
                    }) ? {} : t).placement,
                    n = t.boundary,
                    o = t.rootBoundary,
                    r = t.padding,
                    a = t.flipVariations,
                    l = void 0 === (t = t.allowedAutoPlacements) ? Bt : t,
                    c = ue(s),
                    t = c ? a ? Rt : Rt.filter(function(t) {
                        return ue(t) === c
                    }) : M,
                    h = (s = 0 === (s = t.filter(function(t) {
                        return 0 <= l.indexOf(t)
                    })).length ? t : s).reduce(function(t, e) {
                        return t[e] = ze(i, {
                            placement: e,
                            boundary: n,
                            rootBoundary: o,
                            padding: r
                        })[j(e)],
                        t
                    }, {}),
                    Object.keys(h).sort(function(t, e) {
                        return h[t] - h[e]
                    })) : e);
                    var i, s, n, o, r, a, l, c, h
                }, []), l = d.rects.reference, c = d.rects.popper, h = new Map, _ = !0, v = a[0], y = 0; y < a.length; y++) {
                    var b = a[y]
                      , w = j(b)
                      , x = ue(b) === D
                      , C = 0 <= [O, A].indexOf(w)
                      , E = C ? "width" : "height"
                      , T = ze(d, {
                        placement: b,
                        boundary: p,
                        rootBoundary: m,
                        altBoundary: o,
                        padding: u
                    })
                      , C = C ? x ? L : z : x ? A : O
                      , x = (l[E] > c[E] && (C = ye(C)),
                    ye(C))
                      , E = [];
                    if (s && E.push(T[w] <= 0),
                    n && E.push(T[C] <= 0, T[x] <= 0),
                    E.every(function(t) {
                        return t
                    })) {
                        v = b,
                        _ = !1;
                        break
                    }
                    h.set(b, E)
                }
                if (_)
                    for (var k = f ? 3 : 1; 0 < k; k--)
                        if ("break" === function(e) {
                            var t = a.find(function(t) {
                                t = h.get(t);
                                if (t)
                                    return t.slice(0, e).every(function(t) {
                                        return t
                                    })
                            });
                            if (t)
                                return v = t,
                                "break"
                        }(k))
                            break;
                d.placement !== v && (d.modifiersData[t]._skip = !0,
                d.placement = v,
                d.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function De(t, e, i) {
        return {
            top: t.top - e.height - (i = void 0 === i ? {
                x: 0,
                y: 0
            } : i).y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }
    function je(e) {
        return [O, L, A, z].some(function(t) {
            return 0 <= e[t]
        })
    }
    var Se = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , t = t.name
              , i = e.rects.reference
              , s = e.rects.popper
              , n = e.modifiersData.preventOverflow
              , o = ze(e, {
                elementContext: "reference"
            })
              , r = ze(e, {
                altBoundary: !0
            })
              , o = De(o, i)
              , i = De(r, s, n)
              , r = je(o)
              , s = je(i);
            e.modifiersData[t] = {
                referenceClippingOffsets: o,
                popperEscapeOffsets: i,
                isReferenceHidden: r,
                hasPopperEscaped: s
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": s
            })
        }
    };
    var Ne = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var r = t.state
              , e = t.options
              , t = t.name
              , a = void 0 === (e = e.offset) ? [0, 0] : e
              , e = Bt.reduce(function(t, e) {
                var i, s, n, o;
                return t[e] = (e = e,
                i = r.rects,
                s = a,
                n = j(e),
                o = 0 <= [z, O].indexOf(n) ? -1 : 1,
                e = (i = "function" == typeof s ? s(Object.assign({}, i, {
                    placement: e
                })) : s)[0] || 0,
                s = (i[1] || 0) * o,
                0 <= [z, L].indexOf(n) ? {
                    x: s,
                    y: e
                } : {
                    x: e,
                    y: s
                }),
                t
            }, {})
              , i = (s = e[r.placement]).x
              , s = s.y;
            null != r.modifiersData.popperOffsets && (r.modifiersData.popperOffsets.x += i,
            r.modifiersData.popperOffsets.y += s),
            r.modifiersData[t] = e
        }
    };
    var He = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , t = t.name;
            e.modifiersData[t] = Le({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var Ie = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i, s, n, o, r, a, l, c, h = t.state, d = t.options, t = t.name, u = void 0 === (u = d.mainAxis) || u, p = void 0 !== (p = d.altAxis) && p, m = d.boundary, f = d.rootBoundary, g = d.altBoundary, _ = d.padding, v = void 0 === (v = d.tether) || v, d = void 0 === (d = d.tetherOffset) ? 0 : d, m = ze(h, {
                boundary: m,
                rootBoundary: f,
                padding: _,
                altBoundary: g
            }), f = j(h.placement), g = !(_ = ue(h.placement)), y = re(f), b = "x" === y ? "y" : "x", w = h.modifiersData.popperOffsets, x = h.rects.reference, C = h.rects.popper, d = "number" == typeof (d = "function" == typeof d ? d(Object.assign({}, h.rects, {
                placement: h.placement
            })) : d) ? {
                mainAxis: d,
                altAxis: d
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, d), E = h.modifiersData.offset ? h.modifiersData.offset[h.placement] : null, T = {
                x: 0,
                y: 0
            };
            w && (u && (u = "y" === y ? "height" : "width",
            r = (a = w[y]) + m[i = "y" === y ? O : z],
            l = a - m[c = "y" === y ? A : L],
            e = v ? -C[u] / 2 : 0,
            n = (_ === D ? x : C)[u],
            _ = _ === D ? -C[u] : -x[u],
            o = h.elements.arrow,
            o = v && o ? ee(o) : {
                width: 0,
                height: 0
            },
            i = (s = h.modifiersData["arrow#persistent"] ? h.modifiersData["arrow#persistent"].padding : le())[i],
            s = s[c],
            c = ae(0, x[u], o[u]),
            o = g ? x[u] / 2 - e - c - i - d.mainAxis : n - c - i - d.mainAxis,
            n = g ? -x[u] / 2 + e + c + s + d.mainAxis : _ + c + s + d.mainAxis,
            g = (i = h.elements.arrow && oe(h.elements.arrow)) ? "y" === y ? i.clientTop || 0 : i.clientLeft || 0 : 0,
            _ = a + n - (e = null != (u = null == E ? void 0 : E[y]) ? u : 0),
            c = ae(v ? Gt(r, a + o - e - g) : r, a, v ? k(l, _) : l),
            w[y] = c,
            T[y] = c - a),
            p && (s = "y" == b ? "height" : "width",
            n = (i = w[b]) + m["x" === y ? O : z],
            u = i - m["x" === y ? A : L],
            o = -1 !== [O, z].indexOf(f),
            g = null != (e = null == E ? void 0 : E[b]) ? e : 0,
            r = o ? n : i - x[s] - C[s] - g + d.altAxis,
            _ = o ? i + x[s] + C[s] - g - d.altAxis : u,
            a = v && o ? (l = ae(l = r, i, c = _),
            c < l ? c : l) : ae(v ? r : n, i, v ? _ : u),
            w[b] = a,
            T[b] = a - i),
            h.modifiersData[t] = T)
        },
        requiresIfExists: ["offset"]
    };
    function Pe(t, e, i) {
        void 0 === i && (i = !1);
        var s = w(e)
          , n = w(e) && (r = (n = e).getBoundingClientRect(),
        o = Jt(r.width) / n.offsetWidth || 1,
        r = Jt(r.height) / n.offsetHeight || 1,
        1 !== o || 1 !== r)
          , o = C(e)
          , r = te(t, n)
          , t = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , a = {
            x: 0,
            y: 0
        };
        return !s && i || ("body" === v(e) && !Ee(o) || (t = (s = e) !== b(s) && w(s) ? {
            scrollLeft: s.scrollLeft,
            scrollTop: s.scrollTop
        } : xe(s)),
        w(e) ? ((a = te(e, !0)).x += e.clientLeft,
        a.y += e.clientTop) : o && (a.x = Ce(o))),
        {
            x: r.left + t.scrollLeft - a.x,
            y: r.top + t.scrollTop - a.y,
            width: r.width,
            height: r.height
        }
    }
    function $e(t) {
        var i = new Map
          , s = new Set
          , n = [];
        return t.forEach(function(t) {
            i.set(t.name, t)
        }),
        t.forEach(function(t) {
            s.has(t.name) || !function e(t) {
                s.add(t.name),
                [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                    s.has(t) || (t = i.get(t)) && e(t)
                }),
                n.push(t)
            }(t)
        }),
        n
    }
    var We = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Re() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }
    function Be(t) {
        var t = t = void 0 === t ? {} : t
          , e = t.defaultModifiers
          , d = void 0 === e ? [] : e
          , e = t.defaultOptions
          , u = void 0 === e ? We : e;
        return function(s, n, e) {
            void 0 === e && (e = u);
            var i, o, r = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, We, u),
                modifiersData: {},
                elements: {
                    reference: s,
                    popper: n
                },
                attributes: {},
                styles: {}
            }, a = [], l = !1, c = {
                state: r,
                setOptions: function(t) {
                    var i, e, t = "function" == typeof t ? t(r.options) : t, t = (h(),
                    r.options = Object.assign({}, u, r.options, t),
                    r.scrollParents = {
                        reference: Yt(s) ? Te(s) : s.contextElement ? Te(s.contextElement) : [],
                        popper: Te(n)
                    },
                    t = [].concat(d, r.options.modifiers),
                    e = t.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e,
                        t
                    }, {}),
                    t = Object.keys(e).map(function(t) {
                        return e[t]
                    }),
                    i = $e(t),
                    Xt.reduce(function(t, e) {
                        return t.concat(i.filter(function(t) {
                            return t.phase === e
                        }))
                    }, []));
                    return r.orderedModifiers = t.filter(function(t) {
                        return t.enabled
                    }),
                    r.orderedModifiers.forEach(function(t) {
                        var e = t.name
                          , i = t.options
                          , t = t.effect;
                        "function" == typeof t && (t = t({
                            state: r,
                            name: e,
                            instance: c,
                            options: void 0 === i ? {} : i
                        }),
                        a.push(t || function() {}
                        ))
                    }),
                    c.update()
                },
                forceUpdate: function() {
                    if (!l) {
                        var t = r.elements
                          , e = t.reference
                          , t = t.popper;
                        if (Re(e, t)) {
                            r.rects = {
                                reference: Pe(e, oe(t), "fixed" === r.options.strategy),
                                popper: ee(t)
                            },
                            r.reset = !1,
                            r.placement = r.options.placement,
                            r.orderedModifiers.forEach(function(t) {
                                return r.modifiersData[t.name] = Object.assign({}, t.data)
                            });
                            for (var i, s, n, o = 0; o < r.orderedModifiers.length; o++)
                                !0 === r.reset ? (r.reset = !1,
                                o = -1) : (i = (n = r.orderedModifiers[o]).fn,
                                s = n.options,
                                n = n.name,
                                "function" == typeof i && (r = i({
                                    state: r,
                                    options: void 0 === s ? {} : s,
                                    name: n,
                                    instance: c
                                }) || r))
                        }
                    }
                },
                update: (i = function() {
                    return new Promise(function(t) {
                        c.forceUpdate(),
                        t(r)
                    }
                    )
                }
                ,
                function() {
                    return o = o || new Promise(function(t) {
                        Promise.resolve().then(function() {
                            o = void 0,
                            t(i())
                        })
                    }
                    )
                }
                ),
                destroy: function() {
                    h(),
                    l = !0
                }
            };
            return Re(s, n) && c.setOptions(e).then(function(t) {
                !l && e.onFirstUpdate && e.onFirstUpdate(t)
            }),
            c;
            function h() {
                a.forEach(function(t) {
                    return t()
                }),
                a = []
            }
        }
    }
    var Fe = Be({
        defaultModifiers: [_e, He, fe, Zt, Ne, Me, Ie, de, Se]
    });
    const qe = Object.freeze(Object.defineProperty({
        __proto__: null,
        popperGenerator: Be,
        detectOverflow: ze,
        createPopperBase: Be(),
        createPopper: Fe,
        createPopperLite: Be({
            defaultModifiers: [_e, He, fe, Zt]
        }),
        top: O,
        bottom: A,
        right: L,
        left: z,
        auto: Ht,
        basePlacements: M,
        start: D,
        end: y,
        clippingParents: It,
        viewport: Pt,
        popper: $t,
        reference: Wt,
        variationPlacements: Rt,
        placements: Bt,
        beforeRead: p,
        read: "read",
        afterRead: Ft,
        beforeMain: qt,
        main: "main",
        afterMain: Vt,
        beforeWrite: Qt,
        write: "write",
        afterWrite: Ut,
        modifierPhases: Xt,
        applyStyles: Zt,
        arrow: de,
        computeStyles: fe,
        eventListeners: _e,
        flip: Me,
        hide: Se,
        offset: Ne,
        popperOffsets: He,
        preventOverflow: Ie
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ve = "dropdown";
    p = ".bs.dropdown",
    Ft = ".data-api";
    const Qe = "ArrowDown";
    qt = "click" + p + Ft,
    Vt = "keydown" + p + Ft;
    const Ue = "show"
      , Xe = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , Ye = (Xe,
    ".dropdown-menu")
      , Ke = l() ? "top-end" : "top-start"
      , Ze = l() ? "top-start" : "top-end"
      , Ge = l() ? "bottom-end" : "bottom-start"
      , Je = l() ? "bottom-start" : "bottom-end"
      , ti = l() ? "left-start" : "right-start"
      , ei = l() ? "right-start" : "left-start"
      , ii = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , si = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class E extends e {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = u.findOne(Ye, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return ii
        }
        static get DefaultType() {
            return si
        }
        static get NAME() {
            return Ve
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!a(this._element) && !this._isShown()) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = f.trigger(this._element, "show.bs.dropdown", t);
                if (!e.defaultPrevented) {
                    if (this._createPopper(),
                    "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                        for (const i of [].concat(...document.body.children))
                            f.on(i, "mouseover", B);
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(Ue),
                    this._element.classList.add(Ue),
                    f.trigger(this._element, "shown.bs.dropdown", t)
                }
            }
        }
        hide() {
            var t;
            !a(this._element) && this._isShown() && (t = {
                relatedTarget: this._element
            },
            this._completeHide(t))
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            var e = f.trigger(this._element, "hide.bs.dropdown", t);
            if (!e.defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const i of [].concat(...document.body.children))
                        f.off(i, "mouseover", B);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Ue),
                this._element.classList.remove(Ue),
                this._element.setAttribute("aria-expanded", "false"),
                d.removeDataAttribute(this._menu, "popper"),
                f.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }
        _getConfig(t) {
            if ("object" != typeof (t = super._getConfig(t)).reference || o(t.reference) || "function" == typeof t.reference.getBoundingClientRect)
                return t;
            throw new TypeError(Ve.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
        }
        _createPopper() {
            if (void 0 === qe)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = s(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            var e = this._getPopperConfig();
            this._popper = Fe(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(Ue)
        }
        _getPlacement() {
            var t, e = this._parent;
            return e.classList.contains("dropend") ? ti : e.classList.contains("dropstart") ? ei : e.classList.contains("dropup-center") ? "top" : e.classList.contains("dropdown-center") ? "bottom" : (t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(),
            e.classList.contains("dropup") ? t ? Ze : Ke : t ? Je : Ge)
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig() {
            var t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return !this._inNavbar && "static" !== this._config.display || (d.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            var i = u.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(t => r(t));
            i.length && U(i, e, t === Qe, !i.includes(e)).focus()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = E.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
        static clearMenus(t) {
            if (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                for (const n of u.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show')) {
                    var e, i, s = E.getInstance(n);
                    s && !1 !== s._config.autoClose && (e = (i = t.composedPath()).includes(s._menu),
                    i.includes(s._element) || "inside" === s._config.autoClose && !e || "outside" === s._config.autoClose && e || s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)) || (i = {
                        relatedTarget: s._element
                    },
                    "click" === t.type && (i.clickEvent = t),
                    s._completeHide(i)))
                }
        }
        static dataApiKeydownHandler(t) {
            var e = /input|textarea/i.test(t.target.tagName)
              , i = "Escape" === t.key
              , s = ["ArrowUp", Qe].includes(t.key);
            !s && !i || e && !i || (t.preventDefault(),
            e = u.findOne(Xe, t.delegateTarget.parentNode),
            i = E.getOrCreateInstance(e),
            s ? (t.stopPropagation(),
            i.show(),
            i._selectMenuItem(t)) : i._isShown() && (t.stopPropagation(),
            i.hide(),
            e.focus()))
        }
    }
    f.on(document, Vt, Xe, E.dataApiKeydownHandler),
    f.on(document, Vt, Ye, E.dataApiKeydownHandler),
    f.on(document, qt, E.clearMenus),
    f.on(document, "keyup.bs.dropdown.data-api", E.clearMenus),
    f.on(document, qt, Xe, function(t) {
        t.preventDefault(),
        E.getOrCreateInstance(this).toggle()
    }),
    t(E);
    const ni = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , oi = ".sticky-top"
      , ri = "padding-right"
      , ai = "margin-right";
    class li {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            var t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, ri, t => t + e),
            this._setElementAttributes(ni, ri, t => t + e),
            this._setElementAttributes(oi, ai, t => t - e)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, ri),
            this._resetElementAttributes(ni, ri),
            this._resetElementAttributes(oi, ai)
        }
        isOverflowing() {
            return 0 < this.getWidth()
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, i, s) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, t => {
                var e;
                t !== this._element && window.innerWidth > t.clientWidth + n || (this._saveInitialAttribute(t, i),
                e = window.getComputedStyle(t).getPropertyValue(i),
                t.style.setProperty(i, s(Number.parseFloat(e)) + "px"))
            }
            )
        }
        _saveInitialAttribute(t, e) {
            var i = t.style.getPropertyValue(e);
            i && d.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, i) {
            this._applyManipulationCallback(t, t => {
                var e = d.getDataAttribute(t, i);
                null === e ? t.style.removeProperty(i) : (d.removeDataAttribute(t, i),
                t.style.setProperty(i, e))
            }
            )
        }
        _applyManipulationCallback(t, e) {
            if (o(t))
                e(t);
            else
                for (const i of u.find(t, this._element))
                    e(i)
        }
    }
    const ci = "backdrop"
      , hi = "mousedown.bs." + ci
      , di = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , ui = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    };
    class pi extends dt {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return di
        }
        static get DefaultType() {
            return ui
        }
        static get NAME() {
            return ci
        }
        show(t) {
            var e;
            this._config.isVisible ? (this._append(),
            e = this._getElement(),
            this._config.isAnimated && F(e),
            e.classList.add("show"),
            this._emulateAnimation( () => {
                c(t)
            }
            )) : c(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"),
            this._emulateAnimation( () => {
                this.dispose(),
                c(t)
            }
            )) : c(t)
        }
        dispose() {
            this._isAppended && (f.off(this._element, hi),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            var t;
            return this._element || ((t = document.createElement("div")).className = this._config.className,
            this._config.isAnimated && t.classList.add("fade"),
            this._element = t),
            this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = s(t.rootElement),
            t
        }
        _append() {
            var t;
            this._isAppended || (t = this._getElement(),
            this._config.rootElement.append(t),
            f.on(t, hi, () => {
                c(this._config.clickCallback)
            }
            ),
            this._isAppended = !0)
        }
        _emulateAnimation(t) {
            Q(t, this._getElement(), this._config.isAnimated)
        }
    }
    const mi = ".bs.focustrap"
      , fi = (mi,
    mi,
    "backward")
      , gi = {
        trapElement: null,
        autofocus: !0
    }
      , _i = {
        trapElement: "element",
        autofocus: "boolean"
    };
    class vi extends dt {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return gi
        }
        static get DefaultType() {
            return _i
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            f.off(document, mi),
            f.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)),
            f.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            f.off(document, mi))
        }
        _handleFocusin(t) {
            var e = this._config["trapElement"];
            t.target === document || t.target === e || e.contains(t.target) || (0 === (t = u.focusableChildren(e)).length ? e : this._lastTabNavDirection === fi ? t[t.length - 1] : t[0]).focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? fi : "forward")
        }
    }
    const T = ".bs.modal";
    T,
    T;
    const yi = "hidden" + T
      , bi = "show" + T;
    T,
    T,
    T,
    T;
    T;
    const wi = "modal-open"
      , xi = "modal-static";
    const Ci = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , Ei = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    };
    class Ti extends e {
        constructor(t, e) {
            super(t, e),
            this._dialog = u.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new li,
            this._addEventListeners()
        }
        static get Default() {
            return Ci
        }
        static get DefaultType() {
            return Ei
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || f.trigger(this._element, bi, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(wi),
            this._adjustDialog(),
            this._backdrop.show( () => this._showElement(t)))
        }
        hide() {
            !this._isShown || this._isTransitioning || f.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove("show"),
            this._queueCallback( () => this._hideModal(), this._element, this._isAnimated()))
        }
        dispose() {
            for (const t of [window, this._dialog])
                f.off(t, T);
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new pi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new vi({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            var e = u.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            F(this._element),
            this._element.classList.add("show");
            this._queueCallback( () => {
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                f.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            , this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            f.on(this._element, "keydown.dismiss.bs.modal", t => {
                "Escape" === t.key && (this._config.keyboard ? (t.preventDefault(),
                this.hide()) : this._triggerBackdropTransition())
            }
            ),
            f.on(window, "resize.bs.modal", () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            ),
            f.on(this._element, "click.dismiss.bs.modal", t => {
                t.target === t.currentTarget && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this._config.backdrop && this.hide())
            }
            )
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide( () => {
                document.body.classList.remove(wi),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                f.trigger(this._element, yi)
            }
            )
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            var t = f.trigger(this._element, "hidePrevented.bs.modal");
            if (!t.defaultPrevented) {
                t = this._element.scrollHeight > document.documentElement.clientHeight;
                const e = this._element.style.overflowY;
                "hidden" === e || this._element.classList.contains(xi) || (t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(xi),
                this._queueCallback( () => {
                    this._element.classList.remove(xi),
                    this._queueCallback( () => {
                        this._element.style.overflowY = e
                    }
                    , this._dialog)
                }
                , this._dialog),
                this._element.focus())
            }
        }
        _adjustDialog() {
            var t, e = this._element.scrollHeight > document.documentElement.clientHeight, i = this._scrollBar.getWidth(), s = 0 < i;
            s && !e && (t = l() ? "paddingLeft" : "paddingRight",
            this._element.style[t] = i + "px"),
            !s && e && (t = l() ? "paddingRight" : "paddingLeft",
            this._element.style[t] = i + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, i) {
            return this.each(function() {
                var t = Ti.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](i)
                }
            })
        }
    }
    f.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
        const e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        f.one(e, bi, t => {
            t.defaultPrevented || f.one(e, yi, () => {
                r(this) && this.focus()
            }
            )
        }
        );
        t = u.findOne(".modal.show");
        t && Ti.getInstance(t).hide(),
        Ti.getOrCreateInstance(e).toggle(this)
    }),
    ut(Ti),
    t(Ti);
    Qt = ".bs.offcanvas";
    const ki = "showing"
      , Oi = ".offcanvas.show"
      , Ai = "hidePrevented" + Qt
      , Li = "hidden" + Qt;
    const zi = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Mi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class S extends e {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return zi
        }
        static get DefaultType() {
            return Mi
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || f.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new li).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(ki),
            this._queueCallback( () => {
                this._config.scroll || this._focustrap.activate(),
                this._element.classList.add("show"),
                this._element.classList.remove(ki),
                f.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && !f.trigger(this._element, "hide.bs.offcanvas").defaultPrevented && (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add("hiding"),
            this._backdrop.hide(),
            this._queueCallback( () => {
                this._element.classList.remove("show", "hiding"),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new li).reset(),
                f.trigger(this._element, Li)
            }
            , this._element, !0))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            var t = Boolean(this._config.backdrop);
            return new pi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" === this._config.backdrop ? f.trigger(this._element, Ai) : this.hide()
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new vi({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            f.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : f.trigger(this._element, Ai))
            }
            )
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = S.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    f.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        var e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        a(this) || (f.one(e, Li, () => {
            r(this) && this.focus()
        }
        ),
        (t = u.findOne(Oi)) && t !== e && S.getInstance(t).hide(),
        S.getOrCreateInstance(e).toggle(this))
    }),
    f.on(window, "load.bs.offcanvas.data-api", () => {
        for (const t of u.find(Oi))
            S.getOrCreateInstance(t).show()
    }
    ),
    f.on(window, "resize.bs.offcanvas", () => {
        for (const t of u.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t).position && S.getOrCreateInstance(t).hide()
    }
    ),
    ut(S),
    t(S);
    const Di = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
    const ji = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Si = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    Ut = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function Ni(t, e, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        i = (new window.DOMParser).parseFromString(t, "text/html");
        for (const r of [].concat(...i.body.querySelectorAll("*"))) {
            var s = r.nodeName.toLowerCase();
            if (Object.keys(e).includes(s)) {
                var n = [].concat(...r.attributes)
                  , o = [].concat(e["*"] || [], e[s] || []);
                for (const a of n)
                    ( (t, e) => {
                        const i = t.nodeName.toLowerCase();
                        return e.includes(i) ? !Di.has(i) || Boolean(ji.test(t.nodeValue) || Si.test(t.nodeValue)) : e.filter(t => t instanceof RegExp).some(t => t.test(i))
                    }
                    )(a, o) || r.removeAttribute(a.nodeName)
            } else
                r.remove()
        }
        return i.body.innerHTML
    }
    const Hi = {
        extraClass: "",
        template: "<div></div>",
        content: {},
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        allowList: Ut
    }
      , Ii = {
        extraClass: "(string|function)",
        template: "string",
        content: "object",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object"
    }
      , Pi = {
        selector: "(string|element)",
        entry: "(string|element|function|null)"
    };
    class $i extends dt {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return Hi
        }
        static get DefaultType() {
            return Ii
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
        }
        hasContent() {
            return 0 < this.getContent().length
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            var t, e, i = document.createElement("div");
            i.innerHTML = this._maybeSanitize(this._config.template);
            for ([t,e] of Object.entries(this._config.content))
                this._setContent(i, e, t);
            var s = i.children[0]
              , n = this._resolvePossibleFunction(this._config.extraClass);
            return n && s.classList.add(...n.split(" ")),
            s
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (var [e,i] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: i
                }, Pi)
        }
        _setContent(t, e, i) {
            i = u.findOne(i, t);
            i && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(s(e), i) : this._config.html ? i.innerHTML = this._maybeSanitize(e) : i.textContent = e : i.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? Ni(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            this._config.html ? (e.innerHTML = "",
            e.append(t)) : e.textContent = t.textContent
        }
    }
    const Wi = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Ri = "fade";
    const Bi = "show"
      , Fi = "hide.bs.modal"
      , qi = "hover"
      , Vi = "focus"
      , Qi = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: l() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: l() ? "right" : "left"
    }
      , Ui = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: Ut,
        popperConfig: null
    }
      , Xi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    };
    class Yi extends e {
        constructor(t, e) {
            if (void 0 === qe)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = !1,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Ui
        }
        static get DefaultType() {
            return Xi
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            this._isEnabled && (t ? ((t = this._initializeOnDelegatedTarget(t))._activeTrigger.click = !t._activeTrigger.click,
            t._isWithActiveTrigger() ? t._enter() : t._leave()) : this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            f.off(this._element.closest(".modal"), Fi, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this._isWithContent() && this._isEnabled) {
                var t = f.trigger(this._element, this.constructor.eventName("show"))
                  , e = (R(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (!t.defaultPrevented && e) {
                    t = this._getTipElement(),
                    e = (this._element.setAttribute("aria-describedby", t.getAttribute("id")),
                    this._config)["container"];
                    if (this._element.ownerDocument.documentElement.contains(this.tip) || (e.append(t),
                    f.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper ? this._popper.update() : this._createPopper(t),
                    t.classList.add(Bi),
                    "ontouchstart"in document.documentElement)
                        for (const i of [].concat(...document.body.children))
                            f.on(i, "mouseover", B);
                    this._queueCallback( () => {
                        var t = this._isHovered;
                        this._isHovered = !1,
                        f.trigger(this._element, this.constructor.eventName("shown")),
                        t && this._leave()
                    }
                    , this.tip, this._isAnimated())
                }
            }
        }
        hide() {
            if (this._isShown()) {
                var t = f.trigger(this._element, this.constructor.eventName("hide"));
                if (!t.defaultPrevented) {
                    const e = this._getTipElement();
                    if (e.classList.remove(Bi),
                    "ontouchstart"in document.documentElement)
                        for (const i of [].concat(...document.body.children))
                            f.off(i, "mouseover", B);
                    this._activeTrigger.click = !1,
                    this._activeTrigger[Vi] = !1,
                    this._activeTrigger[qi] = !1,
                    this._isHovered = !1;
                    this._queueCallback( () => {
                        this._isWithActiveTrigger() || (this._isHovered || e.remove(),
                        this._element.removeAttribute("aria-describedby"),
                        f.trigger(this._element, this.constructor.eventName("hidden")),
                        this._disposePopper())
                    }
                    , this.tip, this._isAnimated())
                }
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            t = this._getTemplateFactory(t).toHtml();
            if (!t)
                return null;
            t.classList.remove(Ri, Bi),
            t.classList.add(`bs-${this.constructor.NAME}-auto`);
            var e = (t => {
                for (; t += Math.floor(1e6 * Math.random()),
                document.getElementById(t); )
                    ;
                return t
            }
            )(this.constructor.NAME).toString();
            return t.setAttribute("id", e),
            this._isAnimated() && t.classList.add(Ri),
            t
        }
        setContent(t) {
            let e = !1;
            this.tip && (e = this._isShown(),
            this.tip.remove(),
            this.tip = null),
            this._disposePopper(),
            this.tip = this._createTipElement(t),
            e && this.show()
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new $i({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._config.title
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Ri)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Bi)
        }
        _createPopper(t) {
            var e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement
              , e = Qi[e.toUpperCase()];
            this._popper = Fe(this._element, t, this._getPopperConfig(e))
        }
        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            t = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _setListeners() {
            var t, e;
            for (const i of this._config.trigger.split(" "))
                "click" === i ? f.on(this._element, this.constructor.eventName("click"), this._config.selector, t => this.toggle(t)) : "manual" !== i && (t = i === qi ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                e = i === qi ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout"),
                f.on(this._element, t, this._config.selector, t => {
                    var e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? Vi : qi] = !0,
                    e._enter()
                }
                ),
                f.on(this._element, e, this._config.selector, t => {
                    var e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? Vi : qi] = e._element.contains(t.relatedTarget),
                    e._leave()
                }
                ));
            this._hideModalHandler = () => {
                this._element && this.hide()
            }
            ,
            f.on(this._element.closest(".modal"), Fi, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            var t = this._config.originalTitle;
            t && (this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout( () => {
                this._isHovered && this.show()
            }
            , this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout( () => {
                this._isHovered || this.hide()
            }
            , this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            var e = d.getDataAttributes(this._element);
            for (const i of Object.keys(e))
                Wi.has(i) && delete e[i];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : s(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            t.originalTitle = this._element.getAttribute("title") || "",
            t.title = this._resolvePossibleFunction(t.title) || t.originalTitle,
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            var t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = Yi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    t(Yi);
    const Ki = {
        ...Yi.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , Zi = {
        ...Yi.DefaultType,
        content: "(null|string|element|function)"
    };
    class Gi extends Yi {
        static get Default() {
            return Ki
        }
        static get DefaultType() {
            return Zi
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = Gi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    t(Gi);
    Zt = ".bs.scrollspy";
    const Ji = "click" + Zt;
    const ts = "active"
      , es = "[href]";
    const is = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null
    }
      , ss = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element"
    };
    class ns extends e {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return is
        }
        static get DefaultType() {
            return ss
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = s(t.target) || document.body,
            t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (f.off(this._config.target, Ji),
            f.on(this._config.target, Ji, es, t => {
                var e = this._observableSections.get(t.target.hash);
                e && (t.preventDefault(),
                t = this._rootElement || window,
                e = e.offsetTop - this._element.offsetTop,
                t.scrollTo ? t.scrollTo({
                    top: e
                }) : t.scrollTop = e)
            }
            ))
        }
        _getNewObserver() {
            var t = {
                root: this._rootElement,
                threshold: [.1, .5, 1],
                rootMargin: this._getRootMargin()
            };
            return new IntersectionObserver(t => this._observerCallback(t),t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get("#" + t.target.id);
            var i = t => {
                this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
            }
              , s = (this._rootElement || document.documentElement).scrollTop
              , n = s >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = s;
            for (const r of t)
                if (r.isIntersecting) {
                    var o = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (n && o) {
                        if (i(r),
                        s)
                            continue;
                        return
                    }
                    n || o || i(r)
                } else
                    this._activeTarget = null,
                    this._clearActiveClass(e(r))
        }
        _getRootMargin() {
            return this._config.offset ? this._config.offset + "px 0px -30%" : this._config.rootMargin
        }
        _initializeTargetsAndObservables() {
            var t;
            this._targetLinks = new Map,
            this._observableSections = new Map;
            for (const e of u.find(es, this._config.target))
                e.hash && !a(e) && (t = u.findOne(e.hash, this._element),
                r(t)) && (this._targetLinks.set(e.hash, e),
                this._observableSections.set(e.hash, t))
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            (this._activeTarget = t).classList.add(ts),
            this._activateParents(t),
            f.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                u.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(ts);
            else
                for (const e of u.parents(t, ".nav, .list-group"))
                    for (const i of u.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                        i.classList.add(ts)
        }
        _clearActiveClass(t) {
            t.classList.remove(ts);
            for (const e of u.find(es + "." + ts, t))
                e.classList.remove(ts)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = ns.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    f.on(window, "load.bs.scrollspy.data-api", () => {
        for (const t of u.find('[data-bs-spy="scroll"]'))
            ns.getOrCreateInstance(t)
    }
    ),
    t(ns);
    const os = "ArrowRight"
      , rs = "ArrowDown"
      , N = "active"
      , as = "show";
    de = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
    const ls = '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ' + de;
    N,
    N,
    N;
    class cs extends e {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            f.on(this._element, "keydown.bs.tab", t => this._keydown(t)))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            var t, e, i = this._element;
            this._elemIsActive(i) || (e = (t = this._getActiveElem()) ? f.trigger(t, "hide.bs.tab", {
                relatedTarget: i
            }) : null,
            f.trigger(i, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented) || e && e.defaultPrevented || (this._deactivate(t, i),
            this._activate(i, t))
        }
        _activate(t, e) {
            if (t) {
                t.classList.add(N),
                this._activate(n(t));
                const i = t.classList.contains("fade");
                this._queueCallback( () => {
                    i && t.classList.add(as),
                    "tab" === t.getAttribute("role") && (t.focus(),
                    t.removeAttribute("tabindex"),
                    t.setAttribute("aria-selected", !0),
                    this._toggleDropDown(t, !0),
                    f.trigger(t, "shown.bs.tab", {
                        relatedTarget: e
                    }))
                }
                , t, i)
            }
        }
        _deactivate(t, e) {
            if (t) {
                t.classList.remove(N),
                t.blur(),
                this._deactivate(n(t));
                const i = t.classList.contains("fade");
                this._queueCallback( () => {
                    i && t.classList.remove(as),
                    "tab" === t.getAttribute("role") && (t.setAttribute("aria-selected", !1),
                    t.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(t, !1),
                    f.trigger(t, "hidden.bs.tab", {
                        relatedTarget: e
                    }))
                }
                , t, i)
            }
        }
        _keydown(t) {
            var e;
            ["ArrowLeft", os, "ArrowUp", rs].includes(t.key) && (t.stopPropagation(),
            t.preventDefault(),
            e = [os, rs].includes(t.key),
            t = U(this._getChildren().filter(t => !a(t)), t.target, e, !0)) && cs.getOrCreateInstance(t).show()
        }
        _getChildren() {
            return u.find(ls, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(t => this._elemIsActive(t)) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const i of e)
                this._setInitialAttributesOnChild(i)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            var e = this._elemIsActive(t)
              , i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            var e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id) && this._setAttributeIfNotExists(e, "aria-labelledby", "#" + t.id)
        }
        _toggleDropDown(t, i) {
            const s = this._getOuterElement(t);
            s.classList.contains("dropdown") && ((t = (t, e) => {
                t = u.findOne(t, s);
                t && t.classList.toggle(e, i)
            }
            )(".dropdown-toggle", N),
            t(".dropdown-menu", as),
            t(".dropdown-item", N),
            s.setAttribute("aria-expanded", i))
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(N)
        }
        _getInnerElement(t) {
            return t.matches(ls) ? t : u.findOne(ls, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = cs.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    f.on(document, "click.bs.tab", de, function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        a(this) || cs.getOrCreateInstance(this).show()
    }),
    f.on(window, "load.bs.tab", () => {
        for (const t of u.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            cs.getOrCreateInstance(t)
    }
    ),
    t(cs);
    const hs = "show"
      , ds = "showing"
      , us = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ps = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class ms extends e {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return ps
        }
        static get DefaultType() {
            return us
        }
        static get NAME() {
            return "toast"
        }
        show() {
            f.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            F(this._element),
            this._element.classList.add(hs, ds),
            this._queueCallback( () => {
                this._element.classList.remove(ds),
                f.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this.isShown() && !f.trigger(this._element, "hide.bs.toast").defaultPrevented && (this._element.classList.add(ds),
            this._queueCallback( () => {
                this._element.classList.add("hide"),
                this._element.classList.remove(ds, hs),
                f.trigger(this._element, "hidden.bs.toast")
            }
            , this._element, this._config.animation))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(hs),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(hs)
        }
        _maybeScheduleHide() {
            !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout( () => {
                this.hide()
            }
            , this._config.delay))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            e ? this._clearTimeout() : (t = t.relatedTarget,
            this._element === t || this._element.contains(t) || this._maybeScheduleHide())
        }
        _setListeners() {
            f.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)),
            f.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)),
            f.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)),
            f.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each(function() {
                var t = ms.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    return ut(ms),
    t(ms),
    {
        Alert: pt,
        Button: ft,
        Carousel: Lt,
        Collapse: Nt,
        Dropdown: E,
        Modal: Ti,
        Offcanvas: S,
        Popover: Gi,
        ScrollSpy: ns,
        Tab: cs,
        Toast: ms,
        Tooltip: Yi
    }
}),
function(l, i, s, a) {
    function c(t, e) {
        this.settings = null,
        this.options = l.extend({}, c.Defaults, e),
        this.$element = l(t),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        l.each(["onResize", "onThrottledResize"], l.proxy(function(t, e) {
            this._handlers[e] = l.proxy(this[e], this)
        }, this)),
        l.each(c.Plugins, l.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)),
        l.each(c.Workers, l.proxy(function(t, e) {
            this._pipe.push({
                filter: e.filter,
                run: l.proxy(e.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    c.Defaults = {
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
        responsiveBaseElement: i,
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
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    c.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    c.Type = {
        Event: "event",
        State: "state"
    },
    c.Plugins = {},
    c.Workers = [{
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
            var e = this.settings.margin || ""
              , i = !this.settings.autoWidth
              , s = this.settings.rtl
              , s = {
                width: "auto",
                "margin-left": s ? e : "",
                "margin-right": s ? "" : e
            };
            i || this.$stage.children().css(s),
            t.css = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e, i = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, s = this._items.length, n = !this.settings.autoWidth, o = [];
            for (t.items = {
                merge: !1,
                width: i
            }; s--; )
                e = this._mergers[s],
                e = this.settings.mergeFit && Math.min(e, this.settings.items) || e,
                t.items.merge = 1 < e || t.items.merge,
                o[s] = n ? i * e : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = []
              , e = this._items
              , i = this.settings
              , s = Math.max(2 * i.items, 4)
              , n = 2 * Math.ceil(e.length / 2)
              , o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0
              , r = ""
              , a = "";
            for (o /= 2; 0 < o; )
                t.push(this.normalize(t.length / 2, !0)),
                r += e[t[t.length - 1]][0].outerHTML,
                t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
                a = e[t[t.length - 1]][0].outerHTML + a,
                --o;
            this._clones = t,
            l(r).addClass("cloned").appendTo(this.$stage),
            l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t, e, i = this.settings.rtl ? 1 : -1, s = this._clones.length + this._items.length, n = -1, o = []; ++n < s; )
                t = o[n - 1] || 0,
                e = this._widths[this.relative(n)] + this.settings.margin,
                o.push(t + e * i);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding
              , e = this._coordinates
              , e = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length
              , i = !this.settings.autoWidth
              , s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--; )
                    t.css.width = this._widths[this.relative(e)],
                    s.eq(e).css(t.css);
            else
                i && (t.css.width = t.items.width,
                s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0,
            t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
            this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, e, i = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, n = this.coordinates(this.current()) + s, o = n + this.width() * i, r = [], a = 0, l = this._coordinates.length; a < l; a++)
                t = this._coordinates[a - 1] || 0,
                e = Math.abs(this._coordinates[a]) + s * i,
                (this.op(t, "<=", n) && this.op(t, ">", o) || this.op(e, "<", n) && this.op(e, ">", o)) && r.push(a);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + r.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    c.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = l("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(l("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    c.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        t.length ? (this._items = t.get().map(function(t) {
            return l(t)
        }),
        this._mergers = this._items.map(function() {
            return 1
        }),
        this.refresh()) : (this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass))
    }
    ,
    c.prototype.initialize = function() {
        var t, e;
        this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"),
        e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a,
        e = this.$element.children(e).width(),
        t.length) && e <= 0 && this.preloadAutoWidthImages(t),
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    c.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    c.prototype.setup = function() {
        var e = this.viewport()
          , t = this.options.responsive
          , i = -1
          , s = null;
        t ? (l.each(t, function(t) {
            t <= e && i < t && (i = Number(t))
        }),
        "function" == typeof (s = l.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()),
        delete s.responsive,
        s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : s = l.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }),
        this._breakpoint = i,
        this.settings = s,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    c.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    c.prototype.prepare = function(t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
        this.trigger("prepared", {
            content: e.data
        }),
        e.data
    }
    ,
    c.prototype.update = function() {
        for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
            return this[t]
        }, this._invalidated), s = {}; t < e; )
            (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s),
            t++;
        this._invalidated = {},
        this.is("valid") || this.enter("valid")
    }
    ,
    c.prototype.width = function(t) {
        switch (t = t || c.Width.Default) {
        case c.Width.Inner:
        case c.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    c.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    c.prototype.onThrottledResize = function() {
        i.clearTimeout(this.resizeTimer),
        this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    c.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))
    }
    ,
    c.prototype.registerEventHandlers = function() {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }
    ,
    c.prototype.onDragStart = function(t) {
        var e = null;
        3 !== t.which && (e = l.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(),
        {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }),
        this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = l(t.target),
        this._drag.stage.start = e,
        this._drag.stage.current = e,
        this._drag.pointer = this.pointer(t),
        l(s).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)),
        l(s).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            l(s).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)),
            Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    c.prototype.onDragMove = function(t) {
        var e = null
          , i = null
          , s = this.difference(this._drag.pointer, this.pointer(t))
          , n = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(),
        this.settings.loop ? (e = this.coordinates(this.minimum()),
        i = this.coordinates(this.maximum() + 1) - e,
        n.x = ((n.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        t = this.settings.pullDrag ? -1 * s.x / 5 : 0,
        n.x = Math.max(Math.min(n.x, e + t), i + t)),
        this._drag.stage.current = n,
        this.animate(n.x))
    }
    ,
    c.prototype.onDragEnd = function(t) {
        var t = this.difference(this._drag.pointer, this.pointer(t))
          , e = this._drag.stage.current
          , i = 0 < t.x ^ this.settings.rtl ? "left" : "right";
        l(s).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== t.x ? i : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = i,
        3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        }),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    c.prototype.closest = function(i, s) {
        var n = -1
          , o = this.width()
          , r = this.coordinates();
        return this.settings.freeDrag || l.each(r, l.proxy(function(t, e) {
            return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) && (n = "left" === s ? t + 1 : t),
            -1 === n
        }, this)),
        this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
        n
    }
    ,
    c.prototype.animate = function(t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(),
        e && (this.enter("animating"),
        this.trigger("translate")),
        l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : e ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }
    ,
    c.prototype.is = function(t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }
    ,
    c.prototype.current = function(t) {
        if (t !== a) {
            if (0 === this._items.length)
                return a;
            var e;
            t = this.normalize(t),
            this._current !== t && ((e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            })).data !== a && (t = this.normalize(e.data)),
            this._current = t,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            }))
        }
        return this._current
    }
    ,
    c.prototype.invalidate = function(t) {
        return "string" === l.type(t) && (this._invalidated[t] = !0,
        this.is("valid")) && this.leave("valid"),
        l.map(this._invalidated, function(t, e) {
            return e
        })
    }
    ,
    c.prototype.reset = function(t) {
        (t = this.normalize(t)) !== a && (this._speed = 0,
        this._current = t,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]))
    }
    ,
    c.prototype.normalize = function(t, e) {
        var i = this._items.length
          , e = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + e <= t) && (t = ((t - e / 2) % i + i) % i + e / 2),
        t
    }
    ,
    c.prototype.relative = function(t) {
        return t -= this._clones.length / 2,
        this.normalize(t, !0)
    }
    ,
    c.prototype.maximum = function(t) {
        var e, i, s, n = this.settings, o = this._coordinates.length;
        if (n.loop)
            o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(),
                s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s); )
                    ;
            o = e + 1
        } else
            o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2),
        Math.max(o, 0)
    }
    ,
    c.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }
    ,
    c.prototype.items = function(t) {
        return t === a ? this._items.slice() : (t = this.normalize(t, !0),
        this._items[t])
    }
    ,
    c.prototype.mergers = function(t) {
        return t === a ? this._mergers.slice() : (t = this.normalize(t, !0),
        this._mergers[t])
    }
    ,
    c.prototype.clones = function(i) {
        function s(t) {
            return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
        }
        var e = this._clones.length / 2
          , n = e + this._items.length;
        return i === a ? l.map(this._clones, function(t, e) {
            return s(e)
        }) : l.map(this._clones, function(t, e) {
            return t === i ? s(e) : null
        })
    }
    ,
    c.prototype.speed = function(t) {
        return t !== a && (this._speed = t),
        this._speed
    }
    ,
    c.prototype.coordinates = function(t) {
        var e, i = 1, s = t - 1;
        return t === a ? l.map(this._coordinates, l.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1,
        s = t + 1),
        e = this._coordinates[t],
        e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0,
        Math.ceil(e))
    }
    ,
    c.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }
    ,
    c.prototype.to = function(t, e) {
        var i = this.current()
          , s = t - this.relative(i)
          , n = (0 < s) - (s < 0)
          , o = this._items.length
          , r = this.minimum()
          , a = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * n * o),
        (n = (((t = i + s) - r) % o + o) % o + r) !== t && n - s <= a && 0 < n - s && this.reset(i = (t = n) - s)) : t = this.settings.rewind ? (t % (a += 1) + a) % a : Math.max(r, Math.min(a, t)),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.isVisible() && this.update()
    }
    ,
    c.prototype.next = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) + 1, t)
    }
    ,
    c.prototype.prev = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) - 1, t)
    }
    ,
    c.prototype.onTransitionEnd = function(t) {
        if (t !== a && (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    c.prototype.viewport = function() {
        var t;
        return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : s.documentElement && s.documentElement.clientWidth ? t = s.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        t
    }
    ,
    c.prototype.replace = function(t) {
        this.$stage.empty(),
        this._items = [],
        t = t && (t instanceof jQuery ? t : l(t)),
        (t = this.settings.nestedItemSelector ? t.find("." + this.settings.nestedItemSelector) : t).filter(function() {
            return 1 === this.nodeType
        }).each(l.proxy(function(t, e) {
            e = this.prepare(e),
            this.$stage.append(e),
            this._items.push(e),
            this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    c.prototype.add = function(t, e) {
        var i = this.relative(this._current);
        e = e === a ? this._items.length : this.normalize(e, !0),
        t = t instanceof jQuery ? t : l(t),
        this.trigger("add", {
            content: t,
            position: e
        }),
        t = this.prepare(t),
        0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t),
        0 !== this._items.length && this._items[e - 1].after(t),
        this._items.push(t),
        this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t),
        this._items.splice(e, 0, t),
        this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[i] && this.reset(this._items[i].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: t,
            position: e
        })
    }
    ,
    c.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: t
        }))
    }
    ,
    c.prototype.preloadAutoWidthImages = function(t) {
        t.each(l.proxy(function(t, e) {
            this.enter("pre-loading"),
            e = l(e),
            l(new Image).one("load", l.proxy(function(t) {
                e.attr("src", t.target.src),
                e.css("opacity", 1),
                this.leave("pre-loading"),
                this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }
    ,
    c.prototype.destroy = function() {
        for (var t in this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        l(s).off(".owl.core"),
        !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer),
        this.off(i, "resize", this._handlers.onThrottledResize)),
        this._plugins)
            this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    c.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
        case "<":
            return s ? i < t : t < i;
        case ">":
            return s ? t < i : i < t;
        case ">=":
            return s ? t <= i : i <= t;
        case "<=":
            return s ? i <= t : t <= i
        }
    }
    ,
    c.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }
    ,
    c.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }
    ,
    c.prototype.trigger = function(t, e, i, s, n) {
        var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , r = l.camelCase(l.grep(["on", t, i], function(t) {
            return t
        }).join("-").toLowerCase())
          , a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
            relatedTarget: this
        }, o, e));
        return this._supress[t] || (l.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(a)
        }),
        this.register({
            type: c.Type.Event,
            name: t
        }),
        this.$element.trigger(a),
        this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)),
        a
    }
    ,
    c.prototype.enter = function(t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
            this._states.current[e] === a && (this._states.current[e] = 0),
            this._states.current[e]++
        }, this))
    }
    ,
    c.prototype.leave = function(t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }
    ,
    c.prototype.register = function(i) {
        var e;
        i.type === c.Type.Event ? (l.event.special[i.name] || (l.event.special[i.name] = {}),
        l.event.special[i.name].owl || (e = l.event.special[i.name]._default,
        l.event.special[i.name]._default = function(t) {
            return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
        }
        ,
        l.event.special[i.name].owl = !0)) : i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags,
        this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
            return l.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }
    ,
    c.prototype.suppress = function(t) {
        l.each(t, l.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }
    ,
    c.prototype.release = function(t) {
        l.each(t, l.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }
    ,
    c.prototype.pointer = function(t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX,
        e.y = t.pageY) : (e.x = t.clientX,
        e.y = t.clientY),
        e
    }
    ,
    c.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }
    ,
    c.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }
    ,
    l.fn.owlCarousel = function(e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var t = l(this)
              , i = t.data("owl.carousel");
            i || (i = new c(this,"object" == typeof e && e),
            t.data("owl.carousel", i),
            l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                i.register({
                    type: c.Type.Event,
                    name: e
                }),
                i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]),
                    i[e].apply(this, [].slice.call(arguments, 1)),
                    this.release([e]))
                }, i))
            })),
            "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }
    ,
    l.fn.owlCarousel.Constructor = c
}(window.Zepto || window.jQuery, window, document),
function(e, i) {
    function s(t) {
        this._core = t,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": e.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = e.extend({}, s.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    }
    s.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    s.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    s.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible) && this._core.invalidate("width") && this._core.refresh()
    }
    ,
    s.prototype.destroy = function() {
        var t, e;
        for (t in i.clearInterval(this._interval),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(a, n) {
    function e(t) {
        this._core = t,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings
                      , i = e.center && Math.ceil(e.items / 2) || e.items
                      , s = e.center && -1 * i || 0
                      , n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s
                      , o = this._core.clones().length
                      , r = a.proxy(function(t, e) {
                        this.load(e)
                    }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager,
                    e.loop) && (n -= e.lazyLoadEager,
                    i++); s++ < i; )
                        this.load(o / 2 + this._core.relative(n)),
                        o && a.each(this._core.clones(this._core.relative(n)), r),
                        n++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    }
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(t) {
        var t = this._core.$stage.children().eq(t)
          , e = t && t.find(".owl-lazy");
        !e || -1 < a.inArray(t.get(0), this._loaded) || (e.each(a.proxy(function(t, e) {
            var i = a(e)
              , s = 1 < n.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset");
            this._core.trigger("load", {
                element: i,
                url: s
            }, "lazy"),
            i.is("img") ? i.one("load.owl.lazy", a.proxy(function() {
                i.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : i.is("source") ? i.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this)).attr("srcset", s) : ((e = new Image).onload = a.proxy(function() {
                i.css({
                    "background-image": 'url("' + s + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this),
            e.src = s)
        }, this)),
        this._loaded.push(t.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(n, i) {
    function s(t) {
        this._core = t,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = n.extend({}, s.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var e = this;
        n(i).on("load", function() {
            e._core.settings.autoHeight && e.update()
        }),
        n(i).resize(function() {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId),
            e._intervalId = setTimeout(function() {
                e.update()
            }, 250))
        })
    }
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    s.prototype.update = function() {
        var t = this._core._current
          , e = t + this._core.settings.items
          , i = this._core.settings.lazyLoad
          , t = this._core.$stage.children().toArray().slice(t, e)
          , s = []
          , e = 0;
        n.each(t, function(t, e) {
            s.push(n(e).height())
        }),
        (e = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (e = this._previousHeight),
        this._previousHeight = e,
        this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }
    ,
    s.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(h, e) {
    function i(t) {
        this._core = t,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": h.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": h.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": h.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": h.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": h.proxy(function(t) {
                var e;
                t.namespace && (e = h(t.content).find(".owl-video")).length && (e.css("display", "none"),
                this.fetch(e, h(t.content)))
            }, this)
        },
        this._core.options = h.extend({}, i.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", h.proxy(function(t) {
            this.play(t)
        }, this))
    }
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    i.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
          , s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
          , n = t.attr("data-width") || this._core.settings.videoWidth
          , o = t.attr("data-height") || this._core.settings.videoHeight
          , r = t.attr("href");
        if (!r)
            throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))
            i = "youtube";
        else if (-1 < s[3].indexOf("vimeo"))
            i = "vimeo";
        else {
            if (!(-1 < s[3].indexOf("vzaar")))
                throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6],
        this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        },
        e.attr("data-video", r),
        this.thumbnail(t, this._videos[r])
    }
    ,
    i.prototype.thumbnail = function(e, t) {
        function i(t) {
            s = c.lazyLoad ? h("<div/>", {
                class: "owl-video-tn " + l,
                srcType: t
            }) : h("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + t + ")"
            }),
            e.after(s),
            e.after('<div class="owl-video-play-icon"></div>')
        }
        var s, n, o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "", r = e.find("img"), a = "src", l = "", c = this._core.settings;
        if (e.wrap(h("<div/>", {
            class: "owl-video-wrapper",
            style: o
        })),
        this._core.settings.lazyLoad && (a = "data-src",
        l = "owl-lazy"),
        r.length)
            return i(r.attr(a)),
            r.remove(),
            !1;
        "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg",
        i(n)) : "vimeo" === t.type ? h.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t[0].thumbnail_large,
                i(n)
            }
        }) : "vzaar" === t.type && h.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t.framegrab_url,
                i(n)
            }
        })
    }
    ,
    i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    i.prototype.play = function(t) {
        var e, t = h(t.target).closest("." + this._core.settings.itemClass), i = this._videos[t.attr("data-video")], s = i.width || "100%", n = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        t = this._core.items(this._core.relative(t.index())),
        this._core.reset(t.index()),
        (e = h('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", n),
        e.attr("width", s),
        "youtube" === i.type ? e.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? e.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && e.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"),
        h(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")),
        this._playing = t.addClass("owl-video-playing"))
    }
    ,
    i.prototype.isInFullScreen = function() {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && h(t).parent().hasClass("owl-video-frame")
    }
    ,
    i.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    h.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, (window,
document)),
function(r) {
    function e(t) {
        this.core = t,
        this.core.options = r.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = void 0,
        this.next = void 0,
        this.handlers = {
            "change.owl.carousel": r.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(),
                this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": r.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    }
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        var t, e, i, s, n, o;
        1 === this.core.settings.items && r.support.animation && r.support.transition && (this.core.speed(0),
        e = r.proxy(this.clear, this),
        i = this.core.$stage.children().eq(this.previous),
        s = this.core.$stage.children().eq(this.next),
        n = this.core.settings.animateIn,
        o = this.core.settings.animateOut,
        this.core.current() !== this.previous) && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
        i.one(r.support.animation.end, e).css({
            left: t + "px"
        }).addClass("animated owl-animated-out").addClass(o)),
        n) && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n)
    }
    ,
    e.prototype.clear = function(t) {
        r(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    r.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, (window,
document)),
function(s, n, e) {
    function i(t) {
        this._core = t,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": s.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": s.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": s.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": s.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = s.extend({}, i.Defaults, this._core.options)
    }
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    i.prototype._next = function(t) {
        this._call = n.setTimeout(s.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
    }
    ,
    i.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    i.prototype.play = function(t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"),
        t = t || this._core.settings.autoplayTimeout,
        i = Math.min(this._time % (this._timeout || t), t),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : n.clearTimeout(this._call),
        this._time += this.read() % t - i,
        this._timeout = t,
        this._call = n.setTimeout(s.proxy(this._next, this, e), t - i)
    }
    ,
    i.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        n.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    i.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        n.clearTimeout(this._call))
    }
    ,
    i.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    s.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    function e(t) {
        this._core = t,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = n.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    }
    e.Defaults = {
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
    },
    e.prototype.initialize = function() {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? n(i.navContainer) : n("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = n("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function(t) {
            this.prev(i.navSpeed)
        }, this)),
        this._controls.$next = n("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function(t) {
            this.next(i.navSpeed)
        }, this)),
        i.dotsData || (this._templates = [n('<button role="button">').addClass(i.dotClass).append(n("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (i.dotsContainer ? n(i.dotsContainer) : n("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", n.proxy(function(t) {
            var e = (n(t.target).parent().is(this._controls.$absolute) ? n(t.target) : n(t.target).parent()).index();
            t.preventDefault(),
            this.to(e, i.dotsSpeed)
        }, this)),
        this._overrides)
            this._core[t] = n.proxy(this[t], this)
    }
    ,
    e.prototype.destroy = function() {
        var t, e, i, s, n = this._core.settings;
        for (t in this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
            "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides)
            this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    e.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2, s = i + this._core.items().length, n = this._core.maximum(!0), o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
        o.dots || "page" == o.slideBy)
            for (this._pages = [],
            t = i,
            e = 0; t < s; t++) {
                if (r <= e || 0 === e) {
                    if (this._pages.push({
                        start: Math.min(n, t - i),
                        end: t - i + r - 1
                    }),
                    Math.min(n, t - i) === n)
                        break;
                    e = 0,
                    0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }
    ,
    e.prototype.draw = function() {
        var t = this._core.settings
          , e = this._core.items().length <= t.items
          , i = this._core.relative(this._core.current())
          , s = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || e),
        t.nav && (this._controls.$previous.toggleClass("disabled", !s && i <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !s && i >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !t.dots || e),
        t.dots && (s = this._pages.length - this._controls.$absolute.children().length,
        t.dotsData && 0 != s ? this._controls.$absolute.html(this._templates.join("")) : 0 < s ? this._controls.$absolute.append(new Array(1 + s).join(this._templates[0])) : s < 0 && this._controls.$absolute.children().slice(s).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(t) {
        var e = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }
    ,
    e.prototype.current = function() {
        var i = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(t) {
        var e, i, s = this._core.settings;
        return "page" == s.slideBy ? (e = n.inArray(this.current(), this._pages),
        i = this._pages.length,
        t ? ++e : --e,
        e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()),
        i = this._core.items().length,
        t ? e += s.slideBy : e -= s.slideBy),
        e
    }
    ,
    e.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }
    ,
    e.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }
    ,
    e.prototype.to = function(t, e, i) {
        !i && this._pages.length ? (i = this._pages.length,
        n.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : n.proxy(this._overrides.to, this._core)(t, e)
    }
    ,
    n.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window,
document)),
function(s, n) {
    "use strict";
    function e(t) {
        this._core = t,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": s.proxy(function(t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": s.proxy(function(t) {
                var e;
                t.namespace && (e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content)
            }, this),
            "changed.owl.carousel": s.proxy(function(t) {
                var i;
                t.namespace && "position" === t.property.name && (i = this._core.items(this._core.relative(this._core.current())),
                t = s.map(this._hashes, function(t, e) {
                    return t === i ? e : null
                }).join()) && n.location.hash.slice(1) !== t && (n.location.hash = t)
            }, this)
        },
        this._core.options = s.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        s(n).on("hashchange.owl.navigation", s.proxy(function(t) {
            var e = n.location.hash.substring(1)
              , i = this._core.$stage.children()
              , i = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
        }, this))
    }
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var t, e;
        for (t in s(n).off("hashchange.owl.navigation"),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    s.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(n) {
    function e(t, i) {
        var s = !1
          , e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + r.join(e + " ") + e).split(" "), function(t, e) {
            if (void 0 !== o[e])
                return s = !i || e,
                !1
        }),
        s
    }
    function t(t) {
        return e(t, !0)
    }
    var o = n("<support>").get(0).style
      , r = "Webkit Moz O ms".split(" ")
      , i = {
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
    }
      , s = function() {
        return !!e("transform")
    }
      , a = function() {
        return !!e("perspective")
    }
      , l = function() {
        return !!e("animation")
    };
    !function() {
        return !!e("transition")
    }() || (n.support.transition = new String(t("transition")),
    n.support.transition.end = i.transition.end[n.support.transition]),
    l() && (n.support.animation = new String(t("animation")),
    n.support.animation.end = i.animation.end[n.support.animation]),
    s() && (n.support.transform = new String(t("transform")),
    n.support.transform3d = a())
}(window.Zepto || window.jQuery, (window,
document));

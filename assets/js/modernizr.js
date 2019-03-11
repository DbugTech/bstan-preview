/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-ambientlight-animation-apng-audio-audiopreload-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvasblending-capture-checked-classlist-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-directory-display_runin-displaytable-ellipsis-fileinput-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-generatedcontent-hairline-hovermq-hsla-htmlimports-ie8compat-imgcrossorigin-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-jpeg2000-jpegxr-lastchild-localizednumber-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-placeholder-pointermq-preserve3d-regions-requestautocomplete-rgba-sandbox-scrollsnappoints-seamless-shapes-siblinggeneral-sizes-srcdoc-subpixelfont-supports-svg-target-textalignlast-textshadow-userselect-video-videoautoplay-videocrossorigin-webintents-wrapflow-setclasses !*/
! function (A, e, t) {
    function i(e, t, i) {
        var n;
        if ("getComputedStyle" in A) {
            n = getComputedStyle.call(A, e, t);
            var a = A.console;
            if (null !== n) i && (n = n.getPropertyValue(i));
            else if (a) {
                var r = a.error ? "error" : "log";
                a[r].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else n = !t && e.currentStyle && e.currentStyle[i];
        return n
    }

    function n(A, e) {
        return typeof A === e
    }

    function a(A) {
        var e = g.className,
            t = Modernizr._config.classPrefix || "";
        if (E && (e = e.baseVal), Modernizr._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            e = e.replace(i, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (e += " " + t + A.join(" " + t), E ? g.className.baseVal = e : g.className = e)
    }

    function r() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : E ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function o(A, e) {
        return !!~("" + A).indexOf(e)
    }

    function w(A, e) {
        return A - 1 === e || A === e || A + 1 === e
    }

    function d() {
        var A = e.body;
        return A || (A = r(E ? "svg" : "body"), A.fake = !0), A
    }

    function s(A, e) {
        if ("object" == typeof A)
            for (var t in A) y(A, t) && s(t, A[t]);
        else {
            A = A.toLowerCase();
            var i = A.split("."),
                n = Modernizr[i[0]];
            if (2 == i.length && (n = n[i[1]]), "undefined" != typeof n) return Modernizr;
            e = "function" == typeof e ? e() : e, 1 == i.length ? Modernizr[i[0]] = e : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = e), a([(e && 0 != e ? "" : "no-") + i.join("-")]), Modernizr._trigger(A, e)
        }
        return Modernizr
    }

    function l(A, t, i, n) {
        var a, o, w, s, l = "modernizr",
            D = r("div"),
            P = d();
        if (parseInt(i, 10))
            for (; i--;) w = r("div"), w.id = n ? n[i] : l + (i + 1), D.appendChild(w);
        return a = r("style"), a.type = "text/css", a.id = "s" + l, (P.fake ? P : D).appendChild(a), P.appendChild(D), a.styleSheet ? a.styleSheet.cssText = A : a.appendChild(e.createTextNode(A)), D.id = l, P.fake && (P.style.background = "", P.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(P)), o = t(D, A), P.fake ? (P.parentNode.removeChild(P), g.style.overflow = s, g.offsetHeight) : D.parentNode.removeChild(D), !!o
    }
    var D = [],
        P = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (A, e) {
                var t = this;
                setTimeout(function () {
                    e(t[A])
                }, 0)
            },
            addTest: function (A, e, t) {
                D.push({
                    name: A,
                    fn: e,
                    options: t
                })
            },
            addAsyncTest: function (A) {
                D.push({
                    name: null,
                    fn: A
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = P, Modernizr = new Modernizr, Modernizr.addTest("ie8compat", !A.addEventListener && !!e.documentMode && 7 === e.documentMode), Modernizr.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var c = A.CSS;
    Modernizr.addTest("cssescape", c ? "function" == typeof c.escape : !1);
    var u = "CSS" in A && "supports" in A.CSS,
        B = "supportsCSS" in A;
    Modernizr.addTest("supports", u || B), Modernizr.addTest("target", function () {
        var e = A.document;
        if (!("querySelectorAll" in e)) return !1;
        try {
            return e.querySelectorAll(":target"), !0
        } catch (t) {
            return !1
        }
    });
    var g = e.documentElement;
    Modernizr.addTest("classlist", "classList" in g);
    var E = "svg" === g.nodeName.toLowerCase();
    Modernizr.addTest("audio", function () {
        var A = r("audio"),
            e = !1;
        try {
            e = !!A.canPlayType, e && (e = new Boolean(e), e.ogg = A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), e.opus = A.canPlayType('audio/ogg; codecs="opus"') || A.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), e.wav = A.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (A.canPlayType("audio/x-m4a;") || A.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {}
        return e
    }), Modernizr.addTest("video", function () {
        var A = r("video"),
            e = !1;
        try {
            e = !!A.canPlayType, e && (e = new Boolean(e), e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (t) {}
        return e
    }), Modernizr.addTest("webanimations", "animate" in r("div")), Modernizr.addTest("bgpositionshorthand", function () {
        var A = r("a"),
            e = A.style,
            t = "right 10px bottom 10px";
        return e.cssText = "background-position: " + t + ";", e.backgroundPosition === t
    }), Modernizr.addTest("multiplebgs", function () {
        var A = r("a").style;
        return A.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(A.background)
    }), Modernizr.addTest("csspointerevents", function () {
        var A = r("a").style;
        return A.cssText = "pointer-events:auto", "auto" === A.pointerEvents
    }), Modernizr.addTest("cssremunit", function () {
        var A = r("a").style;
        try {
            A.fontSize = "3rem"
        } catch (e) {}
        return /rem/.test(A.fontSize)
    }), Modernizr.addTest("rgba", function () {
        var A = r("a").style;
        return A.cssText = "background-color:rgba(150,255,150,.5)", ("" + A.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("preserve3d", function () {
        var e, t, i = A.CSS,
            n = !1;
        return i && i.supports && i.supports("(transform-style: preserve-3d)") ? !0 : (e = r("a"), t = r("a"), e.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);", t.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);", e.appendChild(t), g.appendChild(e), n = t.getBoundingClientRect(), g.removeChild(e), n = n.width && n.width < 4)
    }), Modernizr.addTest("capture", "capture" in r("input")), Modernizr.addTest("fileinput", function () {
        if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
        var A = r("input");
        return A.type = "file", !A.disabled
    }), Modernizr.addTest("formattribute", function () {
        var A, t = r("form"),
            i = r("input"),
            n = r("div"),
            a = "formtest" + (new Date).getTime(),
            o = !1;
        t.id = a;
        try {
            i.setAttribute("form", a)
        } catch (w) {
            e.createAttribute && (A = e.createAttribute("form"), A.nodeValue = a, i.setAttributeNode(A))
        }
        return n.appendChild(t), n.appendChild(i), g.appendChild(n), o = t.elements && 1 === t.elements.length && i.form == t, n.parentNode.removeChild(n), o
    }), Modernizr.addTest("placeholder", "placeholder" in r("input") && "placeholder" in r("textarea")), Modernizr.addTest("sandbox", "sandbox" in r("iframe")), Modernizr.addTest("seamless", "seamless" in r("iframe")), Modernizr.addTest("srcdoc", "srcdoc" in r("iframe")), Modernizr.addTest("imgcrossorigin", "crossOrigin" in r("img")), Modernizr.addTest("inputformaction", !!("formAction" in r("input")), {
        aliases: ["input-formaction"]
    }), Modernizr.addTest("inputformenctype", !!("formEnctype" in r("input")), {
        aliases: ["input-formenctype"]
    }), Modernizr.addTest("inputformmethod", !!("formMethod" in r("input"))), Modernizr.addTest("inputformtarget", !!("formtarget" in r("input")), {
        aliases: ["input-formtarget"]
    }), Modernizr.addTest("videocrossorigin", "crossOrigin" in r("video"));
    var p = function () {
        function A(A, e) {
            var n;
            return A ? (e && "string" != typeof e || (e = r(e || "div")), A = "on" + A, n = A in e, !n && i && (e.setAttribute || (e = r("div")), e.setAttribute(A, ""), n = "function" == typeof e[A], e[A] !== t && (e[A] = t), e.removeAttribute(A)), n) : !1
        }
        var i = !("onblur" in e.documentElement);
        return A
    }();
    P.hasEvent = p, Modernizr.addTest("ambientlight", p("devicelight", A));
    var Q = r("input"),
        v = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        f = {};
    Modernizr.input = function (e) {
        for (var t = 0, i = e.length; i > t; t++) f[e[t]] = !!(e[t] in Q);
        return f.list && (f.list = !(!r("datalist") || !A.HTMLDataListElement)), f
    }(v);
    var m = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        h = {};
    Modernizr.inputtypes = function (A) {
        for (var i, n, a, r = A.length, o = "1)", w = 0; r > w; w++) Q.setAttribute("type", i = A[w]), a = "text" !== Q.type && "style" in Q, a && (Q.value = o, Q.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && Q.style.WebkitAppearance !== t ? (g.appendChild(Q), n = e.defaultView, a = n.getComputedStyle && "textfield" !== n.getComputedStyle(Q, null).WebkitAppearance && 0 !== Q.offsetHeight, g.removeChild(Q)) : /^(search|tel)$/.test(i) || (a = /^(url|email)$/.test(i) ? Q.checkValidity && Q.checkValidity() === !1 : Q.value != o)), h[A[w]] = !!a;
        return h
    }(m), Modernizr.addTest("canvas", function () {
        var A = r("canvas");
        return !(!A.getContext || !A.getContext("2d"))
    }), Modernizr.addTest("canvasblending", function () {
        if (Modernizr.canvas === !1) return !1;
        var A = r("canvas").getContext("2d");
        try {
            A.globalCompositeOperation = "screen"
        } catch (e) {}
        return "screen" === A.globalCompositeOperation
    });
    var C = P._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    P._prefixes = C, Modernizr.addTest("csscalc", function () {
        var A = "width:",
            e = "calc(10px);",
            t = r("a");
        return t.style.cssText = A + C.join(e + A), !!t.style.length
    }), Modernizr.addTest("cubicbezierrange", function () {
        var A = r("a");
        return A.style.cssText = C.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "), !!A.style.length
    }), Modernizr.addTest("cssgradients", function () {
        for (var A, e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "", n = 0, a = C.length - 1; a > n; n++) A = 0 === n ? "to " : "", i += e + C[n] + "linear-gradient(" + A + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (i += e + "-webkit-" + t);
        var o = r("a"),
            w = o.style;
        return w.cssText = i, ("" + w.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("opacity", function () {
        var A = r("a").style;
        return A.cssText = C.join("opacity:.55;"), /^0.55$/.test(A.opacity)
    }), Modernizr.addTest("csspositionsticky", function () {
        var A = "position:",
            e = "sticky",
            t = r("a"),
            i = t.style;
        return i.cssText = A + C.join(e + ";" + A).slice(0, -A.length), -1 !== i.position.indexOf(e)
    });
    var I = {
        elem: r("modernizr")
    };
    Modernizr._q.push(function () {
        delete I.elem
    }), Modernizr.addTest("csschunit", function () {
        var A, e = I.elem.style;
        try {
            e.fontSize = "3ch", A = -1 !== e.fontSize.indexOf("ch")
        } catch (t) {
            A = !1
        }
        return A
    }), Modernizr.addTest("cssexunit", function () {
        var A, e = I.elem.style;
        try {
            e.fontSize = "3ex", A = -1 !== e.fontSize.indexOf("ex")
        } catch (t) {
            A = !1
        }
        return A
    }), Modernizr.addTest("hsla", function () {
        var A = r("a").style;
        return A.cssText = "background-color:hsla(120,40%,100%,.5)", o(A.backgroundColor, "rgba") || o(A.backgroundColor, "hsla")
    });
    var y;
    ! function () {
        var A = {}.hasOwnProperty;
        y = n(A, "undefined") || n(A.call, "undefined") ? function (A, e) {
            return e in A && n(A.constructor.prototype[e], "undefined")
        } : function (e, t) {
            return A.call(e, t)
        }
    }(), P._l = {}, P.on = function (A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () {
            Modernizr._trigger(A, Modernizr[A])
        }, 0)
    }, P._trigger = function (A, e) {
        if (this._l[A]) {
            var t = this._l[A];
            setTimeout(function () {
                var A, i;
                for (A = 0; A < t.length; A++)(i = t[A])(e)
            }, 0), delete this._l[A]
        }
    }, Modernizr._q.push(function () {
        P.addTest = s
    }), s("htmlimports", "import" in r("link")), Modernizr.addAsyncTest(function () {
        function A(i) {
            clearTimeout(e);
            var a = i !== t && "loadeddata" === i.type ? !0 : !1;
            n.removeEventListener("loadeddata", A, !1), s("audiopreload", a), n.parentNode.removeChild(n)
        }
        var e, i = 300,
            n = r("audio"),
            a = n.style;
        if (!(Modernizr.audio && "preload" in n)) return void s("audiopreload", !1);
        a.position = "absolute", a.height = 0, a.width = 0;
        try {
            if (Modernizr.audio.mp3) n.src = "data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";
            else if (Modernizr.audio.m4a) n.src = "data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";
            else if (Modernizr.audio.ogg) n.src = "data:audio/ogg;base64,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lFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";
            else {
                if (!Modernizr.audio.wav) return void s("audiopreload", !1);
                n.src = "data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"
            }
        } catch (o) {
            return void s("audiopreload", !1)
        }
        n.setAttribute("preload", "auto"), n.style.cssText = "display:none", g.appendChild(n), setTimeout(function () {
            n.addEventListener("loadeddata", A, !1), e = setTimeout(A, i)
        }, 0)
    }), Modernizr.addAsyncTest(function () {
        if (!Modernizr.canvas) return !1;
        var A = new Image,
            e = r("canvas"),
            t = e.getContext("2d");
        A.onload = function () {
            s("apng", function () {
                return "undefined" == typeof e.getContext ? !1 : (t.drawImage(A, 0, 0), 0 === t.getImageData(0, 0, 1, 1).data[3])
            })
        }, A.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="
    }), Modernizr.addAsyncTest(function () {
        var A = new Image;
        A.onload = A.onerror = function () {
            s("jpeg2000", 1 == A.width)
        }, A.src = "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="
    }), Modernizr.addAsyncTest(function () {
        var A = new Image;
        A.onload = A.onerror = function () {
            s("jpegxr", 1 == A.width, {
                aliases: ["jpeg-xr"]
            })
        }, A.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    }), Modernizr.addAsyncTest(function () {
        var A, e, t, i = r("img"),
            n = "sizes" in i;
        !n && "srcset" in i ? (e = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", A = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", t = function () {
            s("sizes", 2 == i.width)
        }, i.onload = t, i.onerror = t, i.setAttribute("sizes", "9px"), i.srcset = A + " 1w," + e + " 8w", i.src = A) : s("sizes", n)
    }), Modernizr.addAsyncTest(function () {
        function A(r) {
            n++, clearTimeout(e);
            var o = r && "playing" === r.type || 0 !== a.currentTime;
            return !o && i > n ? void(e = setTimeout(A, t)) : (a.removeEventListener("playing", A, !1), s("videoautoplay", o), void(a.parentNode && a.parentNode.removeChild(a)))
        }
        var e, t = 200,
            i = 5,
            n = 0,
            a = r("video"),
            o = a.style;
        if (!(Modernizr.video && "autoplay" in a)) return void s("videoautoplay", !1);
        o.position = "absolute", o.height = 0, o.width = 0;
        try {
            if (Modernizr.video.ogg) a.src = "data:video/ogg;base64,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";
            else {
                if (!Modernizr.video.h264) return void s("videoautoplay", !1);
                a.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
            }
        } catch (w) {
            return void s("videoautoplay", !1)
        }
        a.setAttribute("autoplay", ""), a.style.cssText = "display:none", g.appendChild(a), setTimeout(function () {
            a.addEventListener("playing", A, !1), e = setTimeout(A, t)
        }, 0)
    });
    var V = P.testStyles = l;
    Modernizr.addTest("checked", function () {
        return V("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function (A) {
            var e = r("input");
            return e.setAttribute("type", "checkbox"), e.setAttribute("checked", "checked"), A.appendChild(e), 20 === e.offsetLeft
        })
    }), V("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function (A) {
        var e, t = A.childNodes;
        e = t[0].offsetLeft < t[1].offsetLeft, Modernizr.addTest("displaytable", e, {
            aliases: ["display-table"]
        })
    }, 2);
    var R = function () {
        var A = navigator.userAgent,
            e = A.match(/w(eb)?osbrowser/gi),
            t = A.match(/windows phone/gi) && A.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
        return e || t
    }();
    R ? Modernizr.addTest("fontface", !1) : V('@font-face {font-family:"font";src:url("https://")}', function (A, t) {
        var i = e.getElementById("smodernizr"),
            n = i.sheet || i.styleSheet,
            a = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "",
            r = /src/i.test(a) && 0 === a.indexOf(t.split(" ")[0]);
        Modernizr.addTest("fontface", r)
    }), V('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (A) {
        Modernizr.addTest("generatedcontent", A.offsetHeight >= 6)
    }), Modernizr.addTest("hairline", function () {
        return V("#modernizr {border:.5px solid transparent}", function (A) {
            return 1 === A.offsetHeight
        })
    }), Modernizr.addTest("cssinvalid", function () {
        return V("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function (A) {
            var e = r("input");
            return e.required = !0, A.appendChild(e), e.clientWidth > 10
        })
    }), V("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function (A) {
        Modernizr.addTest("lastchild", A.lastChild.offsetWidth > A.firstChild.offsetWidth)
    }, 2), V("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function (A) {
        for (var e = A.getElementsByTagName("div"), t = !0, i = 0; 5 > i; i++) t = t && e[i].offsetWidth === i % 2 + 1;
        Modernizr.addTest("nthchild", t)
    }, 5), V("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + C.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:10px}", function (A) {
        Modernizr.addTest("cssscrollbar", "scrollWidth" in A && 30 == A.scrollWidth)
    }), Modernizr.addTest("siblinggeneral", function () {
        return V("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}", function (A) {
            return 200 == A.lastChild.offsetWidth
        }, 2)
    }), V("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function (e) {
        var t = e.firstChild;
        t.innerHTML = "This is a text written in Arial", Modernizr.addTest("subpixelfont", A.getComputedStyle ? "44px" !== A.getComputedStyle(t, null).getPropertyValue("width") : !1)
    }, 1, ["subpixel"]), Modernizr.addTest("cssvalid", function () {
        return V("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function (A) {
            var e = r("input");
            return A.appendChild(e), e.clientWidth > 10
        })
    }), V("#modernizr { height: 50vh; }", function (e) {
        var t = parseInt(A.innerHeight / 2, 10),
            n = parseInt(i(e, null, "height"), 10);
        Modernizr.addTest("cssvhunit", n == t)
    }), V("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function (A) {
        var e = A.childNodes[2],
            t = A.childNodes[1],
            n = A.childNodes[0],
            a = parseInt((t.offsetWidth - t.clientWidth) / 2, 10),
            r = n.clientWidth / 100,
            o = n.clientHeight / 100,
            d = parseInt(50 * Math.max(r, o), 10),
            s = parseInt(i(e, null, "width"), 10);
        Modernizr.addTest("cssvmaxunit", w(d, s) || w(d, s - a))
    }, 3), V("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function (A) {
        var e = A.childNodes[2],
            t = A.childNodes[1],
            n = A.childNodes[0],
            a = parseInt((t.offsetWidth - t.clientWidth) / 2, 10),
            r = n.clientWidth / 100,
            o = n.clientHeight / 100,
            d = parseInt(50 * Math.min(r, o), 10),
            s = parseInt(i(e, null, "width"), 10);
        Modernizr.addTest("cssvminunit", w(d, s) || w(d, s - a))
    }, 3), V("#modernizr { width: 50vw; }", function (e) {
        var t = parseInt(A.innerWidth / 2, 10),
            n = parseInt(i(e, null, "width"), 10);
        Modernizr.addTest("cssvwunit", n == t)
    }), Modernizr.addTest("formvalidation", function () {
        var e = r("form");
        if (!("checkValidity" in e && "addEventListener" in e)) return !1;
        if ("reportValidity" in e) return !0;
        var t, i = !1;
        return Modernizr.formvalidationapi = !0, e.addEventListener("submit", function (e) {
            (!A.opera || A.operamini) && e.preventDefault(), e.stopPropagation()
        }, !1), e.innerHTML = '<input name="modTest" required="required" /><button></button>', V("#modernizr form{position:absolute;top:-99999em}", function (A) {
            A.appendChild(e), t = e.getElementsByTagName("input")[0], t.addEventListener("invalid", function (A) {
                i = !0, A.preventDefault(), A.stopPropagation()
            }, !1), Modernizr.formvalidationmessage = !!t.validationMessage, e.getElementsByTagName("button")[0].click()
        }), i
    }), Modernizr.addTest("localizednumber", function () {
        if (!Modernizr.inputtypes.number) return !1;
        if (!Modernizr.formvalidation) return !1;
        var A, t = r("div"),
            i = d(),
            n = function () {
                return g.insertBefore(i, g.firstElementChild || g.firstChild)
            }();
        t.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
        var a = t.childNodes[0];
        n.appendChild(t), a.focus();
        try {
            e.execCommand("SelectAll", !1), e.execCommand("InsertText", !1, "1,1")
        } catch (o) {}
        return A = "number" === a.type && 1.1 === a.valueAsNumber && a.checkValidity(), n.removeChild(t), i.fake && n.parentNode.removeChild(n), A
    });
    var M = function () {
        var e = A.matchMedia || A.msMatchMedia;
        return e ? function (A) {
            var t = e(A);
            return t && t.matches || !1
        } : function (e) {
            var t = !1;
            return l("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
                t = "absolute" == (A.getComputedStyle ? A.getComputedStyle(e, null) : e.currentStyle).position
            }), t
        }
    }();
    P.mq = M, Modernizr.addTest("mediaqueries", M("only all")), Modernizr.addTest("hovermq", M("(hover)")), Modernizr.addTest("pointermq", M("(pointer:coarse),(pointer:fine),(pointer:none)"));
    var b = "Moz O ms Webkit",
        T = P._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    P._domPrefixes = T, Modernizr.addTest("fileinputdirectory", function () {
        var A = r("input"),
            e = "directory";
        if (A.type = "file", e in A) return !0;
        for (var t = 0, i = T.length; i > t; t++)
            if (T[t] + e in A) return !0;
        return !1
    });
    var U = P._config.usePrefixes ? b.split(" ") : [];
    P._cssomPrefixes = U;
    var Z = function (e) {
        var i, n = C.length,
            a = A.CSSRule;
        if ("undefined" == typeof a) return t;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), i = e.replace(/-/g, "_").toUpperCase() + "_RULE", i in a) return "@" + e;
        for (var r = 0; n > r; r++) {
            var o = C[r],
                w = o.toUpperCase() + "_" + i;
            if (w in a) return "@-" + o.toLowerCase() + "-" + e
        }
        return !1
    };
    P.atRule = Z;
    var S = {
        style: I.elem.style
    };
    Modernizr._q.unshift(function () {
        delete S.style
    })
}(window, document);
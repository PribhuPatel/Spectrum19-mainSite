function GalleryList() {
    function e() {
        if (Model.resizeManager.addEventListener(ResizeManager.RESIZE, I), window.addEventListener("keyup", C), window.addEventListener("wheel", k), Model.peekManager.addEventListener(PeekManager.PEEK, T), Model.peekManager.addEventListener(PeekManager.UNPEEK, _), A.addEventListener("mousedown", p), R.addEventListener("click", E), Q.addEventListener("click", b), Modernizr.touch) {
       
            var e = {
                dragstart: v,
                drag: L,
                dragend: M
            };
            new SimpleDragger(X, e)
        }
    }

    function t() {
        P = document.createElement("div"), P.classList.add(Z + "__mask"), X.appendChild(P), _centeringContainer = document.createElement("div"), _centeringContainer.classList.add(Z + "__centering-container"), P.appendChild(_centeringContainer), TweenLite.set(P, {
            x: 0,
            z: 1
        })
    }

    function n() {
        H = document.createElement("div"), H.classList.add(Z + "__album-container"), _centeringContainer.appendChild(H), TweenLite.set(H, {
            z: 1
        })
    }

    function a() {
        _homeAlbum = new AlbumSlideshow, _homeAlbum.classList.add(Z + "__home-album"), H.appendChild(_homeAlbum)
    }

    function i() {
        A = document.createElement("div"), A.classList.add(Z + "__progress-track"), P.appendChild(A), z = document.createElement("div"), z.classList.add(Z + "__progress-bar"), A.appendChild(z), S = document.createElement("div"), S.classList.add(Z + "__progress-hit-area"), A.appendChild(S), TweenLite.set(A, {
            y: -50,
            z: 1
        })
    }

    function o() {
        R = document.createElement("button"), R.classList.add(Z + "__arrow-button"), R.classList.add(Z + "__arrow-button--left"), P.appendChild(R), Q = document.createElement("button"), Q.classList.add(Z + "__arrow-button"), Q.classList.add(Z + "__arrow-button--right"), P.appendChild(Q);
        var e = document.createElement("div");
        e.classList.add(Z + "__arrow-button-hit-area"), R.appendChild(e);
        var t = document.createElement("div");
        t.classList.add(Z + "__arrow-button-hit-area"), Q.appendChild(t), TweenLite.set([R, Q], {
            y: 100
        })
    }

    function r() {
        W = document.createElement("div"), W.classList.add(Z + "__label"), W.innerHTML = K[10 - Number(Model.urlManager.path)], X.appendChild(W), TweenLite.set(W, {
            z: 1
        })
    }

    function s() {
        N = new GalleryFooter, N.classList.add(Z + "__footer"), H.appendChild(N)
    }

    function l(e) {
        var t = Math.abs(e) / V;
        1 === t ? Q.classList.add("inactive") : Q.classList.remove("inactive"), 0 === t ? R.classList.add("inactive") : R.classList.remove("inactive")
    }

    function d(e) {
        if (0 === e) return 0;
        var t = Math.abs(e) || Math.abs(H._gsTransform.x),
            n = Math.floor(.15 * window.innerWidth);
        return Math.round(t / (Model.albumWidth + n))
    }

    function c() {
        u(), D = new AlbumStrip(Number(Model.urlManager.path)), D.clickCallback = y, H.appendChild(D)
    }

    function u() {
        D && (D.kill(), D.parentNode.removeChild(D), D = null)
    }

    function m(e) {
        return e || (e = 0), e > 0 && (e = 0), e < -V && (e = -V), e
    }

    function h() {
        var e = D ? D.calculateContainerWidth() : 0;
        N.style.left = e + "px", e += window.innerWidth;
        var t = Math.floor(.5 * (window.innerWidth - Model.albumWidth));
        V = e - window.innerWidth + t, _homeAlbum.style.width = Model.albumWidth + "px", _homeAlbum.style.height = Model.albumWidth + "px", H.style.width = e + "px", H.style.height = Model.albumWidth + "px";
        var n = Math.floor(.5 * (window.innerHeight - 80 - 175 - Model.albumWidth));
        H.style.top = 80 + Math.max(0, n) + "px", W.style.width = "auto", W.style.marginLeft = 0, W.style.left = .5 * (window.innerWidth - W.clientWidth) + "px", W.style.top = .47 * (window.innerHeight - W.clientHeight) + "px";
        var a = window.innerWidth - 140 - 87,
            i = a;
        window.innerWidth > 1100 && (i *= .8), A.style.width = i + "px", A.style.left = 140 + Math.floor(.5 * (a - i)) + "px", A.style.marginLeft = 0, TweenLite.set([R, Q], {
            top: window.innerHeight
        })
    }

    function f(e) {
        console.log("lazy load up to", e), D.lazyloadUpdate(e)
    }

    function p(e) {
        window.addEventListener("mouseup", g), window.addEventListener("mousemove", w), w(e, Quart.easeInOut)
    }

    function w(e, t) {
        var n = e.target.classList.contains("gallery-list__progress-hit-area"),
            a = n ? e.offsetX : null;
        if (null !== a) {
            var i = Math.floor(.5 * z.clientWidth),
                o = (a - i) / (A.clientWidth - z.clientWidth);
            o = Math.max(o, 0), o = Math.min(o, 1);
            var r = o * -V;
            r = m(r);
            var s = d(r);
            Y = -D.getAlbumLeftPosition(s), Y = m(Y), l(Y), TweenLite.to(H, 1, {
                x: Y,
                ease: t || Quart.easeOut,
                onUpdate: O
            })
        }
    }

    function g(e) {
        window.removeEventListener("mouseup", g), window.removeEventListener("mousemove", w)
    }

    function v(e) {
        j = d(), B = H._gsTransform.x
    }

    function L(e) {
        Y = B + e.deltaX, Y = m(Y), l(Y), TweenLite.to(H, .2, {
            x: Y,
            ease: Power2.easeOut,
            onUpdate: O
        })
    }

    function M(e) {
        console.log("e.velocityX", e.velocityX);
        var t = Power2.easeOut;
        Math.abs(e.velocityX) < .1 ? (t = Power2.easeInOut, e.deltaX < 0 ? j += 1 : e.deltaX > 0 && (j -= 1)) : e.velocityX < 0 ? j += 1 : e.velocityX > 0 && (j -= 1), Y = -D.getAlbumLeftPosition(j), Y = m(Y), l(Y), TweenLite.to(H, .5, {
            x: Y,
            ease: t,
            onUpdate: O
        }), j = null, B = null
    }

    function y(e, t) {
        var n = t;
        Y = -D.getAlbumLeftPosition(n), Y = m(Y), l(Y);
        var a = $ ? Power2.easeOut : Power2.easeInOut;
        $ = !0, TweenLite.to(H, .8, {
            x: Y,
            ease: a,
            onUpdate: O,
            onComplete: function() {
                $ = !1
            }
        })
    }

    function E(e) {
        var t = d();
        Y = -D.getAlbumLeftPosition(t - 1), Y = m(Y), l(Y);
        var n = $ ? Power2.easeOut : Power2.easeInOut;
        $ = !0, TweenLite.to(H, .8, {
            x: Y,
            ease: n,
            onUpdate: O,
            onComplete: function() {
                $ = !1
            }
        })
    }

    function b(e) {
        var t = (_centeringContainer._gsTransform.x, d());
        console.log("i", t), Y = -D.getAlbumLeftPosition(t + 1), Y = m(Y), l(Y);
        var n = $ ? Power2.easeOut : Power2.easeInOut;
        $ = !0, TweenLite.to(H, .8, {
            x: Y,
            ease: n,
            onUpdate: O,
            onComplete: function() {
                $ = !1
            }
        })
    }

    function T(e) {
        console.log(e);
        TweenLite.set(W, {
            opacity: q
        });
        var t = 0 === P._gsTransform.x;
        F && (clearTimeout(F), F = null), F = setTimeout(function() {
            console.log(e.num);
            _homeAlbum.changeImage(e.num, t)
        }, 300)
    }

    function _(e) {}

    function C(e) {
        if (G) {
            if (Model.artistManager.state === ArtistManager.OPEN) return;
            if (Model.menuManager.state === MenuManager.OPEN) return;
            if (27 === e.keyCode) Model.urlManager.updateURL("index");
            else if (39 === e.keyCode || 40 === e.keyCode) {
                var t = (_centeringContainer._gsTransform.x, d());
                Y = -D.getAlbumLeftPosition(t + 1), Y = m(Y), l(Y);
                var n = ee ? Power2.easeOut : Power2.easeInOut;
                ee = !0, TweenLite.to(H, .6, {
                    x: Y,
                    ease: n,
                    onUpdate: O,
                    onComplete: function() {
                        ee = !1
                    }
                })
            } else if (37 === e.keyCode || 38 === e.keyCode) {
                var t = (_centeringContainer._gsTransform.x, d());
                Y = -D.getAlbumLeftPosition(t - 1), Y = m(Y), l(Y);
                var n = ee ? Power2.easeOut : Power2.easeInOut;
                ee = !0, TweenLite.to(H, .6, {
                    x: Y,
                    ease: n,
                    onUpdate: O,
                    onComplete: function() {
                        ee = !1
                    }
                })
            }
        }
    }

    function k(e) {
        if (e.preventDefault(), Model.artistManager.state !== ArtistManager.OPEN && Model.menuManager.state !== MenuManager.OPEN && (U && (clearTimeout(U), U = null), G)) {
            var t = -e.deltaX,
                n = e.deltaY,
                a = Math.abs(t) > Math.abs(n) ? t : n;
            if (console.log("e.deltaMode", e.deltaMode), 1 === e.deltaMode) {
                a *= 40
            }
            a > 0 ? (Y -= Math.abs(a), Y = m(Y), l(Y), TweenLite.killTweensOf(H), TweenLite.to(H, .4, {
                x: Y,
                ease: Quart.easeOut,
                onUpdate: O
            })) : (Y += Math.abs(a), Y = m(Y), l(Y), TweenLite.killTweensOf(H), TweenLite.to(H, .4, {
                x: Y,
                ease: Quart.easeOut,
                onUpdate: O
            })), U = setTimeout(x, 2e3)
        }
    }

    function x() {
        console.log("!!! snapping scroll !!!");
        var e = d();
        Y = -D.getAlbumLeftPosition(e), Y = m(Y);
        var t = Y;
        TweenLite.to(H, 2, {
            x: t,
            ease: Quart.easeInOut,
            onUpdate: function() {
                Y = H._gsTransform.x, l(Y), O()
            }
        })
    }

    function O() {
        var e = Math.abs(H._gsTransform.x) / V;
        TweenLite.set(z, {
            x: (A.clientWidth - z.clientWidth) * e
        }), e > 0 && te < .25 ? (te = .25, f(te)) : e > .25 && te < .5 ? (te = .5, f(te)) : e > .5 && te < .75 ? (te = .75, f(te)) : e > .75 && te < 1 && (te = 1, f(te))
    }

    function I(e) {
        if (h(), G) {
            O(), TweenLite.set(X, {
                x: 0
            }), TweenLite.set(P, {
                x: 0
            }), TweenLite.set(_centeringContainer, {
                x: Math.floor(.5 * (window.innerWidth - Model.albumWidth))
            });
            var t = d();
            Y = -D.getAlbumLeftPosition(t), Y = m(Y), TweenLite.set(H, {
                x: Y
            })
        } else {
            TweenLite.set(X, {
                x: window.innerWidth
            });
            var n = window.innerWidth / window.innerHeight;
            ne = 0, ne = n < 1 ? 0 : n >= 1 && n < 1.2 ? Math.floor(.5 * -Model.albumWidth) : n < 1.6 ? Math.floor(.75 * -Model.albumWidth) : Math.floor(.88 * -Model.albumWidth), TweenLite.set(P, {
                x: ne
            }), TweenLite.set(W, {
                x: window.innerWidth + .5 * W.clientWidth
            }), TweenLite.set(_centeringContainer, {
                x: 0
            })
        }
    }
    var A, S, P, H, W, z, N, R, Q, U, D, j, B, F, X = document.createElement("div"),
        Z = "gallery-list",
        q = .25,
        G = !1,
        K = ["Aakar", "AutoTricksTricks", "Cologination", "ECell", "Electret", "Electro", "Food", "Mathelete", "MechTroy", "Technosis"],
        J = ["#FFC94C", "#FEC056", "#FCB85F", "#FAAF66", "#F9A66C", "#F89E70", "#F79574", "#F58D78", "#F4847B", "#F37B7E"],
        Y = 0,
        V = 0,
        $ = !1,
        ee = !1,
        te = 0,
        ne = 0;
    return X.animateIn = function() {
            G = !0, te = 0, Y = 0;
            var e = 10 - searchJson(Model.urlManager.path);
            _homeAlbum.hideLabel(), 0 === ne && _homeAlbum.changeImage(e, !0), W.innerHTML = K[e], W.style["-moz-text-stroke-color"] = J[e], W.style["-webkit-text-stroke-color"] = J[e], TweenLite.set(W, {
                opacity: q
            }), TweenLite.set(z, {
                x: 0
            }), c(), D.animateIn(_homeAlbum, {
                speed: 1.6,
                delay: 0
            }), h(), TweenLite.to(_centeringContainer, 1.3, {
                x: Math.floor(.5 * (window.innerWidth - Model.albumWidth)),
                ease: Quart.easeInOut
            }), TweenLite.to([X, H, W, P], 1.3, {
                x: 0,
                ease: Quart.easeInOut
            }), TweenLite.to(A, 2, {
                delay: .35,
                y: 0,
                ease: Quart.easeInOut
            }), TweenLite.set([R, Q], {
                y: 100
            }), TweenLite.to(Q, 2, {
                delay: .55,
                y: 0,
                ease: Quart.easeInOut
            }), Q.classList.remove("inactive"), R.classList.add("inactive"), TweenLite.to(R, 2, {
                delay: .65,
                y: 0,
                ease: Quart.easeInOut
            })
        }, X.animateInHomeIntro = function() {
            te = 0, G = !1, Y = 0, TweenLite.set(P, {
                x: 0
            }), TweenLite.to(P, 1.3, {
                delay: .3,
                x: ne,
                ease: Quart.easeInOut
            }), _homeAlbum.changeImage('it'), setTimeout(_homeAlbum.showLabel, 1300)
        }, X.animateInIntro = function() {
            te = 0, G = !0, Y = 0, _homeAlbum.hideLabel(), c(), D.animateIn(_homeAlbum, {
                speed: 2,
                delay: .2
            }), h(), TweenLite.set(P, {
                x: 10
            }), TweenLite.to(P, 1.3, {
                x: Math.floor(.75 * -Model.albumWidth),
                ease: Quart.easeInOut
            });
            var e = 10 - searchJson(Model.urlManager.path);
            W.innerHTML = K[e], W.style["-moz-text-stroke-color"] = J[e], W.style["-webkit-text-stroke-color"] = J[e], TweenLite.set(W, {
                opacity: q,
                x: window.innerWidth
            }), TweenLite.to(W, 3, {
                x: 0,
                ease: Quart.easeInOut
            }), TweenLite.to(_centeringContainer, 1.3, {
                delay: .3,
                x: Math.floor(.5 * (window.innerWidth - Model.albumWidth)),
                ease: Quart.easeInOut
            }), TweenLite.to([X, H, P], 1.3, {
                delay: .3,
                x: 0,
                ease: Quart.easeInOut
            }), TweenLite.to(A, 2, {
                delay: 1.3,
                y: 0,
                ease: Quart.easeInOut
            }), TweenLite.to(Q, 2, {
                delay: 1.5,
                y: 0,
                ease: Quart.easeInOut
            }), R.classList.add("inactive"), TweenLite.to(R, 2, {
                delay: 1.6,
                y: 0,
                ease: Quart.easeInOut
            })
        }, X.animateOut = function() {
            console.log(D);
            G = !1, U && (clearTimeout(U), U = null), TweenLite.to(W, .9, {
                x: window.innerWidth,
                ease: Quart.easeInOut
            }), TweenLite.to(A, .3, {
                y: -50,
                ease: Quart.easeIn
            }), TweenLite.to([R, Q], .3, {
                y: 100,
                ease: Quart.easeIn
            }),
            D.animateOut(H._gsTransform.x), TweenLite.to(X, 1.3, {
                delay: .1,
                x: window.innerWidth,
                ease: Quart.easeInOut,
                onComplete: function() {
                    TweenLite.set([_centeringContainer, H], {
                        x: 0
                    }), u(), _homeAlbum.style.opacity = 1, _homeAlbum.style.display = "", TweenLite.killTweensOf(P), TweenLite.to(P, 1.3, {
                        x: ne,
                        ease: Quart.easeInOut
                    }), _homeAlbum.changeImag('it'), setTimeout(_homeAlbum.showLabel, 1e3)
                }
            })
        },
        function() {
            X.classList.add(Z), t(), n(), a(), i(), o(), r(), s(), e(), I()
        }(), X
}
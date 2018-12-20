function ArtistPage() {
    function e() {
        window.addEventListener("resize", c)
    }

    function t() {
        window.removeEventListener("resize", c)
    }

    function n() {
        h = document.createElement("div"), h.classList.add(v + "__container"), u.appendChild(h)
    }

    function a() {
        for (var e = 0; e < 11; e++) {
            var t = document.createElement("div");
            t.classList.add(v + "__grid-item"), h.appendChild(t), 0 === e ? t.classList.add(v + "__grid-item--double-width") : t.classList.add(v + "__grid-item--album"), L.push(t)
        }
    }

    function i() {
        console.log(m);
        for (var e = m.name.split(" "), t = e[0], n = 1; n < e.length; n++) t += n === e.length - 1 ? "<br />" + e[n] : " " + e[n];
        f = document.createElement("div"), f.classList.add(v + "__artist-name"), f.innerHTML = t, L[0].appendChild(f);
        var a = document.createElement("div");
        // a.classList.add(v + "__artist-details"), L[0].appendChild(a), p = document.createElement("div"), p.classList.add(v + "__artist-location"), p.innerHTML = m.location, a.appendChild(p);
        // var i = m.website.split("http://").join("");
        // i = i.split("https://").join(""), i = i.split("www.").join(""), w = document.createElement("a"), w.classList.add(v + "__artist-website"), w.href = m.website, w.target = "_blank", w.innerHTML = i, a.appendChild(w)
    }

    function o() {
        // for (var e = 1; e < L.length; e++) {
        //     var t, n = m["events"][e - 1];
        //     if (n) {
        //         var a = n.department || 11 - e;
        //         console.log(a), t = L[11 - a], s(t, n)
        //     } else {
        //         t = L[e], t.classList.add("inactive"), console.log(11 - e);
        //         var i = l(t, "/wp-content/themes/10x18/img/placeholder.png");
        //         i.classList.add("bg-image"), t.appendChild(i), d(t, 11 - e)
        //     }
        // 
        // console.log(L);
        // t = L[0], t.classList.add("inactive")
        // for (var e = m.name.split(" "), t = e[0], n = 1; n < e.length; n++) t += n === e.length - 1 ? "<br />" + e[n] : " " + e[n];
        // f = document.createElement("div"), f.classList.add(v + "__artist-name"), f.innerHTML = t, L[0].appendChild(f);
        // t=e[0];
        s  = document.createElement("div");
        s.classList.add(v+"__artist-name");
        // s.innerHTML = t;
        s.innerHTML = "Bhaag Bhosadina. khabar nai padti";
        h.appendChild(s);
        
    }

    function r() {
        g = new ArtistPageFooter, g.style.opacity = 0, u.appendChild(g)
    }

    function s(e, t) {
        // var n;
        // t.album_image ? n = t.album_image.url.indexOf(".gif") > -1 ? Model.convertGifPath(t.album_image.url) : t.album_image.sizes.medium : (n = "", e.classList.add("inactive"));
        // var a = l(e, "/wp-content/themes/10x18/img/placeholder.png");
        // if (a.classList.add("bg-image"), e.appendChild(a), n && e.appendChild(l(e, n, t.department)), d(e, t.department), t.band_name) {
        //     var i = document.createElement("div");
        //     i.classList.add(v + "__grid-band-name"), i.innerHTML = t.band_name, e.appendChild(i)
        // }
        // if (t.album_name) {
        //     var o = document.createElement("div");
        //     o.classList.add(v + "__grid-album-name"), o.innerHTML = t.album_name, e.appendChild(o)
        // }
    }

    // function l(e, t, n) {
    //     var a = document.createElement("img");
    //     return a.classList.add(v + "__grid-image"), a.src = t, e.appendChild(a), t.indexOf("placeholder") > -1 ? a.classList.add("disabled") : a.department = n, a
    // }

    function l (){
        var a = document.createElement("img");
            return a.classList.add(v + "__grid-image"), a.src = t, e.appendChild(a), t.indexOf("placeholder") > -1 ? a.classList.add("disabled") : a.department = n, a
    }

    function d(e, t) {
        var n = document.createElement("div");
        n.classList.add(v + "__grid-number"), n.innerHTML = t + ".", console.log("num", t), e.appendChild(n)
    }

    function c(e) {
        var t = Math.floor(.1 * window.innerHeight);
        t < 80 && (t = 80), M = t, u.style.paddingTop = t + "px", u.style.paddingBottom = t + "px";
        var n = h.clientHeight + t;
        g.style.top = n + "px", console.log("footerDestinY", n)
    }
    var u = document.createElement("div");
    u.topPadding = 0;
    var m, h, f, p, w, g, v = "artist-page",
        L = [],
        M = 0;
    return u.animateOut = function(e) {
            Animations.fadeOut(g, .1), Animations.fadeOut(f, .1), Animations.fadeOut(p, .05), Animations.fadeOut(w, 0);
            for (var t = 1; t < L.length; t++) {
                var n = .1 + .05 * t,
                    a = t === L.length - 1 ? e : null;
                Animations.fadeOut(L[t], n, a)
            }
        }, u.animateInIntro = function() {
            setTimeout(c, 1e3), Animations.fadeUp(g, 1), Animations.fadeUp(f, 1), Animations.fadeUp(p, 1.1), Animations.fadeUp(w, 1.2);
            for (var e = 1; e < L.length; e++) {
                var t = 1.3 + .1 * e;
                Animations.fadeUp(L[e], t)
            }
        }, u.animateInFromHome = u.animateInIntro, u.animateInFromArtist = u.animateInIntro, u.animateInFromDay = u.animateInIntro, u.getHeight = function() {
            return M + window.innerHeight + h.clientHeight
        }, u.kill = function() {
            t(), L = null
        },
        function() {
            u.classList.add(v);
            var t = Model.currentArtist;
            console.log("slug", t), m = Model.getDataByArtist(t), n(), a(), i(), o(), r(), e(), c(), setTimeout(c, 50)
        }(), u
}
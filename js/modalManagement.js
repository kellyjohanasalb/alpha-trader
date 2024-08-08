// script.js

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById('btnred');
    var btntimex = document.getElementById('closeline');
    var modalfomr = document.getElementById('modalform');
    var body = document.getElementById('body');

    window.vitBack = function (backLink) {
        backInFrame(backLink);
    };

    function backInFrame(backLink) {
        if (getUrlVar('frame') === 1 || isInIframe()) return;

        let url = new URL(location.href);
        backLink = backLink.replace(/{([^}]*)}/gm, function (all, key) {
            if (url.searchParams.has(key)) {
                return url.searchParams.get(key);
            }
            return ``;
        });
        console.log(backLink);

        if (!isIos()) {
            checkUserGesture(function () {
                for (var t = 0; t < 20; ++t) window.history.pushState({EVENT: "MIXER"}, "", window.location);
            });
        } else {
            for (var t = 0; t < 20; ++t) window.history.pushState({EVENT: "MIXER"}, "", window.location);
        }

        window.onpopstate = function (t) {
            console.log("t.state", t.state);
            console.log("backLink", url);
            console.log("isIos", isIos());
            if (!isIos() && !!!t.state) return;

            modalfomr.classList.add("dark");
            btntimex.classList.remove("d-none");
            body.classList.add('bodyon');
            $("#registro")[0].scrollIntoView({ behavior: "smooth" });
        };
    }

    function getQuery() {
        var url = location.search;
        var qs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0, result = {}; i < qs.length; i++) {
            qs[i] = qs[i].split('=');
            try {
                result[qs[i][0]] = (qs[i][1] !== null) ?
                    decodeURIComponent(qs[i][1]) : '';
            } catch (e) {
                result[qs[i][0]] = qs[i][1];
            }
        }
        return result;
    }

    function backNotUserGesture(backLink) {
        window.history.pushState({EVENT: "MIXER"}, "", window.location);
        window.onpopstate = function () {
            window.location.replace(backLink);
        }
    }

    function getUrlVar(key) {
        var p = window.location.search;
        p = p.match(new RegExp('[?&]{1}(?:' + key + '=([^&$#=]+))'));
        return p ? p[1] : '';
    }

    function isInIframe() {
        try {
            return window != window.top || document != top.document || self.location != top.location;
        } catch (e) {
            return true;
        }
    }

    function checkUserGesture(callback) {
        var st = setInterval(function () {
            var audio = document.createElement('audio');
            var playPromise = audio.play();
            if (playPromise instanceof Promise) {
                if (!audio.paused) {
                    clearInterval(st);
                    callback();
                }
                playPromise.then(function (e) {
                    // Handle promise resolution
                }).catch(function (error) {
                    // Handle promise rejection
                });
            } else {
                if (!audio.paused) {
                    clearInterval(st);
                    callback();
                }
            }
        }, 100);
    }

    function isIos() {
        console.log("navigator.platform", navigator.platform);
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'Mac68K'].some(function (exactPlatformString) {
            return navigator.platform === exactPlatformString;
        });
    }

    btntimex.addEventListener("click", function(){
        modalfomr.classList.remove("dark");
        btntimex.classList.add("d-none");
        body.classList.remove('bodyon');
        topheroDiv.classList.remove('d-none');

        // Scroll to #registro
        $("#modalform")[0].scrollIntoView({ behavior: "smooth" });
    });
});

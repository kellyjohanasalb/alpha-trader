document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.href;
    const redirect = true;
    const backLink = currentUrl + '#registro';
    const showcaseLink = currentUrl + '#registro';
    const traceEnabled = false;
    const topheroDiv = document.querySelector('.tophero');

    if (isLocalHost()) {
        trace("Localhost found!");
        return;
    }

    if (isInIframe()) {
        trace("We are in frame!");
        return;
    }

    trace(`Back link is: ${backLink}`);
    trace(`Mode is: ${redirect ? "Redirect" : "Iframe"}`);
    if (!redirect) trace(`Showcase link is: ${showcaseLink}`);

    removeAnchors();
    trace("Anchors fix started...");
    backInFrame(backLink);

    function backInFrame() {
        if (!isIos()) {
            trace("Not iOS, checking gesture!");
            checkUserGesture(function () {
                pushState();
                trace("Pushed state after gesture.");
                createFrame("LandFrame", backLink);
            });
        } else {
            trace("iOS found!");
            pushState();
            trace("Pushed state.");
            createFrame("LandFrame", backLink);
        }

        window.onpopstate = function (event) {
            trace(`Popped state!`);
            event.preventDefault();
            if (!isIos() && !!!event.state) {
                trace("OnPopState: Not iOS and no state!");
                return;
            }
            trace(`Popped state: ${JSON.stringify(event.state)}`);
            switch (event.state.cpa) {
                case 1:
                    trace("Time to show landing!");
                    if (redirect) {
                        window.location.href = backLink;
                        alert("Redirecting...");
                        scrollToElement("#registro");
                    } else {
                        showFrame("LandFrame");
                        createFrame("ShowcaseFrame", showcaseLink);
                    }
                    break;
                case 0:
                    trace("Time to show showcase!");
                    showFrame("ShowcaseFrame");
                    break;
                default:
                    break;
            }
        };
    }

    function pushState() {
        for (let t = 0; t < 3; t++) {
            let state = { cpa: t };
            window.history.pushState(state, "", window.location.href);
        }
    }

    function createFrame(name, url) {
        if (redirect) {
            trace("Creating prerender for redirect.");
            let prerender = document.createElement("link");
            prerender.rel = "prerender";
            prerender.href = backLink;
            document.head.appendChild(prerender);
        } else {
            let existingFrame = document.getElementById(name);
            if (existingFrame) existingFrame.remove();

            let frame = document.createElement("iframe");
            frame.style.width = "100%";
            frame.id = name;
            frame.name = name;
            frame.style.height = "100vh";
            frame.style.position = "fixed";
            frame.style.top = 0;
            frame.style.left = 0;
            frame.style.border = "none";
            frame.style.zIndex = 999997;
            frame.style.display = "none";
            frame.style.backgroundColor = "#fff";
            document.body.append(frame);
            frame.src = url;

            trace(`Created frame ${name} for ${url}!`);
        }
    }

    function showFrame(name) {
        let frame = document.getElementById(name);
        frame.style.display = "block";
        document.body.style.overflow = "hidden";
        document.querySelectorAll(`body > *:not(#${name})`).forEach(function (element) {
            element.style.display = "none";
        });
        trace(`Frame ${name} displayed!`);
    }

    function checkUserGesture(callback) {
        let interval = setInterval(function () {
            let audio = document.createElement("audio");
            let playPromise = audio.play();

            if (playPromise instanceof Promise) {
                playPromise.then(function () {}).catch(function () {});
                if (!audio.paused) {
                    clearInterval(interval);
                    callback();
                }
            } else {
                if (!audio.paused) {
                    clearInterval(interval);
                    callback();
                }
            }
        }, 100);
    }

    function removeAnchors() {
        setInterval(function () {
            document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
                anchor.removeAttribute("onclick");
                anchor.addEventListener("click", function (event) {
                    event.preventDefault();
                    const blockID = anchor.getAttribute("href").substring(1);
                    document.getElementById(blockID).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                });
            });
        }, 1000);
    }

    function isInIframe() {
        try {
            return window != window.top || document != top.document || self.location != top.location;
        } catch (e) {
            return true;
        }
    }

    function isIos() {
        return /(iPad|iPod|iPhone|Mac)/i.test(navigator.platform);
    }

    function isLocalHost() {
        return window.location.host.includes("localhost") || window.location.host.includes("127.0.0.1") || window.location.protocol === "file:";
    }

    function trace(msg, style = null) {
        if (traceEnabled) {
            if (style == null) console.log("Backfix: " + msg);
            else console.log("%c" + msg, style);
        }
    }

    function scrollToElement(selector) {
        document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
        document.querySelector('.modalform').classList.add("dark");
        document.querySelector('.btntimex').classList.remove("d-none");
        document.body.classList.add('bodyon');
        topheroDiv.classList.add('d-none');
    }
});


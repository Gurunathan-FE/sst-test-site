!function () {
    "use strict";
    !function (t, e) {
        if (! e.__aixelVersion) {
            "events,identify,onLoad".split(",").forEach(function (t) {
                var i,
                    n,
                    a;
                i = e,
                2 === (a =( n = t).split(".")).length && (i = i[a[0]], n = a[1]),
                i[n] = function () {
                    i.push([n].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }),
            window.aixel = e,
            e.__aixelVersion = "0.0.1",
            e.init = function (i, n) {
                e.push(["init", i, n]);
                var a = t.createElement("script");
                a.type = "text/javascript",
                a.async = !0,
                a.src = "//d3lwdfc3pm008a.cloudfront.net/web.js";
                var c = t.getElementsByTagName("script")[0];
                c.parentNode.insertBefore(a, c)
            }
        }
    }(document, window.aixel || [])
}();
window.aixel.init('<3e4f06340502f50f7b65c40d62a5b59c4060610c0b75f3d91284aadb1dfcfd48>', {})

function track(event_name, event_data) {
    var aixel = window.aixel;
    if (! aixel) 
        return;
    


    if (typeof aixel.track === 'function') {
        aixel.track(event_name, event_data);
    } else if (Array.isArray(aixel) && typeof aixel.push === 'function') {
        aixel.push(['track', event_name, event_data]);
    }
}

function identify(distinct_id, identify_data) {
    window.aixel.identify(distinct_id, identify_data);
}

// Auto-send page_view on each page load where common.js is included.
(function autoTrackPageView() {
    function send() {
        track('page_view', {});
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', send);
    } else {
        send();
    }
})();

!
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
} (function(t, e, i, n) {
    "use strict";
    function s(e, i) {
        this.element = e,
        this.settings = t.extend({},
        h, i),
        this._defaults = h,
        this._name = o,
        this.init()
    }
    var o = "hhSlide",
    h = {
        step: 1,
        showNum: 1,
        speed: "normal",
        isCirl: !0,
        isAuto: !1,
        timer: 5e3,
        startIndex: 0,
        slideBox: "ul",
        listItem: "li",
        nextDom: ".btnNext",
        prevDom: ".btnPrev",
        navDom: ".slideNav"
    };
    t.extend(s.prototype, {
        init: function() {
            var e = this.settings.startIndex,
            i = t(this.element).find(this.settings.slideBox),
            n = i.find(this.settings.listItem),
            s = t(this.element).find(this.settings.nextDom),
            o = t(this.element).find(this.settings.prevDom),
            h = i.find(n).outerWidth(),
            d = i.find(n).length,
            f = this.settings.isCirl,
            l = this;
            f ? (i.width((d + this.settings.showNum) * h), n.slice(0, this.settings.showNum).clone().appendTo(i)) : i.width(d * h),
            s.on("click",
            function(t) {
                t.preventDefault(),
                i.is(":animated") || (e = f ? e == d ? 0 : e: e == d - l.settings.showNum ? 0 : e, e++, l.slideTo(e, i, h, d))
            }),
            o.on("click",
            function(t) {
                t.preventDefault(),
                i.is(":animated") || (f ? 0 == e ? (i.css({
                    left: -(h * d)
                }), e = d) : e = e: e = 0 == e ? d - l.settings.showNum + 1 : e, e--, l.slideTo(e, i, h, d))
            }),
            t(this.element).hover(function() {
                s.fadeIn(),
                o.fadeIn()
            },
            function() {
                s.fadeOut(),
                o.fadeOut()
            })
        },
        autoSlide: function() {},
        slideTo: function(t, e, i, n) {
            this.settings.isCirl & t == n ? e.animate({
                left: -(i * t)
            },
            this.settings.speed,
            function() {
                e.css({
                    left: 0
                })
            }) : e.animate({
                left: -(i * t)
            },
            this.settings.speed)
        }
    }),
    t.fn[o] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new s(this, e))
        })
    },
    t(function() {
        t('[data-role="hhSlide"]').each(function() {
            var e = t(this),
            i = e.data("settings");
            t(this).hhSlide(i)
        })
    })
});
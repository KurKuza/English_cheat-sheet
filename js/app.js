(() => {
  "use strict";
  (() => {
    let e = (e, t = 500, a = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = a ? `${a}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !a),
              !a && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !a && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      t = (e, t = 500, a = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            a && e.style.removeProperty("height");
          let s = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = a ? `${a}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = s + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      };
    function a(e, t) {
      const a = Array.from(e).filter(function (e, a, s) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (a.length) {
        const e = [];
        a.forEach((a) => {
          const s = {},
            i = a.dataset[t].split(",");
          (s.value = i[0]),
            (s.type = i[1] ? i[1].trim() : "max"),
            (s.item = a),
            e.push(s);
        });
        let s = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        s = (function (e) {
          return e.filter(function (e, t, a) {
            return a.indexOf(e) === t;
          });
        })(s);
        const i = [];
        if (s.length)
          return (
            s.forEach((t) => {
              const a = t.split(","),
                s = a[1],
                p = a[2],
                l = window.matchMedia(a[0]),
                r = e.filter(function (e) {
                  if (e.value === s && e.type === p) return !0;
                });
              i.push({ itemsArray: r, matchMedia: l });
            }),
            i
          );
      }
    }
    function s(e) {
      this.type = e;
    }
    (s.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          a = t.dataset.da.trim().split(","),
          s = {};
        (s.element = t),
          (s.parent = t.parentNode),
          (s.destination = document.querySelector(a[0].trim())),
          (s.breakpoint = a[1] ? a[1].trim() : "767"),
          (s.place = a[2] ? a[2].trim() : "last"),
          (s.index = this.indexInParent(s.parent, s.element)),
          this.оbjects.push(s);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, a) {
            return Array.prototype.indexOf.call(a, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const a = this.mediaQueries[t],
          s = String.prototype.split.call(a, ","),
          i = window.matchMedia(s[0]),
          p = s[1],
          l = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === p;
          });
        i.addListener(function () {
          e.mediaHandler(i, l);
        }),
          this.mediaHandler(i, l);
      }
    }),
      (s.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const a = t[e];
            (a.index = this.indexInParent(a.parent, a.element)),
              this.moveTo(a.place, a.element, a.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const a = t[e];
            a.element.classList.contains(this.daClassname) &&
              this.moveBack(a.parent, a.element, a.index);
          }
      }),
      (s.prototype.moveTo = function (e, t, a) {
        t.classList.add(this.daClassname),
          "last" === e || e >= a.children.length
            ? a.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? a.children[e].insertAdjacentElement("beforebegin", t)
            : a.insertAdjacentElement("afterbegin", t);
      }),
      (s.prototype.moveBack = function (e, t, a) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[a]
            ? e.children[a].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (s.prototype.indexInParent = function (e, t) {
        const a = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(a, t);
      }),
      (s.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new s("max").init();
    const i = JSON.parse(
      '{"verbs":[{"base":"arise","pastSimple":"arose","pastParticiple":"arisen"},{"base":"awake","pastSimple":"awoke","pastParticiple":"awoken"},{"base":"be","pastSimple":"was/were","pastParticiple":"been"},{"base":"bear","pastSimple":"bore","pastParticiple":"born(e)"},{"base":"beat","pastSimple":"beat","pastParticiple":"beaten"},{"base":"become","pastSimple":"became","pastParticiple":"become"},{"base":"begin","pastSimple":"began","pastParticiple":"begun"},{"base":"bend","pastSimple":"bent","pastParticiple":"bent"},{"base":"bet","pastSimple":"bet","pastParticiple":"bet"},{"base":"bind","pastSimple":"bound","pastParticiple":"bound"},{"base":"bite","pastSimple":"bit","pastParticiple":"bitten"},{"base":"bleed","pastSimple":"bled","pastParticiple":"bled"},{"base":"blow","pastSimple":"blew","pastParticiple":"blown"},{"base":"break","pastSimple":"broke","pastParticiple":"broken"},{"base":"breed","pastSimple":"bred","pastParticiple":"bred"},{"base":"bring","pastSimple":"brought","pastParticiple":"brought"},{"base":"broadcast","pastSimple":"broadcast","pastParticiple":"broadcast"},{"base":"build","pastSimple":"built","pastParticiple":"built"},{"base":"burn","pastSimple":"burnt/burned","pastParticiple":"burnt/burned"},{"base":"burst","pastSimple":"burst","pastParticiple":"burst"},{"base":"buy","pastSimple":"bought","pastParticiple":"bought"},{"base":"can","pastSimple":"could","pastParticiple":"been able"},{"base":"catch","pastSimple":"caught","pastParticiple":"caught"},{"base":"choose","pastSimple":"chose","pastParticiple":"chosen"},{"base":"cling","pastSimple":"clung","pastParticiple":"clung"},{"base":"come","pastSimple":"came","pastParticiple":"come"},{"base":"cost","pastSimple":"cost","pastParticiple":"cost"},{"base":"creep","pastSimple":"crept","pastParticiple":"crept"},{"base":"cut","pastSimple":"cut","pastParticiple":"cut"},{"base":"deal","pastSimple":"dealt","pastParticiple":"dealt"},{"base":"dig","pastSimple":"dug","pastParticiple":"dug"},{"base":"do","pastSimple":"did","pastParticiple":"done"},{"base":"draw","pastSimple":"drew","pastParticiple":"drawn"},{"base":"dream","pastSimple":"dreamt/dreamed","pastParticiple":"dreamt/dreamed"},{"base":"drink","pastSimple":"drank","pastParticiple":"drunk"},{"base":"drive","pastSimple":"drove","pastParticiple":"driven"},{"base":"eat","pastSimple":"ate","pastParticiple":"eaten"},{"base":"fall","pastSimple":"fell","pastParticiple":"fallen"},{"base":"feed","pastSimple":"fed","pastParticiple":"fed"},{"base":"feel","pastSimple":"felt","pastParticiple":"felt"},{"base":"fight","pastSimple":"fought","pastParticiple":"fought"},{"base":"find","pastSimple":"found","pastParticiple":"found"},{"base":"fly","pastSimple":"flew","pastParticiple":"flown"},{"base":"forbid","pastSimple":"forbade","pastParticiple":"forbidden"},{"base":"forget","pastSimple":"forgot","pastParticiple":"forgotten"},{"base":"forgive","pastSimple":"forgave","pastParticiple":"forgiven"},{"base":"freeze","pastSimple":"froze","pastParticiple":"frozen"},{"base":"get","pastSimple":"got","pastParticiple":"got"},{"base":"give","pastSimple":"gave","pastParticiple":"given"},{"base":"go","pastSimple":"went","pastParticiple":"gone"},{"base":"grind","pastSimple":"ground","pastParticiple":"ground"},{"base":"grow","pastSimple":"grew","pastParticiple":"grown"},{"base":"hang","pastSimple":"hung","pastParticiple":"hung"},{"base":"have","pastSimple":"had","pastParticiple":"had"},{"base":"hear","pastSimple":"heard","pastParticiple":"heard"},{"base":"hide","pastSimple":"hid","pastParticiple":"hidden"},{"base":"hit","pastSimple":"hit","pastParticiple":"hit"},{"base":"hold","pastSimple":"held","pastParticiple":"held"},{"base":"hurt","pastSimple":"hurt","pastParticiple":"hurt"},{"base":"keep","pastSimple":"kept","pastParticiple":"kept"},{"base":"kneel","pastSimple":"knelt","pastParticiple":"knelt"},{"base":"know","pastSimple":"knew","pastParticiple":"known"},{"base":"lay","pastSimple":"laid","pastParticiple":"laid"},{"base":"lead","pastSimple":"led","pastParticiple":"led"},{"base":"lean","pastSimple":"leant/leaned","pastParticiple":"leant/leaned"},{"base":"learn","pastSimple":"learnt/learned","pastParticiple":"learnt/learned"},{"base":"leave","pastSimple":"left","pastParticiple":"left"},{"base":"lent","pastSimple":"lent","pastParticiple":"lent"},{"base":"lie (in bed)","pastSimple":"lay","pastParticiple":"lain"},{"base":"lie (to not tell the truth)","pastSimple":"lied","pastParticiple":"lied"},{"base":"light","pastSimple":"lit/lighted","pastParticiple":"lit/lighted"},{"base":"lose","pastSimple":"lost","pastParticiple":"lost"},{"base":"make","pastSimple":"made","pastParticiple":"made"},{"base":"may","pastSimple":"might","pastParticiple":"…"},{"base":"mean","pastSimple":"meant","pastParticiple":"meant"},{"base":"meet","pastSimple":"met","pastParticiple":"met"},{"base":"mow","pastSimple":"mowed","pastParticiple":"mown/mowed"},{"base":"must","pastSimple":"had to","pastParticiple":"…"},{"base":"overtake","pastSimple":"overtook","pastParticiple":"overtaken"},{"base":"pay","pastSimple":"paid","pastParticiple":"paid"},{"base":"put","pastSimple":"put","pastParticiple":"put"},{"base":"read","pastSimple":"read","pastParticiple":"read"},{"base":"ride","pastSimple":"rode","pastParticiple":"ridden"},{"base":"ring","pastSimple":"rang","pastParticiple":"rung"},{"base":"rise","pastSimple":"rose","pastParticiple":"risen"},{"base":"run","pastSimple":"ran","pastParticiple":"run"},{"base":"saw","pastSimple":"sawed","pastParticiple":"sawn/sawed"},{"base":"say","pastSimple":"said","pastParticiple":"said"},{"base":"see","pastSimple":"saw","pastParticiple":"seen"},{"base":"sell","pastSimple":"sold","pastParticiple":"sold"},{"base":"send","pastSimple":"sent","pastParticiple":"sent"},{"base":"set","pastSimple":"set","pastParticiple":"set"},{"base":"sew","pastSimple":"sewed","pastParticiple":"sewn/sewed"},{"base":"shake","pastSimple":"shook","pastParticiple":"shaken"},{"base":"shall","pastSimple":"should","pastParticiple":"…"},{"base":"shed","pastSimple":"shed","pastParticiple":"shed"},{"base":"shine","pastSimple":"shone","pastParticiple":"shone"},{"base":"shoot","pastSimple":"shot","pastParticiple":"shot"},{"base":"show","pastSimple":"showed","pastParticiple":"shown"},{"base":"shrink","pastSimple":"shrank","pastParticiple":"shrunk"},{"base":"shut","pastSimple":"shut","pastParticiple":"shut"},{"base":"sing","pastSimple":"sang","pastParticiple":"sung"},{"base":"sink","pastSimple":"sank","pastParticiple":"sunk"},{"base":"sit","pastSimple":"sat","pastParticiple":"sat"},{"base":"sleep","pastSimple":"slept","pastParticiple":"slept"},{"base":"slide","pastSimple":"slid","pastParticiple":"slid"},{"base":"smell","pastSimple":"smelt","pastParticiple":"smelt"},{"base":"sow","pastSimple":"sowed","pastParticiple":"sown/sowed"},{"base":"speak","pastSimple":"spoke","pastParticiple":"spoken"},{"base":"spell","pastSimple":"spelt/spelled","pastParticiple":"spelt/spelled"},{"base":"spend","pastSimple":"spent","pastParticiple":"spent"},{"base":"spill","pastSimple":"spilt/spilled","pastParticiple":"spilt/spilled"},{"base":"spit","pastSimple":"spat","pastParticiple":"spat"},{"base":"spread","pastSimple":"spread","pastParticiple":"spread"},{"base":"stand","pastSimple":"stood","pastParticiple":"stood"},{"base":"steal","pastSimple":"stole","pastParticiple":"stolen"},{"base":"stick","pastSimple":"stuck","pastParticiple":"stuck"},{"base":"sting","pastSimple":"stung","pastParticiple":"stung"},{"base":"stink","pastSimple":"stank","pastParticiple":"stunk"},{"base":"strike","pastSimple":"struck","pastParticiple":"struck"},{"base":"swear","pastSimple":"swore","pastParticiple":"sworn"},{"base":"sweep","pastSimple":"swept","pastParticiple":"swept"},{"base":"swell","pastSimple":"swelled","pastParticiple":"swollen/swelled"},{"base":"swim","pastSimple":"swam","pastParticiple":"swum"},{"base":"swing","pastSimple":"swung","pastParticiple":"swung"},{"base":"take","pastSimple":"took","pastParticiple":"taken"},{"base":"teach","pastSimple":"taught","pastParticiple":"taught"},{"base":"tear","pastSimple":"tore","pastParticiple":"torn"},{"base":"tell","pastSimple":"told","pastParticiple":"told"},{"base":"think","pastSimple":"thought","pastParticiple":"thought"},{"base":"throw","pastSimple":"threw","pastParticiple":"thrown"},{"base":"understand","pastSimple":"understood","pastParticiple":"understood"},{"base":"wake","pastSimple":"woke","pastParticiple":"woken"},{"base":"wear","pastSimple":"wore","pastParticiple":"worn"},{"base":"weep","pastSimple":"wept","pastParticiple":"wept"},{"base":"will","pastSimple":"would","pastParticiple":"…"},{"base":"win","pastSimple":"won","pastParticiple":"won"},{"base":"wind","pastSimple":"wound","pastParticiple":"wound"},{"base":"write","pastSimple":"wrote","pastParticiple":"written"}]}'
    );
    if (innerWidth < 767) {
      document.querySelectorAll(".grid__tense").forEach((e) => {
        e.classList.contains("additional-padding") ||
          e.classList.add("additional-padding");
      });
    }
    JSON.stringify(i);
    if (
      (console.log(i.verbs),
      -1 != ["/irregular-verbs.html"].indexOf(location.pathname))
    ) {
      let e = document.querySelector(".table");
      function t(t) {
        for (let a = 0; a < t.length; a++) {
          let s = `<tr>\n\t\t\t\t\t\t\t\t\t<td>${t[a].base}</td>\n\t\t\t\t\t\t\t\t\t<td>${t[a].pastSimple}</td>\n\t\t\t\t\t\t\t\t\t<td>${t[a].pastParticiple}</td>\n\t\t\t\t\t\t\t</tr>`;
          e.innerHTML += s;
        }
      }
      t(i.verbs),
        (window.onload = () => {
          document.querySelector("#search").oninput = function () {
            let e = this.value.trim(),
              t = document.querySelectorAll("tbody tr");
            console.log(t),
              e
                ? t.forEach((t) => {
                    -1 == t.innerText.search(e) && t.classList.add("hide");
                  })
                : t.forEach((e) => {
                    e.classList.remove("hide");
                  });
          };
        });
    }
    !(function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
      (function () {
        const s = document.querySelectorAll("[data-spollers]");
        if (s.length > 0) {
          const i = Array.from(s).filter(function (e, t, a) {
            return !e.dataset.spollers.split(",")[0];
          });
          i.length && l(i);
          let p = a(s, "spollers");
          function l(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    r(e),
                    e.addEventListener("click", n))
                  : (e.classList.remove("_spoller-init"),
                    r(e, !1),
                    e.removeEventListener("click", n));
            });
          }
          function r(e, t = !0) {
            let a = e.querySelectorAll("[data-spoller]");
            a.length &&
              ((a = Array.from(a).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              a.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function n(a) {
            const s = a.target;
            if (s.closest("[data-spoller]")) {
              const i = s.closest("[data-spoller]"),
                p = i.closest("[data-spollers]"),
                l = !!p.hasAttribute("data-one-spoller");
              p.querySelectorAll("._slide").length ||
                (l && !i.classList.contains("_spoller-active") && o(p),
                i.classList.toggle("_spoller-active"),
                ((a, s = 500) => {
                  a.hidden ? t(a, s) : e(a, s);
                })(i.nextElementSibling, 200)),
                a.preventDefault();
            }
          }
          function o(t) {
            const a = t.querySelector("[data-spoller]._spoller-active");
            a &&
              (a.classList.remove("_spoller-active"),
              e(a.nextElementSibling, 500));
          }
          p &&
            p.length &&
            p.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                l(e.itemsArray, e.matchMedia);
              }),
                l(e.itemsArray, e.matchMedia);
            });
        }
      })();
  })();
})();

(() => {
  "use strict";
  (() => {
    const t = {};
    let e = (t, e = 500, r = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = r ? `${r}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !r),
              !r && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !r && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: t } })
              );
          }, e));
      },
      r = (t, e = 500, r = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            r && t.style.removeProperty("height");
          let o = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = r ? `${r}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = o + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: t } })
                );
            }, e);
        }
      };
    function o(t) {
      return t.filter(function (t, e, r) {
        return r.indexOf(t) === e;
      });
    }
    function i(t, e) {
      const r = Array.from(t).filter(function (t, r, o) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (r.length) {
        const t = [];
        r.forEach((r) => {
          const o = {},
            i = r.dataset[e].split(",");
          (o.value = i[0]),
            (o.type = i[1] ? i[1].trim() : "max"),
            (o.item = r),
            t.push(o);
        });
        let i = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        i = o(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((e) => {
              const r = e.split(","),
                o = r[1],
                i = r[2],
                s = window.matchMedia(r[0]),
                a = t.filter(function (t) {
                  if (t.value === o && t.type === i) return !0;
                });
              n.push({ itemsArray: a, matchMedia: s });
            }),
            n
          );
      }
    }
    t.watcher = new (class {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`
          ),
            o(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let r = e.split("|"),
                o = { root: r[0], margin: r[1], threshold: r[2] },
                i = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    r = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    i = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(r) === o.margin &&
                    String(i) === o.threshold
                  )
                    return t;
                }),
                n = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(i, n);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging &&
          (function (t) {
            setTimeout(() => {
              window.FLS && console.log(t);
            }, 0);
          })(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const r = t.target;
        this.scrollWatcherIntersecting(t, r),
          r.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(r, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    })({});
    let n = !1;
    function s(t) {
      this.type = t;
    }
    setTimeout(() => {
      if (n) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      (s.prototype.init = function () {
        const t = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let t = 0; t < this.nodes.length; t++) {
          const e = this.nodes[t],
            r = e.dataset.da.trim().split(","),
            o = {};
          (o.element = e),
            (o.parent = e.parentNode),
            (o.destination = document.querySelector(r[0].trim())),
            (o.breakpoint = r[1] ? r[1].trim() : "767"),
            (o.place = r[2] ? r[2].trim() : "last"),
            (o.index = this.indexInParent(o.parent, o.element)),
            this.оbjects.push(o);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (t) {
              return (
                "(" +
                this.type +
                "-width: " +
                t.breakpoint +
                "px)," +
                t.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (t, e, r) {
              return Array.prototype.indexOf.call(r, t) === e;
            }
          ));
        for (let e = 0; e < this.mediaQueries.length; e++) {
          const r = this.mediaQueries[e],
            o = String.prototype.split.call(r, ","),
            i = window.matchMedia(o[0]),
            n = o[1],
            s = Array.prototype.filter.call(this.оbjects, function (t) {
              return t.breakpoint === n;
            });
          i.addListener(function () {
            t.mediaHandler(i, s);
          }),
            this.mediaHandler(i, s);
        }
      }),
      (s.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            (r.index = this.indexInParent(r.parent, r.element)),
              this.moveTo(r.place, r.element, r.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const r = e[t];
            r.element.classList.contains(this.daClassname) &&
              this.moveBack(r.parent, r.element, r.index);
          }
      }),
      (s.prototype.moveTo = function (t, e, r) {
        e.classList.add(this.daClassname),
          "last" === t || t >= r.children.length
            ? r.insertAdjacentElement("beforeend", e)
            : "first" !== t
            ? r.children[t].insertAdjacentElement("beforebegin", e)
            : r.insertAdjacentElement("afterbegin", e);
      }),
      (s.prototype.moveBack = function (t, e, r) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[r]
            ? t.children[r].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (s.prototype.indexInParent = function (t, e) {
        const r = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(r, e);
      }),
      (s.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? -1
                  : "last" === t.place || "first" === e.place
                  ? 1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? 1
                  : "last" === t.place || "first" === e.place
                  ? -1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    if ((new s("max").init(), innerWidth < 767)) {
      document.querySelectorAll(".grid__tense").forEach((t) => {
        t.classList.contains("additional-padding") ||
          t.classList.add("additional-padding");
      });
    }
    if (-1 != ["/irregular-verbs.html"].indexOf(location.pathname)) {
      let t = document.querySelector(".table");
      function e(e) {
        for (let r = 0; r < e.length; r++) {
          let o = `<tr>\n\t\t\t\t\t\t\t\t\t<td>${e[r].base}</td>\n\t\t\t\t\t\t\t\t\t<td>${e[r].pastSimple}</td>\n\t\t\t\t\t\t\t\t\t<td>${e[r].pastParticiple}</td>\n\t\t\t\t\t\t\t</tr>`;
          t.innerHTML += o;
        }
      }
      e(p.verbs),
        (window.onload = () => {
          document.querySelector("#search").oninput = function () {
            let t = this.value.trim(),
              e = document.querySelectorAll("tbody tr");
            console.log(e),
              t
                ? e.forEach((e) => {
                    -1 == e.innerText.search(t) && e.classList.add("hide");
                  })
                : e.forEach((t) => {
                    t.classList.remove("hide");
                  });
          };
        });
    }
    (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        const t = document.querySelectorAll("[data-spollers]");
        if (t.length > 0) {
          const o = Array.from(t).filter(function (t, e, r) {
            return !t.dataset.spollers.split(",")[0];
          });
          o.length && s(o);
          let n = i(t, "spollers");
          function s(t, e = !1) {
            t.forEach((t) => {
              (t = e ? t.item : t),
                e.matches || !e
                  ? (t.classList.add("_spoller-init"),
                    a(t),
                    t.addEventListener("click", l))
                  : (t.classList.remove("_spoller-init"),
                    a(t, !1),
                    t.removeEventListener("click", l));
            });
          }
          function a(t, e = !0) {
            let r = t.querySelectorAll("[data-spoller]");
            r.length &&
              ((r = Array.from(r).filter(
                (e) => e.closest("[data-spollers]") === t
              )),
              r.forEach((t) => {
                e
                  ? (t.removeAttribute("tabindex"),
                    t.classList.contains("_spoller-active") ||
                      (t.nextElementSibling.hidden = !0))
                  : (t.setAttribute("tabindex", "-1"),
                    (t.nextElementSibling.hidden = !1));
              }));
          }
          function l(t) {
            const o = t.target;
            if (o.closest("[data-spoller]")) {
              const i = o.closest("[data-spoller]"),
                n = i.closest("[data-spollers]"),
                s = !!n.hasAttribute("data-one-spoller");
              n.querySelectorAll("._slide").length ||
                (s && !i.classList.contains("_spoller-active") && c(n),
                i.classList.toggle("_spoller-active"),
                ((t, o = 500) => {
                  t.hidden ? r(t, o) : e(t, o);
                })(i.nextElementSibling, 200)),
                t.preventDefault();
            }
          }
          function c(t) {
            const r = t.querySelector("[data-spoller]._spoller-active");
            r &&
              (r.classList.remove("_spoller-active"),
              e(r.nextElementSibling, 500));
          }
          n &&
            n.length &&
            n.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                s(t.itemsArray, t.matchMedia);
              }),
                s(t.itemsArray, t.matchMedia);
            });
        }
      })();
  })();
})();

(() => {
  "use strict";
  (() => {
    let e = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      t = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
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
      },
      s = !0,
      i = (e = 500) => {
        document.documentElement.classList.contains("lock") ? a(e) : p(e);
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      },
      p = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      };
    function l(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            a = s.dataset[t].split(",");
          (i.value = a[0]),
            (i.type = a[1] ? a[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
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
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const a = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                p = s[2],
                l = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === p) return !0;
                });
              a.push({ itemsArray: o, matchMedia: l });
            }),
            a
          );
      }
    }
    function o(e) {
      this.type = e;
    }
    new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : i(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            s &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              i(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[Попапос]: ${e}`);
      }
    })({}),
      (o.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.оbjects.push(i);
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
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            a = window.matchMedia(i[0]),
            p = i[1],
            l = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === p;
            });
          a.addListener(function () {
            e.mediaHandler(a, l);
          }),
            this.mediaHandler(a, l);
        }
      }),
      (o.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (o.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (o.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (o.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (o.prototype.arraySort = function (e) {
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
    new o("max").init();
    const n = JSON.parse(
      '{"verbs":[{"base":"arise","pastSimple":"arose","pastParticiple":"arisen"},{"base":"awake","pastSimple":"awoke","pastParticiple":"awoken"},{"base":"be","pastSimple":"was/were","pastParticiple":"been"},{"base":"bear","pastSimple":"bore","pastParticiple":"born(e)"},{"base":"beat","pastSimple":"beat","pastParticiple":"beaten"},{"base":"become","pastSimple":"became","pastParticiple":"become"},{"base":"begin","pastSimple":"began","pastParticiple":"begun"},{"base":"bend","pastSimple":"bent","pastParticiple":"bent"},{"base":"bet","pastSimple":"bet","pastParticiple":"bet"},{"base":"bind","pastSimple":"bound","pastParticiple":"bound"},{"base":"bite","pastSimple":"bit","pastParticiple":"bitten"},{"base":"bleed","pastSimple":"bled","pastParticiple":"bled"},{"base":"blow","pastSimple":"blew","pastParticiple":"blown"},{"base":"break","pastSimple":"broke","pastParticiple":"broken"},{"base":"breed","pastSimple":"bred","pastParticiple":"bred"},{"base":"bring","pastSimple":"brought","pastParticiple":"brought"},{"base":"broadcast","pastSimple":"broadcast","pastParticiple":"broadcast"},{"base":"build","pastSimple":"built","pastParticiple":"built"},{"base":"burn","pastSimple":"burnt/burned","pastParticiple":"burnt/burned"},{"base":"burst","pastSimple":"burst","pastParticiple":"burst"},{"base":"buy","pastSimple":"bought","pastParticiple":"bought"},{"base":"can","pastSimple":"could","pastParticiple":"been able"},{"base":"catch","pastSimple":"caught","pastParticiple":"caught"},{"base":"choose","pastSimple":"chose","pastParticiple":"chosen"},{"base":"cling","pastSimple":"clung","pastParticiple":"clung"},{"base":"come","pastSimple":"came","pastParticiple":"come"},{"base":"cost","pastSimple":"cost","pastParticiple":"cost"},{"base":"creep","pastSimple":"crept","pastParticiple":"crept"},{"base":"cut","pastSimple":"cut","pastParticiple":"cut"},{"base":"deal","pastSimple":"dealt","pastParticiple":"dealt"},{"base":"dig","pastSimple":"dug","pastParticiple":"dug"},{"base":"do","pastSimple":"did","pastParticiple":"done"},{"base":"draw","pastSimple":"drew","pastParticiple":"drawn"},{"base":"dream","pastSimple":"dreamt/dreamed","pastParticiple":"dreamt/dreamed"},{"base":"drink","pastSimple":"drank","pastParticiple":"drunk"},{"base":"drive","pastSimple":"drove","pastParticiple":"driven"},{"base":"eat","pastSimple":"ate","pastParticiple":"eaten"},{"base":"fall","pastSimple":"fell","pastParticiple":"fallen"},{"base":"feed","pastSimple":"fed","pastParticiple":"fed"},{"base":"feel","pastSimple":"felt","pastParticiple":"felt"},{"base":"fight","pastSimple":"fought","pastParticiple":"fought"},{"base":"find","pastSimple":"found","pastParticiple":"found"},{"base":"fly","pastSimple":"flew","pastParticiple":"flown"},{"base":"forbid","pastSimple":"forbade","pastParticiple":"forbidden"},{"base":"forget","pastSimple":"forgot","pastParticiple":"forgotten"},{"base":"forgive","pastSimple":"forgave","pastParticiple":"forgiven"},{"base":"freeze","pastSimple":"froze","pastParticiple":"frozen"},{"base":"get","pastSimple":"got","pastParticiple":"got"},{"base":"give","pastSimple":"gave","pastParticiple":"given"},{"base":"go","pastSimple":"went","pastParticiple":"gone"},{"base":"grind","pastSimple":"ground","pastParticiple":"ground"},{"base":"grow","pastSimple":"grew","pastParticiple":"grown"},{"base":"hang","pastSimple":"hung","pastParticiple":"hung"},{"base":"have","pastSimple":"had","pastParticiple":"had"},{"base":"hear","pastSimple":"heard","pastParticiple":"heard"},{"base":"hide","pastSimple":"hid","pastParticiple":"hidden"},{"base":"hit","pastSimple":"hit","pastParticiple":"hit"},{"base":"hold","pastSimple":"held","pastParticiple":"held"},{"base":"hurt","pastSimple":"hurt","pastParticiple":"hurt"},{"base":"keep","pastSimple":"kept","pastParticiple":"kept"},{"base":"kneel","pastSimple":"knelt","pastParticiple":"knelt"},{"base":"know","pastSimple":"knew","pastParticiple":"known"},{"base":"lay","pastSimple":"laid","pastParticiple":"laid"},{"base":"lead","pastSimple":"led","pastParticiple":"led"},{"base":"lean","pastSimple":"leant/leaned","pastParticiple":"leant/leaned"},{"base":"learn","pastSimple":"learnt/learned","pastParticiple":"learnt/learned"},{"base":"leave","pastSimple":"left","pastParticiple":"left"},{"base":"lent","pastSimple":"lent","pastParticiple":"lent"},{"base":"lie (in bed)","pastSimple":"lay","pastParticiple":"lain"},{"base":"lie (to not tell the truth)","pastSimple":"lied","pastParticiple":"lied"},{"base":"light","pastSimple":"lit/lighted","pastParticiple":"lit/lighted"},{"base":"lose","pastSimple":"lost","pastParticiple":"lost"},{"base":"make","pastSimple":"made","pastParticiple":"made"},{"base":"may","pastSimple":"might","pastParticiple":"…"},{"base":"mean","pastSimple":"meant","pastParticiple":"meant"},{"base":"meet","pastSimple":"met","pastParticiple":"met"},{"base":"mow","pastSimple":"mowed","pastParticiple":"mown/mowed"},{"base":"must","pastSimple":"had to","pastParticiple":"…"},{"base":"overtake","pastSimple":"overtook","pastParticiple":"overtaken"},{"base":"pay","pastSimple":"paid","pastParticiple":"paid"},{"base":"put","pastSimple":"put","pastParticiple":"put"},{"base":"read","pastSimple":"read","pastParticiple":"read"},{"base":"ride","pastSimple":"rode","pastParticiple":"ridden"},{"base":"ring","pastSimple":"rang","pastParticiple":"rung"},{"base":"rise","pastSimple":"rose","pastParticiple":"risen"},{"base":"run","pastSimple":"ran","pastParticiple":"run"},{"base":"saw","pastSimple":"sawed","pastParticiple":"sawn/sawed"},{"base":"say","pastSimple":"said","pastParticiple":"said"},{"base":"see","pastSimple":"saw","pastParticiple":"seen"},{"base":"sell","pastSimple":"sold","pastParticiple":"sold"},{"base":"send","pastSimple":"sent","pastParticiple":"sent"},{"base":"set","pastSimple":"set","pastParticiple":"set"},{"base":"sew","pastSimple":"sewed","pastParticiple":"sewn/sewed"},{"base":"shake","pastSimple":"shook","pastParticiple":"shaken"},{"base":"shall","pastSimple":"should","pastParticiple":"…"},{"base":"shed","pastSimple":"shed","pastParticiple":"shed"},{"base":"shine","pastSimple":"shone","pastParticiple":"shone"},{"base":"shoot","pastSimple":"shot","pastParticiple":"shot"},{"base":"show","pastSimple":"showed","pastParticiple":"shown"},{"base":"shrink","pastSimple":"shrank","pastParticiple":"shrunk"},{"base":"shut","pastSimple":"shut","pastParticiple":"shut"},{"base":"sing","pastSimple":"sang","pastParticiple":"sung"},{"base":"sink","pastSimple":"sank","pastParticiple":"sunk"},{"base":"sit","pastSimple":"sat","pastParticiple":"sat"},{"base":"sleep","pastSimple":"slept","pastParticiple":"slept"},{"base":"slide","pastSimple":"slid","pastParticiple":"slid"},{"base":"smell","pastSimple":"smelt","pastParticiple":"smelt"},{"base":"sow","pastSimple":"sowed","pastParticiple":"sown/sowed"},{"base":"speak","pastSimple":"spoke","pastParticiple":"spoken"},{"base":"spell","pastSimple":"spelt/spelled","pastParticiple":"spelt/spelled"},{"base":"spend","pastSimple":"spent","pastParticiple":"spent"},{"base":"spill","pastSimple":"spilt/spilled","pastParticiple":"spilt/spilled"},{"base":"spit","pastSimple":"spat","pastParticiple":"spat"},{"base":"spread","pastSimple":"spread","pastParticiple":"spread"},{"base":"stand","pastSimple":"stood","pastParticiple":"stood"},{"base":"steal","pastSimple":"stole","pastParticiple":"stolen"},{"base":"stick","pastSimple":"stuck","pastParticiple":"stuck"},{"base":"sting","pastSimple":"stung","pastParticiple":"stung"},{"base":"stink","pastSimple":"stank","pastParticiple":"stunk"},{"base":"strike","pastSimple":"struck","pastParticiple":"struck"},{"base":"swear","pastSimple":"swore","pastParticiple":"sworn"},{"base":"sweep","pastSimple":"swept","pastParticiple":"swept"},{"base":"swell","pastSimple":"swelled","pastParticiple":"swollen/swelled"},{"base":"swim","pastSimple":"swam","pastParticiple":"swum"},{"base":"swing","pastSimple":"swung","pastParticiple":"swung"},{"base":"take","pastSimple":"took","pastParticiple":"taken"},{"base":"teach","pastSimple":"taught","pastParticiple":"taught"},{"base":"tear","pastSimple":"tore","pastParticiple":"torn"},{"base":"tell","pastSimple":"told","pastParticiple":"told"},{"base":"think","pastSimple":"thought","pastParticiple":"thought"},{"base":"throw","pastSimple":"threw","pastParticiple":"thrown"},{"base":"understand","pastSimple":"understood","pastParticiple":"understood"},{"base":"wake","pastSimple":"woke","pastParticiple":"woken"},{"base":"wear","pastSimple":"wore","pastParticiple":"worn"},{"base":"weep","pastSimple":"wept","pastParticiple":"wept"},{"base":"will","pastSimple":"would","pastParticiple":"…"},{"base":"win","pastSimple":"won","pastParticiple":"won"},{"base":"wind","pastSimple":"wound","pastParticiple":"wound"},{"base":"write","pastSimple":"wrote","pastParticiple":"written"}]}'
    );
    if (innerWidth < 767) {
      document.querySelectorAll(".grid__tense").forEach((e) => {
        e.classList.contains("additional-padding") ||
          e.classList.add("additional-padding");
      });
    }
    n.toString();
    if (
      -1 !=
      [
        "/irregular-verbs.html",
        "/English_cheat-sheet/irregular-verbs.html",
        "kurkuza.github.io/English_cheat-sheet/irregular-verbs.html",
        "https://kurkuza.github.io/English_cheat-sheet/irregular-verbs.html",
      ].indexOf(location.pathname)
    ) {
      let e = document.querySelector(".table");
      function t(t) {
        for (let s = 0; s < t.length; s++) {
          let i = `<tr>\n\t\t\t\t\t\t\t\t\t<td>${t[s].base}</td>\n\t\t\t\t\t\t\t\t\t<td>${t[s].pastSimple}</td>\n\t\t\t\t\t\t\t\t\t<td>${t[s].pastParticiple}</td>\n\t\t\t\t\t\t\t\t</tr>`;
          e.innerHTML += i;
        }
      }
      t(n.verbs);
      document.querySelector("#search").oninput = function () {
        let e = this.value.trim(),
          t = document.querySelectorAll("tbody tr");
        e
          ? t.forEach((t) => {
              -1 == t.innerText.search(e) && t.classList.add("hide");
            })
          : t.forEach((e) => {
              e.classList.remove("hide");
            });
      };
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
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            s && (i(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const s = document.querySelectorAll("[data-spollers]");
        if (s.length > 0) {
          const i = Array.from(s).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          i.length && p(i);
          let a = l(s, "spollers");
          function p(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", n))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", n));
            });
          }
          function o(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function n(s) {
            const i = s.target;
            if (i.closest("[data-spoller]")) {
              const a = i.closest("[data-spoller]"),
                p = a.closest("[data-spollers]"),
                l = !!p.hasAttribute("data-one-spoller");
              p.querySelectorAll("._slide").length ||
                (l && !a.classList.contains("_spoller-active") && r(p),
                a.classList.toggle("_spoller-active"),
                ((s, i = 500) => {
                  s.hidden ? t(s, i) : e(s, i);
                })(a.nextElementSibling, 200)),
                s.preventDefault();
            }
          }
          function r(t) {
            const s = t.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              e(s.nextElementSibling, 500));
          }
          a &&
            a.length &&
            a.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                p(e.itemsArray, e.matchMedia);
              }),
                p(e.itemsArray, e.matchMedia);
            });
        }
      })();
  })();
})();

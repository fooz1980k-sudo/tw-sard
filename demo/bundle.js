var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o10) {
        if (this._$cssResult$ = true, o10 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s4 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s4 && 1 === s4.length;
          e5 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s4, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o10 = 1 === t3.length ? t3[0] : e5.reduce((e6, s4, o11) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s4) + t3[o11 + 1], t3[0]);
      return new n(o10, t3, s);
    };
    S = (s4, o10) => {
      if (e) s4.adoptedStyleSheets = o10.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o10) {
        const o11 = document.createElement("style"), n7 = t.litNonce;
        void 0 !== n7 && o11.setAttribute("nonce", n7), o11.textContent = e5.cssText, s4.appendChild(o11);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s4 of t4.cssRules) e5 += s4.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s4) => t3;
    u = { toAttribute(t3, s4) {
      switch (s4) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s4) {
      let i5 = t3;
      switch (s4) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s4) => !i2(t3, s4);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s4 = b) {
        if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
          const i5 = Symbol(), h5 = this.getPropertyDescriptor(t3, i5, s4);
          void 0 !== h5 && e2(this.prototype, t3, h5);
        }
      }
      static getPropertyDescriptor(t3, s4, i5) {
        const { get: e5, set: r6 } = h(this.prototype, t3) ?? { get() {
          return this[s4];
        }, set(t4) {
          this[s4] = t4;
        } };
        return { get: e5, set(s5) {
          const h5 = e5?.call(this);
          r6?.call(this, s5), this.requestUpdate(t3, h5, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
          for (const i5 of s4) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s4 = litPropertyMetadata.get(t3);
          if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s4] of this.elementProperties) {
          const i5 = this._$Eu(t4, s4);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s4) {
        const i5 = [];
        if (Array.isArray(s4)) {
          const e5 = new Set(s4.flat(1 / 0).reverse());
          for (const s5 of e5) i5.unshift(c(s5));
        } else void 0 !== s4 && i5.push(c(s4));
        return i5;
      }
      static _$Eu(t3, s4) {
        const i5 = s4.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
        for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s4, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s4) {
        const i5 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e5 && true === i5.reflect) {
          const h5 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
          this._$Em = t3, null == h5 ? this.removeAttribute(e5) : this.setAttribute(e5, h5), this._$Em = null;
        }
      }
      _$AK(t3, s4) {
        const i5 = this.constructor, e5 = i5._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i5.getPropertyOptions(e5), h5 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r6 = h5.fromAttribute(s4, t4.type);
          this[e5] = r6 ?? this._$Ej?.get(e5) ?? r6, this._$Em = null;
        }
      }
      requestUpdate(t3, s4, i5, e5 = false, h5) {
        if (void 0 !== t3) {
          const r6 = this.constructor;
          if (false === e5 && (h5 = this[t3]), i5 ??= r6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h5, s4) || i5.useDefault && i5.reflect && h5 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i5)))) return;
          this.C(t3, s4, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s4, { useDefault: i5, reflect: e5, wrapped: h5 }, r6) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h5 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s5] of this._$Ep) this[t5] = s5;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s5, i5] of t4) {
            const { wrapped: t5 } = i5, e5 = this[s5];
            true !== t5 || this._$AL.has(s5) || void 0 === e5 || this.C(s5, void 0, i5, e5);
          }
        }
        let t3 = false;
        const s4 = this._$AL;
        try {
          t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
        } catch (s5) {
          throw t3 = false, this._$EM(), s5;
        }
        t3 && this._$AE(s4);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s4 = t3, e5) {
  if (i5 === E) return i5;
  let h5 = void 0 !== e5 ? s4._$Co?.[e5] : s4._$Cl;
  const o10 = a2(i5) ? void 0 : i5._$litDirective$;
  return h5?.constructor !== o10 && (h5?._$AO?.(false), void 0 === o10 ? h5 = void 0 : (h5 = new o10(t3), h5._$AT(t3, s4, e5)), void 0 !== e5 ? (s4._$Co ??= [])[e5] = h5 : s4._$Cl = h5), void 0 !== h5 && (i5 = M(t3, h5._$AS(t3, i5.values), h5, e5)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s4 = t3.length - 1, e5 = [];
      let n7, l6 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c9 = v;
      for (let i6 = 0; i6 < s4; i6++) {
        const s5 = t3[i6];
        let a7, u7, d5 = -1, f5 = 0;
        for (; f5 < s5.length && (c9.lastIndex = f5, u7 = c9.exec(s5), null !== u7); ) f5 = c9.lastIndex, c9 === v ? "!--" === u7[1] ? c9 = _ : void 0 !== u7[1] ? c9 = m : void 0 !== u7[2] ? (y2.test(u7[2]) && (n7 = RegExp("</" + u7[2], "g")), c9 = p2) : void 0 !== u7[3] && (c9 = p2) : c9 === p2 ? ">" === u7[0] ? (c9 = n7 ?? v, d5 = -1) : void 0 === u7[1] ? d5 = -2 : (d5 = c9.lastIndex - u7[2].length, a7 = u7[1], c9 = void 0 === u7[3] ? p2 : '"' === u7[3] ? $ : g) : c9 === $ || c9 === g ? c9 = p2 : c9 === _ || c9 === m ? c9 = v : (c9 = p2, n7 = void 0);
        const x3 = c9 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l6 += c9 === v ? s5 + r3 : d5 >= 0 ? (e5.push(a7), s5.slice(0, d5) + h2 + s5.slice(d5) + o3 + x3) : s5 + o3 + (-2 === d5 ? i6 : x3);
      }
      return [V(t3, l6 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e5) {
        let r6;
        this.parts = [];
        let l6 = 0, a7 = 0;
        const u7 = t3.length - 1, d5 = this.parts, [f5, v6] = N(t3, i5);
        if (this.el = _S.createElement(f5, e5), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r6 = P.nextNode()) && d5.length < u7; ) {
          if (1 === r6.nodeType) {
            if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v6[a7++], s4 = r6.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i6);
              d5.push({ type: 1, index: l6, name: e6[2], strings: s4, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r6.removeAttribute(t4);
            } else t4.startsWith(o3) && (d5.push({ type: 6, index: l6 }), r6.removeAttribute(t4));
            if (y2.test(r6.tagName)) {
              const t4 = r6.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r6.textContent = s2 ? s2.emptyScript : "";
                for (let s4 = 0; s4 < i6; s4++) r6.append(t4[s4], c3()), P.nextNode(), d5.push({ type: 2, index: ++l6 });
                r6.append(t4[i6], c3());
              }
            }
          } else if (8 === r6.nodeType) if (r6.data === n3) d5.push({ type: 2, index: l6 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d5.push({ type: 7, index: l6 }), t4 += o3.length - 1;
          }
          l6++;
        }
      }
      static createElement(t3, i5) {
        const s4 = l2.createElement("template");
        return s4.innerHTML = t3, s4;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s4 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e5;
        let h5 = P.nextNode(), o10 = 0, n7 = 0, r6 = s4[0];
        for (; void 0 !== r6; ) {
          if (o10 === r6.index) {
            let i6;
            2 === r6.type ? i6 = new k(h5, h5.nextSibling, this, t3) : 1 === r6.type ? i6 = new r6.ctor(h5, r6.name, r6.strings, this, t3) : 6 === r6.type && (i6 = new Z(h5, this, t3)), this._$AV.push(i6), r6 = s4[++n7];
          }
          o10 !== r6?.index && (h5 = P.nextNode(), o10++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i5 = 0;
        for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s4, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s4 } = t3, e5 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
        if (this._$AH?._$AD === e5) this._$AH.p(i5);
        else {
          const t4 = new R(e5, this), s5 = t4.u(this.options);
          t4.p(i5), this.T(s5), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s4, e5 = 0;
        for (const h5 of t3) e5 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e5], s4._$AI(h5), e5++;
        e5 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e5), i5.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s4) {
        for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
          const s5 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s5;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s4, e5, h5) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = h5, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s4, e5) {
        const h5 = this.strings;
        let o10 = false;
        if (void 0 === h5) t3 = M(this, t3, i5, 0), o10 = !a2(t3) || t3 !== this._$AH && t3 !== E, o10 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n7, r6;
          for (t3 = h5[0], n7 = 0; n7 < h5.length - 1; n7++) r6 = M(this, e6[s4 + n7], i5, n7), r6 === E && (r6 = this._$AH[n7]), o10 ||= !a2(r6) || r6 !== this._$AH[n7], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h5[n7 + 1]), this._$AH[n7] = r6;
        }
        o10 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s4, e5, h5) {
        super(t3, i5, s4, e5, h5), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s4 = this._$AH, e5 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h5 = t3 !== A && (s4 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s4), h5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s4) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s4) => {
      const e5 = s4?.renderBefore ?? i5;
      let h5 = e5._$litPart$;
      if (void 0 === h5) {
        const t4 = s4?.renderBefore ?? null;
        e5._$litPart$ = h5 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
      }
      return h5._$AI(t3), h5;
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r6 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o10) => "object" == typeof o10 ? r4(t3, e5, o10) : ((t4, e6, o11) => {
    const r6 = e6.hasOwnProperty(o11);
    return e6.constructor.createProperty(o11, t4), r6 ? Object.getOwnPropertyDescriptor(e6, o11) : void 0;
  })(t3, e5, o10);
}
var o5, r4;
var init_property = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r6) => {
      const { kind: n7, metadata: i5 } = r6;
      let s4 = globalThis.litPropertyMetadata.get(i5);
      if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n7 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n7) {
        const { name: o10 } = r6;
        return { set(r7) {
          const n8 = e5.get.call(this);
          e5.set.call(this, r7), this.requestUpdate(o10, n8, t3, true, r7);
        }, init(e6) {
          return void 0 !== e6 && this.C(o10, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n7) {
        const { name: o10 } = r6;
        return function(r7) {
          const n8 = this[o10];
          e5.call(this, r7), this.requestUpdate(o10, n8, t3, true, r7);
        };
      }
      throw Error("Unsupported decorator location: " + n7);
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}
var init_state = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// ../dist/sard-story.js
var sard_story_exports = {};
__export(sard_story_exports, {
  default: () => a3
});
function b3(e5, t3, n7 = 0.25) {
  if (!("IntersectionObserver" in window)) {
    t3();
    return;
  }
  const l6 = new IntersectionObserver((i5) => {
    i5.some((r6) => r6.isIntersecting) && (l6.disconnect(), t3());
  }, { threshold: n7 });
  l6.observe(e5);
}
var x2, o6, u3, v2, c4, p3, a3;
var init_sard_story = __esm({
  "../dist/sard-story.js"() {
    "use strict";
    init_lit();
    init_decorators();
    x2 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    o6 = (e5) => String(e5 && typeof e5 == "object" ? e5[(document.documentElement.lang || "ar").slice(0, 2)] ?? e5.ar ?? "" : e5 ?? "");
    u3 = (e5) => e5 ? `--tf-custom:${e5}` : "";
    v2 = Object.defineProperty;
    c4 = (e5, t3, n7, l6) => {
      for (var i5 = void 0, r6 = e5.length - 1, d5; r6 >= 0; r6--)
        (d5 = e5[r6]) && (i5 = d5(t3, n7, i5) || i5);
      return i5 && v2(t3, n7, i5), i5;
    };
    p3 = class p4 extends i4 {
      constructor() {
        super(...arguments), this.y = 0, this.seen = false, this.raf = 0, this.onScroll = () => {
          cancelAnimationFrame(this.raf), this.raf = requestAnimationFrame(() => {
            const t3 = this.getBoundingClientRect();
            this.y = (t3.top + t3.height / 2 - innerHeight / 2) / innerHeight;
          });
        };
      }
      connectedCallback() {
        super.connectedCallback(), addEventListener("scroll", this.onScroll, { passive: true });
      }
      disconnectedCallback() {
        super.disconnectedCallback(), removeEventListener("scroll", this.onScroll);
      }
      firstUpdated() {
        b3(this, () => this.seen = true, 0.2), this.onScroll();
      }
      render() {
        const t3 = this.config ?? {}, n7 = Math.max(-1, Math.min(1, this.y));
        return b2`<div class="wrap ${this.seen ? "seen" : ""}" style=${u3(t3.color)}><div class="g ${t3.flip ? "flip" : ""}">
      <div class="media">${t3.image ? b2`<div class="a"><img src=${t3.image} alt="" loading="lazy" style="transform:translateY(${n7 * -40}px)" /></div>` : ""}
        ${t3.image2 ? b2`<div class="b"><img src=${t3.image2} alt="" loading="lazy" style="transform:translateY(${n7 * 50}px)" /></div>` : ""}</div>
      <div class="txt"><span class="eyebrow">${o6(t3.eyebrow) || "\u062D\u0643\u0627\u064A\u062A\u0646\u0627"}</span><h2 class="title">${o6(t3.title) || "\u0628\u062F\u0623\u0646\u0627 \u0628\u0641\u0643\u0631\u0629\u2026 \u0648\u0635\u0627\u0631\u062A \u062A\u064F\u062D\u0641\u0629"}</h2>
        <p class="p">${o6(t3.text)}</p>${o6(t3.button) && t3.link ? b2`<a class="btn ghost" href=${t3.link}>${o6(t3.button)} ←</a>` : b2`<span></span>`}</div></div></div>`;
      }
    };
    p3.styles = [x2, i`
    .g { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px, 6vw, 90px); align-items: center; } .flip .media { order: 2; }
    @media (max-width: 860px) { .g { grid-template-columns: 1fr; } .flip .media { order: 0; } }
    .media { position: relative; min-height: clamp(360px, 48vw, 600px); }
    .a, .b { position: absolute; border-radius: 26px; overflow: hidden; box-shadow: 0 40px 80px -40px #0008; } .a { inset: 0 18% 12% 0; } .b { width: 46%; aspect-ratio: 3/4; inset-inline-end: 0; bottom: 0; border: 8px solid var(--bgc, #faf7f1); }
    .a img, .b img { width: 100%; height: 115%; object-fit: cover; will-change: transform; }
    .txt > * { opacity: 0; transform: translateY(24px); transition: opacity .9s, transform .9s cubic-bezier(.2,.8,.2,1); } .seen .txt > * { opacity: 1; transform: none; }
    .seen .txt > :nth-child(2) { transition-delay: .12s; } .seen .txt > :nth-child(3) { transition-delay: .24s; } .seen .txt > :nth-child(4) { transition-delay: .36s; }
    h2.title { font-size: clamp(30px, 4.6vw, 56px); line-height: 1.2; }
    .p { font-size: clamp(15px, 1.7vw, 18px); line-height: 2.05; opacity: .8; white-space: pre-line; margin: 0 0 28px; }
    .p { border-inline-start: 3px solid var(--tf-accent); padding-inline-start: 20px; }
  `];
    a3 = p3;
    c4([
      n4({ type: Object })
    ], a3.prototype, "config");
    c4([
      r5()
    ], a3.prototype, "y");
    c4([
      r5()
    ], a3.prototype, "seen");
    typeof a3 < "u" && a3.registerSallaComponent("salla-sard-story");
  }
});

// ../dist/sard-timeline.js
var sard_timeline_exports = {};
__export(sard_timeline_exports, {
  default: () => a4
});
var m2, o7, b4, u4, l3, d3, a4;
var init_sard_timeline = __esm({
  "../dist/sard-timeline.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m2 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    o7 = (r6) => String(r6 && typeof r6 == "object" ? r6[(document.documentElement.lang || "ar").slice(0, 2)] ?? r6.ar ?? "" : r6 ?? "");
    b4 = (r6) => r6 ? `--tf-custom:${r6}` : "";
    u4 = Object.defineProperty;
    l3 = (r6, t3, n7, i5) => {
      for (var e5 = void 0, c9 = r6.length - 1, p5; c9 >= 0; c9--)
        (p5 = r6[c9]) && (e5 = p5(t3, n7, e5) || e5);
      return e5 && u4(t3, n7, e5), e5;
    };
    d3 = class d4 extends i4 {
      constructor() {
        super(...arguments), this.prog = 0, this.lit = /* @__PURE__ */ new Set(), this.onScroll = () => {
          var n7;
          const t3 = (n7 = this.renderRoot.querySelector(".tl")) == null ? void 0 : n7.getBoundingClientRect();
          t3 && (this.prog = Math.max(0, Math.min(1, (innerHeight * 0.6 - t3.top) / t3.height)));
        };
      }
      connectedCallback() {
        super.connectedCallback(), addEventListener("scroll", this.onScroll, { passive: true });
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), removeEventListener("scroll", this.onScroll), (t3 = this.io) == null || t3.disconnect();
      }
      updated() {
        var t3;
        (t3 = this.io) == null || t3.disconnect(), this.io = new IntersectionObserver((n7) => {
          const i5 = new Set(this.lit);
          n7.forEach((e5) => e5.isIntersecting && i5.add(Number(e5.target.dataset.i))), i5.size !== this.lit.size && (this.lit = i5);
        }, { rootMargin: "0px 0px -12% 0px" }), this.renderRoot.querySelectorAll(".it").forEach((n7) => this.io.observe(n7)), this.onScroll();
      }
      render() {
        const t3 = this.config ?? {}, n7 = (t3.items ?? []).filter((i5) => o7(i5.title) || o7(i5.year));
        return b2`<div class="wrap" style=${b4(t3.color)}><div style="text-align:center"><span class="eyebrow">🕰️ رحلتنا</span><h2 class="title">${o7(t3.title) || "\u0645\u062D\u0637\u0627\u062A \u0635\u0646\u0639\u062A\u0646\u0627"}</h2>${o7(t3.subtitle) ? b2`<p class="sub">${o7(t3.subtitle)}</p>` : ""}</div>
      <div class="tl"><div class="ln"></div><div class="fl" style="height:${this.prog * 100}%"></div>
        ${n7.map((i5, e5) => b2`<div class="it ${this.lit.has(e5) ? "on" : ""}" data-i=${e5}><span class="dot"></span><div class="cd"><div class="yr">${o7(i5.year)}</div><b>${o7(i5.title)}</b>${o7(i5.text) ? b2`<p>${o7(i5.text)}</p>` : ""}${i5.image ? b2`<img src=${i5.image} alt="" loading="lazy" />` : ""}</div></div>`)}</div></div>`;
      }
    };
    d3.styles = [m2, i`
    .tl { position: relative; padding-block: 10px; }
    .ln, .fl { position: absolute; top: 0; bottom: 0; inset-inline-start: 50%; width: 2px; margin-inline-start: -1px; background: #0000001a; } .fl { bottom: auto; background: var(--tf-gold); }
    .it { position: relative; display: grid; grid-template-columns: 1fr 64px 1fr; align-items: center; margin: 26px 0; }
    .it:nth-child(odd of .it) .cd { grid-column: 1; text-align: end; } .it:nth-child(even of .it) .cd { grid-column: 3; }
    .dot { grid-column: 2; grid-row: 1; justify-self: center; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 2px solid #0000002a; transition: .5s; z-index: 1; }
    .on .dot { background: var(--tf-accent); border-color: var(--tf-accent); box-shadow: 0 0 0 8px color-mix(in srgb, var(--tf-accent) 20%, transparent); }
    .cd { grid-row: 1; opacity: .25; transform: translateY(20px); transition: .8s cubic-bezier(.2,.8,.2,1); } .on .cd { opacity: 1; transform: none; }
    .yr { font-size: clamp(30px, 4vw, 48px); font-weight: 800; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; line-height: 1.1; }
    .cd b { display: block; font-size: 19px; margin: 4px 0; } .cd p { margin: 0; opacity: .7; line-height: 1.8; } .cd img { width: 100%; max-width: 320px; border-radius: 18px; margin-top: 12px; aspect-ratio: 16/10; object-fit: cover; }
    @media (max-width: 720px) { .ln, .fl { inset-inline-start: 14px; } .it { grid-template-columns: 30px 1fr; } .dot { grid-column: 1; justify-self: start; margin-inline-start: 5px; } .it .cd { grid-column: 2 !important; text-align: start !important; } }
  `];
    a4 = d3;
    l3([
      n4({ type: Object })
    ], a4.prototype, "config");
    l3([
      r5()
    ], a4.prototype, "prog");
    l3([
      r5()
    ], a4.prototype, "lit");
    typeof a4 < "u" && a4.registerSallaComponent("salla-sard-timeline");
  }
});

// ../dist/sard-founder.js
var sard_founder_exports = {};
__export(sard_founder_exports, {
  default: () => o8
});
function b5(t3, e5, r6 = 0.25) {
  if (!("IntersectionObserver" in window)) {
    e5();
    return;
  }
  const s4 = new IntersectionObserver((i5) => {
    i5.some((p5) => p5.isIntersecting) && (s4.disconnect(), e5());
  }, { threshold: r6 });
  s4.observe(t3);
}
var h3, n5, u5, v3, f3, c5, o8;
var init_sard_founder = __esm({
  "../dist/sard-founder.js"() {
    "use strict";
    init_lit();
    init_decorators();
    h3 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    n5 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    u5 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    v3 = Object.defineProperty;
    f3 = (t3, e5, r6, s4) => {
      for (var i5 = void 0, p5 = t3.length - 1, d5; p5 >= 0; p5--)
        (d5 = t3[p5]) && (i5 = d5(e5, r6, i5) || i5);
      return i5 && v3(e5, r6, i5), i5;
    };
    c5 = class c6 extends i4 {
      constructor() {
        super(...arguments), this.seen = false;
      }
      firstUpdated() {
        b5(this, () => this.seen = true, 0.35);
      }
      render() {
        const e5 = this.config ?? {}, r6 = (n5(e5.quote) || "\u0643\u0644 \u0642\u0637\u0639\u0629 \u0646\u0631\u0633\u0644\u0647\u0627 \u062A\u062D\u0645\u0644 \u062C\u0632\u0621 \u0645\u0646\u0627.").split(/\s+/);
        return b2`<div class="wrap" style=${u5(e5.color)}><div class="box dark ${this.seen ? "seen" : ""}">
      ${e5.image ? b2`<div class="ph"><img src=${e5.image} alt=${n5(e5.name)} loading="lazy" /></div>` : b2`<span></span>`}
      <div><span class="qm" aria-hidden="true">“</span><q>${r6.map((s4, i5) => b2`<span style="transition-delay:${i5 * 0.05}s">${s4} </span>`)}</q>
        ${n5(e5.name) ? b2`<div class="sig" aria-hidden="true">${n5(e5.name)}</div><div class="nm">${n5(e5.name)}</div>` : ""}${n5(e5.role) ? b2`<div class="rl">${n5(e5.role)}</div>` : ""}</div></div></div>`;
      }
    };
    c5.styles = [h3, i`
    .box { display: grid; grid-template-columns: 300px 1fr; gap: clamp(24px, 5vw, 70px); align-items: center; padding: clamp(28px, 5vw, 64px); border-radius: 30px; position: relative; overflow: hidden; }
    @media (max-width: 760px) { .box { grid-template-columns: 1fr; text-align: center; } .ph { margin: 0 auto; } }
    .ph { width: min(300px, 70vw); aspect-ratio: 4/5; border-radius: 160px 160px 24px 24px; overflow: hidden; border: 1px solid #ffffff2a; padding: 8px; }
    .ph img { width: 100%; height: 100%; object-fit: cover; border-radius: 150px 150px 18px 18px; filter: grayscale(.25); }
    .qm { font-size: 120px; line-height: .6; color: var(--tf-accent); font-family: Georgia, serif; height: 50px; display: block; }
    q { quotes: none; display: block; font-size: clamp(19px, 2.6vw, 30px); line-height: 1.75; font-weight: 500; }
    q span { opacity: .08; transition: opacity .6s; } .seen q span { opacity: 1; }
    .sig { margin-top: 26px; font-family: 'Brush Script MT', 'Segoe Script', cursive; font-size: 34px; color: var(--tf-accent); }
    .nm { font-weight: 800; } .rl { opacity: .6; font-size: 14px; }
  `];
    o8 = c5;
    f3([
      n4({ type: Object })
    ], o8.prototype, "config");
    f3([
      r5()
    ], o8.prototype, "seen");
    typeof o8 < "u" && o8.registerSallaComponent("salla-sard-founder");
  }
});

// ../dist/sard-values.js
var sard_values_exports = {};
__export(sard_values_exports, {
  default: () => a5
});
var m3, n6, b6, g2, v4, c7, a5;
var init_sard_values = __esm({
  "../dist/sard-values.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m3 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    n6 = (e5) => String(e5 && typeof e5 == "object" ? e5[(document.documentElement.lang || "ar").slice(0, 2)] ?? e5.ar ?? "" : e5 ?? "");
    b6 = (e5) => e5 ? `--tf-custom:${e5}` : "";
    g2 = Object.defineProperty;
    v4 = (e5, t3, i5, r6) => {
      for (var o10 = void 0, p5 = e5.length - 1, l6; p5 >= 0; p5--)
        (l6 = e5[p5]) && (o10 = l6(t3, i5, o10) || o10);
      return o10 && g2(t3, i5, o10), o10;
    };
    c7 = class c8 extends i4 {
      mv(t3) {
        const i5 = t3.currentTarget, r6 = i5.getBoundingClientRect();
        i5.style.setProperty("--mx", `${t3.clientX - r6.left}px`), i5.style.setProperty("--my", `${t3.clientY - r6.top}px`);
      }
      render() {
        const t3 = this.config ?? {}, i5 = (t3.items ?? []).filter((r6) => n6(r6.title));
        return b2`<div class="${t3.dark ? "dark dk" : ""}"><div class="wrap" style=${b6(t3.color)}><span class="eyebrow">💎 قيمنا</span><h2 class="title">${n6(t3.title) || "\u0627\u0644\u0644\u064A \u064A\u0645\u064A\u0632\u0646\u0627"}</h2>${n6(t3.subtitle) ? b2`<p class="sub">${n6(t3.subtitle)}</p>` : ""}
      <div class="grid">${i5.map((r6, o10) => b2`<div class="v" @pointermove=${this.mv}><span class="n">${String(o10 + 1).padStart(2, "0")}</span><span class="e">${r6.emoji || "\u2726"}</span><b>${n6(r6.title)}</b>${n6(r6.text) ? b2`<p>${n6(r6.text)}</p>` : ""}</div>`)}</div></div></div>`;
      }
    };
    c7.styles = [m3, i`
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
    .v { position: relative; padding: 30px 26px; border-radius: 24px; background: #fff; border: 1px solid #0000000f; overflow: hidden; transition: transform .4s, box-shadow .4s; }
    .dk .v { background: #ffffff08; border-color: #ffffff14; }
    .v::before { content: ''; position: absolute; inset: 0; background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--tf-accent) 22%, transparent), transparent 60%); opacity: 0; transition: opacity .4s; }
    .v:hover { transform: translateY(-6px); box-shadow: 0 30px 50px -30px #0006; } .v:hover::before { opacity: 1; }
    .n { position: absolute; top: 18px; inset-inline-end: 22px; font-size: 52px; font-weight: 800; opacity: .07; }
    .e { font-size: 34px; display: block; margin-bottom: 14px; } b { font-size: 19px; display: block; margin-bottom: 8px; position: relative; } p { margin: 0; opacity: .7; line-height: 1.85; position: relative; }
  `];
    a5 = c7;
    v4([
      n4({ type: Object })
    ], a5.prototype, "config");
    typeof a5 < "u" && a5.registerSallaComponent("salla-sard-values");
  }
});

// ../dist/sard-process.js
var sard_process_exports = {};
__export(sard_process_exports, {
  default: () => o9
});
function b7(t3, e5, r6 = 0.25) {
  if (!("IntersectionObserver" in window)) {
    e5();
    return;
  }
  const n7 = new IntersectionObserver((i5) => {
    i5.some((s4) => s4.isIntersecting) && (n7.disconnect(), e5());
  }, { threshold: r6 });
  n7.observe(t3);
}
var h4, a6, u6, v5, f4, l4, o9;
var init_sard_process = __esm({
  "../dist/sard-process.js"() {
    "use strict";
    init_lit();
    init_decorators();
    h4 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    a6 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    u6 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    v5 = Object.defineProperty;
    f4 = (t3, e5, r6, n7) => {
      for (var i5 = void 0, s4 = t3.length - 1, c9; s4 >= 0; s4--)
        (c9 = t3[s4]) && (i5 = c9(e5, r6, i5) || i5);
      return i5 && v5(e5, r6, i5), i5;
    };
    l4 = class l5 extends i4 {
      constructor() {
        super(...arguments), this.seen = false;
      }
      firstUpdated() {
        b7(this, () => this.seen = true, 0.3);
      }
      render() {
        const e5 = this.config ?? {}, r6 = (e5.steps ?? []).filter((n7) => a6(n7.title)).slice(0, 6);
        return b2`<div class="wrap ${this.seen ? "seen" : ""}" style=${u6(e5.color)}><div style="text-align:center"><span class="eyebrow">🪡 كيف نصنعها</span><h2 class="title">${a6(e5.title) || "\u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0644\u064A\u0646 \u0628\u0627\u0628 \u0628\u064A\u062A\u0643"}</h2>${a6(e5.subtitle) ? b2`<p class="sub">${a6(e5.subtitle)}</p>` : ""}</div>
      <div class="row" style="--n:${r6.length || 1}"><div class="ln"><i></i></div>
        ${r6.map((n7, i5) => b2`<div class="st" style="transition-delay:${0.25 * i5}s"><div class="ic">${n7.emoji || "\u2726"}<small>${i5 + 1}</small></div><div><b>${a6(n7.title)}</b>${a6(n7.text) ? b2`<p>${a6(n7.text)}</p>` : ""}</div></div>`)}</div></div>`;
      }
    };
    l4.styles = [h4, i`
    .row { display: grid; grid-template-columns: repeat(var(--n), 1fr); gap: 18px; position: relative; text-align: center; }
    .ln { position: absolute; top: 40px; inset-inline: calc(50% / var(--n)); height: 2px; background: #00000014; } .ln i { display: block; height: 100%; width: 0; background: var(--tf-gold); transition: width 1.8s cubic-bezier(.2,.8,.2,1); }
    .seen .ln i { width: 100%; }
    .st { position: relative; opacity: 0; transform: translateY(18px); transition: .7s; } .seen .st { opacity: 1; transform: none; }
    .ic { width: 80px; height: 80px; margin: 0 auto 16px; border-radius: 50%; display: grid; place-items: center; font-size: 32px; background: #fff; border: 1px solid #0000001a; box-shadow: 0 16px 34px -20px #0006; position: relative; }
    .ic small { position: absolute; top: -4px; inset-inline-end: -4px; width: 28px; height: 28px; border-radius: 50%; background: var(--tf-accent); color: #fff; font-size: 13px; font-weight: 800; display: grid; place-items: center; }
    b { display: block; font-size: 17px; margin-bottom: 6px; } p { margin: 0 auto; opacity: .7; line-height: 1.8; max-width: 26ch; font-size: 14px; }
    @media (max-width: 760px) { .row { grid-template-columns: 1fr; text-align: start; gap: 22px; } .ln { inset-inline-start: 40px; inset-inline-end: auto; top: 40px; bottom: 40px; width: 2px; height: auto; } .ln i { width: 100% !important; height: 0; transition: height 1.8s; } .seen .ln i { height: 100%; }
      .st { display: grid; grid-template-columns: 80px 1fr; gap: 16px; align-items: center; } .ic { margin: 0; } p { margin: 0; } }
  `];
    o9 = l4;
    f4([
      n4({ type: Object })
    ], o9.prototype, "config");
    f4([
      r5()
    ], o9.prototype, "seen");
    typeof o9 < "u" && o9.registerSallaComponent("salla-sard-process");
  }
});

// entry.js
init_lit();
i4.registerSallaComponent = function(n7) {
  if (!customElements.get(n7)) customElements.define(n7, this);
};
await Promise.resolve().then(() => (init_sard_story(), sard_story_exports));
await Promise.resolve().then(() => (init_sard_timeline(), sard_timeline_exports));
await Promise.resolve().then(() => (init_sard_founder(), sard_founder_exports));
await Promise.resolve().then(() => (init_sard_values(), sard_values_exports));
await Promise.resolve().then(() => (init_sard_process(), sard_process_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/

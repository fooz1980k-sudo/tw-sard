import { css as g, LitElement as u, html as c } from "lit";
import { property as m, state as h } from "lit/decorators.js";
const x = g`
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
`, f = () => window.Salla, b = () => {
  var i, t, r, e, n;
  try {
    const a = ((t = (i = f()) == null ? void 0 : i.lang) == null ? void 0 : t.locale) ?? ((n = (e = (r = f()) == null ? void 0 : r.config) == null ? void 0 : e.get) == null ? void 0 : n.call(e, "user.language_code"));
    if (typeof a == "string" && a) return a.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, o = (i) => {
  if (i == null) return "";
  if (typeof i == "string") {
    const t = i.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return o(JSON.parse(t));
      } catch {
      }
    return i;
  }
  if (typeof i == "number" || typeof i == "boolean") return String(i);
  if (typeof i == "object") {
    const t = i, r = t[b()] ?? t.ar ?? t.en ?? Object.values(t).find((e) => typeof e == "string" && e);
    return typeof r == "string" ? r : "";
  }
  return "";
}, y = (i) => i ? `--tf-custom:${i}` : "";
var v = Object.defineProperty, l = (i, t, r, e) => {
  for (var n = void 0, a = i.length - 1, p; a >= 0; a--)
    (p = i[a]) && (n = p(t, r, n) || n);
  return n && v(t, r, n), n;
};
const d = class d extends u {
  constructor() {
    super(...arguments), this.prog = 0, this.lit = /* @__PURE__ */ new Set(), this.onScroll = () => {
      var r;
      const t = (r = this.renderRoot.querySelector(".tl")) == null ? void 0 : r.getBoundingClientRect();
      t && (this.prog = Math.max(0, Math.min(1, (innerHeight * 0.6 - t.top) / t.height)));
    };
  }
  connectedCallback() {
    super.connectedCallback(), addEventListener("scroll", this.onScroll, { passive: !0 });
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), removeEventListener("scroll", this.onScroll), (t = this.io) == null || t.disconnect();
  }
  updated() {
    var t;
    (t = this.io) == null || t.disconnect(), this.io = new IntersectionObserver((r) => {
      const e = new Set(this.lit);
      r.forEach((n) => n.isIntersecting && e.add(Number(n.target.dataset.i))), e.size !== this.lit.size && (this.lit = e);
    }, { rootMargin: "0px 0px -12% 0px" }), this.renderRoot.querySelectorAll(".it").forEach((r) => this.io.observe(r)), this.onScroll();
  }
  render() {
    const t = this.config ?? {}, r = (t.items ?? []).filter((e) => o(e.title) || o(e.year));
    return c`<div class="wrap" style=${y(t.color)}><div style="text-align:center"><span class="eyebrow">🕰️ رحلتنا</span><h2 class="title">${o(t.title) || "محطات صنعتنا"}</h2>${o(t.subtitle) ? c`<p class="sub">${o(t.subtitle)}</p>` : ""}</div>
      <div class="tl"><div class="ln"></div><div class="fl" style="height:${this.prog * 100}%"></div>
        ${r.map((e, n) => c`<div class="it ${this.lit.has(n) ? "on" : ""}" data-i=${n}><span class="dot"></span><div class="cd"><div class="yr">${o(e.year)}</div><b>${o(e.title)}</b>${o(e.text) ? c`<p>${o(e.text)}</p>` : ""}${e.image ? c`<img src=${e.image} alt="" loading="lazy" />` : ""}</div></div>`)}</div></div>`;
  }
};
d.styles = [x, g`
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
let s = d;
l([
  m({ type: Object })
], s.prototype, "config");
l([
  h()
], s.prototype, "prog");
l([
  h()
], s.prototype, "lit");
typeof s < "u" && s.registerSallaComponent("salla-sard-timeline");
export {
  s as default
};

import { css as g, LitElement as x, html as s } from "lit";
import { property as h, state as f } from "lit/decorators.js";
const m = g`
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
`, o = (r) => String(r && typeof r == "object" ? r[(document.documentElement.lang || "ar").slice(0, 2)] ?? r.ar ?? "" : r ?? ""), b = (r) => r ? `--tf-custom:${r}` : "";
var u = Object.defineProperty, l = (r, t, n, i) => {
  for (var e = void 0, c = r.length - 1, p; c >= 0; c--)
    (p = r[c]) && (e = p(t, n, e) || e);
  return e && u(t, n, e), e;
};
const d = class d extends x {
  constructor() {
    super(...arguments), this.prog = 0, this.lit = /* @__PURE__ */ new Set(), this.onScroll = () => {
      var n;
      const t = (n = this.renderRoot.querySelector(".tl")) == null ? void 0 : n.getBoundingClientRect();
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
    (t = this.io) == null || t.disconnect(), this.io = new IntersectionObserver((n) => {
      const i = new Set(this.lit);
      n.forEach((e) => e.isIntersecting && i.add(Number(e.target.dataset.i))), i.size !== this.lit.size && (this.lit = i);
    }, { rootMargin: "0px 0px -12% 0px" }), this.renderRoot.querySelectorAll(".it").forEach((n) => this.io.observe(n)), this.onScroll();
  }
  render() {
    const t = this.config ?? {}, n = (t.items ?? []).filter((i) => o(i.title) || o(i.year));
    return s`<div class="wrap" style=${b(t.color)}><div style="text-align:center"><span class="eyebrow">🕰️ رحلتنا</span><h2 class="title">${o(t.title) || "محطات صنعتنا"}</h2>${o(t.subtitle) ? s`<p class="sub">${o(t.subtitle)}</p>` : ""}</div>
      <div class="tl"><div class="ln"></div><div class="fl" style="height:${this.prog * 100}%"></div>
        ${n.map((i, e) => s`<div class="it ${this.lit.has(e) ? "on" : ""}" data-i=${e}><span class="dot"></span><div class="cd"><div class="yr">${o(i.year)}</div><b>${o(i.title)}</b>${o(i.text) ? s`<p>${o(i.text)}</p>` : ""}${i.image ? s`<img src=${i.image} alt="" loading="lazy" />` : ""}</div></div>`)}</div></div>`;
  }
};
d.styles = [m, g`
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
let a = d;
l([
  h({ type: Object })
], a.prototype, "config");
l([
  f()
], a.prototype, "prog");
l([
  f()
], a.prototype, "lit");
typeof a < "u" && a.registerSallaComponent("salla-sard-timeline");
export {
  a as default
};

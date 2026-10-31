import { css as f, LitElement as h, html as s } from "lit";
import { property as g, state as m } from "lit/decorators.js";
const x = f`
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
`, o = (e) => String(e && typeof e == "object" ? e[(document.documentElement.lang || "ar").slice(0, 2)] ?? e.ar ?? "" : e ?? "");
function b(e, t, n = 0.25) {
  if (!("IntersectionObserver" in window)) {
    t();
    return;
  }
  const l = new IntersectionObserver((i) => {
    i.some((r) => r.isIntersecting) && (l.disconnect(), t());
  }, { threshold: n });
  l.observe(e);
}
const u = (e) => e ? `--tf-custom:${e}` : "";
var v = Object.defineProperty, c = (e, t, n, l) => {
  for (var i = void 0, r = e.length - 1, d; r >= 0; r--)
    (d = e[r]) && (i = d(t, n, i) || i);
  return i && v(t, n, i), i;
};
const p = class p extends h {
  constructor() {
    super(...arguments), this.y = 0, this.seen = !1, this.raf = 0, this.onScroll = () => {
      cancelAnimationFrame(this.raf), this.raf = requestAnimationFrame(() => {
        const t = this.getBoundingClientRect();
        this.y = (t.top + t.height / 2 - innerHeight / 2) / innerHeight;
      });
    };
  }
  connectedCallback() {
    super.connectedCallback(), addEventListener("scroll", this.onScroll, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), removeEventListener("scroll", this.onScroll);
  }
  firstUpdated() {
    b(this, () => this.seen = !0, 0.2), this.onScroll();
  }
  render() {
    const t = this.config ?? {}, n = Math.max(-1, Math.min(1, this.y));
    return s`<div class="wrap ${this.seen ? "seen" : ""}" style=${u(t.color)}><div class="g ${t.flip ? "flip" : ""}">
      <div class="media">${t.image ? s`<div class="a"><img src=${t.image} alt="" loading="lazy" style="transform:translateY(${n * -40}px)" /></div>` : ""}
        ${t.image2 ? s`<div class="b"><img src=${t.image2} alt="" loading="lazy" style="transform:translateY(${n * 50}px)" /></div>` : ""}</div>
      <div class="txt"><span class="eyebrow">${o(t.eyebrow) || "حكايتنا"}</span><h2 class="title">${o(t.title) || "بدأنا بفكرة… وصارت تُحفة"}</h2>
        <p class="p">${o(t.text)}</p>${o(t.button) && t.link ? s`<a class="btn ghost" href=${t.link}>${o(t.button)} ←</a>` : s`<span></span>`}</div></div></div>`;
  }
};
p.styles = [x, f`
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
let a = p;
c([
  g({ type: Object })
], a.prototype, "config");
c([
  m()
], a.prototype, "y");
c([
  m()
], a.prototype, "seen");
typeof a < "u" && a.registerSallaComponent("salla-sard-story");
export {
  a as default
};

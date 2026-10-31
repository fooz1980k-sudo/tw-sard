import { css as l, LitElement as m, html as a } from "lit";
import { property as x, state as g } from "lit/decorators.js";
const h = l`
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
`, n = (t) => String(t && typeof t == "object" ? t[(document.documentElement.lang || "ar").slice(0, 2)] ?? t.ar ?? "" : t ?? "");
function b(t, e, r = 0.25) {
  if (!("IntersectionObserver" in window)) {
    e();
    return;
  }
  const s = new IntersectionObserver((i) => {
    i.some((p) => p.isIntersecting) && (s.disconnect(), e());
  }, { threshold: r });
  s.observe(t);
}
const u = (t) => t ? `--tf-custom:${t}` : "";
var v = Object.defineProperty, f = (t, e, r, s) => {
  for (var i = void 0, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (i = d(e, r, i) || i);
  return i && v(e, r, i), i;
};
const c = class c extends m {
  constructor() {
    super(...arguments), this.seen = !1;
  }
  firstUpdated() {
    b(this, () => this.seen = !0, 0.35);
  }
  render() {
    const e = this.config ?? {}, r = (n(e.quote) || "كل قطعة نرسلها تحمل جزء منا.").split(/\s+/);
    return a`<div class="wrap" style=${u(e.color)}><div class="box dark ${this.seen ? "seen" : ""}">
      ${e.image ? a`<div class="ph"><img src=${e.image} alt=${n(e.name)} loading="lazy" /></div>` : a`<span></span>`}
      <div><span class="qm" aria-hidden="true">“</span><q>${r.map((s, i) => a`<span style="transition-delay:${i * 0.05}s">${s} </span>`)}</q>
        ${n(e.name) ? a`<div class="sig" aria-hidden="true">${n(e.name)}</div><div class="nm">${n(e.name)}</div>` : ""}${n(e.role) ? a`<div class="rl">${n(e.role)}</div>` : ""}</div></div></div>`;
  }
};
c.styles = [h, l`
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
let o = c;
f([
  x({ type: Object })
], o.prototype, "config");
f([
  g()
], o.prototype, "seen");
typeof o < "u" && o.registerSallaComponent("salla-sard-founder");
export {
  o as default
};
